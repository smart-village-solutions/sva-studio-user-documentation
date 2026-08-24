import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const catalog = JSON.parse(await readFile(resolve('catalog.json'), 'utf8'));
const markdownDirectory = resolve('docs/public/markdown');
await mkdir(markdownDirectory, { recursive: true });

const pages = {};
for (const page of catalog.pages) {
  const markdownPath = `markdown/${page.id}.md`;
  await copyFile(resolve('docs/pages', `${page.id}.md`), resolve('docs/public', markdownPath));
  pages[page.id] = {
    markdownPath,
    websiteUrl: `pages/${page.id}`,
  };
}
await writeFile(
  resolve('docs/public/manifest.json'),
  `${JSON.stringify({ schemaVersion: 1, pages }, null, 2)}\n`,
  'utf8'
);
