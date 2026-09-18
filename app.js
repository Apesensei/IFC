/* IFC study engine — renders any chapter object from /data/chN.js */
(function () {
  const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };
  const KEYS = ['A', 'B', 'C', 'D', 'E'];

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
    const d = el('div', 'flag');
    d.appendChild(el('span', 'lbl', f.label || 'Watch this'));
    d.appendChild(el('p', null, f.text));
    return d;
  }

  function pts(list) {
    const u = el('ul', 'pts');
    list.forEach(p => u.appendChild(el('li', null, p)));
    return u;
  }

  function renderCore(ch, root) {
    const s = el('section'); s.id = 'core';
    s.appendChild(el('h2', null, 'Core — the must-know'));
    s.appendChild(el('p', 'sub', ch.coreSub || 'Mapped to the learning objectives'));
    (ch.objectives || []).forEach(o => {
      const d = el('div', 'lo');
      d.appendChild(el('span', 'lo-tag', o.tag));
      d.appendChild(el('h4', null, o.title));
      (o.blocks || []).forEach(b => {
        if (b.points) d.appendChild(pts(b.points));
        else if (b.flag) d.appendChild(flagBox(b.flag));
        else if (b.table) { if (b.table.caption) d.appendChild(el('h3', null, b.table.caption)); d.appendChild(table(b.table)); }
      });
      s.appendChild(d);
    });
    root.appendChild(s);
  }

  function renderNumbers(ch, root) {
    if (!ch.numbers || !ch.numbers.length) return;
    const s = el('section'); s.id = 'numbers';
    s.appendChild(el('h2', null, 'Every number and date'));
    s.appendChild(el('p', 'sub', 'If a figure appears in this chapter, it is here'));
    s.appendChild(table({ head: ['When', 'What'], rows: ch.numbers, numCol: 0 }));
    root.appendChild(s);
  }

  function renderTraps(ch, root) {
    if (!ch.traps || !ch.traps.length) return;
    const s = el('section'); s.id = 'traps';
    s.appendChild(el('h2', null, 'Confusion traps'));
    s.appendChild(el('p', 'sub', 'Where the distractors live'));
    ch.traps.forEach(t => {
      const d = el('div', 'trap');
      d.appendChild(el('div', null, `<div class="t">${t[0]}</div><p>${t[1]}</p>`));
      d.appendChild(el('div', null, `<div class="t">${t[2]}</div><p>${t[3]}</p>`));
      s.appendChild(d);
    });
    root.appendChild(s);
  }

  function renderCards(ch, root) {
    if (!ch.cards || !ch.cards.length) return;
    const s = el('section'); s.id = 'cards';
    s.appendChild(el('h2', null, 'Recall drill'));
    s.appendChild(el('p', 'sub', `Click the card to flip · ${ch.cards.length} cards`));
    const bar = el('div', 'cardbar');
    const prev = el('button', null, '← Prev'), next = el('button', 'primary', 'Next →'),
      shuf = el('button', null, 'Shuffle'), cnt = el('span', 'counter');
    bar.append(prev, next, shuf, cnt); s.appendChild(bar);
    const card = el('div', 'card');
    card.setAttribute('role', 'button'); card.tabIndex = 0;
    const side = el('span', 'side'), body = el('div'), hint = el('span', 'hint', 'click to flip');
    card.append(side, body, hint); s.appendChild(card);
    let order = ch.cards.map((_, i) => i), pos = 0, flip = false;
    function draw() {
      const c = ch.cards[order[pos]];
      side.textContent = flip ? 'Answer' : 'Prompt';
      body.innerHTML = flip ? `<div class="a">${c[1]}</div>` : `<p class="q">${c[0]}</p>`;
      cnt.textContent = `${pos + 1} / ${ch.cards.length}`;
    }
    card.addEventListener('click', () => { flip = !flip; draw(); });
    card.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip = !flip; draw(); } });
    next.addEventListener('click', () => { pos = (pos + 1) % ch.cards.length; flip = false; draw(); });
    prev.addEventListener('click', () => { pos = (pos - 1 + ch.cards.length) % ch.cards.length; flip = false; draw(); });
    shuf.addEventListener('click', () => { for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[order[i], order[j]] = [order[j], order[i]]; } pos = 0; flip = false; draw(); });
    draw(); root.appendChild(s);
  }

  function renderQuiz(ch, root) {
    if (!ch.quiz || !ch.quiz.length) return;
    const s = el('section'); s.id = 'quiz';
    s.appendChild(el('h2', null, `${ch.quiz.length}-question check`));
    s.appendChild(el('p', 'sub', 'Exam-style. Pick an answer for instant feedback.'));
    const box = el('div'); s.appendChild(box);
    const score = el('div', 'score');
    const st = el('span', 'st'); const reset = el('button', null, 'Reset quiz');
    score.append(st, reset); s.appendChild(score);
    let answered = 0, correct = 0;
    const tick = () => { st.innerHTML = `Answered <b>${answered}</b> / ${ch.quiz.length} &nbsp;·&nbsp; Correct <b>${correct}</b> ${answered ? '(' + Math.round(correct / answered * 100) + '%)' : ''}`; };
    function build() {
      box.innerHTML = ''; answered = 0; correct = 0; tick();
      ch.quiz.forEach((q, qi) => {
        const d = el('div', 'q-item', `<div class="qn">Question ${qi + 1}</div><p class="qt">${q[0]}</p>`);
        const ol = el('div', 'opts');
        q[1].forEach((opt, oi) => {
          const b = el('button', 'opt', `<span class="k">${KEYS[oi]}</span><span>${opt}</span>`);
          b.addEventListener('click', () => {
            if (d.dataset.done) return;
            d.dataset.done = '1'; answered++;
            ol.querySelectorAll('.opt').forEach(x => x.disabled = true);
            ol.children[q[2]].classList.add('correct');
            if (oi === q[2]) correct++; else b.classList.add('wrong');
            d.appendChild(el('div', 'expl', `<b>${oi === q[2] ? 'Correct.' : 'Answer: ' + KEYS[q[2]] + '.'}</b> ${q[3]}`));
            tick();
          });
          ol.appendChild(b);
        });
        d.appendChild(ol); box.appendChild(d);
      });
    }
    reset.addEventListener('click', build); build();
    root.appendChild(s);
  }

  function renderMethod(ch, root) {
    if (!ch.method) return;
    const s = el('section'); s.id = 'method';
    s.appendChild(el('h2', null, ch.method.title || 'How to study this'));
    s.appendChild(el('p', 'sub', ch.method.sub || 'The faster loop'));
    const m = el('div', 'method'), ol = el('ol');
    ch.method.steps.forEach(x => ol.appendChild(el('li', null, x)));
    m.appendChild(ol); s.appendChild(m);
    if (ch.method.flag) s.appendChild(flagBox(ch.method.flag));
    root.appendChild(s);
  }

  window.IFCRender = function (ch) {
    document.title = `IFC Chapter ${ch.n} Drill`;
    const nav = document.getElementById('nav');
    const ids = [['method', 'Method'], ['core', 'Core'], ['numbers', 'Numbers'], ['traps', 'Traps'], ['cards', 'Cards'], ['quiz', 'Quiz']];
    nav.innerHTML = ids.map(i => `<a href="#${i[0]}">${i[1]}</a>`).join('');
    document.getElementById('bt').innerHTML = `Chapter ${ch.n}<span>${ch.shortTitle || ''}</span>`;
    const hero = document.getElementById('hero');
    hero.innerHTML = `<p class="eyebrow">${ch.section}</p><h1>${ch.title}</h1><p class="lede">${ch.lede}</p>`;
    const root = document.getElementById('body');
    renderMethod(ch, root); renderCore(ch, root); renderNumbers(ch, root);
    renderTraps(ch, root); renderCards(ch, root); renderQuiz(ch, root);
    document.getElementById('foot').innerHTML = ch.footer || 'Study aid only — not a substitute for the official text.';
  };
})();
