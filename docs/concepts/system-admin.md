# Die Rolle „System-Administrator“

**System-Administrator** ist eine geschützte Studio-Rolle mit weitreichenden Verwaltungsrechten. Sie ist für Personen gedacht, die den Studio-Zugang und die Verwaltung verantworten. Für normale redaktionelle Arbeit sollten passende Rollen und Gruppen vergeben werden.

Diese Rolle hat besondere Schutzregeln:

- Ihre Rechte lassen sich in der **Rollenverwaltung** nicht wie die Rechte einer benutzerdefinierten Rolle bearbeiten.
- Die Zuweisung wird über die geschützte Studio-Rollenzuweisung verwaltet, nicht über die allgemeine Liste der Keycloak-Rollen.
- Ein Account mit aktiver System-Administrator-Rolle kann erst gelöscht werden, nachdem die Rolle entzogen wurde.
- Der letzte aktive System-Administrator kann nicht entfernt oder deaktiviert werden.

System-Administratoren können auch ohne automatisch gewählte Standardorganisation arbeiten. Wenn sie Inhalte im Namen einer Organisation bearbeiten, sollten sie die **Aktive Organisation** bewusst auswählen. Die Rolle ersetzt weder den Arbeitskontext noch die fachliche Prüfung eines Inhalts.

Die [Benutzerverwaltung](/pages/admin.users.list) zeigt die Zuweisungen; [Rechte, Rollen und Gruppen](/concepts/module-und-berechtigungen) erklärt das allgemeine Modell.
