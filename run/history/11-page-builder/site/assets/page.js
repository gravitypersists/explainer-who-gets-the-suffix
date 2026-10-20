/* Page behaviour for "Who Gets the Suffix?": the s-01 pair picker, comprehension checks,
   the lens scroll controller (drives w-alignment-lens through attributes + events), and the
   s-06 echo of the reader's opening pick. The pick lives in page memory only (no storage). */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var committed = {};               // check id -> true once the reader committed
  window.Ergativity = window.Ergativity || {};
  window.Ergativity.committed = committed;

  function commit(id, detail) {
    committed[id] = true;
    var card = $('[data-check="' + id + '"]');
    if (card) card.classList.add('is-committed');
    document.dispatchEvent(new CustomEvent('didactician:commit', { detail: Object.assign({ id: id }, detail || {}) }));
  }

  /* ---- s-01: pick two tiles ------------------------------------------------------------- */
  var LABEL = { sleeper: 'the sleeper', seer: 'the one who sees', seen: 'the one who is seen' };
  var pick = null;                  // e.g. ['sleeper','seer']
  var k01 = $('[data-check="k-01"]');
  var tiles = $$('.tile', k01);
  var lasso = $('.lasso', k01), lassoPath = $('.lasso path', k01), lassoText = $('.lasso text', k01);
  var k01fb = $('.d-feedback', k01);

  function chosen() { return tiles.filter(function (t) { return t.getAttribute('aria-pressed') === 'true'; }); }

  function drawLasso() {
    var sel = chosen();
    if (sel.length !== 2) { lasso.classList.remove('on'); lassoPath.setAttribute('d', ''); lassoText.textContent = ''; return; }
    var wrap = lasso.parentNode.getBoundingClientRect();
    var a = sel[0].getBoundingClientRect(), b = sel[1].getBoundingClientRect();
    var stacked = Math.abs(a.left - b.left) < 4;
    var d, tx, ty, anchor;
    if (!stacked) {   // tiles in a row: a bracket under both
      var y0 = Math.max(a.bottom, b.bottom) - wrap.top + 2, y1 = y0 + 22;
      var x0 = a.left + a.width / 2 - wrap.left, x1 = b.left + b.width / 2 - wrap.left;
      d = 'M' + x0 + ',' + (y0 - 2) + ' L' + x0 + ',' + (y1 - 8) + ' Q' + x0 + ',' + y1 + ' ' + (x0 + 8) + ',' + y1 +
          ' L' + (x1 - 8) + ',' + y1 + ' Q' + x1 + ',' + y1 + ' ' + x1 + ',' + (y1 - 8) + ' L' + x1 + ',' + (y0 - 2);
      tx = (x0 + x1) / 2; ty = y1 + 4; anchor = 'middle';
    } else {          // stacked tiles: a bracket on the right
      var xr0 = Math.max(a.right, b.right) - wrap.left + 2, xr1 = xr0 + 22;
      var ya = a.top + a.height / 2 - wrap.top, yb = b.top + b.height / 2 - wrap.top;
      d = 'M' + (xr0 - 2) + ',' + ya + ' L' + (xr1 - 8) + ',' + ya + ' Q' + xr1 + ',' + ya + ' ' + xr1 + ',' + (ya + 8) +
          ' L' + xr1 + ',' + (yb - 8) + ' Q' + xr1 + ',' + yb + ' ' + (xr1 - 8) + ',' + yb + ' L' + (xr0 - 2) + ',' + yb;
      tx = xr1 + 2; ty = (ya + yb) / 2; anchor = 'start';
    }
    lassoPath.setAttribute('d', d);
    lassoText.setAttribute('x', tx); lassoText.setAttribute('y', ty);
    lassoText.setAttribute('text-anchor', anchor);
    lassoText.setAttribute('dominant-baseline', stacked ? 'middle' : 'hanging');
    lassoText.textContent = stacked ? '' : 'your pair';
    lasso.classList.remove('on'); void lasso.getBoundingClientRect();
    if (reduce) { lassoPath.style.strokeDashoffset = '0'; } else { lassoPath.style.strokeDashoffset = ''; }
    requestAnimationFrame(function () { lasso.classList.add('on'); });
  }

  tiles.forEach(function (t) {
    t.addEventListener('click', function () {
      if (pick) return;
      var on = t.getAttribute('aria-pressed') === 'true';
      t.setAttribute('aria-pressed', on ? 'false' : 'true');
      var sel = chosen();
      if (sel.length === 2) {
        pick = sel.map(function (x) { return x.getAttribute('data-pick'); });
        tiles.forEach(function (x) { x.disabled = x.getAttribute('aria-pressed') !== 'true'; if (x.getAttribute('aria-pressed') === 'true') x.setAttribute('aria-disabled', 'true'); });
        $('#k01-lead').textContent = 'You paired ' + LABEL[pick[0]] + ' with ' + LABEL[pick[1]] + '.';
        k01fb.hidden = false;
        drawLasso();
        commit('k-01', { pick: pick.slice() });
        renderEcho();
      }
    });
  });
  $('[data-k01-reset]').addEventListener('click', function () {
    pick = null;
    tiles.forEach(function (x) { x.disabled = false; x.removeAttribute('aria-disabled'); x.setAttribute('aria-pressed', 'false'); });
    k01fb.hidden = true;
    drawLasso();
    renderEcho();
    tiles[0].focus();
  });
  window.addEventListener('resize', function () { if (pick) drawLasso(); });

  /* ---- multiple-choice checks: commit, then reveal in place ---------------------------- */
  $$('.d-check[data-kind="mc"]').forEach(function (card) {
    var id = card.getAttribute('data-check');
    var opts = $$('.d-option', card);
    var fb = $('.d-feedback', card);
    var tpl = $('template.fb', card);
    opts.forEach(function (o) {
      o.setAttribute('aria-pressed', 'false');
      o.addEventListener('click', function () {
        if (committed[id]) return;
        o.setAttribute('aria-pressed', 'true');
        opts.forEach(function (x) {
          x.classList.add(x.hasAttribute('data-correct') ? 'is-right' : 'is-wrong');
          x.disabled = true;
        });
        fb.innerHTML = '';
        var lead = document.createElement('span'); lead.className = 'lead'; lead.textContent = o.getAttribute('data-lead') || '';
        fb.appendChild(lead);
        fb.appendChild(tpl.content.cloneNode(true));
        fb.hidden = false;
        commit(id, { correct: o.hasAttribute('data-correct'), option: opts.indexOf(o) });
      });
    });
  });

  /* ---- k-08: think, then reveal -------------------------------------------------------- */
  var k08 = $('[data-check="k-08"]');
  $('[data-reveal]', k08).addEventListener('click', function (e) {
    $('.d-feedback', k08).hidden = false;
    e.currentTarget.disabled = true;
    e.currentTarget.textContent = 'Answer shown below';
    commit('k-08');
    renderEcho();
  });

  /* ---- s-06 echo of the opening pick ---------------------------------------------------- */
  function pickKind() {
    if (!pick) return null;
    var s = pick.slice().sort().join('+');
    if (s === 'seer+sleeper') return 'english';
    if (s === 'seen+sleeper') return 'basque';
    return 'neither';
  }
  function renderEcho() {
    var echo = $('#echo'), k = pickKind(), k8 = $('.k08-echo', k08);
    if (!k) {
      echo.innerHTML = 'You skipped the opening question. <a href="#s-01">Go back and pick two</a>, then come back here to see what your pick says.';
      k8.textContent = 'You didn’t make an opening pick, so there’s nothing to compare yet.';
      return;
    }
    var pair = '<b>' + LABEL[pick[0]] + '</b> with <b>' + LABEL[pick[1]] + '</b>';
    if (k === 'english') {
      echo.innerHTML = 'At the start, you grouped ' + pair + '. That’s English’s grouping, S with A. Your grammar was talking.';
      k8.textContent = 'You picked the sleeper and the seer. That matches English.';
    } else if (k === 'basque') {
      echo.innerHTML = 'At the start, you grouped ' + pair + '. That’s Basque’s grouping, S with P, the opposite of what English does.';
      k8.textContent = 'You picked the sleeper and the seen. That matches Basque.';
    } else {
      echo.innerHTML = 'At the start, you grouped ' + pair + ', the two people in the same sentence. Neither English nor Basque draws its line there: both keep A and P apart.';
      k8.textContent = 'You picked the seer and the seen. That matches neither English nor Basque.';
    }
  }
  renderEcho();

  /* ---- lens scroll controller ------------------------------------------------------------
     Contract with w-alignment-lens (see widgets/manifest.json):
       mount attributes  data-state = english | ergative-english | basque
                         data-step  = 1 | 2 | 3   (1: plain chips; 2: + S/A/P letters + colours; 3: + group outline)
                         data-unlocked = space-separated states the mode switch may offer
       event (page→widget) 'lens:update' on the mount, detail { state, step, unlocked: [...], source: 'scroll'|'gate' }
       event (widget→page) 'lens:mode' bubbling from the mount, detail { state } when the reader uses the switch */
  var lens = $('#lens');
  var canvas = $('.lens-canvas');
  var steps = $$('[data-lens-state]');
  var unlocked = ['english'];
  var activeIdx = -1;

  function setLens(state, step, source) {
    if (unlocked.indexOf(state) < 0) unlocked.push(state);
    lens.setAttribute('data-state', state);
    lens.setAttribute('data-step', String(step));
    lens.setAttribute('data-unlocked', unlocked.join(' '));
    lens.dispatchEvent(new CustomEvent('lens:update', { detail: { state: state, step: +step, unlocked: unlocked.slice(), source: source } }));
  }
  function gated(el) { var g = el.getAttribute('data-lens-gate'); return g && !committed[g]; }
  function refreshGates() { steps.forEach(function (s) { s.classList.toggle('is-gated', !!gated(s)); }); }

  function trigger() {
    var vh = window.innerHeight;
    if (window.innerWidth < 900 && getComputedStyle(canvas).position === 'sticky') {
      var c = canvas.getBoundingClientRect();
      if (c.top <= 1) return c.bottom + (vh - c.bottom) * 0.45;
    }
    return vh * 0.6;
  }
  function onScroll() {
    var t = trigger(), idx = 0;
    for (var i = 0; i < steps.length; i++) {
      if (steps[i].getBoundingClientRect().top < t && !gated(steps[i])) idx = i;
      else if (steps[i].getBoundingClientRect().top >= t) break;
    }
    if (idx === activeIdx) return;
    activeIdx = idx;
    steps.forEach(function (s, j) { s.classList.toggle('is-active', j === idx); });
    var s = steps[idx];
    setLens(s.getAttribute('data-lens-state'), s.getAttribute('data-lens-step'), 'scroll');
  }
  var ticking = false;
  function schedule() { if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; onScroll(); }); } }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);

  document.addEventListener('didactician:commit', function (e) {
    var card = $('[data-check="' + e.detail.id + '"]');
    var unlock = card && card.getAttribute('data-unlocks');
    refreshGates();
    if (unlock === 'ergative-english') {
      // the reader just committed next to the canvas: flip it now (ac-04)
      setLens('ergative-english', 3, 'gate');
    }
  });
  lens.addEventListener('lens:mode', function (e) {
    if (e.detail && e.detail.state) { lens.setAttribute('data-state', e.detail.state); lens.setAttribute('data-step', '3'); }
  });

  refreshGates();
  lens.setAttribute('data-unlocked', unlocked.join(' '));
  onScroll();
})();
