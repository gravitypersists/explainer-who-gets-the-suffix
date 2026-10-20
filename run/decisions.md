# Decisions

### d-01 · 2026-10-20T00:00:00Z · intake
question: How long should a curious reader spend on this?
answer: "~8 minutes (Recommended)"
decision: other
applies_to: brief field time_budget_minutes
notes: time_budget_minutes: 8

### d-02 · 2026-10-20T00:00:00Z · intake
question: How much fact-checking research before building?
answer: "Light (Recommended)"
decision: other
applies_to: brief field research_depth
notes: research_depth: light

### d-03 · 2026-10-20T00:30:00Z · checkpoint
question: How should we proceed with this learning plan and mockup?
answer: "Approve"
decision: approved
applies_to: plan
notes: plan v1 (handoff 03) approved as-is.

### d-04 · 2026-10-20T19:40:00Z · delivery
question: (user instruction) deployment
answer: "Add a readme, and deploy to git pages. Set remote to https://github.com/gravitypersists/explainer-who-gets-the-suffix and push (yes, from this directory). Go ahead and track everything but add a basic .gitignore."
decision: approved
applies_to: brief field deployment
notes: Commit on top of the remote's existing LICENSE commit; publish site/ to gh-pages (subtree push + Actions workflow for later updates).
