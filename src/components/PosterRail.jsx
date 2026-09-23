// Each line is pinned on its own — top, true vertical centre, bottom — so the
// middle line stays centred whether or not the others are set.
export default function PosterRail({ topText, middleText, bottomText }) {
  return (
    <div className="poster-rail">
      {topText ? <span className="rail-top">{topText}</span> : null}
      {middleText ? <span className="rail-middle">{middleText}</span> : null}
      {bottomText ? <span className="rail-bottom">{bottomText}</span> : null}
    </div>
  )
}
