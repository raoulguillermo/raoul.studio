// Server-only locale reader. Kept separate from i18n.js so the client bundle
// (LanguageSwitcher) never imports next/headers.

import { cookies, headers } from 'next/headers'

import { LOCALE_COOKIE, DEFAULT_LOCALE, LOCALES, isLocale } from './i18n'

// Country (ISO 3166-1 alpha-2, from Cloudflare's CF-IPCountry) → the closest
// locale the site has. Countries not listed fall through to the browser's
// Accept-Language and then to English.
const COUNTRY_LOCALE = {
  // Dutch-speaking
  NL: 'nl', BE: 'nl', SR: 'nl', AW: 'nl', CW: 'nl', SX: 'nl', BQ: 'nl',
  // German-speaking
  DE: 'de', AT: 'de', CH: 'de', LI: 'de',
  // French-speaking
  FR: 'fr', LU: 'fr', MC: 'fr', SN: 'fr', CI: 'fr', CM: 'fr', ML: 'fr',
  BF: 'fr', NE: 'fr', TG: 'fr', BJ: 'fr', GA: 'fr', CG: 'fr', CD: 'fr',
  MG: 'fr', HT: 'fr', GN: 'fr', RE: 'fr', GP: 'fr', MQ: 'fr', GF: 'fr',
  // Spanish-speaking, plus Portuguese- and Italian-speaking countries, where
  // Spanish is the closest language the site has
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es',
  EC: 'es', GT: 'es', CU: 'es', BO: 'es', DO: 'es', HN: 'es', PY: 'es',
  SV: 'es', NI: 'es', CR: 'es', PA: 'es', UY: 'es', PR: 'es', GQ: 'es',
  PT: 'es', BR: 'es', AO: 'es', MZ: 'es', IT: 'es', SM: 'es', VA: 'es',
  // Arabic-speaking
  SA: 'ar', AE: 'ar', EG: 'ar', MA: 'ar', DZ: 'ar', TN: 'ar', LY: 'ar',
  JO: 'ar', LB: 'ar', SY: 'ar', IQ: 'ar', KW: 'ar', QA: 'ar', BH: 'ar',
  OM: 'ar', YE: 'ar', SD: 'ar', PS: 'ar', MR: 'ar',
}

// First supported language in the Accept-Language header, by quality.
function fromAcceptLanguage(header) {
  if (!header) return null
  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';')
      const q = params.find((p) => p.trim().startsWith('q='))
      return { base: tag.toLowerCase().split('-')[0], q: q ? parseFloat(q.split('=')[1]) : 1 }
    })
    .sort((a, b) => b.q - a.q)
  return ranked.find((r) => LOCALES.includes(r.base))?.base ?? null
}

// A language in the URL (/nl/…, set by src/proxy.js) wins. Then the visitor's
// own choice (the language switcher's cookie). Without either: their country,
// then their browser language, then English.
export async function getLocale() {
  const h = await headers()
  const fromUrl = h.get('x-locale')
  if (isLocale(fromUrl)) return fromUrl

  const store = await cookies()
  const value = store.get(LOCALE_COOKIE)?.value
  if (isLocale(value)) return value

  const byCountry = COUNTRY_LOCALE[h.get('cf-ipcountry')?.toUpperCase()]
  if (byCountry) return byCountry

  return fromAcceptLanguage(h.get('accept-language')) ?? DEFAULT_LOCALE
}

// Canonical + hreflang for a page, given its unprefixed path ('/voice-ai').
// Opened through a language prefix, the page is canonical at that prefix;
// the plain URL adapts to the visitor, so it is the x-default.
export async function localeAlternates(path) {
  const h = await headers()
  const lang = h.get('x-locale')
  const clean = path === '/' ? '' : path
  const languages = Object.fromEntries(LOCALES.map((l) => [l, `/${l}${clean}`]))
  languages['x-default'] = path
  return {
    canonical: isLocale(lang) ? `/${lang}${clean}` : path,
    languages,
  }
}
