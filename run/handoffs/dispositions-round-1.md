# Dispositions for round-1 findings (extracted verbatim from builder reports 09, 10, 11)

- A-01: fixed — k-08 prompt (index.html l.327) and reveal (l.331) rewritten per option 1, with "mainly the agent of a two-participant verb". The sweep also fixed the meta description (l.7), the k-01 feedback (l.70) and the page.js echo and k-08 echo lines. Copy that pairs Basque with sleep now: none (checked with grep).
- A-02: fixed — the aside now reads "English shows the grouping in its word forms only on pronouns."
- A-03: fixed — "Only the tense changed (strictly, the aspect)…"; switch aria-label is now "Tense and aspect".
- P-01: fixed — while `.is-locked`, w-split-switch hides `.ss-sent`, `.ss-tr` and `.ss-foot` and shows only a dashed lock panel. Everything appears on the k-07 commit (probe screenshots r2m-locked and r2m-unlocked).
- P-02: fixed — `.recap` is single-column below 900px and 2-up at ≥900px within the wide measure; `.mini-grid .word` is nowrap. At 768 the cards stack and at 1280 they sit side by side with "etorri da." and "ikusi du." intact.
- P-03: fixed — `section` and `[data-seg]` wrappers in `.d-main` are no longer capped; their children keep the prose measure unless `.d-wide` (`.d-main .d-wide` gives max 960px). `.lang-cards` is d-wide with `repeat(3, minmax(0,1fr))` at ≥900px and 1 column below; at 1280 all three cards are in one row.
- P-04: fixed — the card h3s carry `data-toc-label` and toc.js uses it. The rail now reads "Kurdish", "Georgian", "Dyirbal".
- P-05: fixed — `.erg-inline { white-space: nowrap }`.
- P-08: fixed — below 420px the rest of each umea sentence continues on one line under the umea column, e.g. "ez du [gizona] ikusi." on one line at 360 and 390. Mobile ToC links now have min-height 44px.

- P-06: fixed — the switch segment is now "Made-up English", and the corner mode label and aria-live line were changed to match (w-alignment-lens/index.js, STATES['ergative-english']).

- P-07: fixed. I took the hint-text option the finding offered: the chip label now reads "tap: -k ⇄ bare" and the hint line says the toggle switches between -k and bare, with the first tap adding -k. I kept -k first so that the default doesn't favour the answer to puzzle 1 or to any P noun.
