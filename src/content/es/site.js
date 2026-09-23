// Estructura del sitio: cabecera, menú a página completa, riel de pósteres, pie.

export const header = {
  wordmark: 'studio raoul',
  tagline: 'software innovation, architecture & development',
  wordmarkHref: '/',
  ctaLabel: 'contacto',
  ctaHref: '/contact',
}

export const menu = {
  columns: [
    {
      heading: '01 — Estudio',
      links: [
        { label: 'Nosotros', href: '/about' },
        { label: 'Proceso', href: '/process' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      heading: '02 — Trabajo',
      links: [
        { label: 'Trabajo', href: '/work' },
        { label: 'Servicios', href: '/services' },
        { label: 'Software', href: '/software' },
      ],
    },
    {
      heading: '03 — Conecta',
      links: [
        { label: 'Contacto', href: '/contact' },
        { label: 'Instagram', href: 'https://instagram.com/raoulguillermo' },
        { label: 'Privacidad', href: '/privacy' },
        { label: 'Términos', href: '/terms' },
      ],
    },
  ],
  footerLeft: '© studio.raoul · 2026',
  footerPhone: '+31 (970) 065 - 30693',
  footerPhoneHref: 'tel:+3197006530693',
  footerRightLabel: 'hello@raoul.studio',
  footerRightHref: '/contact',
}

// Textos de estructura que viven en el JSX y no en el contenido de página.
export const ui = {
  consent: {
    text: 'Usamos cookies de Google, Meta y TikTok para medir qué anuncios funcionan. Solo si tú estás de acuerdo.',
    accept: 'Aceptar',
    reject: 'Rechazar',
    more: 'Política de privacidad',
    settings: 'Configuración de cookies',
  },
  a11y: {
    openMenu: 'Abrir menú',
    call: 'Llamar',
    scrollToBottom: 'Bajar al final',
    chat: 'Hablemos',
    language: 'Idioma',
    changeLanguage: 'Cambiar de idioma',
    closeLanguageMenu: 'Cerrar el menú de idiomas',
  },
  back: 'Volver',
  projectLabel: 'Proyecto №',
  form: {
    sendingButton: 'enviando…',
    sendingStatus: 'Enviando…',
    successStatus: '✓ Mensaje enviado — el estudio responderá en menos de 24 h.',
    errorStatus:
      '✕ Algo salió mal. Inténtalo de nuevo o escribe a hello@raoul.studio.',
    validationStatus: '✕ Revisa el campo o los campos marcados e inténtalo de nuevo.',
  },
}

export const posterRail = {
  middleText: 'studio.raoul diseña, construye y emprende contigo.',
}

export const footer = {
  leftText: '© 2026 studio.raoul · KvK 24469404',
  rightText: 'Rotterdam · UE',
  phone: '+31 (970) 065 - 30693',
  phoneHref: 'tel:+3197006530693',
}
