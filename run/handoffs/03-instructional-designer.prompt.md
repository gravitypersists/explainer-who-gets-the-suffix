# Handoff 03 → instructional-designer (plan-v1)

## Your role

Read and follow `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/agents/instructional-designer.md`. This file is your task.

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

Produce the learning plan, cut list and wireframe mockup for an ~8-minute standalone explainer on nominative-accusative vs ergative-absolutive alignment for a curious general audience. The user explicitly wants it **"flashy and fun, use slick design"**: choose the shape (article, scrollytelling, explorable widget, or mix) and the interactive moments with that in mind, while keeping accuracy and instructional effectiveness first. Use the research as your factual base. Notable research findings to honour: the request's grouping "Basque, Kurdish, or Georgian" is too simple (Kurdish and Georgian are split systems; see facts); Basque -ak is ambiguous between ERG.SG and ABS.PL, so any puzzle must state nouns are singular or use the da/du auxiliary cue; only use the verified Basque sentences in research (do not invent new Basque sentences); avoid unergative activity verbs in Basque puzzles.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/brief.md`: objectives, audience, settings
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/`: facts.md, examples.md, misconceptions.md, assets.md, parking-lot.md
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/handoffs/01-researcher.report.md`, `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/handoffs/02-researcher.report.md`: researcher concerns
- `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/templates/learning-plan.md`, `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/templates/mockup.html`
- `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/references/` as your role file directs

## Outputs (write only these)

- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/learning-plan.md`
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/cut-list.md` (including `## If it runs long` cut order)
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/mockup.html`
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

- d-01: "~8 minutes (Recommended)" → time budget 8 minutes; size scope in ideas to fit.
- d-02: "Light (Recommended)" → research depth light; facts.md is the factual base.

## Findings to address (revision rounds only)

- none

## Done when

- [ ] learning-plan.md, cut-list.md, mockup.html exist in run/plan/
- [ ] `python3 /Users/m/workspace/linguistic-topology/.claude/skills/didactician/scripts/check_plan.py /Users/m/workspace/linguistic-topology/explainers/ergativity/run` reports no errors
- [ ] Every segment's factual content references claim IDs from facts.md

## Not your job

- Building the site; writing final prose; research; deployment.
