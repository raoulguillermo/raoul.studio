// Site chrome: header, full-page menu, poster rail, footer.

export const header = {
  wordmark: 'studio raoul',
  tagline: 'software innovation, architecture & development',
  wordmarkHref: '/',
  ctaLabel: 'contact',
  ctaHref: '/contact',
}

export const menu = {
  columns: [
    {
      heading: '01 — Studio',
      links: [
        { label: 'Over ons', href: '/about' },
        { label: 'Proces', href: '/process' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      heading: '02 — Projecten',
      links: [
        { label: 'Projecten', href: '/work' },
        { label: 'Diensten', href: '/services' },
        { label: 'Software', href: '/software' },
      ],
    },
    {
      heading: '03 — Connect',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Instagram', href: 'https://instagram.com/raoulguillermo' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Voorwaarden', href: '/terms' },
      ],
    },
  ],
  footerLeft: '© studio.raoul · 2026',
  footerPhone: '+31 (970) 065 - 30693',
  footerPhoneHref: 'tel:+3197006530693',
  footerRightLabel: 'hello@raoul.studio',
  footerRightHref: '/contact',
}

// Chrome strings that live in JSX rather than page content.
export const ui = {
  // Cookie banner — only shown once ad IDs are configured (see Consent.jsx).
  consent: {
    text: 'We gebruiken cookies van Google, Meta en TikTok om te meten welke advertenties werken. Alleen als jij dat goed vindt.',
    accept: 'Akkoord',
    reject: 'Weigeren',
    more: 'Privacybeleid',
    settings: 'Cookie-instellingen',
  },
  a11y: {
    openMenu: 'Menu openen',
    call: 'Bel',
    scrollToBottom: 'Naar beneden scrollen',
    chat: 'Even praten',
    language: 'Taal',
    changeLanguage: 'Taal wijzigen',
    closeLanguageMenu: 'Taalmenu sluiten',
  },
  back: 'Terug',
  projectLabel: 'Project №',
  form: {
    sendingButton: 'versturen…',
    sendingStatus: 'Versturen…',
    successStatus: '✓ Bericht verzonden — je krijgt binnen 24 uur antwoord.',
    errorStatus:
      '✕ Er ging iets mis. Probeer het opnieuw, of mail naar hello@raoul.studio.',
    validationStatus: '✕ Controleer de gemarkeerde velden en probeer opnieuw.',
  },
}

export const posterRail = {
  middleText: 'studio.raoul ontwerpt, bouwt en onderneemt met je mee.',
}

export const footer = {
  leftText: '© 2026 studio.raoul · KvK 24469404',
  rightText: 'Rotterdam · EU',
  phone: '+31 (970) 065 - 30693',
  phoneHref: 'tel:+3197006530693',
}
