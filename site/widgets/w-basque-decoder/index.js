/* w-basque-decoder: three faded puzzles (blueprint B3). For each Basque noun the reader chooses
   bare or -k, presses Check, and gets per-noun feedback with the noun's role (S/A/P).
   Model (c-05, c-12): the doer of a two-participant verb (A) takes -k; the lone participant (S)
   and the one acted on (P) stay bare. Second clue (c-12 note): auxiliary "du" with a -k noun,
   "da" without. Sentences: only the verified set in x-05 / c-12. Wrong -k forms exist only as
   toggle states on the chips, never as printed sentences (ac-06).
   Optional events out (bubbling): decoder:check {puzzle, correct}, decoder:complete. */
Didactician.widget('w-basque-decoder', function (el, ctx) {
  'use strict';

  var ROLE_NAME = { S: 'lone participant', A: 'doer', P: 'acted on' };

  var PUZZLES = [
    {
      en: 'The woman has come.',
      verb: 'etorri', aux: 'da', vgloss: 'has come',
      answer: [['Emakumea', false]], tail: ' etorri da.',
      nouns: [
        { stem: 'Emakumea', gloss: 'the woman', role: 'S',
          right: 'The woman is S, the only participant of “has come”. S stays bare.',
          wrong: 'The woman is S, the only participant of “has come”. S stays bare: -k is only for the doer of a two-participant verb.' }
      ],
      fb: 'Emakumea. “Has come” has one participant, so the woman is S, and S stays bare, just like “Martin etorri da” and “Umea etorri da”. Notice the “da” at the end: Basque uses <b>da</b> when no one is marked with -k. That’s your second clue.'
    },
    {
      en: 'The woman has read the book.',
      verb: 'irakurri', aux: 'du', vgloss: 'has read',
      answer: [['Emakumea', true], ['liburua', false]], tail: ' irakurri du.',
      nouns: [
        { stem: 'Emakumea', gloss: 'the woman', role: 'A',
          right: 'The woman is A, the one doing the reading. The doer of a two-participant verb takes -k.',
          wrong: 'The woman is A, the one doing the reading, so she takes -k. Look at the auxiliary: “du” signals that someone in the sentence has -k.' },
        { stem: 'liburua', gloss: 'the book', role: 'P',
          right: 'The book is P, the thing read. P stays bare, exactly like the lone woman who came.',
          wrong: 'The book is P, the thing read. Putting -k on it groups P with A, which is English’s habit, not Basque’s.' }
      ],
      fb: 'The doer of a two-participant verb (A) takes -k: <b>emakumeak</b>. The thing read (P) stays bare, exactly like the lone woman who came.'
    },
    {
      en: 'The man has seen the woman.',
      verb: 'ikusi', aux: 'du', vgloss: 'has seen',
      answer: [['Gizona', true], ['emakumea', false]], tail: ' ikusi du.',
      nouns: [
        { stem: 'Gizona', gloss: 'the man', role: 'A',
          right: 'The man is A, the one who sees, so he takes -k.',
          wrong: 'The man is A, the one who sees, so he takes -k. Look at the auxiliary: “du” signals that someone in the sentence has -k.' },
        { stem: 'emakumea', gloss: 'the woman', role: 'P',
          right: 'The woman is P, the one seen. She stays bare, just as she did when she came.',
          wrong: 'The woman is P, the one seen. Putting -k on her groups P with A, which is English’s habit, not Basque’s.' }
      ],
      fb: 'The doer (A) takes -k: <b>gizonak</b>. The person seen (P) stays bare. Notice that “emakumea” is bare when she comes and bare when she is seen. That is the S+P group, the <b>absolutive</b>.'
    }
  ];

  var state;
  function fresh() {
    return PUZZLES.map(function (p, i) {
      return { unlocked: i === 0, choice: p.nouns.map(function () { return null; }), checked: false, correct: null, everChecked: false };
    });
  }
  state = fresh();

  // ---------- skeleton ----------
  el.innerHTML =
    '<div class="bd">' +
      '<div class="bd-head">' +
        '<div class="bd-title"><span class="bd-kicker">Basque decoder</span><span class="bd-h">Who gets the <span class="erg">-k</span>?</span></div>' +
        '<div class="bd-prog" aria-hidden="true"><span class="bd-dot"></span><span class="bd-dot"></span><span class="bd-dot"></span><span class="bd-prog-n">0/3</span></div>' +
      '</div>' +
      '<p class="bd-banner"><span class="bd-banner-ico" aria-hidden="true">1</span>Every noun here is singular.</p>' +
      '<div class="bd-list"></div>' +
      '<div class="bd-done" hidden></div>' +
      '<div class="bd-foot"><button type="button" class="bd-btn bd-btn--ghost bd-resetall">Reset all</button></div>' +
      '<p class="bd-sr" aria-live="polite"></p>' +
    '</div>';

  var list = el.querySelector('.bd-list');
  var done = el.querySelector('.bd-done');
  var live = el.querySelector('[aria-live]');
  var dots = el.querySelectorAll('.bd-dot');
  var progN = el.querySelector('.bd-prog-n');
  var cards = [];

  function say(t) { live.textContent = ''; setTimeout(function () { live.textContent = t; }, 30); }

  function nw(t) { return t.replace(/(^|[\s(“:])-k\b/g, '$1<span class="bd-nw">-k</span>'); }
  function word(stem, k) { return stem + (k ? 'k' : ''); }
  function sentenceHtml(ans, tail) {
    return ans.map(function (a) {
      return '<span class="bd-ans-w">' + a[0] + (a[1] ? '<span class="erg">k</span>' : '') + '</span>';
    }).join(' ') + tail;
  }

  // ---------- one puzzle card ----------
  function buildCard(i) {
    var p = PUZZLES[i];
    var card = document.createElement('article');
    card.className = 'bd-p';
    card.setAttribute('aria-labelledby', 'bd-pt-' + i);
    card.innerHTML =
      '<header class="bd-p-head">' +
        '<span class="bd-p-num" id="bd-pt-' + i + '">Puzzle ' + (i + 1) + ' <small>of 3</small></span>' +
        '<span class="bd-p-tag">' + (p.nouns.length === 1 ? '1 noun' : p.nouns.length + ' nouns') + ' · all singular</span>' +
      '</header>' +
      '<p class="bd-en">‘' + p.en + '’</p>' +
      '<div class="bd-locked"><span class="bd-lock-ico" aria-hidden="true"></span>Check puzzle ' + i + ' to unlock this one.</div>' +
      '<div class="bd-body"></div>';
    return card;
  }

  function buildBody(i) {
    var p = PUZZLES[i];
    var body = cards[i].querySelector('.bd-body');
    var nouns = p.nouns.map(function (n, j) {
      return '<span class="chip bd-chip" data-j="' + j + '">' +
          '<button type="button" class="chip-word bd-noun" aria-pressed="mixed">' +
            '<span class="chip-role bd-role" aria-hidden="true"></span>' +
            '<span class="bd-w"><span class="bd-stem">' + n.stem + '</span><span class="erg bd-k" aria-hidden="true">k</span><span class="bd-q" aria-hidden="true" data-anim="flair">?</span></span>' +
            '<span class="bd-mark" aria-hidden="true"></span>' +
          '</button>' +
          '<span class="chip-gloss">' + n.gloss + '</span>' +
          '<span class="bd-state" aria-hidden="true"></span>' +
        '</span>';
    }).join('');
    var clue = i > 0
      ? '<p class="bd-clue"><span class="bd-clue-tag">Clue</span><span><b>du</b> comes with a -k noun; <b>da</b> comes without one.</span></p>'
      : '';
    body.innerHTML =
      '<div class="bd-sent">' + nouns +
        '<span class="chip bd-verb"><span class="word"><span>' + p.verb + '</span> <span class="bd-aux' + (i > 0 ? ' is-clued' : '') + '">' + p.aux + '</span>.</span>' +
          '<span class="chip-gloss">' + p.vgloss + '</span></span>' +
      '</div>' +
      clue +
      '<div class="bd-fb" tabindex="-1" hidden></div>' +
      '<div class="bd-actions">' +
        '<button type="button" class="bd-btn bd-btn--go bd-check" disabled>Check</button>' +
        '<button type="button" class="bd-btn bd-btn--ghost bd-retry" hidden>Try again</button>' +
        (i < 2 ? '<button type="button" class="bd-btn bd-btn--ghost bd-next" hidden>Puzzle ' + (i + 2) + ' ↓</button>' : '') +
        '<span class="bd-hint"></span>' +
      '</div>';

    body.querySelectorAll('.bd-noun').forEach(function (btn, j) {
      btn.addEventListener('click', function () { toggle(i, j); });
    });
    body.querySelector('.bd-check').addEventListener('click', function () { check(i); });
    body.querySelector('.bd-retry').addEventListener('click', function () { retry(i); });
    var nx = body.querySelector('.bd-next');
    if (nx) nx.addEventListener('click', function () {
      var c = cards[i + 1];
      c.scrollIntoView({ behavior: ctx.reducedMotion ? 'auto' : 'smooth', block: 'nearest' });
      var first = c.querySelector('.bd-noun');
      if (first) first.focus({ preventScroll: true });
    });
  }

  // ---------- render ----------
  function renderCard(i, anim) {
    var p = PUZZLES[i], s = state[i], card = cards[i];
    card.classList.toggle('is-locked', !s.unlocked);
    card.classList.toggle('is-checked', s.checked);
    card.classList.toggle('is-right', s.checked && s.correct === true);
    card.classList.toggle('is-wrong', s.checked && s.correct === false);
    if (!s.unlocked) return;
    var body = card.querySelector('.bd-body');
    if (!body.childElementCount) buildBody(i);

    p.nouns.forEach(function (n, j) {
      var chip = body.querySelector('.bd-chip[data-j="' + j + '"]');
      var btn = chip.querySelector('.bd-noun');
      var c = s.choice[j];
      chip.classList.toggle('is-k', c === true);
      chip.classList.toggle('is-bare', c === false);
      chip.classList.toggle('is-unset', c === null);
      chip.classList.remove('chip--s', 'chip--a', 'chip--p', 'is-ok', 'is-bad');
      btn.disabled = s.checked;
      btn.setAttribute('aria-pressed', c === null ? 'mixed' : String(c));
      var st = chip.querySelector('.bd-state');
      var role = chip.querySelector('.bd-role');
      var mark = chip.querySelector('.bd-mark');
      if (s.checked) {
        var ok = c === (n.role === 'A');
        chip.classList.add('chip--' + n.role.toLowerCase(), ok ? 'is-ok' : 'is-bad');
        role.textContent = n.role;
        mark.textContent = ok ? '✓' : '✗';
        st.textContent = n.role + ': ' + ROLE_NAME[n.role];
        btn.setAttribute('aria-label', word(n.stem, c) + ', ' + n.gloss + '. ' + n.role + ', ' + ROLE_NAME[n.role] + '. ' + (ok ? 'Right.' : 'Not right.'));
      } else {
        role.textContent = '';
        mark.textContent = '';
        st.textContent = c === null ? 'tap: -k ⇄ bare' : c ? 'with -k' : 'bare';
        btn.setAttribute('aria-label', n.stem + ', ' + n.gloss + '. Ending: ' +
          (c === null ? 'not chosen yet. Press to add -k.' : c ? '-k (' + word(n.stem, true) + '). Press to remove it.' : 'none, bare. Press to add -k.'));
      }
    });

    var ready = s.choice.every(function (c) { return c !== null; });
    var chk = body.querySelector('.bd-check');
    chk.hidden = s.checked;
    chk.disabled = !ready;
    body.querySelector('.bd-retry').hidden = !s.checked;
    var nx = body.querySelector('.bd-next');
    if (nx) nx.hidden = !s.checked;
    var hint = body.querySelector('.bd-hint');
    hint.hidden = s.checked;
    hint.textContent = ready ? 'Ready? Tap a noun again to switch it, or press Check.' : (p.nouns.length > 1 ? 'Tap each noun to switch it between -k and bare. First tap adds -k.' : 'Tap the noun to switch it between -k and bare. First tap adds -k.');
    body.querySelector('.bd-aux').classList.toggle('is-clued', i > 0 || s.checked);

    var fb = body.querySelector('.bd-fb');
    if (s.checked) {
      var lines = p.nouns.map(function (n, j) {
        var ok = s.choice[j] === (n.role === 'A');
        return '<li class="' + (ok ? 'ok' : 'bad') + '"><span class="bd-fb-role r-' + n.role.toLowerCase() + '">' + n.role + '</span><span>' + nw(ok ? n.right : n.wrong) + '</span></li>';
      }).join('');
      var nRight = p.nouns.filter(function (n, j) { return s.choice[j] === (n.role === 'A'); }).length;
      var lead = s.correct ? (['Spot on.', 'Nailed it.', 'Decoded.'][i]) : (p.nouns.length > 1 ? 'Not quite: ' + nRight + ' of ' + p.nouns.length + ' right.' : 'Not quite.');
      fb.innerHTML =
        '<p class="bd-fb-lead"><span class="bd-stamp" aria-hidden="true">' + (s.correct ? '✓' : '✗') + '</span>' + lead + '</p>' +
        (s.correct ? '' : '<p class="bd-fb-ans"><span>Answer</span> <span class="bd-ans">' + sentenceHtml(p.answer, p.tail) + '</span></p>') +
        '<ul class="bd-fb-list">' + lines + '</ul>' +
        '<p class="bd-fb-why">' + nw(p.fb) + '</p>' +
        (i < 2 ? '<p class="bd-fb-next">Puzzle ' + (i + 2) + ' is open below.</p>' : '');
      fb.hidden = false;
      if (anim && !ctx.reducedMotion) {
        fb.classList.remove('is-in'); void fb.offsetWidth; fb.classList.add('is-in');
        card.classList.remove('pop'); void card.offsetWidth; card.classList.add('pop');
      }
    } else {
      fb.hidden = true;
      fb.innerHTML = '';
    }
  }

  function renderProgress() {
    var n = 0;
    state.forEach(function (s, i) {
      var on = s.checked && s.correct;
      if (on) n++;
      dots[i].classList.toggle('on', !!on);
      dots[i].classList.toggle('miss', s.checked && s.correct === false);
    });
    progN.textContent = n + '/3';
  }

  function renderDone(anim) {
    var all = state.every(function (s) { return s.checked; });
    if (!all) { done.hidden = true; done.innerHTML = ''; return; }
    var n = state.filter(function (s) { return s.correct; }).length;
    done.innerHTML =
      '<div class="bd-confetti" aria-hidden="true" data-anim="flair"></div>' +
      '<p class="bd-done-kicker">' + (n === 3 ? 'All three decoded' : n + ' of 3 right') + '</p>' +
      '<p class="bd-done-line">S and P: bare. A: <span class="erg">-k</span>. That’s ergative-absolutive.</p>' +
      '<div class="bd-done-roles" aria-hidden="true">' +
        '<span class="bd-grp"><span class="bd-grp-rb"><span class="bd-rb r-s">S</span><span class="bd-rb r-p">P</span></span><span class="bd-grp-lab">bare · absolutive</span></span>' +
        '<span class="bd-grp bd-grp--a"><span class="bd-grp-rb"><span class="bd-rb r-a">A</span></span><span class="bd-grp-lab">-k · ergative</span></span>' +
      '</div>' +
      (n < 3 ? '<p class="bd-done-more">Want a clean sweep? Use “Try again” on any puzzle above.</p>' : '');
    done.hidden = false;
    if (anim && !ctx.reducedMotion) {
      done.classList.remove('is-in'); void done.offsetWidth; done.classList.add('is-in');
      if (n === 3) confetti(done.querySelector('.bd-confetti'));
    }
  }

  function confetti(box) {
    var cls = ['r-s', 'r-a', 'r-p', 'r-k'];
    for (var k = 0; k < 22; k++) {
      var b = document.createElement('i');
      b.className = cls[k % 4];
      var ang = (k / 22) * Math.PI * 2 + Math.random() * 0.3;
      var dist = 70 + Math.random() * 90;
      b.style.setProperty('--dx', Math.round(Math.cos(ang) * dist * 1.6) + 'px');
      b.style.setProperty('--dy', Math.round(Math.sin(ang) * dist - 30) + 'px');
      b.style.setProperty('--rot', Math.round(Math.random() * 540 - 270) + 'deg');
      b.style.setProperty('--d', Math.round(Math.random() * 120) + 'ms');
      box.appendChild(b);
    }
    setTimeout(function () { box.innerHTML = ''; }, 1500);
  }

  function renderAll() {
    state.forEach(function (_, i) { renderCard(i, false); });
    renderProgress();
    renderDone(false);
  }

  // ---------- actions ----------
  function toggle(i, j) {
    var s = state[i];
    if (s.checked) return;
    s.choice[j] = s.choice[j] === true ? false : true;
    renderCard(i, false);
    var chip = cards[i].querySelector('.bd-chip[data-j="' + j + '"]');
    if (!ctx.reducedMotion) { chip.classList.remove('boing'); void chip.offsetWidth; chip.classList.add('boing'); }
    var n = PUZZLES[i].nouns[j];
    say(word(n.stem, s.choice[j]) + (s.choice[j] ? ': -k added.' : ': bare, no ending.'));
  }

  function check(i) {
    var p = PUZZLES[i], s = state[i];
    if (!s.choice.every(function (c) { return c !== null; })) return;
    s.checked = true;
    s.everChecked = true;
    s.correct = p.nouns.every(function (n, j) { return s.choice[j] === (n.role === 'A'); });
    var unlockedNow = false;
    if (i < 2 && !state[i + 1].unlocked) { state[i + 1].unlocked = true; unlockedNow = true; }
    renderCard(i, true);
    if (unlockedNow) {
      renderCard(i + 1, false);
      if (!ctx.reducedMotion) { var c = cards[i + 1]; c.classList.remove('unlock'); void c.offsetWidth; c.classList.add('unlock'); }
    }
    renderProgress();
    renderDone(true);
    var fb = cards[i].querySelector('.bd-fb');
    fb.focus({ preventScroll: true });

    var parts = p.nouns.map(function (n, j) {
      return n.gloss.charAt(0).toUpperCase() + n.gloss.slice(1) + ' is ' + n.role + ', ' + ROLE_NAME[n.role] + (n.role === 'A' ? ', takes -k' : ', stays bare') + (s.choice[j] === (n.role === 'A') ? ' (right)' : ' (you chose ' + (s.choice[j] ? '-k' : 'bare') + ')');
    });
    var msg = 'Puzzle ' + (i + 1) + ': ' + (s.correct ? 'correct. ' : 'not quite. ') + parts.join('; ') + '.' +
      (unlockedNow ? ' Puzzle ' + (i + 2) + ' unlocked.' : '');
    if (state.every(function (x) { return x.checked; })) msg += ' S and P: bare. A: -k. That’s ergative-absolutive.';
    say(msg);

    el.dispatchEvent(new CustomEvent('decoder:check', { bubbles: true, detail: { puzzle: i + 1, correct: s.correct } }));
    if (state.every(function (x) { return x.checked; })) el.dispatchEvent(new CustomEvent('decoder:complete', { bubbles: true }));
  }

  function retry(i) {
    var s = state[i];
    s.checked = false; s.correct = null;
    s.choice = s.choice.map(function () { return null; });
    renderCard(i, false);
    renderProgress();
    renderDone(false);
    var first = cards[i].querySelector('.bd-noun');
    if (first) first.focus({ preventScroll: true });
    say('Puzzle ' + (i + 1) + ' reset. Choose an ending for each noun.');
  }

  el.querySelector('.bd-resetall').addEventListener('click', function () {
    state = fresh();
    cards.forEach(function (c) { c.querySelector('.bd-body').innerHTML = ''; c.classList.remove('pop', 'unlock'); });
    renderAll();
    var first = cards[0].querySelector('.bd-noun');
    if (first) first.focus({ preventScroll: true });
    say('All puzzles reset. Puzzle 1 is open.');
  });

  // ---------- mount ----------
  PUZZLES.forEach(function (_, i) { var c = buildCard(i); cards.push(c); list.appendChild(c); });
  renderAll();

  ctx.onResize(function (w) { el.classList.toggle('bd-narrow', w < 560); });
});
