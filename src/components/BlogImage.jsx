'use client'

import { useState } from 'react'

// A blog post's source image. External URLs can rot or block hotlinking, so if
// the image fails to load we simply remove it — the key-facts card is always the
// reliable visual, this is the "nice to have" on top. Kept subtle and on-brand:
// a flat, bordered frame with an optional caption/credit.
export default function BlogImage({ src, alt = '', credit = '' }) {
  const [ok, setOk] = useState(true)
  if (!src || !ok) return null

  return (
    <figure className="r mb-12 md:mb-16">
      <div className="border-2 border-ink overflow-hidden bg-ink/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setOk(false)}
          className="block w-full h-auto max-h-[60vh] object-cover"
        />
      </div>
      {credit ? (
        <figcaption className="mt-2 text-[11px] uppercase tracking-[.16em] text-mute">
          {credit}
        </figcaption>
      ) : null}
    </figure>
  )
}
