// The wordmark and its tagline read as one lockup, so they stay grouped in
// both header variants. `tagline` is optional — locales that don't set one
// fall back to the bare wordmark.
function Wordmark({ wordmark, wordmarkHref, tagline }) {
  return (
    <div className="flex flex-col">
      <a
        href={wordmarkHref}
        className="font-display text-2xl tracking-tight2 lowercase"
      >
        {wordmark}
      </a>
      {tagline ? (
        <span className="text-mute text-xs font-semibold uppercase tracking-widest">
          {tagline}
        </span>
      ) : null}
    </div>
  )
}

export default function SiteHeader(props) {
  if (props.variant === 'back') {
    const backLabel = props.backLabel ?? 'Back'
    const backHref = props.backHref ?? '/'
    return (
      <header className="flex items-start justify-between pt-8 md:pt-10 text-sm pr-16 md:pr-20">
        <Wordmark
          wordmark={props.wordmark}
          wordmarkHref={props.wordmarkHref}
          tagline={props.tagline}
        />
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
    <header className="flex flex-col items-start gap-1 md:flex-row md:items-start md:justify-between pt-8 md:pt-10 text-sm pr-16 md:pr-20">
      <Wordmark
        wordmark={props.wordmark}
        wordmarkHref={props.wordmarkHref}
        tagline={props.tagline}
      />
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
