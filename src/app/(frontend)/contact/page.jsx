import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PosterRail from '@/components/PosterRail'
import ContactForm from '@/components/ContactForm'

import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'

export async function generateMetadata() {
  const { contact } = getContent(await getLocale())
  return {
    title: contact.meta?.title || "Let's talk — raoul.studio",
    description: contact.meta?.description || '',
    alternates: { canonical: '/contact' },
  }
}

function buildFaqJsonLd(faqItems) {
  if (faqItems.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

export default async function ContactPage() {
  const { contact, header, footer, posterRail, ui } = getContent(
    await getLocale(),
  )
  const railMiddle = contact.posterRailMiddle || posterRail.middleText
  const faqItems = contact.faq?.items ?? []
  const faqJsonLd = buildFaqJsonLd(faqItems)

  return (
    <>
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
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
          {contact.eyebrow}
        </div>
        <h1 className="r font-display uppercase tracking-tight2 leading-[0.86] text-[clamp(2.5rem,16vw,5rem)] md:text-[11vw]">
          {contact.titleLine1}
          <br />
          {contact.titleLine2}
          {contact.titleAccent ? (
            <span className="text-accent">{contact.titleAccent}</span>
          ) : null}
        </h1>
      </section>

      {/* Lead */}
      <section className="pb-16 md:pb-24">
        <p className="r text-2xl md:text-4xl font-normal leading-snug max-w-3xl text-accent">
          {contact.lead}
        </p>
      </section>

      {/* Form */}
      <section className="pb-24 md:pb-40">
        <ContactForm
          nameLabel={contact.form.nameLabel ?? ''}
          namePlaceholder={contact.form.namePlaceholder ?? ''}
          emailLabel={contact.form.emailLabel ?? ''}
          emailPlaceholder={contact.form.emailPlaceholder ?? ''}
          companyLabel={contact.form.companyLabel ?? ''}
          companyOptional={contact.form.companyOptional ?? ''}
          companyPlaceholder={contact.form.companyPlaceholder ?? ''}
          messageLabel={contact.form.messageLabel ?? ''}
          messagePlaceholder={contact.form.messagePlaceholder ?? ''}
          sendLabel={contact.form.sendLabel ?? ''}
          sendingButton={ui.form?.sendingButton}
          sendingStatus={ui.form?.sendingStatus}
          successStatus={ui.form?.successStatus}
          errorStatus={ui.form?.errorStatus}
          validationStatus={ui.form?.validationStatus}
        />
      </section>

      {/* Direct contact */}
      <section className="pb-16 md:pb-24 border-t border-ink/10 pt-8 md:pt-12 flex flex-wrap gap-y-6 items-baseline justify-between text-sm font-semibold uppercase tracking-wider text-mute">
        <span>{contact.directContact?.label}</span>
        <a href={`mailto:${contact.directContact?.email ?? ''}`} className="text-ink ul break-all">
          {contact.directContact?.email}
        </a>
      </section>

      {/* Phone */}
      {contact.directContact?.phone ? (
        <section className="pb-24 md:pb-32">
          {contact.directContact?.phoneLabel ? (
            <p className="r text-mute text-sm mb-5 md:mb-6 font-semibold uppercase tracking-wider">
              {contact.directContact.phoneLabel}
            </p>
          ) : null}
          <a
            href={contact.directContact.phoneHref}
            className="r font-display uppercase tracking-tight2 leading-[0.95] text-5xl md:text-7xl text-ink hover:text-accent transition-colors break-words"
          >
            {contact.directContact.phone}
          </a>
        </section>
      ) : null}

      {/* FAQ */}
      {faqItems.length > 0 ? (
        <section
          id="faq"
          className="scroll-mt-24 pb-24 md:pb-40 border-t border-ink/15 pt-12 md:pt-20"
        >
          {contact.faq?.label ? (
            <p className="r text-mute text-sm mb-8 font-semibold uppercase tracking-wider">
              {contact.faq.label}
            </p>
          ) : null}
          <div className="r divide-y divide-ink/15 border-t border-ink/15">
            {faqItems.map((item, i) => (
              <article key={i} className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-12">
                <h2 className="md:col-span-5 font-display uppercase tracking-tight2 leading-[1.05] text-2xl md:text-3xl">
                  {item.q}
                </h2>
                <p className="md:col-span-7 max-w-2xl text-base md:text-lg leading-relaxed text-ink/80">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
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
