'use client'

import { useEffect, useState } from 'react'

// After Stripe sends someone back, wait for poofy-plus-api's webhook to grant
// the purchase. The redirect alone proves nothing, so poll this purchase's
// status every 2s for up to 30s.
export default function CheckoutStatus({ teamId, sessionId, waiting, done, slow }) {
  const [state, setState] = useState('pending')

  useEffect(() => {
    let stop = false
    let tries = 0
    async function check() {
      if (stop) return
      tries += 1
      const res = await fetch(
        `/api/poofy-events/checkout-status?teamId=${encodeURIComponent(teamId)}&sessionId=${encodeURIComponent(sessionId)}`,
        { cache: 'no-store' },
      ).catch(() => null)
      const data = res ? await res.json().catch(() => ({})) : {}
      if (data.status === 'complete') return setState('complete')
      if (tries >= 15) return setState('slow')
      setTimeout(check, 2000)
    }
    check()
    return () => {
      stop = true
    }
  }, [teamId, sessionId])

  const text = state === 'complete' ? done : state === 'slow' ? slow : waiting
  return (
    <p role="status" aria-live="polite" className="mt-8 max-w-2xl text-xl md:text-2xl leading-snug text-ink/80">
      {state === 'complete' ? <span className="text-accent">✓ </span> : null}
      {text}
    </p>
  )
}
