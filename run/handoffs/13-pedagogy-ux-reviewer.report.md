status: done

artifacts:
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/review/round-2/pedagogy-ux.md: round-2 closure review, one `### P-NN` entry for each round-1 P- finding
- /Users/m/workspace/linguistic-topology/explainers/ergativity/run/screenshots/probe/c2*.png: my probe screenshots at 360, 390, 768, 1100 and 1280 (prefixes c2s-, c2m-, c2w768-, c2w1100-, c2w1280-)

summary: I served the site and drove it with probe.mjs. I treated the builders' dispositions as claims and checked each one myself. All 8 P- findings are closed (P-01 to P-08). The three that mattered most:
- **P-01 is closed.** Before k-07 is answered, the Hindi-Urdu switch shows only a dashed lock panel with no sentence, tag or footnote, so the reader can't peek at the answer. I answered A, the tempting wrong option: the feedback explains that misconception, the switch then unlocks, and "has sold" shows laṛkē-nē.
- **P-03 is closed.** The Kurdish, Georgian and Dyirbal cards sit in one row at 1100 and 1280, and stack into a single column below 900px.
- **P-02 is closed.** The recap keeps "etorri da." and "ikusi du." intact at 768, 1100 and 1280.

The other five fixes also check out:
- The rail labels read Kurdish, Georgian, Dyirbal.
- "-nē" no longer breaks across lines.
- The lens switch says "Made-up English".
- The decoder chip has a "tap: -k ⇄ bare" hint.
- Row 3 of the umea figure stays on one line at 360 and 390, and the mobile ToC links have a 44px min-height.

I raised no new blocking findings.

concerns:
- The stylesheet behind the fixes is fragile. page.css still contains the old overriding rules (`.lang-cards` auto-fit at l.255, `.mini-grid .word { white-space: normal }` at l.260). They're only defeated by the "review round 1 fixes" block at the end of the file. The rendered result is correct, but a later reorder would bring the bugs back. This isn't a finding.
- I measured the 44px ToC tap targets from the CSS rule and the screenshot, not with a pixel-exact bounding box.

relaxed:
- none
