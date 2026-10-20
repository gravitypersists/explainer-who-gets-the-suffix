status: done

artifacts:
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/index.html — fixed the k-08 prompt and reveal, the meta description, the k-01 feedback, the A-02 aside and the A-03 wording; added card h3 `data-toc-label`; made `.lang-cards` d-wide; `.recap` is no longer nested d-wide
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/assets/page.js — fixed the s-06 echo and the k-08 echo for the "sleeper + seen" pick, so neither attributes the sleeper to Basque any more
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/assets/page.css — appended a "review round 1 fixes" block covering d-wide inside sections, 3-column cards and stacked recap, nowrap fixes, mobile ToC tap targets, and the umea layout under 420px
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/assets/toc.js — prefers `data-toc-label` when building ToC links
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/widgets/w-split-switch/index.css and index.js — the sentence is fully hidden while locked; aria-label changed to "Tense and aspect"

summary: I fixed all 9 assigned findings. For A-01 I took option 1:
- The k-08 prompt now reads "…more logical than an ergative language's (sleeper with seen)?"
- The reveal speaks of "an ergative language", says the marking goes "mainly to the agent of a two-participant verb", and names Basque only with its verified examples (the one who arrives and the one seen stay bare; the one who sees gets -k). There is no "dance" caveat.

I also swept the rest of the copy for the same problem:
- The meta description no longer says Basque groups the sleeper with the seen.
- The k-01 feedback now says "grouping the lone participant with the one who is seen".
- The echo for a "sleeper + seen" pick now says "the ergative grouping, S with P", plus Basque's arrive/seen example.
- The k-08 echo now says "matches the ergative grouping".
- Nothing in the hero, asides or recap tied sleep to Basque; the recap uses only Martin etorri da / Martinek Diego ikusi du.

The full gate (`verify.mjs --out …/ergativity`, no phase flag) passes in round 8 with all widgets built. I checked screenshots at 360, 390, 768 and 1280.

concerns:
- none

relaxed:
- none

dispositions:
- A-01: fixed — k-08 prompt (index.html l.327) and reveal (l.331) rewritten per option 1, with "mainly the agent of a two-participant verb". The sweep also fixed the meta description (l.7), the k-01 feedback (l.70) and the page.js echo and k-08 echo lines. Copy that pairs Basque with sleep now: none (checked with grep).
- A-02: fixed — the aside now reads "English shows the grouping in its word forms only on pronouns."
- A-03: fixed — "Only the tense changed (strictly, the aspect)…"; switch aria-label is now "Tense and aspect".
- P-01: fixed — while `.is-locked`, w-split-switch hides `.ss-sent`, `.ss-tr` and `.ss-foot` and shows only a dashed lock panel. Everything appears on the k-07 commit (probe screenshots r2m-locked and r2m-unlocked).
- P-02: fixed — `.recap` is single-column below 900px and 2-up at ≥900px within the wide measure; `.mini-grid .word` is nowrap. At 768 the cards stack and at 1280 they sit side by side with "etorri da." and "ikusi du." intact.
- P-03: fixed — `section` and `[data-seg]` wrappers in `.d-main` are no longer capped; their children keep the prose measure unless `.d-wide` (`.d-main .d-wide` gives max 960px). `.lang-cards` is d-wide with `repeat(3, minmax(0,1fr))` at ≥900px and 1 column below; at 1280 all three cards are in one row.
- P-04: fixed — the card h3s carry `data-toc-label` and toc.js uses it. The rail now reads "Kurdish", "Georgian", "Dyirbal".
- P-05: fixed — `.erg-inline { white-space: nowrap }`.
- P-08: fixed — below 420px the rest of each umea sentence continues on one line under the umea column, e.g. "ez du [gizona] ikusi." on one line at 360 and 390. Mobile ToC links now have min-height 44px.
