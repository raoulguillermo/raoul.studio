import './styles.css'

import MenuButton from '@/components/MenuButton'
import MenuPanel from '@/components/MenuPanel'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import SiteEffects from '@/components/SiteEffects'
import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'
import { isRTL } from '@/content/i18n'
import { home as enHome } from '@/content/en/home'

const SITE_URL = 'https://raoul.studio'

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
    alternates: { canonical: '/' },
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
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#studio`,
      name: 'raoul.studio',
      url: SITE_URL,
      description: enHome.meta.description,
      email: 'hello@raoul.studio',
      telephone: '+31103073755',
      areaServed: 'EU',
      knowsAbout: [
        'Custom software development',
        'Fintech software',
        'Legal tech',
        'Commercial agency platforms',
        'Next.js',
        'E-commerce at scale',
      ],
      sameAs: ['https://instagram.com/raoulguillermo'],
      founder: { '@id': `${SITE_URL}/#raoul` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#raoul`,
      name: 'Raoul Guillermo',
      jobTitle: 'Founder & software architect',
      worksFor: { '@id': `${SITE_URL}/#studio` },
      sameAs: ['https://instagram.com/raoulguillermo'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'raoul.studio',
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
      </body>
    </html>
  )
}
