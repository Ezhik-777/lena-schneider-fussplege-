import { NextRequest, NextResponse } from 'next/server';

// Helper function to sanitize string inputs
function sanitizeString(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    // Check origin for basic CSRF protection
    const origin = request.headers.get('origin');
    const allowedOrigins = [
      'https://fusspflege-lena-schneider.de',
      'http://localhost:3000',
      'http://localhost:3001'
    ];

    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { message: 'Forbidden - Invalid origin' },
        { status: 403 }
      );
    }

    const data = await request.json();

    // Validate and sanitize inputs
    const sanitizedData = {
      vorname: sanitizeString(data.vorname || ''),
      nachname: sanitizeString(data.nachname || ''),
      telefon: sanitizeString(data.telefon || ''),
      email: sanitizeString(data.email || ''),
      leistung: sanitizeString(data.leistung || ''),
      wunschtermin: data.wunschtermin || '',
      wunschuhrzeit: sanitizeString(data.wunschuhrzeit || ''),
      nachricht: sanitizeString(data.nachricht || ''),
    };

    // Validate required fields
    if (!sanitizedData.vorname || !sanitizedData.nachname || !sanitizedData.email) {
      return NextResponse.json(
        { message: 'Pflichtfelder fehlen: Vorname, Nachname und E-Mail sind erforderlich' },
        { status: 400 }
      );
    }

    // Validate email
    if (!isValidEmail(sanitizedData.email)) {
      return NextResponse.json(
        { message: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // Get Telegram credentials from environment
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram credentials are not configured');
      console.log('Booking data (Telegram not configured):', sanitizedData);
      return NextResponse.json(
        { message: 'Anfrage empfangen (Benachrichtigungen noch nicht konfiguriert)' },
        { status: 200 }
      );
    }

    // Format date
    const formatDate = (dateString: string) => {
      if (!dateString) return 'Nicht angegeben';
      const date = new Date(dateString);
      return date.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    };

    // Create formatted message for Telegram
    const submittedAt = new Date();
    const message = `
🆕 <b>NEUE BUCHUNGSANFRAGE</b>

👤 <b>Kunde:</b>
   ${sanitizedData.vorname} ${sanitizedData.nachname}

📞 <b>Telefon:</b>
   <code>${sanitizedData.telefon}</code>

📧 <b>Email:</b>
   ${sanitizedData.email}

💅 <b>Gewünschte Leistung:</b>
   ${sanitizedData.leistung || 'Nicht angegeben'}

📅 <b>Wunschtermin:</b>
   ${formatDate(sanitizedData.wunschtermin)}

🕐 <b>Wunschuhrzeit:</b>
   ${sanitizedData.wunschuhrzeit || 'Nicht angegeben'}

📝 <b>Nachricht:</b>
   ${sanitizedData.nachricht || 'Keine Nachricht'}

⏰ <b>Eingegangen am:</b>
   ${submittedAt.toLocaleString('de-DE')}

━━━━━━━━━━━━━━━━━━━━━━
🌐 Quelle: Website
`.trim();

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Telegram API error:', errorData);
      throw new Error('Failed to send notification to Telegram');
    }

    return NextResponse.json(
      { message: 'Terminanfrage erfolgreich gesendet' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { message: 'Fehler beim Senden der Anfrage. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.' },
      { status: 500 }
    );
  }
}
