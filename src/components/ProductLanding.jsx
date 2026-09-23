import { notFound } from 'next/navigation'

import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PosterRail from '@/components/PosterRail'
import Infographic from '@/components/Infographic'
import { CallDemo, PricingSection, DataPrivacySection, ContactOptions } from '@/components/ProductSections'

import { getContent } from '@/content'
import { getLocale, localeAlternates } from '@/content/locale-server'
import { productRegistry, voiceIndustrySlugs } from '@/content/products'

const SITE_URL = 'https://raoul.studio'

function pad2(n) {
  return String(n).padStart(2, '0')
}

// Shared metadata for the /voice-ai, /no-cms and /poofy routes.
export async function productMetadata(slug) {
  const { products } = getContent(await getLocale())
  const copy = products[slug]
  if (!copy) return {}
  return {
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: await localeAlternates(`/${slug}`),
    openGraph: {
      type: 'website',
      title: copy.meta.title,
      description: copy.meta.description,
      url: `/${slug}`,
    },
  }
}

function buildJsonLd({ product, copy, lang }) {
  const url = `${SITE_URL}/${product.slug}`
  const provider = { '@type': 'Organization', name: 'studio.raoul', url: SITE_URL }
  const main =
    product.schemaType === 'SoftwareApplication'
      ? {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: copy.titlePlain || copy.titleLine1,
          description: copy.meta.description,
          url,
          applicationCategory: 'ProductivityApplication',
          operatingSystem: 'iOS, macOS',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
          downloadUrl: product.appStoreUrl,
          inLanguage: lang,
          author: provider,
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: copy.meta.title,
          description: copy.meta.description,
          url,
          inLanguage: lang,
          provider,
          areaServed: 'EU',
        }
  const faqItems = copy.faq?.items ?? []
  const faq = faqItems.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null
  return [main, faq].filter(Boolean)
}

function SectionLabel({ children }) {
  return (
    <p className="r text-mute text-sm mb-8 font-semibold uppercase tracking-wider">
      {children}
    </p>
  )
}

export default async function ProductLanding({ slug }) {
  const lang = await getLocale()
  const {
    products,
    getProject,
    header,
    footer,
    posterRail,
    ui,
    infographics,
    contact,
    voiceIndustries,
  } = getContent(lang)
  const product = productRegistry[slug]
  const copy = products[slug]
  if (!product || !copy) notFound()

  const caseStudy = getProject(product.caseStudySlug)
  const caseStudyHref = `/projects/${product.caseStudySlug}`
  const primaryHref = product.cta === 'appstore' ? product.appStoreUrl : '#get-started'
  const jsonLd = buildJsonLd({ product, copy, lang })
  const hasCallDemo = Boolean(product.demoPhone && copy.callDemo)
  // Industry pages (Voice AI): the use-case list links to one page per branche.
  const industries =
    product.industryPages && voiceIndustries
      ? voiceIndustrySlugs
          .filter((s) => voiceIndustries[s])
          .map((s) => ({ label: voiceIndustries[s].name, href: `/${slug}/${s}` }))
      : null
  const useCaseItems = industries ?? (copy.useCases?.items ?? []).map((label) => ({ label }))

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
      <SiteHeader
        variant="back"
        wordmark={header.wordmark}
        tagline={header.tagline}
        wordmarkHref="/"
        backLabel={ui.back}
        backHref="/"
      />

      {/* Hero */}
      <section className="pt-16 md:pt-32 pb-8 md:pb-12">
        <div className="r hidden md:block font-semibold uppercase tracking-[.2em] text-xs md:text-sm mb-8 md:mb-12 text-mute">
          {copy.eyebrow}
        </div>
        <h1 className="r pr-16 md:pr-20 hyphens-auto font-display uppercase tracking-tight2 leading-[0.95] text-[clamp(2.5rem,16vw,5rem)] md:text-[11vw]">
          {copy.titleLine1}
          {copy.titleLine2 ? (
            <>
              <br />
              <span className="text-accent">{copy.titleLine2}</span>
            </>
          ) : (
            <span className="text-accent">.</span>
          )}
        </h1>
      </section>

      <section className="pb-12 md:pb-16">
        <p className="r text-2xl md:text-4xl font-normal leading-snug max-w-4xl text-ink">
          {copy.lead}
        </p>
      </section>

      <section className="r pb-16 md:pb-24 flex flex-wrap items-baseline gap-x-10 gap-y-6">
        {hasCallDemo ? (
          <>
            <CallDemo product={product} copy={copy} />
            <a
              href="#get-started"
              className="ul text-sm font-semibold uppercase tracking-wider text-ink"
            >
              {copy.callDemo.secondary} →
            </a>
          </>
        ) : (
        <a
          href={primaryHref}
          {...(product.cta === 'appstore' ? { rel: 'noopener' } : {})}
          className="project-arrow font-display uppercase tracking-tight2 leading-[0.95] text-[clamp(2rem,9vw,3.5rem)] md:text-6xl text-accent"
        >
          {copy.primaryCta}{' '}
          <span aria-hidden="true" className="inline-block rotate-[-45deg] ml-2">
            →
          </span>
        </a>
        )}
        {caseStudy ? (
          <a
            href={caseStudyHref}
            className="ul text-sm font-semibold uppercase tracking-wider text-mute hover:text-ink"
          >
            {copy.caseStudyCta} →
          </a>
        ) : null}
      </section>

      {/* Highlights */}
      <section className="r pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-ink/10 pt-8 md:pt-12">
        {(copy.highlights ?? []).map((row, i) => (
          <div key={i}>
            <div className="text-[11px] uppercase tracking-[.18em] mb-2 font-semibold text-mute">
              {row.label}
            </div>
            <div className="text-base md:text-lg font-medium">{row.value}</div>
          </div>
        ))}
      </section>

      {/* Reuse the case study's figure */}
      {caseStudy ? (
        <Infographic
          slug={caseStudy.slug}
          number={caseStudy.number}
          strings={infographics}
        />
      ) : null}

      {/* Problem */}
      {copy.problem ? (
        <section className="pb-16 md:pb-32 border-t border-ink/15 pt-12 md:pt-20">
          <SectionLabel>{copy.problem.label}</SectionLabel>
          <h2 className="r font-display uppercase tracking-tight2 leading-[0.95] text-4xl md:text-7xl max-w-5xl mb-8 md:mb-12">
            {copy.problem.heading}
          </h2>
          <div className="r max-w-3xl space-y-5 text-base md:text-xl leading-relaxed text-ink/85">
            {copy.problem.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      ) : null}

      {/* How it works */}
      {copy.steps?.items?.length ? (
        <section className="pb-16 md:pb-32 border-t border-ink/15 pt-12 md:pt-20">
          <SectionLabel>{copy.steps.label}</SectionLabel>
          <div className="space-y-10 md:space-y-14">
            {copy.steps.items.map((step, i) => (
              <article
                key={i}
                className="r grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-12 border-t border-ink/15 pt-8 md:pt-10"
              >
                <div className="md:col-span-4 flex items-baseline gap-4 md:block">
                  <p className="font-display text-5xl md:text-7xl leading-none text-accent">
                    {pad2(i + 1)}
                  </p>
                  <p className="md:mt-4 font-display uppercase tracking-tight2 text-3xl md:text-4xl leading-[1.05]">
                    {step.title}
                  </p>
                </div>
                <p className="md:col-span-8 max-w-2xl text-lg md:text-2xl leading-snug text-ink/85">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {/* Features */}
      {copy.features?.items?.length ? (
        <section className="pb-16 md:pb-32 border-t border-ink/15 pt-12 md:pt-20">
          <SectionLabel>{copy.features.label}</SectionLabel>
          <div className="r grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-2 border-l-2 border-ink">
            {copy.features.items.map((f, i) => (
              <div key={i} className="border-b-2 border-r-2 border-ink p-6 md:p-8">
                <p className="font-display uppercase tracking-tight2 text-2xl md:text-3xl leading-[1.05] mb-3">
                  {f.title}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-ink/80">{f.body}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Use cases */}
      {useCaseItems.length ? (
        <section className="pb-16 md:pb-32 border-t border-ink/15 pt-12 md:pt-20">
          <SectionLabel>{copy.useCases.label}</SectionLabel>
          {copy.useCases.lead ? (
            <p className="r max-w-3xl text-2xl md:text-4xl leading-snug font-normal text-ink mb-10 md:mb-14">
              {copy.useCases.lead}
            </p>
          ) : null}
          <ul className="r font-display uppercase tracking-tight2 leading-[1.05] text-3xl md:text-6xl space-y-3 md:space-y-4">
            {useCaseItems.map((item, i) => (
              <li key={i} className="flex items-baseline gap-4 md:gap-6">
                <span className="text-mute text-base md:text-lg font-sans font-medium normal-case tracking-normal w-10 md:w-14 shrink-0">
                  {pad2(i + 1)}
                </span>
                {item.href ? (
                  <a href={item.href} className="group inline-flex items-baseline gap-3 hover:text-accent transition-colors">
                    <span className="ul">{item.label}</span>
                    <span aria-hidden="true" className="inline-block rotate-[-45deg] text-accent text-[0.6em] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">→</span>
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <PricingSection copy={copy} />

      {/* References — clients this was built for */}
      {copy.references?.items?.length ? (
        <section className="pb-16 md:pb-32 border-t border-ink/15 pt-12 md:pt-20">
          <SectionLabel>{copy.references.label}</SectionLabel>
          {copy.references.lead ? (
            <p className="r max-w-3xl text-2xl md:text-4xl leading-snug font-normal text-ink mb-10 md:mb-14">
              {copy.references.lead}
            </p>
          ) : null}
          <div className="r divide-y divide-ink/15 border-t border-ink/15">
            {copy.references.items.map((ref, i) => {
              const meta = product.references?.[i] ?? {}
              const name = (
                <span className="font-display uppercase tracking-tight2 leading-[0.95] text-3xl md:text-5xl">
                  {meta.name}
                </span>
              )
              return (
                <article
                  key={i}
                  className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-y-3 md:gap-x-12 items-baseline"
                >
                  <div className="md:col-span-5">
                    {meta.href ? (
                      <a
                        href={meta.href}
                        {...(meta.href.startsWith('http')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="ul hover:text-accent transition-colors"
                      >
                        {name}
                      </a>
                    ) : (
                      name
                    )}
                    <p className="mt-2 text-[11px] uppercase tracking-[.18em] font-semibold text-mute">
                      {ref.sector}
                    </p>
                  </div>
                  <p className="md:col-span-7 max-w-2xl text-base md:text-lg leading-relaxed text-ink/80">
                    {ref.body}
                  </p>
                </article>
              )
            })}
          </div>
        </section>
      ) : null}

      <DataPrivacySection copy={copy} />

      {/* FAQ */}
      {copy.faq?.items?.length ? (
        <section className="pb-16 md:pb-32 border-t border-ink/15 pt-12 md:pt-20">
          <SectionLabel>{copy.faq.label}</SectionLabel>
          <div className="r divide-y divide-ink/15 border-t border-ink/15">
            {copy.faq.items.map((item, i) => (
              <details key={i} className="group">
                <summary className="py-8 md:py-10 flex items-start justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display uppercase tracking-tight2 leading-[1.05] text-2xl md:text-3xl">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="shrink-0 mt-1 text-accent text-3xl md:text-4xl leading-none transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="-mt-2 md:-mt-4 pb-8 md:pb-10 max-w-3xl text-base md:text-lg leading-relaxed text-ink/80">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {/* Get started */}
      <section
        id="get-started"
        className="scroll-mt-24 pb-24 md:pb-40 border-t border-ink/15 pt-12 md:pt-20"
      >
        <SectionLabel>{copy.getStarted.label}</SectionLabel>
        <h2 className="r font-display uppercase tracking-tight2 leading-[0.9] text-5xl md:text-8xl mb-6 md:mb-8">
          {copy.getStarted.heading}
        </h2>
        <p className="r max-w-2xl text-xl md:text-2xl leading-snug text-ink/85 mb-12 md:mb-16">
          {copy.getStarted.body}
        </p>

        {product.cta === 'appstore' ? (
          <div className="r border-2 border-ink px-5 py-8 md:px-12 md:py-10">
            <a
              href={product.appStoreUrl}
              rel="noopener"
              className="project-arrow font-display uppercase tracking-tight2 leading-[0.95] text-[clamp(2rem,9vw,3.5rem)] md:text-6xl text-accent"
            >
              {copy.primaryCta}{' '}
              <span aria-hidden="true" className="inline-block rotate-[-45deg] ml-2">
                →
              </span>
            </a>
            {copy.getStarted.appStoreMeta ? (
              <div className="mt-4 text-[11px] uppercase tracking-[.18em] font-semibold text-mute">
                {copy.getStarted.appStoreMeta}
              </div>
            ) : null}
          </div>
        ) : (
          <ContactOptions
            product={product}
            copy={copy}
            phone={footer.phone}
            phoneHref={footer.phoneHref}
            callLabel={ui.a11y.call}
            emailLabel={contact?.directContact?.label}
            email={contact?.directContact?.email}
          />
        )}
      </section>

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />

      <PosterRail
        topText={posterRail.topText}
        middleText={copy.posterRailMiddle || posterRail.middleText}
        bottomText={posterRail.bottomText}
      />
    </>
  )
}
