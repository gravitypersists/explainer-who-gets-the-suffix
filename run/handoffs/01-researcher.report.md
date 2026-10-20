status: done_with_concerns

artifacts:
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/facts.md — 12 claims, all 6 questions answered
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/misconceptions.md — 4 misconceptions (universal-logic subject, ergative = passive, English "ergative verbs" like break, all-or-nothing ergativity)
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/examples.md — 4 examples (hypothetical "Him traveled" English, Basque Martin pair, Hindi -nē split pair, gizonak trap)
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/assets.md — no media candidates; drawn figures are better
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/parking-lot.md — 5 off-objective lines

summary: I did light research using about 15 tool calls. Counts are 12 of 12 claims, 8 of 8 sources, 4 of 5 examples and 4 of 4 misconceptions. check_research.py passes and no questions are unresolved. The verified Basque minimal pair is "Martin etorri da" (Martin has arrived; Martin has no ending) vs "Martinek Diego ikusi du" (Martin has seen Diego; Martin-ERG, Diego has no ending). Three facts likely to surprise readers: (1) in WALS, 98 of 190 languages mark no case on nouns at all, against 32 ergative and about 52 accusative; (2) Kurdish is accusative in the present and ergative only in past transitives, and Georgian is ergative-ish only in the aorist and even then follows a split-S pattern, so the request's "Basque, Kurdish, Georgian" grouping is too simple; (3) Basque "gizonak" means both "the man" (agent) and "the men", so you can't just look for a final -k.

concerns:
- The original request's characterization needs correcting on the page. Kurdish and Georgian are split systems (c-08, c-09), not plain ergative. It wasn't false enough to block on.
- Basque itself is debated. Unergative verbs ("work", "laugh") take ergative subjects, so some linguists call Basque split-S/active. I only saw this in search abstracts and couldn't extract the Laka PDF, so it is in the parking lot, not facts. Prediction puzzles should stick to clear transitive/intransitive pairs like etorri/ikusi and avoid activity verbs like "lan egin".
- The only verified Basque sentences use the proper names Martin/Diego. No gizona/gizonak sentence pair was verified (search snippets were unreliable), so builders must not invent "Gizonak ... ikusi du" style sentences without a fill-in. The gizon forms are verified only as a paradigm (c-06).
- No glossed Dyirbal, Inuktitut, Tongan, Chechen or Tibetan sentences were verified. c-11 states the Dyirbal pronoun/noun split only in prose.
- Several quotes are the fetch tool's renderings of the source text, not guaranteed character-exact. Notably c-01 is flagged in its note.

relaxed:
- none
