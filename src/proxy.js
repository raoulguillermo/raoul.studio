import { NextResponse } from 'next/server'

import { LOCALES, LOCALE_COOKIE } from '@/content/i18n'
import { resolveVoiceIndustry } from '@/content/products'

// Language-prefixed URLs: /nl/voice-ai serves the /voice-ai page in Dutch.
// The prefix is stripped by a rewrite, and the locale travels to the server
// components in a request header (read by getLocale). The same language is
// also stored in the cookie, so the site's plain links (/about, /contact…)
// stay in that language after someone lands on a prefixed URL from an ad.
//
// Every request also carries its unprefixed path, so metadata can list the
// page's other language versions (hreflang) without each page knowing its URL.
// Short ad URLs for the Voice AI industry pages: /nl/tandarts serves
// /voice-ai/dentist (the canonical stays the long URL).
function shortcut(path) {
  const m = path.match(/^\/([a-z-]+)\/?$/)
  const industry = m && resolveVoiceIndustry(m[1])
  return industry ? `/voice-ai/${industry}` : path
}

export function proxy(request) {
  const { pathname } = request.nextUrl
  const [, first, ...rest] = pathname.split('/')
  const headers = new Headers(request.headers)
  // The query string too, so a sign-in redirect can come back to the same view.
  headers.set('x-search', request.nextUrl.search)

  if (LOCALES.includes(first)) {
    const path = shortcut('/' + rest.join('/'))
    headers.set('x-locale', first)
    headers.set('x-path', path)
    const url = request.nextUrl.clone()
    url.pathname = path
    const res = NextResponse.rewrite(url, { request: { headers } })
    res.cookies.set(LOCALE_COOKIE, first, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    })
    return res
  }

  headers.delete('x-locale')
  const path = shortcut(pathname)
  headers.set('x-path', path)
  if (path !== pathname) {
    const url = request.nextUrl.clone()
    url.pathname = path
    return NextResponse.rewrite(url, { request: { headers } })
  }
  return NextResponse.next({ request: { headers } })
}

export const config = {
  // Pages only: no API routes, admin, Next internals or files with an extension.
  matcher: ['/((?!api|admin|_next|.*\\..*).*)'],
}
