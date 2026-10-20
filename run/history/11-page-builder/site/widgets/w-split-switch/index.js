/* w-split-switch (low complexity, built by the page builder).
   Hindi-Urdu habitual vs perfective: the agent's ergative -nē appears only in "has sold" (c-10).
   Locked until the reader commits k-07 (page fires 'didactician:commit' with detail.id === 'k-07'). */
Didactician.widget('w-split-switch', function (el) {
  var STATES = {
    sells: {
      label: 'sells', sub: 'habitual',
      agent: 'laṛkā', erg: '', agentGloss: 'boy', agentTag: 'A: no marker',
      verb: 'bēctā hai', verbGloss: 'sells',
      tr: '‘The boy sells a book.’',
      live: 'Sells (habitual): laṛkā pustak bēctā hai. The boy, A, has no marker.'
    },
    sold: {
      label: 'has sold', sub: 'perfective',
      agent: 'laṛkē', erg: '-nē', agentGloss: 'boy-ERG', agentTag: 'A: ergative -nē',
      verb: 'bēcī hai', verbGloss: 'has sold',
      tr: '‘The boy has sold a book.’',
      live: 'Has sold (perfective): laṛkē-nē pustak bēcī hai. The boy, A, takes the ergative -nē.'
    }
  };
  var state = 'sells';

  el.innerHTML =
    '<div class="ss">' +
      '<div class="ss-head">' +
        '<span class="ss-title">Hindi-Urdu</span>' +
        '<div class="ss-ctrl" role="group" aria-label="Tense">' +
          '<button type="button" class="ss-seg" data-s="sells" aria-pressed="true">sells<small>habitual</small></button>' +
          '<button type="button" class="ss-seg" data-s="sold" aria-pressed="false">has sold<small>perfective</small></button>' +
        '</div>' +
      '</div>' +
      '<p class="ss-lock">Answer the question above to unlock the switch.</p>' +
      '<div class="ss-sent" aria-hidden="true">' +
        '<span class="chip chip--a ss-agent"><span class="chip-word"><span class="chip-role">A</span><span><span class="ss-aw"></span><span class="erg ss-erg"></span></span></span>' +
          '<span class="chip-gloss ss-ag"></span><span class="ss-tag"></span></span>' +
        '<span class="chip chip--p"><span class="chip-word"><span class="chip-role">P</span>pustak</span><span class="chip-gloss">book</span></span>' +
        '<span class="chip ss-verb"><span class="word ss-vw"></span><span class="chip-gloss ss-vg"></span></span>' +
      '</div>' +
      '<p class="ss-tr"></p>' +
      '<p class="ss-foot">The noun’s own ending also shifts (laṛkā → laṛkē) before -nē.</p>' +
      '<p class="sr-only" aria-live="polite"></p>' +
    '</div>';

  var segs = Array.prototype.slice.call(el.querySelectorAll('.ss-seg'));
  var q = function (s) { return el.querySelector(s); };
  var live = q('[aria-live]');

  function render(announce) {
    var s = STATES[state];
    segs.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-s') === state)); });
    q('.ss-aw').textContent = s.agent;
    var erg = q('.ss-erg');
    erg.textContent = s.erg || '-nē';
    el.classList.toggle('is-erg', !!s.erg);
    q('.ss-ag').textContent = s.agentGloss;
    q('.ss-tag').textContent = s.agentTag;
    q('.ss-vw').textContent = s.verb;
    q('.ss-vg').textContent = s.verbGloss;
    q('.ss-tr').textContent = s.tr;
    if (announce) live.textContent = s.live;
  }

  function setLocked(locked) {
    el.classList.toggle('is-locked', locked);
    segs.forEach(function (b) { b.disabled = locked; });
  }

  segs.forEach(function (b, i) {
    b.addEventListener('click', function () { state = b.getAttribute('data-s'); render(true); });
    b.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        var n = segs[(i + (e.key === 'ArrowRight' ? 1 : segs.length - 1)) % segs.length];
        n.focus(); n.click();
      }
    });
  });

  var committed = window.Ergativity && window.Ergativity.committed && window.Ergativity.committed['k-07'];
  setLocked(!committed);
  document.addEventListener('didactician:commit', function (e) {
    if (e.detail && e.detail.id === 'k-07') { setLocked(false); }
  });
  render(false);
});
