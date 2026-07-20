import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ScrollArrow from '@/components/ScrollArrow'
import ChatFAB from '@/components/ChatFAB'
import PosterRail from '@/components/PosterRail'

import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'
import { getPosts, getPillarLabel } from '@/content/blog'
import { getNewsletterStrings } from '@/content/newsletter'
import NewsletterSignup from '@/components/NewsletterSignup'

export async function generateMetadata() {
  const { home } = getContent(await getLocale())
  return {
    title: home.meta?.title || 'raoul.studio',
    description: home.meta?.description || '',
    alternates: { canonical: '/' },
  }
}

function pad2(n) {
  return String(n).padStart(2, '0')
}

// Featured-teaser palettes (brand: red #E92316, ink #0F0F0F, paper #D6D9DC).
// Applied by position so the homepage's featured projects always alternate —
// no two adjacent sections share a background, regardless of each project's
// own canonical colours (which still drive /work and the case-study pages).
const FEATURED_STYLES = [
  { bg: '#0F0F0F', fg: '#D6D9DC', numeralColor: '#E92316', numeralOpacity: 0.18 }, // dark
  { bg: '#E92316', fg: '#D6D9DC', numeralColor: '#0F0F0F', numeralOpacity: 0.16 }, // red
  { bg: '#D6D9DC', fg: '#0F0F0F', numeralColor: '#E92316', numeralOpacity: 0.14 }, // light
  { bg: '#E92316', fg: '#0F0F0F', numeralColor: '#0F0F0F', numeralOpacity: 0.14 }, // red / ink text
]

function formatDate(date, lang) {
  return new Date(date).toLocaleDateString(lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function HomePage() {
  const lang = await getLocale()
  const { home, header, footer, posterRail, ui, projects } = getContent(lang)

  // Featured projects: the homepage shows only a few, with transformation-led
  // messaging; the full portfolio lives on /work. Each featured item carries its
  // own tagline + proof metrics and borrows the project's colours/number/title.
  const featured = (home.featuredWork?.items ?? [])
    .map((it) => ({ ...it, project: projects.find((p) => p.slug === it.slug) }))
    .filter((it) => it.project)

  // Insights: the three most recent articles.
  const insightsPosts = home.insights ? getPosts(lang).slice(0, 3) : []
  const news = getNewsletterStrings(lang)

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

      {/* What we do — service pillars */}
      {home.pillars ? (
        <section className="pb-12 md:pb-40">
          <p className="r text-mute text-sm mb-8 font-semibold uppercase tracking-wider">
            {home.pillars.label}
          </p>
          <div className="r grid grid-cols-1 md:grid-cols-2 md:gap-x-16 border-t-2 border-ink">
            {home.pillars.items.map((it, i) => (
              <div
                key={i}
                className="flex items-baseline gap-4 md:gap-6 border-b border-ink/15 py-6 md:py-8"
              >
                <span className="font-display text-2xl md:text-3xl leading-none text-accent shrink-0">
                  {pad2(i + 1)}
                </span>
                <div>
                  <h3 className="font-display uppercase tracking-tight2 leading-[0.95] text-3xl md:text-4xl">
                    {it.title}
                  </h3>
                  <p className="mt-2 max-w-md text-base md:text-lg leading-relaxed text-ink/80">
                    {it.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Selected work — a few featured projects, transformation-led */}
      {home.featuredWork ? (
        <section className="pb-8 md:pb-16">
          <p className="r text-mute text-sm mb-6 font-semibold uppercase tracking-wider">
            {home.featuredWork.label}
          </p>
          {home.featuredWork.lead ? (
            <p className="r max-w-3xl text-3xl md:text-5xl font-display uppercase tracking-tight2 leading-[1.04]">
              {home.featuredWork.lead}
            </p>
          ) : null}
        </section>
      ) : null}

      {/* Featured project teasers */}
      {featured.map(({ project: p, tagline, metrics }, i) => {
        const s = FEATURED_STYLES[i % FEATURED_STYLES.length]
        const numeralColor = s.numeralColor || s.fg
        const numeralOpacity = s.numeralOpacity
        return (
          <section
            key={p.slug}
            className="fullbleed parallax-section min-h-screen md:min-h-[140vh]"
            style={{
              background: s.bg,
              color: s.fg,
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
            <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-32 min-h-screen md:min-h-[140vh] flex flex-col justify-between gap-8 md:gap-24">
              <div
                data-parallax="0.18"
                className="flex items-center justify-between font-semibold uppercase tracking-wider text-sm"
              >
                <span>{ui.projectLabel} {pad2(p.number)}</span>
                <span>{p.year}</span>
              </div>
              <div>
                <h2
                  data-parallax="-0.12"
                  data-parallax-anchor="title"
                  className="font-display uppercase tracking-tight2 leading-[0.86] text-[clamp(2.75rem,18vw,5.5rem)] md:text-[15vw]"
                >
                  <a href={`/projects/${p.slug}`} className="ul inline-block">
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
                  </a>
                </h2>
                <p className="mt-8 md:mt-12 text-xl md:text-3xl max-w-2xl font-normal leading-snug">
                  {tagline || p.shortDescription}
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
                className="flex flex-wrap gap-2 md:gap-3 items-end"
              >
                {(metrics ?? []).map((m, i) => (
                  <span
                    key={i}
                    className="border border-current rounded-full px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-semibold uppercase tracking-wider"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* See all work */}
      {home.featuredWork?.allLabel ? (
        <section className="pt-12 md:pt-24 pb-12 md:pb-40">
          <a
            href="/work"
            className="r group inline-flex items-center gap-3 font-display uppercase tracking-tight2 text-3xl md:text-5xl"
          >
            <span className="ul">{home.featuredWork.allLabel}</span>
            <span className="inline-block rotate-[-45deg] text-2xl md:text-4xl text-accent transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </section>
      ) : null}

      {/* Insights — three most recent articles, on a distinct teal section.
          Ink text, not paper: paper on this teal is only 1.89:1, ink is 7.16:1. */}
      {home.insights && insightsPosts.length > 0 ? (
        <section
          className="fullbleed"
          style={{ background: '#65AAA4', color: '#0F0F0F' }}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-32">
            <div className="r flex items-end justify-between gap-6 mb-8 md:mb-12">
              <div>
                <p className="text-sm mb-3 font-semibold uppercase tracking-wider opacity-60">
                  {home.insights.label}
                </p>
                {home.insights.lead ? (
                  <p className="max-w-2xl text-2xl md:text-4xl font-normal leading-snug">
                    {home.insights.lead}
                  </p>
                ) : null}
              </div>
              {home.insights.allLabel ? (
                <a
                  href="/blog"
                  className="ul hidden md:inline-block shrink-0 text-sm font-semibold uppercase tracking-wider whitespace-nowrap"
                >
                  {home.insights.allLabel}
                </a>
              ) : null}
            </div>
            <ul className="r border-t border-current/20 divide-y divide-current/15">
              {insightsPosts.map((post) => {
                const pillar = getPillarLabel(post.pillar, lang)
                return (
                  <li key={post.slug} className="py-6 md:py-8">
                    <a href={`/blog/${post.slug}`} className="block group">
                      <div className="text-[11px] uppercase tracking-[.18em] mb-2 font-semibold opacity-60">
                        {pillar ? (
                          <>
                            <span className="text-accent">{pillar}</span> ·{' '}
                          </>
                        ) : null}
                        {formatDate(post.date, lang)}
                      </div>
                      <h3 className="font-display uppercase tracking-tight2 leading-[0.98] text-2xl md:text-4xl group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      {post.summary ? (
                        <p className="mt-2 max-w-3xl text-base md:text-lg opacity-70">
                          {post.summary}
                        </p>
                      ) : null}
                    </a>
                  </li>
                )
              })}
            </ul>
            {home.insights.allLabel ? (
              <a
                href="/blog"
                className="md:hidden ul inline-block mt-8 text-sm font-semibold uppercase tracking-wider"
              >
                {home.insights.allLabel}
              </a>
            ) : null}
            <div className="r mt-12 md:mt-16 border-t border-current/20 pt-10 md:pt-14">
              <NewsletterSignup strings={news} lang={lang} variant="light" />
            </div>
          </div>
        </section>
      ) : null}

      {/* Contact */}
      <section className="pt-16 md:pt-32 pb-12 md:pb-40">
        <p className="r text-mute text-sm mb-6 font-semibold uppercase tracking-wider">
          {home.contact.eyebrow}
        </p>
        <p className="r text-4xl md:text-7xl font-display uppercase tracking-tight2 leading-[1.02] break-words">
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

      <SiteFooter
        leftText={footer.leftText}
        rightText={footer.rightText}
        phone={footer.phone}
        phoneHref={footer.phoneHref}
      />

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
