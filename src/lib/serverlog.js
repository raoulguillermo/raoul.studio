import { readFile } from 'node:fs/promises'

// Reads the JSON report that GoAccess writes next to its HTML report
// (scripts/analytics/goaccess-report.sh, refreshed by cron every 15 min) and
// normalises it into the shape the /admin dashboard renders. This is the same
// data shown at /_stats/ — every server request, including non-JS bots — just
// presented in the admin UI.

const REPORT_PATH = process.env.GOACCESS_JSON || '/var/www/raoul-stats/report.json'

// GoAccess dates in the visitors panel are "YYYYMMDD".
function isoDay(d) {
  const s = String(d || '')
  return s.length === 8 ? `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}` : s
}

// Map a GoAccess panel's data array into simple rows. `n` pulls the metric we
// bar-chart on (hits by default), keeping visitors alongside.
function rows(panel, { limit = 12, metric = 'hits' } = {}) {
  const data = (panel && panel.data) || []
  return data.slice(0, limit).map((r) => ({
    label: r.data,
    method: r.method || null,
    hits: r.hits?.count ?? 0,
    visitors: r.visitors?.count ?? 0,
    n: (r[metric]?.count ?? r.hits?.count) ?? 0,
  }))
}

export async function loadServerLog() {
  let j
  try {
    j = JSON.parse(await readFile(REPORT_PATH, 'utf8'))
  } catch {
    return { available: false }
  }

  const g = j.general || {}
  if (!g.total_requests) return { available: false, empty: true }

  // GoAccess groups known bots/crawlers under the Browsers panel as "Crawlers".
  const crawlers = ((j.browsers && j.browsers.data) || []).find((r) => r.data === 'Crawlers')

  return {
    available: true,
    general: {
      totalRequests: g.total_requests || 0,
      validRequests: g.valid_requests || 0,
      failedRequests: g.failed_requests || 0,
      uniqueVisitors: g.unique_visitors || 0,
      notFound: g.unique_not_found || 0,
      bandwidth: g.bandwidth || 0,
      crawlerHits: crawlers?.hits?.count || 0,
      startDate: g.start_date || '',
      endDate: g.end_date || '',
      updatedAt: g.date_time || '',
    },
    perDay: rows(j.visitors, { limit: 60 })
      .map((r) => ({ day: isoDay(r.label), hits: r.hits, visitors: r.visitors }))
      .reverse(), // GoAccess lists newest-first; chart wants oldest→newest
    topPages: rows(j.requests, { limit: 15 }),
    notFound: rows(j.not_found, { limit: 10 }),
    browsers: rows(j.browsers, { limit: 10 }),
    os: rows(j.os, { limit: 8 }),
    referrers: rows(j.referring_sites, { limit: 10 }).filter(
      (r) => r.label && !String(r.label).endsWith('raoul.studio'),
    ),
    statusCodes: rows(j.status_codes, { limit: 8 }),
  }
}
