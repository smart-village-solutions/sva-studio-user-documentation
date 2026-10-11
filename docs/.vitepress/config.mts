import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { defineConfig } from 'vitepress';

type Catalog = { pages: Array<{ id: string }> };
const catalog = JSON.parse(
  readFileSync(resolve(import.meta.dirname, '../../catalog.json'), 'utf8')
) as Catalog;

const pageTitle = (id: string): string => {
  const content = readFileSync(resolve(import.meta.dirname, `../pages/${id}.md`), 'utf8');
  const title = content.match(/^title: (.+)$/m)?.[1];
  if (!title) throw new Error(`Titel fehlt für Dokumentationsseite ${id}`);
  return title;
};

const pageSection = (id: string): string => {
  if (id === 'home.overview' || id.startsWith('account.')) return 'Start und Konto';
  if (id.startsWith('admin.')) return 'Verwaltung';
  if (
    ['content.', 'news.', 'events.', 'faq.', 'poi.', 'projects.', 'surveys.',
      'generic-items.', 'cockpit-cards.', 'host.media.', 'media.'].some((prefix) =>
      id.startsWith(prefix)
    )
  ) return 'Inhalte und Medien';
  return 'Weitere Bereiche';
};

const pageSections = ['Start und Konto', 'Inhalte und Medien', 'Verwaltung', 'Weitere Bereiche'];

export default defineConfig({
  base: process.env.DOCS_BASE_PATH ?? '/sva-studio-user-documentation/',
  lang: 'de-DE',
  title: 'SVA Studio Anwenderdokumentation',
  description: 'Aktuelle Anwenderdokumentation für das SVA Studio',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'SVA Studio',
    outline: { label: 'Auf dieser Seite' },
    nav: [
      { text: 'Anleitungen', link: '/guides/' },
      { text: 'Konzepte', link: '/concepts/' },
      { text: 'Seitenhilfe', link: '/pages/' },
      { text: 'FAQ', link: '/faq/' },
      { text: 'Community', link: 'https://verwaltungen-havelland.humhub.smart-village.app/s/sva-community/' },
    ],
    search: { provider: 'local' },
    footer: {
      message: 'Eigene Inhalte und Skripte: <a href="https://github.com/smart-village-solutions/sva-studio-user-documentation/blob/main/LICENSE">EUPL-1.2</a>',
    },
    sidebar: {
      '/guides/': [
        { text: 'Einstieg und Inhalte', items: [
          { text: 'Überblick', link: '/guides/' },
          { text: 'Erste Schritte im Studio', link: '/guides/erste-schritte-im-studio' },
          { text: 'Inhalt anlegen und bearbeiten', link: '/guides/inhalt-anlegen-und-bearbeiten' },
          { text: 'Nachricht vorbereiten und veröffentlichen', link: '/guides/nachricht-veroeffentlichen' },
          { text: 'Medien hochladen und verwenden', link: '/guides/medien-hochladen-und-verwenden' },
          { text: 'Veranstaltung mit Ort anlegen', link: '/guides/veranstaltung-mit-ort-anlegen' },
          { text: 'Ort mit Öffnungszeiten anlegen', link: '/guides/ort-mit-oeffnungszeiten-anlegen' },
          { text: 'Kategorien pflegen', link: '/guides/kategorien-pflegen' },
        ] },
        { text: 'Fachbereiche', items: [
          { text: 'Umfrage vorbereiten und Ergebnisse prüfen', link: '/guides/umfrage-vorbereiten-und-ergebnisse-pruefen' },
          { text: 'Abfalltouren planen und veröffentlichen', link: '/guides/abfalltouren-planen' },
        ] },
        { text: 'Konto und Verwaltung', items: [
          { text: 'Benutzer und Zugriff verwalten', link: '/guides/benutzer-und-zugriff-verwalten' },
          { text: 'Eine Anfrage zu den eigenen Kontodaten stellen', link: '/guides/eigene-datenschutzanfrage-bearbeiten' },
          { text: 'Rechtstexte versionieren und freigeben', link: '/guides/rechtstexte-versionieren-und-veroeffentlichen' },
        ] },
      ],
      '/concepts/': [
        { text: 'Inhalte und Medien', items: [
          { text: 'Überblick', link: '/concepts/' },
          { text: 'Inhalte und Veröffentlichung', link: '/concepts/inhalte-und-veroeffentlichung' },
          { text: 'Inhaltstypen und Kategorien', link: '/concepts/inhaltstypen-und-kategorien' },
          { text: 'Medien und ihre Verwendung', link: '/concepts/medien-und-ihre-verwendung' },
        ] },
        { text: 'Zugang und Verwaltung', items: [
          { text: 'Module und Berechtigungen', link: '/concepts/module-und-berechtigungen' },
          { text: 'Konto und Datenschutz', link: '/concepts/konto-und-datenschutz' },
          { text: 'Rechtstexte und Versionen', link: '/concepts/rechtstexte-und-versionen' },
        ] },
      ],
      '/pages/': [
        { text: 'Seitenhilfe', items: [{ text: 'Überblick', link: '/pages/' }] },
        ...pageSections.map((section) => ({
          text: section,
          collapsed: true,
          items: catalog.pages
            .filter((page) => pageSection(page.id) === section)
            .map((page) => ({ text: pageTitle(page.id), link: `/pages/${page.id}` })),
        })),
      ],
    },
  },
});
