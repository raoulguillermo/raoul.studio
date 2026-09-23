import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

import { getPrices } from '@/lib/poofy'
import { getContent } from '@/content'
import { getLocale, localeAlternates } from '@/content/locale-server'
import { getAccountStrings, formatMoney } from '@/content/account'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const s = getAccountStrings(await getLocale())
  return {
    title: s.pricingTitle,
    description: s.pricingIntro,
    alternates: await localeAlternates('/poofy-events'),
  }
}

// Subscriptions show the monthly price with the yearly one under it; passes
// are one-off. Amounts come from poofy-plus-api, never from this file.
const PLANS = [
  { key: 'pro', main: 'pro_monthly', alt: 'pro_yearly' },
  { key: 'agency', main: 'agency_monthly', alt: 'agency_yearly' },
  { key: 'event_pass', main: 'event_pass' },
  { key: 'season_pass', main: 'season_pass' },
]

export default async function PoofyEventsPricing() {
  const lang = await getLocale()
  const { header, footer, ui } = getContent(lang)
  const s = getAccountStrings(lang)
  const prices = await getPrices()

  const suffix = (p) => (p.interval === 'month' ? s.perMonth : p.interval === 'year' ? s.perYear : s.oneOff)

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

      <section className="pt-24 md:pt-40 pb-16 md:pb-24">
        <h1 className="r pr-16 md:pr-20 font-display uppercase tracking-tight2 leading-[0.95] text-[clamp(2.5rem,12vw,5rem)] md:text-[8vw]">
          {s.pricingTitle}
          <span className="text-accent">.</span>
        </h1>
        <p className="r mt-8 max-w-2xl text-xl md:text-2xl leading-snug text-ink/80">{s.pricingIntro}</p>
      </section>

      <section className="pb-24 md:pb-40">
        {prices ? (
          <ul className="grid gap-px bg-ink/15 border border-ink/15 md:grid-cols-2 xl:grid-cols-4">
            {PLANS.map(({ key, main, alt }) => {
              const plan = s.plans[key]
              const p = prices[main]
              const y = alt && prices[alt]
              if (!p) return null
              return (
                <li key={key} className="r bg-paper p-6 md:p-8 flex flex-col">
                  <h2 className="font-display uppercase tracking-tight2 leading-none text-4xl md:text-5xl">
                    {plan.name}
                  </h2>
                  {plan.text ? <p className="mt-3 text-base leading-relaxed text-ink/80">{plan.text}</p> : null}
                  <p className="mt-8 flex items-baseline gap-2 flex-wrap">
                    <span className="font-display text-5xl md:text-6xl leading-none">
                      {formatMoney(p.amount, p.currency, lang)}
                    </span>
                    <span className="text-mute text-sm font-semibold uppercase tracking-wider">{suffix(p)}</span>
                  </p>
                  {y ? (
                    <p className="mt-2 text-sm text-ink/70">
                      {s.yearly}: {formatMoney(y.amount, y.currency, lang)} {s.perYear}
                    </p>
                  ) : null}
                  <ul className="mt-6 space-y-2 text-base leading-snug text-ink/80 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span aria-hidden="true" className="text-accent">—</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/poofy-events/billing"
                    className="mt-8 self-start ul text-sm font-semibold uppercase tracking-wider text-accent"
                  >
                    {s.getStarted} →
                  </a>
                </li>
              )
            })}
          </ul>
        ) : (
          <p className="text-xl text-ink/80">{s.pricesUnavailable}</p>
        )}
        <p className="mt-6 text-mute text-xs font-semibold uppercase tracking-widest">{s.pricingNote}</p>
      </section>

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />
    </>
  )
}
