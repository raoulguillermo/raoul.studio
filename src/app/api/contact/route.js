import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongo'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

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
    // TODO: notify via SendGrid (DNS already configured).
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'server error' }, { status: 500 })
  }
}
