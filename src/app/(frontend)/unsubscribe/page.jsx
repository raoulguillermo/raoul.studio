import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

import clientPromise from '@/lib/mongo'
import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'
import { getNewsletterStrings } from '@/content/newsletter'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Unsubscribe',
  robots: { index: false, follow: false },
}

async function unsubscribe(token) {
  if (!token || token.length < 16) return 'notfound'
  try {
    const client = await clientPromise
    const res = await client
      .db()
      .collection('newsletter_subscribers')
      .updateOne(
        { token },
        { $set: { status: 'unsubscribed', unsubscribedAt: new Date() } },
      )
    return res.matchedCount > 0 ? 'ok' : 'notfound'
  } catch (err) {
    console.error('[unsubscribe] failed:', err?.message || err)
    return 'notfound'
  }
}

export default async function UnsubscribePage({ searchParams }) {
  const sp = await searchParams
  const token = String(sp?.token ?? '')
  const result = await unsubscribe(token)

  const lang = await getLocale()
  const { header, footer, ui } = getContent(lang)
  const s = getNewsletterStrings(lang)

  return (
    <>
      <SiteHeader
        variant="back"
        wordmark={header.wordmark}
        wordmarkHref="/"
        backLabel={ui.back}
        backHref="/"
      />

      <section className="pt-24 md:pt-40 pb-24 md:pb-40">
        <h1 className="r font-display uppercase tracking-tight2 leading-[0.9] text-[clamp(2.5rem,12vw,5rem)] md:text-[8vw]">
          {s.unsubTitle}
          <span className="text-accent">.</span>
        </h1>
        <p className="r mt-8 max-w-2xl text-xl md:text-2xl leading-snug text-ink/80">
          {result === 'ok' ? s.unsubOk : s.unsubFail}
        </p>
        <a
          href="/"
          className="r ul inline-block mt-10 text-sm font-semibold uppercase tracking-wider"
        >
          {s.backHome}
        </a>
      </section>

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />
    </>
  )
}
