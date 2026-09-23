'use client'

import { useEffect, useState } from 'react'

// Cookie banner + Google Analytics and ad pixels (Google Ads, Meta, TikTok),
// consent first.
//
// Nothing third-party loads until the visitor accepts: Consent Mode v2 "basic"
// — gtag is only injected after a yes, with every consent type granted. A no
// (or no answer) means no Google, Meta or TikTok script at all. The choice is
// kept in a first-party "consent" cookie for a year; "Cookie-instellingen" in
// the footer reopens the banner.
//
// Conversions: a successful form sends a "lead" window event (ContactForm) and
// any tel: link click counts as a call. Both reach the pixels only after a yes.
//
// Renders nothing unless at least one ad ID is configured (see layout.jsx).

const COOKIE = 'consent'
const YEAR = 60 * 60 * 24 * 365

function readChoice() {
  const m = document.cookie.match(/(?:^|;\s*)consent=(granted|denied)/)
  return m ? m[1] : null
}

function writeChoice(value) {
  document.cookie = `${COOKIE}=${value}; path=/; max-age=${YEAR}; samesite=lax`
}

function inject(src) {
  const s = document.createElement('script')
  s.async = true
  s.src = src
  document.head.appendChild(s)
}

let loaded = false
function loadPixels(ids) {
  if (loaded) return
  loaded = true
  const w = window

  // One gtag serves both Google Analytics (G-…) and Google Ads (AW-…).
  const googleIds = [ids.googleAnalytics, ids.googleAds].filter(Boolean)
  if (googleIds.length) {
    w.dataLayer = w.dataLayer || []
    w.gtag = function gtag() {
      w.dataLayer.push(arguments)
    }
    w.gtag('consent', 'default', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    })
    w.gtag('js', new Date())
    googleIds.forEach((id) => w.gtag('config', id))
    inject(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(googleIds[0])}`)
  }

  if (ids.metaPixel) {
    /* eslint-disable */
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = '2.0'
      n.queue = []
    })(w)
    /* eslint-enable */
    w.fbq('init', ids.metaPixel)
    w.fbq('track', 'PageView')
    inject('https://connect.facebook.net/en_US/fbevents.js')
  }

  if (ids.tiktokPixel) {
    // TikTok's standard base code, unchanged apart from formatting.
    /* eslint-disable */
    !(function (w, d, t) {
      w.TiktokAnalyticsObject = t
      var ttq = (w[t] = w[t] || [])
      ttq.methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie', 'holdConsent', 'revokeConsent', 'grantConsent']
      ttq.setAndDefer = function (t, e) {
        t[e] = function () {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
        }
      }
      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i])
      ttq.instance = function (t) {
        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n])
        return e
      }
      ttq.load = function (e, n) {
        var r = 'https://analytics.tiktok.com/i18n/pixel/events.js'
        ttq._i = ttq._i || {}
        ttq._i[e] = []
        ttq._i[e]._u = r
        ttq._t = ttq._t || {}
        ttq._t[e] = +new Date()
        ttq._o = ttq._o || {}
        ttq._o[e] = n || {}
        var s = d.createElement('script')
        s.type = 'text/javascript'
        s.async = !0
        s.src = r + '?sdkid=' + e + '&lib=' + t
        var f = d.getElementsByTagName('script')[0]
        f.parentNode.insertBefore(s, f)
      }
    })(w, document, 'ttq')
    /* eslint-enable */
    w.ttq.load(ids.tiktokPixel)
    w.ttq.page()
  }
}

function trackLead(ids, kind) {
  if (!loaded) return
  const w = window
  if (w.gtag) {
    w.gtag('event', 'generate_lead', { method: kind })
    if (ids.googleAds && ids.googleAdsLeadLabel) {
      w.gtag('event', 'conversion', { send_to: `${ids.googleAds}/${ids.googleAdsLeadLabel}` })
    }
  }
  if (w.fbq) w.fbq('track', kind === 'call' ? 'Contact' : 'Lead')
  if (w.ttq?.track) w.ttq.track(kind === 'call' ? 'Contact' : 'SubmitForm')
}

export default function Consent({ ids, strings, privacyHref = '/privacy' }) {
  const enabled = Boolean(
    ids.googleAnalytics || ids.googleAds || ids.metaPixel || ids.tiktokPixel,
  )
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!enabled) return
    const choice = readChoice()
    if (choice === 'granted') loadPixels(ids)
    else if (!choice) setOpen(true)

    // Let the footer show its "Cookie-instellingen" button.
    window.__consentEnabled = true
    window.__consentSettingsLabel = strings.settings
    window.dispatchEvent(new Event('consent-ready'))

    const reopen = () => setOpen(true)
    const onLead = (e) => trackLead(ids, e.detail?.kind ?? 'form')
    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="tel:"], a[href^="mailto:"]')
      if (a) trackLead(ids, a.getAttribute('href').startsWith('tel:') ? 'call' : 'email')
    }
    window.addEventListener('open-consent', reopen)
    window.addEventListener('lead', onLead)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('open-consent', reopen)
      window.removeEventListener('lead', onLead)
      document.removeEventListener('click', onClick)
    }
  }, [enabled, ids, strings.settings])

  if (!enabled || !open) return null

  function choose(value) {
    const was = readChoice()
    writeChoice(value)
    setOpen(false)
    if (value === 'granted') loadPixels(ids)
    // Withdrawing a yes: reload so the scripts that already ran are gone.
    else if (was === 'granted') window.location.reload()
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={strings.settings}
      className="fixed inset-x-0 bottom-0 z-[80] bg-ink text-paper"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-5 md:py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <p className="text-sm md:text-base leading-snug flex-1">
          {strings.text}{' '}
          <a href={privacyHref} className="ul underline underline-offset-2">
            {strings.more}
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="px-5 py-3 border-2 border-paper text-sm font-semibold uppercase tracking-wider hover:bg-paper hover:text-ink transition-colors"
          >
            {strings.reject}
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="px-5 py-3 border-2 border-paper text-sm font-semibold uppercase tracking-wider hover:bg-paper hover:text-ink transition-colors"
          >
            {strings.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
