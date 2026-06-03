import './styles.css'

import MenuButton from '@/components/MenuButton'
import MenuPanel from '@/components/MenuPanel'
import SiteEffects from '@/components/SiteEffects'
import { menu } from '@/content/site'
import { home } from '@/content/home'

const SITE_URL = 'https://raoul.studio'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: home.meta.title,
    template: '%s — raoul.studio',
  },
  description: home.meta.description,
  applicationName: 'raoul.studio',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'raoul.studio',
    url: SITE_URL,
    title: home.meta.title,
    description: home.meta.description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: home.meta.title,
    description: home.meta.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
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
      description: home.meta.description,
      email: 'hello@raoul.studio',
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

export default function FrontendLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter+Tight:wght@400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <main className="max-w-[1200px] mx-auto px-6 md:px-10">{children}</main>

        <MenuButton />

        <MenuPanel
          eyebrow={menu.eyebrow}
          columns={menu.columns}
          footerLeft={menu.footerLeft}
          footerRightLabel={menu.footerRightLabel}
          footerRightHref={menu.footerRightHref}
        />

        <SiteEffects />
      </body>
    </html>
  )
}
