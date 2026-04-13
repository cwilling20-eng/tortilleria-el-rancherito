import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL = 'https://exponentmarketing.app.n8n.cloud/webhook/review-feedback';

const VALID_LOCATIONS = ['gun-barrel-city', 'red-oak'] as const;

interface FeedbackPayload {
  happy?: boolean;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  feedback_message?: string;
  location: string;
  client_id: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: FeedbackPayload = await request.json();

    const isPositive = body.happy === true;

    // Server-side validation
    if (!body.customer_name?.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!body.customer_email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.customer_email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }
    // Message only required for negative feedback
    if (!isPositive && !body.feedback_message?.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }
    if (!VALID_LOCATIONS.includes(body.location as typeof VALID_LOCATIONS[number])) {
      return NextResponse.json({ error: 'Invalid location' }, { status: 400 });
    }

    const webhookPayload = {
      experience: isPositive ? 'positive' : 'negative',
      name: body.customer_name.trim(),
      email: body.customer_email.trim(),
      phone: body.customer_phone?.trim() || '',
      ...(isPositive ? {} : { feedback: body.feedback_message?.trim() || '' }),
      location: body.location,
      client_id: body.client_id,
      timestamp: new Date().toISOString(),
      form_type: isPositive ? 'positive' : 'negative',
    };

    // POST to n8n webhook with one retry on failure
    let webhookResponse = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(webhookPayload),
    });

    if (!webhookResponse.ok) {
      // Retry once
      webhookResponse = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(webhookPayload),
      });
    }

    if (!webhookResponse.ok) {
      console.error('n8n webhook failed:', webhookResponse.status);
      return NextResponse.json({ error: 'Failed to submit feedback' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Feedback API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
