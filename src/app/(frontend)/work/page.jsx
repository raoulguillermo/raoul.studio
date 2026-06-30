import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PosterRail from '@/components/PosterRail'

import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'

export async function generateMetadata() {
  const { pages } = getContent(await getLocale())
  const page = pages.work
  return {
    title: page.meta?.title || `${page.titleLine1} — raoul.studio`,
    description: page.meta?.description || '',
  }
}

function pad2(n) {
  return String(n).padStart(2, '0')
}

export default async function WorkPage() {
  const { pages, header, footer, posterRail, ui, projects } = getContent(
    await getLocale(),
  )
  const page = pages.work
  const railMiddle = page.posterRailMiddle || posterRail.middleText

  const Row = (p) => (
    <a
      key={p.slug}
      href={`/projects/${p.slug}`}
      className="work-row group r block border-b border-ink/15 py-8 md:py-12 transition-colors hover:bg-ink/[0.03]"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-12 items-baseline">
        <div className="md:col-span-1 font-display text-2xl md:text-3xl leading-none text-accent">
          {pad2(p.number)}
        </div>
        <div className="md:col-span-5">
          <h2 className="font-display uppercase tracking-tight2 leading-[0.95] text-4xl md:text-6xl group-hover:text-accent transition-colors">
            {p.titlePlain}
          </h2>
          <p className="mt-2 text-[11px] uppercase tracking-[.18em] font-semibold text-mute">
            {p.shortTag} · {p.year} · {p.status}
          </p>
        </div>
        <div className="md:col-span-5 max-w-xl text-base md:text-lg leading-relaxed text-ink/80">
          {p.shortDescription}
        </div>
        <div className="hidden md:flex md:col-span-1 justify-end">
          <span className="inline-block rotate-[-45deg] text-3xl leading-none text-mute group-hover:text-accent transition-colors">
            →
          </span>
        </div>
      </div>
    </a>
  )

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
      </section>

      {/* Lead */}
      {page.lead ? (
        <section className="pb-16 md:pb-24">
          <p className="r max-w-3xl text-2xl md:text-4xl leading-snug font-normal text-ink/85">
            {page.lead}
          </p>
        </section>
      ) : null}

      {/* Project list — single flat list */}
      <section className="pb-24 md:pb-40 border-t border-ink/15">
        {projects.map((p) => Row(p))}
      </section>

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />

      <PosterRail
        topText={posterRail.topText}
        middleText={railMiddle}
        bottomText={posterRail.bottomText}
      />
    </>
  )
}
