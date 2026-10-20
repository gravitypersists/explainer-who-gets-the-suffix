# Handoff 04 → page-builder (page-v1)

## Your role

Read and follow `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/agents/page-builder.md`. This file is your task.

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

Build the page in `/Users/m/workspace/linguistic-topology/explainers/ergativity/site/` per the approved learning plan: shell, design tokens, all prose, simple figures (incl. the WALS bar chart), the low-complexity widget w-split-switch, widget mounts for the high-complexity widgets (w-alignment-lens, w-basque-decoder — those are built separately by widget builders in `site/widgets/<id>/`), and `site/widgets/manifest.json`. The user asked for **"flashy and fun, use slick design"**: give it a bold, playful, polished visual identity (your call on type, colour, motion), within the invariants and accessibility. The mockup is the approved content and flow; its wording is a draft — write your own prose — but its check prompts, options and answers are final. Honour the designer's acceptance criteria (e.g. ac-06: wrong -k options exist only as toggle states, never shown as sentences; "ergative English" keeps a persistent "made up" tag; say "the doer of a two-participant verb", never that every intransitive subject is bare). Use only Basque sentences from research/examples.md x-05 and facts. Attribute the AILO problem (Aleka Blackwell, "Basquing in the sun") and WALS as sources visibly.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/brief.md`
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/learning-plan.md`, `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/cut-list.md`, `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/mockup.html` (approved)
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/facts.md`, `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/examples.md`, `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/misconceptions.md`
- `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/references/` and `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/kit/` as your role file directs

## Outputs (write only these)

- `/Users/m/workspace/linguistic-topology/explainers/ergativity/site/` (everything except `site/widgets/<id>/` contents)
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

- d-01: "~8 minutes (Recommended)" → built reading+interaction time ≈ 8 min.
- d-02: "Light (Recommended)" → facts.md is the factual base.
- d-03: "Approve" → the plan and mockup are approved as-is.

## Findings to address (revision rounds only)

- none

## Done when

- [ ] Page, prose, tokens, figures, w-split-switch, widget mounts and manifest.json exist in site/
- [ ] `node /Users/m/workspace/linguistic-topology/.claude/skills/didactician/scripts/verify.mjs --out /Users/m/workspace/linguistic-topology/explainers/ergativity --phase page` passes (high widgets reported pending)
- [ ] Report lists the mount contract (element ids/data attributes, events, tokens) widget builders must follow

## Not your job

- Building w-alignment-lens or w-basque-decoder internals; editing the plan or research; deployment.
