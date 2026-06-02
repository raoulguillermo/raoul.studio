export default function PosterRail({ topText, middleText, bottomText }) {
  return (
    <div className="poster-rail">
      <span>{topText}</span>
      <span>{middleText}</span>
      <span>{bottomText}</span>
    </div>
  )
}
