import { NextResponse } from 'next/server'

import { poofy } from '@/lib/poofy'
import { clearSessionCookie, getToken, sameOrigin, seeOther } from '@/lib/session'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Poofy Events billing, on behalf of the signed-in user. The billing page's
// buttons are plain form posts: checkout and portal answer with a 303 to
// Stripe, and anything that goes wrong comes back to the billing page as
// ?error=<key> (localized in src/content/account.js).

const PRODUCTS = [
  'pro_monthly',
  'pro_yearly',
  'agency_monthly',
  'agency_yearly',
  'event_pass',
  'season_pass',
]

function back(req, params) {
  const query = new URLSearchParams(Object.entries(params).filter(([, v]) => v)).toString()
  return seeOther(`/poofy-events/billing${query ? `?${query}` : ''}`)
}

function errorKey(action, status) {
  if (status === 409 && action === 'portal') return 'nothing_bought'
  if (status === 403) return 'forbidden'
  if (status === 404) return 'not_found'
  if (status === 400 && action === 'team') return 'invalid_team'
  if (status === 503) return 'unavailable'
  return 'generic'
}

export async function POST(req, { params }) {
  const { action } = await params
  if (!sameOrigin(req)) return new NextResponse(null, { status: 403 })

  const token = await getToken()
  if (!token) return seeOther('/login?next=/poofy-events/billing')

  const form = await req.formData().catch(() => new FormData())
  const teamId = String(form.get('teamId') ?? '')
  const team = encodeURIComponent(teamId)

  let call
  if (action === 'checkout') {
    const product = String(form.get('product') ?? '')
    const projectId = String(form.get('projectId') ?? '') || undefined
    if (!PRODUCTS.includes(product) || (product === 'event_pass' && !projectId)) {
      return back(req, { teamId, error: 'generic' })
    }
    call = await poofy(`/api/teams/${team}/billing/checkout`, {
      method: 'POST',
      token,
      body: { product, ...(product === 'event_pass' ? { projectId } : {}) },
    })
    if (call.status === 409) {
      return back(req, { teamId, error: product === 'event_pass' ? 'pass_exists' : 'already_subscribed' })
    }
  } else if (action === 'portal') {
    call = await poofy(`/api/teams/${team}/billing/portal`, { method: 'POST', token })
  } else if (action === 'team') {
    const name = String(form.get('name') ?? '').trim()
    if (!name) return back(req, { error: 'invalid_team' })
    call = await poofy('/api/teams', { method: 'POST', token, body: { name } })
    if (call.status === 201 || call.status === 200) return back(req, { teamId: call.data?.id })
  } else {
    return new NextResponse(null, { status: 404 })
  }

  // Expired token: sign out and sign back in.
  if (call.status === 401) {
    return clearSessionCookie(
      seeOther('/login?next=/poofy-events/billing'),
    )
  }
  if (call.status === 200 && call.data?.url) return NextResponse.redirect(call.data.url, 303)
  return back(req, { teamId, error: errorKey(action, call.status) })
}

// The success page polls this until the webhook has granted the purchase.
export async function GET(req, { params }) {
  const { action } = await params
  if (action !== 'checkout-status') return new NextResponse(null, { status: 404 })
  const token = await getToken()
  if (!token) return NextResponse.json({ status: 'unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const teamId = encodeURIComponent(searchParams.get('teamId') ?? '')
  const sessionId = encodeURIComponent(searchParams.get('sessionId') ?? '')
  const { status, data } = await poofy(`/api/teams/${teamId}/billing/checkout/${sessionId}`, { token })
  if (status !== 200) return NextResponse.json({ status: 'unknown' }, { status })
  return NextResponse.json({ status: data.status, product: data.product })
}
