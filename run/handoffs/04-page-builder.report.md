status: done_with_concerns

artifacts:
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/index.html — the full page: hero, ToC, s-01 to s-06 prose, k-01 to k-08 (k-04 and k-05 live inside the decoder), f-umea table, language cards, WALS chart, echo, recap, sources
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/assets/tokens.css — custom tokens using the kit names, plus role, ergative and group tokens, light and dark
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/assets/page.css — page styles, including the shared chip classes
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/assets/page.js — k-01 pair picker with bracket "lasso", multiple-choice checks (commit, then reveal), k-08 reveal, s-06 echo, lens scroll controller and gating
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/assets/{components.css,toc.js,replay.js,widget.js} — kit copies
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/widgets/w-split-switch/{index.js,index.css} — the low-complexity Hindi-Urdu switch, built by me
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/widgets/manifest.json — all 3 widgets with mount, size, contract, files; the Google Fonts origins are listed in cdn

summary: I built the whole page to the approved plan with a playful "neo-brutalist" look: cream paper, heavy ink outlines, hard offset shadows, Bricolage Grotesque headings with a Source Serif 4 body. The ergative ending (-k, -ek, -nē) appears everywhere as a yellow highlighter, and the hero has a "-k" sticker that pops in plus a highlight sweep on "suffix" (both flair, under 1.5s). Role colours: S violet, A orange, P teal. Group outlines and WALS bars use S→A and S→P gradients, so the chart ties back to the lens. Every chip also carries its S/A/P letter. One scrolly runs from s-02 to the start of s-04. It has a sticky lens canvas: at the top on mobile (≤55vh, opaque) and beside the steps on desktop. Its scroll steps are gated on k-03. The Basque sentences are only the ones in x-05 and c-03/c-04/c-12. The AILO problem (Aleka Blackwell) and WALS are attributed visibly.

Gate: `verify.mjs --phase page` gives RESULT: PASS (round 4). The only remaining warning is "pending" for the two high-complexity widgets. Reading time is about 6 min of text; the interactions bring it to roughly 8. I checked the screenshots at 360 and 1280. probe.mjs confirmed:
- the k-01 echo works;
- k-03 flips the lens to ergative-english and unlocks it;
- the lens state reaches basque on scroll;
- k-07 unlocks the switch, and "has sold" shows laṛkē-nē.

MOUNT CONTRACT for widget builders (also in manifest.json):
- **w-alignment-lens**
  - Mount: `<div data-widget="w-alignment-lens" id="lens">` inside `.lens-canvas.d-scrolly-canvas`.
  - Reserved min-height: 360px on desktop; `min(340px, calc(var(--lens-max-h) - 16px))` on mobile. On mobile the container is sticky, max-height `var(--lens-max-h)` (55vh), overflow hidden, so the widget must fit in that height.
  - Inputs (attributes on the mount):
    - `data-state` = english | ergative-english | basque
    - `data-step` = 1 (plain chips: no letters, colours or outline), 2 (adds letters and role colours), 3 (adds the group outline and labels). ergative-english and basque always arrive at step 3.
    - `data-unlocked` = the states the mode switch may offer, space-separated.
  - The page also dispatches `lens:update` on the mount, with detail {state, step, unlocked[], source}. Read the attributes at init too, because the page sets them before the widget script runs.
  - Output: dispatch a bubbling `lens:mode` {state} when the reader uses the mode switch. The page then sets data-state to that state and data-step=3, and the next scroll step overrides it.
  - Still on the widget: the content labels, the "Made-up English: no one speaks this" tag, the -ek ending styled with var(--erg)/var(--erg-ink), the mode label, and an aria-live line.
- **w-basque-decoder**
  - Mount: `<div data-widget="w-basque-decoder" id="decoder" class="d-wide">` with min-height 560px (640px on mobile). Keep the content ≤680px wide.
  - Self-contained: puzzles, "Every noun here is singular." banner, glosses, da/du clue, Try again, Reset all, summary line and aria-live.
  - Optional output events: `decoder:check` {puzzle, correct} and `decoder:complete`, both bubbling. The page doesn't depend on them.
- **Tokens:** `--role-s/a/p`, `--role-on` (text on a role fill), `--role-*-soft`, `--erg`, `--erg-ink`, `--grp-sa`, `--grp-sp` (solid), `--grp-sa-grad`, `--grp-sp-grad`, `--font-display`, `--font-ex`, `--font-ex-diacritic`, `--border`, `--shadow-hard`, `--shadow-hard-sm`, `--ease-spring`, plus all the kit names.
- **Shared classes** (optional, don't restyle globally): `.chip` / `.chip--s|a|p` / `.chip-word` / `.chip-role` / `.chip-gloss` / `.erg` / `.word`. In `.chip-word`, wrap the stem and its `.erg` together in one `<span>`, otherwise the flex gap splits "Zu k".
- `window.Ergativity.committed` and the `didactician:commit` event on document (detail {id, ...}) report check commits.

concerns:
- k-01 feedback: I softened "Most English speakers pick…" to "Many…", because no claim in facts.md supports the frequency. Everything else in the check prompts, options and feedback is verbatim. I added only short per-option lead lines, such as "Not quite. It's A."
- To honour ac-01 (no term before the k-01 commit), I renamed headings that show in the desktop ToC rail from page load. s-03 is "Flip it: a made-up English", s-04 is "Now the real thing: decode some Basque", s-05 is "Not all-or-nothing". The standfirst avoids "case" and "ergative".
- "Syntactic ergativity, where rules of the grammar beyond the endings follow the S+P grouping" (the s-06 go-further line) comes from the plan and mockup. facts.md has no claim for it.
- The Georgian badge reads "ergative-ish" for the aorist and the card says it "sorts verbs by how agent-like their participant is". That is my paraphrase of the c-09 note (active, split-S).
- The page loads Google Fonts from a CDN, so it needs a network connection. The fallback stacks are system fonts.
- At 360px, the third column of the f-umea table wraps ("ikusi duzu / kalean", and the gizona chip drops to its own line). It is legible and doesn't overflow.

relaxed:
- none

dispositions:
- none (first build)
