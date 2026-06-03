// Locale configuration for the cookie-based language switcher.
// Switching is UX-only: the URL never changes, English stays canonical/indexed.
//
// Client-safe: this module holds constants only. The server-only cookie reader
// lives in ./locale-server.js so it never gets pulled into the client bundle.

export const LOCALES = ['en', 'de', 'nl', 'es']
export const DEFAULT_LOCALE = 'en'
export const LOCALE_COOKIE = 'lang'

// Full names (dropdown) and short codes (switcher trigger).
export const LOCALE_NAMES = {
  en: 'English',
  de: 'Deutsch',
  nl: 'Nederlands',
  es: 'Español',
}

export const LOCALE_CODES = {
  en: 'EN',
  de: 'DE',
  nl: 'NL',
  es: 'ES',
}

export function isLocale(value) {
  return LOCALES.includes(value)
}
