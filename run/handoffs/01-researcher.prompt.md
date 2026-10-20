# Handoff 01 → researcher (light-research)

## Your role

Read and follow `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/agents/researcher.md`. This file is your task.

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

Light-depth research answering every research question q-1…q-6 in the brief, for objectives o-1…o-3. Priority: verify concrete example sentences (Basque glosses especially) and the accuracy of the language characterizations in the original request (Kurdish and Georgian are split systems). Find common novice misconceptions. Converge on what the objectives need; don't accumulate.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/brief.md`: brief with objectives and research questions
- `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/templates/research-formats.md`: output formats

## Outputs (write only these)

- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/`: your research files, in the formats from research-formats.md
- Your report goes in your final message, in the format of `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/templates/report.md`.

## Invariants that apply to you (verbatim; only the user can relax them)

- I8: Each agent writes only in its namespace.
- I3: Third-party media is cleared (by licence for the intended use, or by the user) and visibly attributed. (If you note any candidate media, record licence; intended_use is unknown.)

## User decisions that apply (quoted from run/decisions.md)

- d-01: "~8 minutes (Recommended)" → time budget 8 minutes; keep research proportionate.
- d-02: "Light (Recommended)" → research_depth light.

## Findings to address (revision rounds only)

- none

## Done when

- [ ] Every research question q-1…q-6 is answered or explicitly marked unanswerable with reason.
- [ ] Every claim is sourced.
- [ ] `python3 /Users/m/workspace/linguistic-topology/.claude/skills/didactician/scripts/check_research.py /Users/m/workspace/linguistic-topology/explainers/ergativity/run` passes.

## Not your job

- Writing the plan, prose, or site; choosing the page shape; anything outside run/research/.
