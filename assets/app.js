/* IFC study engine v2 — renders any chapter object from data/chN.js.
   Backward compatible with v1 chapters (no drills / highYield / gist / quiz meta). */
(function () {
  'use strict';
  const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };
  const KEYS = ['A', 'B', 'C', 'D', 'E', 'F'];
  const TYPE_LABEL = { calc: 'Calculation', scenario: 'Scenario', except: 'EXCEPT / NOT', concept: 'Concept', recall: 'Recall' };
  const TYPE_ORDER = ['calc', 'scenario', 'except', 'concept', 'recall'];

  /* ---------- utilities (shared with exam.js via window.IFCUtil) ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } }
  };
  function hash(s) { let h = 5381; s = String(s); for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
  function shuffled(a) { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }
  const stripTags = h => String(h).replace(/<[^>]*>/g, '');
  const POS_RE = /\b(all|none|both|neither) of (the )?(above|these|them)\b|\b[A-D] and [A-D]\b|\b(options?|answers?|choices?) [A-D]\b/i;
  const canShuffleOpts = q => !q[1].some(o => POS_RE.test(stripTags(o)));
  const qmeta = q => (q[4] && typeof q[4] === 'object') ? q[4] : null;
  function saveProg(n, patch) { const k = 'ifc:v2:prog:' + n; store.set(k, Object.assign(store.get(k, {}), patch, { t: Date.now() })); }
  function fmtNum(v, unit, dp) {
    dp = dp == null ? 2 : dp;
    const s = Math.abs(Number(v)).toLocaleString('en-CA', { minimumFractionDigits: dp, maximumFractionDigits: dp });
    const neg = Number(v) < 0 ? '−' : '';
    switch (unit) {
      case '$': return neg + '$' + s;
      case '%': return neg + s + '%';
      case 'units': return neg + s + ' units';
      case 'x': return neg + s + '×';
      case 'years': return neg + s + ' years';
      case 'days': return neg + s + ' days';
      default: return neg + s;
    }
  }
  function parseNum(str) {
    let t = String(str).trim().toLowerCase().replace(/[\s,$]/g, '').replace(/−/g, '-');
    t = t.replace(/(%|units?|years?|yrs?|days?|x|×)$/, '');
    if (/^\(.*\)$/.test(t)) t = '-' + t.slice(1, -1);
    if (t === '' || t === '-' || isNaN(Number(t))) return null;
    return Number(t);
  }
  window.IFCUtil = { el, store, hash, shuffled, canShuffleOpts, qmeta, TYPE_LABEL, TYPE_ORDER, KEYS, saveProg, fmtNum };

  /* ---------- building blocks ---------- */
  function table(spec) {
    const w = el('div', 'tblwrap'), t = el('table');
    if (spec.head) {
      const th = el('thead'), tr = el('tr');
      spec.head.forEach(h => tr.appendChild(el('th', null, h)));
      th.appendChild(tr); t.appendChild(th);
    }
    const tb = el('tbody');
    spec.rows.forEach(r => {
      const tr = el('tr');
      r.forEach((c, i) => tr.appendChild(el('td', (spec.numCol != null && i === spec.numCol) ? 'num' : null, c)));
      tb.appendChild(tr);
    });
    t.appendChild(tb); w.appendChild(t); return w;
  }
  function flagBox(f) {
    const d = el('div', 'flag' + (/discrepancy/i.test(f.label || '') ? ' disc' : ''));
    d.appendChild(el('span', 'lbl', f.label || 'Watch this'));
    d.appendChild(el('p', null, f.text));
    return d;
  }
  function pts(list) { const u = el('ul', 'pts'); list.forEach(p => u.appendChild(el('li', null, p))); return u; }
  function formulaBox(f) {
    const d = el('div', 'formula');
    d.appendChild(el('div', 'f-name', f.name));
    d.appendChild(el('div', 'f-expr', f.expr));
    if (f.vars && f.vars.length) {
      const dl = el('dl', 'f-vars');
      f.vars.forEach(v => { dl.appendChild(el('dt', null, v[0])); dl.appendChild(el('dd', null, v[1])); });
      d.appendChild(dl);
    }
    if (f.example) { const ex = el('div', 'f-ex'); ex.appendChild(el('span', 'lbl', 'Worked example')); ex.appendChild(el('div', null, f.example)); d.appendChild(ex); }
    if (f.note) d.appendChild(el('p', 'f-note', f.note));
    return d;
  }
  function stepsBox(s) {
    const w = el('div', 'stepsbox');
    if (s.title) w.appendChild(el('h3', null, s.title));
    const ol = el('ol', 'steps'); s.items.forEach(x => ol.appendChild(el('li', null, x)));
    w.appendChild(ol); return w;
  }
  function sec(id, title, sub) {
    const s = el('section'); s.id = id;
    s.appendChild(el('h2', null, title));
    if (sub) s.appendChild(el('p', 'sub', sub));
    return s;
  }

  /* ---------- sections ---------- */
  function renderMethod(ch, root) {
    if (!ch.method) return;
    const s = sec('method', ch.method.title || 'How to study this', ch.method.sub || 'The faster loop');
    const m = el('div', 'method'), ol = el('ol');
    ch.method.steps.forEach(x => ol.appendChild(el('li', null, x)));
    m.appendChild(ol); s.appendChild(m);
    if (ch.method.flag) s.appendChild(flagBox(ch.method.flag));
    root.appendChild(s);
  }

  function renderHighYield(ch, root) {
    if (!ch.highYield || !ch.highYield.length) return;
    const s = sec('hy', 'Most likely to be tested', 'Ranked by exam likelihood. If you have ten minutes, read this list.');
    const ol = el('ol', 'hy');
    ch.highYield.forEach(x => ol.appendChild(el('li', null, x)));
    s.appendChild(ol); root.appendChild(s);
  }

  function renderCore(ch, root) {
    const s = sec('core', 'Core — the must-know', ch.coreSub || 'Mapped to the learning objectives');
    const objs = ch.objectives || [];
    if (objs.length > 1) {
      const tools = el('div', 'lotools');
      const ex = el('button', 'sm', 'Expand all'), co = el('button', 'sm', 'Collapse all');
      ex.addEventListener('click', () => s.querySelectorAll('details.lo').forEach(d => { d.open = true; }));
      co.addEventListener('click', () => s.querySelectorAll('details.lo').forEach(d => { d.open = false; }));
      tools.append(ex, co); s.appendChild(tools);
    }
    objs.forEach(o => {
      const d = el('details', 'lo'); d.open = true;
      const sm = el('summary');
      sm.innerHTML = `<span class="lo-tag">${o.tag}</span><h4>${o.title}</h4>` + (o.gist ? `<p class="gist">${o.gist}</p>` : '');
      d.appendChild(sm);
      const body = el('div', 'lo-body');
      (o.blocks || []).forEach(b => {
        if (b.points) body.appendChild(pts(b.points));
        else if (b.flag) body.appendChild(flagBox(b.flag));
        else if (b.table) { if (b.table.caption) body.appendChild(el('h3', null, b.table.caption)); body.appendChild(table(b.table)); }
        else if (b.formula) body.appendChild(formulaBox(b.formula));
        else if (b.steps) body.appendChild(stepsBox(b.steps));
      });
      d.appendChild(body); s.appendChild(d);
    });
    root.appendChild(s);
  }

  function renderNumbers(ch, root) {
    if (!ch.numbers || !ch.numbers.length) return;
    const s = sec('numbers', 'Every number and date', 'If a figure appears in this chapter, it is here');
    s.appendChild(table({ head: ['Figure', 'What it is'], rows: ch.numbers, numCol: 0 }));
    root.appendChild(s);
  }

  function renderTraps(ch, root) {
    if (!ch.traps || !ch.traps.length) return;
    const s = sec('traps', 'Confusion traps', 'Pairs the exam swaps to build distractors');
    ch.traps.forEach(t => {
      const d = el('div', 'trap');
      d.appendChild(el('div', null, `<div class="t">${t[0]}</div><p>${t[1]}</p>`));
      d.appendChild(el('div', null, `<div class="t">${t[2]}</div><p>${t[3]}</p>`));
      s.appendChild(d);
    });
    root.appendChild(s);
  }

  /* ---------- calculation drills ---------- */
  function renderDrills(ch, root) {
    const D = ch.drills; if (!D || !D.length) return;
    const key = 'ifc:v2:drills:' + ch.n;
    const st = store.get(key, { s: {} }); if (!st.s) st.s = {};
    const s = sec('drills', 'Calculation drills', `${D.length} problems. Type your answer and check it. Hints and full workings are there when you need them.`);
    const top = el('div', 'dtop'); const prog = el('span', 'counter'); const rs = el('button', 'sm', 'Reset drills');
    top.append(prog, rs); s.appendChild(top);
    const list = el('div', 'drills'); s.appendChild(list);
    const H = D.map(d => hash(d.q));
    const upd = () => { const n = H.filter(h => st.s[h]).length; prog.innerHTML = `Solved <b>${n}</b> / ${D.length}`; saveProg(ch.n, { drills: D.length, solved: n }); };

    function drillEl(dr, i) {
      const h = H[i], unit = dr.unit || '', dp = dr.dp == null ? 2 : dr.dp;
      const card = el('div', 'drill' + (st.s[h] ? ' solved' : ''));
      const fromBook = dr.src && dr.src !== 'variant';
      card.appendChild(el('div', 'dn', `Drill ${i + 1}<span class="src${fromBook ? ' book' : ''}">${fromBook ? 'Textbook example' : 'New numbers'}</span>`));
      card.appendChild(el('p', 'dq', dr.q));
      const row = el('div', 'drow');
      const box = el('label', 'din');
      if (unit === '$') box.appendChild(el('span', 'pre', '$'));
      const inp = el('input'); inp.type = 'text'; inp.inputMode = 'decimal'; inp.autocomplete = 'off'; inp.spellcheck = false;
      inp.setAttribute('aria-label', `Answer to drill ${i + 1}`); inp.placeholder = 'Your answer';
      box.appendChild(inp);
      const suf = { '%': '%', units: 'units', x: '×', years: 'years', days: 'days' }[unit];
      if (suf) box.appendChild(el('span', 'suf', suf));
      const chk = el('button', 'primary', 'Check'), hb = el('button', null, 'Hint'), sb = el('button', null, 'Show working');
      row.append(box, chk, hb, sb); card.appendChild(row);
      const fb = el('div', 'dfb'); fb.hidden = true;
      const hint = el('div', 'dhint', `<b>Hint.</b> ${dr.hint || 'Write out the formula first, then substitute.'}`); hint.hidden = true;
      const sol = el('div', 'dsol'); sol.hidden = true;
      const ol = el('ol'); (dr.steps || []).forEach(x => ol.appendChild(el('li', null, x)));
      sol.appendChild(ol); sol.appendChild(el('p', 'dans', `Answer: <b>${fmtNum(dr.a, unit, dp)}</b>`));
      card.append(fb, hint, sol);
      let tries = 0;
      function check() {
        const v = parseNum(inp.value);
        fb.hidden = false; fb.className = 'dfb';
        if (v == null) { fb.textContent = 'Enter a number.'; return; }
        const tol = (dr.tol == null ? 0.01 : dr.tol) + 1e-9;
        let ok = Math.abs(v - dr.a) <= tol, note = '';
        if (!ok && unit === '%' && Math.abs(v * 100 - dr.a) <= tol) { ok = true; note = ' (You typed a decimal; answer in percent on the exam.)'; }
        if (ok) {
          fb.classList.add('good'); fb.textContent = `Correct: ${fmtNum(dr.a, unit, dp)}.${note}`;
          sol.hidden = false; card.classList.add('solved'); st.s[h] = 1; store.set(key, st); upd();
        } else {
          tries++; fb.classList.add('bad');
          fb.textContent = tries >= 2 ? 'Still not it. Check the hint, or show the working and redo it.' : 'Not quite. Try again or take the hint.';
          if (tries >= 2) sb.classList.add('nudge');
        }
      }
      chk.addEventListener('click', check);
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); check(); } });
      hb.addEventListener('click', () => { hint.hidden = !hint.hidden; });
      sb.addEventListener('click', () => { sol.hidden = !sol.hidden; sb.textContent = sol.hidden ? 'Show working' : 'Hide working'; });
      return card;
    }
    D.forEach((d, i) => list.appendChild(drillEl(d, i)));
    rs.addEventListener('click', () => { st.s = {}; store.set(key, st); list.innerHTML = ''; D.forEach((d, i) => list.appendChild(drillEl(d, i))); upd(); });
    upd(); root.appendChild(s);
  }

  /* ---------- flashcards with Know / Again piles ---------- */
  function renderCards(ch, root) {
    const C = ch.cards; if (!C || !C.length) return;
    const key = 'ifc:v2:cards:' + ch.n;
    const st = store.get(key, { k: {}, a: {} }); st.k = st.k || {}; st.a = st.a || {};
    const H = C.map(c => hash(c[0])), ALL = C.map((_, i) => i);
    const s = sec('cards', 'Recall cards', `${C.length} cards. Flip, then sort each into Know it or Again. Your piles are saved on this device.`);
    const filt = el('div', 'seg');
    const fAll = el('button', 'on'), fAgain = el('button'), fNew = el('button');
    filt.append(fAll, fAgain, fNew); s.appendChild(filt);
    const bar = el('div', 'cardbar');
    const prev = el('button', null, '← Prev'), next = el('button', null, 'Next →'), shuf = el('button', null, 'Shuffle'), cnt = el('span', 'counter');
    bar.append(prev, next, shuf, cnt); s.appendChild(bar);
    const card = el('div', 'card'); card.setAttribute('role', 'button'); card.tabIndex = 0;
    const side = el('span', 'side'), body = el('div'), hint = el('span', 'hint', 'click to flip');
    card.append(side, body, hint); s.appendChild(card);
    const judge = el('div', 'judge');
    const bAgain = el('button', 'again', '✗ Again'), bKnow = el('button', 'know', '✓ Know it'), stats = el('span', 'counter');
    judge.append(bAgain, bKnow, stats); s.appendChild(judge);
    const tail = el('div', 'cardtail');
    tail.appendChild(el('span', 'keys', 'Keys: Space flip · ← → move · 1 Again · 2 Know it'));
    const rs = el('button', 'sm', 'Reset piles'); tail.appendChild(rs); s.appendChild(tail);

    let filter = 'all', order = ALL.slice(), pos = 0, flip = false;
    const inPool = (i, f) => f === 'again' ? !!st.a[H[i]] : f === 'new' ? !st.k[H[i]] : true;
    function counts() {
      const known = H.filter(h => st.k[h]).length, again = H.filter(h => st.a[h]).length;
      fAll.textContent = `All (${C.length})`; fAgain.textContent = `Again pile (${again})`; fNew.textContent = `Not known yet (${C.length - known})`;
      stats.innerHTML = `Known <b>${known}</b> · Again <b>${again}</b> · Unsorted <b>${C.length - known - again}</b>`;
      saveProg(ch.n, { cards: C.length, known });
    }
    function setFilter(f) {
      filter = f; [fAll, fAgain, fNew].forEach((b, i) => b.classList.toggle('on', ['all', 'again', 'new'][i] === f));
      order = ALL.filter(i => inPool(i, f)); pos = 0; flip = false; draw();
    }
    function draw() {
      if (!order.length) {
        side.textContent = ''; hint.hidden = true; card.classList.add('empty');
        body.innerHTML = `<p class="q">${filter === 'again' ? 'Again pile is empty.' : 'Every card is marked Know it.'}</p><p class="a">Switch to All to keep reviewing.</p>`;
        cnt.textContent = '0 / 0'; bAgain.disabled = bKnow.disabled = true; return;
      }
      card.classList.remove('empty'); hint.hidden = false; bAgain.disabled = bKnow.disabled = false;
      if (pos >= order.length) pos = 0;
      const i = order[pos], c = C[i];
      const mark = st.k[H[i]] ? ' · known' : st.a[H[i]] ? ' · in Again pile' : '';
      side.textContent = (flip ? 'Answer' : 'Prompt') + mark;
      body.innerHTML = flip ? `<div class="a">${c[1]}</div>` : `<p class="q">${c[0]}</p>`;
      hint.textContent = flip ? 'click to flip back' : 'click to flip';
      cnt.textContent = `${pos + 1} / ${order.length}`;
    }
    function judgeCard(kind) {
      if (!order.length) return;
      const i = order[pos], h = H[i];
      if (kind === 'know') { st.k[h] = 1; delete st.a[h]; } else { st.a[h] = 1; delete st.k[h]; }
      store.set(key, st); counts();
      if (!inPool(i, filter)) order.splice(pos, 1); else pos++;
      if (pos >= order.length) pos = 0;
      flip = false; draw();
    }
    const doFlip = () => { if (!order.length) return; flip = !flip; draw(); };
    card.addEventListener('click', doFlip);
    card.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); doFlip(); } });
    next.addEventListener('click', () => { if (!order.length) return; pos = (pos + 1) % order.length; flip = false; draw(); });
    prev.addEventListener('click', () => { if (!order.length) return; pos = (pos - 1 + order.length) % order.length; flip = false; draw(); });
    shuf.addEventListener('click', () => { order = shuffled(order); pos = 0; flip = false; draw(); });
    bAgain.addEventListener('click', () => judgeCard('again'));
    bKnow.addEventListener('click', () => judgeCard('know'));
    fAll.addEventListener('click', () => setFilter('all'));
    fAgain.addEventListener('click', () => setFilter('again'));
    fNew.addEventListener('click', () => setFilter('new'));
    rs.addEventListener('click', () => { st.k = {}; st.a = {}; store.set(key, st); counts(); setFilter(filter); });
    document.addEventListener('keydown', e => {
      if (e.target.closest && e.target.closest('input,textarea,select')) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const r = card.getBoundingClientRect();
      if (r.bottom < 60 || r.top > window.innerHeight - 40) return;
      if (e.key === 'ArrowRight') { next.click(); e.preventDefault(); }
      else if (e.key === 'ArrowLeft') { prev.click(); e.preventDefault(); }
      else if (e.key === '1') judgeCard('again');
      else if (e.key === '2') judgeCard('know');
      else if (e.key === ' ' && !(e.target.closest && e.target.closest('button'))) { e.preventDefault(); doFlip(); }
    });
    counts(); draw(); root.appendChild(s);
  }

  /* ---------- quiz: practice / exam modes, filters, retry missed ---------- */
  function renderQuiz(ch, root) {
    const Q = ch.quiz; if (!Q || !Q.length) return;
    const n = ch.n, key = 'ifc:v2:quiz:' + n;
    const st = store.get(key, { best: null, last: null, missed: {}, runs: 0 }); st.missed = st.missed || {};
    const QH = Q.map(q => hash(q[0]));
    const hasMeta = Q.some(q => qmeta(q));
    const s = sec('quiz', `${Q.length}-question exam drill`, hasMeta
      ? 'Written like the real exam: calculations, client scenarios and EXCEPT questions. Practice mode marks each answer as you go. Exam mode holds all feedback until you submit.'
      : 'Exam-style questions. Practice mode marks each answer as you go. Exam mode holds all feedback until you submit.');
    const tools = el('div', 'qtools');
    const modeSeg = el('div', 'seg'); const bP = el('button', 'on', 'Practice'), bE = el('button', null, 'Exam mode'); modeSeg.append(bP, bE);
    const fSel = el('select', 'qfilter'); fSel.setAttribute('aria-label', 'Filter questions');
    const bShuf = el('button', null, 'Shuffle'), bReset = el('button', null, 'Reset');
    tools.append(modeSeg, fSel, bShuf, bReset); s.appendChild(tools);
    const box = el('div', 'qbox'); s.appendChild(box);
    const result = el('div', 'qresult'); result.hidden = true; s.appendChild(result);
    const bar = el('div', 'score'); const stx = el('span', 'st');
    const btns = el('span', 'sbtns'); const bRetry = el('button', null, 'Retry missed'), bSubmit = el('button', 'primary', 'Submit exam');
    btns.append(bRetry, bSubmit); bar.append(stx, btns); s.appendChild(bar);

    let mode = 'practice', filter = 'all', shuffle = false, items = [], perm = {}, ans = {}, submitted = false, sessionMissed = null, armed = null;
    const nodes = {};

    function fillFilter() {
      const opts = [['all', `All questions (${Q.length})`]];
      if (hasMeta) TYPE_ORDER.forEach(t => { const c = Q.filter(q => (qmeta(q) || {}).t === t).length; if (c) opts.push([t, `${TYPE_LABEL[t]} only (${c})`]); });
      if (hasMeta) [3, 2].forEach(d => { const c = Q.filter(q => (qmeta(q) || {}).d === d).length; if (c) opts.push(['d' + d, (d === 3 ? 'Hardest (level 3)' : 'Level 2') + ` (${c})`]); });
      const mc = QH.filter(h => st.missed[h]).length; if (mc) opts.push(['missed', `Missed last time (${mc})`]);
      if (sessionMissed && sessionMissed.length) opts.push(['session', `Missed this round (${sessionMissed.length})`]);
      fSel.innerHTML = ''; opts.forEach(o => { const op = el('option', null, o[1]); op.value = o[0]; fSel.appendChild(op); });
      if (!opts.some(o => o[0] === filter)) filter = 'all';
      fSel.value = filter;
    }
    function pool() {
      const idx = Q.map((_, i) => i);
      if (filter === 'all') return idx;
      if (filter === 'missed') return idx.filter(i => st.missed[QH[i]]);
      if (filter === 'session') return (sessionMissed || []).slice();
      if (/^d\d$/.test(filter)) return idx.filter(i => (qmeta(Q[i]) || {}).d === +filter[1]);
      return idx.filter(i => (qmeta(Q[i]) || {}).t === filter);
    }
    const answered = () => items.filter(i => ans[i] != null).length;
    const nCorrect = () => items.filter(i => ans[i] === Q[i][2]).length;
    function badges(m) {
      if (!m) return '';
      const d = Math.max(1, Math.min(3, m.d || 1));
      return `<span class="badge t-${m.t}">${TYPE_LABEL[m.t] || m.t}</span><span class="dots" title="Difficulty ${d} of 3">${'●'.repeat(d)}${'○'.repeat(3 - d)}</span>`;
    }
    function qEl(qi, k) {
      const q = Q[qi], d = el('div', 'q-item'); d.dataset.qi = qi;
      d.appendChild(el('div', 'qn', `<span>Question ${k + 1}${(filter !== 'all' || shuffle) ? ` <span class="qid">· #${qi + 1}</span>` : ''}</span>${badges(qmeta(q))}`));
      d.appendChild(el('p', 'qt', q[0]));
      const ol = el('div', 'opts');
      perm[qi].forEach((oi, p) => {
        const b = el('button', 'opt', `<span class="k">${KEYS[p]}</span><span>${q[1][oi]}</span>`);
        b.dataset.oi = oi; b.addEventListener('click', () => choose(qi, oi));
        ol.appendChild(b);
      });
      d.appendChild(ol); nodes[qi] = d; return d;
    }
    function reveal(qi) {
      const q = Q[qi], c = q[2], a = ans[qi], d = nodes[qi];
      d.querySelectorAll('.opt').forEach(b => {
        b.disabled = true; b.classList.remove('sel');
        const oi = +b.dataset.oi; if (oi === c) b.classList.add('correct'); else if (oi === a) b.classList.add('wrong');
      });
      const letter = KEYS[perm[qi].indexOf(c)];
      const msg = a == null ? `Not answered. Answer: ${letter}.` : (a === c ? 'Correct.' : `Answer: ${letter}.`);
      d.appendChild(el('div', 'expl', `<b>${msg}</b> ${q[3]}`));
      d.classList.add(a === c ? 'ok' : 'miss');
    }
    function choose(qi, oi) {
      if (mode === 'practice') {
        if (ans[qi] != null) return;
        ans[qi] = oi; reveal(qi); tick();
        if (answered() === items.length) finish(false);
      } else {
        if (submitted) return;
        ans[qi] = oi;
        nodes[qi].querySelectorAll('.opt').forEach(b => b.classList.toggle('sel', +b.dataset.oi === oi));
        disarm(); tick();
      }
    }
    function breakdown(rows) {
      return `<div class="tblwrap"><table><thead><tr><th>Question type</th><th>Score</th><th>%</th></tr></thead><tbody>${rows.map(r => `<tr><td>${r[0]}</td><td class="num">${r[1]} / ${r[2]}</td><td class="num">${Math.round(r[1] / r[2] * 100)}%</td></tr>`).join('')}</tbody></table></div>`;
    }
    function finish(scroll) {
      const c = nCorrect(), tot = items.length, pct = Math.round(c / tot * 100);
      sessionMissed = items.filter(i => ans[i] !== Q[i][2]);
      items.forEach(i => { if (ans[i] === Q[i][2]) delete st.missed[QH[i]]; else st.missed[QH[i]] = 1; });
      if (filter === 'all') { st.last = pct; st.best = Math.max(st.best == null ? 0 : st.best, pct); st.runs = (st.runs || 0) + 1; }
      store.set(key, st); saveProg(n, { quiz: Q.length, best: st.best, last: st.last });
      let html = `<div class="qr-head"><div class="big ${pct >= 60 ? 'pass' : 'fail'}">${pct}%</div><div><b>${c} of ${tot} correct.</b> ${pct >= 60 ? 'Above' : 'Below'} the 60% pass mark${filter === 'all' ? '' : ' (filtered set)'}.${st.best != null ? `<br>Best full run on this device: <b>${st.best}%</b>.` : ''}</div></div>`;
      if (hasMeta) {
        const rows = [];
        TYPE_ORDER.forEach(t => { const its = items.filter(i => (qmeta(Q[i]) || {}).t === t); if (its.length) rows.push([TYPE_LABEL[t], its.filter(i => ans[i] === Q[i][2]).length, its.length]); });
        [1, 2, 3].forEach(d => { const its = items.filter(i => (qmeta(Q[i]) || {}).d === d); if (its.length) rows.push([`Difficulty ${d}`, its.filter(i => ans[i] === Q[i][2]).length, its.length]); });
        if (rows.length) html += breakdown(rows);
      }
      html += sessionMissed.length ? `<p class="qr-tip">Use <b>Retry missed</b> to re-drill the ${sessionMissed.length} you got wrong until the set is clean.</p>` : '<p class="qr-tip">Clean sweep. Shuffle and run it again in Exam mode tomorrow.</p>';
      result.innerHTML = html; result.hidden = false;
      fillFilter(); tick();
      if (scroll) result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    function disarm() { if (armed) { clearTimeout(armed); armed = null; } bSubmit.textContent = 'Submit exam'; }
    function submit() {
      const u = items.length - answered();
      if (u > 0 && !armed) { bSubmit.textContent = `${u} unanswered. Submit anyway?`; armed = setTimeout(disarm, 5000); return; }
      disarm(); submitted = true; items.forEach(reveal); finish(true);
    }
    function tick() {
      const a = answered(), c = nCorrect(), tot = items.length;
      const best = st.best != null ? ` · Best <b>${st.best}%</b>` : '';
      if (!tot) stx.innerHTML = 'No questions in this filter.';
      else if (mode === 'practice') stx.innerHTML = `Answered <b>${a}</b> / ${tot} · Correct <b>${c}</b>${a ? ` (${Math.round(c / a * 100)}%)` : ''}${best}`;
      else if (submitted) stx.innerHTML = `Score <b>${c}</b> / ${tot} (${Math.round(c / tot * 100)}%)${best}`;
      else stx.innerHTML = `Answered <b>${a}</b> / ${tot} · feedback after you submit${best}`;
      bSubmit.hidden = mode !== 'exam' || submitted || !tot;
      bRetry.hidden = !(sessionMissed && sessionMissed.length);
      if (sessionMissed) bRetry.textContent = `Retry missed (${sessionMissed.length})`;
    }
    function build() {
      items = pool(); if (shuffle) items = shuffled(items);
      perm = {}; items.forEach(i => { const base = Q[i][1].map((_, k) => k); perm[i] = (shuffle && canShuffleOpts(Q[i])) ? shuffled(base) : base; });
      ans = {}; submitted = false; disarm(); result.hidden = true; result.innerHTML = '';
      box.innerHTML = '';
      if (!items.length) box.appendChild(el('p', 'empty', 'No questions here yet. Finish a run first.'));
      items.forEach((qi, k) => box.appendChild(qEl(qi, k)));
      tick();
    }
    function setMode(m) { mode = m; bP.classList.toggle('on', m === 'practice'); bE.classList.toggle('on', m === 'exam'); build(); }
    bP.addEventListener('click', () => setMode('practice'));
    bE.addEventListener('click', () => setMode('exam'));
    fSel.addEventListener('change', () => { filter = fSel.value; build(); });
    bShuf.addEventListener('click', () => { shuffle = true; build(); });
    bReset.addEventListener('click', () => { shuffle = false; filter = 'all'; sessionMissed = null; fillFilter(); build(); });
    bSubmit.addEventListener('click', submit);
    bRetry.addEventListener('click', () => {
      if (!sessionMissed || !sessionMissed.length) return;
      filter = 'session'; fillFilter(); build();
      s.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    fillFilter(); build(); root.appendChild(s);
  }

  /* ---------- page ---------- */
  window.IFCRender = function (ch) {
    document.title = `IFC Ch ${ch.n} · ${stripTags(ch.shortTitle || ch.title)}`;
    document.getElementById('bt').innerHTML = `Chapter ${ch.n}<span>${ch.shortTitle || ''}</span>`;
    const hero = document.getElementById('hero');
    const D = (ch.drills || []).length, C = (ch.cards || []).length, Qn = (ch.quiz || []).length;
    const stats = [D ? `<span><b>${D}</b> calc drills</span>` : '', C ? `<span><b>${C}</b> cards</span>` : '', Qn ? `<span><b>${Qn}</b> questions</span>` : ''].join('');
    const p = store.get('ifc:v2:prog:' + ch.n, {});
    const mine = [p.best != null ? `quiz best ${p.best}%` : '', p.known ? `${p.known}/${C} cards known` : '', p.solved ? `${p.solved}/${D} drills solved` : ''].filter(Boolean).join(' · ');
    hero.innerHTML = `<p class="eyebrow">${ch.section}</p><h1>${ch.title}</h1><p class="lede">${ch.lede}</p>` +
      (ch.examNote ? `<p class="examnote">${ch.examNote}</p>` : '') +
      `<div class="stats">${stats}</div>` + (mine ? `<p class="mine">Your progress on this device: ${mine}</p>` : '');
    const root = document.getElementById('body');
    renderMethod(ch, root); renderHighYield(ch, root); renderCore(ch, root); renderNumbers(ch, root);
    renderTraps(ch, root); renderDrills(ch, root); renderCards(ch, root); renderQuiz(ch, root);
    const nav = document.getElementById('nav');
    const ids = [['method', 'Method'], ['hy', 'High-yield'], ['core', 'Core'], ['numbers', 'Numbers'], ['traps', 'Traps'], ['drills', 'Drills'], ['cards', 'Cards'], ['quiz', 'Quiz']];
    nav.innerHTML = ids.filter(i => document.getElementById(i[0])).map(i => `<a href="#${i[0]}">${i[1]}</a>`).join('') + '<a class="ext" href="exam.html">Mock exam</a>';
    const pn = window.IFC_MANIFEST ? window.IFC_MANIFEST.filter(m => m.ready).map(m => m.n) : [];
    const k = pn.indexOf(ch.n);
    const pager = (k > 0 ? `<a href="chapter.html?ch=${pn[k - 1]}">← Chapter ${pn[k - 1]}</a>` : '<span></span>') + '<a href="index.html">All chapters</a>' + (k >= 0 && k < pn.length - 1 ? `<a href="chapter.html?ch=${pn[k + 1]}">Chapter ${pn[k + 1]} →</a>` : '<span></span>');
    document.getElementById('foot').innerHTML = `<div class="pager">${pager}</div>` + (ch.footer || 'Study aid only — not a substitute for the official text.');
    if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
  };
})();
