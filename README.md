# IFC Exam Drill

Static study site for the CSI **Investment Funds in Canada (IFC)** course.
No build step, no dependencies — plain HTML/CSS/JS, hosted on GitHub Pages.

## Adding a chapter

1. Add `data/chN.js` following the shape of `data/ch1.js`:

```js
window.IFC = window.IFC || {};
window.IFC[N] = {
  n: N, section: "...", shortTitle: "...", title: "...", lede: "...",
  method:     { title, sub, steps: [...], flag: {label, text} },
  objectives: [ { tag, title, blocks: [ {points:[...]}, {flag:{...}}, {table:{caption,head,rows,numCol}} ] } ],
  numbers:    [ [when, what], ... ],
  traps:      [ [leftTitle, leftText, rightTitle, rightText], ... ],
  cards:      [ [prompt, answerHTML], ... ],
  quiz:       [ [question, [opts], correctIndex, explanation], ... ]
};
```

2. Flip that chapter to `ready: true` in `data/manifest.js`.

Every field is optional except `n`, `title`, `section`, `lede` — sections with no
data are skipped. Nothing else needs to change: `chapter.html` + `assets/app.js`
render any chapter generically.

## Files

| Path | Purpose |
|---|---|
| `index.html` | Chapter hub |
| `chapter.html` | Generic renderer, reads `?ch=N` |
| `assets/app.js` | Render engine — notes, flashcards, scored quiz |
| `assets/style.css` | Shared theme (light + dark) |
| `data/manifest.js` | Chapter list for the hub |
| `data/chN.js` | One chapter's content |
