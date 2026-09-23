import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PosterRail from '@/components/PosterRail'

import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'
import { productRegistry, productSlugs } from '@/content/products'

export async function generateMetadata() {
  const { productUi } = getContent(await getLocale())
  const page = productUi.softwarePage
  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: '/software' },
  }
}

function pad2(n) {
  return String(n).padStart(2, '0')
}

// Overview of the studio's own products; each row links to its landing page.
// Same row style as /work.
export default async function SoftwarePage() {
  const { products, productUi, header, footer, posterRail, ui } = getContent(
    await getLocale(),
  )
  const page = productUi.softwarePage

  return (
    <>
      <SiteHeader
        variant="back"
        wordmark={header.wordmark}
        tagline={header.tagline}
        wordmarkHref="/"
        backLabel={ui.back}
        backHref="/"
      />

      <section className="pt-16 md:pt-32 pb-8 md:pb-12">
        <div className="r hidden md:block font-semibold uppercase tracking-[.2em] text-xs md:text-sm mb-8 md:mb-12 text-mute">
          {page.eyebrow}
        </div>
        <h1 className="r font-display uppercase tracking-tight2 leading-[0.86] text-[clamp(2.5rem,16vw,5rem)] md:text-[11vw]">
          {page.titleLine1}
          <span className="text-accent">{page.titleAccent}</span>
        </h1>
      </section>

      <section className="pb-16 md:pb-24">
        <p className="r max-w-3xl text-2xl md:text-4xl leading-snug font-normal text-ink/85">
          {page.lead}
        </p>
      </section>

      <section className="pb-24 md:pb-40 border-t border-ink/15">
        {productSlugs.map((slug, i) => {
          const product = productRegistry[slug]
          const copy = products[slug]
          return (
            <a
              key={slug}
              href={`/${slug}`}
              aria-label={`${page.openLabel} ${product.name}`}
              className="work-row group r block border-b border-ink/15 py-8 md:py-12 transition-colors hover:bg-ink/[0.03]"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-12 items-baseline">
                <div className="md:col-span-1 font-display text-2xl md:text-3xl leading-none text-accent">
                  {pad2(i + 1)}
                </div>
                <div className="md:col-span-5">
                  <h2 className="font-display uppercase tracking-tight2 leading-[0.95] text-4xl md:text-6xl group-hover:text-accent transition-colors">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-[11px] uppercase tracking-[.18em] font-semibold text-mute">
                    {(copy.highlights ?? []).map((h) => h.value).join(' · ')}
                  </p>
                </div>
                <div className="md:col-span-5 max-w-xl text-base md:text-lg leading-relaxed text-ink/80">
                  {copy.lead}
                </div>
                <div className="hidden md:flex md:col-span-1 justify-end">
                  <span className="inline-block rotate-[-45deg] text-3xl leading-none text-mute group-hover:text-accent transition-colors">
                    →
                  </span>
                </div>
              </div>
            </a>
          )
        })}
      </section>

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />

      <PosterRail
        topText={posterRail.topText}
        middleText={page.posterRailMiddle || posterRail.middleText}
        bottomText={posterRail.bottomText}
      />
    </>
  )
}
