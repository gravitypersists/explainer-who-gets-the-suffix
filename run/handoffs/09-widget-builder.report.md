status: done

artifacts:
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/widgets/w-alignment-lens/index.js — the made-up state's labels now say "Made-up English" (lines 29 and 36)

summary: P-06 is fixed: the second mode-switch segment now reads "Made-up English", which matches the h2 and the in-canvas tag. For the same reason (no "ergative" before s-04 defines it), I also renamed the corner mode label from "Ergative English (made up)" to "Made-up English" and changed the start of the aria-live line to match. The persistent "Made-up English: no one speaks this" tag is unchanged. Checked with probe.mjs at 360px:
- The switch reads "English / Made-up English / Basque".
- After k-03, data-state is ergative-english, the mode label reads "Made-up English" and the tag is present.

The full gate (`verify.mjs --out …/ergativity`) passes (page-round-6).

Basque S label check: no lens label in the Basque state calls Martin "the sleeper". The Basque state always arrives at step 3, so the labels under the chips are the form labels. The probe read the whole stage text in the Basque state: "no ending (absolutive) · S Martin · no ending · etorri da. · has arrived · A Martinek · -k/-ek (ergative) · ikusi du. · has seen · P Diego · no ending". The "the sleeper" description is defined only for the two English states, and the Basque state's description fields are empty.

concerns:
- Renaming the corner mode label goes slightly beyond P-06's wording. The plan's spec text asked for "Ergative English (made up)", but the label shows up in s-03, before "ergative" is defined, so it has the same problem as the switch. The internal state id stays `ergative-english`, so the page contract is unchanged.

relaxed:
- none

dispositions:
- P-06: fixed — the switch segment is now "Made-up English", and the corner mode label and aria-live line were changed to match (w-alignment-lens/index.js, STATES['ergative-english']).
