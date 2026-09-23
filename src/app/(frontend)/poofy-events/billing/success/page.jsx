import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import CheckoutStatus from '@/components/CheckoutStatus'

import { requireUser } from '@/lib/account'
import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'
import { getAccountStrings } from '@/content/account'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Thank you · Poofy Events',
  robots: { index: false, follow: false },
}

// Stripe's return URL after a paid checkout: ?teamId=…&session_id=cs_…
export default async function CheckoutSuccess({ searchParams }) {
  await requireUser()
  const sp = await searchParams
  const teamId = String(sp?.teamId ?? '')
  const sessionId = String(sp?.session_id ?? '')
  const lang = await getLocale()
  const { header, footer, ui } = getContent(lang)
  const s = getAccountStrings(lang)
  const billingHref = `/poofy-events/billing${teamId ? `?teamId=${encodeURIComponent(teamId)}` : ''}`

  return (
    <>
      <SiteHeader
        variant="back"
        wordmark={header.wordmark}
        tagline={header.tagline}
        wordmarkHref="/"
        backLabel={ui.back}
        backHref={billingHref}
      />

      <section className="pt-24 md:pt-40 pb-24 md:pb-40">
        <h1 className="pr-16 md:pr-20 font-display uppercase tracking-tight2 leading-[0.95] text-[clamp(2.5rem,12vw,5rem)] md:text-[8vw]">
          {s.successTitle}
          <span className="text-accent">.</span>
        </h1>
        {teamId && sessionId ? (
          <CheckoutStatus
            teamId={teamId}
            sessionId={sessionId}
            waiting={s.successWaiting}
            done={s.successDone}
            slow={s.successSlow}
          />
        ) : (
          <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-snug text-ink/80">{s.successSlow}</p>
        )}
        <a href={billingHref} className="ul inline-block mt-10 text-sm font-semibold uppercase tracking-wider">
          {s.toBilling} →
        </a>
      </section>

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />
    </>
  )
}
