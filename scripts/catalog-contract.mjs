const pageIdPattern = /^[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)+$/u;
const pageTypes = new Set(['overview', 'list', 'create', 'detail', 'history', 'setup', 'usage']);

export const validateCatalog = (catalog) => {
  if (catalog?.schemaVersion !== 1 || !Array.isArray(catalog.pages)) {
    throw new Error('Ungültiger Studio-Seitenkatalog.');
  }

  const ids = new Set();
  for (const page of catalog.pages) {
    if (
      !page ||
      typeof page.id !== 'string' ||
      !pageIdPattern.test(page.id) ||
      ids.has(page.id)
    ) {
      throw new Error(`Ungültige oder doppelte Seiten-ID: ${String(page?.id)}`);
    }
    if (typeof page.pageType !== 'string' || !pageTypes.has(page.pageType)) {
      throw new Error(`Ungültige Seitenart für ${page.id}: ${String(page.pageType)}`);
    }
    ids.add(page.id);
  }

  return catalog;
};
