status: done_with_concerns

artifacts:
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/widgets/w-alignment-lens/index.js — the widget: three states, steps 1–3, attribute/event contract, FLIP motion, mode switch, aria-live
- /Users/m/workspace/linguistic-topology/explainers/ergativity/site/widgets/w-alignment-lens/index.css — styles scoped to the mount, tokens only, layouts for narrow, tight and reduced-motion

summary: The two sentence rows physically "re-align". They slide sideways until the role that shares S's form sits in S's column, and one dashed outline encloses that column (S+A in English; S+P in Ergative English and Basque). The label sits on the outline's top edge, the same way as the page's recap mini-panels. Motion is about 620ms ease-in-out FLIP for the rows and the outline. Other effects: She→Her flips; "-ek" pops on with a spring; role letters pop in at step 2; grouped chips lift with a hard shadow; the "MADE-UP ENGLISH: NO ONE SPEAKS THIS" stamp drops in. Reduced motion jumps straight to the final state (checked: 0 running animations). No libraries; vanilla JS + DOM, with the page's .chip, .erg and .word classes reused. The model matches c-01–c-05 and x-01 (Martin bare as S, Martin+ek as A, Diego bare as P).

Checks:
- `verify.mjs --widget w-alignment-lens`: RESULT PASS (round 3).
- probe.mjs at 360 and 1280 drove the real page flow:
  - Step 1: no `.chip--s`, no letters. Labels read "the sleeper / the seer / the seen".
  - Step 2: letters and colours appear (ac-02).
  - Step 3: outline label "same form" around S+A; live text "English: S and A share a form (she); P differs (him)."
  - Before k-03, the "ergative-english" switch segment is disabled. After clicking the correct k-03 option, data-state becomes ergative-english and the mode label reads "Ergative English (made up)". The made-up tag is visible, and the outline is on S+P (ac-03, ac-04).
  - Switch click → English (aria-pressed true). ArrowRight → ergative-english.
  - Scrolling to the Basque step shows A as "Martinek" with the "-k/-ek (ergative)" tag, plus both translations. All three segments are enabled (ac-05).
  - Mid-transition screenshots (250ms) show the rows and outline in motion.
- Fixed height across states: 372px on desktop. On mobile it is 324px, capped by `calc(var(--lens-max-h) - 18px)`.
- Checked at 320, 360 and 1280, in light and dark. At 320px it uses a scale-to-fit fallback, so nothing is clipped.
- Screenshots: /Users/m/workspace/linguistic-topology/explainers/ergativity/run/screenshots/probe/lens360-*.png and lens1280-*.png.

concerns:
- The widget renders its own card (border, shadow, dotted backdrop) inside `.lens-canvas`. On mobile that sits inside the page's sticky strip with its bottom border, so the result is a card inside a strip. It looks fine, but the page builder may want to drop the canvas border.
- At steps 1–2 the label under each chip shows the role description ("the sleeper", "the seer", "the seen", echoing the s-01 tiles). The form labels ("subject form" / "object form") appear at step 3 together with the outline, so step 3's text ("Now look at the words themselves") is what reveals them. The plan's "always visible: form label" is therefore relaxed for steps 1–2.
- The mode switch is always shown, with locked segments marked by a lock icon and disabled (aria-label "…(locked: keep reading)"). The segment says "Ergative English"; the corner label says "Ergative English (made up)". The made-up tag sits in a strip at the bottom of the card, not in the corner. In Basque, the same strip holds the two translations.
- The widget ignores a data-state that isn't listed in data-unlocked and falls back to English. That is a safety net for ac-04; the page already always unlocks a state before setting it.
- Manifest: no change needed (cdn [] and data_origins [] stay correct).

relaxed:
- none

dispositions:
- none (first build)
