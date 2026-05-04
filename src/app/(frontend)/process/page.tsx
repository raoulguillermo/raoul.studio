import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import type { Metadata } from 'next'
import config from '@/payload.config'

import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PosterRail from '@/components/PosterRail'

async function fetchProcessPage() {
  const payload = await getPayload({ config: await config })
  const res = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'process' } },
    limit: 1,
  })
  return res.docs[0]
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchProcessPage()
  if (!page) return { title: 'Process — raoul.studio' }
  return {
    title: page.meta?.title || `${page.titleLine1} — raoul.studio`,
    description: page.meta?.description || '',
  }
}

function pad2(n: number) {
  return String(n).padStart(2, '0')
}

export default async function ProcessPage() {
  const page = await fetchProcessPage()
  if (!page) notFound()

  const payload = await getPayload({ config: await config })
  const [header, footer, posterRail] = await Promise.all([
    payload.findGlobal({ slug: 'header' }),
    payload.findGlobal({ slug: 'footer' }),
    payload.findGlobal({ slug: 'posterRail' }),
  ])

  const railMiddle = page.posterRailMiddle || posterRail.middleText
  const steps = page.steps ?? []
  const howWeWorkPoints = page.howWeWork?.points ?? []

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

      {/* Lead */}
      {page.lead ? (
        <section className="pb-16 md:pb-32">
          <p className="r max-w-3xl text-2xl md:text-4xl leading-snug font-normal text-ink/85">
            {page.lead}
          </p>
        </section>
      ) : null}

      {/* Steps */}
      {steps.length > 0 ? (
        <section id="steps" className="scroll-mt-24 pb-16 md:pb-32 space-y-12 md:space-y-20">
          {steps.map((step, i) => {
            const body = step.body ?? []
            return (
              <article
                key={step.id ?? i}
                className="r grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-12 border-t border-ink/15 pt-8 md:pt-12"
              >
                <div className="md:col-span-3">
                  <p className="font-display text-5xl md:text-7xl leading-none text-accent">
                    {pad2(i + 1)}
                  </p>
                  <p className="mt-3 md:mt-4 font-display uppercase tracking-tight2 text-3xl md:text-4xl leading-[1.05]">
                    {step.title}
                  </p>
                </div>
                <div className="md:col-span-9 max-w-2xl">
                  <p className="text-xl md:text-2xl font-medium leading-snug text-ink mb-4 md:mb-6">
                    {step.lead}
                  </p>
                  <div className="space-y-3 md:space-y-4 text-base md:text-lg leading-relaxed text-ink/80">
                    {body.map((p, j) => (
                      <p key={p.id ?? j}>{p.text}</p>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </section>
      ) : null}

      {/* How we work */}
      {page.howWeWork &&
      (page.howWeWork.label ||
        page.howWeWork.lead ||
        howWeWorkPoints.length > 0 ||
        page.howWeWork.closing) ? (
        <section
          id="how-we-work"
          className="scroll-mt-24 pb-24 md:pb-40 border-t border-ink/15 pt-12 md:pt-20"
        >
          {page.howWeWork.label ? (
            <p className="r text-mute text-sm mb-8 font-semibold uppercase tracking-wider">
              {page.howWeWork.label}
            </p>
          ) : null}
          {page.howWeWork.lead ? (
            <p className="r max-w-3xl text-2xl md:text-4xl leading-snug font-normal text-ink mb-10 md:mb-14">
              {page.howWeWork.lead}
            </p>
          ) : null}
          {howWeWorkPoints.length > 0 ? (
            <ul className="r font-display uppercase tracking-tight2 leading-[1.05] text-3xl md:text-6xl space-y-3 md:space-y-4 mb-10 md:mb-14">
              {howWeWorkPoints.map((p, i) => (
                <li key={p.id ?? i} className="flex items-baseline gap-4 md:gap-6">
                  <span className="text-mute text-base md:text-lg font-sans font-medium normal-case tracking-normal w-10 md:w-14 shrink-0">
                    {pad2(i + 1)}
                  </span>
                  <span>{p.label}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {page.howWeWork.closing ? (
            <p className="r max-w-3xl text-xl md:text-2xl leading-snug font-medium text-ink/85">
              {page.howWeWork.closing}
            </p>
          ) : null}
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
