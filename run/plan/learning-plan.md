# Learning plan: Who Gets the Suffix?

<!-- Written by the instructional designer. Parsed by scripts/check_plan.py. -->

## Shape

A scrollytelling article with three interactive moments. One "alignment lens" canvas runs through the first half and changes state as the reader scrolls: English, then a made-up "ergative English", then Basque. After it comes a hands-on Basque decoder puzzle, then a tense switch and a WALS chart that broaden the picture. The topic is a set of distinctions (who is grouped with whom), so the core of the page is contrasting cases. One canvas whose highlight jumps from S+A to S+P makes the "flip" something you see and can't miss, and the decoder makes the reader produce the pattern rather than read about it. That also gives the user the "flashy and fun" they asked for: a morphing grouping, tappable word chips, a satisfying -k that snaps on and off. Every flashy element carries a learning job. I rejected a full-page explorable sandbox. Novices with no S/A/P schema would wander in a free-form sentence builder, and the decoder only works once the roles have been pre-trained. I also rejected a plain article, because the user asked for flashy, and because the flip is much stronger seen than told.

toc: yes — 6 sections and about 8 minutes, so a rail (desktop ≥ 1100px) and a collapsed Contents on mobile help readers jump back to the decoder. Keep it minimal so it doesn't compete with the sticky canvas.
tokens: custom: a bold, playful identity mapped onto the kit's variable names (builder's call). One fixed requirement: three role colours used identically in every figure and widget: S (lone participant), A (agent), P (patient). Plus one accent for the ergative ending "-k". Colour is never the only channel: chips also carry the letter S/A/P.
mobile: Lens canvas sticky at the top (≤ 55vh) with the scroll steps below it. Sentence rows are already stacked vertically, so they need no re-layout. Decoder chips wrap. Cards and chart stack in a single column. Touch targets ≥ 44px. Nothing depends on hover.

## Objectives

- o-1: The reader can explain the three core roles (S, A, P) using English sentences, and show how English pronouns (she/her) group S with A. — checks: k-01, k-02, k-03
- o-2: Given a few glossed Basque sentences, the reader can predict which nouns take the ergative marker and which stay unmarked (absolutive), i.e. group S with P. — checks: k-04, k-05, k-06
- o-3: The reader can explain that ergativity is often partial (split ergativity) and that neither grouping is "more logical". — checks: k-07, k-08

## Segments

### s-01 — Which two belong together?
intent: Make the reader commit to their own instinct for grouping the three roles before any terminology, so the rest of the page can surprise and then reframe that instinct (m-01).
objectives: o-1
claims: c-02
readiness: novice · interactivity: low (three participants, picked two at a time) · max-elements: 3
mode: hook → predict (commit only; reveal deferred to s-03 and s-06) · blueprint: none
layout:
  contiguity: inline — each tile carries its own sentence and highlighted participant
  pacing: continuous; the tiles are the first thing below the standfirst
  redundancy: no prose restating the tiles
  scaffold: none
ux: The reader taps two of three tiles. The chosen pair gets lassoed and a one-line response appears in place. At 360px the tiles stack vertically at full width, each ≥ 64px tall.
figure: Three big tiles in a row (desktop) or a column (mobile). Tile 1: "She slept." with "She" highlighted, label "the sleeper". Tile 2: "She saw him." with "She" highlighted, label "the one who sees". Tile 3: "She saw him." with "him" highlighted, label "the one who is seen". No S/A/P letters yet, and no role colours yet: all tiles are neutral until s-02.
widget: none
checks: k-01

### s-02 — Three roles, and English's grouping
intent: Pre-train S, A and P as three named chunks on English sentences the reader already knows, and show that English pronouns put S and A in one group (subject form) against P (object form).
objectives: o-1
claims: c-01, c-02
readiness: novice · interactivity: high (S, A, P and form same-or-different) · max-elements: 3
mode: concrete example → named roles → apply · blueprint: B1
layout:
  contiguity: sticky — the lens canvas stays while 3 short steps scroll; role letters and pronoun forms sit on the chips themselves
  pacing: step-revealed (step 1: the sentences; step 2: S, A, P letters and colours appear on the chips; step 3: the S+A group is lassoed, labelled "same form: she")
  redundancy: step text doesn't restate the chip labels; it says what to notice
  scaffold: collapsed "Why not just say subject and object?" (S/A/P keeps the lone participant separate from the doer, which is exactly what the rest of the page needs; note that full nouns like "the man" show no difference in English, only pronouns do — c-02 note)
ux: The reader scrolls through 3 steps while the canvas updates. A visible mode chip reads "English". Then they answer k-02 inline. At 360px the canvas is sticky at ≤ 55vh with the steps scrolling below.
figure: none beyond the widget
widget: w-alignment-lens (complexity: high) — the two-sentence canvas in its "English" state
checks: k-02

### s-03 — Flip it: an "ergative English"
intent: Let the reader feel the S+P grouping with pronouns they know, using a made-up English (x-01), before meeting a real language. Be explicit that this is a bridge, not how real ergative languages work.
objectives: o-1
claims: c-02
readiness: novice · interactivity: high (the same three roles, regrouped) · max-elements: 3
mode: predict → reveal (contrasting case: same sentences, different grouping) · blueprint: B1
layout:
  contiguity: sticky — the same canvas continues; only the S chip's form and the group outline change
  pacing: gated on k-03 — the lens doesn't switch to "Ergative English" until the reader commits
  redundancy: no prose narrating the morph; one sentence names what moved
  scaffold: none
ux: The reader answers k-03, then sees the lasso slide off A onto P and "She slept" morph into "Her slept". A mode switch (English / Ergative English) lets them flip back and forth. At 360px it behaves the same as in s-02.
figure: none beyond the widget
widget: w-alignment-lens (complexity: high) — "Ergative English" state
checks: k-03

### s-04 — Real ergativity: decode some Basque
intent: Show the real mechanism: Basque leaves S and P bare (absolutive) and marks A with -k (ergative). Then have the reader produce the forms in sentences they haven't seen, and confront the "it's just a passive" misconception (m-02) and the "ergative verbs" confusion (m-03).
objectives: o-2
claims: c-03, c-04, c-05, c-06, c-12
readiness: novice · interactivity: high (role, ending present or absent, da/du) · max-elements: 3
mode: worked example (Martin pair) → contrast table (umea in all three roles) → faded completion (decoder) → compare (passive check) · blueprint: B3
layout:
  contiguity: inline — glosses ("the child", "-k = doer") sit directly under each Basque word; role letters on the words
  pacing: step-revealed — the lens's last state (Basque Martin pair) appears first; the umea table follows; decoder puzzle 2 unlocks after puzzle 1 is checked, and puzzle 3 after puzzle 2
  redundancy: the rule "-k marks the doer of a transitive verb" is stated once, after the Martin pair, and not repeated in the puzzle UI (feedback refers back to it)
  scaffold: collapsed "Wait, couldn't -ak mean plural?" explaining the gizonak trap (c-06); collapsed "Met 'ergative verbs' in English class?" (m-03: verbs like break are a different use of the word)
ux: The reader reads the worked pair on the lens (Basque state), scans the umea table, then taps nouns in the decoder to switch each one between bare and -k, presses Check, and reads the per-word feedback. At 360px chips wrap onto two lines and the Check button is full width.
figure: f-umea contrast table, a 3-row static figure built from c-12. Row 1: "Umea etorri da." 'The child has come.' with umea tagged S and bare. Row 2: "Zuk umea ikusi duzu kalean." 'You have seen the child in the street.' with zuk tagged A carrying -k and umea tagged P and bare. Row 3: "Umeak ez du gizona ikusi." 'The child has not seen the man.' with umeak tagged A carrying -k and gizona tagged P and bare. The ending "-k" is in the accent colour on every A. The column of "umea/umeak" words is aligned vertically, so the eye sees the same word gain and lose -k. On mobile each row wraps, with the English line under the Basque.
widget: w-basque-decoder (complexity: high) — three faded puzzles: choose bare or -k for each noun
checks: k-04, k-05, k-06

### s-05 — Not all-or-nothing: split ergativity
intent: Show that many languages are ergative only in part (by tense, or only for some nouns), and correct the request's simple "Basque, Kurdish, Georgian" grouping (m-04).
objectives: o-3
claims: c-08, c-09, c-10, c-11
readiness: novice · interactivity: low (one switch: tense) · max-elements: 2
mode: predict → toggle → contrasting cases (three language cards) · blueprint: B4
layout:
  contiguity: inline — the gloss sits under each Hindi word; -nē in the accent colour on the agent chip
  pacing: gated on k-07 — the tense switch is disabled until the reader commits
  redundancy: cards carry one line each; prose doesn't repeat them
  scaffold: none
ux: The reader predicts (k-07), then flips the Hindi switch between "sells" and "has sold" and watches -nē appear and disappear on the boy. Then they scan three cards. At 360px the switch is a full-width two-segment control and the cards stack.
figure: Three side-by-side cards (stacked on mobile), not a carousel, so they can be compared. Card "Kurdish": present tense = accusative, past tense transitives = ergative (c-08). Card "Georgian": the ergative ("narrative") case mainly in the aorist (past) series, and even there some intransitive verbs take it, so it sorts verbs by agency (c-09). Card "Dyirbal (Australia)": nouns ergative, but "I" and "you" follow the accusative pattern (c-11; no example sentence, prose only). Each card has a small two-state badge showing where ergativity is "on". Card headers use a neutral colour, not role colours.
widget: w-split-switch (complexity: low) — Hindi habitual/perfective toggle
checks: k-07

### s-06 — How common is each, and which is "logical"?
intent: Give the real distribution from WALS (c-07), return to the reader's s-01 choice, and land the main point: neither grouping is more logical; they are two architectures for the same three roles (m-01).
objectives: o-3
claims: c-07, c-05, c-02
readiness: novice · interactivity: low (five counts) · max-elements: 3
mode: chart → callback to the hook → explain (think-then-reveal) → recap · blueprint: none
layout:
  contiguity: inline — counts printed at bar ends; no legend
  pacing: continuous; bars grow once on entering view (flair, ≤ 1.5s)
  redundancy: caption gives the condition (case on full nouns only, 190 languages), not the numbers again
  scaffold: one-line mention, no expansion, of what's beyond this page: tripartite and active systems (both in the chart), and "syntactic ergativity" (Dyirbal-style grammar rules), named as things to look up
ux: The reader reads the chart, sees their own s-01 pick echoed back ("You grouped the sleeper with …"), answers k-08 by thinking then revealing, and finishes on a two-row recap of the lens (English vs Basque). At 360px the bars run full width with labels above each bar.
figure: f-wals horizontal bar chart, sorted by value: "No case difference on nouns" 98; "Accusative (like English pronouns)" 52 (46 standard + 6 marked-nominative, shown as one bar with a thin divider); "Ergative (like Basque)" 32; "Tripartite" 4; "Active" 4. Out of 190 languages. The Accusative bar uses the S+A group colour and the Ergative bar uses the S+P group colour, tying them back to the lens. Caption: "Case marking on full nouns in WALS's sample of 190 languages (Comrie, WALS feature 98A). Pronouns and verb agreement are not counted." Also a recap strip: two mini lens rows side by side, English (S+A lassoed) and Basque (S+P lassoed, A with -k).
widget: none
checks: k-08

## Widgets

### w-alignment-lens
segment: s-02
complexity: high
blueprint: B1
model: Three discrete states, driven by scroll steps and also settable by a 3-way mode switch once each state has been unlocked. Each state has two sentence rows: row 1 intransitive with one chip (S), row 2 transitive with two chips (A, P). State "english" (c-01, c-02): row 1 "She slept." S chip = "She" [subject form]; row 2 "She saw him." A = "She" [subject form], P = "him" [object form]; group outline around S + A, labelled "same form". State "ergative-english" (x-01, built on c-02's pronoun pairs, explicitly hypothetical): row 1 "Her slept." S = "Her" [object form]; row 2 "She saw him." A = "She", P = "him"; outline around S + P, labelled "same form". A persistent tag reads "Made-up English: no one speaks this". State "basque" (c-03, c-04, c-05): row 1 "Martin etorri da." 'Martin has arrived.' S = "Martin" [no ending]; row 2 "Martinek Diego ikusi du." 'Martin has seen Diego.' A = "Martin" + accent-coloured "-ek", P = "Diego" [no ending]; outline around S + P labelled "no ending (absolutive)", and a separate tag on A "-k/-ek (ergative)". In s-02 step 1 the chips show no S/A/P letters; letters and role colours appear at step 2 (term after the thing).
reader_does: Scrolls the steps (s-02: 3 steps; s-03: after k-03, 1 step; s-04 entry: 1 step to Basque). After a state is unlocked, the reader can flip between states with the mode switch to compare. The question to explore is "which role is the odd one out in each system?"
shows: Always visible: both sentence rows, a role letter on every chip from step 2 on, the form label under each chip, the group outline with its label on the outline itself, and a mode label in the canvas corner ("English" / "Ergative English (made up)" / "Basque"). The outline animates between groupings over 400–700ms (ease-in-out). It is triggered by the reader, so no replay is needed. Under reduced motion it jumps. An aria-live line states the grouping: "English: S and A share a form; P differs."
size: desktop: in the scrolly canvas column, about 560×360; mobile: full width, sticky, ≤ 55vh (about 340px tall), mode switch below the rows as a 3-segment control with targets ≥ 44px.
acceptance: ac-02, ac-03, ac-04, ac-05

### w-basque-decoder
segment: s-04
complexity: high
blueprint: B3
model: Three puzzles, all verified sentences from x-05 / c-12 (no new Basque). Each noun chip toggles between its bare form and its -k form (every noun ends in -a, so -k is simply appended). The verb and auxiliary are fixed and shown. Puzzle 1: 'The woman has come.' → [Emakumea | Emakumeak] etorri da. Correct: Emakumea (S, bare). Puzzle 2: 'The woman has read the book.' → [Emakumea | Emakumeak] [liburua | liburuak] irakurri du. Correct: Emakumeak liburua (A -k, P bare). Puzzle 3: 'The man has seen the woman.' → [Gizona | Gizonak] [emakumea | emakumeak] ikusi du. Correct: Gizonak emakumea. Rule (c-05, c-12): the doer of a two-participant verb takes -k; the lone participant and the one acted on stay bare. Second clue, revealed in the feedback after puzzle 1 and shown as a hint chip from puzzle 2 on: auxiliary "du" appears with an ergative noun, "da" without (c-12 note). A persistent banner reads "Every noun here is singular." The wrong -k forms in the options are only toggle states. They are never shown as standalone "sentences" in the copy.
reader_does: Taps each noun to switch its ending, then presses Check. Feedback marks each noun with its role letter (S/A/P) and says why. Puzzles unlock one after another (fading: puzzle 1 has one noun, puzzles 2 and 3 have two). A "Try again" resets the current puzzle. A "Reset all" sits at the end.
shows: The English translation above each puzzle. Under each chip, a small gloss ("the woman"). After Check, a role letter and colour on each chip, plus a one-line explanation in place (no page jump). After all three, a summary line: "S and P: bare. A: -k. That's ergative-absolutive." The aria-live region reads the result of each check.
size: desktop: prose column width (≤ 680px), about 420px tall per puzzle with puzzles stacked and later ones locked; mobile: full width, chips wrap, Check button full width, about 480px per puzzle.
acceptance: ac-06, ac-07, ac-08

### w-split-switch
segment: s-05
complexity: low
blueprint: none
model: Two states from c-10. "sells" (habitual): laṛkā | pustak | bēctā hai, glossed boy | book | sells, 'The boy sells a book.' Agent chip unmarked. "has sold" (perfective): laṛkē-nē | pustak | bēcī hai, glossed boy-ERG | book | has sold, 'The boy has sold a book.' Agent chip shows "-nē" in the accent colour and the A role colour. Locked until k-07 is answered.
reader_does: Flips the two-segment switch and compares the agent chip across states.
shows: Romanized Hindi-Urdu words as chips with glosses directly under them, the English translation, and a label on the agent chip: "A: no marker" / "A: ergative -nē". Footnote line: "The noun's own ending also shifts (laṛkā → laṛkē) before -nē." The aria-live region announces the state.
size: desktop: prose column width, about 200px tall; mobile: full width, about 240px, chips may wrap.
acceptance: ac-09

## Comprehension items

### k-01
segment: s-01
objective: o-1
type: predict
prompt: Tap the two that feel like "the same kind of thing": the sleeper ("She slept"), the one who sees ("She saw him"), or the one who is seen ("She saw him").
options: the sleeper + the one who sees · the sleeper + the one who is seen · the one who sees + the one who is seen
feedback: No wrong answer here. Hold on to your pick. Most English speakers pick the sleeper and the seer, because English uses "she" for both. By the end you'll meet languages whose grammar picks the sleeper and the seen. (Pick stored in page memory only and echoed in s-06.)

### k-02
segment: s-02
objective: o-1
type: apply
prompt: "He fell." and "He pushed her." Which pronoun is S, which is A, which is P, and which two share a form?
options: A) S = He, A = He, P = her: S and A share "he" · B) S = He, A = her, P = He: S and P share "he" · C) S = her, A = He, P = He
feedback: A. "Fell" has one participant, so "He" is S. In "pushed", the pusher "He" is A and the pushed "her" is P. English gives S and A the same form ("he") and P a different one ("her"). That is accusative alignment. B swaps the doer and the one acted on: the role comes from who does what, not from word order or position alone.

### k-03
segment: s-03
objective: o-1
type: predict
prompt: Imagine an English that groups the sleeper with the one who is seen, not with the seer. How would "She slept" come out?
options: A) She slept. · B) Her slept. · C) She slept her.
feedback: B. If the sleeper is grouped with the one who is seen, the sleeper takes the seen one's form: "her". A is real English, which groups the sleeper with the seer. C adds a second participant, so it is no longer the lone-sleeper sentence. Real ergative languages usually don't swap pronouns like this. They mark the doer with an extra ending, as the next section shows.

### k-04
segment: s-04
objective: o-2
type: apply
prompt: (Decoder puzzle 1) 'The woman has come.' Does "the woman" take the -k ending? [Emakumea | Emakumeak] etorri da.
options: Emakumea (no ending) · Emakumeak (-k)
feedback: Emakumea. "Has come" has one participant, so the woman is S, and S stays bare, just like "Martin etorri da" and "Umea etorri da". Notice the "da" at the end: Basque uses da when no one is marked with -k. That's your second clue.

### k-05
segment: s-04
objective: o-2
type: apply
prompt: (Decoder puzzles 2 and 3) 'The woman has read the book.' → [Emakumea | Emakumeak] [liburua | liburuak] irakurri du. Then: 'The man has seen the woman.' → [Gizona | Gizonak] [emakumea | emakumeak] ikusi du.
options: For each noun, bare or -k. Correct: Emakumeak liburua irakurri du · Gizonak emakumea ikusi du
feedback: The doer of a two-participant verb (A) takes -k: emakumeak, gizonak. The thing read and the person seen (P) stay bare, exactly like the lone woman who came. If you put -k on the book or on the woman who was seen, you're grouping P with A, which is English's habit, not Basque's. If you left the doer bare, look at the auxiliary: "du" signals that someone in the sentence has -k. Notice that "emakumea" is bare when she comes and bare when she is seen. That is the S+P group, the absolutive.

### k-06
segment: s-04
objective: o-2
type: compare
prompt: Someone says "Martinek Diego ikusi du" is really a passive, like "Diego was seen by Martin", since Martin gets the extra marking. Are they right?
options: A) Yes: marking the doer means it's a passive · B) No: it's an ordinary active sentence, 'Martin has seen Diego' · C) Only in the past tense
feedback: B. It's the normal way to say "Martin has seen Diego" (c-04). In an English passive the doer is optional and demoted ("Diego was seen"). In Basque, -k is simply what every transitive doer wears. Linguists do note a resemblance between ergative patterns and passives, which is why A is tempting, but the Basque sentence is active. C mixes in split ergativity, which is coming up next and isn't how Basque works.

### k-07
segment: s-05
objective: o-3
type: predict
prompt: Hindi-Urdu has an ergative ending, -nē. "The boy sells a book." vs "The boy has sold a book." Where does -nē show up on the boy?
options: A) In both · B) Only in "has sold" · C) Only in "sells" · D) In neither
feedback: B. Hindi-Urdu marks the agent with -nē only in the perfective ("has sold"). In "sells" the boy is unmarked, as in an accusative language. One language, two alignments, switched by tense/aspect: split ergativity. If you chose A, you assumed a language is either ergative or not. Many are ergative only part of the time.

### k-08
segment: s-06
objective: o-3
type: explain
prompt: Think, then reveal: why isn't English's grouping (sleeper with seer) more logical than Basque's (sleeper with seen)?
model_answer: Each grouping picks out something real. English groups by "who the sentence is about / who starts things": the sleeper and the seer are both the main participant. Basque groups by "who the event happens to": the sleeper and the seen are both just undergoing or being in the event, and only an agent acting on someone else gets marked. Both use the same three roles. They draw the line in different places, and both are common in the world's languages (52 vs 32 in the WALS sample, while most mark neither on nouns). Your s-01 instinct is your language's architecture, not universal logic.
feedback: Reveal shows the model answer, then echoes the reader's s-01 pick: "You picked X. That matches English / Basque."

## Acceptance criteria

- ac-01 (s-01): The reader commits a pair choice before any term (S, A, P, ergative, case) appears on the page, and that choice is echoed back by name in s-06.
- ac-02 (w-alignment-lens): The letters S, A, P and role colours first appear only after the reader has seen the plain sentences (step 2 of s-02). The three role colours are identical in the lens, the umea table, the decoder feedback and the Hindi switch.
- ac-03 (w-alignment-lens): In each state, exactly one group outline is visible, and its label sits on the outline itself (no legend). In English it encloses S + A. In both Ergative English and Basque it encloses S + P.
- ac-04 (s-03, k-03): The lens does not show the "Ergative English" state until k-03 is answered. The state carries a visible "made up" tag throughout, and the text after it says that real ergative languages mark the agent rather than swapping pronouns.
- ac-05 (w-alignment-lens, s-04): In the Basque state the same name "Martin" appears bare as S and as "Martinek" as A, with the ending in the accent colour. The reader can flip between all unlocked states with the mode switch.
- ac-06 (w-basque-decoder): Every Basque sentence on the page is one of the verified sentences in x-05 / c-03 / c-04 / c-12. No other Basque sentences appear in prose, figures or feedback.
- ac-07 (w-basque-decoder): A "nouns are singular" notice is visible during the puzzles. Feedback after each Check names each noun's role (S, A or P) and explains why it is bare or has -k. The da/du clue is introduced in puzzle 1's feedback and available from puzzle 2.
- ac-08 (k-05, k-06): Wrong answers get feedback that names the specific error (grouping P with A; thinking the ergative is a passive), not just "incorrect". Reveal happens in place with no page jump.
- ac-09 (w-split-switch, k-07): The tense switch is locked until k-07 is answered. In "has sold", -nē is visibly attached to the agent in the accent colour. In "sells", the agent chip reads "no marker".
- ac-10 (s-05): Kurdish and Georgian are never described as simply "ergative languages". Each card states its split (Kurdish: past transitives; Georgian: mainly aorist, with an agency-based twist). Dyirbal's card has no invented example sentence.
- ac-11 (s-06): The chart's numbers match c-07 (98, 52 = 46 + 6, 32, 4, 4; total 190). The caption says it counts case on full nouns only. The page never claims ergativity is "rare" without the numbers.
- ac-12 (whole page): Every interactive element works by tap and keyboard at 360px with no horizontal scroll. The lens canvas and its steps are visible together on a phone (sticky ≤ 55vh). Animations are reader-triggered or flair-length, and they respect reduced motion.
- ac-13 (s-06): The page ends with a recap (English S+A vs Basque S+P), not on a quiz.
