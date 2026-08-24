import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { promisify } from 'node:util';
import test from 'node:test';

const execFileAsync = promisify(execFile);
const syncScript = resolve(import.meta.dirname, 'sync-studio-catalog.mjs');

const createWorkspace = async () => {
  const directory = await mkdtemp(join(tmpdir(), 'sva-documentation-sync-'));
  await mkdir(join(directory, 'docs', 'pages'), { recursive: true });
  return directory;
};

const writeCatalog = async (directory, pages) => {
  const path = join(directory, 'incoming-catalog.json');
  await writeFile(path, `${JSON.stringify({ schemaVersion: 1, pages }, null, 2)}\n`, 'utf8');
  return path;
};

const runSync = async (directory, catalogPath) =>
  execFileAsync(process.execPath, [syncScript, catalogPath], { cwd: directory });

test('creates a German draft for an unknown valid page id', async (context) => {
  const directory = await createWorkspace();
  context.after(() => rm(directory, { recursive: true, force: true }));
  const catalogPath = await writeCatalog(directory, [
    {
      id: 'projects.reports.list',
      path: '/admin/project-reports',
      pageType: 'list',
      owner: { kind: 'plugin', pluginId: 'projects' },
    },
  ]);

  await runSync(directory, catalogPath);

  const content = await readFile(
    join(directory, 'docs', 'pages', 'projects.reports.list.md'),
    'utf8'
  );
  assert.match(content, /^---\nid: projects\.reports\.list$/mu);
  assert.match(content, /^status: draft$/mu);
  assert.match(content, /automatisch angelegt/u);
  assert.match(content, /TODO: Beschreiben Sie/u);
});

test('preserves existing and orphaned pages across repeated syncs', async (context) => {
  const directory = await createWorkspace();
  context.after(() => rm(directory, { recursive: true, force: true }));
  const existingPath = join(directory, 'docs', 'pages', 'home.overview.md');
  const orphanedPath = join(directory, 'docs', 'pages', 'legacy.overview.md');
  const existingContent = 'redaktionell gepflegter Inhalt\n';
  const orphanedContent = 'weiterhin erhaltener Inhalt\n';
  await writeFile(existingPath, existingContent, 'utf8');
  await writeFile(orphanedPath, orphanedContent, 'utf8');
  const catalogPath = await writeCatalog(directory, [
    {
      id: 'home.overview',
      path: '/',
      pageType: 'overview',
      owner: { kind: 'host' },
    },
  ]);

  await runSync(directory, catalogPath);
  await runSync(directory, catalogPath);

  assert.equal(await readFile(existingPath, 'utf8'), existingContent);
  assert.equal(await readFile(orphanedPath, 'utf8'), orphanedContent);
});

test('rejects page ids that could escape the pages directory', async (context) => {
  const directory = await createWorkspace();
  context.after(() => rm(directory, { recursive: true, force: true }));
  const catalogPath = await writeCatalog(directory, [
    {
      id: '../../outside',
      path: '/outside',
      pageType: 'overview',
      owner: { kind: 'host' },
    },
  ]);

  await assert.rejects(runSync(directory, catalogPath), /Ungültige oder doppelte Seiten-ID/u);
});
