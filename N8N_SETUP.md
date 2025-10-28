# n8n Webhook Integration Setup
## Fußpflege Lena Schneider - Booking Form

### Übersicht
Das Buchungsformular sendet Daten an einen n8n Webhook zur automatischen Verarbeitung.

---

## 1. n8n Workflow erstellen

### Schritt 1: Webhook-Node einrichten
1. Erstellen Sie einen neuen Workflow in n8n
2. Fügen Sie einen **Webhook** Node hinzu
3. Konfigurieren Sie:
   - **HTTP Method:** POST
   - **Path:** `/booking` (oder Ihr gewünschter Pfad)
   - **Response Mode:** Respond when last node finishes
   - **Response Data:** First Entered

### Schritt 2: Webhook URL kopieren
Nach dem Speichern erhalten Sie eine URL wie:
```
https://your-n8n-instance.com/webhook/booking
```

---

## 2. Umgebungsvariable konfigurieren

Fügen Sie in `.env.local` hinzu:
```bash
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/booking
```

⚠️ **WICHTIG:** Verwenden Sie NICHT `NEXT_PUBLIC_` - die URL soll nicht im Browser sichtbar sein!

---

## 3. Datenformat

Der Webhook empfängt folgende JSON-Daten:

```json
{
  "vorname": "Max",
  "nachname": "Mustermann",
  "telefon": "+49 176 12345678",
  "email": "max@example.com",
  "leistung": "Smart Pediküre",
  "wunschtermin": "2025-11-01",
  "wunschuhrzeit": "10:00 - 11:00",
  "nachricht": "Optionale Nachricht",
  "submittedAt": "2025-10-24T12:00:00.000Z",
  "source": "website"
}
```

### Feldtypen:
- `vorname`: String (erforderlich)
- `nachname`: String (erforderlich)
- `telefon`: String
- `email`: String (erforderlich, validiert)
- `leistung`: String (ausgewählter Service)
- `wunschtermin`: String (ISO Datum)
- `wunschuhrzeit`: String (Zeitfenster)
- `nachricht`: String (optional)
- `submittedAt`: String (ISO DateTime, automatisch)
- `source`: String (immer "website")

---

## 4. Beispiel n8n Workflow

### Empfohlene Nodes:

1. **Webhook** (Trigger)
   - Empfängt die Buchungsdaten

2. **Set** (Optional)
   - Formatiert/transformiert Daten nach Bedarf
   - Beispiel: Datum formatieren, Felder umbenennen

3. **Email** oder **Gmail**
   - Sendet Benachrichtigung an Sie
   - Sendet Bestätigung an Kunden

4. **Google Sheets** / **Database** (Optional)
   - Speichert Buchungen in Tabelle/Datenbank

5. **HTTP Request** (Optional)
   - Sendet an weitere Services (CRM, Kalender, etc.)

6. **Respond to Webhook**
   - Sendet Erfolgs-/Fehler-Antwort zurück

### Beispiel Email-Benachrichtigung:

**An Inhaber:**
```
Betreff: Neue Terminanfrage - {{ $json.leistung }}

Neue Buchungsanfrage:

Name: {{ $json.vorname }} {{ $json.nachname }}
Email: {{ $json.email }}
Telefon: {{ $json.telefon }}

Gewünschte Leistung: {{ $json.leistung }}
Wunschtermin: {{ $json.wunschtermin }}
Wunschuhrzeit: {{ $json.wunschuhrzeit }}

Nachricht:
{{ $json.nachricht }}

---
Eingereicht am: {{ $json.submittedAt }}
```

**An Kunde (Bestätigung):**
```
Betreff: Ihre Terminanfrage bei Fußpflege Lena Schneider

Sehr geehrte(r) {{ $json.vorname }} {{ $json.nachname }},

vielen Dank für Ihre Terminanfrage!

Ihre Anfrage:
- Leistung: {{ $json.leistung }}
- Wunschtermin: {{ $json.wunschtermin }}
- Wunschuhrzeit: {{ $json.wunschuhrzeit }}

Wir werden uns in Kürze bei Ihnen melden, um den Termin zu bestätigen.

Mit freundlichen Grüßen
Ihr Team von Fußpflege Lena Schneider

Tel: +49 176 34237368
Email: info@fusspflege-lena-schneider.de
Web: https://fusspflege-lena-schneider.de
```

---

## 5. Webhook Response

Der Webhook sollte einen der folgenden Status-Codes zurückgeben:

### Erfolg (200):
```json
{
  "success": true,
  "message": "Buchung erfolgreich verarbeitet"
}
```

### Fehler (4xx/5xx):
Jeder Fehler-Status-Code wird als Fehler behandelt.

---

## 6. Sicherheit

### Webhook absichern:

1. **Verwenden Sie HTTPS** (obligatorisch in Produktion)

2. **Header-Authentifizierung** (optional, aber empfohlen):
   ```javascript
   // In n8n Webhook Node:
   // Authentication > Header Auth
   // Header Name: X-Webhook-Token
   // Header Value: your-secret-token-here
   ```

   Dann in `.env.local`:
   ```bash
   N8N_WEBHOOK_TOKEN=your-secret-token-here
   ```

3. **IP Whitelist** in n8n (falls möglich)

4. **Rate Limiting** im Workflow

---

## 7. Testen

### Lokal testen:
1. Verwenden Sie ngrok oder n8n Cloud für öffentliche URL
2. Setzen Sie `N8N_WEBHOOK_URL` in `.env.local`
3. Füllen Sie das Formular aus
4. Prüfen Sie n8n Execution Log

### Beispiel ngrok:
```bash
ngrok http 5678  # n8n Standard-Port
```

Dann verwenden Sie die ngrok URL:
```bash
N8N_WEBHOOK_URL=https://abc123.ngrok.io/webhook/booking
```

---

## 8. Fehlerbehebung

### Webhook empfängt keine Daten:
- [ ] Prüfen Sie n8n Workflow ist aktiviert
- [ ] Prüfen Sie Webhook URL in `.env.local` korrekt
- [ ] Prüfen Sie n8n Execution Log für Fehler
- [ ] Prüfen Sie Browser DevTools Network Tab

### Formular zeigt Fehler:
- [ ] Prüfen Sie n8n antwortet mit Status 200
- [ ] Prüfen Sie n8n Execution Log für Exceptions
- [ ] Prüfen Sie Browser Console für Fehler

### Daten fehlen im Webhook:
- [ ] Prüfen Sie Feldnamen stimmen überein
- [ ] Prüfen Sie JSON-Format im n8n Execution Log

---

## 9. Erweiterte Integrationen

### Google Calendar:
Automatisch Termine eintragen (als "vorläufig")

### Slack/Discord:
Sofortbenachrichtigung bei neuer Buchung

### CRM (z.B. HubSpot):
Kontakt automatisch anlegen/aktualisieren

### Telegram Bot:
Push-Benachrichtigung auf Smartphone

### Automatische Terminbestätigung:
Nach manueller Bestätigung SMS/Email an Kunden

---

## 10. Beispiel Workflow JSON

Siehe: `n8n-workflow-example.json` (erstellen falls benötigt)

---

**Fragen oder Probleme?**
Überprüfen Sie die n8n Dokumentation: https://docs.n8n.io/

**Sicherheitshinweis:**
Geben Sie niemals Ihre Webhook-URL öffentlich weiter!
