// Software landing pages — the locale-independent half.
//
// Each product has a top-level route (/voice-ai, /no-cms, /poofy) that sells
// the product, next to its /projects/* case study that tells how it was built.
// Routes, links, the call-to-action kind and the row colours live here so they
// never drift between locales; all prose lives in <locale>/products.js.

export const APP_STORE_POOFY = 'https://apps.apple.com/app/poofy/id6803196586'

export const productRegistry = {
  'voice-ai': {
    slug: 'voice-ai',
    name: 'Voice AI',
    caseStudySlug: 'voice-agent',
    // `cta: 'form'` shows a lead form that posts to /api/contact, tagged with
    // `source` so the inbox shows which page it came from.
    cta: 'form',
    source: 'Voice AI',
    schemaType: 'Service',
    colors: { bg: '#0F0F0F', fg: '#D6D9DC', numeralColor: '#E92316' },
    // The number for the "call and hear it" button: the studio's own line.
    // The button only renders when this is set.
    demoPhone: '+31 (970) 065 - 30693',
    demoPhoneHref: 'tel:+3197006530693',
    // One landing page per industry at /voice-ai/<slug>; the words live in
    // <locale>/voiceIndustries.js.
    industryPages: true,
  },
  'no-cms': {
    slug: 'no-cms',
    name: 'No-CMS',
    caseStudySlug: 'no-cms',
    cta: 'form',
    source: 'No-CMS',
    schemaType: 'Service',
    colors: { bg: '#E92316', fg: '#D6D9DC', numeralColor: '#0F0F0F' },
  },
  poofy: {
    slug: 'poofy',
    name: 'Poofy',
    caseStudySlug: 'poofy',
    cta: 'appstore',
    appStoreUrl: APP_STORE_POOFY,
    schemaType: 'SoftwareApplication',
    colors: { bg: '#D6D9DC', fg: '#0F0F0F', numeralColor: '#E92316' },
  },
  crm: {
    slug: 'crm',
    name: 'CRM',
    // Built for several clients, so no single case study — the clients are
    // listed as references instead (copy per locale, names and links here).
    caseStudySlug: null,
    relatedCaseStudies: ['lexpert'],
    references: [
      { name: 'Lexpert Advocaten', href: '/projects/lexpert' },
      { name: 'Footsteppa', href: '/projects/footsteppa' },
      { name: 'Greetje', href: 'https://greetjeschiedam.nl' },
    ],
    cta: 'form',
    source: 'CRM',
    schemaType: 'Service',
    colors: { bg: '#0F0F0F', fg: '#D6D9DC', numeralColor: '#E92316' },
  },
}

export const productSlugs = Object.keys(productRegistry)

// Case-study slug → landing-page slug, for the "see the product" link on
// /projects/[slug].
export const productByCaseStudy = Object.fromEntries(
  Object.values(productRegistry).flatMap((p) =>
    [p.caseStudySlug, ...(p.relatedCaseStudies ?? [])]
      .filter(Boolean)
      .map((cs) => [cs, p.slug]),
  ),
)

// Voice AI industry pages, in the order they are listed. The first is the
// canonical slug; Dutch aliases (/nl/voice-ai/tandarts) serve the same page,
// so ads can use URLs in the buyer's own language.
export const voiceIndustrySlugs = ['dentist', 'clinic', 'restaurant', 'salon', 'garage', 'law-firm', 'rental']

export const voiceIndustryAliases = {
  tandarts: 'dentist',
  tandartsen: 'dentist',
  tandartspraktijk: 'dentist',
  kliniek: 'clinic',
  praktijk: 'clinic',
  fysio: 'clinic',
  fysiotherapie: 'clinic',
  restaurants: 'restaurant',
  kapper: 'salon',
  kappers: 'salon',
  kapsalon: 'salon',
  schoonheidssalon: 'salon',
  advocaat: 'law-firm',
  advocaten: 'law-firm',
  advocatenkantoor: 'law-firm',
  verhuur: 'rental',
  verhuurbedrijf: 'rental',
}

export function resolveVoiceIndustry(slug) {
  if (voiceIndustrySlugs.includes(slug)) return slug
  return voiceIndustryAliases[slug] ?? null
}
