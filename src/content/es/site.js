// Estructura del sitio: cabecera, menú a página completa, riel de pósteres, pie.

export const header = {
  wordmark: 'raoul.studio',
  wordmarkHref: '/',
  ctaLabel: 'contacto',
  ctaHref: '/contact',
}

export const menu = {
  eyebrow: 'Menú — 2026',
  columns: [
    {
      heading: '01 — Estudio',
      links: [
        { label: 'Nosotros', href: '/about' },
        { label: 'Proceso', href: '/process' },
      ],
    },
    {
      heading: '02 — Trabajo',
      links: [
        { label: 'OutdoorXL', href: '/projects/outdoorxl' },
        { label: 'AboutSpace', href: '/projects/aboutspace' },
        { label: 'Threadly', href: '/projects/threadly' },
        { label: 'Lexpert CRM', href: '/projects/lexpert' },
        { label: 'Todo el trabajo', href: '/work' },
      ],
    },
    {
      heading: '03 — Conecta',
      links: [
        { label: 'Contacto', href: '/contact' },
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

// Textos de estructura que viven en el JSX y no en el contenido de página.
export const ui = {
  back: 'Volver',
  projectLabel: 'Proyecto №',
  form: {
    sendingButton: 'enviando…',
    sendingStatus: 'Enviando…',
    successStatus: '✓ Mensaje enviado — responderemos en menos de 24 h.',
    errorStatus:
      '✕ Algo salió mal. Inténtalo de nuevo o escribe a hello@raoul.studio.',
    validationStatus: '✕ Revisa el campo o los campos marcados e inténtalo de nuevo.',
  },
}

export const posterRail = {
  topText: 'Estudio de producto e ingeniería',
  middleText: 'Herramientas y plataformas a medida, hechas a mano para producción.',
  bottomText: 'raoul.studio',
}

export const footer = {
  leftText: '© 2026 raoul.studio',
  rightText: 'UE · En remoto',
  phone: '+31 10 307 3755',
  phoneHref: 'tel:+31103073755',
}
