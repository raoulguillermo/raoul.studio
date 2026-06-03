import { ImageResponse } from 'next/og'

export const alt = 'raoul.studio — custom tools & platforms, built to ship'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
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
          raoul<span style={{ color: '#E92316' }}>.</span>studio
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: 76,
            fontWeight: 900,
            lineHeight: 1.04,
            letterSpacing: '-0.03em',
            maxWidth: 1000,
          }}
        >
          <span>We build custom tools &amp; platforms&nbsp;</span>
          <span style={{ color: '#E92316' }}>for teams who would rather ship than meet.</span>
        </div>
        <div style={{ display: 'flex', fontSize: 28, fontWeight: 500, color: '#9aa0a6' }}>
          Product &amp; engineering studio · fintech · law · commercial
        </div>
      </div>
    ),
    { ...size },
  )
}
