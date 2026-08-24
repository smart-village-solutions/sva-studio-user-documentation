import { access, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { validateCatalog } from './catalog-contract.mjs';

const catalog = validateCatalog(JSON.parse(await readFile(resolve('catalog.json'), 'utf8')));
const ids = new Set();
for (const page of catalog.pages ?? []) {
  if (typeof page.id !== 'string' || ids.has(page.id)) {
    throw new Error(`Ungültige oder doppelte Seiten-ID: ${String(page.id)}`);
  }
  ids.add(page.id);
  const path = resolve('docs/pages', `${page.id}.md`);
  await access(path);
  const content = await readFile(path, 'utf8');
  if (!content.startsWith(`---\nid: ${page.id}\n`) || !content.includes('\n# ')) {
    throw new Error(`Pflichtmetadaten oder Titel fehlen: ${page.id}`);
  }
  for (const match of content.matchAll(/!\[[^\]]*\]\(([^)]+)\)/gu)) {
    const target = match[1] ?? '';
    if (/^(?:javascript:|data:|http:)/iu.test(target)) {
      throw new Error(`Nicht erlaubtes Medienziel in ${page.id}: ${target}`);
    }
  }
  for (const match of content.matchAll(/(?<!!)\[[^\]]+\]\(([^)]+)\)/gu)) {
    const target = match[1] ?? '';
    if (!target.startsWith('/')) continue;
    const pathname = target.split(/[?#]/u)[0]?.replace(/^\//u, '') ?? '';
    const targetPath = pathname.endsWith('/')
      ? resolve('docs', pathname, 'index.md')
      : resolve('docs', `${pathname}.md`);
    await access(targetPath).catch(() => {
      throw new Error(`Ungültiger interner Link in ${page.id}: ${target}`);
    });
  }
}
process.stdout.write(`${ids.size} Dokumentationsseiten validiert.\n`);
