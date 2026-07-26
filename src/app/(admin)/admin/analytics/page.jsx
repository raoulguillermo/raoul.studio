import crypto from 'node:crypto'

import clientPromise from '@/lib/mongo'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const COLLECTION = 'analytics_pageviews'
const TOKEN = process.env.ANALYTICS_TOKEN || ''

const RANGES = {
  '24h': { label: 'Last 24h', ms: 24 * 60 * 60 * 1000, days: 1 },
  '7d': { label: 'Last 7 days', ms: 7 * 24 * 60 * 60 * 1000, days: 7 },
  '30d': { label: 'Last 30 days', ms: 30 * 24 * 60 * 60 * 1000, days: 30 },
  all: { label: 'All time', ms: null, days: 60 },
}

// ---------- helpers ----------
function safeEqual(a, b) {
  const ba = Buffer.from(String(a))
  const bb = Buffer.from(String(b))
  if (ba.length !== bb.length) return false
  return crypto.timingSafeEqual(ba, bb)
}

function fmtNum(n) {
  return Number(n || 0).toLocaleString('en-US')
}

function fmtDur(sec) {
  const s = Math.round(Number(sec) || 0)
  if (s <= 0) return '0s'
  if (s < 60) return `${s}s`
  const m = Math.floor(s / 60)
  const r = s % 60
  if (m < 60) return r ? `${m}m ${r}s` : `${m}m`
  const h = Math.floor(m / 60)
  return `${h}h ${m % 60}m`
}

// ---------- data ----------
async function loadData(range) {
  const client = await clientPromise
  const col = client.db().collection(COLLECTION)

  const cfg = RANGES[range] || RANGES['7d']
  const now = new Date()
  const cutoff = cfg.ms ? new Date(now.getTime() - cfg.ms) : new Date(0)
  const liveCutoff = new Date(now.getTime() - 5 * 60 * 1000)
  const human = { isBot: false, ts: { $gte: cutoff } }

  const [
    summaryArr,
    sessionArr,
    live,
    botsTotal,
    humansTotal,
    botBreakdown,
    topPages,
    topRefs,
    devices,
    langs,
    byDay,
    totalEver,
  ] = await Promise.all([
    col
      .aggregate([
        { $match: human },
        {
          $group: {
            _id: null,
            pv: { $sum: 1 },
            ips: { $addToSet: '$ipHash' },
            sids: { $addToSet: '$sid' },
            durSum: { $sum: { $cond: [{ $gt: ['$dur', 0] }, '$dur', 0] } },
            durCnt: { $sum: { $cond: [{ $gt: ['$dur', 0] }, 1, 0] } },
          },
        },
      ])
      .toArray(),
    col
      .aggregate([
        { $match: human },
        { $group: { _id: '$sid', engaged: { $sum: '$dur' } } },
        { $group: { _id: null, avg: { $avg: '$engaged' }, n: { $sum: 1 } } },
      ])
      .toArray(),
    col.distinct('sid', { isBot: false, last: { $gte: liveCutoff } }),
    col.countDocuments({ isBot: true, ts: { $gte: cutoff } }),
    col.countDocuments({ isBot: false, ts: { $gte: cutoff } }),
    col
      .aggregate([
        { $match: { isBot: true, ts: { $gte: cutoff } } },
        { $group: { _id: '$botName', n: { $sum: 1 } } },
        { $sort: { n: -1 } },
        { $limit: 12 },
      ])
      .toArray(),
    col
      .aggregate([
        { $match: human },
        {
          $group: {
            _id: '$path',
            views: { $sum: 1 },
            visitors: { $addToSet: '$ipHash' },
            durSum: { $sum: { $cond: [{ $gt: ['$dur', 0] }, '$dur', 0] } },
            durCnt: { $sum: { $cond: [{ $gt: ['$dur', 0] }, 1, 0] } },
          },
        },
        { $sort: { views: -1 } },
        { $limit: 15 },
      ])
      .toArray(),
    col
      .aggregate([
        { $match: human },
        { $group: { _id: '$ref', n: { $sum: 1 } } },
        { $sort: { n: -1 } },
        { $limit: 12 },
      ])
      .toArray(),
    col
      .aggregate([
        { $match: human },
        { $group: { _id: '$device', n: { $sum: 1 } } },
        { $sort: { n: -1 } },
      ])
      .toArray(),
    col
      .aggregate([
        { $match: { ...human, lang: { $nin: [null, ''] } } },
        { $group: { _id: { $substrBytes: ['$lang', 0, 2] }, n: { $sum: 1 } } },
        { $sort: { n: -1 } },
        { $limit: 8 },
      ])
      .toArray(),
    col
      .aggregate([
        { $match: human },
        {
          $group: {
            _id: '$day',
            views: { $sum: 1 },
            visitors: { $addToSet: '$ipHash' },
          },
        },
        { $sort: { _id: 1 } },
        { $limit: 60 },
      ])
      .toArray(),
    col.estimatedDocumentCount(),
  ])

  const s = summaryArr[0] || {}
  return {
    range,
    cfg,
    totalEver,
    summary: {
      pageviews: s.pv || 0,
      uniques: (s.ips || []).length,
      sessions: (s.sids || []).length,
      avgOnPage: s.durCnt ? s.durSum / s.durCnt : 0,
      avgSession: sessionArr[0]?.avg || 0,
      perSession: (s.sids || []).length ? (s.pv || 0) / (s.sids || []).length : 0,
    },
    liveNow: live.length,
    bots: { total: botsTotal, humans: humansTotal, breakdown: botBreakdown },
    topPages: topPages.map((p) => ({
      path: p._id,
      views: p.views,
      visitors: (p.visitors || []).length,
      avg: p.durCnt ? p.durSum / p.durCnt : 0,
    })),
    topRefs,
    devices,
    langs,
    byDay: byDay.map((d) => ({ day: d._id, views: d.views, visitors: (d.visitors || []).length })),
  }
}

// ---------- UI atoms ----------
const RED = '#E92316'
const PAPER = '#D6D9DC'
const MUTE = '#8b9095'
const CARD = '#171717'
const LINE = '#262626'

function Stat({ label, value, sub }) {
  return (
    <div style={{ background: CARD, border: `1px solid ${LINE}`, borderRadius: 12, padding: '18px 20px' }}>
      <div style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: MUTE, fontWeight: 600 }}>
        {label}
      </div>
      <div style={{ fontSize: 34, fontWeight: 800, marginTop: 6, lineHeight: 1 }}>{value}</div>
      {sub ? <div style={{ fontSize: 12, color: MUTE, marginTop: 6 }}>{sub}</div> : null}
    </div>
  )
}

function Bars({ title, rows, max, render, accent = RED, empty = 'No data yet' }) {
  const top = max || Math.max(1, ...rows.map((r) => r.n))
  return (
    <div style={{ background: CARD, border: `1px solid ${LINE}`, borderRadius: 12, padding: 20 }}>
      <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: MUTE, fontWeight: 700, marginBottom: 14 }}>
        {title}
      </div>
      {rows.length === 0 ? (
        <div style={{ color: MUTE, fontSize: 14 }}>{empty}</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {rows.map((r, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: `${Math.max(3, (r.n / top) * 100)}%`,
                  background: accent,
                  opacity: 0.16,
                  borderRadius: 6,
                }}
              />
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 12,
                  padding: '7px 10px',
                  fontSize: 14,
                }}
              >
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {render ? render(r) : r._id}
                </span>
                <span style={{ color: PAPER, fontWeight: 700, flexShrink: 0 }}>{fmtNum(r.n)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function DenyPage() {
  return (
    <main style={{ maxWidth: 460, margin: '18vh auto', padding: '0 24px', textAlign: 'center' }}>
      <div style={{ fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: MUTE, fontWeight: 600 }}>
        raoul.studio
      </div>
      <h1 style={{ fontSize: 24, marginTop: 12 }}>Analytics</h1>
      <p style={{ color: MUTE, marginTop: 12, lineHeight: 1.6 }}>
        This dashboard is private. Append your access key to the URL:
        <br />
        <code style={{ color: PAPER }}>/admin/analytics?key=…</code>
      </p>
    </main>
  )
}

// ---------- page ----------
export default async function AnalyticsPage({ searchParams }) {
  const sp = (await searchParams) || {}
  const key = typeof sp.key === 'string' ? sp.key : ''
  const range = RANGES[sp.range] ? sp.range : '7d'

  if (!TOKEN || !safeEqual(key, TOKEN)) return <DenyPage />

  const d = await loadData(range)
  const link = (r) => `/admin/analytics?key=${encodeURIComponent(key)}&range=${r}`

  const dayMax = Math.max(1, ...d.byDay.map((x) => x.views))
  const botsPct =
    d.bots.total + d.bots.humans > 0
      ? Math.round((d.bots.total / (d.bots.total + d.bots.humans)) * 100)
      : 0

  const wrap = { maxWidth: 1120, margin: '0 auto', padding: '32px 22px 80px' }
  const grid = (min) => ({ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`, gap: 14 })

  return (
    <main style={wrap}>
      {/* header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, marginBottom: 8 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: MUTE, fontWeight: 600 }}>
            raoul.studio · visitors
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 800, margin: '6px 0 0' }}>Analytics</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, color: PAPER }}>
            <span style={{ width: 8, height: 8, borderRadius: 99, background: d.liveNow ? '#38d39f' : MUTE, boxShadow: d.liveNow ? '0 0 0 4px rgba(56,211,159,.18)' : 'none' }} />
            {d.liveNow} online now
          </span>
        </div>
      </div>

      {/* range tabs */}
      <div style={{ display: 'flex', gap: 6, margin: '18px 0 22px', flexWrap: 'wrap' }}>
        {Object.entries(RANGES).map(([k, v]) => (
          <a
            key={k}
            href={link(k)}
            style={{
              fontSize: 13,
              fontWeight: 600,
              padding: '7px 14px',
              borderRadius: 999,
              textDecoration: 'none',
              border: `1px solid ${k === range ? RED : LINE}`,
              background: k === range ? RED : 'transparent',
              color: k === range ? '#fff' : MUTE,
            }}
          >
            {v.label}
          </a>
        ))}
      </div>

      {/* top stats */}
      <div style={grid(180)}>
        <Stat label="Pageviews" value={fmtNum(d.summary.pageviews)} sub="human visits (JS ran)" />
        <Stat label="Unique visitors" value={fmtNum(d.summary.uniques)} sub="by anonymised IP / day" />
        <Stat label="Sessions" value={fmtNum(d.summary.sessions)} sub={`${d.summary.perSession.toFixed(1)} pages / session`} />
        <Stat label="Avg. time on page" value={fmtDur(d.summary.avgOnPage)} sub="visible time only" />
        <Stat label="Avg. session" value={fmtDur(d.summary.avgSession)} sub="engaged time per visit" />
      </div>

      {/* traffic over time */}
      <div style={{ ...grid(340), marginTop: 14 }}>
        <div style={{ background: CARD, border: `1px solid ${LINE}`, borderRadius: 12, padding: 20, gridColumn: '1 / -1' }}>
          <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: MUTE, fontWeight: 700, marginBottom: 16 }}>
            Pageviews per day
          </div>
          {d.byDay.length === 0 ? (
            <div style={{ color: MUTE, fontSize: 14 }}>No data yet — this fills in as people visit.</div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 160 }}>
              {d.byDay.map((x) => (
                <div key={x.day} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, minWidth: 0 }}>
                  <div style={{ fontSize: 10, color: MUTE }}>{x.views}</div>
                  <div
                    title={`${x.day}: ${x.views} views, ${x.visitors} visitors`}
                    style={{ width: '100%', maxWidth: 34, height: `${Math.max(2, (x.views / dayMax) * 130)}px`, background: RED, borderRadius: '4px 4px 0 0', opacity: 0.85 }}
                  />
                  <div style={{ fontSize: 9, color: MUTE, transform: 'rotate(-45deg)', whiteSpace: 'nowrap', height: 10 }}>
                    {x.day.slice(5)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* pages + referrers */}
      <div style={{ ...grid(340), marginTop: 14 }}>
        <Bars
          title="Top pages"
          rows={d.topPages.map((p) => ({ ...p, n: p.views }))}
          render={(p) => (
            <span>
              <span style={{ color: PAPER }}>{p.path}</span>
              <span style={{ color: MUTE, marginLeft: 8, fontSize: 12 }}>· {fmtDur(p.avg)} avg</span>
            </span>
          )}
        />
        <Bars
          title="Referrers"
          rows={d.topRefs}
          render={(r) => <span style={{ color: r._id === 'direct' ? MUTE : PAPER }}>{r._id === 'direct' ? 'Direct / none' : r._id}</span>}
        />
      </div>

      {/* devices + languages + bots */}
      <div style={{ ...grid(300), marginTop: 14 }}>
        <Bars title="Devices" rows={d.devices} accent="#5b8def" render={(r) => <span style={{ textTransform: 'capitalize' }}>{r._id || 'unknown'}</span>} />
        <Bars title="Languages" rows={d.langs} accent="#5b8def" render={(r) => <span style={{ textTransform: 'uppercase' }}>{r._id || '—'}</span>} />
        <div style={{ background: CARD, border: `1px solid ${LINE}`, borderRadius: 12, padding: 20 }}>
          <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: MUTE, fontWeight: 700, marginBottom: 14 }}>
            Bots vs humans
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
            <div>
              <div style={{ fontSize: 28, fontWeight: 800 }}>{fmtNum(d.bots.humans)}</div>
              <div style={{ fontSize: 11, color: MUTE, textTransform: 'uppercase', letterSpacing: '.1em' }}>humans</div>
            </div>
            <div>
              <div style={{ fontSize: 28, fontWeight: 800, color: RED }}>{fmtNum(d.bots.total)}</div>
              <div style={{ fontSize: 11, color: MUTE, textTransform: 'uppercase', letterSpacing: '.1em' }}>bots ({botsPct}%)</div>
            </div>
          </div>
          {d.bots.breakdown.length > 0 ? (
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {d.bots.breakdown.map((b) => (
                <div key={b._id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: MUTE }}>
                  <span>{b._id || 'Unknown'}</span>
                  <span style={{ color: PAPER, fontWeight: 600 }}>{fmtNum(b.n)}</span>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ marginTop: 12, fontSize: 12, color: MUTE }}>
              Only JS-running bots (headless, AI crawlers) show here. Non-JS crawlers are counted in the server-log view (GoAccess).
            </div>
          )}
        </div>
      </div>

      {/* footnote */}
      <p style={{ color: MUTE, fontSize: 12, marginTop: 26, lineHeight: 1.7 }}>
        Cookieless & anonymous: no cookies are set and IPs are one-way hashed with a daily-rotating salt, so no personal data is stored (no consent banner needed). “Time on page” counts only seconds the tab was actually visible. Dev/localhost traffic is excluded.
        {d.totalEver ? ` ${fmtNum(d.totalEver)} events recorded all-time.` : ''}
      </p>
    </main>
  )
}
