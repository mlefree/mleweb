# mleweb — Mat’s Cloud

The real-world example for `@ofidj/generator-fidj`. This repository keeps its historical `_old/` and `_cdn/` content and generates the maintained TypeScript app into ignored `.gen/mleweb/`. Edit the generator template or `scripts/generate.mjs`; generated files are disposable.

## Local validation

Use Node 22 or later. Keep this repo at `Workspace/mlefree/mleweb` and Fidj at `Workspace/ofidj` (or set `FIDJ_GENERATOR_DIR` and `FIDJ_SDK_DIR`). Build the local SDK with `npm run build-dist` in `fidj-node`, then:

```sh
npm ci
npm run build:local
npm start
```

Open http://localhost:8201. Start the local Fidj API/dashboard with `python3 scripts/local-stack.py start` from the Ofidj workspace. The local API seeds `fidj-local-mleweb` (Mat’s Cloud), owned by Alex, with Maya and Sam as members. Local demo shortcuts appear only with the loopback configuration.

Alex can grant Maya Editor access in the Fidj owner console. On the next protected backend request, Mat’s Cloud observes the new role; role claims cached in a browser are not authoritative. Its notes and privacy choices are scoped independently of Studio Notes, Trail Club and Fidj.

## GitHub Actions

`.github/workflows/generated-app.yml` replaces Travis. On PRs and version/main branch pushes it checks out the coordinated generator and SDK version branches, builds/tests them, generates mleweb from an empty output folder, typechecks/builds it and exercises its protected HTTP routes on Node 22 and 24. It uploads a build artifact and generation manifest. Tests use local HTTP fixtures and synthetic identities; CI does not log into the live Fidj service.

The workflow pins the reviewed commits from generator `v1.0.1` and SDK `v3.6.24`. Manual runs can select alternate refs. Update the pins when testing a new generator/SDK change; switch to published versions for a registry-only release. Local generated output may use `file:` dependencies, but this repository’s package manifest does not.

## Hosting and privacy limits

The previous app2021 build targeted GitHub Pages. This starter includes a Node backend for role enforcement and therefore needs a Node host; the workflow deliberately has no deploy step. The existing site at https://mlefree.com is not changed by local validation.

The historical production app ID remains `fidj-f46d11011e19ef90` for configured non-local builds. Building and testing do not contact it. `.env` stays in ignored generated output and contains only public identifiers/URLs.

Notes are a temporary in-memory example. Exports from the generated app include its notes and Fidj membership data; leaving through the app erases both. A direct departure in Fidj revokes access but does not yet notify the app’s independent note store. Durable storage and the deletion adapter remain a later integration milestone.
