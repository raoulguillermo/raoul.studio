import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PosterRail from '@/components/PosterRail'

import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'

export async function generateMetadata() {
  const { pages } = getContent(await getLocale())
  const page = pages.privacy
  return {
    title: page.meta?.title || `${page.titleLine1} — raoul.studio`,
    description: page.meta?.description || '',
  }
}

export default async function PrivacyPage() {
  const { pages, header, footer, posterRail, ui } = getContent(await getLocale())
  const page = pages.privacy
  const railMiddle = page.posterRailMiddle || posterRail.middleText
  const sections = page.sections ?? []

  return (
    <>
      <SiteHeader
        variant="back"
        wordmark={header.wordmark}
        wordmarkHref="/"
        backLabel={ui.back}
        backHref="/"
      />

      {/* Title */}
      <section className="pt-16 md:pt-32 pb-8 md:pb-12">
        <div className="r font-semibold uppercase tracking-[.2em] text-xs md:text-sm mb-8 md:mb-12 text-mute">
          {page.eyebrow}
        </div>
        <h1 className="r font-display uppercase tracking-tight2 leading-[0.86] text-[clamp(2.5rem,16vw,5rem)] md:text-[11vw]">
          {page.titleLine1}
          {page.titleAccent ? (
            <span className="text-accent">{page.titleAccent}</span>
          ) : null}
        </h1>
        {page.updated ? (
          <p className="r mt-6 md:mt-8 text-mute text-sm font-semibold uppercase tracking-wider">
            {page.updated}
          </p>
        ) : null}
      </section>

      {/* Intro */}
      {page.intro ? (
        <section className="pb-16 md:pb-24">
          <p className="r max-w-3xl text-2xl md:text-4xl leading-snug font-normal text-ink/85">
            {page.intro}
          </p>
        </section>
      ) : null}

      {/* Sections */}
      {sections.length > 0 ? (
        <section className="pb-16 md:pb-24">
          <div className="r divide-y divide-ink/15 border-t border-ink/15">
            {sections.map((sec, i) => (
              <article
                key={i}
                className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-12"
              >
                <h2 className="md:col-span-4 font-display uppercase tracking-tight2 leading-[1.05] text-2xl md:text-3xl">
                  {sec.heading}
                </h2>
                <div className="md:col-span-8 max-w-2xl space-y-4 text-base md:text-lg leading-relaxed text-ink/80">
                  {(sec.body ?? []).map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {(sec.points ?? []).length > 0 ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {sec.points.map((pt, j) => (
                        <li key={j}>{pt}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {/* Direct contact */}
      {page.directEmail ? (
        <section className="pb-16 md:pb-24 border-t border-ink/10 pt-8 md:pt-12 flex flex-wrap gap-y-6 items-baseline justify-between text-sm font-semibold uppercase tracking-wider text-mute">
          <span>{page.directLabel}</span>
          <a
            href={`mailto:${page.directEmail}`}
            className="text-ink ul break-all"
          >
            {page.directEmail}
          </a>
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
