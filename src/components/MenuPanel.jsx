export default function MenuPanel({
  eyebrow,
  columns,
  footerLeft,
  footerPhone,
  footerPhoneHref,
  footerRightLabel,
  footerRightHref,
}) {
  return (
    <aside
      id="menuPanel"
      aria-hidden="true"
      className="fixed inset-0 z-[55] bg-ink text-paper"
    >
      <div className="h-full max-w-[1500px] mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-12 flex flex-col overflow-y-auto">
        <p className="menu-eyebrow text-paper/50 uppercase text-xs font-semibold tracking-widest mb-12 md:mb-20">
          {eyebrow}
        </p>

        <nav className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 content-start">
          {columns.map((col, i) => (
            <div className="menu-col" key={i}>
              <p className="text-paper/50 uppercase text-xs font-semibold tracking-widest mb-4 md:mb-6">
                {col.heading}
              </p>
              <ul className="font-display uppercase tracking-tight2 text-4xl md:text-7xl leading-[1] space-y-1">
                {(col.links ?? []).map((l, j) => (
                  <li key={j}>
                    <a href={l.href} className="menu-link">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <footer className="menu-foot flex flex-wrap gap-y-2 items-center justify-between mt-12 md:mt-16 pt-6 border-t border-paper/15 text-paper/50 text-xs font-semibold uppercase tracking-widest">
          <span>{footerLeft}</span>
          {footerPhone ? (
            <a
              href={footerPhoneHref}
              className="hover:text-paper transition-colors"
            >
              {footerPhone}
            </a>
          ) : null}
          <a
            href={footerRightHref}
            className="hover:text-paper transition-colors"
          >
            {footerRightLabel}
          </a>
        </footer>
      </div>
    </aside>
  )
}
