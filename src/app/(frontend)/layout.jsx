import './styles.css'

import MenuButton from '@/components/MenuButton'
import MenuPanel from '@/components/MenuPanel'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import SiteEffects from '@/components/SiteEffects'
import Analytics from '@/components/Analytics'
import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'
import { isRTL } from '@/content/i18n'
import { home as enHome } from '@/content/en/home'

const SITE_URL = 'https://raoul.studio'

// Locale-independent keyword signals. Google ignores <meta keywords>, but other
// search/answer engines still read it, and it costs nothing. Covers the location
// (Rotterdam), the "digital agency" search term, and common misspellings of the
// founder's name so those queries still resolve to us.
const KEYWORDS = [
  'raoul.studio',
  'Raoul Guillermo',
  'digital agency',
  'digital agency Rotterdam',
  'digital product studio',
  'software agency Rotterdam',
  'web development Rotterdam',
  'AI agency Rotterdam',
  'Rotterdam',
  'Netherlands',
  // Common misspellings / phonetic variants of the name.
  'Raul Guillermo',
  'Raoel Guillermo',
  'Raol Guillermo',
  'Roel Guillermo',
  'Rahul Guillermo',
  'Raoull Guillermo',
  'Raoule Guillermo',
  'Raoul Guilermo',
  'Raoul Gwillermo',
]

const OG_LOCALES = {
  en: 'en_US',
  de: 'de_DE',
  nl: 'nl_NL',
  es: 'es_ES',
  fr: 'fr_FR',
  ar: 'ar_AR',
}

export async function generateMetadata() {
  const lang = await getLocale()
  const { home } = getContent(lang)
  const meta = home?.meta ?? enHome.meta
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: meta.title,
      template: '%s — raoul.studio',
    },
    description: meta.description,
    applicationName: 'raoul.studio',
    keywords: KEYWORDS,
    openGraph: {
      type: 'website',
      siteName: 'raoul.studio',
      url: SITE_URL,
      title: meta.title,
      description: meta.description,
      locale: OG_LOCALES[lang] ?? 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  }
}

export const viewport = {
  themeColor: '#0F0F0F',
}

// Entity graph for search engines and AI answer engines (Google Knowledge
// Panel, ChatGPT, Perplexity, Claude). Describes the studio, its founder and
// the services it offers in plain, machine-readable terms.
const STUDIO_DESCRIPTION =
  'raoul.studio is a digital product studio that helps ambitious businesses turn ideas into scalable digital products — combining strategy, branding, software engineering, AI, automation, commerce and infrastructure.'

const svc = (name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${SITE_URL}/#studio`,
      name: 'raoul.studio',
      alternateName: ['Raoul Studio', 'raoul.studio digital agency', 'Raoul Guillermo digital agency'],
      url: SITE_URL,
      description: STUDIO_DESCRIPTION,
      slogan: 'Building what’s next.',
      email: 'hello@raoul.studio',
      telephone: '+31103073755',
      logo: `${SITE_URL}/icon.svg`,
      image: `${SITE_URL}/opengraph-image`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rotterdam',
        addressRegion: 'South Holland',
        addressCountry: 'NL',
      },
      areaServed: [
        { '@type': 'City', name: 'Rotterdam' },
        { '@type': 'Country', name: 'Netherlands' },
        { '@type': 'AdministrativeArea', name: 'European Union' },
      ],
      knowsAbout: [
        'Digital agency',
        'Digital agency in Rotterdam',
        'Digital product studio',
        'Digital strategy',
        'Product discovery',
        'UX/UI design',
        'Branding',
        'Web development',
        'Software development',
        'SaaS development',
        'AI consulting',
        'AI implementation',
        'AI agents',
        'Workflow automation',
        'API development',
        'Cloud infrastructure',
        'DevOps',
        'E-commerce at scale',
        'Headless commerce',
        'Magento',
        'Next.js',
        'Technical consulting',
      ],
      sameAs: ['https://instagram.com/raoulguillermo'],
      founder: { '@id': `${SITE_URL}/#raoul` },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'Products',
            itemListElement: [
              svc('Custom SaaS platforms'),
              svc('Web platforms & portals'),
              svc('Internal tools'),
              svc('Custom software development'),
            ],
          },
          {
            '@type': 'OfferCatalog',
            name: 'AI',
            itemListElement: [
              svc('AI consulting'),
              svc('AI implementation'),
              svc('AI agents'),
              svc('Workflow automation'),
              svc('Document intelligence'),
            ],
          },
          {
            '@type': 'OfferCatalog',
            name: 'Commerce',
            itemListElement: [
              svc('E-commerce at scale'),
              svc('Headless commerce'),
              svc('Magento development'),
              svc('PIM & ERP integrations'),
            ],
          },
          {
            '@type': 'OfferCatalog',
            name: 'Brand',
            itemListElement: [
              svc('Brand identity'),
              svc('Websites'),
              svc('Digital experiences'),
            ],
          },
          {
            '@type': 'OfferCatalog',
            name: 'Growth',
            itemListElement: [
              svc('Technical partnership'),
              svc('Cloud infrastructure & DevOps'),
              svc('Maintenance & support'),
            ],
          },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#raoul`,
      name: 'Raoul Guillermo',
      // Common misspellings / phonetic variants so name-typo searches still resolve.
      alternateName: [
        'Raul Guillermo',
        'Raoel Guillermo',
        'Raol Guillermo',
        'Roel Guillermo',
        'Rahul Guillermo',
        'Raoull Guillermo',
        'Raoule Guillermo',
        'Raoul Guilermo',
        'Raoul Gwillermo',
      ],
      jobTitle: 'Founder',
      worksFor: { '@id': `${SITE_URL}/#studio` },
      homeLocation: { '@type': 'Place', name: 'Rotterdam, Netherlands' },
      sameAs: ['https://instagram.com/raoulguillermo'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'raoul.studio',
      description: STUDIO_DESCRIPTION,
      inLanguage: ['en', 'de', 'nl', 'es', 'fr', 'ar'],
      publisher: { '@id': `${SITE_URL}/#studio` },
    },
  ],
}

export default async function FrontendLayout({ children }) {
  const lang = await getLocale()
  const rtl = isRTL(lang)
  const { menu } = getContent(lang)

  return (
    <html lang={lang} dir={rtl ? 'rtl' : 'ltr'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter+Tight:wght@400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        {rtl ? (
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap"
            rel="stylesheet"
          />
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          {/* Reveal animations are JS-driven; without JS the content must still be readable. */}
          <style>{`.r{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <main className="max-w-[1200px] mx-auto px-6 md:px-10">{children}</main>

        <MenuButton />

        <LanguageSwitcher currentLang={lang} />

        <MenuPanel
          eyebrow={menu.eyebrow}
          columns={menu.columns}
          footerLeft={menu.footerLeft}
          footerPhone={menu.footerPhone}
          footerPhoneHref={menu.footerPhoneHref}
          footerRightLabel={menu.footerRightLabel}
          footerRightHref={menu.footerRightHref}
        />

        <SiteEffects />
        <Analytics />
      </body>
    </html>
  )
}
