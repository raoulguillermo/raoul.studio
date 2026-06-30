import { NextResponse } from 'next/server'

import clientPromise from '@/lib/mongo'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SITE_URL = 'https://raoul.studio'
const FROM = process.env.NEWSLETTER_FROM || process.env.CONTACT_FROM || 'hello@raoul.studio'
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const BATCH = 1000

function page(body, status = 200) {
  return new NextResponse(
    `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Newsletter</title></head><body style="font-family:system-ui,sans-serif;max-width:560px;margin:64px auto;padding:0 20px;color:#0F0F0F;line-height:1.5">${body}</body></html>`,
    { status, headers: { 'content-type': 'text/html; charset=utf-8' } },
  )
}

// Approve + send a drafted newsletter to all current subscribers. The link
// (with the draft's secret token) is sent only to the studio in the preview
// email, so clicking it is the human approval step.
export async function GET(req) {
  const url = new URL(req.url)
  const id = url.searchParams.get('id') || ''
  const token = url.searchParams.get('token') || ''

  if (!id || !token) return page('<h1>Missing parameters.</h1>', 400)
  if (!SENDGRID_API_KEY) return page('<h1>Email is not configured.</h1>', 500)

  const client = await clientPromise
  const drafts = client.db().collection('newsletters')
  const draft = await drafts.findOne({ _id: id })

  if (!draft || draft.token !== token) return page('<h1>Not found.</h1>', 404)
  if (draft.status === 'sent') {
    return page(
      `<h1>Already sent.</h1><p>This newsletter went out to ${draft.recipientCount ?? 0} subscriber(s)${draft.sentAt ? ` on ${new Date(draft.sentAt).toUTCString()}` : ''}.</p>`,
    )
  }

  const subs = await client
    .db()
    .collection('newsletter_subscribers')
    .find({ status: 'subscribed' })
    .project({ email: 1, token: 1 })
    .toArray()

  if (subs.length === 0) {
    await drafts.updateOne(
      { _id: id },
      { $set: { status: 'sent', sentAt: new Date(), recipientCount: 0 } },
    )
    return page('<h1>No subscribers yet.</h1><p>Nothing to send — the draft is closed.</p>')
  }

  let sent = 0
  const errors = []
  for (let i = 0; i < subs.length; i += BATCH) {
    const chunk = subs.slice(i, i + BATCH)
    // One personalization per recipient → separate envelopes (no shared To),
    // each with its own unsubscribe URL substituted into the -unsub- tag.
    const personalizations = chunk.map((s) => ({
      to: [{ email: s.email }],
      substitutions: { '-unsub-': `${SITE_URL}/unsubscribe?token=${s.token}` },
    }))

    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations,
        from: { email: FROM, name: 'raoul.studio' },
        subject: draft.subject,
        content: [
          { type: 'text/plain', value: draft.text || '' },
          { type: 'text/html', value: draft.html },
        ],
        headers: { 'List-Unsubscribe': `<mailto:${FROM}?subject=unsubscribe>` },
        tracking_settings: { subscription_tracking: { enable: false } },
      }),
    })

    if (res.ok) sent += chunk.length
    else errors.push(`${res.status}: ${(await res.text().catch(() => '')).slice(0, 200)}`)
  }

  await drafts.updateOne(
    { _id: id },
    { $set: { status: 'sent', sentAt: new Date(), recipientCount: sent } },
  )

  if (errors.length) {
    return page(
      `<h1>Sent with errors.</h1><p>Delivered to ~${sent} subscriber(s). SendGrid returned:</p><pre style="white-space:pre-wrap;background:#f4f4f4;padding:12px">${errors.join('\n')}</pre>`,
      207,
    )
  }
  return page(
    `<h1 style="color:#E92316">Sent.</h1><p>The newsletter went out to <strong>${sent}</strong> subscriber${sent === 1 ? '' : 's'}.</p>`,
  )
}
