import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {readFile, writeFile, mkdir, rm, access} from 'node:fs/promises';
const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const generator = path.resolve(process.env.FIDJ_GENERATOR_DIR || path.join(root, '../../ofidj/generator-fidj'));
const sdk = path.resolve(process.env.FIDJ_SDK_DIR || path.join(root, '../../ofidj/fidj-node/dist'));
const {scaffold} = createRequire(import.meta.url)(path.join(generator, 'lib/scaffold.cjs'));
const output = path.join(root, '.gen/mleweb');
const marker = path.join(root, '.gen/.fidj-generated');
let exists = false;
try {await access(output); exists = true;} catch {}
if (exists) {
  await access(marker).catch(() => {throw new Error('Existing .gen/mleweb is not marked as generated. Move it aside before regenerating.');});
  await rm(output, {recursive: true});
}
const local = process.env.MLEWEB_LOCAL === 'true';
scaffold(output, {name: 'mleweb', appId: process.env.FIDJ_APP_ID || (local ? 'fidj-local-mleweb' : 'fidj-f46d11011e19ef90'), apiEndpoint: process.env.FIDJ_API_ENDPOINT || (local ? 'http://localhost:3201/v3' : 'https://api.fidj.ovh/v3'), sdkPath: sdk});
await mkdir(path.dirname(marker), {recursive: true});
await writeFile(marker, 'Generated output. Edit generator templates or scripts/generate.mjs, not .gen.\n');
const env = (await readFile(path.join(output, '.env.example'), 'utf8'))
  .replace('APP_TITLE=mleweb', 'APP_TITLE=Mat’s Cloud')
  .replace('PORT=8200', 'PORT=8201')
  .replace('LOCAL_DEMO=false', `LOCAL_DEMO=${local}`)
  .replace('FIDJ_DASHBOARD_URL=https://fidj.ovh', `FIDJ_DASHBOARD_URL=${local ? 'http://localhost:4200' : 'https://fidj.ovh'}`);
await writeFile(path.join(output, '.env.example'), env);
await writeFile(path.join(output, '.env'), env);
await writeFile(path.join(output, 'generation.json'), JSON.stringify({generator: JSON.parse(await readFile(path.join(generator, 'package.json'), 'utf8')).version, sdk: JSON.parse(await readFile(path.join(sdk, 'package.json'), 'utf8')).version, template: 'typescript', project: 'mleweb'}, null, 2) + '\n');
console.log('Generated mleweb in .gen/mleweb');
