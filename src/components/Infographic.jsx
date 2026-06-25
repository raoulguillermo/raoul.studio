import React from 'react'

// Flat, bold, monochrome infographics — one per project.
// Each is a small "figure" that visually states what the project is.
// Palette: ink #0F0F0F, paper #D6D9DC, mute #65696C, accent #E92316.
//
// All prose comes in via `strings` (the localized `infographics` dict); brand
// and tech tokens (Next.js, Stripe, GraphQL, SLA, [NAME_1]…) stay literal here.
// Flow arrows flip in RTL so the sequence still reads in the page's direction.

/* ----------------------------- primitives ----------------------------- */

function Box({ children, accent }) {
  return (
    <div
      className={`inline-flex items-center justify-center text-center px-3 py-2 md:px-4 md:py-3 border-2 font-semibold uppercase tracking-wide text-[11px] md:text-sm leading-tight ${
        accent ? 'border-accent text-accent' : 'border-ink text-ink'
      }`}
    >
      {children}
    </div>
  )
}

function Stat({ value, label, accent }) {
  return (
    <div>
      <div
        className={`font-display leading-[0.85] text-4xl md:text-6xl tracking-tight2 ${
          accent ? 'text-accent' : 'text-ink'
        }`}
      >
        {value}
      </div>
      <div className="mt-2 text-[11px] font-semibold uppercase tracking-[.18em] text-mute">
        {label}
      </div>
    </div>
  )
}

function Chip({ children, accent }) {
  return (
    <span
      className={`inline-block px-2.5 py-1 border text-[10px] md:text-[11px] font-semibold uppercase tracking-[.14em] ${
        accent ? 'border-accent text-accent' : 'border-ink/40 text-mute'
      }`}
    >
      {children}
    </span>
  )
}

// Accent arrow that points down on mobile and along the reading direction on
// desktop (→ in LTR, flipped to ← in RTL via the rtl: variant).
function Arrow() {
  return (
    <div className="flex items-center justify-center text-accent font-display leading-none text-2xl md:text-3xl select-none">
      <span className="md:hidden">↓</span>
      <span className="hidden md:inline rtl:rotate-180">→</span>
    </div>
  )
}

// Horizontal on desktop (reverses naturally in RTL), vertical on mobile.
function Flow({ steps }) {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3 md:gap-5">
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <div className="flex-1 flex items-center justify-center">{s}</div>
          {i < steps.length - 1 ? <Arrow /> : null}
        </React.Fragment>
      ))}
    </div>
  )
}

/* ----------------------------- per-project ---------------------------- */

function OutdoorXL({ t }) {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="grid grid-cols-2 gap-6">
        <Stat value="200K+" label={t.products} accent />
        <Stat value="14+" label={t.markets} />
      </div>
      <Flow
        steps={[
          <Box>Magento 2</Box>,
          <Box accent>GraphQL · REST</Box>,
          <Box>Next.js</Box>,
        ]}
      />
    </div>
  )
}

function AboutSpace({ t }) {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="flex items-center justify-center gap-3 md:gap-5">
        <Box>{t.host}</Box>
        <span className="text-accent font-display text-2xl md:text-3xl leading-none">⇄</span>
        <Box accent>AboutSpace</Box>
        <span className="text-accent font-display text-2xl md:text-3xl leading-none">⇄</span>
        <Box>{t.guest}</Box>
      </div>
      <Flow
        steps={[
          <Box>{t.list}</Box>,
          <Box>{t.book}</Box>,
          <Box accent>{t.pay} · Stripe</Box>,
        ]}
      />
    </div>
  )
}

function Threadly({ t }) {
  return (
    <Flow
      steps={[
        <div className="flex flex-col gap-2">
          <Box>{t.email}</Box>
          <Box>{t.chat}</Box>
          <Box>{t.form}</Box>
        </div>,
        <Box accent>{t.inbox}</Box>,
        <div className="flex flex-col items-center gap-2">
          <Box>{t.sla}</Box>
        </div>,
        <Box>{t.resolved} ✓</Box>,
      ]}
    />
  )
}

function Lexpert({ t }) {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="border-2 border-ink">
        <div className="flex items-center gap-2 border-b-2 border-ink px-3 py-2">
          <span className="w-2.5 h-2.5 rounded-full bg-ink/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
          <span className="ms-auto text-[10px] font-semibold uppercase tracking-[.18em] text-mute">
            Lexpert CRM
          </span>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-1 border-e-2 border-ink p-3 md:p-4 space-y-2 text-[11px] md:text-xs font-semibold uppercase tracking-wide">
            <div className="text-accent">{t.clients}</div>
            <div className="text-mute">{t.invoicing}</div>
            <div className="text-mute">{t.metrics}</div>
          </div>
          <div className="col-span-2 p-3 md:p-4 flex items-end gap-2 md:gap-3 h-24 md:h-28">
            <span className="flex-1 bg-ink/15" style={{ height: '40%' }} />
            <span className="flex-1 bg-ink/25" style={{ height: '65%' }} />
            <span className="flex-1 bg-accent" style={{ height: '100%' }} />
            <span className="flex-1 bg-ink/25" style={{ height: '55%' }} />
            <span className="flex-1 bg-ink/15" style={{ height: '75%' }} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-mute me-1">
          {t.roleAccess}
        </span>
        <Chip accent>{t.admin}</Chip>
        <Chip>{t.lawyer}</Chip>
        <Chip>{t.staff}</Chip>
      </div>
    </div>
  )
}

function FndRacer({ t }) {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <Flow
        steps={[
          <Box>{t.scrape}</Box>,
          <Box>{t.match}</Box>,
          <Box accent>{t.draft}</Box>,
        ]}
      />
      <div className="flex justify-center">
        <Stat value="~5 MIN" label={t.fromBlank} accent />
      </div>
    </div>
  )
}

function SmartDossier({ t }) {
  const tile = (cls) => <span className={`block w-7 h-9 md:w-9 md:h-11 border-2 ${cls}`} />
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="flex justify-center">
        <Chip accent>⌕ {t.searchPill}</Chip>
      </div>
      <Flow
        steps={[
          <div className="flex flex-wrap gap-2 max-w-[180px] justify-center">
            <span className="block w-7 h-9 md:w-9 md:h-11 border-2 border-ink/40 rotate-6" />
            <span className="block w-7 h-9 md:w-9 md:h-11 border-2 border-ink/40 -rotate-3" />
            <span className="block w-7 h-9 md:w-9 md:h-11 border-2 border-ink/40 rotate-12" />
            <span className="block w-7 h-9 md:w-9 md:h-11 border-2 border-ink/40 -rotate-6" />
            <span className="block w-7 h-9 md:w-9 md:h-11 border-2 border-ink/40 rotate-3" />
          </div>,
          <div className="grid grid-cols-3 gap-2">
            {tile('border-ink')}
            {tile('border-ink')}
            {tile('border-accent')}
            {tile('border-ink')}
            {tile('border-ink')}
            {tile('border-ink')}
          </div>,
        ]}
      />
      <div className="flex justify-center gap-6 text-[11px] font-semibold uppercase tracking-[.18em] text-mute">
        <span>{t.messy}</span>
        <span className="text-accent rtl:rotate-180">→</span>
        <span className="text-ink">{t.structured}</span>
      </div>
    </div>
  )
}

function AboutDesk({ t }) {
  const Room = ({ booked }) => (
    <div className="border-2 border-ink p-3">
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className={`block w-6 h-6 md:w-8 md:h-8 ${
              booked.includes(i) ? 'bg-accent' : 'border-2 border-ink/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
  return (
    <div className="flex flex-col gap-5 md:gap-6">
      <div className="flex flex-wrap justify-center gap-5 md:gap-8">
        <Room booked={[0, 1, 3]} />
        <Room booked={[2, 4, 5]} />
      </div>
      <div className="flex justify-center gap-6 text-[11px] font-semibold uppercase tracking-[.18em] text-mute">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 bg-accent" /> {t.booked}
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 border-2 border-ink/40" /> {t.free}
        </span>
      </div>
    </div>
  )
}

function Footsteppa({ t }) {
  const bars = [40, 70, 55, 90, 60, 80, 45, 75, 50]
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="flex items-end justify-center gap-2 md:gap-3 h-24 md:h-32">
        {bars.map((h, i) => (
          <span
            key={i}
            className={i === 3 ? 'w-3 md:w-5 bg-accent' : 'w-3 md:w-5 bg-ink'}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Stat value="6,000+" label={t.followers} accent />
        <Stat value="5" label={t.artists} />
      </div>
    </div>
  )
}

function NoCMS({ t }) {
  return (
    <Flow
      steps={[
        <div className="max-w-[220px]">
          <div className="relative bg-ink text-paper px-4 py-3 text-[11px] md:text-sm font-medium leading-snug rounded-2xl rounded-bl-sm">
            “{t.message}”
          </div>
          <div className="mt-2 text-[10px] font-semibold uppercase tracking-[.18em] text-mute">
            WhatsApp
          </div>
        </div>,
        <div className="border-2 border-ink w-44 md:w-56">
          <div className="h-5 md:h-6 bg-accent border-b-2 border-ink" />
          <div className="p-3 space-y-2">
            <span className="block h-3 bg-ink/20 w-3/4" />
            <span className="block h-3 bg-ink/20 w-full" />
            <span className="block h-3 bg-ink/20 w-1/2" />
          </div>
          <div className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-accent">
            {t.live} ✓
          </div>
        </div>,
      ]}
    />
  )
}

function Anonimise({ t }) {
  const txt = (s) => <span className="text-[11px] md:text-sm text-ink/70">{s}</span>
  const bar = (w) => (
    <span className="inline-block align-middle h-3 md:h-4 bg-ink" style={{ width: w }} />
  )
  const tok = (s) => (
    <span className="text-[10px] md:text-xs font-semibold text-accent border border-accent px-1 align-middle">
      {s}
    </span>
  )
  const Line = ({ children }) => (
    <div className="flex flex-wrap items-center gap-1.5">{children}</div>
  )
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <Flow
        steps={[
          <div className="border-2 border-ink p-4 w-full max-w-[260px] space-y-2">
            <div className="text-[10px] font-semibold uppercase tracking-[.18em] text-mute mb-1">
              {t.yourDoc}
            </div>
            <Line>{txt(t.dear)} {bar('60px')}{txt('،')}</Line>
            <Line>{txt('BSN')} {bar('78px')}</Line>
            <Line>{bar('40px')} {txt(t.livesIn)} {bar('54px')}</Line>
            <Line>{txt('IBAN')} {bar('104px')}</Line>
          </div>,
          <div className="flex flex-col items-center gap-2">
            <Box accent>
              Anonimise
              <br />
              {t.offline}
            </Box>
            <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-mute">
              {t.noInternet}
            </span>
          </div>,
          <div className="border-2 border-ink p-4 w-full max-w-[260px] space-y-2">
            <div className="text-[10px] font-semibold uppercase tracking-[.18em] text-mute mb-1">
              {t.safe}
            </div>
            <Line>{txt(t.dear)} {tok('[NAME_1]')}{txt('،')}</Line>
            <Line>{txt('BSN')} {tok('[BSN_1]')}</Line>
            <Line>{tok('[NAME_1]')} {txt(t.livesIn)} {tok('[CITY_1]')}</Line>
            <Line>{txt('IBAN')} {tok('[IBAN_1]')}</Line>
          </div>,
        ]}
      />
      <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-mute">
        <span>{t.pasteInto}</span>
        <span className="text-ink">ChatGPT</span>
        <span className="text-accent">·</span>
        <span className="text-ink">Claude</span>
      </div>
    </div>
  )
}

function Dfns({ t }) {
  // Illustrative numbers only — not the real strategy.
  const Row = ({ label, value, accent }) => (
    <div className="flex items-center justify-between gap-4">
      <span className="text-paper/55">{label}</span>
      <span
        className={`font-display tracking-tight2 text-base md:text-lg ${
          accent ? 'text-accent' : 'text-paper'
        }`}
      >
        {value}
      </span>
    </div>
  )
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      {/* Signal card — evokes the dark live dashboard */}
      <div className="bg-ink text-paper border-2 border-ink w-full max-w-[340px] mx-auto p-4 md:p-5">
        <div className="flex items-center justify-between border-b border-paper/20 pb-2 mb-3">
          <span className="font-display text-lg md:text-xl">NQ1!</span>
          <span className="text-accent font-semibold uppercase tracking-wide text-xs md:text-sm">
            ▲ LONG
          </span>
        </div>
        <div className="space-y-1.5 text-xs md:text-sm">
          <Row label={t.entry} value="20,412" />
          <Row label={t.takeProfit} value="20,460" accent />
          <Row label={t.stopLoss} value="20,388" />
        </div>
      </div>
      {/* Pipeline */}
      <Flow
        steps={[
          <div className="flex flex-col items-center gap-1.5">
            <Box>{t.liveTicks}</Box>
            <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-mute">
              WebSocket · NQ · ES
            </span>
          </div>,
          <div className="flex flex-col gap-1.5">
            <Chip>{t.trend}</Chip>
            <Chip>{t.momentum}</Chip>
            <Chip>{t.volume}</Chip>
            <Chip>{t.volatility}</Chip>
          </div>,
          <Box accent>{t.logged}</Box>,
        ]}
      />
    </div>
  )
}

/* ------------------------------ registry ------------------------------ */

const RENDERERS = {
  outdoorxl: OutdoorXL,
  aboutspace: AboutSpace,
  threadly: Threadly,
  lexpert: Lexpert,
  fndracer: FndRacer,
  'smart-dossier': SmartDossier,
  aboutdesk: AboutDesk,
  footsteppa: Footsteppa,
  'no-cms': NoCMS,
  anonimise: Anonimise,
  dfns: Dfns,
}

function pad2(n) {
  return String(n).padStart(2, '0')
}

export default function Infographic({ slug, number, strings }) {
  const Render = RENDERERS[slug]
  const t = strings?.[slug]
  if (!Render || !t) return null

  return (
    <section className="pb-16 md:pb-24">
      <figure className="r border-2 border-ink">
        <div className="px-5 py-10 md:px-12 md:py-16">
          <Render t={t} />
        </div>
        <figcaption className="flex items-center justify-between border-t-2 border-ink px-5 py-3 md:px-12 text-[11px] font-semibold uppercase tracking-[.18em] text-mute">
          <span>Fig. {pad2(number)}</span>
          <span>{t.caption}</span>
        </figcaption>
      </figure>
    </section>
  )
}
