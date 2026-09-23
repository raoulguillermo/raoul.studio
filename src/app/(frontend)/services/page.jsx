import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PosterRail from '@/components/PosterRail'

import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'

const SITE_URL = 'https://raoul.studio'

export async function generateMetadata() {
  const { services: page } = getContent(await getLocale())
  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: '/services' },
    openGraph: {
      type: 'website',
      title: page.meta.title,
      description: page.meta.description,
      url: '/services',
    },
  }
}

function pad2(n) {
  return String(n).padStart(2, '0')
}

function SectionLabel({ children }) {
  return (
    <p className="r text-mute text-sm mb-8 font-semibold uppercase tracking-wider">
      {children}
    </p>
  )
}

// Flat, bordered org chart of an agent structure — same visual language as the
// project infographics (ink borders, one accent).
function AgentDiagram({ d }) {
  const node = 'border-2 px-4 py-3 md:px-6 md:py-4 text-center'
  const note = 'mt-1 text-[11px] font-semibold uppercase tracking-[.14em] text-mute'
  const title = 'font-display uppercase tracking-tight2 text-2xl md:text-3xl leading-none'
  const down = (
    <div aria-hidden="true" className="text-center text-2xl leading-none py-2 text-mute">
      ↓
    </div>
  )
  return (
    <figure className="r border-2 border-ink">
      <div className="px-5 py-10 md:px-12 md:py-14 max-w-4xl mx-auto">
        <div className={`${node} border-ink bg-ink text-paper`}>
          <p className={title}>{d.owner}</p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[.14em] text-paper/60">
            {d.ownerNote}
          </p>
        </div>
        {down}
        <div className={`${node} border-accent`}>
          <p className={`${title} text-accent`}>{d.orchestrator}</p>
          <p className={note}>{d.orchestratorNote}</p>
        </div>
        {down}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {d.teams.map((team, i) => (
            <div key={i} className="border-2 border-ink p-3 md:p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-mute mb-3">
                {team.name}
              </p>
              <ul className="space-y-2">
                {team.agents.map((a, j) => (
                  <li
                    key={j}
                    className="border-2 border-ink px-3 py-2 font-semibold uppercase tracking-wide text-[11px] md:text-sm leading-tight flex items-center gap-2"
                  >
                    <span aria-hidden="true" className="inline-block w-2 h-2 bg-accent shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {down}
        <div className={`${node} border-ink border-dashed`}>
          <p className={title}>{d.systems}</p>
          <p className={note}>{d.systemsNote}</p>
        </div>
      </div>
      <figcaption className="flex items-center justify-between border-t-2 border-ink px-5 py-3 md:px-12 text-[11px] font-semibold uppercase tracking-[.18em] text-mute">
        <span>Fig. 01</span>
        <span>{d.caption}</span>
      </figcaption>
    </figure>
  )
}

export default async function ServicesPage() {
  const lang = await getLocale()
  const { services: page, header, footer, posterRail, ui } = getContent(lang)
  const { agents, offer, faq, cta } = page

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.meta.title,
      description: page.meta.description,
      url: `${SITE_URL}/services`,
      inLanguage: lang,
      provider: { '@type': 'Organization', name: 'studio.raoul', url: SITE_URL },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: page.titleLine1,
        itemListElement: [agents.heading, ...offer.items.map((s) => s.title)].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ]

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

      {/* Title */}
      <section className="pt-16 md:pt-32 pb-8 md:pb-12">
        <div className="r hidden md:block font-semibold uppercase tracking-[.2em] text-xs md:text-sm mb-8 md:mb-12 text-mute">
          {page.eyebrow}
        </div>
        <h1 className="r font-display uppercase tracking-tight2 leading-[0.86] text-[clamp(2.5rem,16vw,5rem)] md:text-[11vw]">
          {page.titleLine1}
          <span className="text-accent">{page.titleAccent}</span>
        </h1>
      </section>

      <section className="pb-16 md:pb-32">
        <p className="r max-w-4xl text-2xl md:text-4xl leading-snug font-normal text-ink">
          {page.lead}
        </p>
      </section>

      {/* 01 — Agent structures */}
      <section className="pb-16 md:pb-32 border-t border-ink/15 pt-12 md:pt-20">
        <SectionLabel>{agents.label}</SectionLabel>
        <h2 className="r font-display uppercase tracking-tight2 leading-[0.92] text-4xl md:text-8xl max-w-6xl mb-10 md:mb-14">
          {agents.heading}
        </h2>
        <div className="r max-w-3xl space-y-5 text-lg md:text-2xl leading-snug text-ink/85 mb-12 md:mb-20">
          {agents.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <AgentDiagram d={agents.diagram} />

        <p className="r mt-16 md:mt-24 text-mute text-sm mb-8 font-semibold uppercase tracking-wider">
          {agents.stepsLabel}
        </p>
        <div className="space-y-10 md:space-y-14">
          {agents.steps.map((step, i) => (
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

        <p className="r mt-16 md:mt-24 text-mute text-sm mb-8 font-semibold uppercase tracking-wider">
          {agents.guardrailsLabel}
        </p>
        <div className="r grid grid-cols-1 md:grid-cols-2 border-t-2 border-l-2 border-ink">
          {agents.guardrails.map((g, i) => (
            <div key={i} className="border-b-2 border-r-2 border-ink p-6 md:p-8">
              <p className="font-display uppercase tracking-tight2 text-2xl md:text-3xl leading-[1.05] mb-3">
                {g.title}
              </p>
              <p className="text-base md:text-lg leading-relaxed text-ink/80">{g.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 02 — Everything around it */}
      <section className="pb-16 md:pb-32 border-t border-ink/15 pt-12 md:pt-20">
        <SectionLabel>{offer.label}</SectionLabel>
        <p className="r max-w-3xl text-2xl md:text-4xl leading-snug font-normal text-ink mb-10 md:mb-14">
          {offer.lead}
        </p>
        <div className="r divide-y divide-ink/15 border-t border-ink/15">
          {offer.items.map((s, i) => (
            <article
              key={i}
              className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-y-3 md:gap-x-12 items-baseline"
            >
              <p className="md:col-span-1 text-mute text-base md:text-lg font-medium">{pad2(i + 1)}</p>
              <h3 className="md:col-span-5 font-display uppercase tracking-tight2 leading-[1.05] text-3xl md:text-5xl">
                {s.title}
              </h3>
              <p className="md:col-span-6 max-w-2xl text-base md:text-lg leading-relaxed text-ink/80">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-16 md:pb-32 border-t border-ink/15 pt-12 md:pt-20">
        <SectionLabel>{faq.label}</SectionLabel>
        <div className="r divide-y divide-ink/15 border-t border-ink/15">
          {faq.items.map((item, i) => (
            <article
              key={i}
              className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-12"
            >
              <h3 className="md:col-span-5 font-display uppercase tracking-tight2 leading-[1.05] text-2xl md:text-3xl">
                {item.q}
              </h3>
              <p className="md:col-span-7 max-w-2xl text-base md:text-lg leading-relaxed text-ink/80">
                {item.a}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-40 border-t border-ink/15 pt-12 md:pt-20">
        <h2 className="r font-display uppercase tracking-tight2 leading-[0.9] text-5xl md:text-8xl mb-6 md:mb-8 max-w-6xl">
          {cta.heading}
        </h2>
        <p className="r max-w-2xl text-xl md:text-2xl leading-snug text-ink/85 mb-10 md:mb-14">
          {cta.body}
        </p>
        <a
          href={cta.href}
          className="r project-arrow font-display uppercase tracking-tight2 leading-[0.95] text-[clamp(2rem,9vw,3.5rem)] md:text-6xl text-accent"
        >
          {cta.label}{' '}
          <span aria-hidden="true" className="inline-block rotate-[-45deg] ml-2">
            →
          </span>
        </a>
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
