status: done_with_concerns

artifacts:
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/review/round-1/accuracy.md — accuracy review, round 1 (3 findings: 1 blocking, 2 nits)
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/screenshots/probe/ — probe shots: acc-decoder-p1wrong.png, acc-decoder-p3.png, acc-split-sells.png, acc-split-sold.png

summary: I extracted all the prose, check feedback and widget strings, checked them against facts.md, examples.md and misconceptions.md, and probed the decoder (wrong and right paths) and the split switch. Most of the page holds up. The Basque data, -k/-ek, the gizonak trap, Hindi -nē, Kurdish, Georgian, Dyirbal and the WALS figures are all correct, and the widget feedback is correct.

There is one blocking finding (contradicted). The k-08 reveal (s-06) says Basque groups the "sleeper with seen" and that "only an agent acting on someone else gets marked". In Basque, 'sleep' is normally lo egin, which takes an ergative subject and the auxiliary du. Unergative verbs such as dantza egin and dantzatu also take -k. I checked this on the web: Martínez-Areta 2019, Baker, Berro 2012, and Wiktionary for lo egin. The fix is a cheap rewording.

The two nits:
- "English shows the grouping only on pronouns" ignores verb agreement.
- "Only the tense changed" in the Hindi section is really aspect.

concerns:
- The lo egin evidence is solid in the literature, but I found no single dictionary page that shows "lo egin dut" verbatim. The Baker and Berro sources establish the general unergative fact without depending on it.
- The original request's own framing ("the person experiencing sleep" as absolutive) is the source of this error. Builders may want to check other copy (hero, k-01 feedback) that implies the sleeper is S=P in ergative languages generally. Those lines are fine as written because they don't name Basque.

relaxed:
- none
