import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('../dist/index.html'), 'utf-8');
const serverEntryPath = toAbsolute('../dist/server/entry-server.js');
const { render } = await import(pathToFileURL(serverEntryPath).href);

const { html } = render();
const htmlWithApp = template.replace('<!--app-html-->', html);

fs.writeFileSync(toAbsolute('../dist/index.html'), htmlWithApp);
console.log('Pre-render complete.');
