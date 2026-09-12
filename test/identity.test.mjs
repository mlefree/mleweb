import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
test("the public CLI produces Mat Cloud App as a static website with its original inputs", async () => {
  const root = ".gen/mleweb/www/";
  const html = await readFile(root + "index.html", "utf8");
  assert.match(html, /<title>Mat Cloud App<\/title>/);
  assert.match(html, /Bienvenue dans Mat Cloud/);
  assert.match(html, /<template id="public-content">/);
  assert.match(html, /<div id="app" aria-live="polite"><\/div>/);
  assert.match(html, /Retro_Mario_in_3D_flavor_by_cezkid.gif/);
  assert.match(html, /https:\/\/blog.mlefree.com\/p\/about.html/);
  assert.match(html, /https:\/\/github.com\/ofidj/);
  assert.match(html, /https:\/\/twitter.com\/mat_cloud/);
  assert.match(html, /hello@mlefree.com/);
  assert.equal((await readFile(root + "CNAME", "utf8")).trim(), "mlefree.com");
  const js = await readFile(root + "main.js", "utf8");
  assert.doesNotMatch(js, /fetch\("\/api\//);
  const config = JSON.parse(
    await readFile(".gen/mleweb/app.config.json", "utf8"),
  );
  // A local build is generated against the loopback API and its provider; a
  // released one against the hosted pair. Either way the site signs in through
  // Fidj, so the password is never typed on mlefree.com, and creating an
  // account is offered by Fidj rather than by this site.
  assert.equal(config.appId, process.env.FIDJ_APP_ID || "fidj-d204854971e704b9");
  assert.equal(
    config.oidcIssuer,
    new URL("/oidc", config.apiEndpoint).href,
  );
  assert.equal(config.allowAnonymous, false);
  assert.deepEqual(
    await readFile(root + "brand/logo.gif"),
    await readFile("brand/mario.gif"),
  );
  assert.deepEqual(
    await readFile(root + "brand/favicon.gif"),
    await readFile("brand/mario.gif"),
  );
  assert.match(html, /href="\.\/brand\/favicon\.gif"/);
  assert.match(html, /src="\.\/brand\/logo\.gif"/);
  assert.doesNotMatch(
    js,
    /local-member-only|local-demo-only|Local accounts|Try a local demo/,
  );
  assert.match(js, /hashchange/);
  assert.match(js, /Export my app data/);
  assert.match(js, /Leave this app/);
  assert.ok(!(await readdir(root)).some((name) => name.startsWith(".env")));
});
