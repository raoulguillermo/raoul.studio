'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import {
  LOCALES,
  LOCALE_NAMES,
  LOCALE_CODES,
  LOCALE_COOKIE,
} from '@/content/i18n'

// Sits just below the hamburger (fixed, top-right). Globe glyph + current
// language code; click opens a small dropdown. Selecting a language writes the
// cookie and refreshes the server components in place.
export default function LanguageSwitcher({ currentLang = 'en' }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return
    function onPointer(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  function choose(lang) {
    setOpen(false)
    if (lang === currentLang) return
    document.cookie = `${LOCALE_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`
    router.refresh()
  }

  return (
    <div
      ref={rootRef}
      className="fixed right-5 md:right-6 top-[72px] md:top-[84px] z-[60]"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="flex items-center gap-1.5 rounded-full border border-ink/15 bg-paper/80 backdrop-blur px-3 h-9 text-ink text-xs font-semibold uppercase tracking-wider hover:border-ink/40 transition-colors"
      >
        <GlobeIcon />
        <span>{LOCALE_CODES[currentLang]}</span>
        <span
          className={`inline-block text-[8px] leading-none transition-transform ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 min-w-[148px] rounded-lg border border-ink/15 bg-paper shadow-lg overflow-hidden"
        >
          {LOCALES.map((lang) => {
            const active = lang === currentLang
            return (
              <li key={lang} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => choose(lang)}
                  className={`flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-sm transition-colors hover:bg-ink/[0.04] ${
                    active ? 'text-accent font-semibold' : 'text-ink'
                  }`}
                >
                  <span>{LOCALE_NAMES[lang]}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-mute">
                    {LOCALE_CODES[lang]}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

function GlobeIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" />
    </svg>
  )
}
