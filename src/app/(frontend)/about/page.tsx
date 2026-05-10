import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import type { Metadata } from 'next'
import config from '@/payload.config'

import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PosterRail from '@/components/PosterRail'

export const dynamic = 'force-dynamic'

async function fetchAboutPage() {
  const payload = await getPayload({ config: await config })
  const res = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'about' } },
    limit: 1,
  })
  return res.docs[0]
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchAboutPage()
  if (!page) return { title: 'About — raoul.studio' }
  return {
    title: page.meta?.title || `${page.titleLine1} — raoul.studio`,
    description: page.meta?.description || '',
  }
}

function pad2(n: number) {
  return String(n).padStart(2, '0')
}

export default async function AboutPage() {
  const page = await fetchAboutPage()
  if (!page) notFound()

  const payload = await getPayload({ config: await config })
  const [header, footer, posterRail] = await Promise.all([
    payload.findGlobal({ slug: 'header' }),
    payload.findGlobal({ slug: 'footer' }),
    payload.findGlobal({ slug: 'posterRail' }),
  ])

  const railMiddle = page.posterRailMiddle || posterRail.middleText
  const intro = page.intro ?? []
  const services = page.services ?? []

  return (
    <>
      <SiteHeader
        variant="back"
        wordmark={header.wordmark}
        wordmarkHref="/"
        backLabel="Back"
        backHref="/"
      />

      {/* Title */}
      <section className="pt-16 md:pt-32 pb-8 md:pb-12">
        <div className="r font-semibold uppercase tracking-[.2em] text-xs md:text-sm mb-8 md:mb-12 text-mute">
          {page.eyebrow}
        </div>
        <h1 className="r font-display uppercase tracking-tight2 leading-[0.86] text-[16vw] md:text-[11vw]">
          {page.titleLine1}
          {page.titleAccent ? (
            <span className="text-accent">{page.titleAccent}</span>
          ) : null}
        </h1>
      </section>

      {/* Intro */}
      {intro.length > 0 ? (
        <section className="pb-16 md:pb-32">
          <div className="r max-w-3xl space-y-6 md:space-y-8 text-xl md:text-2xl leading-relaxed text-ink/85 font-medium">
            {intro.map((p, i) => (
              <p key={p.id ?? i}>{p.text}</p>
            ))}
          </div>
        </section>
      ) : null}

      {/* Services */}
      {services.length > 0 ? (
        <section id="services" className="scroll-mt-24 pb-16 md:pb-32">
          {page.servicesLabel ? (
            <p className="r text-mute text-sm mb-8 font-semibold uppercase tracking-wider">
              {page.servicesLabel}
            </p>
          ) : null}
          <ul className="r text-3xl md:text-6xl font-display uppercase tracking-tight2 leading-[1.05] space-y-3 md:space-y-4">
            {services.map((s, i) => (
              <li key={s.id ?? i} className="flex items-baseline gap-4 md:gap-6">
                <span className="text-mute text-base md:text-lg font-sans font-medium normal-case tracking-normal w-10 md:w-14 shrink-0">
                  {pad2(i + 1)}
                </span>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Systems paragraph */}
      {page.systemsParagraph ? (
        <section className="pb-16 md:pb-32">
          <p className="r max-w-3xl text-2xl md:text-4xl leading-snug font-normal text-ink">
            {page.systemsParagraph}
          </p>
        </section>
      ) : null}

      {/* Manifesto */}
      {page.manifestoLead || page.manifestoTail ? (
        <section id="manifesto" className="scroll-mt-24 pb-24 md:pb-40">
          <p className="r font-display uppercase tracking-tight2 leading-[1.02] text-4xl md:text-7xl">
            {page.manifestoLead}
            {page.manifestoTail ? (
              <>
                <br />
                <span className="text-accent">{page.manifestoTail}</span>
              </>
            ) : null}
          </p>
        </section>
      ) : null}

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />

      <PosterRail
        topText={posterRail.topText}
        middleText={railMiddle}
        bottomText={posterRail.bottomText}
      />
    </>
  )
}
