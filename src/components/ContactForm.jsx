'use client'

import { useState, useRef } from 'react'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export default function ContactForm({
  nameLabel,
  namePlaceholder,
  emailLabel,
  emailPlaceholder,
  companyLabel,
  companyOptional,
  companyPlaceholder,
  messageLabel,
  messagePlaceholder,
  sendLabel,
  sendingButton = 'sending…',
  sendingStatus = 'Sending…',
  successStatus = "✓ Message sent — we'll reply within 24h.",
  errorStatus = '✕ Something went wrong. Try again, or write to hello@raoul.studio.',
  validationStatus = '✕ Check the highlighted field(s) and try again.',
}) {
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [invalid, setInvalid] = useState({})
  const formRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = formRef.current
    if (!form || submitting) return
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const company = String(data.get('company') || '').trim()
    const message = String(data.get('message') || '').trim()

    const nextInvalid = {
      name: !name,
      email: !email || !EMAIL_RE.test(email),
      message: !message,
    }
    setInvalid(nextInvalid)
    if (nextInvalid.name || nextInvalid.email || nextInvalid.message) {
      setStatus(validationStatus)
      return
    }

    setSubmitting(true)
    setStatus(sendingStatus)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, message }),
      })
      if (!res.ok) throw new Error('bad status')
      form.reset()
      setInvalid({})
      setStatus(successStatus)
    } catch {
      setStatus(errorStatus)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="r max-w-3xl space-y-10 md:space-y-14"
      noValidate
    >
      <div>
        <label htmlFor="f-name" className="field-label">
          {nameLabel}
        </label>
        <input
          id="f-name"
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder={namePlaceholder}
          aria-invalid={invalid.name ? 'true' : undefined}
          className="field-input"
        />
      </div>

      <div>
        <label htmlFor="f-email" className="field-label">
          {emailLabel}
        </label>
        <input
          id="f-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={emailPlaceholder}
          aria-invalid={invalid.email ? 'true' : undefined}
          className="field-input"
        />
      </div>

      <div>
        <label htmlFor="f-company" className="field-label">
          {companyLabel}{' '}
          <span className="opacity-60 normal-case tracking-normal">
            — {companyOptional}
          </span>
        </label>
        <input
          id="f-company"
          type="text"
          name="company"
          autoComplete="organization"
          placeholder={companyPlaceholder}
          className="field-input"
        />
      </div>

      <div>
        <label htmlFor="f-message" className="field-label">
          {messageLabel}
        </label>
        <textarea
          id="f-message"
          name="message"
          required
          rows={4}
          placeholder={messagePlaceholder}
          aria-invalid={invalid.message ? 'true' : undefined}
          className="field-input"
        />
      </div>

      <div className="flex items-center justify-between flex-wrap gap-y-6 pt-4 md:pt-6">
        <button type="submit" className="send-btn" disabled={submitting}>
          {submitting ? sendingButton : sendLabel}
          <span className="inline-block rotate-[-45deg] leading-none">→</span>
        </button>
        <p
          id="formStatus"
          className={`form-status text-mute font-medium uppercase tracking-wider text-xs${
            status ? ' shown' : ''
          }`}
        >
          {status}
        </p>
      </div>
    </form>
  )
}
