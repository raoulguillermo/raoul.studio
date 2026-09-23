// Sections shared by the product landing pages and the Voice AI industry
// pages. Each renders nothing when its copy is missing, so a locale or product
// without it simply skips the section.

function SectionLabel({ children }) {
  return (
    <p className="r text-mute text-sm mb-8 font-semibold uppercase tracking-wider">
      {children}
    </p>
  )
}

// "Call and hear it yourself" — the number the AI itself answers. Rendered
// only once the product has a demoPhone in the registry.
export function CallDemo({ product, copy, size = 'large' }) {
  if (!product?.demoPhone || !copy?.callDemo) return null
  return (
    <div className="r">
      <p className="text-sm font-semibold uppercase tracking-wider text-mute mb-3">
        {copy.callDemo.label}
      </p>
      <a
        href={product.demoPhoneHref}
        className={`project-arrow font-display uppercase tracking-tight2 leading-[0.95] text-accent ${
          size === 'large' ? 'text-[clamp(2rem,9vw,3.5rem)] md:text-6xl' : 'text-4xl md:text-5xl'
        }`}
      >
        {product.demoPhone}
      </a>
      {copy.callDemo.note ? (
        <p className="mt-3 text-base md:text-lg text-ink/80">{copy.callDemo.note}</p>
      ) : null}
    </div>
  )
}

export function PricingSection({ copy }) {
  const p = copy?.pricing
  if (!p) return null
  return (
    <section className="pb-16 md:pb-32 border-t border-ink/15 pt-12 md:pt-20">
      <SectionLabel>{p.label}</SectionLabel>
      <div className="r grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-12 items-start">
        <p className="md:col-span-5 font-display uppercase tracking-tight2 leading-[0.95]">
          {p.prefix ? (
            <span className="block text-2xl md:text-3xl text-mute">{p.prefix}</span>
          ) : null}
          <span className="block text-6xl md:text-8xl text-accent">{p.amount}</span>
          <span className="block text-2xl md:text-3xl">{p.unit}</span>
        </p>
        <div className="md:col-span-7">
          <ul className="border-t-2 border-ink">
            {(p.points ?? []).map((point, i) => (
              <li
                key={i}
                className="border-b border-ink/15 py-4 md:py-5 text-lg md:text-xl leading-snug"
              >
                {point}
              </li>
            ))}
          </ul>
          {p.note ? <p className="mt-4 text-sm text-mute">{p.note}</p> : null}
        </div>
      </div>
    </section>
  )
}

export function DataPrivacySection({ copy, extra }) {
  const d = copy?.dataPrivacy
  if (!d) return null
  const items = extra ? [...d.items, extra] : d.items
  return (
    <section
      id="avg"
      className="scroll-mt-24 pb-16 md:pb-32 border-t border-ink/15 pt-12 md:pt-20"
    >
      <SectionLabel>{d.label}</SectionLabel>
      {d.heading ? (
        <h2 className="r font-display uppercase tracking-tight2 leading-[0.95] text-4xl md:text-7xl max-w-5xl mb-8 md:mb-12">
          {d.heading}
        </h2>
      ) : null}
      <div className="r grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-ink/15">
        {items.map((item, i) => (
          <div key={i} className="border-b border-ink/15 py-6 md:py-8">
            <p className="font-display uppercase tracking-tight2 text-2xl md:text-3xl leading-[1.05] mb-3">
              {item.title}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-ink/80">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// How to reach the studio from a software page: a phone number and an email
// address, both large. Voice AI shows its "call and hear it" line instead of
// the plain call label.
export function ContactOptions({ product, copy, phone, phoneHref, callLabel, emailLabel, email }) {
  const demo = Boolean(product?.demoPhone && copy?.callDemo)
  return (
    <div className="r grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 border-t-2 border-ink pt-8 md:pt-10">
      {demo ? (
        <CallDemo product={product} copy={copy} size="small" />
      ) : phone ? (
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-mute mb-3">{callLabel}</p>
          <a
            href={phoneHref}
            className="project-arrow font-display uppercase tracking-tight2 leading-[0.95] text-accent text-4xl md:text-5xl"
          >
            {phone}
          </a>
        </div>
      ) : null}
      {email ? (
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-mute mb-3">{emailLabel}</p>
          <a
            href={`mailto:${email}`}
            className="font-display lowercase tracking-tight2 leading-[0.95] text-4xl md:text-5xl break-all ul hover:text-accent transition-colors"
          >
            {email}
          </a>
        </div>
      ) : null}
    </div>
  )
}
