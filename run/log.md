# Run log: ergativity

Human-readable timeline. Each entry links the files it refers to. Every dispatch has a
prompt and report in `handoffs/` and a pre-dispatch snapshot in `history/`.

### 2026-10-20T13:52:13-04:00 · orchestrator · init
Run initialised: depth `light`, budget 8 min. Caps: 18 dispatches, 75 agent-minutes; loops {'research': 2, 'checkpoint': 4, 'gate': 6, 'review': 2}.
- [brief.md](brief.md)
- [decisions.md](decisions.md)

### 2026-10-20T13:52:33-04:00 · orchestrator · stage
Stage: intake → **research**

### 2026-10-20T13:52:33-04:00 · orchestrator · dispatch
Dispatch 01 → **researcher** (light-research), loop research round 1/2. May write: `run/research`. Usage: 1/18 dispatches, 0/75 agent-min.
- [handoffs/01-researcher.prompt.md](handoffs/01-researcher.prompt.md)
- [history/01-researcher](history/01-researcher)

### 2026-10-20T13:57:42-04:00 · orchestrator · receive
Received 01 ← **researcher**: `done_with_concerns`. 10 file(s) changed.
- [handoffs/01-researcher.report.md](handoffs/01-researcher.report.md)

### 2026-10-20T13:57:42-04:00 · orchestrator · dispatch
Dispatch 02 → **researcher** (basque-fill-in), loop research round 2/2. May write: `run/research`. Usage: 2/18 dispatches, 5/75 agent-min.
- [handoffs/02-researcher.prompt.md](handoffs/02-researcher.prompt.md)
- [history/02-researcher](history/02-researcher)

### 2026-10-20T14:00:39-04:00 · orchestrator · receive
Received 02 ← **researcher**: `done_with_concerns`. 8 file(s) changed.
- [handoffs/02-researcher.report.md](handoffs/02-researcher.report.md)

### 2026-10-20T14:00:39-04:00 · orchestrator · stage
Stage: research → **plan**

### 2026-10-20T14:00:39-04:00 · orchestrator · dispatch
Dispatch 03 → **instructional-designer** (plan-v1), loop checkpoint round 1/4. May write: `run/plan`. Usage: 3/18 dispatches, 8/75 agent-min.
- [handoffs/03-instructional-designer.prompt.md](handoffs/03-instructional-designer.prompt.md)
- [history/03-instructional-designer](history/03-instructional-designer)

### 2026-10-20T14:05:56-04:00 · orchestrator · receive
Received 03 ← **instructional-designer**: `done_with_concerns`. 8 file(s) changed.
- [handoffs/03-instructional-designer.report.md](handoffs/03-instructional-designer.report.md)

### 2026-10-20T14:05:56-04:00 · orchestrator · stage
Stage: plan → **checkpoint**

### 2026-10-20T14:07:22-04:00 · orchestrator · user_decision
Checkpoint: user approved plan v1
- [run/decisions.md](run/decisions.md)

### 2026-10-20T14:07:22-04:00 · orchestrator · stage
Stage: checkpoint → **build**

### 2026-10-20T14:07:22-04:00 · orchestrator · dispatch
Dispatch 04 → **page-builder** (page-v1), loop gate:page round 1/6. May write: `site` except `site/widgets/*/*`. Usage: 4/18 dispatches, 13/75 agent-min.
- [handoffs/04-page-builder.prompt.md](handoffs/04-page-builder.prompt.md)
- [history/04-page-builder](history/04-page-builder)

### 2026-10-20T14:17:48-04:00 · verify · gate
Gate (page) round 1: **FAIL** (overflow/I1). Reading ~6.1 min (brief: ~8 min; reported, not gated); 411 KB, 21 requests.
- [gate/page-round-1.json](gate/page-round-1.json)
- [screenshots/page-round-1](screenshots/page-round-1)

### 2026-10-20T14:18:12-04:00 · verify · gate
Gate (page) round 2: **PASS**. Reading ~6.1 min (brief: ~8 min; reported, not gated); 305 KB, 21 requests.
- [gate/page-round-2.json](gate/page-round-2.json)
- [screenshots/page-round-2](screenshots/page-round-2)

### 2026-10-20T14:19:36-04:00 · verify · gate
Gate (page) round 3: **PASS**. Reading ~6 min (brief: ~8 min; reported, not gated); 404 KB, 21 requests.
- [gate/page-round-3.json](gate/page-round-3.json)
- [screenshots/page-round-3](screenshots/page-round-3)

### 2026-10-20T14:20:12-04:00 · verify · gate
Gate (page) round 4: **PASS**. Reading ~6 min (brief: ~8 min; reported, not gated); 377 KB, 21 requests.
- [gate/page-round-4.json](gate/page-round-4.json)
- [screenshots/page-round-4](screenshots/page-round-4)

### 2026-10-20T14:21:24-04:00 · orchestrator · receive
Received 04 ← **page-builder**: `done_with_concerns`. 39 file(s) changed. **Namespace violation** (2): `site/widgets/w-split-switch/index.css`, `site/widgets/w-split-switch/index.js`
- [handoffs/04-page-builder.report.md](handoffs/04-page-builder.report.md)

### 2026-10-20T14:21:30-04:00 · orchestrator · ack
Namespace violation in 04 acknowledged: Intended: handoff 04 assigned the low-complexity w-split-switch to the page builder; no widget builder owns that namespace. Exclude glob was too broad (should have excluded only high-complexity widget dirs).

### 2026-10-20T14:21:30-04:00 · orchestrator · dispatch
Dispatch 05 → **widget-builder** (w-alignment-lens), loop gate:w-alignment-lens round 1/6. May write: `site/widgets/w-alignment-lens`. Usage: 5/18 dispatches, 27/75 agent-min.
- [handoffs/05-widget-builder.prompt.md](handoffs/05-widget-builder.prompt.md)

### 2026-10-20T14:21:30-04:00 · orchestrator · dispatch
Dispatch 06 → **widget-builder** (w-basque-decoder), loop gate:w-basque-decoder round 1/6. May write: `site/widgets/w-basque-decoder`. Usage: 6/18 dispatches, 27/75 agent-min.
- [handoffs/06-widget-builder.prompt.md](handoffs/06-widget-builder.prompt.md)

### 2026-10-20T14:27:08-04:00 · verify · gate
Gate (w-basque-decoder) round 1: **FAIL** (replay/I4, console, resources). Reading ~6.6 min (brief: ~8 min; reported, not gated); 335 KB, 21 requests.
- [gate/w-basque-decoder-round-1.json](gate/w-basque-decoder-round-1.json)
- [screenshots/w-basque-decoder-round-1](screenshots/w-basque-decoder-round-1)

### 2026-10-20T14:28:14-04:00 · verify · gate
Gate (w-alignment-lens) round 1: **PASS**. Reading ~6.6 min (brief: ~8 min; reported, not gated); 391 KB, 21 requests.
- [gate/w-alignment-lens-round-1.json](gate/w-alignment-lens-round-1.json)
- [screenshots/w-alignment-lens-round-1](screenshots/w-alignment-lens-round-1)

### 2026-10-20T14:28:55-04:00 · verify · gate
Gate (w-basque-decoder) round 2: **PASS**. Reading ~6.6 min (brief: ~8 min; reported, not gated); 314 KB, 21 requests.
- [gate/w-basque-decoder-round-2.json](gate/w-basque-decoder-round-2.json)
- [screenshots/w-basque-decoder-round-2](screenshots/w-basque-decoder-round-2)

### 2026-10-20T14:29:45-04:00 · orchestrator · receive
Received 06 ← **widget-builder**: `done_with_concerns`. 30 file(s) changed.
- [handoffs/06-widget-builder.report.md](handoffs/06-widget-builder.report.md)

### 2026-10-20T14:35:25-04:00 · verify · gate
Gate (w-alignment-lens) round 2: **PASS**. Reading ~6.6 min (brief: ~8 min; reported, not gated); 469 KB, 21 requests.
- [gate/w-alignment-lens-round-2.json](gate/w-alignment-lens-round-2.json)
- [screenshots/w-alignment-lens-round-2](screenshots/w-alignment-lens-round-2)

### 2026-10-20T14:35:56-04:00 · verify · gate
Gate (w-alignment-lens) round 3: **PASS**. Reading ~6.6 min (brief: ~8 min; reported, not gated); 405 KB, 21 requests.
- [gate/w-alignment-lens-round-3.json](gate/w-alignment-lens-round-3.json)
- [screenshots/w-alignment-lens-round-3](screenshots/w-alignment-lens-round-3)

### 2026-10-20T14:36:25-04:00 · orchestrator · receive
Received 05 ← **widget-builder**: `done_with_concerns`. 49 file(s) changed.
- [handoffs/05-widget-builder.report.md](handoffs/05-widget-builder.report.md)

### 2026-10-20T14:36:45-04:00 · verify · gate
Gate (page) round 5: **PASS**. Reading ~6.6 min (brief: ~8 min; reported, not gated); 218 KB, 21 requests.
- [gate/page-round-5.json](gate/page-round-5.json)
- [screenshots/page-round-5](screenshots/page-round-5)

### 2026-10-20T14:36:59-04:00 · orchestrator · stage
Stage: build → **review**

### 2026-10-20T14:36:59-04:00 · orchestrator · dispatch
Dispatch 07 → **accuracy-reviewer** (accuracy-r1), loop review:accuracy round 1/2. May write: `run/review/round-1`. Usage: 7/18 dispatches, 42/75 agent-min.
- [handoffs/07-accuracy-reviewer.prompt.md](handoffs/07-accuracy-reviewer.prompt.md)

### 2026-10-20T14:36:59-04:00 · orchestrator · dispatch
Dispatch 08 → **pedagogy-ux-reviewer** (pedux-r1), loop review:pedagogy-ux round 1/2. May write: `run/review/round-1`. Usage: 8/18 dispatches, 42/75 agent-min.
- [handoffs/08-pedagogy-ux-reviewer.prompt.md](handoffs/08-pedagogy-ux-reviewer.prompt.md)

### 2026-10-20T14:39:44-04:00 · orchestrator · receive
Received 07 ← **accuracy-reviewer**: `done_with_concerns`. 10 file(s) changed.
- [handoffs/07-accuracy-reviewer.report.md](handoffs/07-accuracy-reviewer.report.md)

### 2026-10-20T14:45:02-04:00 · orchestrator · receive
Received 08 ← **pedagogy-ux-reviewer**: `done`. 68 file(s) changed.
- [handoffs/08-pedagogy-ux-reviewer.report.md](handoffs/08-pedagogy-ux-reviewer.report.md)

### 2026-10-20T14:45:02-04:00 · orchestrator · findings
Round 1 ingested: 11 finding(s) touched; open: 1 blocking, 3 should, 7 nit.
- [review/round-1/findings.md](review/round-1/findings.md)

### 2026-10-20T14:45:14-04:00 · orchestrator · routing
Round 1: A-01..A-03, P-01..P-05, P-08 -> page-builder; P-06 -> lens builder; P-07 -> decoder builder. A-01 fix rewords k-08 prompt/reveal (accuracy outranks mockup-final check text); no change to objectives/segments/shape/assets, so logged not escalated.
- [run/review/round-1/findings.md](run/review/round-1/findings.md)

### 2026-10-20T14:45:14-04:00 · orchestrator · dispatch
Dispatch 09 → **widget-builder** (r1-fixes), loop gate:w-alignment-lens round 2/6. May write: `site/widgets/w-alignment-lens`. Usage: 9/18 dispatches, 50/75 agent-min.
- [handoffs/09-widget-builder.prompt.md](handoffs/09-widget-builder.prompt.md)
- [history/09-widget-builder](history/09-widget-builder)

### 2026-10-20T14:45:14-04:00 · orchestrator · dispatch
Dispatch 10 → **widget-builder** (r1-fixes), loop gate:w-basque-decoder round 2/6. May write: `site/widgets/w-basque-decoder`. Usage: 10/18 dispatches, 50/75 agent-min.
- [handoffs/10-widget-builder.prompt.md](handoffs/10-widget-builder.prompt.md)
- [history/10-widget-builder](history/10-widget-builder)

### 2026-10-20T14:45:17-04:00 · orchestrator · dispatch
Dispatch 11 → **page-builder** (r1-fixes), loop gate:page round 2/6. May write: `site` except `site/widgets/w-alignment-lens/*`, `site/widgets/w-basque-decoder/*`. Usage: 11/18 dispatches, 50/75 agent-min.
- [handoffs/11-page-builder.prompt.md](handoffs/11-page-builder.prompt.md)
- [history/11-page-builder](history/11-page-builder)

### 2026-10-20T14:46:16-04:00 · verify · gate
Gate (page) round 6: **PASS**. Reading ~6.6 min (brief: ~8 min; reported, not gated); 407 KB, 21 requests.
- [gate/page-round-6.json](gate/page-round-6.json)
- [screenshots/page-round-6](screenshots/page-round-6)

### 2026-10-20T14:46:17-04:00 · verify · gate
Gate (page) round 6: **PASS**. Reading ~6.6 min (brief: ~8 min; reported, not gated); 213 KB, 21 requests.
- [gate/page-round-6.json](gate/page-round-6.json)
- [screenshots/page-round-6](screenshots/page-round-6)

### 2026-10-20T14:46:40-04:00 · orchestrator · receive
Received 09 ← **widget-builder**: `done`. 24 file(s) changed.
- [handoffs/09-widget-builder.report.md](handoffs/09-widget-builder.report.md)

### 2026-10-20T14:46:40-04:00 · verify · gate
Gate (page) round 7: **PASS**. Reading ~6.5 min (brief: ~8 min; reported, not gated); 455 KB, 20 requests.
- [gate/page-round-7.json](gate/page-round-7.json)
- [screenshots/page-round-7](screenshots/page-round-7)

### 2026-10-20T14:46:50-04:00 · orchestrator · receive
Received 10 ← **widget-builder**: `done`. 30 file(s) changed.
- [handoffs/10-widget-builder.report.md](handoffs/10-widget-builder.report.md)

### 2026-10-20T14:47:33-04:00 · verify · gate
Gate (page) round 8: **PASS**. Reading ~6.5 min (brief: ~8 min; reported, not gated); 433 KB, 20 requests.
- [gate/page-round-8.json](gate/page-round-8.json)
- [screenshots/page-round-8](screenshots/page-round-8)

### 2026-10-20T14:48:06-04:00 · orchestrator · receive
Received 11 ← **page-builder**: `done`. 44 file(s) changed.
- [handoffs/11-page-builder.report.md](handoffs/11-page-builder.report.md)

### 2026-10-20T14:48:26-04:00 · verify · gate
Gate (page) round 9: **PASS**. Reading ~6.5 min (brief: ~8 min; reported, not gated); 294 KB, 20 requests.
- [gate/page-round-9.json](gate/page-round-9.json)
- [screenshots/page-round-9](screenshots/page-round-9)

### 2026-10-20T14:48:41-04:00 · orchestrator · dispatch
Dispatch 12 → **accuracy-reviewer** (accuracy-r2), loop review:accuracy round 2/2. May write: `run/review/round-2`. Usage: 12/18 dispatches, 53/75 agent-min.
- [handoffs/12-accuracy-reviewer.prompt.md](handoffs/12-accuracy-reviewer.prompt.md)

### 2026-10-20T14:48:41-04:00 · orchestrator · dispatch
Dispatch 13 → **pedagogy-ux-reviewer** (pedux-r2), loop review:pedagogy-ux round 2/2. May write: `run/review/round-2`. Usage: 13/18 dispatches, 53/75 agent-min.
- [handoffs/13-pedagogy-ux-reviewer.prompt.md](handoffs/13-pedagogy-ux-reviewer.prompt.md)

### 2026-10-20T14:50:19-04:00 · orchestrator · receive
Received 12 ← **accuracy-reviewer**: `done`. 30 file(s) changed.
- [handoffs/12-accuracy-reviewer.report.md](handoffs/12-accuracy-reviewer.report.md)

### 2026-10-20T14:50:41-04:00 · orchestrator · receive
Received 13 ← **pedagogy-ux-reviewer**: `done`. 32 file(s) changed.
- [handoffs/13-pedagogy-ux-reviewer.report.md](handoffs/13-pedagogy-ux-reviewer.report.md)

### 2026-10-20T14:50:41-04:00 · orchestrator · findings
Round 2 ingested: 11 finding(s) touched; open: 0 blocking, 0 should, 0 nit.
- [review/round-2/findings.md](review/round-2/findings.md)

### 2026-10-20T14:50:41-04:00 · orchestrator · stage
Stage: review → **deliver**

### 2026-10-20T14:50:41-04:00 · orchestrator · deliver
All findings closed after round 2; gate page-round-9 PASS; delivering.
- [run/review/round-2/findings.md](run/review/round-2/findings.md)

### 2026-10-20T14:50:41-04:00 · orchestrator · stage
Stage: deliver → **done**

### 2026-10-20T15:33:21-04:00 · orchestrator · user_decision
User authorized deploy to GitHub Pages at gravitypersists/explainer-who-gets-the-suffix
- [run/decisions.md](run/decisions.md)

### 2026-10-20T15:36:32-04:00 · verify · gate
Gate (page) round 10: **PASS**. Reading ~6.6 min (brief: ~8 min; reported, not gated); 340 KB, 20 requests.
- [gate/page-round-10.json](gate/page-round-10.json)
- [screenshots/page-round-10](screenshots/page-round-10)

### 2026-10-20T15:36:32-04:00 · orchestrator · post_delivery_change
User request: added Opus 5.5 / didactician attribution line to site footer and README; switched Pages workflow to GitHub Actions deploy (orchestrator edit to site/, one footer line)
