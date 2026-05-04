type Props = {
  leftText: string
  rightText: string
}

export default function SiteFooter({ leftText, rightText }: Props) {
  return (
    <footer className="flex items-center justify-between py-8 text-sm text-mute font-medium border-t border-ink/10">
      <span>{leftText}</span>
      <span>{rightText}</span>
    </footer>
  )
}
