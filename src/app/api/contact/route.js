import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongo'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

// Where the notification lands and who it comes from. The from-address must be
// on the SendGrid-authenticated domain (DNS already configured for raoul.studio).
const TO = process.env.CONTACT_TO || 'hello@raoul.studio'
const FROM = process.env.CONTACT_FROM || 'hello@raoul.studio'
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

async function sendEmail({ name, email, company, message }) {
  const subject = `New contact — ${name}${company ? ` (${company})` : ''}`
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    '',
    message,
  ].filter((l) => l !== null)
  const text = lines.join('\n')
  const html = `<table style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.5">
    <tr><td style="color:#777;padding-right:12px">Name</td><td>${escapeHtml(name)}</td></tr>
    <tr><td style="color:#777;padding-right:12px">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
    ${company ? `<tr><td style="color:#777;padding-right:12px">Company</td><td>${escapeHtml(company)}</td></tr>` : ''}
  </table>
  <p style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</p>`

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: TO }] }],
      from: { email: FROM, name: 'raoul.studio' },
      reply_to: { email, name },
      subject,
      content: [
        { type: 'text/plain', value: text },
        { type: 'text/html', value: html },
      ],
    }),
  })

  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    throw new Error(`SendGrid ${res.status}: ${detail.slice(0, 300)}`)
  }
}

export async function POST(req) {
  let data
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'bad json' }, { status: 400 })
  }

  const name = String(data?.name ?? '').trim()
  const email = String(data?.email ?? '').trim()
  const company = String(data?.company ?? '').trim()
  const message = String(data?.message ?? '').trim()
  // Honeypot — real users leave this empty.
  const website = String(data?.website ?? '').trim()

  if (website) return NextResponse.json({ ok: true })
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'missing fields' }, { status: 422 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'bad email' }, { status: 422 })
  }
  if (message.length > 5000) {
    return NextResponse.json({ ok: false, error: 'too long' }, { status: 422 })
  }

  // Primary action: email the studio via SendGrid.
  if (!SENDGRID_API_KEY) {
    console.error('[contact] SENDGRID_API_KEY is not set — cannot send email.')
    return NextResponse.json({ ok: false, error: 'email not configured' }, { status: 500 })
  }
  try {
    await sendEmail({ name, email, company, message })
  } catch (err) {
    console.error('[contact] email send failed:', err?.message || err)
    return NextResponse.json({ ok: false, error: 'send failed' }, { status: 502 })
  }

  // Best-effort: also log the submission. A DB hiccup must not break the form.
  try {
    const client = await clientPromise
    await client.db().collection('contact_submissions').insertOne({
      name,
      email,
      company,
      message,
      createdAt: new Date(),
      userAgent: req.headers.get('user-agent') || null,
      ip:
        req.headers.get('cf-connecting-ip') ||
        req.headers.get('x-forwarded-for') ||
        null,
    })
  } catch (err) {
    console.error('[contact] mongo log failed (non-fatal):', err?.message || err)
  }

  return NextResponse.json({ ok: true })
}
