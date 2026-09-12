import {test} from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";

test("the sandbox companion deploy uses the released Fidj sources", async () => {
  const workflow = await readFile(".github/workflows/generated-app.yml", "utf8");
  assert.match(workflow, /bc1daff9392d2dba6045c7cb63b73019a8daff0e/g);
  assert.match(workflow, /9f5d3cf479831a2150304da6fd7652b91a30d491/g);
  assert.match(workflow, /github\.ref == 'refs\/heads\/master'/);
  assert.match(workflow, /ref: gh-pages/);
});
