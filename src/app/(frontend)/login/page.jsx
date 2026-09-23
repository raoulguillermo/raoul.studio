import { redirect } from 'next/navigation'

import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import AuthForm from '@/components/AuthForm'

import { getUser } from '@/lib/account'
import { safeNext } from '@/lib/session'
import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'
import { getAccountStrings } from '@/content/account'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Sign in',
  robots: { index: false, follow: false },
}

// Site-wide sign-in, shared by every app hosted here. ?next= is where to go
// afterwards; ?mode=register or ?mode=forgot opens that form directly.
export default async function LoginPage({ searchParams }) {
  const sp = await searchParams
  const next = safeNext(sp?.next)
  if (await getUser()) redirect(next)

  const lang = await getLocale()
  const { header, footer, ui } = getContent(lang)
  const s = getAccountStrings(lang)
  const mode = ['register', 'forgot'].includes(sp?.mode) ? sp.mode : 'login'

  return (
    <>
      <SiteHeader
        variant="back"
        wordmark={header.wordmark}
        tagline={header.tagline}
        wordmarkHref="/"
        backLabel={ui.back}
        backHref="/"
      />

      <section className="pt-24 md:pt-40 pb-24 md:pb-40">
        <AuthForm s={s} next={next} initialMode={mode} />
      </section>

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />
    </>
  )
}
