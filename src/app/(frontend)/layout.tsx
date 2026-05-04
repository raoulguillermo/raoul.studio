import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'

import './styles.css'

import MenuButton from '@/components/MenuButton'
import MenuPanel from '@/components/MenuPanel'
import SiteEffects from '@/components/SiteEffects'

export default async function FrontendLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const menu = await payload.findGlobal({ slug: 'menu' })

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter+Tight:wght@400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main className="max-w-[1200px] mx-auto px-6 md:px-10">{children}</main>

        <MenuButton />

        <MenuPanel
          eyebrow={menu.eyebrow}
          columns={(menu.columns ?? []).map((c: any) => ({
            heading: c.heading,
            links: c.links ?? [],
          }))}
          footerLeft={menu.footerLeft ?? ''}
          footerRightLabel={menu.footerRightLabel ?? ''}
          footerRightHref={menu.footerRightHref ?? ''}
        />

        <SiteEffects />
      </body>
    </html>
  )
}
