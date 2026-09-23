import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'
import { getAccountStrings } from '@/content/account'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Checkout canceled · Poofy Events',
  robots: { index: false, follow: false },
}

// Stripe's return URL when someone backs out of checkout: ?teamId=…
export default async function CheckoutCancel({ searchParams }) {
  const sp = await searchParams
  const teamId = String(sp?.teamId ?? '')
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
        <h1 className="pr-16 md:pr-20 hyphens-auto font-display uppercase tracking-tight2 leading-[0.95] text-[clamp(2.5rem,12vw,5rem)] md:text-[8vw]">
          {s.cancelTitle}
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-snug text-ink/80">{s.cancelText}</p>
        <a href={billingHref} className="ul inline-block mt-10 text-sm font-semibold uppercase tracking-wider">
          {s.toBilling} →
        </a>
      </section>

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />
    </>
  )
}
