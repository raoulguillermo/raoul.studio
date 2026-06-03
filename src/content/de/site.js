// Seitenrahmen (Deutsch): Header, Vollbild-Menü, Poster-Rail, Footer.

export const header = {
  wordmark: 'raoul.studio',
  wordmarkHref: '/',
  ctaLabel: 'kontakt',
  ctaHref: '/contact',
}

export const menu = {
  eyebrow: 'Menü — 2026',
  columns: [
    {
      heading: '01 — Studio',
      links: [
        { label: 'Über uns', href: '/about' },
        { label: 'Prozess', href: '/process' },
      ],
    },
    {
      heading: '02 — Arbeit',
      links: [
        { label: 'OutdoorXL', href: '/projects/outdoorxl' },
        { label: 'AboutSpace', href: '/projects/aboutspace' },
        { label: 'Threadly', href: '/projects/threadly' },
        { label: 'Lexpert CRM', href: '/projects/lexpert' },
        { label: 'Alle Arbeiten', href: '/work' },
      ],
    },
    {
      heading: '03 — Kontakt',
      links: [
        { label: 'Kontakt', href: '/contact' },
        { label: 'Instagram', href: 'https://instagram.com/raoulguillermo' },
      ],
    },
  ],
  footerLeft: '© raoul.studio · 2026',
  footerPhone: '+31 10 307 3755',
  footerPhoneHref: 'tel:+31103073755',
  footerRightLabel: 'hello@raoul.studio',
  footerRightHref: '/contact',
}

// Rahmen-Texte, die im JSX statt im Seiteninhalt liegen.
export const ui = {
  back: 'Zurück',
  projectLabel: 'Projekt №',
  form: {
    sendingButton: 'wird gesendet…',
    sendingStatus: 'Wird gesendet…',
    successStatus: '✓ Nachricht gesendet — wir antworten innerhalb von 24 h.',
    errorStatus:
      '✕ Da ist etwas schiefgelaufen. Bitte erneut versuchen oder an hello@raoul.studio schreiben.',
    validationStatus: '✕ Bitte die markierten Felder prüfen und erneut versuchen.',
  },
}

export const posterRail = {
  topText: 'Produkt- & Engineering-Studio',
  middleText: 'Maßgeschneiderte Tools & Plattformen, gebaut zum Liefern.',
  bottomText: 'raoul.studio',
}

export const footer = {
  leftText: '© 2026 raoul.studio',
  rightText: 'EU · Remote',
  phone: '+31 10 307 3755',
  phoneHref: 'tel:+31103073755',
}
