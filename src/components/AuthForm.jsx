'use client'

import { useState } from 'react'

// Sign in, create an account, or reset a password (email → code + new
// password), all on one page. Posts JSON to /api/account/*; the session
// cookie is set by the server, so on success this only has to navigate.
export default function AuthForm({ s, next, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode)
  const [codeSent, setCodeSent] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  function switchTo(m) {
    setMode(m)
    setCodeSent(false)
    setError('')
  }

  async function post(action, body) {
    const res = await fetch(`/api/account/${action}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).catch(() => null)
    const data = res ? await res.json().catch(() => ({})) : { error: 'unavailable' }
    return res?.ok ? { ok: true } : { error: data.error || 'generic' }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (busy) return
    const f = Object.fromEntries(new FormData(e.currentTarget))
    setBusy(true)
    setError('')

    let action = mode
    if (mode === 'forgot') action = codeSent ? 'reset' : 'forgot'
    const result = await post(action, { ...f, email: f.email ?? email })

    if (result.ok && action === 'forgot') {
      setEmail(String(f.email))
      setCodeSent(true)
      setBusy(false)
      return
    }
    if (result.ok) {
      window.location.assign(next)
      return
    }
    // Five wrong codes: start over with a fresh one.
    if (result.error === 'too_many') setCodeSent(false)
    setError(s.errors[result.error] ?? s.errors.generic)
    setBusy(false)
  }

  const title = { login: s.loginTitle, register: s.registerTitle, forgot: s.forgotTitle }[mode]
  const button =
    mode === 'login'
      ? s.loginButton
      : mode === 'register'
        ? s.registerButton
        : codeSent
          ? s.resetButton
          : s.sendCode

  return (
    <div className="max-w-3xl">
      <h1 className="pr-16 md:pr-20 hyphens-auto font-display uppercase tracking-tight2 leading-[0.95] text-[clamp(2.5rem,12vw,5rem)] md:text-[8vw]">
        {title}
        <span className="text-accent">.</span>
      </h1>
      <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-snug text-ink/80">
        {mode === 'forgot' && codeSent ? s.codeSent : s.loginIntro}
      </p>

      <form key={`${mode}-${codeSent}`} onSubmit={handleSubmit} className="mt-14 space-y-10 md:space-y-12">
        {mode === 'register' ? (
          <div className="grid gap-10 md:grid-cols-2 md:gap-8">
            <Field id="a-first" name="firstName" label={s.firstName} autoComplete="given-name" required />
            <Field id="a-last" name="lastName" label={s.lastName} autoComplete="family-name" required />
          </div>
        ) : null}

        {mode === 'forgot' && codeSent ? (
          <>
            <Field
              id="a-code"
              name="code"
              label={s.code}
              placeholder={s.codePlaceholder}
              autoComplete="one-time-code"
              inputMode="numeric"
              pattern="[0-9]{6}"
              maxLength={6}
              required
            />
            <Field
              id="a-password"
              name="password"
              type="password"
              label={s.newPassword}
              hint={s.passwordHint}
              autoComplete="new-password"
              minLength={8}
              required
            />
          </>
        ) : (
          <>
            <Field
              id="a-email"
              name="email"
              type="email"
              label={s.email}
              placeholder={s.emailPlaceholder}
              autoComplete="email"
              defaultValue={email}
              required
            />
            {mode !== 'forgot' ? (
              <Field
                id="a-password"
                name="password"
                type="password"
                label={s.password}
                hint={mode === 'register' ? s.passwordHint : undefined}
                autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                minLength={mode === 'register' ? 8 : undefined}
                required
              />
            ) : null}
          </>
        )}

        <div className="flex items-center justify-between flex-wrap gap-6 pt-2">
          <button type="submit" className="send-btn" disabled={busy}>
            {busy ? s.working : button}
            <span className="inline-block rotate-[-45deg] leading-none">→</span>
          </button>
          <p role="status" className={`form-status text-accent font-medium uppercase tracking-wider text-xs${error ? ' shown' : ''}`}>
            {error}
          </p>
        </div>
      </form>

      <div className="mt-14 flex flex-col items-start gap-4 text-sm font-semibold uppercase tracking-wider">
        {mode !== 'login' ? (
          <button type="button" className="ul" onClick={() => switchTo('login')}>
            {s.toLogin}
          </button>
        ) : null}
        {mode !== 'register' ? (
          <button type="button" className="ul" onClick={() => switchTo('register')}>
            {s.toRegister}
          </button>
        ) : null}
        {mode === 'login' ? (
          <button type="button" className="ul text-mute" onClick={() => switchTo('forgot')}>
            {s.toForgot}
          </button>
        ) : null}
        {mode === 'forgot' && codeSent ? (
          <button type="button" className="ul text-mute" onClick={() => setCodeSent(false)}>
            {s.newCode}
          </button>
        ) : null}
      </div>
    </div>
  )
}

function Field({ id, label, hint, ...input }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {hint ? <span className="opacity-60 normal-case tracking-normal"> — {hint}</span> : null}
      </label>
      <input id={id} type="text" className="field-input" {...input} />
    </div>
  )
}
