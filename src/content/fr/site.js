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
        { label: 'À propos', href: '/about' },
        { label: 'Méthode', href: '/process' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      heading: '02 — Travaux',
      links: [
        { label: 'Travaux', href: '/work' },
        { label: 'Services', href: '/services' },
        { label: 'Logiciels', href: '/software' },
      ],
    },
    {
      heading: '03 — Contact',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Compte', href: '/account' },
        { label: 'Instagram', href: 'https://instagram.com/raoulguillermo' },
        { label: 'Confidentialité', href: '/privacy' },
        { label: 'Conditions', href: '/terms' },
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
  consent: {
    text: 'Nous utilisons des cookies de Google, Meta et TikTok pour mesurer quelles publicités fonctionnent. Seulement si vous êtes d’accord.',
    accept: 'Accepter',
    reject: 'Refuser',
    more: 'Politique de confidentialité',
    settings: 'Paramètres des cookies',
  },
  a11y: {
    openMenu: 'Ouvrir le menu',
    call: 'Appeler',
    account: 'Compte',
    scrollToBottom: 'Aller en bas de page',
    chat: 'Discutons',
    language: 'Langue',
    changeLanguage: 'Changer de langue',
    closeLanguageMenu: 'Fermer le menu des langues',
  },
  back: 'Retour',
  projectLabel: 'Projet №',
  form: {
    sendingButton: 'envoi…',
    sendingStatus: 'Envoi…',
    successStatus: '✓ Message envoyé — le studio répond sous 24 h.',
    errorStatus:
      '✕ Une erreur est survenue. Réessayez, ou écrivez à hello@raoul.studio.',
    validationStatus: '✕ Vérifiez le(s) champ(s) en surbrillance et réessayez.',
  },
}

export const posterRail = {
  middleText: 'studio.raoul conçoit, construit et entreprend avec vous.',
}

export const footer = {
  leftText: '© 2026 studio.raoul · KvK 24469404',
  rightText: 'Rotterdam · UE',
  phone: '+31 (970) 065 - 30693',
  phoneHref: 'tel:+3197006530693',
}
