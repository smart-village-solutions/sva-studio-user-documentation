import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { defineConfig } from 'vitepress';

type Catalog = { pages: Array<{ id: string }> };
const catalog = JSON.parse(
  readFileSync(resolve(import.meta.dirname, '../../catalog.json'), 'utf8')
) as Catalog;

export default defineConfig({
  base: process.env.DOCS_BASE_PATH ?? '/sva-studio-user-documentation/',
  lang: 'de-DE',
  title: 'SVA Studio Anwenderdokumentation',
  description: 'Aktuelle Anwenderdokumentation für das SVA Studio',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Seitenhilfe', link: '/pages/home.overview' },
      { text: 'Anleitungen', link: '/guides/' },
      { text: 'Konzepte', link: '/concepts/' },
      { text: 'FAQ', link: '/faq/' },
    ],
    search: { provider: 'local' },
    sidebar: {
      '/pages/': [
        {
          text: 'Studio-Seiten',
          collapsed: false,
          items: catalog.pages.map((page) => ({ text: page.id, link: `/pages/${page.id}` })),
        },
      ],
    },
  },
});
