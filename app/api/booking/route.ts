import { NextRequest, NextResponse } from 'next/server';

// Rate limiting: Simple in-memory store (for production, use Redis or similar)
// Updated: 2025-11-09 - Increased limit for testing
const submissionTracker = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS_PER_HOUR = 20; // Temporarily increased for testing

// Helper function to sanitize string inputs (XSS prevention)
function sanitizeString(input: string): string {
  return input
    .trim()
    .slice(0, 500) // Limit length to prevent abuse
    .replace(/[<>\"'`]/g, '') // Remove potentially dangerous characters
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, ''); // Remove event handlers
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Validate phone number (flexible international format)
function isValidPhone(phone: string): boolean {
  // Remove all formatting characters (spaces, dashes, parentheses, slashes)
  const cleanPhone = phone.replace(/[\s\-\/()]/g, '');

  // Check if it contains only numbers and optionally starts with +
  if (!/^\+?[0-9]+$/.test(cleanPhone)) {
    return false;
  }

  // Get just the digits (without +)
  const digits = cleanPhone.replace(/^\+/, '');

  // Check minimum and maximum length
  return digits.length >= 6 && digits.length <= 15;
}

// Rate limiting check
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userSubmissions = submissionTracker.get(ip);

  // Clean up old entries (older than rate limit window)
  if (userSubmissions && now - userSubmissions.timestamp > RATE_LIMIT_WINDOW) {
    submissionTracker.delete(ip);
    return true;
  }

  if (!userSubmissions) {
    submissionTracker.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (userSubmissions.count >= MAX_SUBMISSIONS_PER_HOUR) {
    return false;
  }

  userSubmissions.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
        { status: 429 }
      );
    }

    // Check origin for CSRF protection
    const origin = request.headers.get('origin');
    const allowedOrigins = [
      'https://fusspflege-lena-schneider.de',
      'https://www.fusspflege-lena-schneider.de',
      'http://localhost:3000',
      'http://localhost:3001'
    ];

    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { message: 'Zugriff verweigert' },
        { status: 403 }
      );
    }

    // Check Content-Type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { message: 'Ungültiges Content-Type' },
        { status: 400 }
      );
    }

    const data = await request.json();

    // Honeypot check - if honeypot field is filled, it's a bot
    if (data.website || data.url || data.honeypot) {
      // Silently accept but don't process (anti-bot)
      return NextResponse.json(
        { message: 'Terminanfrage erfolgreich gesendet' },
        { status: 200 }
      );
    }

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

    // Validate required fields (only Vorname and Telefon are required)
    if (!sanitizedData.vorname || !sanitizedData.telefon) {
      return NextResponse.json(
        { message: 'Pflichtfelder fehlen: Vorname und Telefonnummer sind erforderlich' },
        { status: 400 }
      );
    }

    // Validate email if provided
    if (sanitizedData.email && !isValidEmail(sanitizedData.email)) {
      return NextResponse.json(
        { message: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // Validate phone if provided
    if (sanitizedData.telefon && !isValidPhone(sanitizedData.telefon)) {
      return NextResponse.json(
        {
          message: 'Ungültige Telefonnummer',
          error: 'Die Telefonnummer muss 6-15 Ziffern enthalten und darf nur Zahlen, +, Leerzeichen, - und () beinhalten.'
        },
        { status: 400 }
      );
    }

    // Validate date is in the future
    if (sanitizedData.wunschtermin) {
      const selectedDate = new Date(sanitizedData.wunschtermin);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        return NextResponse.json(
          { message: 'Wunschtermin darf nicht in der Vergangenheit liegen' },
          { status: 400 }
        );
      }

      // Limit to 1 year in the future
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

      if (selectedDate > oneYearFromNow) {
        return NextResponse.json(
          { message: 'Wunschtermin darf nicht mehr als 1 Jahr in der Zukunft liegen' },
          { status: 400 }
        );
      }
    }

    // Get Telegram credentials from environment
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram credentials are not configured');
      // Don't log user data for privacy
      return NextResponse.json(
        { message: 'Anfrage empfangen (Benachrichtigungen noch nicht konfiguriert)' },
        { status: 200 }
      );
    }

    // Format date
    const formatDate = (dateString: string) => {
      if (!dateString) return 'Nicht angegeben';
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('de-DE', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        });
      } catch {
        return 'Ungültiges Datum';
      }
    };

    // Create formatted message for Telegram (sanitized data is already safe)
    const submittedAt = new Date();
    const message = `
🆕 <b>NEUE BUCHUNGSANFRAGE</b>

👤 <b>Kunde:</b>
   ${sanitizedData.vorname} ${sanitizedData.nachname}

📞 <b>Telefon:</b>
   <code>${sanitizedData.telefon || 'Nicht angegeben'}</code>

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

🌐 <b>IP:</b> ${ip.split(',')[0].trim()}

━━━━━━━━━━━━━━━━━━━━━━
🌐 Quelle: Website
`.trim();

    // Send to Telegram with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    try {
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
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!telegramResponse.ok) {
        const errorData = await telegramResponse.json();
        console.error('Telegram API error:', JSON.stringify(errorData, null, 2));
        console.error('Telegram response status:', telegramResponse.status);
        throw new Error(`Failed to send notification to Telegram: ${JSON.stringify(errorData)}`);
      }

      const successData = await telegramResponse.json();
      console.log('Telegram message sent successfully:', successData.result?.message_id);
    } catch (error) {
      clearTimeout(timeoutId);
      // Log error but don't expose details to user
      console.error('Telegram send error:', error instanceof Error ? error.message : 'Unknown error');
      throw error;
    }

    return NextResponse.json(
      { message: 'Terminanfrage erfolgreich gesendet' },
      { status: 200 }
    );
  } catch (error) {
    // Generic error message - don't expose internal details
    console.error('Booking error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { message: 'Fehler beim Senden der Anfrage. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.' },
      { status: 500 }
    );
  }
}
