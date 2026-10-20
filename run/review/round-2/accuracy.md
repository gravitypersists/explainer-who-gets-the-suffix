# Accuracy review: round 2

## Summary
All three round-1 accuracy findings are closed. A-01 was the blocking one: the k-08 prompt and reveal no longer say that Basque groups the sleeper with the seen. The prompt now says "an ergative language's", and the reveal uses Basque's real arrive/see pair. "Only an agent acting on someone else" now reads "mainly the agent of a two-participant verb". A grep of index.html, page.js and every widget script finds no remaining copy that pairs Basque with sleep. The meta description, the k-01 feedback and the s-06 echo all now speak generically or use "arrives". A-02 and A-03 are fixed as specified. No new blocking issues.

## Findings

### A-01
severity: blocking
criterion: o-3
location: s-06 check k-08 (index.html l.327, l.331); page.js renderEcho; meta description l.7; k-01 feedback l.70
evidence: Source and probe (390px; scroll to and click `[data-check=k-08] [data-reveal]`, then read `.d-feedback`; screenshot run/screenshots/probe/r2acc-k08-reveal.png) give: prompt "Why isn't English's grouping (sleeper with seer) more logical than an ergative language's (sleeper with seen)?"; reveal "An ergative language groups by 'who the event happens to'… the marking goes mainly to the agent of a two-participant verb. In Basque, that's why the one who arrives and the one who is seen both stay bare, while the one who sees gets -k." That matches c-05/c-12 (arrive/come are absolutive) and is consistent with ergative unergatives such as *lo egin* and *dantza egin*. The echo for the S+P pick now says "That's the ergative grouping, S with P… (In Basque's own examples: the one who arrives goes with the one who is seen.)" The k08 echo says "matches the ergative grouping". The meta description says "group the lone participant with the one who is seen", and the k-01 feedback says the same. Running `grep -i "sleep|slept|sleeper"` over the site finds no sentence that attributes sleep marking to Basque. The recap's Basque card uses "Martin etorri da" ('Martin has come'). The disposition's claims check out.
expected_fix: none
verdict: contradicted
status: closed

### A-02
severity: nit
criterion: o-1
location: s-02 details "Why not just say 'subject' and 'object'?" (index.html l.110)
evidence: The text now reads "Also, English shows the grouping in its word forms only on pronouns." That scopes the claim to form or case, so it no longer rules out verb agreement.
expected_fix: none
verdict: misleading-simplification
status: closed

### A-03
severity: nit
criterion: o-3
location: s-05 paragraph after w-split-switch (index.html l.257); widget control aria-label
evidence: The paragraph reads "Only the tense changed (strictly, the aspect), from 'sells' to 'has sold'…", which is consistent with c-10 (perfective aspect) and the "tense/aspect" in the k-07 feedback. Probe `attr:#split-switch .ss-ctrl@aria-label` returns "Tense and aspect". One trace remains: the outer region's aria-label in index.html is still "Hindi-Urdu tense switch". The paragraph's own caveat covers it, so it doesn't reopen the finding.
expected_fix: none (optional: rename the region label to "Hindi-Urdu tense/aspect switch")
verdict: misleading-simplification
status: closed
