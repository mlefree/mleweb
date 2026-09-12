import {test} from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";

test("the sandbox companion deploy uses the released Fidj sources", async () => {
  const workflow = await readFile(".github/workflows/generated-app.yml", "utf8");
  assert.match(workflow, /8d267783f1e344d6f69906d289fbef35985e2204/g);
  assert.match(workflow, /1ba95d50f800194fce3123c3c33f8e5ef379481e/g);
  assert.match(workflow, /github\.ref == 'refs\/heads\/master'/);
  assert.match(workflow, /ref: gh-pages/);
});
