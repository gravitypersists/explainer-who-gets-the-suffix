# Handoff 06 → widget-builder (w-basque-decoder)

## Your role

Read and follow `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/agents/widget-builder.md`. This file is your task. Your widget id is `w-basque-decoder`.

## Original request (verbatim)


> make this one flashy and fun, use slick design, audience will be anybdoy who's curious. Linguistic Typology: Nominative-Accusative vs. Ergative-Absolutive Languages
> Most Western languages are nominative-accusative: the subject of an intransitive sentence ("She slept") is marked identically to the agent of a transitive sentence ("She ate the apple"), while the patient gets marked differently ("She saw him").
>
> Ergative-absolutive languages (like Basque, Kurdish, or Georgian) flip the grouping entirely. They treat the person experiencing sleep identically to the object being eaten:
>
> In English, we intuitively group the actor who acts alone with the actor who affects another.
>
> In an ergative language, the baseline state is the entity affected or undergoing an event (the absolutive: the sleeper or the eaten apple), while an agent actively initiating change receives a special suffix or case (the ergative).
>
> Why it's fascinating: Within five minutes of looking at sample sentences, you realize your instinct for what constitutes the "core" of an action isn't universal logic—it's just grammatical architecture..

## Root spec

- Brief: `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/brief.md`
- Skill base directory: `/Users/m/workspace/linguistic-topology/.claude/skills/didactician`

## Task

Build widget `w-basque-decoder` in `/Users/m/workspace/linguistic-topology/explainers/ergativity/site/widgets/w-basque-decoder/` per its spec in the approved learning plan (`## Widgets` → `### w-basque-decoder`) and the acceptance criteria. Use only the verified Basque sentences from research x-05/c-12 (do not invent sentences). Wrong -k options exist only as toggle states, never shown as standalone sentences (ac-06). Show the 'Every noun here is singular.' banner and the da/du clue. Check prompts, options, answers and feedback from the mockup are final. The user wants it **"flashy and fun, use slick design"**: make it feel delightful (motion, polish) while matching the page's established neo-brutalist identity (tokens in `site/assets/tokens.css`, shared chip classes in `site/assets/page.css`) and honouring reduced-motion and accessibility. The mount contract is in `site/widgets/manifest.json` and in the page builder's report (Inputs below) — follow it exactly; don't change the page.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/brief.md`
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/learning-plan.md` (approved), `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/mockup.html` (approved content; check prompts/options/answers are final)
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/facts.md`, `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/examples.md`
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/handoffs/04-page-builder.report.md`: mount contract, tokens, shared classes
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/site/index.html`, `/Users/m/workspace/linguistic-topology/explainers/ergativity/site/assets/`, `/Users/m/workspace/linguistic-topology/explainers/ergativity/site/widgets/manifest.json` (read only)
- `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/references/widgets.md` and others as your role file directs

## Outputs (write only these)

- `/Users/m/workspace/linguistic-topology/explainers/ergativity/site/widgets/w-basque-decoder/`
- Your report goes in your final message, in the format of `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/templates/report.md`.

## Invariants that apply to you (verbatim; only the user can relax them)

- I1: No horizontal overflow at 360px, unless the user confirmed a mobile waiver
- I2: Static only: no runtime data calls (fetch/XHR/WebSocket/beacon) to undeclared origins, and no backend. CDN loads are fine
- I3: Third-party media is cleared (by licence for the intended use, or by the user) and visibly attributed
- I4: Finite animations longer than flair have a replay control
- I6: Carousels don't change height (reflow) between pages
- I7: SVG markers resolve and aren't clipped
- I8: Each agent writes only in its namespace

## User decisions that apply (quoted from run/decisions.md)

- d-03: "Approve" → the plan and mockup are approved as-is.

## Findings to address (revision rounds only)

- none

## Done when

- [ ] `node /Users/m/workspace/linguistic-topology/.claude/skills/didactician/scripts/verify.mjs --out /Users/m/workspace/linguistic-topology/explainers/ergativity --widget w-basque-decoder` passes
- [ ] All puzzles solvable by keyboard and touch; correct/incorrect feedback and reset work at 360px and 1280px.

## Not your job

- The page, prose outside the widget, global CSS, other widgets, the manifest (report any manifest change needed instead), the plan, deployment.
