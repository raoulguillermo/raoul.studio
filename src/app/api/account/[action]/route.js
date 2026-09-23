import { NextResponse } from 'next/server'

import { poofy } from '@/lib/poofy'
import { clearSessionCookie, sameOrigin, seeOther, setSessionCookie } from '@/lib/session'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Sign-in for the whole site, against poofy-plus-api's accounts. The login
// page's forms post JSON here and get back { ok } or { error: key }, where key
// names a localized message in src/content/account.js. On success the token
// goes into the httpOnly session cookie and never reaches the browser's JS.

const str = (v) => String(v ?? '').trim()

// The API's status codes → our error keys, per action.
const ERRORS = {
  login: { 400: 'invalid_credentials', 401: 'invalid_credentials' },
  register: { 400: 'invalid_details', 409: 'email_taken' },
  forgot: { 400: 'invalid_email' },
  reset: { 429: 'too_many' },
}

function fail(action, status, data) {
  let error = ERRORS[action]?.[status]
  // reset answers 400 for both a short password and a wrong code.
  if (action === 'reset' && status === 400) {
    error = /password/i.test(data?.error ?? '') ? 'password_short' : 'wrong_code'
  }
  if (!error) error = status === 503 ? 'unavailable' : 'generic'
  return NextResponse.json({ error }, { status: status >= 400 ? status : 500 })
}

function signedIn(data) {
  if (!data?.token) return NextResponse.json({ error: 'generic' }, { status: 502 })
  return setSessionCookie(NextResponse.json({ ok: true }), data.token)
}

export async function POST(req, { params }) {
  const { action } = await params
  if (!sameOrigin(req)) return NextResponse.json({ error: 'generic' }, { status: 403 })

  // Plain form post from the sign-out button.
  if (action === 'logout') {
    return clearSessionCookie(seeOther('/'))
  }

  let body
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'generic' }, { status: 400 })
  }
  const email = str(body?.email).toLowerCase()

  if (action === 'login') {
    const { status, data } = await poofy('/api/auth/login', {
      method: 'POST',
      body: { email, password: String(body?.password ?? '') },
    })
    return status === 200 ? signedIn(data) : fail(action, status, data)
  }

  if (action === 'register') {
    const { status, data } = await poofy('/api/auth/register', {
      method: 'POST',
      body: {
        email,
        password: String(body?.password ?? ''),
        firstName: str(body?.firstName),
        lastName: str(body?.lastName),
      },
    })
    return status === 201 || status === 200 ? signedIn(data) : fail(action, status, data)
  }

  if (action === 'forgot') {
    const { status, data } = await poofy('/api/auth/password/forgot', {
      method: 'POST',
      body: { email },
    })
    return status === 202 || status === 200
      ? NextResponse.json({ ok: true })
      : fail(action, status, data)
  }

  if (action === 'reset') {
    const { status, data } = await poofy('/api/auth/password/reset', {
      method: 'POST',
      body: { email, code: str(body?.code), password: String(body?.password ?? '') },
    })
    return status === 200 ? signedIn(data) : fail(action, status, data)
  }

  return NextResponse.json({ error: 'generic' }, { status: 404 })
}
