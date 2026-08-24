const titles = {
  'account.privacy': 'Datenschutz im Konto',
  'account.privacy-detail': 'Datenschutzanfrage',
  'account.profile': 'Mein Profil',
  'account.rules': 'Kontoregeln',
  'admin.groups.create': 'Gruppe anlegen',
  'admin.groups.detail': 'Gruppe bearbeiten',
  'admin.groups.list': 'Gruppen verwalten',
  'admin.iam.dsr-detail': 'Datenschutzanfrage verwalten',
  'admin.iam.governance-detail': 'IAM-Prüffall verwalten',
  'admin.iam.overview': 'Identitäten und Berechtigungen',
  'admin.instances.create': 'Instanz anlegen',
  'admin.instances.detail': 'Instanz bearbeiten',
  'admin.instances.list': 'Instanzen verwalten',
  'admin.instances.setup': 'Instanz einrichten',
  'admin.legal-texts.create': 'Rechtstext anlegen',
  'admin.legal-texts.detail': 'Rechtstext bearbeiten',
  'admin.legal-texts.list': 'Rechtstexte verwalten',
  'admin.organizations.create': 'Organisation anlegen',
  'admin.organizations.detail': 'Organisation bearbeiten',
  'admin.organizations.list': 'Organisationen verwalten',
  'admin.roles.create': 'Rolle anlegen',
  'admin.roles.detail': 'Rolle bearbeiten',
  'admin.roles.list': 'Rollen verwalten',
  'admin.users.create': 'Benutzer anlegen',
  'admin.users.detail': 'Benutzer bearbeiten',
  'admin.users.list': 'Benutzer verwalten',
  'app.overview': 'App-Konfiguration',
  'categories.overview': 'Kategorien',
  'content.create': 'Inhalt anlegen',
  'content.detail': 'Inhalt bearbeiten',
  'content.list': 'Inhalte verwalten',
  'home.overview': 'Studio-Übersicht',
  'host.media.create': 'Medium hochladen',
  'host.media.detail': 'Medium bearbeiten',
  'host.media.list': 'Medien verwalten',
  'interfaces.overview': 'Schnittstellen',
  'media.overview': 'Medienübersicht',
  'media.usage': 'Medienverwendung',
  'modules.overview': 'Module',
  'monitoring.job-detail': 'Auftragsdetails',
  'monitoring.jobs-list': 'Aufträge überwachen',
  'monitoring.overview': 'Systemüberwachung',
  'waste-management.overview': 'Abfallkalender',
};

const stepsByPageType = {
  create: [
    'Tragen Sie die erforderlichen Angaben ein.',
    'Prüfen Sie optionale Einstellungen und Zuordnungen.',
    'Speichern Sie den neuen Eintrag und kontrollieren Sie die Rückmeldung.',
  ],
  detail: [
    'Prüfen Sie die angezeigten Details und den aktuellen Status.',
    'Ändern Sie die gewünschten Angaben oder Zuordnungen.',
    'Speichern Sie und kontrollieren Sie die Rückmeldung des Studios.',
  ],
  history: [
    'Prüfen Sie die zeitliche Reihenfolge der angezeigten Änderungen.',
    'Öffnen Sie einen Eintrag, wenn Sie weitere Details benötigen.',
    'Vergleichen Sie bei Bedarf frühere und aktuelle Angaben.',
  ],
  list: [
    'Nutzen Sie Suche und Filter, um die gewünschten Einträge zu finden.',
    'Öffnen Sie einen Eintrag oder starten Sie die angebotene Aktion.',
    'Prüfen Sie nach Änderungen die aktualisierte Liste.',
  ],
  overview: [
    'Verschaffen Sie sich einen Überblick über Status und verfügbare Bereiche.',
    'Öffnen Sie den für Ihre Aufgabe passenden Bereich.',
    'Kontrollieren Sie nach Änderungen die Rückmeldung des Studios.',
  ],
  setup: [
    'Arbeiten Sie die angezeigten Einrichtungsschritte in ihrer Reihenfolge ab.',
    'Prüfen Sie Angaben und Verbindungen vor dem Abschluss.',
    'Schließen Sie die Einrichtung ab und kontrollieren Sie den Status.',
  ],
  usage: [
    'Suchen Sie nach dem gewünschten Medium.',
    'Prüfen Sie, in welchen Inhalten und Bereichen es verwendet wird.',
    'Öffnen Sie bei Bedarf den verknüpften Eintrag.',
  ],
};

export const createPageContent = (page) => {
  const title = titles[page.id];
  const steps = stepsByPageType[page.pageType];
  if (!steps) throw new Error(`Vorlage für Seitenart fehlt: ${page.pageType}`);

  if (!title) {
    const draftTitle = `Hilfeseite für ${page.id} (TODO)`;
    return `---\nid: ${page.id}\ntitle: ${draftTitle}\npageType: ${page.pageType}\nstatus: draft\n---\n\n# ${draftTitle}\n\n> Diese Seite wurde nach einem Studio-Merge automatisch angelegt und muss vor dem Merge dieses Dokumentations-PR redaktionell vervollständigt werden.\n\n## Zweck\n\nTODO: Beschreiben Sie, wofür Anwenderinnen und Anwender diese Studio-Seite verwenden.\n\n## Vorgehen\n\n${steps.map((step, index) => `${index + 1}. ${step}`).join('\n')}\n\n## Weiterführende Hilfe\n\nTODO: Ergänzen Sie passende Anleitungen oder fachliche Querverweise.\n`;
  }

  return `---\nid: ${page.id}\ntitle: ${title}\npageType: ${page.pageType}\n---\n\n# ${title}\n\n## Zweck\n\nDiese Hilfeseite unterstützt Sie bei den zentralen Aufgaben auf der Studio-Seite **${title}**.\n\n## Vorgehen\n\n${steps.map((step, index) => `${index + 1}. ${step}`).join('\n')}\n\n## Weiterführende Hilfe\n\nWeitere seitenübergreifende Hinweise finden Sie unter [Anleitungen](/guides/).\n`;
};
