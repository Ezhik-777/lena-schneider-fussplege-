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

    // Get n8n webhook URL from environment
    const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

    if (!N8N_WEBHOOK_URL) {
      console.error('n8n webhook URL is not configured');
      console.log('Booking data (n8n not configured):', sanitizedData);
      return NextResponse.json(
        { message: 'Anfrage empfangen (Webhook noch nicht konfiguriert)' },
        { status: 200 }
      );
    }

    // Send to n8n webhook
    const webhookResponse = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...sanitizedData,
        submittedAt: new Date().toISOString(),
        source: 'website',
      }),
    });

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      console.error('n8n webhook error:', errorText);
      throw new Error('Failed to send to n8n webhook');
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
