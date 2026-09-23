import { notFound } from 'next/navigation'

import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PosterRail from '@/components/PosterRail'
import ContactForm from '@/components/ContactForm'
import { CallDemo, PricingSection, DataPrivacySection } from '@/components/ProductSections'

import { getContent } from '@/content'
import { getLocale, localeAlternates } from '@/content/locale-server'
import {
  productRegistry,
  voiceIndustrySlugs,
  resolveVoiceIndustry,
} from '@/content/products'

// One Voice AI landing page per industry: the problem in that industry's own
// words, then the shared price, AVG section, demo number and form. Aliases
// (/voice-ai/tandarts) serve the same page; the canonical is the base slug.

const PRODUCT = 'voice-ai'

export async function generateMetadata({ params }) {
  const { industry } = await params
  const slug = resolveVoiceIndustry(industry)
  const { voiceIndustries } = getContent(await getLocale())
  const copy = slug && voiceIndustries?.[slug]
  if (!copy) return {}
  return {
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: await localeAlternates(`/${PRODUCT}/${slug}`),
    openGraph: {
      type: 'website',
      title: copy.meta.title,
      description: copy.meta.description,
    },
  }
}

function SectionLabel({ children }) {
  return (
    <p className="r text-mute text-sm mb-8 font-semibold uppercase tracking-wider">
      {children}
    </p>
  )
}

export default async function IndustryPage({ params }) {
  const { industry } = await params
  const slug = resolveVoiceIndustry(industry)
  const lang = await getLocale()
  const {
    products,
    productUi,
    voiceIndustries,
    voiceIndustryUi: t,
    header,
    footer,
    ui,
    contact,
  } = getContent(lang)
  const copy = slug && voiceIndustries?.[slug]
  if (!copy) notFound()

  const product = productRegistry[PRODUCT]
  const base = products[PRODUCT]
  const hasCallDemo = Boolean(product.demoPhone && base.callDemo)
  const others = voiceIndustrySlugs.filter((s) => s !== slug && voiceIndustries[s])

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <SiteHeader
        variant="back"
        wordmark={header.wordmark}
        tagline={header.tagline}
        wordmarkHref="/"
        backLabel={t.backLabel}
        backHref={`/${PRODUCT}`}
      />

      {/* Hero — the problem, in the industry's own words */}
      <section className="pt-16 md:pt-32 pb-8 md:pb-12">
        <div className="r hidden md:block font-semibold uppercase tracking-[.2em] text-xs md:text-sm mb-8 md:mb-12 text-mute">
          {t.eyebrow} · {copy.name}
        </div>
        <h1 className="r pr-16 md:pr-20 hyphens-auto font-display uppercase tracking-tight2 leading-[0.95] text-[clamp(2.25rem,11vw,4.5rem)] md:text-[7vw]">
          {copy.title}
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
            <CallDemo product={product} copy={base} />
            <a
              href="#get-started"
              className="ul text-sm font-semibold uppercase tracking-wider text-ink"
            >
              {base.callDemo.secondary} →
            </a>
          </>
        ) : (
          <a
            href="#get-started"
            className="project-arrow font-display uppercase tracking-tight2 leading-[0.95] text-[clamp(2rem,9vw,3.5rem)] md:text-6xl text-accent"
          >
            {base.primaryCta}{' '}
            <span aria-hidden="true" className="inline-block rotate-[-45deg] ml-2">
              →
            </span>
          </a>
        )}
      </section>

      {/* Pains */}
      <section className="pb-16 md:pb-32 border-t border-ink/15 pt-12 md:pt-20">
        <SectionLabel>{t.painsLabel}</SectionLabel>
        <div className="r grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {copy.pains.map((p, i) => (
            <div key={i} className="border-t-2 border-ink pt-6">
              <p className="font-display uppercase tracking-tight2 text-2xl md:text-3xl leading-[1.05] mb-3">
                {p.title}
              </p>
              <p className="text-base md:text-lg leading-relaxed text-ink/80">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What it does */}
      <section className="pb-16 md:pb-32 border-t border-ink/15 pt-12 md:pt-20">
        <SectionLabel>{t.doesLabel}</SectionLabel>
        <div className="r grid grid-cols-1 md:grid-cols-2 border-t-2 border-l-2 border-ink">
          {copy.does.map((f, i) => (
            <div key={i} className="border-b-2 border-r-2 border-ink p-6 md:p-8">
              <p className="font-display uppercase tracking-tight2 text-2xl md:text-3xl leading-[1.05] mb-3">
                {f.title}
              </p>
              <p className="text-base md:text-lg leading-relaxed text-ink/80">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Example call */}
      <section className="pb-16 md:pb-32 border-t border-ink/15 pt-12 md:pt-20">
        <SectionLabel>{t.callLabel}</SectionLabel>
        <ol className="r max-w-3xl space-y-4 md:space-y-5">
          {copy.call.map((line, i) => {
            const ai = line.who === 'assistant'
            return (
              <li
                key={i}
                className={`flex flex-col ${ai ? 'items-start' : 'items-end text-end'}`}
              >
                <span className="text-[11px] uppercase tracking-[.18em] font-semibold text-mute mb-1">
                  {ai ? t.assistant : t.caller}
                </span>
                <p
                  className={`max-w-[85%] px-5 py-3 text-base md:text-lg leading-snug ${
                    ai ? 'bg-ink text-paper' : 'border-2 border-ink'
                  }`}
                >
                  {line.text}
                </p>
              </li>
            )
          })}
        </ol>
      </section>

      <PricingSection copy={base} />

      <DataPrivacySection copy={base} />

      {/* FAQ */}
      <section className="pb-16 md:pb-32 border-t border-ink/15 pt-12 md:pt-20">
        <SectionLabel>{t.faqLabel}</SectionLabel>
        <div className="r divide-y divide-ink/15 border-t border-ink/15">
          {copy.faq.map((item, i) => (
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

      {/* Get started — the shared Voice AI form, tagged with the industry */}
      <section
        id="get-started"
        className="scroll-mt-24 pb-16 md:pb-24 border-t border-ink/15 pt-12 md:pt-20"
      >
        <SectionLabel>{base.getStarted.label}</SectionLabel>
        <h2 className="r font-display uppercase tracking-tight2 leading-[0.9] text-5xl md:text-8xl mb-6 md:mb-8">
          {base.getStarted.heading}
        </h2>
        <p className="r max-w-2xl text-xl md:text-2xl leading-snug text-ink/85 mb-12 md:mb-16">
          {base.getStarted.body}
        </p>
        {hasCallDemo ? (
          <div className="mb-12 md:mb-16">
            <CallDemo product={product} copy={base} size="small" />
          </div>
        ) : null}
        <ContactForm
          {...productUi.formDefaults}
          {...base.getStarted.form}
          {...ui.form}
          source={`${product.source} · ${slug}`}
        />
        {contact?.directContact ? (
          <p className="r mt-12 md:mt-16 text-sm font-semibold uppercase tracking-wider text-mute">
            {contact.directContact.label}:{' '}
            <a href={`mailto:${contact.directContact.email}`} className="ul text-ink">
              {contact.directContact.email}
            </a>
          </p>
        ) : null}
      </section>

      {/* Other industries */}
      <section className="pb-24 md:pb-40 border-t border-ink/15 pt-12 md:pt-20">
        <SectionLabel>{t.otherLabel}</SectionLabel>
        <ul className="r flex flex-wrap gap-x-8 gap-y-3 font-display uppercase tracking-tight2 text-2xl md:text-4xl">
          {others.map((s) => (
            <li key={s}>
              <a href={`/${PRODUCT}/${s}`} className="ul hover:text-accent transition-colors">
                {voiceIndustries[s].name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />

      <PosterRail middleText={`${t.eyebrow} · ${copy.name}`} />
    </>
  )
}
