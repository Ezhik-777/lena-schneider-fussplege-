import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME || 'Terminanfragen';

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.error('Airtable credentials are not configured');
      // For now, just log the data and return success
      console.log('Booking data:', data);
      return NextResponse.json(
        { message: 'Anfrage empfangen (Airtable noch nicht konfiguriert)', data },
        { status: 200 }
      );
    }

    // Send to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            Vorname: data.vorname,
            Nachname: data.nachname,
            Telefonnummer: data.telefon,
            'E-Mail': data.email,
            'Gewünschte Leistung': data.leistung,
            Wunschtermin: data.wunschtermin,
            Wunschuhrzeit: data.wunschuhrzeit,
            Nachricht: data.nachricht || '',
            Status: 'Neu',
          },
        }),
      }
    );

    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text();
      console.error('Airtable error:', errorText);
      throw new Error('Failed to save to Airtable');
    }

    const result = await airtableResponse.json();

    return NextResponse.json(
      { message: 'Terminanfrage erfolgreich gesendet', id: result.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { message: 'Fehler beim Senden der Anfrage', error: String(error) },
      { status: 500 }
    );
  }
}
