'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// First-party visitor beacon. Sends one "pageview" per path and periodic
// "heartbeats" that report how many seconds the tab was actually visible, so the
// server can measure real dwell time and who is on the site right now.
//
// Cookieless: a per-tab session id lives in sessionStorage, nothing is written
// to cookies or localStorage. See /api/track for how the data is stored.

const ENDPOINT = '/api/track'
const HEARTBEAT_MS = 15000 // report dwell every 15s while the tab is visible

// Only track the real production site. Dev (dev.raoul.studio) and localhost
// share the same database, so tracking them would pollute the stats.
const LIVE_HOSTS = new Set(['raoul.studio', 'www.raoul.studio'])

function token(bytes = 16) {
  const a = new Uint8Array(bytes)
  crypto.getRandomValues(a)
  let s = ''
  for (const b of a) s += b.toString(16).padStart(2, '0')
  return s
}

function sessionId() {
  try {
    let sid = sessionStorage.getItem('ra_sid')
    if (!sid) {
      sid = token(16)
      sessionStorage.setItem('ra_sid', sid)
    }
    return sid
  } catch {
    // Private mode / storage blocked — fall back to a per-load id.
    return token(16)
  }
}

function send(payload) {
  try {
    const body = JSON.stringify(payload)
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, new Blob([body], { type: 'application/json' }))
    } else {
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body,
        keepalive: true,
      }).catch(() => {})
    }
  } catch {
    /* never let analytics throw into the page */
  }
}

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!LIVE_HOSTS.has(location.hostname)) return
    // Don't track the admin dashboard itself.
    if (pathname && pathname.startsWith('/admin')) return

    const sid = sessionId()
    const pvid = token(16)

    // ---- dwell accounting (visible time only) ----
    let visibleMs = 0
    let resumedAt = document.visibilityState === 'visible' ? performance.now() : null

    const durationSec = () => {
      let ms = visibleMs
      if (resumedAt != null) ms += performance.now() - resumedAt
      return Math.round(ms / 1000)
    }
    const heartbeat = () => send({ t: 'hb', pvid, dur: durationSec() })

    // ---- pageview ----
    send({
      t: 'pv',
      sid,
      pvid,
      path: pathname || location.pathname,
      ref: document.referrer || '',
      lang: navigator.language || '',
      sw: window.screen?.width || window.innerWidth || 0,
      sh: window.screen?.height || window.innerHeight || 0,
    })

    // ---- timers + lifecycle ----
    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') heartbeat()
    }, HEARTBEAT_MS)

    const onVisibility = () => {
      if (document.visibilityState === 'hidden') {
        if (resumedAt != null) {
          visibleMs += performance.now() - resumedAt
          resumedAt = null
        }
        heartbeat() // capture dwell before the tab is backgrounded
      } else if (resumedAt == null) {
        resumedAt = performance.now()
      }
    }
    const onPageHide = () => {
      if (resumedAt != null) {
        visibleMs += performance.now() - resumedAt
        resumedAt = null
      }
      heartbeat()
    }

    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pagehide', onPageHide)

    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pagehide', onPageHide)
      onPageHide() // final dwell when navigating to another path
    }
  }, [pathname])

  return null
}
