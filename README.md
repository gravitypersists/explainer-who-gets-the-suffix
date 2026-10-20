# Who Gets the Suffix?

An interactive explainer about two ways languages sort who-did-what-to-whom:
**nominative-accusative** (English: *she* sleeps, *she* sees *him*) and
**ergative-absolutive** (Basque: *Martin* etorri da, *Martinek* Diego ikusi du).

**Live:** https://gravitypersists.github.io/explainer-who-gets-the-suffix/

About 8 minutes, aimed at anyone who's curious. No linguistics background needed.

## What's inside

- **The alignment lens:** a sticky diagram that regroups the three core roles as you scroll, from English to a made-up "ergative English" to real Basque.
- **Basque decoder:** three puzzles where you decide which nouns get the ergative *-k*, using sentences from the All-Ireland Linguistics Olympiad problem "Basquing in the sun" (Aleka Blackwell).
- **Hindi-Urdu split switch:** the ergative *-nē* appears in the perfective but not in the present.
- **Not all-or-nothing:** Kurdish, Georgian and Dyirbal, three languages that are ergative only some of the time.
- **How common is each?** Case-marking counts from WALS (*World Atlas of Language Structures*), chapter 98.

## Layout

```
site/   the deployable static page (plain HTML/CSS/JS, relative URLs, no build step)
run/    the build record: brief, research and sources, learning plan, reviews, gate results, logs
```

`run/research/facts.md` lists every factual claim on the page with its source, and `run/log.md` records how the page was made.

## Run locally

```
npx serve site
```

Any static file server works. Fonts load from Google Fonts and fall back to system fonts when offline.

## Deployment

Every push to `main` that touches `site/` runs `.github/workflows/pages.yml`, which deploys `site/` to GitHub Pages (source: GitHub Actions).

## Credits

Built by Claude Opus 5.5 at medium effort with the [didactician](https://github.com/gravitypersists/didactician) skill, which ran the research, planning, build and review pipeline recorded in `run/`.

## License

MIT. See [LICENSE](LICENSE).
