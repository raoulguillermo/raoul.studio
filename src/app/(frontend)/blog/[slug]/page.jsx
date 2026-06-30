import { notFound } from 'next/navigation'

import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PosterRail from '@/components/PosterRail'
import BlogImage from '@/components/BlogImage'

import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'
import { getPost, getPosts, getBlogStrings, getPillarLabel } from '@/content/blog'

export const dynamic = 'force-dynamic'

function formatDate(date, lang) {
  return new Date(date).toLocaleDateString(lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug, await getLocale())
  if (!post) return { title: 'Blog — raoul.studio' }
  return { title: post.title, description: post.summary }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const lang = await getLocale()
  const { header, footer, posterRail, ui } = getContent(lang)
  const blog = getBlogStrings(lang)
  const post = getPost(slug, lang)
  if (!post) notFound()
  const pillarLabel = getPillarLabel(post.pillar, lang)

  // Prev / next within the chronological list (newest first).
  const posts = getPosts(lang)
  const idx = posts.findIndex((p) => p.slug === slug)
  const prev = idx > 0 ? posts[idx - 1] : null
  const next = idx < posts.length - 1 ? posts[idx + 1] : null

  return (
    <>
      <SiteHeader
        variant="back"
        wordmark={header.wordmark}
        wordmarkHref="/"
        backLabel={blog.eyebrow}
        backHref="/blog"
      />

      {/* Meta + title */}
      <section className="pt-16 md:pt-32 pb-8 md:pb-12">
        <div className="r font-semibold uppercase tracking-[.2em] text-xs md:text-sm mb-8 md:mb-12 text-mute">
          {pillarLabel ? (
            <span className="text-accent">{pillarLabel}</span>
          ) : (
            blog.eyebrow
          )}{' '}
          · {formatDate(post.date, lang)}
        </div>
        <h1 className="r font-display uppercase tracking-tight2 leading-[0.86] text-[clamp(2.25rem,12vw,4.5rem)] md:text-[8vw]">
          {post.title}
        </h1>
      </section>

      {/* Summary */}
      {post.summary ? (
        <section className="pb-12 md:pb-20">
          <p className="r text-2xl md:text-4xl font-normal leading-snug max-w-4xl text-accent">
            {post.summary}
          </p>
        </section>
      ) : null}

      {/* Source image (subtle, hides itself if the URL is broken) */}
      {post.image?.url ? (
        <section className="pb-4 md:pb-8 max-w-3xl">
          <BlogImage src={post.image.url} alt={post.image.alt} credit={post.image.credit} />
        </section>
      ) : null}

      {/* Key facts — a subtle flat infographic card */}
      {post.keyFacts?.length ? (
        <section className="pb-12 md:pb-16">
          <div className="r border-2 border-ink max-w-3xl">
            <div className="text-[11px] uppercase tracking-[.2em] font-semibold text-mute border-b-2 border-ink px-5 py-3">
              {blog.keyFacts}
            </div>
            <dl className="divide-y divide-ink/10">
              {post.keyFacts.map((f, i) => (
                <div key={i} className="flex items-baseline gap-4 px-5 py-3">
                  <dt className="font-display uppercase tracking-tight2 leading-none text-2xl md:text-3xl text-accent whitespace-nowrap">
                    {f.value}
                  </dt>
                  <dd className="text-sm md:text-base text-ink/80 leading-snug">
                    {f.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      {/* Body */}
      <section className="pb-16 md:pb-24">
        <div className="r text-base md:text-xl leading-relaxed max-w-3xl text-ink/85 space-y-5">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* Sources */}
      {post.sources.length > 0 ? (
        <section className="r pb-16 md:pb-24 border-t border-ink/10 pt-8 md:pt-12">
          <div className="text-[11px] uppercase tracking-[.18em] mb-5 font-semibold text-mute">
            {blog.sources}
          </div>
          <ul className="space-y-3 max-w-3xl">
            {post.sources.map((s, i) => (
              <li key={i} className="text-base md:text-lg">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ul break-words text-ink/85"
                >
                  {s.title || s.url}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Prev / Next */}
      {prev || next ? (
        <section className="pb-16 md:pb-24 border-t border-ink/10 pt-8 md:pt-10 flex items-center justify-between gap-6 text-sm font-semibold uppercase tracking-wider">
          {prev ? (
            <a
              href={`/blog/${prev.slug}`}
              className="back-link text-mute hover:text-ink transition-colors"
            >
              <span>←</span> {prev.title}
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a
              href={`/blog/${next.slug}`}
              className="back-link text-mute hover:text-ink transition-colors"
              style={{ flexDirection: 'row-reverse' }}
            >
              <span style={{ transform: 'rotate(180deg)' }}>←</span> {next.title}
            </a>
          ) : (
            <span />
          )}
        </section>
      ) : null}

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />

      <PosterRail
        topText={posterRail.topText}
        middleText={post.title}
        bottomText={posterRail.bottomText}
      />
    </>
  )
}
