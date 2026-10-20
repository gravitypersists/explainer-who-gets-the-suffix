# Handoff 13 → pedagogy-ux-reviewer (review round 2 — closure)

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

Closure review (round 2) of the explainer at `/Users/m/workspace/linguistic-topology/explainers/ergativity/site/`. For each **P-** finding in round-1 `findings.md`, write a `### <ID>` entry with `status: closed | still-open | dispute-upheld` and evidence, using the builders' dispositions as claims to verify (not as truth). You may raise **new** findings (`### new`) only at `blocking` severity. Format per `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/templates/review.md`. The full gate passed (`/Users/m/workspace/linguistic-topology/explainers/ergativity/run/gate/page-round-9.json`). Serve the site locally and use `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/scripts/probe.mjs` to verify; screenshots go to `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/screenshots/probe/`.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/brief.md`
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/learning-plan.md`, `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/cut-list.md`, `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/plan/mockup.html`
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/review/round-1/findings.md`: round-1 findings
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/handoffs/dispositions-round-1.md`: builders' dispositions per finding
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/site/`, `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/screenshots/page-round-9/`, `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/gate/page-round-9.json`

## Outputs (write only these)

- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/review/round-2/pedagogy-ux.md`
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/screenshots/probe/` (your probe screenshots only)
- Your report goes in your final message, in the format of `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/templates/report.md`.

## Invariants that apply to you (verbatim; only the user can relax them)

- I8: Each agent writes only in its namespace
- (For judging the site: I1 no horizontal overflow at 360px; I2 static only; I3 third-party media cleared and attributed; I4 finite animations longer than flair have a replay control; I6 carousels don't reflow; I7 SVG markers resolve and aren't clipped.)

## User decisions that apply (quoted from run/decisions.md)

- d-01: "~8 minutes (Recommended)"; d-02: "Light (Recommended)"; d-03: "Approve" (plan and mockup approved).

## Findings to address (revision rounds only)

- Verify closure of all P- findings in round-1 findings.md.

## Done when

- [ ] `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/review/round-2/pedagogy-ux.md` has a status entry for every P- finding from round 1.

## Not your job

- Fixing anything; editing site, plan or research; non-blocking new findings; deployment.
