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
        { label: 'About', href: '/about' },
        { label: 'Process', href: '/process' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      heading: '02 — Work',
      links: [
        { label: 'OutdoorXL', href: '/projects/outdoorxl' },
        { label: 'AboutSpace', href: '/projects/aboutspace' },
        { label: 'Threadly', href: '/projects/threadly' },
        { label: 'Lexpert CRM', href: '/projects/lexpert' },
        { label: 'All work', href: '/work' },
      ],
    },
    {
      heading: '03 — Connect',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Instagram', href: 'https://instagram.com/raoulguillermo' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
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
  back: 'Back',
  projectLabel: 'Project №',
  form: {
    sendingButton: 'sending…',
    sendingStatus: 'Sending…',
    successStatus: '✓ Message sent — the studio replies within 24h.',
    errorStatus:
      '✕ Something went wrong. Try again, or write to hello@raoul.studio.',
    validationStatus: '✕ Check the highlighted field(s) and try again.',
  },
}

export const posterRail = {
  topText: 'Digital product studio',
  middleText: 'The studio designs, builds and grows digital companies.',
  bottomText: 'raoul.studio',
}

export const footer = {
  leftText: '© 2026 raoul.studio',
  rightText: 'Rotterdam · EU',
  phone: '+31 10 307 3755',
  phoneHref: 'tel:+31103073755',
}
