/* w-alignment-lens: the sticky "alignment lens" for s-02 to s-04.
   Three states (english, ergative-english, basque), each with two sentence rows:
     row 1 = intransitive (one chip, S), row 2 = transitive (A and P).
   The two rows literally re-align: they slide sideways until the role that shares S's form
   sits in S's column, and one outline encloses that column (S+A in English, S+P otherwise).
   Driven by the page through mount attributes data-state / data-step / data-unlocked and the
   'lens:update' event; the mode switch dispatches a bubbling 'lens:mode' { state }.
   Facts: c-01, c-02 (English pronouns), x-01 (made-up ergative English), c-03, c-04, c-05 (Basque). */
Didactician.widget('w-alignment-lens', function (el, ctx) {
  'use strict';

  var ORDER = ['english', 'ergative-english', 'basque'];
  var STATES = {
    english: {
      mode: 'English', seg: 'English', group: 'sa', groupLabel: 'same form',
      s: { w: 'She', desc: 'the sleeper', form: 'subject form' },
      v1: { w: 'slept.', g: '' },
      a: { w: 'She', desc: 'the seer', form: 'subject form' },
      p: { w: 'him', desc: 'the seen', form: 'object form' },
      v2: { w: 'saw', g: '' }, dot: true, row2: ['a', 'v2', 'p', 'dot'],
      strip: '',
      live: [
        'Two English sentences: She slept. She saw him.',
        'English, with roles: in “She slept”, She is S. In “She saw him”, She is A and him is P.',
        'English: S and A share a form (she); P differs (him).'
      ]
    },
    'ergative-english': {
      mode: 'Made-up English', seg: 'Made-up English', group: 'sp', groupLabel: 'same form', madeUp: true,
      s: { w: 'Her', desc: 'the sleeper', form: 'object form' },
      v1: { w: 'slept.', g: '' },
      a: { w: 'She', desc: 'the seer', form: 'subject form' },
      p: { w: 'him', desc: 'the seen', form: 'object form' },
      v2: { w: 'saw', g: '' }, dot: true, row2: ['a', 'v2', 'p', 'dot'],
      strip: 'madeup',
      live: ['', '', 'Made-up English (no one speaks this): S and P share a form (Her slept, She saw him); A differs.']
    },
    basque: {
      mode: 'Basque', seg: 'Basque', group: 'sp', groupLabel: 'no ending (absolutive)',
      s: { w: 'Martin', desc: '', form: 'no ending' },
      v1: { w: 'etorri da.', g: 'has arrived' },
      a: { w: 'Martin', erg: 'ek', desc: '', form: '-k/-ek (ergative)' },
      p: { w: 'Diego', desc: '', form: 'no ending' },
      v2: { w: 'ikusi du.', g: 'has seen' }, dot: false, row2: ['a', 'p', 'v2'],
      strip: 'tr',
      live: ['', '', 'Basque: S (Martin, in Martin etorri da, ‘Martin has arrived’) and P (Diego, in Martinek Diego ikusi du, ‘Martin has seen Diego’) have no ending, the absolutive. A takes the ergative ending -ek: Martinek.']
    }
  };

  var LOCK = '<svg class="lens-lock" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/></svg>';

  function chip(role) {
    return '<span class="chip lens-chip" data-k="' + role + '">' +
      '<span class="chip-word"><span class="chip-role lens-role" aria-hidden="true">' + role.toUpperCase() + '</span>' +
      '<span class="lens-w"><span class="lens-stem"></span><span class="erg lens-erg"></span></span></span>' +
      '<span class="lens-lab"></span></span>';
  }
  function verb(k) {
    return '<span class="lens-verb" data-k="' + k + '"><span class="word lens-vw"></span><span class="chip-gloss lens-vg"></span></span>';
  }

  el.innerHTML =
    '<div class="lens" aria-hidden="false">' +
      '<div class="lens-head"><span class="lens-mode"></span></div>' +
      '<div class="lens-stage" aria-hidden="true"><div class="lens-comp">' +
        '<div class="lens-outline"><span class="lens-olab"></span></div>' +
        '<div class="lens-row" data-row="1">' + chip('s') + verb('v1') + '</div>' +
        '<div class="lens-row" data-row="2">' + chip('a') + verb('v2') + chip('p') + '<span class="lens-dot word" data-k="dot">.</span></div>' +
      '</div></div>' +
      '<div class="lens-strip" aria-hidden="true">' +
        '<span class="lens-madeup">Made-up English: no one speaks this</span>' +
        '<span class="lens-tr"><span>‘Martin has arrived.’</span><span>‘Martin has seen Diego.’</span></span>' +
      '</div>' +
      '<div class="lens-switch" role="group" aria-label="Compare the views">' +
        ORDER.map(function (s) {
          return '<button type="button" class="lens-seg" data-s="' + s + '" aria-pressed="false">' + LOCK + '<span>' + STATES[s].seg + '</span></button>';
        }).join('') +
      '</div>' +
      '<p class="lens-live" aria-live="polite"></p>' +
    '</div>';

  var q = function (s) { return el.querySelector(s); };
  var root = q('.lens'), comp = q('.lens-comp'), outline = q('.lens-outline'), olab = q('.lens-olab');
  var rows = { 1: q('[data-row="1"]'), 2: q('[data-row="2"]') };
  var items = {};
  Array.prototype.forEach.call(el.querySelectorAll('[data-k]'), function (n) { items[n.getAttribute('data-k')] = n; });
  var segs = Array.prototype.slice.call(el.querySelectorAll('.lens-seg'));
  var live = q('.lens-live'), modeEl = q('.lens-mode');

  var cur = { state: null, step: 0, unlocked: '' };
  var fitK = 1;
  var width = el.clientWidth;
  function reduced() { return ctx.reducedMotion || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }
  var MOVE = 620, EASE = 'cubic-bezier(.65, 0, .35, 1)', SPRING = 'cubic-bezier(.34, 1.56, .64, 1)';

  function readAttrs() {
    var state = el.getAttribute('data-state');
    if (!STATES[state]) state = 'english';
    var unlocked = (el.getAttribute('data-unlocked') || 'english').split(/\s+/).filter(function (s) { return STATES[s]; });
    if (unlocked.indexOf('english') < 0) unlocked.unshift('english');
    if (unlocked.indexOf(state) < 0) state = 'english';            // never show a state the page has not unlocked (ac-04)
    var step = parseInt(el.getAttribute('data-step'), 10);
    if (!(step >= 1 && step <= 3)) step = 1;
    if (state !== 'english') step = 3;                                // these states always arrive grouped
    return { state: state, step: step, unlocked: unlocked };
  }

  /* ---- layout: slide the rows so S and its partner share one column ---------------------- */
  function rel(n) {   // position of an item inside the stage, ignoring running animations' transforms
    var row = n.parentNode;
    return { x: row.offsetLeft + n.offsetLeft, y: row.offsetTop + n.offsetTop, w: n.offsetWidth, h: n.offsetHeight };
  }
  function layout(st) {
    var S = STATES[st];
    var pk = S.group === 'sa' ? 'a' : 'p';
    var order = { 1: ['s', 'v1'], 2: S.row2.filter(function (k) { return !items[k].hidden; }) };
    rows[1].style.marginLeft = '0px'; rows[2].style.marginLeft = '0px';
    ['s', 'v1', 'a', 'v2', 'p', 'dot'].forEach(function (k) { items[k].style.marginLeft = ''; items[k].style.marginRight = ''; });
    var pad = width < 440 ? 8 : 10;
    // keep the grouped column's outline clear of its neighbours (the wider chip sets the outline width)
    var sw = items.s.offsetWidth, pw = items[pk].offsetWidth, colW = Math.max(sw, pw);
    var gap = parseFloat(getComputedStyle(rows[1]).columnGap) || 0;
    [[1, 's', sw], [2, pk, pw]].forEach(function (g) {
      var list = order[g[0]], i = list.indexOf(g[1]);
      var need = Math.ceil((colW - g[2]) / 2 + pad + 6 - gap);
      if (need <= 0) return;
      if (i > 0) items[list[i - 1]].style.marginRight = need + 'px';
      if (i < list.length - 1) items[list[i + 1]].style.marginLeft = need + 'px';
    });
    var s = rel(items.s), p = rel(items[pk]);
    var cs = s.x + s.w / 2, cp = p.x + p.w / 2;
    var off1 = Math.max(0, cp - cs), off2 = Math.max(0, cs - cp);
    var total = Math.max(off1 + rows[1].scrollWidth, off2 + rows[2].scrollWidth);
    // last-resort fit for very narrow or very short phones: scale the composition, never clip it
    var avail = comp.clientWidth - 6;
    var stageH = comp.parentNode.clientHeight, compH = comp.offsetHeight;
    fitK = Math.min(1, avail / total, stageH > 0 ? stageH / compH : 1);
    comp.style.transform = fitK < 1 ? 'scale(' + fitK.toFixed(4) + ')' : '';
    var base = Math.max(0, Math.round((avail / fitK - total) / 2));
    rows[1].style.marginLeft = Math.round(base + off1) + 'px';
    rows[2].style.marginLeft = Math.round(base + off2) + 'px';
    s = rel(items.s); p = rel(items[pk]);
    var x1 = Math.min(s.x, p.x) - pad, x2 = Math.max(s.x + s.w, p.x + p.w) + pad;
    var y1 = s.y - pad, y2 = p.y + p.h + pad - 2;
    return { left: x1, top: y1, width: x2 - x1, height: y2 - y1 };
  }

  /* ---- render ---------------------------------------------------------------------------- */
  function fill(k, d, step, st) {
    var n = items[k];
    var stem = n.querySelector('.lens-stem'), erg = n.querySelector('.lens-erg'), lab = n.querySelector('.lens-lab');
    var changed = stem.textContent && stem.textContent !== d.w;
    stem.textContent = d.w;
    erg.textContent = d.erg || '';
    n.classList.toggle('has-erg', !!d.erg);
    var labText = step >= 3 ? d.form : d.desc;
    lab.textContent = labText;
    lab.classList.toggle('is-tag', !!(d.erg && step >= 3));
    n.classList.toggle('chip--' + k, step >= 2);
    var grp = STATES[st].group === 'sa' ? ['s', 'a'] : ['s', 'p'];
    n.classList.toggle('in-group', step >= 3 && grp.indexOf(k) >= 0);
    return changed;
  }

  function render(next, instant) {
    var animate = !instant && !reduced() && cur.state !== null && typeof Element.prototype.animate === 'function';
    var keys = ['s', 'v1', 'a', 'v2', 'p', 'dot'];
    var first = {}, firstO = null, wasGrouped = root.classList.contains('is-grouped');
    if (animate) {
      keys.forEach(function (k) { first[k] = items[k].getBoundingClientRect(); });
      var cs = getComputedStyle(outline);
      firstO = { left: cs.left, top: cs.top, width: cs.width, height: cs.height };
    }
    keys.concat(['outline']).forEach(function (k) {
      var n = k === 'outline' ? outline : items[k];
      if (n.getAnimations) n.getAnimations().forEach(function (a) { a.cancel(); });
    });

    var S = STATES[next.state], prevState = cur.state;
    root.setAttribute('data-state', next.state);
    root.setAttribute('data-step', String(next.step));
    root.classList.toggle('is-colored', next.step >= 2);
    root.classList.toggle('is-grouped', next.step >= 3);
    root.classList.toggle('is-sp', S.group === 'sp');

    var morphed = [];
    ['s', 'a', 'p'].forEach(function (k) { if (fill(k, S[k], next.step, next.state)) morphed.push(k); });
    ['v1', 'v2'].forEach(function (k) {
      items[k].querySelector('.lens-vw').textContent = S[k].w;
      items[k].querySelector('.lens-vg').textContent = S[k].g;
    });
    items.dot.hidden = !S.dot;
    S.row2.forEach(function (k, i) { items[k].style.order = String(i); });

    modeEl.textContent = S.mode;
    olab.textContent = S.groupLabel;
    root.setAttribute('data-strip', S.strip);

    segs.forEach(function (b) {
      var s = b.getAttribute('data-s'), open = next.unlocked.indexOf(s) >= 0;
      b.disabled = !open;
      b.classList.toggle('is-locked', !open);
      b.setAttribute('aria-pressed', String(s === next.state));
      b.setAttribute('aria-label', STATES[s].seg + (open ? '' : ' (locked: keep reading)'));
    });
    root.classList.toggle('has-switch', next.unlocked.length > 1);

    var o = layout(next.state);
    outline.style.left = o.left + 'px'; outline.style.top = o.top + 'px';
    outline.style.width = o.width + 'px'; outline.style.height = o.height + 'px';

    var text = S.live[next.step - 1] || S.live[2];
    if (live.textContent !== text) live.textContent = text;

    if (animate) {
      keys.forEach(function (k) {
        var n = items[k];
        if (n.hidden) return;
        var a = first[k], b = n.getBoundingClientRect();
        if (!a.width) { n.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, delay: MOVE * 0.6, easing: 'ease-out', fill: 'backwards' }); return; }
        var dx = (a.left - b.left) / fitK, dy = (a.top - b.top) / fitK;
        if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) return;
        n.animate([{ transform: 'translate(' + dx + 'px,' + dy + 'px)' }, { transform: 'none' }], { duration: MOVE, easing: EASE });
      });
      if (wasGrouped && root.classList.contains('is-grouped')) {
        outline.animate([firstO, { left: o.left + 'px', top: o.top + 'px', width: o.width + 'px', height: o.height + 'px' }], { duration: MOVE, easing: EASE });
      }
      if (prevState !== next.state && root.classList.contains('is-grouped')) {
        olab.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.18) rotate(-3deg)' }, { transform: 'none' }], { duration: 420, delay: MOVE * 0.75, easing: SPRING });
      }
      morphed.forEach(function (k) {
        items[k].querySelector('.lens-stem').animate([
          { transform: 'rotateX(90deg)', opacity: 0 }, { transform: 'rotateX(-20deg)', opacity: 1, offset: 0.7 }, { transform: 'none' }
        ], { duration: 460, delay: 120, easing: 'ease-out', fill: 'backwards' });
      });
      if (S.a.erg && prevState !== next.state) {
        items.a.querySelector('.lens-erg').animate([
          { transform: 'scale(0) rotate(-25deg)' }, { transform: 'scale(1.3) rotate(6deg)', offset: 0.7 }, { transform: 'none' }
        ], { duration: 520, delay: MOVE * 0.55, easing: 'ease-out', fill: 'backwards' });
      }
    }
    cur = { state: next.state, step: next.step, unlocked: next.unlocked.join(' ') };
  }

  function sync() {
    var n = readAttrs();
    if (n.state === cur.state && n.step === cur.step && n.unlocked.join(' ') === cur.unlocked) return;
    render(n, false);
  }

  /* ---- mode switch ------------------------------------------------------------------------ */
  segs.forEach(function (b, i) {
    b.addEventListener('click', function () {
      var s = b.getAttribute('data-s');
      if (b.disabled) return;
      var n = readAttrs();
      if (s !== cur.state || cur.step !== 3) render({ state: s, step: 3, unlocked: n.unlocked }, false);
      el.dispatchEvent(new CustomEvent('lens:mode', { bubbles: true, detail: { state: s } }));
    });
    b.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      var dir = e.key === 'ArrowRight' ? 1 : -1;
      for (var j = 1; j < segs.length; j++) {
        var t = segs[(i + dir * j + segs.length) % segs.length];
        if (!t.disabled) { t.focus(); t.click(); break; }
      }
    });
  });

  /* ---- inputs from the page --------------------------------------------------------------- */
  el.addEventListener('lens:update', sync);
  if ('MutationObserver' in window) {
    new MutationObserver(sync).observe(el, { attributes: true, attributeFilter: ['data-state', 'data-step', 'data-unlocked'] });
  }

  ctx.onResize(function (w) {
    width = w;
    root.classList.toggle('is-narrow', w < 440);
    root.classList.toggle('is-tight', w < 360);
    if (cur.state) render(readAttrs(), true);
  });
  render(readAttrs(), true);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { render(readAttrs(), true); });
});
