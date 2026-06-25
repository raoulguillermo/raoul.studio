import { notFound } from 'next/navigation'

import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PosterRail from '@/components/PosterRail'
import Infographic from '@/components/Infographic'

import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'
import { projectSlugs } from '@/content/en/projects'

function pad2(n) {
  return String(n).padStart(2, '0')
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const { getProject } = getContent(await getLocale())
  const project = getProject(slug)
  if (!project) return { title: 'Project — raoul.studio' }
  return {
    title: `${project.titlePlain} — raoul.studio`,
    description: project.lead,
  }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const { projects, getProject, header, footer, posterRail, ui } = getContent(
    await getLocale(),
  )
  const project = getProject(slug)
  if (!project) notFound()

  const idx = projects.findIndex((p) => p.slug === slug)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]

  return (
    <>
      <SiteHeader
        variant="back"
        wordmark={header.wordmark}
        wordmarkHref="/"
        backLabel={ui.back}
        backHref="/"
      />

      {/* Meta + title */}
      <section className="pt-16 md:pt-32 pb-8 md:pb-12">
        <div className="r font-semibold uppercase tracking-[.2em] text-xs md:text-sm mb-8 md:mb-12 text-mute">
          {ui.projectLabel} {pad2(project.number)} · {project.year}
        </div>
        <h1 className="r font-display uppercase tracking-tight2 leading-[0.86] text-[clamp(2.5rem,16vw,5rem)] md:text-[11vw]">
          {project.titleLine1}
          {project.titleLine2 ? (
            <>
              <br />
              {project.titleLine2Color ? (
                <span style={{ color: project.titleLine2Color }}>
                  {project.titleLine2}
                </span>
              ) : (
                project.titleLine2
              )}
            </>
          ) : null}
        </h1>
      </section>

      {/* Lead */}
      <section className="pb-16 md:pb-24">
        <p className="r text-2xl md:text-4xl font-normal leading-snug max-w-4xl text-accent">
          {project.lead}
        </p>
      </section>

      {/* Info grid */}
      <section className="r pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-ink/10 pt-8 md:pt-12">
        {(project.info ?? []).map((row, i) => (
          <div key={i}>
            <div className="text-[11px] uppercase tracking-[.18em] mb-2 font-semibold text-mute">
              {row.label}
            </div>
            <div className="text-base md:text-lg font-medium">{row.value}</div>
          </div>
        ))}
      </section>

      {/* Infographic */}
      <Infographic slug={project.slug} number={project.number} />

      {/* Body */}
      <section className="pb-24 md:pb-40">
        <div className="r text-base md:text-xl leading-relaxed max-w-3xl text-ink/85 space-y-5">
          {(project.body ?? []).map((p, i) => (
            <p key={i}>{p.text}</p>
          ))}
        </div>
      </section>

      {/* Prev / Next */}
      <section className="pb-16 md:pb-24 border-t border-ink/10 pt-8 md:pt-10 flex items-center justify-between text-sm font-semibold uppercase tracking-wider">
        <a
          href={`/projects/${prev.slug}`}
          className="back-link text-mute hover:text-ink transition-colors"
        >
          <span>←</span> {prev.titlePlain}
        </a>
        <a
          href={`/projects/${next.slug}`}
          className="back-link text-mute hover:text-ink transition-colors"
          style={{ flexDirection: 'row-reverse' }}
        >
          <span style={{ transform: 'rotate(180deg)' }}>←</span>{' '}
          {next.titlePlain}
        </a>
      </section>

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />

      <PosterRail
        topText={posterRail.topText}
        middleText={project.titlePlain}
        bottomText={posterRail.bottomText}
      />
    </>
  )
}
