import { getPayload } from 'payload'
import type { Metadata } from 'next'
import config from '@/payload.config'

import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ScrollArrow from '@/components/ScrollArrow'
import ChatFAB from '@/components/ChatFAB'
import PosterRail from '@/components/PosterRail'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: await config })
  const home = await payload.findGlobal({ slug: 'home' })
  return {
    title: home.meta?.title || 'raoul.studio',
    description: home.meta?.description || '',
  }
}

function pad2(n: number) {
  return String(n).padStart(2, '0')
}

export default async function HomePage() {
  const payload = await getPayload({ config: await config })

  const [header, home, footer, posterRail, projectsRes] = await Promise.all([
    payload.findGlobal({ slug: 'header' }),
    payload.findGlobal({ slug: 'home' }),
    payload.findGlobal({ slug: 'footer' }),
    payload.findGlobal({ slug: 'posterRail' }),
    payload.find({
      collection: 'projects',
      limit: 50,
      sort: 'number',
    }),
  ])

  const projects = projectsRes.docs

  // Split contact afterLink on a literal "\n" → desktop-only line break
  const afterLinkParts = (home.contact?.afterLink ?? '').split('\n')

  return (
    <>
      <SiteHeader
        variant="cta"
        wordmark={header.wordmark}
        wordmarkHref={header.wordmarkHref}
        ctaLabel={header.ctaLabel}
        ctaHref={header.ctaHref}
      />

      {/* Hero */}
      <section className="parallax-section pt-24 md:pt-40 pb-24 md:pb-40">
        <h1
          data-parallax="-0.18"
          className="r font-display uppercase tracking-tight2 leading-[0.88] text-[14vw] md:text-[10.5vw]"
        >
          {home.hero.prefix}{' '}
          <span
            className="text-paper"
            style={{
              background:
                'linear-gradient(to bottom, transparent 10%, #E92316 10%, #E92316 90%, transparent 90%)',
              padding: '0 0.04em',
              boxDecorationBreak: 'clone',
              WebkitBoxDecorationBreak: 'clone',
            }}
          >
            {home.hero.accent}
          </span>{' '}
          {home.hero.suffix}
        </h1>
      </section>

      {/* Intro */}
      <section className="max-w-2xl pb-12 md:pb-40">
        <p className="r text-xl md:text-2xl leading-relaxed text-ink/85 font-semibold">
          {home.intro}
        </p>
      </section>

      {/* Selected work */}
      <section className="pb-12 md:pb-40">
        <p className="r text-mute text-sm mb-8 font-semibold uppercase tracking-wider">
          {home.selectedWorkLabel}
        </p>
        <ul className="r text-4xl md:text-7xl font-display uppercase tracking-tight2 leading-[1.05] space-y-3 md:space-y-4">
          {projects.map((p: any) => (
            <li key={p.id}>
              <a href={`/projects/${p.slug}`} className="ul">
                {p.titlePlain}
              </a>{' '}
              <span className="text-mute text-base md:text-lg align-middle ml-3 font-sans font-medium normal-case tracking-normal">
                — {p.shortTag}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Project teasers */}
      {projects.map((p: any) => {
        const numeralColor = p.colors?.numeralColor || p.colors?.fg
        const numeralOpacity = p.colors?.numeralOpacity ?? 0.1
        return (
          <section
            key={p.id}
            className="fullbleed parallax-section min-h-screen md:min-h-[140vh]"
            style={{
              background: p.colors?.bg,
              color: p.colors?.fg,
            }}
          >
            <span
              aria-hidden="true"
              data-parallax="0.7"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display leading-none select-none whitespace-nowrap"
              style={{
                fontSize: '78vw',
                opacity: numeralOpacity,
                color: numeralColor,
              }}
            >
              {pad2(p.number)}
            </span>
            <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-12 py-12 md:py-32 min-h-screen md:min-h-[140vh] flex flex-col justify-between gap-8 md:gap-24">
              <div
                data-parallax="0.18"
                className="flex items-center justify-between font-semibold uppercase tracking-wider text-sm"
              >
                <span>Project № {pad2(p.number)}</span>
                <span>{p.year}</span>
              </div>
              <div>
                <h2
                  data-parallax="-0.12"
                  data-parallax-anchor="title"
                  className="font-display uppercase tracking-tight2 leading-[0.86] text-[18vw] md:text-[15vw]"
                >
                  {p.titleLine1}
                  {p.titleLine2 ? (
                    <>
                      <br />
                      {p.titleLine2Color ? (
                        <span style={{ color: p.titleLine2Color }}>
                          {p.titleLine2}
                        </span>
                      ) : (
                        p.titleLine2
                      )}
                    </>
                  ) : null}
                </h2>
                <p className="mt-8 md:mt-12 text-xl md:text-3xl max-w-2xl font-normal leading-snug">
                  {p.shortDescription}
                </p>
                <a
                  href={`/projects/${p.slug}`}
                  className="project-arrow inline-flex items-center justify-center mt-3 md:mt-4 w-14 h-14 md:w-20 md:h-20 border-l-2 border-b-2 border-current rounded-bl-[5px] hover:opacity-65 transition-opacity"
                >
                  <span className="inline-block rotate-[-45deg] text-3xl md:text-5xl leading-none">
                    →
                  </span>
                </a>
              </div>
              <div
                data-parallax="-0.18"
                className="flex flex-wrap gap-y-4 items-end justify-between font-semibold uppercase tracking-wider text-sm"
              >
                <span>{p.tagsLine}</span>
              </div>
            </div>
          </section>
        )
      })}

      {/* Spacer */}
      <div className="h-12 md:h-40"></div>

      {/* Contact */}
      <section className="pb-12 md:pb-40">
        <p className="r text-mute text-sm mb-6 font-semibold uppercase tracking-wider">
          {home.contact.eyebrow}
        </p>
        <p className="r text-4xl md:text-7xl font-display uppercase tracking-tight2 leading-[1.02]">
          {home.contact.beforeLink}
          <a href={home.contact.linkHref} className="ul text-mute">
            {home.contact.linkLabel}
          </a>
          {afterLinkParts.map((part, i) => (
            <span key={i}>
              {i > 0 ? <br className="hidden md:block" /> : null}
              {part}
            </span>
          ))}
        </p>
      </section>

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />

      <PosterRail
        topText={posterRail.topText}
        middleText={posterRail.middleText}
        bottomText={posterRail.bottomText}
      />
      <ScrollArrow />
      <ChatFAB href={header.ctaHref} />
    </>
  )
}
