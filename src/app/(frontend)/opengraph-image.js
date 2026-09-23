import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'

export const alt = 'studio.raoul'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// The share image repeats the homepage hero and intro, so it never drifts from
// the site copy. The built-in font has no Arabic glyphs, so Arabic falls back
// to English here.
export default async function OpengraphImage() {
  const locale = await getLocale()
  const { home } = getContent(locale === 'ar' ? 'en' : locale)
  const { prefix, accent, suffix } = home.hero
  // Anton, the site's display face (OFL), kept next to this file
  const anton = await readFile(join(process.cwd(), 'src/app/(frontend)/og-fonts/Anton-Regular.ttf'))

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0F0F0F',
          color: '#D6D9DC',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 800, letterSpacing: '-0.01em' }}>
          studio<span style={{ color: '#E92316' }}>.</span>raoul
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            fontFamily: 'Anton',
            fontSize: 128,
            lineHeight: 0.98,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            maxWidth: 1056,
          }}
        >
          {prefix ? <span>{prefix}&nbsp;</span> : null}
          <span style={{ background: '#E92316', color: '#D6D9DC', padding: '0 12px' }}>{accent}</span>
          {suffix ? <span>&nbsp;{suffix}</span> : null}
        </div>
        <div style={{ display: 'flex', fontSize: 30, fontWeight: 500, lineHeight: 1.35, color: '#9aa0a6', maxWidth: 1000 }}>
          {home.intro}
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: 'Anton', data: anton, style: 'normal', weight: 400 }] },
  )
}
