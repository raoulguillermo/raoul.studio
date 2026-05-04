import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import type { Metadata } from 'next'
import config from '@/payload.config'

import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PosterRail from '@/components/PosterRail'

function pad2(n: number) {
  return String(n).padStart(2, '0')
}

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  const payload = await getPayload({ config: await config })
  const res = await payload.find({
    collection: 'projects',
    limit: 100,
    pagination: false,
  })
  return res.docs.map((p: any) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config: await config })
  const res = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  const project: any = res.docs[0]
  if (!project) return { title: 'Project — raoul.studio' }
  return {
    title: `${project.titlePlain} — raoul.studio`,
    description: project.lead,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const payload = await getPayload({ config: await config })

  const [header, footer, posterRail, allRes, oneRes] = await Promise.all([
    payload.findGlobal({ slug: 'header' }),
    payload.findGlobal({ slug: 'footer' }),
    payload.findGlobal({ slug: 'posterRail' }),
    payload.find({
      collection: 'projects',
      sort: 'number',
      limit: 100,
      pagination: false,
    }),
    payload.find({
      collection: 'projects',
      where: { slug: { equals: slug } },
      limit: 1,
    }),
  ])

  const project: any = oneRes.docs[0]
  if (!project) notFound()

  const all = allRes.docs as any[]
  const idx = all.findIndex((p) => p.slug === slug)
  const prev = all[(idx - 1 + all.length) % all.length]
  const next = all[(idx + 1) % all.length]

  return (
    <>
      <SiteHeader
        variant="back"
        wordmark={header.wordmark}
        wordmarkHref="/"
        backLabel="Back"
        backHref="/"
      />

      {/* Meta + title */}
      <section className="pt-16 md:pt-32 pb-8 md:pb-12">
        <div className="r font-semibold uppercase tracking-[.2em] text-xs md:text-sm mb-8 md:mb-12 text-mute">
          Project № {pad2(project.number)} · {project.year}
        </div>
        <h1 className="r font-display uppercase tracking-tight2 leading-[0.86] text-[16vw] md:text-[11vw]">
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
        {(project.info ?? []).map((row: any, i: number) => (
          <div key={i}>
            <div className="text-[11px] uppercase tracking-[.18em] mb-2 font-semibold text-mute">
              {row.label}
            </div>
            <div className="text-base md:text-lg font-medium">{row.value}</div>
          </div>
        ))}
      </section>

      {/* Body */}
      <section className="pb-24 md:pb-40">
        <div className="r text-base md:text-xl leading-relaxed max-w-3xl text-ink/85 space-y-5">
          {(project.body ?? []).map((p: any, i: number) => (
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
