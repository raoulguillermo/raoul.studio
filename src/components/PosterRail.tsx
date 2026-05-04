type Props = {
  topText: string
  middleText: string
  bottomText: string
}

export default function PosterRail({ topText, middleText, bottomText }: Props) {
  return (
    <div className="poster-rail">
      <span>{topText}</span>
      <span>{middleText}</span>
      <span>{bottomText}</span>
    </div>
  )
}
