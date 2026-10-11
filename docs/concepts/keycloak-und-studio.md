# Keycloak und SVA Studio

**Keycloak** ist der Anmeldedienst für das SVA Studio. Er prüft Ihre Identität, wenn Sie sich anmelden. Danach kehren Sie ins Studio zurück. Das Studio stellt Ihre Sitzung bereit und entscheidet anhand Ihrer Studio-Rechte, welche Bereiche und Aktionen Sie nutzen können.

## Anmeldung und Kontodaten

Wenn Sie **Passwort ändern** im Kontomenü wählen, führt das Studio Sie zum entsprechenden Vorgang bei Keycloak. Dort nehmen Sie die Änderung vor und gelangen anschließend zurück zu **Mein Konto**. Auch eine Änderung der E-Mail-Adresse läuft, sofern diese Kontoaktion angeboten wird, über den Anmeldedienst. Ihre übrigen persönlichen Angaben bearbeiten Sie unter [Mein Konto](/pages/account.profile) im Studio.

Wird in der **Benutzerverwaltung** ein neues Benutzerkonto angelegt, legt das Studio auch die Identität für die Anmeldung in Keycloak an. Die verwaltende Person kann dabei eine **Einladungs-E-Mail zum Passwort setzen senden** auswählen. Auch das Deaktivieren oder Löschen eines Kontos betrifft die Anmeldung; beachten Sie vor solchen Aktionen die Hinweise der [Benutzerverwaltung](/pages/admin.users.list).

Falls bei einer Gruppenmitgliedschaft nach dem **Keycloak-Subject** gefragt wird: Das ist die eindeutige Kennung des Benutzerkontos im Anmeldedienst, nicht die E-Mail-Adresse. Lassen Sie die Kennung von Ihrer Administration prüfen, wenn sie Ihnen nicht vorliegt.

## Welche Rollen gelten wo?

Studio-Rechte werden über [Rollen und Gruppen](/concepts/module-und-berechtigungen) vergeben. In den **Benutzerdetails** zeigt der Bereich **Berechtigungen**, welche Rechte tatsächlich gelten. Eine erfolgreiche Anmeldung allein erlaubt noch nicht, jeden Studio-Bereich zu öffnen oder jeden Inhalt zu bearbeiten.

Daneben gibt es in der Benutzerverwaltung die Ansicht **Keycloak-Rollen**. Diese Rollen können für andere angebundene Anwendungen gelten. **Eine Zuweisung in dieser Ansicht vergibt keine Studio-Berechtigung.** Benötigt eine Person eine zusätzliche Studio-Aktion, prüfen Sie ihre Studio-Rollen und Gruppen. Die geschützte Rolle [System-Administrator](/concepts/system-admin) wird ebenfalls über die Studio-Rollenzuweisung verwaltet, nicht über die allgemeine Liste der Keycloak-Rollen.

In der **Rollenverwaltung** kann ein **Abgleich mit dem Anmeldedienst** angezeigt werden. Dieser Status betrifft die mit Keycloak abgeglichenen Rollenangaben wie Name und Beschreibung. Die Rechte der Rolle und ihre Studio-Zuweisungen bleiben im Studio; ein erfolgreicher Abgleich ändert sie nicht automatisch.

## Wenn eine Aktion trotzdem scheitert

Prüfen Sie zuerst, ob Sie angemeldet sind und ob die benötigte Studio-Berechtigung gilt. Bei Inhalten kann zusätzlich die [Aktive Organisation](/concepts/accounts-und-organisationen) entscheidend sein. Scheitert nur eine Aktion mit einem Hinweis auf den **SVA Mainserver**, betrifft das möglicherweise dessen eigene Verbindung; mehr dazu unter [Studio und SVA Mainserver](/concepts/studio-und-sva-mainserver). Nennen Sie dem Support die angezeigte Fehlermeldung, aber geben Sie kein Passwort weiter.
