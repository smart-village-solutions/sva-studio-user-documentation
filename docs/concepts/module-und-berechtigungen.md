# Rechte, Rollen und Gruppen

Im Studio beschreibt ein **Recht** (auch *Berechtigung* oder *Permission*), welche Aktion eine Person ausführen darf: zum Beispiel Inhalte lesen, anlegen oder bearbeiten. Ein **Modul** stellt einen Fachbereich bereit, etwa Nachrichten. Ein verfügbares Modul allein gibt noch kein Recht, alle seine Inhalte zu ändern.

## Wie kommen Rechte bei einer Person an?

Eine **Rolle** bündelt Rechte. Eine Rolle kann einem Benutzerkonto direkt zugewiesen sein oder über eine **Gruppe** gelten. Gruppen bündeln Rollen und Mitglieder: Wer Mitglied einer aktiven Gruppe ist, kann die Rechte ihrer Rollen erhalten. In der **Benutzerverwaltung** zeigt der Bereich **Berechtigungen**, welche Rechte derzeit gelten und aus welcher Rolle oder Gruppe sie stammen. Auch nicht wirksame Zuweisungen lassen sich dort prüfen.

Beispiel: Sie sehen die Nachrichtenliste, aber die Schaltfläche zum Anlegen fehlt. Möglicherweise fehlt das Recht zum Anlegen. Eine Person mit Verwaltungsrechten kann in den [Benutzerdetails](/pages/admin.users.detail) die gültigen Rechte prüfen, dann die [Gruppen](/pages/admin.groups.list) und [Rollen](/pages/admin.roles.list) ansehen. Fehlt der ganze Bereich, kann das Modul nicht verfügbar sein.

Die Mitgliedschaft in einer [Organisation](/concepts/accounts-und-organisationen) ersetzt kein Recht. Bei manchen Rechten entscheidet zusätzlich der [Scope](/concepts/scopes-von-berechtigungen), auf welche Inhalte das Recht wirkt.

In den Benutzerdetails können auch **Keycloak-Rollen** erscheinen. Diese gelten für angebundene Anwendungen und vergeben keine Studio-Rechte. Den Unterschied erklärt [Keycloak und SVA Studio](/concepts/keycloak-und-studio).

Änderungen an einer Gruppe können mehrere Mitglieder zugleich betreffen. Wenn Sie eine Aufgabe nicht ausführen können, nennen Sie Ihrer Administration den Bereich, die gewünschte Aktion und möglichst den betroffenen Inhalt.

## Weiterführende Hilfe

- [Anleitung: Benutzer und Zugriff verwalten](/guides/benutzer-und-zugriff-verwalten)
- [Rollenverwaltung](/pages/admin.roles.list)
- [Gruppenverwaltung](/pages/admin.groups.list)
