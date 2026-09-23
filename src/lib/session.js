// The signed-in visitor's session: a Poofy+ JWT kept in an httpOnly cookie, so
// the browser's scripts never see it. Accounts live in poofy-plus-api (the
// same accounts as the apps); this site keeps no user database of its own.
// Server-only.

import { cookies } from 'next/headers'

export const SESSION_COOKIE = 'session'

// The API's tokens last 60 days; the cookie lasts as long.
const MAX_AGE = 60 * 60 * 24 * 60

export async function getToken() {
  const store = await cookies()
  return store.get(SESSION_COOKIE)?.value || null
}

// Site-wide (path /), so every app hosted here shares the one sign-in.
export function setSessionCookie(res, token) {
  res.cookies.set(SESSION_COOKIE, token, {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: MAX_AGE,
  })
  return res
}

export function clearSessionCookie(res) {
  res.cookies.set(SESSION_COOKIE, '', { path: '/', maxAge: 0 })
  return res
}

// Where to send someone after signing in. Only same-site paths, so a crafted
// ?next= can't bounce them to another site.
export function safeNext(value, fallback = '/account') {
  const next = String(value ?? '')
  return next.startsWith('/') && !next.startsWith('//') && !next.startsWith('/\\')
    ? next
    : fallback
}

// Posts that sign someone in or spend money must come from this site's own
// pages. Browsers send Origin on every POST; behind Cloudflare the Host header
// is still raoul.studio.
export function sameOrigin(req) {
  const origin = req.headers.get('origin')
  if (!origin) return false
  try {
    const hosts = [req.headers.get('x-forwarded-host'), req.headers.get('host')]
    return hosts.includes(new URL(origin).host)
  } catch {
    return false
  }
}
