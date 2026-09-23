'use client'

import { useEffect, useState } from 'react'

// "Cookie-instellingen" in the footer: reopens the consent banner. Shows only
// once Consent.jsx has signalled that ad cookies are in use at all.
export default function ConsentLink() {
  const [label, setLabel] = useState(null)

  useEffect(() => {
    const ready = () => {
      if (window.__consentEnabled) setLabel(window.__consentSettingsLabel || 'Cookies')
    }
    ready()
    window.addEventListener('consent-ready', ready)
    return () => window.removeEventListener('consent-ready', ready)
  }, [])

  if (!label) return null
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-consent'))}
      className="hover:text-ink transition-colors"
    >
      {label}
    </button>
  )
}
