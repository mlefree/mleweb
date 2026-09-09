import {spawnSync} from 'node:child_process';
const commands = [
  ['node', ['scripts/generate.mjs']],
  ['npm', ['install', '--prefix', '.gen/mleweb', '--no-audit', '--no-fund']],
  ['npm', ['test', '--prefix', '.gen/mleweb']],
];
for (const [command, args] of commands) {
  const result = spawnSync(command, args, {stdio: 'inherit', shell: false});
  if (result.status !== 0) process.exit(result.status || 1);
}
