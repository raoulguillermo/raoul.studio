import { clients } from '@/content/clients'

// A continuously scrolling row of client logos.
//
// The list is rendered twice inside one track: the track slides exactly half
// its width and restarts, so the second copy has taken the first copy's place
// at the moment it loops and the row never visibly jumps. The duplicate is
// hidden from screen readers, which should hear the list once.
function LogoGroup({ hidden = false }) {
  return (
    <ul
      className={`marquee-group ${hidden ? 'marquee-dup' : ''}`}
      aria-hidden={hidden ? 'true' : undefined}
    >
      {clients.map((c) => (
        <li key={c.name}>
          {c.wordmark ? (
            <span className="wordmark font-display">{c.wordmark}</span>
          ) : (
            <img
              src={c.src}
              width={c.width}
              height={c.height}
              alt={hidden ? '' : c.name}
              loading="lazy"
              decoding="async"
            />
          )}
        </li>
      ))}
    </ul>
  )
}

export default function ClientsMarquee({ label }) {
  return (
    <section className="py-16 md:py-24" aria-labelledby="clientsLabel">
      <h2
        id="clientsLabel"
        className="r text-sm mb-8 font-semibold uppercase tracking-wider"
      >
        {/* Reads as if it had been dragged over — see .selected-text */}
        <span className="selected-text">{label}</span>
      </h2>
      {/* Full-bleed so the logos run off both edges and the fade has room */}
      <div className="fullbleed marquee">
        <div className="marquee-track">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  )
}
