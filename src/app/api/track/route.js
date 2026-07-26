import { NextResponse } from 'next/server'
import crypto from 'node:crypto'

import clientPromise from '@/lib/mongo'
import { detectBot, deviceFromUA } from '@/lib/bots'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// First-party, cookieless visitor analytics.
//
// The browser sends two kinds of beacon to this endpoint:
//   { t: 'pv', sid, pvid, path, ref, lang, sw, sh }   -> a new pageview
//   { t: 'hb', pvid, dur }                            -> a heartbeat updating dwell
//
// We store one document per pageview (keyed by pvid). Heartbeats bump the dwell
// time and "last seen" so the dashboard can measure how long someone actually
// stayed and who is on the site right now.
//
// Privacy: no cookies, no raw IP stored. The visitor's IP is hashed together
// with a secret and the current day, so it can count unique visitors within a
// day but is not reversible and rotates every 24h. This keeps the tracking
// anonymous (Plausible-style) — no consent banner required.

const HASH_SECRET = process.env.PAYLOAD_SECRET || process.env.DATABASE_URL || 'raoul-studio'
const COLLECTION = 'analytics_pageviews'
const MAX_DUR = 60 * 60 // clamp a single pageview's dwell to 1h (guards runaway tabs)

// Create indexes once per process, not on every beacon.
let indexesReady = null
function ensureIndexes(col) {
  if (!indexesReady) {
    indexesReady = Promise.all([
      col.createIndex({ ts: -1 }),
      col.createIndex({ sid: 1 }),
      col.createIndex({ ipHash: 1, day: 1 }),
      col.createIndex({ isBot: 1, ts: -1 }),
      col.createIndex({ last: -1 }),
    ]).catch(() => {})
  }
  return indexesReady
}

function clientIp(req) {
  // nginx forwards the real client IP; X-Real-IP is set explicitly in the vhost.
  const xr = req.headers.get('x-real-ip')
  if (xr) return xr.trim()
  const xff = req.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0].trim()
  return ''
}

function dayKey(d) {
  // UTC YYYY-MM-DD — used both as the daily salt window and for per-day grouping.
  return d.toISOString().slice(0, 10)
}

function hashIp(ip, day) {
  if (!ip) return 'unknown'
  return crypto
    .createHash('sha256')
    .update(`${day}:${ip}:${HASH_SECRET}`)
    .digest('hex')
    .slice(0, 16)
}

// Normalise a referrer to just its host, dropping our own domain (that's an
// internal navigation, not a referral) and anything unparseable ("direct").
function refHost(ref) {
  if (!ref) return 'direct'
  try {
    const h = new URL(ref).hostname.replace(/^www\./, '')
    if (h.endsWith('raoul.studio')) return 'direct'
    return h || 'direct'
  } catch {
    return 'direct'
  }
}

// pvid / sid must be short hex tokens the client generated. Reject anything else
// so a stray request can't write huge or weird keys.
const TOKEN_RE = /^[a-f0-9]{8,40}$/

export async function POST(req) {
  let data
  try {
    data = await req.json()
  } catch {
    return new NextResponse(null, { status: 204 })
  }

  const type = data?.t === 'hb' ? 'hb' : 'pv'
  const pvid = String(data?.pvid ?? '')
  if (!TOKEN_RE.test(pvid)) return new NextResponse(null, { status: 204 })

  const now = new Date()
  const day = dayKey(now)

  try {
    const client = await clientPromise
    const col = client.db().collection(COLLECTION)
    await ensureIndexes(col)

    if (type === 'hb') {
      // Heartbeat: only ever raise the recorded dwell + refresh "last seen".
      let dur = Number(data?.dur)
      if (!Number.isFinite(dur) || dur < 0) dur = 0
      dur = Math.min(Math.round(dur), MAX_DUR)
      await col.updateOne(
        { _id: pvid },
        { $max: { dur }, $set: { last: now } },
      )
      return new NextResponse(null, { status: 204 })
    }

    // Pageview. Trust the server's own view of UA + IP over anything the client
    // claims. isBot is derived here so headless/automation traffic is labelled.
    const sid = String(data?.sid ?? '')
    if (!TOKEN_RE.test(sid)) return new NextResponse(null, { status: 204 })

    const ua = req.headers.get('user-agent') || ''
    const { isBot, botName } = detectBot(ua)
    const ip = clientIp(req)

    let path = String(data?.path ?? '/').slice(0, 300)
    if (!path.startsWith('/')) path = '/' + path
    const lang = String(data?.lang ?? '').slice(0, 12)
    const sw = Number(data?.sw)
    const sh = Number(data?.sh)
    const device =
      Number.isFinite(sw) && sw > 0
        ? sw < 768
          ? 'mobile'
          : sw < 1024
            ? 'tablet'
            : 'desktop'
        : deviceFromUA(ua)

    await col.updateOne(
      { _id: pvid },
      {
        $setOnInsert: {
          sid,
          path,
          ref: refHost(data?.ref),
          ua: ua.slice(0, 400),
          isBot,
          botName,
          ipHash: hashIp(ip, day),
          lang,
          sw: Number.isFinite(sw) ? sw : null,
          sh: Number.isFinite(sh) ? sh : null,
          device,
          ts: now,
          day,
        },
        $max: { dur: 0 },
        $set: { last: now },
      },
      { upsert: true },
    )

    return new NextResponse(null, { status: 204 })
  } catch (err) {
    // Analytics must never break a page. Swallow and 204.
    console.error('[track] failed:', err?.message || err)
    return new NextResponse(null, { status: 204 })
  }
}
