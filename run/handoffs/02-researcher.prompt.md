# Handoff 02 → researcher (basque-fill-in)

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

Fill-in round (same research caps). Objective o-2 needs the reader to *predict* ergative marking across several sentences, but research so far verifies only one Basque pair (Martin etorri da / Martinek Diego ikusi du). Find and source **4–8 additional verified Basque sentences** (from grammars, textbooks, Wikipedia/Wiktionary glosses, academic sources) that cleanly show: S unmarked with a clearly intransitive (unaccusative) verb; A with -k and P unmarked with a transitive verb; ideally the same noun appearing in S, A and P roles (e.g. gizona / gizonak, or another common noun or name). Avoid unergative activity verbs (lan egin, barre egin) per your earlier concern. Add them as claims/examples to the existing research files with sources. If a verified glossed sentence from one other ergative language (e.g. Hindi perfective, already partly covered; or Dyirbal, Tongan, Greenlandic) is cheap to find, add one; otherwise skip. Keep the existing files' format; update counts.

## Inputs (read these; don't expect them pasted)

- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/brief.md`
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/`: your previous output (facts.md, examples.md, etc.)
- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/handoffs/01-researcher.report.md`: your previous report
- `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/templates/research-formats.md`

## Outputs (write only these)

- `/Users/m/workspace/linguistic-topology/explainers/ergativity/run/research/`: updated research files
- Your report goes in your final message, in the format of `/Users/m/workspace/linguistic-topology/.claude/skills/didactician/templates/report.md`.

## Invariants that apply to you (verbatim; only the user can relax them)

- I8: Each agent writes only in its namespace.

## User decisions that apply (quoted from run/decisions.md)

- d-01: "~8 minutes (Recommended)" → keep proportionate.
- d-02: "Light (Recommended)" → research_depth light; this fill-in counts inside the same caps.

## Findings to address (revision rounds only)

- none

## Done when

- [ ] At least 4 additional sourced Basque sentences with glosses, or a clear statement of how many could be verified and why not more.
- [ ] `python3 /Users/m/workspace/linguistic-topology/.claude/skills/didactician/scripts/check_research.py /Users/m/workspace/linguistic-topology/explainers/ergativity/run` passes.

## Not your job

- Plan, prose, site. Anything outside run/research/.
