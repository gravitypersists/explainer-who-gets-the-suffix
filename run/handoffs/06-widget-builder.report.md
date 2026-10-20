status: done_with_concerns

artifacts:
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/widgets/w-basque-decoder/index.js: three faded puzzles (B3), vanilla JS, no libraries, no CDN, no data calls
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/widgets/w-basque-decoder/index.css: every rule scoped to [data-widget="w-basque-decoder"]; tokens only, with no literal colours

summary:
The decoder fits the page's neo-brutalist style. It has a header ("Basque decoder / Who gets the -k?") with a 3-dot progress pill, a yellow "Every noun here is singular." banner that stays visible, and a "· all singular" tag on every puzzle header. Puzzles 2 and 3 sit as dashed, locked cards ("Check puzzle N to unlock this one.") until the puzzle before them is checked. In line with the plan's pacing, a puzzle unlocks after a check whether the answer was right or wrong.

Each noun is a native button that reuses the page's .chip / .chip-word / .erg classes. It starts with a dashed "?" ending slot (aria-pressed="mixed"), so the reader has to commit: nothing is preselected and puzzle 1 can't be won by default. Tapping toggles -k on and off, the yellow k springs in or out, and the label under the chip reads "with -k" or "bare". Check stays disabled until every noun has a choice.

On Check:
- each chip takes its role colour and S/A/P letter, with a ✓/✗ stamp; wrong chips shake;
- feedback appears in place below the sentence, with no scroll jump and focus moved there with preventScroll;
- a wrong answer also gets an "Answer" line with the verified sentence.

Below that come per-noun lines that name the specific error. "-k on P groups P with A, which is English's habit, not Basque's" covers P with -k. "Look at the auxiliary: du signals that someone in the sentence has -k" covers a bare A. "S stays bare: -k is only for the doer of a two-participant verb" covers S with -k. The k-04 feedback text is verbatim. I split the k-05 text across puzzles 2 and 3, keeping its sentences.

The da/du clue:
- it is introduced in puzzle 1's feedback, and the "da" in the sentence gets underlined;
- from puzzle 2 on, a "Clue" chip reads "du comes with a -k noun; da comes without one", and the auxiliary is underlined.

Once all three are checked, a dark summary card appears: "S and P: bare. A: -k. That's ergative-absolutive." It also shows an S+P "bare · absolutive" group, an A "-k · ergative" group and an "N of 3 right" line. A clean sweep fires a 1.1s confetti burst (flair). Try again resets the current puzzle, and Reset all relocks puzzles 2 and 3 and clears progress. There is one aria-live polite region, which announces each toggle and each check result in full. The widget dispatches decoder:check {puzzle, correct} and decoder:complete, both bubbling. Reduced motion turns off all animation and transitions inside the widget, with no confetti. Below 560px container width, the Check, Try again and Reset all buttons go full width, chips wrap, and the chips are 48px tall.

Checks performed:
- verify.mjs --widget w-basque-decoder passes at 360/768/1280 (round 2). Round 1 failed only on I4, a 4.8s "?" wiggle, now shortened to a 1.2s flair, and on 404s for w-alignment-lens files, which another builder had not finished yet. Those resolved once they landed.
- Acceptance criteria, all driven with probe.mjs:
  - ac-06: the only Basque the widget prints is Emakumea etorri da, Emakumeak liburua irakurri du and Gizonak emakumea ikusi du (answer lines), plus Martin etorri da and Umea etorri da (verbatim k-04 feedback), all from x-05/c-03/c-12. Wrong -k forms appear only as chip toggle states. The aria-live text uses glosses ("The woman is S…"), not the wrong forms.
  - ac-07: confirmed in the screenshots and in the feedback text at both widths: the banner is visible, every noun's role is named with a reason, and the da/du clue appears in puzzle 1's feedback and from puzzle 2 on.
  - ac-08: probe at 360 checked P1 wrong, then Try again, then right, P2 with both nouns wrong, and P3 with -k on P. Each feedback text named the specific error. At 1280 I ran the full flow, including keyboard: click, Enter, Tab to Check, Enter; then Space toggling on puzzle 2. After a P3 retry I got 3/3 with confetti, then Reset all relocked 2 puzzles, the progress read 0/3 and the summary was hidden.
- Screenshots reviewed in /Users/m/workspace/linguistic-topology/explainers/ergativity/run/screenshots/probe/: dec360-start.png, dec360-p2wrong.png, dec360b-p3.png, dec360b-done.png, dec1280-end.png, dec1280-confetti.png. I fixed two things I saw in them: "-k" breaking across lines (now nowrap) and overlapping group labels in the summary.

concerns:
- The CSS has one scoped `!important`, in the prefers-reduced-motion block, so that the multi-class animation selectors are overridden.
- Dark mode wasn't screenshot-checked. It uses only the page tokens, so the summary card inverts to a light card, which is legible by construction.
- Not my file: the "ergative verbs" aside in index.html says "it broke the window". The usual textbook pair is "she broke the window / the window broke", so the page builder may want to look at it.
- No manifest change is needed: files are index.js and index.css, with no cdn and no data_origins.

relaxed:
- none

dispositions:
- none (first build)
