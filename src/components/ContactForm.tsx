'use client'

import { useState, useRef } from 'react'

type Props = {
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  companyLabel: string
  companyOptional: string
  companyPlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  sendLabel: string
  recipient: string
}

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
  recipient,
}: Props) {
  const [status, setStatus] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = formRef.current
    if (!form) return
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const company = String(data.get('company') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name || !email || !message) {
      setStatus('✕ Please fill in name, email and message.')
      return
    }

    const subject = encodeURIComponent(
      `Hello from ${name}${company ? ' / ' + company : ''}`,
    )
    const body = encodeURIComponent(
      `From: ${name}\nEmail: ${email}${company ? '\nCompany: ' + company : ''}\n\n${message}`,
    )
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
    setStatus('✓ Opening your email client…')
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
          className="field-input"
        />
      </div>

      <div className="flex items-center justify-between flex-wrap gap-y-6 pt-4 md:pt-6">
        <button type="submit" className="send-btn">
          {sendLabel}
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
