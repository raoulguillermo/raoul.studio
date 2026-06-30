import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PosterRail from '@/components/PosterRail'

import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'
import { getPosts, getBlogStrings, getPillarLabel } from '@/content/blog'

// Read posts from disk on every request so a newly published file is live
// without a rebuild.
export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const blog = getBlogStrings(await getLocale())
  return {
    title: blog.eyebrow,
    description: blog.lead,
    alternates: { canonical: '/blog' },
  }
}

function formatDate(date, lang) {
  return new Date(date).toLocaleDateString(lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogIndexPage() {
  const lang = await getLocale()
  const { header, footer, posterRail, ui } = getContent(lang)
  const blog = getBlogStrings(lang)
  const posts = getPosts(lang)

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
          {blog.eyebrow}
        </div>
        <h1 className="r font-display uppercase tracking-tight2 leading-[0.86] text-[clamp(2.5rem,16vw,5rem)] md:text-[11vw]">
          {blog.eyebrow}
        </h1>
        <p className="r mt-6 md:mt-10 text-2xl md:text-4xl font-normal leading-snug max-w-4xl text-accent">
          {blog.lead}
        </p>
      </section>

      {/* List */}
      <section className="pb-24 md:pb-40 border-t border-ink/10 pt-8 md:pt-12">
        {posts.length === 0 ? (
          <p className="r text-lg text-mute">{blog.empty}</p>
        ) : (
          <ul className="r divide-y divide-ink/10">
            {posts.map((p) => (
              <li key={p.slug} className="py-8 md:py-10">
                <a href={`/blog/${p.slug}`} className="ul block group">
                  <div className="text-[11px] uppercase tracking-[.18em] mb-3 font-semibold text-mute">
                    {getPillarLabel(p.pillar, lang) ? (
                      <>
                        <span className="text-accent">
                          {getPillarLabel(p.pillar, lang)}
                        </span>{' '}
                        ·{' '}
                      </>
                    ) : null}
                    {formatDate(p.date, lang)}
                  </div>
                  <h2 className="font-display uppercase tracking-tight2 leading-[0.95] text-3xl md:text-6xl">
                    {p.title}
                  </h2>
                  {p.summary ? (
                    <p className="mt-4 text-lg md:text-xl text-ink/75 max-w-3xl">
                      {p.summary}
                    </p>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />

      <PosterRail
        topText={posterRail.topText}
        middleText={blog.eyebrow}
        bottomText={posterRail.bottomText}
      />
    </>
  )
}
