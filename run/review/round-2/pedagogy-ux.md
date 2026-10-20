# Pedagogy & UX review: round 2

## Summary
Closure round. I checked all eight round-1 P- findings against the live site with my own probes at 360, 390, 768, 1100 and 1280 (screenshots `run/screenshots/probe/c2*`), and I treated the builders' dispositions as claims to test. All eight are closed. The most important fix, P-01, works: before k-07 is answered, the Hindi-Urdu switch shows only a dashed lock panel, so the reader commits blind. The three-card comparison now sits in one row at ≥900px. The recap keeps "etorri da." and "ikusi du." intact at every width. I found no new blocking issues.

## Scores
- acceptance criteria: 5 — the k-07 predict commits before anything is revealed, and the recap reads cleanly at all widths
- cognitive load fit: 5 — the lens label no longer names "ergative" before s-04 defines it
- engagement where intended: 5 — predict → commit → manipulate holds at k-07/w-split-switch
- misconception handling: 5 — the "in both" misconception at k-07 can no longer be ruled out by peeking
- split attention and redundancy: 4 — unchanged from round 1; nothing new
- mobile UX: 5 — mobile ToC links have a 44px min-height, and umea row 3 stays on one line at 360/390
- clarity of interaction: 4 — the decoder chip now says "tap: -k ⇄ bare"; the first tap still adds -k, which is a defensible choice
- visual consistency and polish: 5 — the rail labels are clean, -nē no longer breaks, and the cards and recap use the wide measure

## Findings

### P-01
severity: should
criterion: engagement where intended; misconception handling
location: s-05 / w-split-switch `.is-locked`
evidence: c2m-k07-locked.png and c2m-ss-locked.png (390). Under the k-07 options, the widget shows the segmented control plus a dashed panel reading "Answer the question above to unlock the switch." There is no sentence, agent tag or footnote. The probe text of `#split-switch` while locked is just "Hindi-Urdu / sells / has sold / Answer the question above…". I picked A (the tempting wrong answer): the feedback starts "Not quite. The answer is B." and explains the A misconception. Then the switch unlocked (c2m-ss-unlocked.png). Clicking "has sold" showed "laṛkē-nē … A: ERGATIVE -NĒ" (c2m-ss-sold.png). CSS: widgets/w-split-switch/index.css l.34–36 hide `.ss-sent`, `.ss-tr` and `.ss-foot`.
expected_fix: none
status: closed

### P-02
severity: should
criterion: visual consistency and polish; ac-13
location: s-06 `#f-recap`
evidence: At 768 (c2w768-recap.png) the cards are stacked full width, and "etorri da." and "ikusi du." sit on one line inside the card. At 1100 (c2w1100-recap.png) and 1280 (c2w1280-rail.png) the cards are side by side with both verbs intact and inside the card edge. At 390 (c2m-recap.png) the layout is single column and fine. page.css end block: `.recap` is 1 column, 2 columns at ≥900px; `.mini-grid .word { white-space: nowrap }`.
expected_fix: none
status: closed

### P-03
severity: should
criterion: plan s-05 figure (three cards compared side by side)
location: s-05 `.lang-cards`
evidence: At 1100 (c2w1100-cards.png) and 1280 (c2w1280-rail-s05.png) Kurdish, Georgian and Dyirbal sit in one row, so all three splits can be scanned together. At 768 (c2w768-cards.png) the cards are a clean single column. The `.d-main .d-wide` override lets the block exceed the prose measure (cards span about 324–1224px at 1280).
expected_fix: none
status: closed

### P-04
severity: nit
criterion: visual consistency and polish (ToC)
location: `.d-rail`
evidence: Probe text of `.d-rail` at 1280 after scrolling to `.lang-cards`: "…Not all-or-nothing / Kurdish / Georgian / Dyirbal / How common…". The subtitle text is no longer concatenated (c2w1280-rail-s05.png).
expected_fix: none
status: closed

### P-05
severity: nit
criterion: visual consistency and polish
location: s-05 opening paragraph `.erg-inline`
evidence: At 360 (c2s-para.png) "-nē" wraps as a single unit ("doer / ending, -nē, and…"). The rule is `.erg-inline { white-space: nowrap }` in the page.css fixes block.
expected_fix: none
status: closed

### P-06
severity: nit
criterion: cognitive load (terms before definition)
location: w-alignment-lens mode switch
evidence: c2m-lens.png (390, step 1). The segments read "English | Made-up English | Basque". "Ergative" doesn't appear before s-04.
expected_fix: none
status: closed

### P-07
severity: nit
criterion: clarity of interaction
location: w-basque-decoder noun chips
evidence: c2m-dec0.png (390). The label under the chip reads "TAP: -K ⇄ BARE", and the hint reads "Tap the noun to switch it between -k and bare. First tap adds -k." Taking two taps to reach "bare" is now signposted. The builder's reason for keeping -k first (not biasing the default toward the puzzle-1/P answer) is pedagogically sound, and the hint-text option was one of the fixes I offered.
expected_fix: none
status: closed

### P-08
severity: nit
criterion: mobile UX
location: s-04 `#f-umea` row 3; `.d-toc-mobile a`
evidence: At 360 (c2s-umea.png) and 390 (c2m-umea.png), row 3 shows "Umeak" and then "ez du [gizona] ikusi." on one line under it, keeping the sentence shape. Mobile Contents opened at 360 (c2s-toc.png) with 6 links. CSS `.d-toc-mobile a { min-height: var(--tap); display: flex }`, and the rendered rows are visibly ≥44px.
expected_fix: none
status: closed
