status: done_with_concerns

artifacts:
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/facts.md — new c-12 (the noun umea, 'the child', in S, P and A roles), q-2 and q-3 lines updated; the old c-12 ("ergative verb") was moved into m-03
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/examples.md — new x-05 with the full verified Basque sentence set
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/misconceptions.md — m-03 now carries the Ergative_verb quote in a note and counters with c-05 and c-12

summary: I verified 7 new Basque sentences with published English translations, plus 2 answer-key sentences. Source: All-Ireland Linguistics Olympiad problem "Basquing in the sun" by Aleka Blackwell (https://ailo.adaptcentre.ie/wp-content/uploads/2020/04/Basqing-in-the-Sun.pdf; I extracted the text locally). The set:
- S, no ending + da: "Umea etorri da" (the child has come); "Umea kalean erori da" (the child has fallen in the street); "Igela agertu da" (the frog has appeared)
- A takes -k, P has no ending + du: "Emakumeak gizona ikusi du" (the woman has seen the man); "Umeak ez du gizona ikusi" (the child has not seen the man); "Emakumeak liburua irakurri du" (the woman has read the book); "Zuk umea ikusi duzu kalean" (you have seen the child in the street)
- From the answer key: "Emakumea etorri da" (the woman has come); "Gizonak emakumea ikusi du" (the man has seen the woman)

umea, emakumea and gizona each appear both bare and with -k. umea is in all three roles. The companion solution sheet also gives a second clue: the auxiliary is du when there is an ergative, da when not. Caps are still met (claims 12/12, sources 8/8, examples 5/5, misconceptions 4/4), so to make room I moved the Ergative_verb source out of the claims and into m-03. check_research.py passes. I added no sentence from another language; Hindi is already covered by c-10.

concerns:
- The olympiad gives translations but no interlinear glosses. The case analysis comes from the solution sheet's stated rule ("nouns in the ergative case add a –k"), not from a gloss on each word.
- The two answer-key sentences come from the solution PDF, which is not counted as a source (the source cap is full). They are mentioned in c-12's note and in x-05.
- gizonak, umeak and emakumeak could also be read as absolutive plurals (c-06). Puzzles should say that every noun is singular, or use the da/du cue.
- Moving the "ergative verb" fact out of facts.md means q-2's English-terminology point now rests on m-03's sourced note rather than on a claim.

relaxed:
- none
