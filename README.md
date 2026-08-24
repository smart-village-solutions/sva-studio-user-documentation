# SVA-Studio-Anwenderdokumentation

Dieses Repository veröffentlicht die aktuelle Anwenderdokumentation des SVA Studios als
eigenständige statische Website und als Laufzeitquelle für die kontextbezogene Hilfe im Studio.

## Neue Studio-Seiten übernehmen

```bash
npm run catalog:sync -- /pfad/zum/sva-studio/docs/user-documentation/page-catalog.json
```

Der Sync legt ausschließlich fehlende Markdown-Seiten an. Bestehende Seiten und verwaiste
Inhalte werden nicht verändert oder gelöscht.

## Automatischer Sync nach einem Studio-Merge

Ändert ein Merge nach `smart-village-solutions/sva-studio:main` den eingecheckten Seitenkatalog,
sendet das Studio das Ereignis `studio-documentation-catalog-updated` mit dem exakten Merge-SHA.
Der Workflow `Studio-Seitenkatalog synchronisieren` lädt genau diesen Katalog und eröffnet oder
aktualisiert den Branch `automation/sync-studio-page-catalog` mit einem Pull Request.

Für neue IDs entstehen deutschsprachige, mit `status: draft` und `TODO` gekennzeichnete
Markdown-Seiten. Der Workflow überschreibt keine vorhandene Seite und löscht keine verwaisten
Inhalte. Erst der redaktionell geprüfte Merge des Pull Requests veröffentlicht die neue Seite über
GitHub Pages.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

`npm run build` validiert die Katalogabdeckung und erzeugt Website, `manifest.json` sowie die
unter `/markdown/` abrufbaren Quelldokumente gemeinsam.

Für eine abweichende GitHub-Pages-Basis kann beim Build `DOCS_BASE_PATH` gesetzt werden. Ohne
Angabe wird `/sva-studio-user-documentation/` verwendet.
