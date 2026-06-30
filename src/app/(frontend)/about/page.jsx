import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PosterRail from '@/components/PosterRail'

import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'

export async function generateMetadata() {
  const { pages } = getContent(await getLocale())
  const page = pages.about
  return {
    title: page.meta?.title || `${page.titleLine1} — raoul.studio`,
    description: page.meta?.description || '',
  }
}

function pad2(n) {
  return String(n).padStart(2, '0')
}

// Render a paragraph, wrapping an optional `highlight` substring in the accent
// colour so a key phrase stands out inside the intro copy.
function withHighlight(text, highlight) {
  if (!highlight) return text
  const idx = text.indexOf(highlight)
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-accent">{highlight}</span>
      {text.slice(idx + highlight.length)}
    </>
  )
}

export default async function AboutPage() {
  const { pages, header, footer, posterRail, ui } = getContent(await getLocale())
  const page = pages.about
  const railMiddle = page.posterRailMiddle || posterRail.middleText
  const intro = page.intro ?? []
  const services = page.services ?? []
  const person = page.person
  const whyMe = page.whyMe

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
          {page.eyebrow}
        </div>
        <h1 className="r font-display uppercase tracking-tight2 leading-[0.86] text-[clamp(2.5rem,16vw,5rem)] md:text-[11vw]">
          {page.titleLine1}
          {page.titleAccent ? (
            <span className="text-accent">{page.titleAccent}</span>
          ) : null}
        </h1>
      </section>

      {/* Intro */}
      {intro.length > 0 ? (
        <section className="pb-16 md:pb-32">
          <div className="r max-w-3xl space-y-6 md:space-y-8 text-xl md:text-2xl leading-relaxed text-ink/85 font-medium">
            {intro.map((p, i) => (
              <p key={i}>{withHighlight(p.text, p.highlight)}</p>
            ))}
          </div>
        </section>
      ) : null}

      {/* Who you work with — the person */}
      {person ? (
        <section id="person" className="scroll-mt-24 pb-16 md:pb-32">
          {person.eyebrow ? (
            <p className="r text-mute text-sm mb-8 font-semibold uppercase tracking-wider">
              {person.eyebrow}
            </p>
          ) : null}
          <div className="r grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Portrait or monogram tile */}
            <div className="md:col-span-4">
              <div className="aspect-square w-full max-w-xs border-2 border-ink overflow-hidden flex items-center justify-center bg-ink/[0.03]">
                {person.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="block w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-display uppercase tracking-tight2 leading-none text-[28vw] md:text-[9vw] text-accent select-none">
                    {person.monogram}
                  </span>
                )}
              </div>
            </div>
            {/* Name, role, bio, links */}
            <div className="md:col-span-8">
              <h2 className="font-display uppercase tracking-tight2 leading-[0.9] text-4xl md:text-6xl">
                {person.name}
              </h2>
              <p className="mt-3 text-[11px] uppercase tracking-[.18em] font-semibold text-mute">
                {person.role}
                {person.location ? ` · ${person.location}` : ''}
              </p>
              {Array.isArray(person.bio) && person.bio.length > 0 ? (
                <div className="mt-6 md:mt-8 space-y-5 text-lg md:text-xl leading-relaxed text-ink/85 max-w-2xl">
                  {person.bio.map((p, i) => (
                    <p key={i}>{p.text}</p>
                  ))}
                </div>
              ) : null}
              {Array.isArray(person.links) && person.links.length > 0 ? (
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-wider">
                  {person.linksLabel ? (
                    <span className="text-mute">{person.linksLabel}</span>
                  ) : null}
                  {person.links.map((l, i) => (
                    <a
                      key={i}
                      href={l.href}
                      target={l.href?.startsWith('http') ? '_blank' : undefined}
                      rel={l.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="ul"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* Why me, not an agency */}
      {whyMe ? (
        <section id="why-me" className="scroll-mt-24 pb-16 md:pb-32">
          {whyMe.label ? (
            <p className="r text-mute text-sm mb-6 font-semibold uppercase tracking-wider">
              {whyMe.label}
            </p>
          ) : null}
          {whyMe.lead ? (
            <p className="r max-w-3xl text-2xl md:text-4xl leading-snug font-normal text-ink mb-10 md:mb-14">
              {whyMe.lead}
            </p>
          ) : null}
          {Array.isArray(whyMe.points) && whyMe.points.length > 0 ? (
            <div className="r border-t-2 border-ink max-w-4xl">
              {whyMe.points.map((pt, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-x-10 items-baseline border-b border-ink/15 py-6 md:py-8"
                >
                  <div className="md:col-span-1 font-display text-2xl md:text-3xl leading-none text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="md:col-span-4 font-display uppercase tracking-tight2 leading-[0.95] text-2xl md:text-3xl">
                    {pt.title}
                  </h3>
                  <p className="md:col-span-7 text-base md:text-lg leading-relaxed text-ink/80">
                    {pt.body}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      {/* Services */}
      {services.length > 0 ? (
        <section id="services" className="scroll-mt-24 pb-16 md:pb-32">
          {page.servicesLabel ? (
            <p className="r text-mute text-sm mb-8 font-semibold uppercase tracking-wider">
              {page.servicesLabel}
            </p>
          ) : null}
          <ul className="r text-3xl md:text-6xl font-display uppercase tracking-tight2 leading-[1.05] space-y-3 md:space-y-4">
            {services.map((s, i) => (
              <li key={i} className="flex items-baseline gap-4 md:gap-6">
                <span className="text-mute text-base md:text-lg font-sans font-medium normal-case tracking-normal w-10 md:w-14 shrink-0">
                  {pad2(i + 1)}
                </span>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Systems paragraph(s) — accepts a single string or an array of paragraphs */}
      {page.systemsParagraph ? (
        <section className="pb-16 md:pb-32">
          <div className="r max-w-3xl space-y-5 md:space-y-7 text-2xl md:text-4xl leading-snug font-normal text-ink">
            {(Array.isArray(page.systemsParagraph)
              ? page.systemsParagraph
              : [page.systemsParagraph]
            ).map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>
        </section>
      ) : null}

      {/* Manifesto */}
      {page.manifestoLead || page.manifestoTail ? (
        <section id="manifesto" className="scroll-mt-24 pb-24 md:pb-40">
          <p className="r font-display uppercase tracking-tight2 leading-[1.02] text-4xl md:text-7xl">
            {page.manifestoLead}
            {page.manifestoTail ? (
              <>
                <br />
                <span className="text-accent">{page.manifestoTail}</span>
              </>
            ) : null}
          </p>
        </section>
      ) : null}

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />

      <PosterRail
        topText={posterRail.topText}
        middleText={railMiddle}
        bottomText={posterRail.bottomText}
      />
    </>
  )
}
