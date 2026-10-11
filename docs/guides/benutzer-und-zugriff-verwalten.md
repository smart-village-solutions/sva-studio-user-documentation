# Benutzer und Zugriff verwalten

Mit dieser Anleitung legen Sie ein persönliches Studio-Konto an und prüfen anschließend seinen Zugriff. Sie benötigen die entsprechenden Rechte zur Benutzerverwaltung. Fehlt Ihnen ein Menüpunkt oder eine Aktion, wenden Sie sich an Ihre Studio-Administration.

## Vor dem Anlegen prüfen

1. Öffnen Sie [Benutzerverwaltung](/pages/admin.users.list).
2. Suchen Sie nach der E-Mail-Adresse oder dem Namen. Prüfen Sie auch den Statusfilter: Ein inaktives Konto muss nicht neu angelegt werden.
3. Klären Sie, welche Aufgaben die Person übernehmen soll. Daraus ergeben sich die passenden Gruppen. [Module und Berechtigungen](/concepts/module-und-berechtigungen) erklärt den Unterschied zwischen sichtbaren Bereichen und erlaubten Aktionen.

## Konto anlegen und einladen

1. Wählen Sie **Nutzer anlegen**. Tragen Sie E-Mail-Adresse, Vorname und Nachname ein.
2. Wählen Sie unter **Gruppen-Zuweisung** die benötigten Gruppen. Öffnen Sie **Direkte Rollen optional ergänzen** nur, wenn eine direkte Rollenzuweisung für diesen Fall vorgesehen ist.
3. Lassen Sie **Ist ein technischer Account** für eine Person ausgeschaltet. Entscheiden Sie unter **Einladungs-E-Mail zum Passwort setzen senden**, ob eine Einladung verschickt werden soll, und prüfen Sie **Ziel nach dem Passwortsetzen**.
4. Wählen Sie **Nutzer anlegen**. Das Studio öffnet anschließend die Detailseite des Kontos.
5. Prüfen Sie dort die Rückmeldung zur Einladung. Ist der Versand fehlgeschlagen, prüfen Sie zuerst das angelegte Konto. Sie können die E-Mail auf der Detailseite erneut senden.

Die [Seitenhilfe zum Anlegen](/pages/admin.users.create) erläutert alle Felder. Falls Sie den Wortlaut der Einladungs-E-Mail betreuen, finden Sie ihn unter [Konto-Einladung anpassen](/pages/admin.users.invitation-template).

## Zugriff prüfen oder ändern

1. Öffnen Sie die [Benutzerdetails](/pages/admin.users.detail). Prüfen Sie den Kontostatus.
2. Prüfen Sie unter **Verwaltung** die zugewiesenen Gruppen und direkten Rollen. Passen Sie nur die Zuordnungen an, die für die Aufgabe nötig sind.
3. Falls Organisationen verwendet werden, prüfen Sie auch die Organisationszuordnung und gegebenenfalls den **Default-Kontext**.
4. Öffnen Sie **Berechtigungen**. Dort sehen Sie die wirksamen Rechte und deren Herkunft. Ein Bereich kann freigeschaltet sein, ohne dass die Person jede Aktion darin ausführen darf.
5. Speichern Sie Änderungen und kontrollieren Sie die Rückmeldung. Prüfen Sie danach die Berechtigungen erneut.

## Wenn eine Aktion weiterhin fehlt

Beispiel: Eine Person sieht **Nachrichten**, kann aber keine Nachricht anlegen. Prüfen Sie zuerst in den **Benutzerdetails**, ob ihre Gruppe aktiv und zugewiesen ist. Öffnen Sie dann die Gruppe und prüfen Sie ihre Rollen. In den Rollendetails sehen Sie, welche Berechtigungen die Rolle enthält. Prüfen Sie anschließend im Reiter **Berechtigungen** der Person, ob das benötigte Recht wirksam ist und aus welcher Zuweisung es stammt. Dort werden auch nicht wirksame Quellen angezeigt. Falls die Arbeit für eine Organisation erfolgen soll, prüfen Sie zudem die Mitgliedschaft und die **Aktive Organisation**. Eine direkte Rolle ist nur für einen begründeten Sonderfall sinnvoll; Änderungen an einer Gruppe können mehrere Personen betreffen.

## Zugriff befristet vergeben

Wenn jemand nur vorübergehend eine Aufgabe übernehmen soll, öffnen Sie die [Gruppendetails](/pages/admin.groups.detail). Dort können Sie beim Hinzufügen einer Mitgliedschaft **Gültig ab** und **Gültig bis** angeben. Für die Zuordnung verlangt das Studio das Feld **Keycloak-Subject**. Lassen Sie die passende Kennung durch Ihre Administration ermitteln, wenn sie Ihnen nicht vorliegt; verwenden Sie dafür nicht einfach die E-Mail-Adresse. Prüfen Sie nach dem Speichern den Zeitraum in der Mitgliedschaftsliste und das wirksame Recht in den Benutzerdetails. Nach Ablauf der Mitgliedschaft entfallen Rechte, die ausschließlich aus dieser Gruppe stammen.

Wenn Sie ein Konto deaktivieren oder löschen möchten, prüfen Sie vorher seine Aufgaben und zugeordneten Inhalte. Für das eigene Konto und den letzten aktiven System-Administrator gelten Schutzregeln. Die [Benutzerseite](/pages/admin.users.list) beschreibt außerdem die Grenzen für Sammelaktionen.
