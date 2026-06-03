// Server-only locale reader. Kept separate from i18n.js so the client bundle
// (LanguageSwitcher) never imports next/headers.

import { cookies } from 'next/headers'

import { LOCALE_COOKIE, DEFAULT_LOCALE, isLocale } from './i18n'

// Read the active locale from the cookie, falling back to English.
export async function getLocale() {
  const store = await cookies()
  const value = store.get(LOCALE_COOKIE)?.value
  return isLocale(value) ? value : DEFAULT_LOCALE
}
