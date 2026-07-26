'use client'

import { useState } from 'react'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

// Inline newsletter signup. `variant="dark"` adapts colours for dark sections.
export default function NewsletterSignup({ strings, lang, variant = 'light' }) {
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('') // honeypot
  const [status, setStatus] = useState('idle') // idle | sending | success | error | invalid

  const dark = variant === 'dark'

  async function onSubmit(e) {
    e.preventDefault()
    if (status === 'sending' || status === 'success') return
    const value = email.trim()
    if (!EMAIL_RE.test(value)) {
      setStatus('invalid')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value, website, locale: lang }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inlineMsg =
    status === 'error' ? strings.error : status === 'invalid' ? strings.invalid : ''

  return (
    <div>
      {strings.heading ? (
        <h3 className="font-display uppercase tracking-tight2 leading-[0.98] text-3xl md:text-5xl">
          {strings.heading}
        </h3>
      ) : null}
      {strings.sub ? (
        <p className={`mt-3 max-w-xl text-base md:text-lg ${dark ? 'opacity-70' : 'text-ink/70'}`}>
          {strings.sub}
        </p>
      ) : null}

      {status === 'success' ? (
        <p className="mt-6 text-lg md:text-xl font-medium text-accent">{strings.success}</p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 max-w-xl" noValidate>
          <div className={`flex items-stretch gap-4 border-b-2 ${dark ? 'border-current' : 'border-ink'}`}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status !== 'idle') setStatus('idle')
              }}
              placeholder={strings.placeholder}
              aria-label={strings.placeholder}
              className="flex-1 min-w-0 bg-transparent py-3 text-lg md:text-xl outline-none placeholder:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="shrink-0 font-semibold uppercase tracking-wider text-sm md:text-base hover:text-accent transition-colors disabled:opacity-50"
            >
              {status === 'sending' ? strings.sending : strings.button}
            </button>
          </div>
          {/* Honeypot — hidden from real users. */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="hidden"
            aria-hidden="true"
          />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs uppercase tracking-wider">
            {strings.consent ? (
              <span className={dark ? 'opacity-60' : 'text-mute'}>{strings.consent}</span>
            ) : null}
            {inlineMsg ? (
              <span className="text-accent font-semibold normal-case tracking-normal">
                {inlineMsg}
              </span>
            ) : null}
          </div>
        </form>
      )}
    </div>
  )
}
