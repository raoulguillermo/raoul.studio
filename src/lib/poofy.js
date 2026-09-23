// Server-side client for poofy-plus-api, which holds the accounts, teams and
// Stripe billing. Server-only: the token is passed in from the session cookie.

const BASE = process.env.POOFY_API_URL || 'http://127.0.0.1:3070'

// Returns { status, data }. Network failures come back as status 503 so callers
// handle them like the API's own "unavailable".
export async function poofy(path, { method = 'GET', token, body, next } = {}) {
  try {
    const res = await fetch(`${BASE}${path}`, {
      method,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(body ? { 'Content-Type': 'application/json' } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      ...(next ? { next } : { cache: 'no-store' }),
    })
    const data = await res.json().catch(() => ({}))
    return { status: res.status, data }
  } catch (err) {
    console.error('[poofy] request failed:', path, err?.message || err)
    return { status: 503, data: {} }
  }
}

// Public price list, cached for an hour. Keyed by product.
export async function getPrices() {
  const { status, data } = await poofy('/api/billing/prices', { next: { revalidate: 3600 } })
  if (status !== 200 || !Array.isArray(data.prices)) return null
  return Object.fromEntries(data.prices.map((p) => [p.product, p]))
}
