// Software landing pages — the locale-independent half.
//
// Each product has a top-level route (/voice-ai, /no-cms, /poofy) that sells
// the product, next to its /projects/* case study that tells how it was built.
// Routes, links and the call-to-action kind live here so they never drift
// between locales; all prose lives in <locale>/products.js.

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
  },
  'no-cms': {
    slug: 'no-cms',
    name: 'No-CMS',
    caseStudySlug: 'no-cms',
    cta: 'form',
    source: 'No-CMS',
    schemaType: 'Service',
  },
  poofy: {
    slug: 'poofy',
    name: 'Poofy',
    caseStudySlug: 'poofy',
    cta: 'appstore',
    appStoreUrl: APP_STORE_POOFY,
    schemaType: 'SoftwareApplication',
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
