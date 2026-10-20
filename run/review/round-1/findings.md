# Findings: round 1

_Ingested 2026-10-20T14:45:02-04:00 from accuracy.md, pedagogy-ux.md._

### A-01 · blocking · open
criterion: o-3
location: s-06, check k-08 (index.html l.327 prompt, l.331 reveal)
verdict: contradicted
evidence: The prompt reads "Why isn't English's grouping (sleeper with seer) more logical than Basque's (sleeper with seen)?" The reveal reads "Basque groups by 'who the event happens to': the sleeper and the seen are both simply undergoing… and only an agent acting on someone else gets marked." In Basque, 'sleep' is normally *lo egin* ('do sleep'), which is formally transitive: ergative subject plus *du*. Martínez-Areta (2019, ASJU, ojs.ehu.eus/index.php/ASJU/article/download/22416/20379) cites 'do sleep' and 'do snoring' as verbs whose transitive morphology comes from their origin. Wiktionary/kaikki lists the auxiliary *du* for *lo egin*. Unergative intransitives also take -k with du. Baker (mmll.cam.ac.uk/files/copil_11_1_baker.pdf) gives "Gizonak dantza egin du" ('the man danced'), and the Lund Basque grammar paper gives "Neskak dantzatu du" ('the girl has danced'). Berro (2012) says a group of unergatives takes ergative subjects across dialects. A reader leaves with the false belief that a Basque sleeper is bare. They also learn that Basque marks only agents who act on someone else. The facts file has no claim about sleep in Basque (c-05 and c-12 cover only arrive/come/fall/appear).
expected_fix: Option 1 is to make the k-08 prompt and reveal general: "…than an ergative language's (sleeper with seen)". Then keep Basque's real examples, such as "Basque groups the one who arrives with the one who is seen". Option 2 is to swap 'sleeper' for 'arriver/comer' wherever the text attributes the grouping to Basque. Also soften "only an agent acting on someone else gets marked" to "mainly the agent of a two-participant verb gets marked". A one-line caveat would be optional and fits the active/stative "mention" scope: "even Basque gives -k to some agent-like one-participant verbs, like 'dance'".

### A-02 · nit · open
criterion: o-1
location: s-02, aside "Why not just say 'subject' and 'object'?" (index.html l.110)
verdict: misleading-simplification
evidence: "English shows the grouping only on pronouns." English verb agreement also groups S with A ("The man sleeps", "The man sees the dogs": -s agrees with S/A, never with P). c-02's note limits "only pronouns" to case forms.
expected_fix: "English shows the grouping in its word forms only on pronouns" (or "…its case forms only on pronouns").

### A-03 · nit · open
criterion: o-3
location: s-05, paragraph after w-split-switch (index.html l.257); w-split-switch aria-label "Tense"
verdict: misleading-simplification
evidence: "Only the tense changed, from 'sells' to 'has sold'". c-10 says the trigger is perfective *aspect*, and the k-07 feedback itself says "tense/aspect". Since the general reader won't miss the distinction, this is a nit.
expected_fix: "Only the tense (strictly, the aspect) changed…", or keep "tense/aspect" consistently.

### P-01 · should · open
criterion: engagement where intended (k-07 predict commits before reveal); misconception handling
location: s-05 / w-split-switch (`#split-switch` locked state)
evidence: Probe m5-locked.png (390px, before k-07 is answered). The locked switch renders the "sells" sentence at 45% opacity: "laṛkā pustak bēctā hai", tag "A: NO MARKER", plus the footnote "The noun's own ending also shifts (laṛkā → laṛkē) before -nē." It sits directly under the k-07 options (m4-k07-before.png). A reader glancing down can rule out A ("in both") and C ("only in sells") before committing, and A is exactly the misconception k-07's feedback targets. The click on "has sold" correctly times out while locked, so ac-09 is met.
expected_fix: Hide the whole sentence (agent tag and footnote included) while `.is-locked`. Show a neutral placeholder instead, e.g. greyed chips with no tag, or just the lock line. Reveal everything on the k-07 commit.

### P-02 · should · open
criterion: visual consistency and polish; ac-13 (recap legibility)
location: s-06 / `#f-recap .mini--erg .mini-grid` at ≥ 600px
evidence: At 768 (r768-recap.png) the Basque card cuts "etorri da." and "ikusi du." off at the card edge, so the recap reads only "Martin" / "Martinek Diego". At 1280 (d1-recap.png) the same words spill outside the card and break as "etorri / da." and "ikusi / du.". The 360 layout is fine (single column, m4-recap.png). This is the closing takeaway figure, and the row that shows S comes from an intransitive sentence loses its verb.
expected_fix: Give the recap room. Either let `.recap` actually use the wide measure (see the d-wide finding), or stack the two cards until ~900px. Drop the third grid column's fixed `auto` squeeze and set `.mini-grid .word { white-space: nowrap }`, so verbs never break mid-phrase. Verify at 768, 1100 and 1280.

### P-03 · should · open
criterion: ux-ui §7 / plan s-05 figure ("three side-by-side cards ... so they can be compared")
location: s-05 `.lang-cards`; components.css line 39 `.d-main > .d-wide`
evidence: `.d-wide` only applies to direct children of `.d-main`. `.lang-cards`, `#f-recap` and `.recap` are inside `<section>`, so they stay at the prose measure (~605px). With page.css line 255 `repeat(auto-fit, minmax(240px, 1fr))`, the cards fall 2+1 at 1100 and 1280, with Dyirbal orphaned on its own row (d1-cards.png, r1100-cards.png). The reader can't scan the three splits in one row, which is what the plan asked for.
expected_fix: Make `.d-wide` apply to `.d-main .d-wide` (or move these blocks out of the section wrapper). At ≥ 900px with the wide measure, use the intended `repeat(3, minmax(0,1fr))`. Below 900px keep the single column.

### P-04 · nit · open
criterion: visual consistency and polish (ToC)
location: desktop rail (`.d-rail`), h3 links under "Not all-or-nothing"
evidence: The rail text reads "Kurdishsplits by tense", "Georgiansplits by tense, with a twist" and "DyirbalAustralia · splits by word" (d2-rail-cards.png). The `<small>` subtitle text is concatenated into the link label with no space.
expected_fix: Give each card h3 a clean ToC label (e.g. `data-toc-label="Kurdish"`, and have toc.js prefer it), or exclude card h3s from the rail.

### P-05 · nit · open
criterion: visual consistency and polish
location: s-05 opening paragraph `.erg-inline` "-nē"
evidence: At 390 the highlighted "-nē" breaks across lines, with the "-" at the end of one line and "nē" on the next (m4-k07-before.png).
expected_fix: Add `white-space: nowrap` to `.erg-inline`.

### P-06 · nit · open
criterion: cognitive load (terms used before the thing they name)
location: w-alignment-lens mode switch, visible from s-02 step 1
evidence: The locked segment label reads "Ergative English" from the first lens step (m1-lens-step1.png). The h2 calls it "a made-up English", and "ergative" isn't defined until s-04. This follows the plan's widget spec, so it's minor.
expected_fix: Label the segment "Made-up English" (it matches the h2 and the in-canvas tag), or keep it but only reveal the label once unlocked.

### P-07 · nit · open
criterion: clarity of interaction
location: w-basque-decoder noun chips
evidence: From the initial "?" state, the first tap always adds -k, so choosing "bare" (the right answer in puzzle 1 and for every P) takes two taps. The state label under the chip ("with -k" → "bare") does make this recoverable.
expected_fix: Change the hint to "Tap to switch between -k and bare", or have the first tap pick "bare" so it cycles bare → -k.

### P-08 · nit · open
criterion: mobile UX
location: s-04 `#f-umea` row 3 at 360–390; mobile Contents links
evidence: In row 3, "Umeak ez du gizona ikusi", the P chip "gizona" drops to a second line and "ikusi." to a third (m3-umea.png, dark360-umea.png). It's readable but loses the one-line sentence shape. Mobile ToC links measure 32px tall (< 44px).
expected_fix: Let `.c-rest` in row 3 sit under the umea column as one wrapped line, or reduce chip padding at < 400px. Pad the mobile ToC links to a 44px min-height.
