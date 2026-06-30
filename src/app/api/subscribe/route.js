import { NextResponse } from 'next/server'
import crypto from 'node:crypto'

import clientPromise from '@/lib/mongo'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
const LOCALES = ['en', 'de', 'nl', 'es', 'fr', 'ar']

// Newsletter signup. Single opt-in: a valid email is subscribed immediately,
// with an unsubscribe token stored for one-click unsubscribe in every send.
export async function POST(req) {
  let data
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'bad json' }, { status: 400 })
  }

  const email = String(data?.email ?? '').trim().toLowerCase()
  const website = String(data?.website ?? '').trim() // honeypot — bots fill this
  let locale = String(data?.locale ?? 'en').trim()
  if (!LOCALES.includes(locale)) locale = 'en'

  if (website) return NextResponse.json({ ok: true })
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ ok: false, error: 'bad email' }, { status: 422 })
  }

  try {
    const client = await clientPromise
    const col = client.db().collection('newsletter_subscribers')
    await col.createIndex({ email: 1 }, { unique: true }).catch(() => {})
    await col.createIndex({ token: 1 }).catch(() => {})

    const now = new Date()
    await col.updateOne(
      { email },
      {
        $set: { email, locale, status: 'subscribed', updatedAt: now },
        $setOnInsert: {
          createdAt: now,
          token: crypto.randomBytes(24).toString('hex'),
          source: 'site',
        },
        $unset: { unsubscribedAt: '' },
      },
      { upsert: true },
    )
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[subscribe] failed:', err?.message || err)
    return NextResponse.json({ ok: false, error: 'storage failed' }, { status: 500 })
  }
}
