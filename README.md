# SVA-Studio-Anwenderdokumentation

Dieses Repository veröffentlicht die aktuelle Anwenderdokumentation des SVA Studios als
eigenständige statische Website und als Laufzeitquelle für die kontextbezogene Hilfe im Studio.

## Dokumentation finden

| Aufgabe | Einstieg |
| --- | --- |
| Studio benutzen und fachliche Abläufe verstehen | [Anwenderdokumentation](https://smart-village-solutions.github.io/sva-studio-user-documentation/) mit [Anleitungen](https://smart-village-solutions.github.io/sva-studio-user-documentation/guides/), [Konzepten](https://smart-village-solutions.github.io/sva-studio-user-documentation/concepts/) und Hilfe zu einzelnen Studio-Seiten |
| Studio selbst betreiben oder installieren | [Betriebsdokumentation im Studio-Repository](https://github.com/smart-village-solutions/sva-studio/blob/main/docs/operations/README.md) und [Deployment-Übersicht](https://github.com/smart-village-solutions/sva-studio/blob/main/docs/operations/deployment-overview.md) |
| Studio weiterentwickeln oder aktualisieren | [Entwicklungsdokumentation](https://github.com/smart-village-solutions/sva-studio/blob/main/docs/development/README.md) und [Architekturübersicht](https://github.com/smart-village-solutions/sva-studio/blob/main/docs/architecture/README.md) |
| Mitwirken, Lizenz oder Sicherheitsmeldung klären | [Mitwirken](https://github.com/smart-village-solutions/sva-studio/blob/main/CONTRIBUTING.md), [Lizenz des Studio-Repositories](https://github.com/smart-village-solutions/sva-studio/blob/main/LICENSE) und [Sicherheitsrichtlinie](https://github.com/smart-village-solutions/sva-studio/blob/main/SECURITY.md) |

Die Seitenhilfe erklärt die jeweilige Ansicht. Konzepte erläutern Zusammenhänge einmal zentral;
Anleitungen führen durch typische Aufgaben und verlinken auf die passenden Seitenhilfen.

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
Inhalte. Redaktionelle Änderungen, die bereits auf dem offenen Automationsbranch liegen, werden
bei einem weiteren Studio-Merge übernommen. Erst der redaktionell geprüfte Merge des Pull Requests
veröffentlicht die neue Seite über GitHub Pages.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

`npm run build` validiert die Katalogabdeckung und erzeugt Website, `manifest.json` sowie die
unter `/markdown/` abrufbaren Quelldokumente gemeinsam.

Für eine abweichende GitHub-Pages-Basis kann beim Build `DOCS_BASE_PATH` gesetzt werden. Ohne
Angabe wird `/sva-studio-user-documentation/` verwendet.
