import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Get Google Sheets Web App URL from environment variable
    const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

    if (!googleSheetsUrl || googleSheetsUrl === 'your_google_sheets_web_app_url_here') {
      console.error('Google Sheets URL not configured');
      return NextResponse.json(
        {
          error: 'Please set up Google Sheets first',
          details: 'Follow the instructions in .same/google-sheets-setup.md to configure your Google Sheets URL in .env.local'
        },
        { status: 500 }
      );
    }

    // Send data to Google Sheets
    const response = await fetch(googleSheetsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || '',
        company: company || '',
        message,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
