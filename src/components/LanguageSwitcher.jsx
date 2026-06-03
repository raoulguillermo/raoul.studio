'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import {
  LOCALES,
  LOCALE_NAMES,
  LOCALE_CODES,
  LOCALE_COOKIE,
} from '@/content/i18n'

// Icon-only trigger (sized like the hamburger) that opens a full-page popover
// matching the menu's look — dark panel, big menu-style type, current language
// highlighted. Selecting one writes the cookie and refreshes in place.
export default function LanguageSwitcher({ currentLang = 'en' }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  function choose(lang) {
    setOpen(false)
    if (lang === currentLang) return
    document.cookie = `${LOCALE_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`
    router.refresh()
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Change language"
        className="lang-toggle fixed right-5 md:right-6 top-20 md:top-[92px] z-[60] w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-transparent border-0 outline-none"
      >
        <GlobeIcon />
      </button>

      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Language"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[56] bg-ink text-paper transition-opacity duration-500 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="h-full max-w-[1500px] mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-12 flex flex-col overflow-y-auto">
          <p className="text-paper/50 uppercase text-xs font-semibold tracking-widest mb-12 md:mb-20">
            Language
          </p>

          <nav className="flex-1 content-start">
            <ul className="font-display uppercase tracking-tight2 text-4xl md:text-7xl leading-[1] space-y-1">
              {LOCALES.map((lang) => {
                const active = lang === currentLang
                return (
                  <li key={lang}>
                    <button
                      type="button"
                      onClick={() => choose(lang)}
                      aria-current={active ? 'true' : undefined}
                      className={`menu-link text-left ${
                        active ? 'text-accent' : ''
                      }`}
                    >
                      {LOCALE_NAMES[lang]}
                      <span className="align-middle ml-3 md:ml-4 font-sans text-base md:text-xl font-medium tracking-normal text-paper/40">
                        {LOCALE_CODES[lang]}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

function GlobeIcon() {
  return (
    <svg
      className="w-7 h-7 md:w-8 md:h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
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
