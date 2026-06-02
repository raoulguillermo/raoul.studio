export default function SiteHeader(props) {
  if (props.variant === 'back') {
    const backLabel = props.backLabel ?? 'Back'
    const backHref = props.backHref ?? '/'
    return (
      <header className="flex items-center justify-between pt-8 md:pt-10 text-sm">
        <a
          href={props.wordmarkHref}
          className="font-display text-2xl tracking-tight2 lowercase"
        >
          {props.wordmark}
        </a>
        <a
          href={backHref}
          className="back-link text-mute font-medium uppercase tracking-wider"
        >
          <span>←</span> {backLabel}
        </a>
      </header>
    )
  }
  return (
    <header className="flex flex-col items-start gap-1 md:flex-row md:items-center md:justify-between pt-8 md:pt-10 text-sm">
      <a
        href={props.wordmarkHref}
        className="font-display text-2xl tracking-tight2 lowercase"
      >
        {props.wordmark}
      </a>
      <a
        href={props.ctaHref}
        className="ul font-display text-2xl tracking-tight2 lowercase flex items-center gap-3"
      >
        {props.ctaLabel}
        <span className="inline-block rotate-[-45deg] leading-none">→</span>
      </a>
    </header>
  )
}
