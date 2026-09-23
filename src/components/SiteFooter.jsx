import ConsentLink from '@/components/ConsentLink'

export default function SiteFooter({ leftText, rightText, phone, phoneHref }) {
  return (
    <footer className="flex items-center justify-between py-8 text-sm text-mute font-medium border-t border-ink/10">
      <span>{leftText}</span>
      {phone ? (
        <a href={phoneHref} className="hover:text-ink transition-colors">
          {phone}
        </a>
      ) : null}
      <span className="flex items-center gap-6">
        <ConsentLink />
        <span>{rightText}</span>
      </span>
    </footer>
  )
}
