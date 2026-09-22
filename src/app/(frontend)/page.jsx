import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ScrollArrow from '@/components/ScrollArrow'
import ChatFAB from '@/components/ChatFAB'
import PosterRail from '@/components/PosterRail'
import ClientsMarquee from '@/components/ClientsMarquee'

import { getContent } from '@/content'
import { productRegistry, productSlugs } from '@/content/products'
import { getLocale } from '@/content/locale-server'
import { getNewsletterStrings } from '@/content/newsletter'
import NewsletterSignup from '@/components/NewsletterSignup'

export async function generateMetadata() {
  const { home } = getContent(await getLocale())
  return {
    title: home.meta?.title || 'studio.raoul',
    description: home.meta?.description || '',
    alternates: { canonical: '/' },
  }
}

function pad2(n) {
  return String(n).padStart(2, '0')
}

// The service pillars ("What the studio does") are hidden for now. The copy is
// still translated in every locale — flip this back to true to bring them back.
const SHOW_PILLARS = false

export default async function HomePage() {
  const lang = await getLocale()
  const { home, header, footer, posterRail, ui, products, productUi } =
    getContent(lang)

  const news = getNewsletterStrings(lang)

  // Split contact afterLink on a literal "\n" → desktop-only line break
  const afterLinkParts = (home.contact?.afterLink ?? '').split('\n')

  return (
    <>
      <SiteHeader
        variant="cta"
        wordmark={header.wordmark}
        tagline={header.tagline}
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

      {/* What we do — service pillars (hidden, see SHOW_PILLARS) */}
      {SHOW_PILLARS && home.pillars ? (
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

      {/* Software — the studio's own products, one coloured full-bleed row each,
          linking straight to its landing page. Names and colours come from the
          registry, the one-line description from the locale copy, so this needs
          no strings of its own. */}
      <section aria-labelledby="softwareRows">
        <h2
          id="softwareRows"
          className="r text-mute text-sm mb-8 font-semibold uppercase tracking-wider"
        >
          {productUi.softwarePage.eyebrow}
        </h2>
        {productSlugs.map((slug, i) => {
          const product = productRegistry[slug]
          const copy = products[slug]
          return (
            <a
              key={slug}
              href={`/${slug}`}
              aria-label={`${productUi.seeProduct} — ${product.name}`}
              className="group fullbleed block"
              style={{ background: product.colors.bg, color: product.colors.fg }}
            >
              <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-10 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-12 items-baseline">
                  <span
                    aria-hidden="true"
                    className="md:col-span-1 font-display text-2xl md:text-3xl leading-none"
                    style={{ color: product.colors.numeralColor }}
                  >
                    {pad2(i + 1)}
                  </span>
                  <h3 className="md:col-span-5 font-display uppercase tracking-tight2 leading-[0.95] text-4xl md:text-6xl">
                    {product.name}
                  </h3>
                  <p className="md:col-span-5 max-w-xl text-base md:text-lg leading-relaxed opacity-85">
                    {copy.lead}
                  </p>
                  <span
                    aria-hidden="true"
                    className="hidden md:flex md:col-span-1 justify-end text-3xl leading-none"
                  >
                    <span className="inline-block rotate-[-45deg] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </a>
          )
        })}
      </section>

      {/* See all work / services / software — the homepage lists no projects;
          each overview lives on its own page. */}
      {home.featuredWork?.allLabel ? (
        <section className="pt-12 md:pt-24 pb-12 md:pb-40 flex flex-col items-start gap-6 md:gap-10">
          {[
            { href: '/work', label: home.featuredWork.allLabel },
            { href: '/services', label: home.featuredWork.allServicesLabel },
            { href: '/software', label: home.featuredWork.allSoftwareLabel },
          ]
            .filter((l) => l.label)
            .map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="r group inline-flex items-start gap-2 md:gap-6 max-w-full font-display uppercase tracking-tight2 leading-[0.86] text-[clamp(2.75rem,18vw,5.5rem)] md:text-[min(15vw,10rem)]"
              >
                {/* multi-word labels wrap between words; single words never split */}
                <span className="ul min-w-0 break-normal">{l.label}</span>
                <span
                  aria-hidden="true"
                  className="inline-block rotate-[-45deg] text-accent leading-none text-[0.3em] mt-[0.12em] transition-transform group-hover:translate-x-2 group-hover:-translate-y-2"
                >
                  →
                </span>
              </a>
            ))}
        </section>
      ) : null}

      {/* Blog — a large title link, sized like the featured work titles */}
      <section className="fullbleed" style={{ background: '#0F0F0F', color: '#D6D9DC' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-28">
          <a
            href="/blog"
            className="r group inline-flex items-start gap-2 md:gap-6 font-display uppercase tracking-tight2 leading-[0.86] text-[clamp(2.75rem,18vw,5.5rem)] md:text-[min(15vw,10rem)]"
          >
            <span className="ul">{home.blogTitle ?? 'Blog'}</span>
            <span
              aria-hidden="true"
              className="inline-block rotate-[-45deg] text-accent leading-none text-[0.3em] mt-[0.12em] transition-transform group-hover:translate-x-2 group-hover:-translate-y-2"
            >
              →
            </span>
          </a>
        </div>
      </section>

      {/* Clients — a scrolling row of logos, all reduced to one ink silhouette.
          The paper background gives the eye a rest between the black blog band
          and the red newsletter one. */}
      {home.clients ? <ClientsMarquee label={home.clients.label} /> : null}

      {/* Newsletter signup — kept from the former insights block, on a distinct grey section */}
      {news ? (
        <section
          className="fullbleed"
          style={{ background: '#E92316', color: '#D6D9DC' }}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-32">
            <NewsletterSignup strings={news} lang={lang} variant="dark" />
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

      {/* Phone — its own band, like the blog one. The number is set to fill the
          column on a single line; see .phone-line for how it is sized. */}
      {footer.phone ? (
        <section
          className="fullbleed"
          style={{ background: '#0F0F0F', color: '#D6D9DC' }}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-28">
            <a
              href={footer.phoneHref}
              className="r ul phone-line flex items-baseline font-display uppercase tracking-tight2 leading-[0.86]"
            >
              {/* Solid handset rather than an outline: at this size a stroked
                  icon reads far lighter than Anton's stems beside it. */}
              <svg
                className="phone-icon text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>{footer.phone}</span>
            </a>
          </div>
        </section>
      ) : null}

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
      <ScrollArrow label={ui.a11y.scrollToBottom} />
      <ChatFAB href={header.ctaHref} label={ui.a11y.chat} />
    </>
  )
}
