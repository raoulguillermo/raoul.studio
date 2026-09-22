// Site chrome: header, full-page menu, poster rail, footer.

export const header = {
  wordmark: 'studio.raoul',
  tagline: 'digitaal vakwerk',
  wordmarkHref: '/',
  ctaLabel: 'contact',
  ctaHref: '/contact',
}

export const menu = {
  eyebrow: 'Menu — 2026',
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
  a11y: {
    openMenu: 'Menu openen',
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
  topText: 'Digital product studio',
  middleText: 'De studio ontwerpt, bouwt en laat digitale bedrijven groeien.',
  bottomText: 'studio.raoul',
}

export const footer = {
  leftText: '© 2026 studio.raoul',
  rightText: 'Rotterdam · EU',
  phone: '+31 (970) 065 - 30693',
  phoneHref: 'tel:+3197006530693',
}
