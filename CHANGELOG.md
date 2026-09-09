# Changelog

## 3.3.7 — Unreleased

- Configure anonymous entry with `--anonymous true|false`; mleweb explicitly disables it.

- Restore the login-first flow: sign-in or explicit anonymous entry opens Content, with privacy in a separate view.

- Replace Travis with GitHub Actions clean generation/build/tests on Node 22/24.
- Keep the complete app specification in the small `create` command: original Mario HTML, welcome, About/CV/contact links and public Fidj ID.
- Use the generator's static content mode and `build-prod` output (`www` plus `CNAME`) instead of a separately maintained homepage or résumé.
- Remove bespoke generation/verification scripts; test the public CLI output and generated integration.
- Support an explicit local API/app ID override. CI uploads artifacts without publishing mlefree.com.
