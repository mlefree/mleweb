# mleweb — Mat Cloud App

**mlefree.com is the website used to validate that Fidj generates a complete app from a small command.** This repository is an executable generator example: the `create` script in `package.json` supplies the public app ID, title, welcome text, original Mario GIF HTML, About/CV link, contact links and domain to `create-fidj`.

There is no separately maintained homepage or résumé. Change the CLI inputs for identity/content; fix reusable application behavior in `generator-fidj` or the JS/TypeScript SDK. `.gen/mleweb` is disposable output.

## Generate and build

Use Node 22 or 24. For this unreleased milestone, keep the repositories at `Workspace/mlefree/mleweb`, `Workspace/ofidj/generator-fidj` and `Workspace/ofidj/fidj-node`. Run `npm ci && npm run build-dist` in fidj-node first. Alternate checkouts can be selected through `FIDJ_GENERATOR_DIR` and `FIDJ_SDK_DIR` (the SDK's built `dist` directory).

```sh
npm ci
npm run build
```

`build` invokes `create`: run the public generator CLI, install generated dependencies, then `build-prod`. The generator accepts `--title`, `--welcome`, `--content` and `--domain`; these replace the old positional `yo fidj ... app2021 ...` inputs. `--replace` only replaces output carrying the generator's marker.

The result is `.gen/mleweb/www`, including `CNAME` set to `mlefree.com`. It can be served by a static host. Sign-in and privacy calls go directly to Fidj using the generated client. The bundled Node server is an optional local preview, not a production hosting requirement for this content app.

Production generation retains public app ID `fidj-f46d11011e19ef90` and `https://api.fidj.ovh/v3`. Build/tests do not log into production. This generation workflow does not publish the hosted website.

## Validate locally

```sh
npm run build:local
npm start
```

Open http://localhost:8201. Choose Enter anonymously on the initial login screen to view content without an account. Sign in, inspect current roles, toggle a preference, export app-scoped data or confirm departure. The About me link opens the original CV page; no CV copy is maintained here.

Start the local Fidj API/console with `python3 scripts/local-stack.py start` from the Ofidj workspace. Local builds select `fidj-local-mleweb`, API port 3201 and console port 4200. Alex (`alex@fidj.local` / `local-demo-only`) owns the app; Maya (`maya@fidj.local` / `local-member-only`) is a member. Use the console to change roles, then refresh access here. Studio Notes at port 8200 separately demonstrates role-protected backend actions.

## GitHub CI and acceptance

GitHub Actions replaces Travis and runs `npm ci && npm test` on Node 22/24. It builds the pinned SDK and generator revisions, calls the same public generation command, checks the supplied identity and static artifact, and runs generated HTTP authorization/privacy tests. Uploaded artifacts contain `www` and the optional server build, without `.env`. CI does not deploy mlefree.com.

Review the `create` script, regenerate from scratch, inspect the local app and check the green CI matrix before accepting a generator change. The matching unreleased SDK/generator commits are pinned in the workflow; a registry-only release still requires publishing their coordinated versions.

## Scope

This static app stores its session in this browser and has no separate user-content database. Exports and departure cover the selected app's records held by Fidj. Pending cleanup is shown as pending. The example agreement must be replaced with the app owner's actual terms before release. CLI HTML is trusted developer-authored source, not visitor input.

## Entry flow

The generated content app opens on `/#/signin`. Sign in or choose **Enter anonymously** to open `/#/content`, containing the supplied HTML. Signed-in users can open **My privacy** separately. Sign-out and departure return to the sign-in screen. Anonymous content is public; this navigation flow is not a security boundary for static assets.
