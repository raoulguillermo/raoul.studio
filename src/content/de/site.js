// Seitenrahmen (Deutsch): Header, Vollbild-Menü, Poster-Rail, Footer.

export const header = {
  wordmark: 'studio raoul',
  tagline: 'software innovation, architecture & development',
  wordmarkHref: '/',
  ctaLabel: 'kontakt',
  ctaHref: '/contact',
}

export const menu = {
  columns: [
    {
      heading: '01 — Studio',
      links: [
        { label: 'Über uns', href: '/about' },
        { label: 'Prozess', href: '/process' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      heading: '02 — Arbeit',
      links: [
        { label: 'Arbeiten', href: '/work' },
        { label: 'Leistungen', href: '/services' },
        { label: 'Software', href: '/software' },
      ],
    },
    {
      heading: '03 — Kontakt',
      links: [
        { label: 'Kontakt', href: '/contact' },
        { label: 'Konto', href: '/account' },
        { label: 'Instagram', href: 'https://instagram.com/raoulguillermo' },
        { label: 'Datenschutz', href: '/privacy' },
        { label: 'AGB', href: '/terms' },
      ],
    },
  ],
  footerLeft: '© studio.raoul · 2026',
  footerPhone: '+31 (970) 065 - 30693',
  footerPhoneHref: 'tel:+3197006530693',
  footerRightLabel: 'hello@raoul.studio',
  footerRightHref: '/contact',
}

// Rahmen-Texte, die im JSX statt im Seiteninhalt liegen.
export const ui = {
  consent: {
    text: 'Wir verwenden Cookies von Google, Meta und TikTok, um zu messen, welche Anzeigen funktionieren. Nur wenn Sie einverstanden sind.',
    accept: 'Akzeptieren',
    reject: 'Ablehnen',
    more: 'Datenschutzerklärung',
    settings: 'Cookie-Einstellungen',
  },
  a11y: {
    openMenu: 'Menü öffnen',
    call: 'Anrufen',
    account: 'Konto',
    scrollToBottom: 'Nach unten scrollen',
    chat: 'Sprechen wir',
    language: 'Sprache',
    changeLanguage: 'Sprache wechseln',
    closeLanguageMenu: 'Sprachmenü schließen',
  },
  back: 'Zurück',
  projectLabel: 'Projekt №',
  form: {
    sendingButton: 'wird gesendet…',
    sendingStatus: 'Wird gesendet…',
    successStatus: '✓ Nachricht gesendet — das Studio antwortet innerhalb von 24 h.',
    errorStatus:
      '✕ Da ist etwas schiefgelaufen. Bitte erneut versuchen oder an hello@raoul.studio schreiben.',
    validationStatus: '✕ Bitte die markierten Felder prüfen und erneut versuchen.',
  },
}

export const posterRail = {
  middleText: 'studio.raoul entwirft, baut und steht Ihnen unternehmerisch zur Seite.',
}

export const footer = {
  leftText: '© 2026 studio.raoul · KvK 24469404',
  rightText: 'Rotterdam · EU',
  phone: '+31 (970) 065 - 30693',
  phoneHref: 'tel:+3197006530693',
}
