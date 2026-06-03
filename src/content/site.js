// Site chrome: header, full-page menu, poster rail, footer.

export const header = {
  wordmark: 'raoul.studio',
  wordmarkHref: '/',
  ctaLabel: "let's talk",
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
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      heading: '02 — Work',
      links: [
        { label: 'OutdoorXL', href: '/projects/outdoorxl' },
        { label: 'AboutSpace', href: '/projects/aboutspace' },
        { label: 'Threadly', href: '/projects/threadly' },
        { label: 'Lexpert CRM', href: '/projects/lexpert' },
      ],
    },
    {
      heading: '03 — Connect',
      links: [
        { label: "Let's talk", href: '/contact' },
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

export const posterRail = {
  topText: 'Product & engineering studio',
  middleText: 'Custom tools & platforms, hand-tailored to ship.',
  bottomText: 'raoul.studio',
}

export const footer = {
  leftText: '© 2026 raoul.studio',
  rightText: 'EU · Remote',
  phone: '+31 10 307 3755',
  phoneHref: 'tel:+31103073755',
}
