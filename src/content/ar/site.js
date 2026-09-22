// Site chrome: header, full-page menu, poster rail, footer.

export const header = {
  wordmark: 'studio.raoul',
  tagline: 'حرفية رقمية',
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
        { label: 'عن الاستوديو', href: '/about' },
        { label: 'منهجيتنا', href: '/process' },
        { label: 'المدوّنة', href: '/blog' },
      ],
    },
    {
      heading: '02 — الأعمال',
      links: [
        { label: 'الأعمال', href: '/work' },
        { label: 'الخدمات', href: '/services' },
        { label: 'البرمجيات', href: '/software' },
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
  footerLeft: '© studio.raoul · 2026',
  footerPhone: '+31 (970) 065 - 30693',
  footerPhoneHref: 'tel:+3197006530693',
  footerRightLabel: 'hello@raoul.studio',
  footerRightHref: '/contact',
}

// Chrome strings that live in JSX rather than page content.
export const ui = {
  a11y: {
    openMenu: 'فتح القائمة',
    scrollToBottom: 'التمرير إلى الأسفل',
    chat: 'لنتحدّث',
    language: 'اللغة',
    changeLanguage: 'تغيير اللغة',
    closeLanguageMenu: 'إغلاق قائمة اللغات',
  },
  back: 'رجوع',
  projectLabel: 'مشروع رقم',
  form: {
    sendingButton: 'جارٍ الإرسال…',
    sendingStatus: 'جارٍ الإرسال…',
    successStatus: '✓ تم إرسال رسالتك — سيردّ الاستوديو خلال 24 ساعة.',
    errorStatus:
      '✕ حدث خطأ ما. حاول مرة أخرى، أو راسلنا على hello@raoul.studio.',
    validationStatus: '✕ تحقّق من الحقول المميّزة وحاول مرة أخرى.',
  },
}

export const posterRail = {
  topText: 'استوديو منتجات رقمية',
  middleText: 'يصمّم الاستوديو ويبني وينمّي شركات رقمية.',
  bottomText: 'studio.raoul',
}

export const footer = {
  leftText: '© 2026 studio.raoul',
  rightText: 'روتردام · الاتحاد الأوروبي',
  phone: '+31 (970) 065 - 30693',
  phoneHref: 'tel:+3197006530693',
}
