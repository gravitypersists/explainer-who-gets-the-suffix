status: done

artifacts:
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/widgets/w-basque-decoder/index.js: hint text changed (P-07)

summary:
I fixed P-07 by changing the hint text, the first of the two fixes the finding offered. The first tap still adds -k. I kept that order on purpose: making the first tap choose "bare" would push readers toward puzzle 1's answer and toward every P answer, which would weaken the commitment step. It also matches the page prose, "Tap a noun to put the ending on or take it off".

What the reader now sees:
- **Label under an undecided chip:** "tap: -k ⇄ bare" (was "tap to choose").
- **Hint line before every noun has a choice:** "Tap the noun to switch it between -k and bare. First tap adds -k." Puzzles 2 and 3 say "Tap each noun…" instead.
- **Hint line once every noun has a choice:** "Ready? Tap a noun again to switch it, or press Check."
- **Screen-reader labels:** unchanged. They already said "Press to add -k" or "Press to remove it".

Checks:
- The full gate (`verify.mjs --out <out>`) returns RESULT: PASS (page-round-6).
- probe.mjs at 360px confirmed the new state label and both hint texts. It also showed that Check becomes enabled after one tap.
- The 360px screenshot after the animations settle is /Users/m/workspace/linguistic-topology/explainers/ergativity/run/screenshots/probe/p07b-p1.png.

concerns:
- From the previous round, the page owner may want to look at this: the "ergative verbs" aside in index.html uses "it broke the window" where the usual pair is "she broke the window / the window broke".

relaxed:
- none

dispositions:
- P-07: fixed. I took the hint-text option the finding offered: the chip label now reads "tap: -k ⇄ bare" and the hint line says the toggle switches between -k and bare, with the first tap adding -k. I kept -k first so that the default doesn't favour the answer to puzzle 1 or to any P noun.
