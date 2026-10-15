/* IFC mock exam — samples questions from built chapters by the official topic weights. */
(function () {
  'use strict';
  const U = window.IFCUtil;
  const { el, store, shuffled, canShuffleOpts, qmeta, TYPE_LABEL, TYPE_ORDER, KEYS } = U;
  const M = (window.IFC_MANIFEST || []).filter(c => c.ready);
  const T = window.IFC_TOPICS || [];
  const app = document.getElementById('app');
  const SEC_PER_Q = 108;                     // 3 hours / 100 questions
  const SAVE = 'ifc:v2:exam:current', HIST = 'ifc:v2:exam:history', PREF = 'ifc:v2:exam:prefs';
  const topicOf = n => T.find(t => t.ch.indexOf(n) >= 0) || { name: 'Other', ch: [n], w: 1 };
  const titleOf = n => (M.find(c => c.n === n) || {}).title || '';
  const fmtTime = s => { s = Math.max(0, Math.round(s)); const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60; return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(x).padStart(2, '0'); };
  let timer = null, keyHandler = null;

  function loadChapters(ns) {
    window.IFC = window.IFC || {};
    return Promise.all(ns.map(n => new Promise(res => {
      if (window.IFC[n]) return res();
      const s = document.createElement('script'); s.src = 'data/ch' + n + '.js?v=' + (window.IFC_V || '');
      s.onload = () => res(); s.onerror = () => res();
      document.head.appendChild(s);
    })));
  }
  function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }
  function setKeys(fn) { if (keyHandler) document.removeEventListener('keydown', keyHandler); keyHandler = fn; if (fn) document.addEventListener('keydown', fn); }

  /* ---------- fixed practice exams (banks) ---------- */
  const BANKS = 5, BANKKEY = 'ifc:v2:bank:';
  function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function sshuffle(a, r) { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }
  function buildBanks() {
    const pools = {}, banks = Array.from({ length: BANKS }, () => []);
    M.forEach(c => { const ch = window.IFC[c.n]; if (!ch || !ch.quiz) return; const t = topicOf(c.n).name; pools[t] = pools[t] || []; ch.quiz.forEach((q, i) => pools[t].push({ c: c.n, i, d: (qmeta(q) || {}).d || 2 })); });
    const topics = T.filter(t => pools[t.name]), W = topics.reduce((s, t) => s + t.w, 0);
    const raw = topics.map(t => { const x = 100 * t.w / W; return { t, x, f: Math.floor(x) }; });
    let sum = raw.reduce((s, r) => s + r.f, 0);
    raw.slice().sort((a, b) => (b.x - b.f) - (a.x - a.f)).forEach(r => { if (sum < 100) { r.f++; sum++; } });
    raw.forEach((r, ti) => {
      const R = rng(7919 + ti * 104729), pool = pools[r.t.name];
      // exam-level questions first; the hardest ones are only used if a topic runs short
      const ordered = sshuffle(pool.filter(x => x.d < 3), R).concat(sshuffle(pool.filter(x => x.d >= 3), R));
      let k = 0;
      for (let n = 0; n < r.f * BANKS; n++) {
        const b = n % BANKS;
        for (let tries = 0; tries < ordered.length; tries++, k++) {
          const x = ordered[k % ordered.length];
          if (!banks[b].some(y => y.c === x.c && y.i === x.i)) { banks[b].push(x); k++; break; }
        }
      }
    });
    return banks;
  }
  function startBank(b, mode, btn) {
    btn.disabled = true; btn.textContent = 'Loading…';
    const chs = M.map(c => c.n);
    loadChapters(chs).then(() => {
      const qs = shuffled(buildBanks()[b]).map(x => { const q = window.IFC[x.c].quiz[x.i], base = q[1].map((_, j) => j); return { c: x.c, i: x.i, p: canShuffleOpts(q) ? shuffled(base) : base }; });
      const timed = mode === 'exam';
      const st = { qs, ans: {}, flag: {}, cur: 0, timed, mode, bank: b, total: qs.length * SEC_PER_Q, left: qs.length * SEC_PER_Q, chs, started: Date.now() };
      store.set(SAVE, st); run(st);
    });
  }

  /* ---------- sampling ---------- */
  function sample(chs, N) {
    const pools = {};
    chs.forEach(n => {
      const c = window.IFC[n]; if (!c || !c.quiz) return;
      const k = topicOf(n).name; pools[k] = pools[k] || [];
      c.quiz.forEach((_, i) => pools[k].push({ c: n, i }));
    });
    const keys = Object.keys(pools);
    const w = k => (T.find(t => t.name === k) || { w: 1 }).w;
    const total = keys.reduce((s, k) => s + pools[k].length, 0);
    N = Math.min(N, total);
    const alloc = {}; keys.forEach(k => { alloc[k] = 0; });
    let remaining = N, open = keys.slice();
    while (remaining > 0 && open.length) {
      const W = open.reduce((s, k) => s + w(k), 0);
      const raw = open.map(k => { const x = remaining * w(k) / W; return { k, x, f: Math.floor(x) }; });
      let sumF = raw.reduce((s, r) => s + r.f, 0);
      raw.slice().sort((a, b) => (b.x - b.f) - (a.x - a.f)).forEach(r => { if (sumF < remaining) { r.f++; sumF++; } });
      let overflow = 0; const next = [];
      raw.forEach(r => {
        const cap = pools[r.k].length - alloc[r.k], take = Math.min(cap, r.f);
        alloc[r.k] += take; overflow += r.f - take;
        if (alloc[r.k] < pools[r.k].length) next.push(r.k);
      });
      if (overflow === remaining) break;
      remaining = overflow; open = next;
    }
    let picked = [];
    keys.forEach(k => { picked = picked.concat(shuffled(pools[k]).slice(0, alloc[k])); });
    return shuffled(picked).map(x => {
      const q = window.IFC[x.c].quiz[x.i], base = q[1].map((_, j) => j);
      return { c: x.c, i: x.i, p: canShuffleOpts(q) ? shuffled(base) : base };
    });
  }

  /* ---------- setup ---------- */
  function setup() {
    stopTimer(); setKeys(null); app.innerHTML = ''; window.scrollTo(0, 0);
    const prefs = store.get(PREF, { n: 50, timed: true, chs: M.map(c => c.n) });
    const hero = el('div', 'hero');
    hero.innerHTML = '<p class="eyebrow">Practice under exam conditions</p><h1>Timed mock exam</h1>' +
      '<p class="lede">Questions come from the chapters you tick, split by the official exam topic weights. No feedback until you submit, the same as the real exam. Afterwards you get your score by topic and chapter, then a full review.</p>';
    app.appendChild(hero);
    const saved = store.get(SAVE, null);
    if (saved && saved.qs && saved.qs.length) {
      const b = el('div', 'resume');
      const answered = Object.keys(saved.ans || {}).length;
      b.innerHTML = `<div><b>Exam in progress</b><br>${answered} of ${saved.qs.length} answered${saved.timed ? ` · ${fmtTime(saved.left)} left` : ''}</div>`;
      const r = el('button', 'primary', 'Resume'), d = el('button', null, 'Discard');
      r.addEventListener('click', () => loadChapters(saved.chs).then(() => run(saved)));
      d.addEventListener('click', () => { store.del(SAVE); setup(); });
      const bx = el('span', 'sbtns'); bx.append(r, d); b.appendChild(bx); app.appendChild(b);
    }
    const sb = el('section'); sb.appendChild(el('h2', null, 'Practice exams'));
    sb.appendChild(el('p', 'sub', 'Five fixed 100-question exams, each split across the topics like the real exam. The questions and options reshuffle every attempt. Training mode shows the answer and the working right after each question. Exam mode is timed (3 hours) with feedback at the end.'));
    const grid = el('div', 'banks');
    for (let b = 0; b < BANKS; b++) {
      const rec = store.get(BANKKEY + b, null);
      const card = el('div', 'bank');
      card.innerHTML = `<span class="t">Practice Exam ${b + 1}</span><span class="m">100 questions${rec ? ` · last ${rec.last}% · best ${rec.best}%` : ''}</span>`;
      const row = el('div', 'bank-btns');
      const tr = el('button', 'primary sm', 'Training'), ex = el('button', 'sm', 'Exam · 3 h');
      tr.addEventListener('click', () => startBank(b, 'train', tr));
      ex.addEventListener('click', () => startBank(b, 'exam', ex));
      row.append(tr, ex); card.appendChild(row); grid.appendChild(card);
    }
    sb.appendChild(grid); app.appendChild(sb);
    const s1 = el('section'); s1.appendChild(el('h2', null, 'Or build your own'));
    s1.appendChild(el('p', 'sub', 'Tick the chapters you want. Questions are drawn at random, split by the official topic weights.'));
    const pre = el('div', 'qtools');
    const sel = new Set((prefs.chs || []).filter(n => M.some(c => c.n === n)));
    const boxes = {};
    const presets = [['All built chapters', () => M.map(c => c.n)], ['Chapters 1–9', () => M.filter(c => c.n <= 9).map(c => c.n)], ['Chapters 10–18', () => M.filter(c => c.n >= 10).map(c => c.n)], ['Clear', () => []]];
    presets.forEach(p => { const b = el('button', 'sm', p[0]); b.addEventListener('click', () => { sel.clear(); p[1]().forEach(n => sel.add(n)); sync(); }); pre.appendChild(b); });
    s1.appendChild(pre);
    T.forEach(t => {
      const chs = t.ch.map(n => M.find(c => c.n === n)).filter(Boolean);
      const g = el('fieldset', 'tgroup');
      const lg = el('legend', null, `<span>${t.name}</span><span class="w">${t.w}% of exam</span>`); g.appendChild(lg);
      if (!chs.length) { g.appendChild(el('p', 'empty', 'Not built yet')); s1.appendChild(g); return; }
      chs.forEach(c => {
        const lab = el('label', 'chk'); const cb = el('input'); cb.type = 'checkbox'; cb.value = c.n;
        cb.addEventListener('change', () => { if (cb.checked) sel.add(c.n); else sel.delete(c.n); sync(); });
        lab.append(cb, el('span', null, `Ch ${c.n} · ${c.title} <em>${c.quiz || 0} q</em>`));
        boxes[c.n] = cb; g.appendChild(lab);
      });
      s1.appendChild(g);
    });
    app.appendChild(s1);

    const s2 = el('section'); s2.appendChild(el('h2', null, 'Length and mode'));
    s2.appendChild(el('p', 'sub', 'The real exam is 100 questions in 3 hours (1.8 minutes each).'));
    const lenSeg = el('div', 'seg'); let N = prefs.n || 50;
    [25, 50, 100].forEach(v => { const b = el('button', v === N ? 'on' : null, v + ' questions'); b.addEventListener('click', () => { N = v; [...lenSeg.children].forEach(x => x.classList.toggle('on', x === b)); sync(); }); lenSeg.appendChild(b); });
    const modeSeg = el('div', 'seg'); let mode = prefs.mode || 'exam';
    [['Exam mode', 'exam'], ['Training mode', 'train']].forEach(o => { const b = el('button', o[1] === mode ? 'on' : null, o[0]); b.addEventListener('click', () => { mode = o[1]; [...modeSeg.children].forEach(x => x.classList.toggle('on', x === b)); timeSeg.hidden = mode === 'train'; sync(); }); modeSeg.appendChild(b); });
    const timeSeg = el('div', 'seg'); let timed = prefs.timed !== false; timeSeg.hidden = mode === 'train';
    [['Timed', true], ['Untimed', false]].forEach(o => { const b = el('button', o[1] === timed ? 'on' : null, o[0]); b.addEventListener('click', () => { timed = o[1]; [...timeSeg.children].forEach(x => x.classList.toggle('on', x === b)); sync(); }); timeSeg.appendChild(b); });
    const row = el('div', 'qtools'); row.append(lenSeg, modeSeg, timeSeg); s2.appendChild(row);
    const info = el('p', 'xinfo'); s2.appendChild(info);
    const go = el('button', 'primary big-btn', 'Start exam'); s2.appendChild(go);
    app.appendChild(s2);

    function sync() {
      Object.keys(boxes).forEach(n => { boxes[n].checked = sel.has(+n); });
      const pool = M.filter(c => sel.has(c.n)).reduce((s, c) => s + (c.quiz || 0), 0);
      const n = Math.min(N, pool);
      info.innerHTML = sel.size ? `Pool: <b>${pool}</b> questions from <b>${sel.size}</b> chapter${sel.size > 1 ? 's' : ''}. This exam: <b>${n}</b> questions${mode === 'train' ? ', training mode (answer and working after each question)' : timed ? `, <b>${fmtTime(n * SEC_PER_Q)}</b> on the clock` : ', untimed'}.` : 'Pick at least one chapter.';
      go.disabled = !sel.size;
    }
    go.addEventListener('click', () => {
      const chs = [...sel].sort((a, b) => a - b);
      store.set(PREF, { n: N, timed, mode, chs });
      go.disabled = true; go.textContent = 'Loading questions…';
      loadChapters(chs).then(() => {
        const qs = sample(chs, N);
        if (!qs.length) { go.textContent = 'No questions found'; return; }
        const st = { qs, ans: {}, flag: {}, cur: 0, timed: mode === 'exam' && timed, mode, total: qs.length * SEC_PER_Q, left: qs.length * SEC_PER_Q, chs, started: Date.now() };
        store.set(SAVE, st); run(st);
      });
    });
    sync();

    const hist = store.get(HIST, []);
    if (hist.length) {
      const s3 = el('section'); s3.appendChild(el('h2', null, 'Past attempts on this device'));
      const rows = hist.slice().reverse().map(h => `<tr><td>${new Date(h.d).toLocaleDateString('en-CA', { month: 'short', day: 'numeric' })}</td><td class="num">${h.c} / ${h.N}</td><td class="num">${h.pct}%</td><td>${h.pct >= 60 ? '<span class="pass">Pass</span>' : '<span class="fail">Below 60%</span>'}</td><td>${h.label || h.chs.length + ' ch'}</td></tr>`).join('');
      s3.appendChild(el('div', 'tblwrap', `<table><thead><tr><th>Date</th><th>Score</th><th>%</th><th>Result</th><th>Scope</th></tr></thead><tbody>${rows}</tbody></table>`));
      app.appendChild(s3);
    }
  }

  /* ---------- running exam ---------- */
  function run(st) {
    stopTimer(); app.innerHTML = ''; window.scrollTo(0, 0);
    const Nq = st.qs.length;
    const getQ = k => window.IFC[st.qs[k].c].quiz[st.qs[k].i];
    const bar = el('div', 'xbar');
    const pos = el('span', 'xpos'), clock = el('span', 'xclock'), gridBtn = el('button', 'sm', 'All questions'), sub = el('button', 'primary sm', 'Submit');
    bar.append(pos, clock, gridBtn, sub); app.appendChild(bar);
    const grid = el('div', 'xgrid'); grid.hidden = true; app.appendChild(grid);
    const confirmBox = el('div', 'xconfirm'); confirmBox.hidden = true; app.appendChild(confirmBox);
    const qbox = el('div', 'q-item xq'); app.appendChild(qbox);
    const nav = el('div', 'xnav'); const prev = el('button', null, '← Previous'), flagB = el('button', 'xflag', '⚑ Flag'), next = el('button', 'primary', 'Next →');
    nav.append(prev, flagB, next); app.appendChild(nav);
    app.appendChild(el('p', 'keys xkeys', 'Keys: 1–4 or A–D answer · ← → move · F flag'));
    const save = () => store.set(SAVE, st);

    function drawGrid() {
      grid.innerHTML = '';
      st.qs.forEach((_, k) => {
        const b = el('button', 'g' + (st.ans[k] != null ? ' a' : '') + (st.flag[k] ? ' f' : '') + (k === st.cur ? ' c' : ''), String(k + 1));
        b.addEventListener('click', () => { st.cur = k; draw(); grid.hidden = true; });
        grid.appendChild(b);
      });
    }
    function draw() {
      const k = st.cur, q = getQ(k), perm = st.qs[k].p;
      const answered = Object.keys(st.ans).length, flagged = Object.keys(st.flag).filter(x => st.flag[x]).length;
      const train = st.mode === 'train', done = train && st.ans[k] != null;
      const right = train ? Object.keys(st.ans).filter(j => st.ans[j] === getQ(+j)[2]).length : 0;
      pos.innerHTML = `Q <b>${k + 1}</b> / ${Nq} · ${train ? `<b>${right}</b> right of ${answered}` : `${answered} answered`}${flagged ? ` · ${flagged} flagged` : ''}`;
      qbox.innerHTML = '';
      qbox.appendChild(el('div', 'qn', `<span>Question ${k + 1} of ${Nq}${train ? ` · Chapter ${st.qs[k].c}` : ''}</span>${st.flag[k] ? '<span class="badge t-except">Flagged</span>' : ''}`));
      qbox.appendChild(el('p', 'qt', q[0]));
      const ol = el('div', 'opts');
      perm.forEach((oi, p) => {
        let cls = 'opt';
        if (done) { if (oi === q[2]) cls += ' correct'; else if (oi === st.ans[k]) cls += ' wrong'; }
        else if (st.ans[k] === oi) cls += ' sel';
        const b = el('button', cls, `<span class="k">${KEYS[p]}</span><span>${q[1][oi]}</span>`);
        if (done) b.disabled = true; else b.addEventListener('click', () => pick(oi));
        ol.appendChild(b);
      });
      qbox.appendChild(ol);
      if (done) qbox.appendChild(el('div', 'expl', `<b>${st.ans[k] === q[2] ? 'Correct.' : 'Answer: ' + KEYS[perm.indexOf(q[2])] + '.'}</b> ${q[3]}`));
      prev.disabled = k === 0; next.textContent = k === Nq - 1 ? 'Review & submit' : 'Next →';
      flagB.classList.toggle('on', !!st.flag[k]); flagB.textContent = st.flag[k] ? '⚑ Flagged' : '⚑ Flag';
      if (!grid.hidden) drawGrid();
    }
    function pick(oi) { if (st.mode === 'train' && st.ans[st.cur] != null) return; st.ans[st.cur] = oi; save(); draw(); }
    function move(d) {
      if (d > 0 && st.cur === Nq - 1) { askSubmit(); return; }
      st.cur = Math.max(0, Math.min(Nq - 1, st.cur + d)); save(); confirmBox.hidden = true; draw();
      qbox.scrollIntoView({ block: 'nearest' });
    }
    function askSubmit() {
      const un = Nq - Object.keys(st.ans).length, fl = Object.keys(st.flag).filter(x => st.flag[x]).length;
      confirmBox.innerHTML = `<p><b>Submit the exam?</b> ${un ? `${un} unanswered (they count as wrong). ` : 'All questions answered. '}${fl ? `${fl} flagged for review.` : ''}</p>`;
      const keep = el('button', null, 'Keep working'), go = el('button', 'primary', 'Submit now');
      keep.addEventListener('click', () => { confirmBox.hidden = true; });
      go.addEventListener('click', finish);
      const bx = el('span', 'sbtns'); bx.append(keep, go); confirmBox.appendChild(bx);
      confirmBox.hidden = false; confirmBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    function finish() {
      stopTimer(); setKeys(null);
      st.used = st.timed ? st.total - st.left : Math.round((Date.now() - st.started) / 1000);
      store.del(SAVE); results(st);
    }
    prev.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    flagB.addEventListener('click', () => { st.flag[st.cur] = !st.flag[st.cur]; save(); draw(); });
    gridBtn.addEventListener('click', () => { grid.hidden = !grid.hidden; if (!grid.hidden) drawGrid(); });
    sub.addEventListener('click', askSubmit);
    setKeys(e => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.target.closest && e.target.closest('input,textarea,select')) return;
      const k = e.key.toLowerCase(), perm = st.qs[st.cur].p;
      const idx = '1234'.indexOf(k) >= 0 ? '1234'.indexOf(k) : 'abcd'.indexOf(k);
      if (idx >= 0 && idx < perm.length) { pick(perm[idx]); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { move(1); e.preventDefault(); }
      else if (e.key === 'ArrowLeft') { move(-1); e.preventDefault(); }
      else if (k === 'f') { flagB.click(); }
    });
    if (st.timed) {
      const deadline = Date.now() + st.left * 1000; let n = 0;
      const tickT = () => {
        st.left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
        clock.textContent = '⏱ ' + fmtTime(st.left);
        clock.classList.toggle('low', st.left <= 300);
        if (++n % 5 === 0) save();
        if (st.left <= 0) finish();
      };
      tickT(); timer = setInterval(tickT, 1000);
    } else clock.textContent = st.mode === 'train' ? 'Training mode' : 'Untimed';
    draw();
  }

  /* ---------- results & review ---------- */
  function results(st) {
    app.innerHTML = ''; window.scrollTo(0, 0); setKeys(null);
    const Nq = st.qs.length;
    const getQ = k => window.IFC[st.qs[k].c].quiz[st.qs[k].i];
    const right = k => st.ans[k] === getQ(k)[2];
    const c = st.qs.filter((_, k) => right(k)).length, pct = Math.round(c / Nq * 100);
    const hist = store.get(HIST, []); const label = (st.bank != null ? `Practice Exam ${st.bank + 1}` : `${st.chs.length} ch`) + (st.mode === 'train' ? ' (training)' : '');
    hist.push({ d: Date.now(), N: Nq, c, pct, chs: st.chs, label });
    if (st.bank != null) { const bk = BANKKEY + st.bank, r = store.get(bk, {}); store.set(bk, { last: pct, best: Math.max(r.best || 0, pct), n: (r.n || 0) + 1 }); } store.set(HIST, hist.slice(-15));
    const hero = el('div', 'hero');
    hero.innerHTML = `<p class="eyebrow">${st.bank != null ? `Practice Exam ${st.bank + 1}` : 'Mock exam'}${st.mode === 'train' ? ' · training mode' : ''} · result</p><div class="qr-head"><div class="big ${pct >= 60 ? 'pass' : 'fail'}">${pct}%</div><div><b>${c} of ${Nq} correct.</b> ${pct >= 60 ? 'Pass: above the 60% mark.' : 'Below the 60% pass mark.'}<br>Time used: ${fmtTime(st.used || 0)}${st.timed ? ` of ${fmtTime(st.total)}` : ''}.</div></div>`;
    app.appendChild(hero);
    const tally = keyFn => { const m = {}; st.qs.forEach((x, k) => { const key = keyFn(x, k); if (key == null) return; m[key] = m[key] || [0, 0]; m[key][1]++; if (right(k)) m[key][0]++; }); return m; };
    const rowsOf = (m, order, label) => order.filter(k => m[k]).map(k => `<tr><td>${label(k)}</td><td class="num">${m[k][0]} / ${m[k][1]}</td><td class="num ${m[k][0] / m[k][1] >= 0.6 ? 'pass' : 'fail'}">${Math.round(m[k][0] / m[k][1] * 100)}%</td></tr>`).join('');
    const s1 = el('section'); s1.appendChild(el('h2', null, 'Where you lost marks'));
    const byT = tally(x => topicOf(x.c).name);
    s1.appendChild(el('h3', null, 'By exam topic'));
    s1.appendChild(el('div', 'tblwrap', `<table><thead><tr><th>Topic</th><th>Score</th><th>%</th></tr></thead><tbody>${rowsOf(byT, T.map(t => t.name).concat(['Other']), k => k)}</tbody></table>`));
    const byC = tally(x => x.c);
    s1.appendChild(el('h3', null, 'By chapter'));
    s1.appendChild(el('div', 'tblwrap', `<table><thead><tr><th>Chapter</th><th>Score</th><th>%</th></tr></thead><tbody>${rowsOf(byC, Object.keys(byC).map(Number).sort((a, b) => a - b), k => `<a href="chapter.html?ch=${k}">Ch ${k} · ${titleOf(+k)}</a>`)}</tbody></table>`));
    const byTy = tally((x, k) => { const m = qmeta(getQ(k)); return m ? m.t : null; });
    if (Object.keys(byTy).length) {
      s1.appendChild(el('h3', null, 'By question type'));
      s1.appendChild(el('div', 'tblwrap', `<table><thead><tr><th>Type</th><th>Score</th><th>%</th></tr></thead><tbody>${rowsOf(byTy, TYPE_ORDER, k => TYPE_LABEL[k])}</tbody></table>`));
    }
    const acts = el('div', 'qtools'); acts.style.marginTop = '20px';
    const again = el('button', 'primary', 'New exam'), same = el('button', null, 'Retake these questions');
    again.addEventListener('click', setup);
    same.addEventListener('click', () => {
      const qs = shuffled(st.qs).map(x => ({ c: x.c, i: x.i, p: canShuffleOpts(window.IFC[x.c].quiz[x.i]) ? shuffled(x.p) : x.p }));
      const ns = { qs, ans: {}, flag: {}, cur: 0, timed: st.timed, mode: st.mode, bank: st.bank, total: qs.length * SEC_PER_Q, left: qs.length * SEC_PER_Q, chs: st.chs, started: Date.now() };
      store.set(SAVE, ns); run(ns);
    });
    acts.append(again, same); s1.appendChild(acts);
    app.appendChild(s1);

    const s2 = el('section'); s2.appendChild(el('h2', null, 'Review every question'));
    const missedN = st.qs.filter((_, k) => !right(k)).length, flagN = st.qs.filter((_, k) => st.flag[k]).length;
    const seg = el('div', 'seg'); let f = missedN ? 'missed' : 'all';
    const opts = [['missed', `Missed (${missedN})`], ['flagged', `Flagged (${flagN})`], ['all', `All (${Nq})`]];
    opts.forEach(o => { const b = el('button', o[0] === f ? 'on' : null, o[1]); b.addEventListener('click', () => { f = o[0]; [...seg.children].forEach(x => x.classList.toggle('on', x === b)); list(); }); seg.appendChild(b); });
    s2.appendChild(seg);
    const box = el('div', 'xreview'); s2.appendChild(box);
    function list() {
      box.innerHTML = '';
      const ks = st.qs.map((_, k) => k).filter(k => f === 'all' || (f === 'missed' ? !right(k) : st.flag[k]));
      if (!ks.length) { box.appendChild(el('p', 'empty', f === 'missed' ? 'Nothing missed.' : 'Nothing flagged.')); return; }
      ks.forEach(k => {
        const q = getQ(k), perm = st.qs[k].p, a = st.ans[k], m = qmeta(q);
        const d = el('div', 'q-item ' + (right(k) ? 'ok' : 'miss'));
        d.appendChild(el('div', 'qn', `<span>Question ${k + 1} · <a href="chapter.html?ch=${st.qs[k].c}">Chapter ${st.qs[k].c}</a></span>${m ? `<span class="badge t-${m.t}">${TYPE_LABEL[m.t] || m.t}</span>` : ''}`));
        d.appendChild(el('p', 'qt', q[0]));
        const ol = el('div', 'opts');
        perm.forEach((oi, p) => {
          const cls = 'opt' + (oi === q[2] ? ' correct' : (oi === a ? ' wrong' : ''));
          const b = el('button', cls, `<span class="k">${KEYS[p]}</span><span>${q[1][oi]}</span>`); b.disabled = true; ol.appendChild(b);
        });
        d.appendChild(ol);
        const letter = KEYS[perm.indexOf(q[2])];
        d.appendChild(el('div', 'expl', `<b>${a == null ? 'Not answered. Answer: ' + letter + '.' : (a === q[2] ? 'Correct.' : 'Answer: ' + letter + '.')}</b> ${q[3]}`));
        box.appendChild(d);
      });
    }
    list(); app.appendChild(s2);
  }

  if (!M.length) { app.innerHTML = '<p class="empty">No chapters built yet.</p>'; return; }
  setup();
})();
