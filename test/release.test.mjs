import {test} from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";

test("the sandbox companion deploy uses the released Fidj sources", async () => {
  const workflow = await readFile(".github/workflows/generated-app.yml", "utf8");
  assert.match(workflow, /299daeb1227ef4a16b77506059f557208669bb80/g);
  assert.match(workflow, /53be6bcffe20eb5c60ade1fb8716f0c0d3da67cd/g);
  assert.match(workflow, /github\.ref == 'refs\/heads\/master'/);
  assert.match(workflow, /ref: gh-pages/);
});
