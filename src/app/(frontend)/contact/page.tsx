import { getPayload } from 'payload'
import type { Metadata } from 'next'
import config from '@/payload.config'

import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PosterRail from '@/components/PosterRail'
import ContactForm from '@/components/ContactForm'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: await config })
  const contact = await payload.findGlobal({ slug: 'contact' })
  return {
    title: contact.meta?.title || "Let's talk — raoul.studio",
    description: contact.meta?.description || '',
  }
}

export default async function ContactPage() {
  const payload = await getPayload({ config: await config })

  const [header, contact, footer, posterRail] = await Promise.all([
    payload.findGlobal({ slug: 'header' }),
    payload.findGlobal({ slug: 'contact' }),
    payload.findGlobal({ slug: 'footer' }),
    payload.findGlobal({ slug: 'posterRail' }),
  ])

  const railMiddle = contact.posterRailMiddle || posterRail.middleText

  return (
    <>
      <SiteHeader
        variant="back"
        wordmark={header.wordmark}
        wordmarkHref="/"
        backLabel="Back"
        backHref="/"
      />

      {/* Title */}
      <section className="pt-16 md:pt-32 pb-8 md:pb-12">
        <div className="r font-semibold uppercase tracking-[.2em] text-xs md:text-sm mb-8 md:mb-12 text-mute">
          {contact.eyebrow}
        </div>
        <h1 className="r font-display uppercase tracking-tight2 leading-[0.86] text-[16vw] md:text-[11vw]">
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
          recipient={contact.form.recipient}
        />
      </section>

      {/* Direct contact */}
      <section className="pb-16 md:pb-24 border-t border-ink/10 pt-8 md:pt-12 flex flex-wrap gap-y-6 items-baseline justify-between text-sm font-semibold uppercase tracking-wider text-mute">
        <span>{contact.directContact?.label}</span>
        <a href={`mailto:${contact.directContact?.email ?? ''}`} className="text-ink ul">
          {contact.directContact?.email}
        </a>
      </section>

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />

      <PosterRail
        topText={posterRail.topText}
        middleText={railMiddle}
        bottomText={posterRail.bottomText}
      />
    </>
  )
}
