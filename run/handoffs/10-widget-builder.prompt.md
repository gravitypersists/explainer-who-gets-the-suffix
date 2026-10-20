# Handoff 10 → widget-builder (w-basque-decoder review-round-1 fixes)

## Your role

Read and follow `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/agents/widget-builder.md`. This file is your task.

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

You are continuing as the w-basque-decoder builder. Fix finding P-07. Answer each finding ID with a disposition: `fixed`, `disputed` (with evidence), or `blocked`, in a `dispositions:` section of your report.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/review/round-1/findings.md`: full text of the findings, with evidence and expected fixes
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/learning-plan.md`, `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/facts.md`
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/site/`

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

- d-03: "Approve" → the plan and mockup are approved; keep objectives, segments and shape unchanged.

## Findings to address (revision rounds only)

- P-07 (nit): from '?' the first tap always adds -k, so 'bare' takes two taps → make the first tap choose bare (cycle bare → -k) or change the hint to make the toggle obvious

## Done when

- [ ] Every finding listed above has a disposition.
- [ ] `node /Users/m/workspace/linguistic-topology/.claude/skills/didactician/scripts/verify.mjs --out /Users/m/workspace/linguistic-topology/explainers/ergativity` passes (full gate).

## Not your job

- The page, other widgets, global CSS, the plan; deployment.
