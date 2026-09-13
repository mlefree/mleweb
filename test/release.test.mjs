import {test} from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";

// "Released sources" means a commit, not a branch that moves under the deploy.
// Naming the commit here as well made it two places to edit for one release,
// and the one that was forgotten failed the run after the push — so this checks
// the shape and the agreement between the two places that do name it.
test("the sandbox companion deploy uses the released Fidj sources", async () => {
  const workflow = await readFile(".github/workflows/generated-app.yml", "utf8");
  for (const input of ["generator_ref", "sdk_ref"]) {
    const declared = workflow.match(
      new RegExp(`${input}:[\\s\\S]*?default: ([0-9a-f]{40})`),
    );
    assert.ok(declared, `${input} must default to a full commit`);
    const used = workflow.match(
      new RegExp(`inputs\\.${input} \\|\\| '([0-9a-f]{40})'`),
    );
    assert.ok(used, `${input} must fall back to a full commit`);
    assert.equal(used[1], declared[1], `${input} names two different commits`);
  }
  assert.match(workflow, /github\.ref == 'refs\/heads\/master'/);
  assert.match(workflow, /ref: gh-pages/);
});
