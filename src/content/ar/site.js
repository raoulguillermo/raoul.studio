// Site chrome: header, full-page menu, poster rail, footer.

export const header = {
  wordmark: 'raoul.studio',
  wordmarkHref: '/',
  ctaLabel: 'تواصل',
  ctaHref: '/contact',
}

export const menu = {
  eyebrow: 'القائمة — 2026',
  columns: [
    {
      heading: '01 — الاستوديو',
      links: [
        { label: 'من نحن', href: '/about' },
        { label: 'منهجيتنا', href: '/process' },
        { label: 'المدوّنة', href: '/blog' },
      ],
    },
    {
      heading: '02 — الأعمال',
      links: [
        { label: 'OutdoorXL', href: '/projects/outdoorxl' },
        { label: 'AboutSpace', href: '/projects/aboutspace' },
        { label: 'Threadly', href: '/projects/threadly' },
        { label: 'Lexpert CRM', href: '/projects/lexpert' },
        { label: 'كل الأعمال', href: '/work' },
      ],
    },
    {
      heading: '03 — تواصل',
      links: [
        { label: 'تواصل', href: '/contact' },
        { label: 'Instagram', href: 'https://instagram.com/raoulguillermo' },
        { label: 'الخصوصية', href: '/privacy' },
        { label: 'الشروط', href: '/terms' },
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
  back: 'رجوع',
  projectLabel: 'مشروع رقم',
  form: {
    sendingButton: 'جارٍ الإرسال…',
    sendingStatus: 'جارٍ الإرسال…',
    successStatus: '✓ تم إرسال رسالتك — سنردّ خلال 24 ساعة.',
    errorStatus:
      '✕ حدث خطأ ما. حاول مرة أخرى، أو راسلنا على hello@raoul.studio.',
    validationStatus: '✕ تحقّق من الحقول المميّزة وحاول مرة أخرى.',
  },
}

export const posterRail = {
  topText: 'استوديو منتجات رقمية',
  middleText: 'نصمّم ونبني وننمّي شركات رقمية.',
  bottomText: 'raoul.studio',
}

export const footer = {
  leftText: '© 2026 raoul.studio',
  rightText: 'روتردام · الاتحاد الأوروبي · عن بُعد',
  phone: '+31 10 307 3755',
  phoneHref: 'tel:+31103073755',
}
