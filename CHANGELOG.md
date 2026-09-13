# Changelog

## 3.3.13 — Unreleased

- Build on generator 1.2.0: the sign-in entry explains that Mat Cloud App
  accounts are Fidj accounts before offering its button, offers to continue as
  whoever last signed in on this browser, and says what signing out did.

## 3.3.12 — Unreleased

- Build on generator 1.1.0 and SDK 3.6.29: Back now moves between the site's own
  screens instead of leaving it, and a sign-out that the server refuses no
  longer reports a failure over a success.

## 3.3.11 — Unreleased

- Build against SDK 3.6.28, so *Continue with Fidj* reuses an existing Fidj
  session: a person already signed in elsewhere with Fidj comes back signed in
  without typing a password, and an already-approved site needs no second
  approval.

## 3.3.10 — Unreleased

- Sign in through the Fidj provider: the site shows a single *Continue with
  Fidj* button and never receives a Fidj password. Requires the app's callback
  `https://mlefree.com/` to be registered first, or the provider refuses the
  authorization.

## 3.3.7 — Unreleased

- Configure anonymous entry with `--anonymous true|false`; mleweb explicitly disables it.

- Restore the login-first flow: sign-in or explicit anonymous entry opens Content, with privacy in a separate view.

- Replace Travis with GitHub Actions clean generation/build/tests on Node 22/24.
- Keep the complete app specification in the small `create` command: original Mario HTML, welcome, About/CV/contact links and public Fidj ID.
- Use the generator's static content mode and `build-prod` output (`www` plus `CNAME`) instead of a separately maintained homepage or résumé.
- Remove bespoke generation/verification scripts; test the public CLI output and generated integration.
- Support an explicit local API/app ID override. CI uploads artifacts without publishing mlefree.com.
