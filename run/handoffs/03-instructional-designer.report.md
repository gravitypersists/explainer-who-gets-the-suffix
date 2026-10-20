status: done_with_concerns

artifacts:
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/learning-plan.md — the plan: 6 segments, 3 widgets, 8 checks, 13 acceptance criteria
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/cut-list.md — 8 cuts, plus the `## If it runs long` order (5 ranked cuts)
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/mockup.html — the wireframe, with real prompts, options and answers, the cut tables, and an assets panel (no third-party assets)

summary: The page is scrollytelling built around one sticky "alignment lens" canvas. Its group outline moves from S+A (English), to S+P in a "made-up ergative English" (gated on a prediction), to Basque (Martin / Martinek). The flip is what the page is about, so I made it the flashy part. After the lens comes a 3-step Basque decoder (B3): the reader taps -k on or off, and gets the da/du clue and a "nouns are singular" banner. Only the verified sentences from x-05/c-12 are used. Then a Hindi -nē tense switch (k-07 gates it), three split-ergativity cards (Kurdish, Georgian, Dyirbal) that correct m-04, and a WALS bar chart (98/52/32/4/4). The page closes by echoing back the reader's hook pick and asking k-08, "why neither is more logical". I rejected a free sandbox (novices would have no S/A/P schema yet) and a plain article (too weak for the flip, and not what the user asked for). check_plan.py: PASS, no warnings. All 12 claims are used.

concerns:
- In the decoder, the wrong -k options (liburuak, emakumeak as P, Gizona) exist only as toggle states. ac-06 forbids showing them as sentences. The builder must keep it that way.
- "Ergative English" (x-01) is hypothetical. It carries a persistent "made up" tag and a caveat, so the accuracy reviewer should not treat it as a claim about any real language.
- Whether Basque is split-S is unverified, so it stays in the cut list. The prose must say "the doer of a two-participant verb" and must not say that every intransitive subject is bare.
- k-08's model answer ("main participant who starts things" vs "whoever the event happens to") is my lay gloss with source: model. The reviewer should check its wording.
- w-alignment-lens is listed under segment s-02 but runs across s-02, s-03 and s-04 (one canvas with three states).

relaxed:
- none
