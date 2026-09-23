import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

import { requireUser } from '@/lib/account'
import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'
import { getAccountStrings } from '@/content/account'
import { APPS } from '@/content/apps'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Account',
  robots: { index: false, follow: false },
}

// The signed-in hub: who you are, and the apps on this site you can manage.
export default async function AccountPage() {
  const { user } = await requireUser()
  const lang = await getLocale()
  const { header, footer, ui } = getContent(lang)
  const s = getAccountStrings(lang)
  const name = [user.firstName, user.lastName].filter(Boolean).join(' ')

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
        <h1 className="pr-16 md:pr-20 font-display uppercase tracking-tight2 leading-[0.95] text-[clamp(2.5rem,12vw,5rem)] md:text-[8vw]">
          {s.accountTitle}
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-8 text-mute text-xs font-semibold uppercase tracking-widest">{s.signedInAs}</p>
        <p className="mt-2 text-xl md:text-2xl leading-snug break-words">
          {name ? <span className="font-semibold">{name} · </span> : null}
          {user.email}
        </p>
        <form action="/api/account/logout" method="post" className="mt-6">
          <button type="submit" className="ul text-sm font-semibold uppercase tracking-wider">
            {s.signOut}
          </button>
        </form>
      </section>

      <section className="pb-24 md:pb-40">
        <h2 className="text-mute text-xs font-semibold uppercase tracking-widest">{s.yourApps}</h2>
        <ul className="mt-6 border-t border-ink/15">
          {APPS.map((app) => {
            const a = s.apps[app.slug]
            return (
              <li key={app.slug} className="border-b border-ink/15 py-8 md:py-10 grid gap-4 md:grid-cols-12 md:items-baseline">
                <h3 className="md:col-span-5 font-display uppercase tracking-tight2 leading-none text-4xl md:text-6xl">
                  {a.name}
                </h3>
                <p className="md:col-span-4 text-base md:text-lg leading-relaxed text-ink/80">{a.text}</p>
                <div className="md:col-span-3 flex gap-6 md:justify-end text-sm font-semibold uppercase tracking-wider">
                  <a href={app.billingHref} className="ul text-accent">{a.billing} →</a>
                  <a href={app.pricingHref} className="ul">{a.pricing}</a>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />
    </>
  )
}
