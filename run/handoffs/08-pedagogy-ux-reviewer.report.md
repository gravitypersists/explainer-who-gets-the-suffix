status: done

artifacts:
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/review/round-1/pedagogy-ux.md — the round-1 pedagogy and UX review: scores, 8 findings, and the evidence for each acceptance criterion
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/screenshots/probe/ — probe screenshots: m1–m5 at 390, d1/d2 at 1280, r768/r1100, dark360/dark1280, rm360 (reduced motion), landscape

summary: I drove every interaction with probe.mjs at 390 and 1280. That covered all three k-01 pair kinds, a deliberately wrong answer on k-02, k-03, k-06 and k-07, a wrong and then a right decoder puzzle, the lens switch, the locked Hindi switch, and the k-08 reveal. I also ran a short Playwright script for dark mode, reduced motion, landscape, tap targets and tab order. All 13 acceptance criteria are met and nothing is blocking. Findings: 3 should, 5 nit. The 3 that matter most:
1. **(should)** Before k-07 is answered, the locked Hindi switch already shows the "sells" sentence with "A: NO MARKER" and the laṛkā→laṛkē footnote, dimmed to 45% opacity. That rules out two of the four options before the reader commits.
2. **(should)** The Basque recap card cuts off "etorri da." and "ikusi du." at 768px and spills them outside the card at 1280px.
3. **(should)** `.d-wide` only applies to direct children of `.d-main`. The language cards and the recap sit inside sections, so they stay at prose width. The three split cards land 2+1 instead of side by side as the plan asked.

Nits: the desktop contents rail shows labels like "Kurdishsplits by tense"; "-nē" breaks across lines; the lens switch shows "Ergative English" before "ergative" is defined; choosing "bare" in the decoder takes two taps; the third umea row wraps awkwardly and the mobile contents links are 32px tall.

concerns:
- I checked ac-06 by matching the eight Basque sentences against research/examples.md and facts.md as strings. Whether the Basque itself is right is the accuracy reviewer's job.
- The 740×360 landscape layout un-sticks the lens canvas, which is a sensible fallback. I logged it as information, not a finding.

relaxed:
- none
