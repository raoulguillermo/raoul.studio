// Locale configuration for the cookie-based language switcher.
// Switching is UX-only: the URL never changes, English stays canonical/indexed.
//
// Client-safe: this module holds constants only. The server-only cookie reader
// lives in ./locale-server.js so it never gets pulled into the client bundle.

export const LOCALES = ['en', 'de', 'nl', 'es', 'fr', 'ar']
export const DEFAULT_LOCALE = 'en'
export const LOCALE_COOKIE = 'lang'

// Right-to-left locales (sets <html dir="rtl">).
export const RTL_LOCALES = ['ar']

export function isRTL(value) {
  return RTL_LOCALES.includes(value)
}

// Full names (dropdown) and short codes (switcher trigger).
export const LOCALE_NAMES = {
  en: 'English',
  de: 'Deutsch',
  nl: 'Nederlands',
  es: 'Español',
  fr: 'Français',
  ar: 'العربية',
}

export const LOCALE_CODES = {
  en: 'EN',
  de: 'DE',
  nl: 'NL',
  es: 'ES',
  fr: 'FR',
  ar: 'AR',
}

export function isLocale(value) {
  return LOCALES.includes(value)
}
