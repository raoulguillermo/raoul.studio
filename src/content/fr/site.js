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
        { label: 'À propos', href: '/about' },
        { label: 'Méthode', href: '/process' },
        { label: 'Journal', href: '/blog' },
      ],
    },
    {
      heading: '02 — Travaux',
      links: [
        { label: 'OutdoorXL', href: '/projects/outdoorxl' },
        { label: 'AboutSpace', href: '/projects/aboutspace' },
        { label: 'Threadly', href: '/projects/threadly' },
        { label: 'Lexpert CRM', href: '/projects/lexpert' },
        { label: 'Tous les travaux', href: '/work' },
      ],
    },
    {
      heading: '03 — Contact',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Instagram', href: 'https://instagram.com/raoulguillermo' },
        { label: 'Confidentialité', href: '/privacy' },
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
  back: 'Retour',
  projectLabel: 'Projet №',
  form: {
    sendingButton: 'envoi…',
    sendingStatus: 'Envoi…',
    successStatus: '✓ Message envoyé — nous répondons sous 24 h.',
    errorStatus:
      '✕ Une erreur est survenue. Réessayez, ou écrivez à hello@raoul.studio.',
    validationStatus: '✕ Vérifiez le(s) champ(s) en surbrillance et réessayez.',
  },
}

export const posterRail = {
  topText: 'Studio produit & ingénierie',
  middleText: 'Outils & plateformes sur mesure, taillés pour être livrés.',
  bottomText: 'raoul.studio',
}

export const footer = {
  leftText: '© 2026 raoul.studio',
  rightText: 'UE · À distance',
  phone: '+31 10 307 3755',
  phoneHref: 'tel:+31103073755',
}
