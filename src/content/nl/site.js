// Site chrome: header, full-page menu, poster rail, footer.

export const header = {
  wordmark: 'raoul.studio',
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
      heading: '02 — Werk',
      links: [
        { label: 'OutdoorXL', href: '/projects/outdoorxl' },
        { label: 'AboutSpace', href: '/projects/aboutspace' },
        { label: 'Threadly', href: '/projects/threadly' },
        { label: 'Lexpert CRM', href: '/projects/lexpert' },
        { label: 'Al het werk', href: '/work' },
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
  footerLeft: '© raoul.studio · 2026',
  footerPhone: '+31 10 307 3755',
  footerPhoneHref: 'tel:+31103073755',
  footerRightLabel: 'hello@raoul.studio',
  footerRightHref: '/contact',
}

// Chrome strings that live in JSX rather than page content.
export const ui = {
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
  bottomText: 'raoul.studio',
}

export const footer = {
  leftText: '© 2026 raoul.studio',
  rightText: 'Rotterdam · EU',
  phone: '+31 10 307 3755',
  phoneHref: 'tel:+31103073755',
}
