import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, resolve } from 'node:path';

import { validateCatalog } from './catalog-contract.mjs';
import { createPageContent } from './page-template.mjs';

const input = process.argv[2];
if (!input) throw new Error('Katalogpfad oder HTTPS-URL fehlt.');

const loadCatalog = async () => {
  if (input.startsWith('https://')) {
    const response = await fetch(input, { redirect: 'error' });
    if (!response.ok) throw new Error(`Katalog konnte nicht geladen werden: ${response.status}`);
    return response.json();
  }
  return JSON.parse(await readFile(resolve(input), 'utf8'));
};

const catalog = validateCatalog(await loadCatalog());

await mkdir(resolve('docs/pages'), { recursive: true });
for (const page of catalog.pages) {
  const path = resolve('docs/pages', `${page.id}.md`);
  await writeFile(path, createPageContent(page), { encoding: 'utf8', flag: 'wx' }).catch((error) => {
    if (error?.code !== 'EEXIST') throw error;
  });
}

await writeFile(resolve('catalog.json'), `${JSON.stringify(catalog, null, 2)}\n`, 'utf8');
process.stdout.write(`${catalog.pages.length} Katalogseiten synchronisiert (${basename(input)}).\n`);
