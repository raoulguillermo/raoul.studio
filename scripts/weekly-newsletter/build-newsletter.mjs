#!/usr/bin/env node
// Weekly newsletter builder for raoul.studio.
//
// Compiles the last 7 days of blog posts into a branded HTML email, stores it as
// a DRAFT in MongoDB (newsletters collection), and emails a preview — with an
// "Approve & send" link — to the studio. Subscribers are only emailed when that
// link is clicked (handled by /api/newsletter/send). Designed for a weekly cron.
//
//   node scripts/weekly-newsletter/build-newsletter.mjs          # build + preview
//   node scripts/weekly-newsletter/build-newsletter.mjs --dry     # build, no email

import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { MongoClient } from 'mongodb'

const ROOT = process.cwd()
const SITE_URL = 'https://raoul.studio'
const POSTS_DIR = path.join(ROOT, 'src/content/blog/posts')
const DAYS = 7
const DRY = process.argv.includes('--dry')

const PILLARS = {
  'ai-in-practice': 'AI in Practice',
  'industry-insights': 'Industry Insights',
  commerce: 'Commerce',
}

// --- env: read .env directly (values may contain & which mangles shell sourcing)
function loadEnv() {
  let txt = ''
  try {
    txt = readFileSync(path.join(ROOT, '.env'), 'utf8')
  } catch {}
  for (const line of txt.split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
    if (m && !process.env[m[1]]) {
      process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '')
    }
  }
}
loadEnv()

const DATABASE_URL = process.env.DATABASE_URL
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const FROM = process.env.NEWSLETTER_FROM || 'hello@raoul.studio'
const PREVIEW_TO = process.env.NEWSLETTER_PREVIEW_TO || 'hello@raoul.studio'

const log = (...a) => console.log(`[${new Date().toISOString()}]`, ...a)
const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
// Render **highlight** markers as red bold (email-safe); strip them for plain text.
const inlineHtml = (s) => escapeHtml(s).replace(/\*\*(.+?)\*\*/g, '<strong style="color:#E92316">$1</strong>')
const stripMarks = (s) => String(s).replace(/\*\*(.+?)\*\*/g, '$1')

function readPosts() {
  let files = []
  try {
    files = readdirSync(POSTS_DIR)
  } catch {
    return []
  }
  const posts = []
  for (const f of files) {
    if (!f.endsWith('.json')) continue
    try {
      const data = JSON.parse(readFileSync(path.join(POSTS_DIR, f), 'utf8'))
      if (data?.slug && data?.date && data?.locales?.en) posts.push(data)
    } catch {}
  }
  posts.sort((a, b) => (a.date < b.date ? 1 : -1))
  return posts
}

function recentPosts() {
  const cutoff = new Date()
  cutoff.setUTCHours(0, 0, 0, 0)
  cutoff.setUTCDate(cutoff.getUTCDate() - DAYS)
  return readPosts().filter((p) => new Date(p.date) >= cutoff)
}

function buildHtml(posts, dateLabel) {
  const cards = posts
    .map((p) => {
      const en = p.locales.en
      const pillar = PILLARS[p.pillar] || ''
      const url = `${SITE_URL}/blog/${p.slug}`
      return `
      <tr><td style="padding:24px 0;border-top:1px solid #e3e3e3">
        ${pillar ? `<div style="font:600 11px/1 system-ui,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#E92316;margin-bottom:8px">${escapeHtml(pillar)}</div>` : ''}
        <a href="${url}" style="font:700 21px/1.25 Georgia,serif;color:#0F0F0F;text-decoration:none">${escapeHtml(en.title)}</a>
        <p style="font:400 15px/1.55 system-ui,sans-serif;color:#444;margin:10px 0 12px">${inlineHtml(en.summary)}</p>
        <a href="${url}" style="font:600 13px/1 system-ui,sans-serif;letter-spacing:.04em;text-transform:uppercase;color:#E92316;text-decoration:none">Read &rarr;</a>
      </td></tr>`
    })
    .join('')

  return `<!doctype html><html><body style="margin:0;background:#D6D9DC;padding:24px 0">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#D6D9DC">
   <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:92%;background:#ffffff;padding:36px 36px 28px">
      <tr><td style="padding-bottom:20px">
        <div style="font:800 22px/1 system-ui,sans-serif;letter-spacing:-.02em;color:#0F0F0F">raoul.studio</div>
        <div style="font:600 12px/1 system-ui,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#888;margin-top:8px">The weekly brief &middot; ${escapeHtml(dateLabel)}</div>
      </td></tr>
      <tr><td style="font:400 16px/1.5 system-ui,sans-serif;color:#0F0F0F;padding-bottom:4px">This week&rsquo;s reads on AI, software and digital products &mdash; and what they mean for your business.</td></tr>
      ${cards}
      <tr><td style="padding-top:28px;border-top:1px solid #e3e3e3">
        <p style="font:400 12px/1.6 system-ui,sans-serif;color:#999;margin:0">
          You&rsquo;re receiving this because you subscribed at <a href="${SITE_URL}" style="color:#999">raoul.studio</a>.<br>
          <a href="-unsub-" style="color:#999;text-decoration:underline">Unsubscribe</a> &middot; raoul.studio &middot; Netherlands &middot; &copy; ${new Date().getFullYear()}
        </p>
      </td></tr>
    </table>
   </td></tr>
  </table>
  </body></html>`
}

function buildText(posts, dateLabel) {
  const lines = [
    `raoul.studio — The weekly brief · ${dateLabel}`,
    '',
    'This week’s reads on AI, software and digital products:',
    '',
  ]
  for (const p of posts) {
    const en = p.locales.en
    lines.push(`• ${stripMarks(en.title)}`)
    lines.push(`  ${stripMarks(en.summary)}`)
    lines.push(`  ${SITE_URL}/blog/${p.slug}`)
    lines.push('')
  }
  lines.push('—')
  lines.push('You subscribed at raoul.studio. Unsubscribe: -unsub-')
  return lines.join('\n')
}

async function sendEmail({ to, subject, html, text }) {
  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: { Authorization: `Bearer ${SENDGRID_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: FROM, name: 'raoul.studio' },
      subject,
      content: [
        { type: 'text/plain', value: text },
        { type: 'text/html', value: html },
      ],
    }),
  })
  if (!res.ok) throw new Error(`SendGrid ${res.status}: ${(await res.text().catch(() => '')).slice(0, 300)}`)
}

async function main() {
  if (!DATABASE_URL || (!SENDGRID_API_KEY && !DRY)) {
    log('FATAL: DATABASE_URL or SENDGRID_API_KEY not set')
    process.exit(1)
  }
  const posts = recentPosts()
  if (posts.length === 0) {
    log('No posts in the last 7 days — nothing to send.')
    process.exit(0)
  }

  const today = new Date().toISOString().slice(0, 10)
  const dateLabel = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const topTitle = stripMarks(posts[0].locales.en.title)
  const subject =
    posts.length === 1
      ? `raoul.studio · ${topTitle}`
      : `raoul.studio · ${topTitle} (+${posts.length - 1} more)`

  const html = buildHtml(posts, dateLabel)
  const text = buildText(posts, dateLabel)
  const token = crypto.randomBytes(24).toString('hex')

  const client = await new MongoClient(DATABASE_URL).connect()
  try {
    await client.db().collection('newsletters').updateOne(
      { _id: today },
      {
        $set: {
          _id: today,
          subject,
          html,
          text,
          postSlugs: posts.map((p) => p.slug),
          status: 'draft',
          token,
          createdAt: new Date(),
        },
      },
      { upsert: true },
    )
    const subCount = await client
      .db()
      .collection('newsletter_subscribers')
      .countDocuments({ status: 'subscribed' })

    const approveUrl = `${SITE_URL}/api/newsletter/send?id=${today}&token=${token}`

    if (DRY) {
      log(`[dry] Draft ${today} stored: ${posts.length} posts, ${subCount} subscribers.`)
      log(`[dry] Approve URL: ${approveUrl}`)
      return
    }

    const previewHtml = `<div style="font-family:system-ui,sans-serif;max-width:640px;margin:0 auto;padding:16px">
      <div style="background:#0F0F0F;color:#D6D9DC;padding:18px 20px;border-radius:6px;margin-bottom:18px">
        <div style="font-weight:700;font-size:16px">Newsletter ready — ${posts.length} article(s)</div>
        <div style="font-size:14px;margin:6px 0 14px;opacity:.85">Subscribers: <strong>${subCount}</strong>. Review below, then approve to send.</div>
        <a href="${approveUrl}" style="display:inline-block;background:#E92316;color:#fff;font-weight:700;text-decoration:none;padding:10px 18px;border-radius:4px">Approve &amp; send to ${subCount} subscriber(s)</a>
      </div>
      ${html.replace(/-unsub-/g, `${SITE_URL}/unsubscribe?token=preview`)}
    </div>`

    await sendEmail({
      to: PREVIEW_TO,
      subject: `[Newsletter preview] ${subject}`,
      html: previewHtml,
      text: `Newsletter ready (${posts.length} articles, ${subCount} subscribers).\nApprove & send: ${approveUrl}\n\n${text}`,
    })
    log(`Draft ${today} stored (${posts.length} posts). Preview sent to ${PREVIEW_TO}. Subscribers: ${subCount}.`)
  } finally {
    await client.close()
  }
}

main().catch((e) => {
  log('FATAL', e?.message || e)
  process.exit(1)
})
