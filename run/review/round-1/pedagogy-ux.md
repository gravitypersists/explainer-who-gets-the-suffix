# Pedagogy & UX review: round 1

## Summary
This is a strong build. The arc works: commit a hunch, see it named, watch the outline jump, decode real Basque, then broaden. All 13 acceptance criteria are met in substance. Every check commits before it reveals, and the wrong-answer feedback names the specific error. The lens is a real, animated widget, and the controls sit next to their effect at 360/390. Dark mode and reduced motion hold up. No finding is blocking. The most important fixes:
1. The locked Hindi switch already shows "A: NO MARKER" on "sells" while k-07 is still unanswered. That gives away half the prediction.
2. On desktop and tablet the Basque recap card clips or spills its verbs.
3. `.d-wide` has no effect inside sections, so the three split cards land 2+1 rather than side by side.

## Scores
- acceptance criteria: 5 — all 13 met; probe evidence below; minor layout issues don't break any ac
- cognitive load fit: 4 — terms arrive after their referents; the "rule" step introduces ergative, absolutive and ergative-absolutive together, still within reach because they are named pairs
- engagement where intended: 5 — Constructive moments at each key idea (k-01 commit, k-03 predict-then-flip, three faded decoder puzzles, k-07 predict-then-toggle, k-08 think-then-reveal)
- misconception handling: 4 — m-01 confronted and echoed; m-02 (passive) and m-03 ("ergative verbs") addressed; k-07 predict is weakened by the pre-commit leak (P-01)
- split attention and redundancy: 4 — labels on chips, outline label on the outline, chart direct-labelled; the s-06 pick is echoed twice (prose and k-08), which is plan-sanctioned
- mobile UX: 4 — sticky lens 358px of 800 at 360 (45vh), controls with effect, chips wrap, Check full width; umea row 3 wraps awkwardly; TOC links 32px tall
- clarity of interaction: 4 — tiles, chips, switch and Check are all obvious; picking "bare" in the decoder takes two taps from the "?" state
- visual consistency and polish: 3 — role colours consistent everywhere and dark mode intact, but the recap Basque card overflows at 768–1280, the rail shows "Kurdishsplits by tense", and "-nē" breaks across lines

## Findings

### new
severity: should
criterion: engagement where intended (k-07 predict commits before reveal); misconception handling
location: s-05 / w-split-switch (`#split-switch` locked state)
evidence: Probe m5-locked.png (390px, before k-07 is answered). The locked switch renders the "sells" sentence at 45% opacity: "laṛkā pustak bēctā hai", tag "A: NO MARKER", plus the footnote "The noun's own ending also shifts (laṛkā → laṛkē) before -nē." It sits directly under the k-07 options (m4-k07-before.png). A reader glancing down can rule out A ("in both") and C ("only in sells") before committing, and A is exactly the misconception k-07's feedback targets. The click on "has sold" correctly times out while locked, so ac-09 is met.
expected_fix: Hide the whole sentence (agent tag and footnote included) while `.is-locked`. Show a neutral placeholder instead, e.g. greyed chips with no tag, or just the lock line. Reveal everything on the k-07 commit.

### new
severity: should
criterion: visual consistency and polish; ac-13 (recap legibility)
location: s-06 / `#f-recap .mini--erg .mini-grid` at ≥ 600px
evidence: At 768 (r768-recap.png) the Basque card cuts "etorri da." and "ikusi du." off at the card edge, so the recap reads only "Martin" / "Martinek Diego". At 1280 (d1-recap.png) the same words spill outside the card and break as "etorri / da." and "ikusi / du.". The 360 layout is fine (single column, m4-recap.png). This is the closing takeaway figure, and the row that shows S comes from an intransitive sentence loses its verb.
expected_fix: Give the recap room. Either let `.recap` actually use the wide measure (see the d-wide finding), or stack the two cards until ~900px. Drop the third grid column's fixed `auto` squeeze and set `.mini-grid .word { white-space: nowrap }`, so verbs never break mid-phrase. Verify at 768, 1100 and 1280.

### new
severity: should
criterion: ux-ui §7 / plan s-05 figure ("three side-by-side cards ... so they can be compared")
location: s-05 `.lang-cards`; components.css line 39 `.d-main > .d-wide`
evidence: `.d-wide` only applies to direct children of `.d-main`. `.lang-cards`, `#f-recap` and `.recap` are inside `<section>`, so they stay at the prose measure (~605px). With page.css line 255 `repeat(auto-fit, minmax(240px, 1fr))`, the cards fall 2+1 at 1100 and 1280, with Dyirbal orphaned on its own row (d1-cards.png, r1100-cards.png). The reader can't scan the three splits in one row, which is what the plan asked for.
expected_fix: Make `.d-wide` apply to `.d-main .d-wide` (or move these blocks out of the section wrapper). At ≥ 900px with the wide measure, use the intended `repeat(3, minmax(0,1fr))`. Below 900px keep the single column.

### new
severity: nit
criterion: visual consistency and polish (ToC)
location: desktop rail (`.d-rail`), h3 links under "Not all-or-nothing"
evidence: The rail text reads "Kurdishsplits by tense", "Georgiansplits by tense, with a twist" and "DyirbalAustralia · splits by word" (d2-rail-cards.png). The `<small>` subtitle text is concatenated into the link label with no space.
expected_fix: Give each card h3 a clean ToC label (e.g. `data-toc-label="Kurdish"`, and have toc.js prefer it), or exclude card h3s from the rail.

### new
severity: nit
criterion: visual consistency and polish
location: s-05 opening paragraph `.erg-inline` "-nē"
evidence: At 390 the highlighted "-nē" breaks across lines, with the "-" at the end of one line and "nē" on the next (m4-k07-before.png).
expected_fix: Add `white-space: nowrap` to `.erg-inline`.

### new
severity: nit
criterion: cognitive load (terms used before the thing they name)
location: w-alignment-lens mode switch, visible from s-02 step 1
evidence: The locked segment label reads "Ergative English" from the first lens step (m1-lens-step1.png). The h2 calls it "a made-up English", and "ergative" isn't defined until s-04. This follows the plan's widget spec, so it's minor.
expected_fix: Label the segment "Made-up English" (it matches the h2 and the in-canvas tag), or keep it but only reveal the label once unlocked.

### new
severity: nit
criterion: clarity of interaction
location: w-basque-decoder noun chips
evidence: From the initial "?" state, the first tap always adds -k, so choosing "bare" (the right answer in puzzle 1 and for every P) takes two taps. The state label under the chip ("with -k" → "bare") does make this recoverable.
expected_fix: Change the hint to "Tap to switch between -k and bare", or have the first tap pick "bare" so it cycles bare → -k.

### new
severity: nit
criterion: mobile UX
location: s-04 `#f-umea` row 3 at 360–390; mobile Contents links
evidence: In row 3, "Umeak ez du gizona ikusi", the P chip "gizona" drops to a second line and "ikusi." to a third (m3-umea.png, dark360-umea.png). It's readable but loses the one-line sentence shape. Mobile ToC links measure 32px tall (< 44px).
expected_fix: Let `.c-rest` in row 3 sit under the umea column as one wrapped line, or reduce chip padding at < 400px. Pad the mobile ToC links to a 44px min-height.

## Acceptance criteria evidence (probe-driven)
- ac-01 met: k-01 commits before any S/A/P/ergative term (headings visible at s-01 contain none). The echo reads, e.g., "At the start, you grouped the sleeper with the one who is seen. That's Basque's grouping…", and the k-08 echo is present. All three pair kinds were tested (m1, m4, d1).
- ac-02 met: letters and colours are absent at step 1 and appear at step 2 (m1-lens-step1/2). The same purple/orange/teal is used in the lens, umea table, decoder feedback and Hindi switch.
- ac-03 met: one outline, label on the outline. English is S+A; Ergative English and Basque are S+P (m2-*).
- ac-04 met: `#lens@data-state` stays "english" until k-03 is clicked, then becomes "ergative-english". The made-up tag is shown, and the step text says real languages mark the doer instead.
- ac-05 met: Basque state shows Martin bare (S) and Martin+ek (A) with "ek" in the accent colour. The switch flips back to English with the live text updated.
- ac-06 met: all 8 Basque sentences on the page are found in research/examples.md / facts.md.
- ac-07 met: the "Every noun here is singular" banner is shown. Per-noun S/A/P feedback includes why. The da/du clue appears in puzzle 1 feedback and as a Clue chip from puzzle 2.
- ac-08 met: P2 wrong gives "Putting -k on it groups P with A, which is English's habit". k-06 A gives "Tempting, but no…" with the passive explanation. Reveals happen in place.
- ac-09 met: clicking "has sold" while locked fails, then works after k-07. "-nē" appears in the accent colour, and "A: NO MARKER" shows in "sells" (but see the pre-commit leak finding).
- ac-10 met: the Kurdish, Georgian and Dyirbal cards state their splits. Dyirbal has no example sentence.
- ac-11 met: 98, 52 (46+6), 32, 4, 4; the caption gives the full-nouns-only condition. The prose says "no curiosity: about a third".
- ac-12 met: no horizontal scroll at 360 (scrollWidth 360). Sticky lens is 358px of an 800px viewport. Controls are native buttons, and tab order reaches the tiles. No console errors. Under reduced motion the states jump. Landscape 740×360 un-sticks the 390px canvas (a sensible fallback, so no trap).
- ac-13 met: the page ends with the English/Basque recap and the colophon, not a quiz.

Reading time from the gate: 6.6 min, against an 8 min budget.
