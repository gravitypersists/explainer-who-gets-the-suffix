# Handoff 08 → pedagogy-ux-reviewer (review round 1)

## Your role

Read and follow `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/agents/pedagogy-ux-reviewer.md`. This file is your task.

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

Independent review round 1 of the built explainer at `/Users/m/workspace/linguistic-topology/explainers/ergativity/site/` against the brief. The automated gate passed (`/Users/m/workspace/linguistic-topology/explainers/ergativity/run/gate/page-round-5.json`). Write your findings in the format of `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/templates/review.md`. Serve the site locally (e.g. `npx serve /Users/m/workspace/linguistic-topology/explainers/ergativity/site` or `python3 -m http.server`) and use `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/scripts/probe.mjs` to drive interactions where needed; probe screenshots go in `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/screenshots/probe/`.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/brief.md`
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/learning-plan.md`, `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/cut-list.md`, `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/mockup.html`: the approved plan (objectives, checks, acceptance criteria)
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/site/`: the built page and widgets
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/screenshots/page-round-5/`: gate screenshots
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/gate/page-round-5.json`

## Outputs (write only these)

- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/review/round-1/pedagogy-ux.md`
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/screenshots/probe/` (your probe screenshots only)
- Your report goes in your final message, in the format of `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/templates/report.md`.

## Invariants that apply to you (verbatim; only the user can relax them)

- I8: Each agent writes only in its namespace
- (For judging the site: I1 no horizontal overflow at 360px; I2 static only; I3 third-party media cleared and attributed; I4 finite animations longer than flair have a replay control; I6 carousels don't reflow; I7 SVG markers resolve and aren't clipped.)

## User decisions that apply (quoted from run/decisions.md)

- d-01: "~8 minutes (Recommended)" → time budget 8 min.
- d-02: "Light (Recommended)" → research depth light.
- d-03: "Approve" → the learning plan and mockup were approved by the user.

## Findings to address (revision rounds only)

- none

## Done when

- [ ] `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/review/round-1/pedagogy-ux.md` exists in the review template format, each finding with severity (blocking/should/nit), location and expected fix.

## Not your job

- Fixing anything; editing the site, plan or research; deployment.
