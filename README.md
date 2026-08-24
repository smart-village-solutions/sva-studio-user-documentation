# SVA-Studio-Anwenderdokumentation

Dieses Repository veröffentlicht die aktuelle Anwenderdokumentation des SVA Studios als
eigenständige statische Website und als Laufzeitquelle für die kontextbezogene Hilfe im Studio.

## Neue Studio-Seiten übernehmen

```bash
npm run catalog:sync -- /pfad/zum/sva-studio/docs/user-documentation/page-catalog.json
```

Der Sync legt ausschließlich fehlende Markdown-Seiten an. Bestehende Seiten und verwaiste
Inhalte werden nicht verändert oder gelöscht.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

`npm run build` validiert die Katalogabdeckung und erzeugt Website, `manifest.json` sowie die
unter `/markdown/` abrufbaren Quelldokumente gemeinsam.

Für eine abweichende GitHub-Pages-Basis kann beim Build `DOCS_BASE_PATH` gesetzt werden. Ohne
Angabe wird `/sva-studio-user-documentation/` verwendet.
