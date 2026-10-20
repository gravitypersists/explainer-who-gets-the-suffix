# Accuracy review: round 1

## Summary
The page is accurate almost throughout. The Basque sentences, -k/-ek rule, the gizonak trap, the passive and "ergative verb" misconceptions, Hindi-Urdu -nē, Kurdish, Georgian, Dyirbal and the WALS figures (98/52/32/4/4 of 190; 32 of 92 ≈ a third) all match the facts file. All three widgets behave correctly when probed. One blocking issue: the k-08 reveal, which carries o-3, puts the sleeper with the seen in *Basque*. Basque's ordinary verb for 'sleep' (lo egin) takes an ergative subject and the transitive auxiliary du. The reveal also says only an agent acting on someone else gets marked, which unergative verbs (dantza egin, dantzatu) contradict. The decoder carefully uses 'arrive/come', so a wording fix is cheap. There are two nits.

## Findings

### new
severity: blocking
criterion: o-3
location: s-06, check k-08 (index.html l.327 prompt, l.331 reveal)
evidence: The prompt reads "Why isn't English's grouping (sleeper with seer) more logical than Basque's (sleeper with seen)?" The reveal reads "Basque groups by 'who the event happens to': the sleeper and the seen are both simply undergoing… and only an agent acting on someone else gets marked." In Basque, 'sleep' is normally *lo egin* ('do sleep'), which is formally transitive: ergative subject plus *du*. Martínez-Areta (2019, ASJU, ojs.ehu.eus/index.php/ASJU/article/download/22416/20379) cites 'do sleep' and 'do snoring' as verbs whose transitive morphology comes from their origin. Wiktionary/kaikki lists the auxiliary *du* for *lo egin*. Unergative intransitives also take -k with du. Baker (mmll.cam.ac.uk/files/copil_11_1_baker.pdf) gives "Gizonak dantza egin du" ('the man danced'), and the Lund Basque grammar paper gives "Neskak dantzatu du" ('the girl has danced'). Berro (2012) says a group of unergatives takes ergative subjects across dialects. A reader leaves with the false belief that a Basque sleeper is bare. They also learn that Basque marks only agents who act on someone else. The facts file has no claim about sleep in Basque (c-05 and c-12 cover only arrive/come/fall/appear).
expected_fix: Option 1 is to make the k-08 prompt and reveal general: "…than an ergative language's (sleeper with seen)". Then keep Basque's real examples, such as "Basque groups the one who arrives with the one who is seen". Option 2 is to swap 'sleeper' for 'arriver/comer' wherever the text attributes the grouping to Basque. Also soften "only an agent acting on someone else gets marked" to "mainly the agent of a two-participant verb gets marked". A one-line caveat would be optional and fits the active/stative "mention" scope: "even Basque gives -k to some agent-like one-participant verbs, like 'dance'".
verdict: contradicted

### new
severity: nit
criterion: o-1
location: s-02, aside "Why not just say 'subject' and 'object'?" (index.html l.110)
evidence: "English shows the grouping only on pronouns." English verb agreement also groups S with A ("The man sleeps", "The man sees the dogs": -s agrees with S/A, never with P). c-02's note limits "only pronouns" to case forms.
expected_fix: "English shows the grouping in its word forms only on pronouns" (or "…its case forms only on pronouns").
verdict: misleading-simplification

### new
severity: nit
criterion: o-3
location: s-05, paragraph after w-split-switch (index.html l.257); w-split-switch aria-label "Tense"
evidence: "Only the tense changed, from 'sells' to 'has sold'". c-10 says the trigger is perfective *aspect*, and the k-07 feedback itself says "tense/aspect". Since the general reader won't miss the distinction, this is a nit.
expected_fix: "Only the tense (strictly, the aspect) changed…", or keep "tense/aspect" consistently.
verdict: misleading-simplification
