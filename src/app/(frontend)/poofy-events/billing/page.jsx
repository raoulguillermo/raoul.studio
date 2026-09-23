import { redirect } from 'next/navigation'

import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

import { requireUser } from '@/lib/account'
import { getPrices, poofy } from '@/lib/poofy'
import { getContent } from '@/content'
import { getLocale } from '@/content/locale-server'
import { getAccountStrings, fill, formatDate, formatMoney } from '@/content/account'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Billing · Poofy Events',
  robots: { index: false, follow: false },
}

const ADMIN = ['owner', 'admin']
const SUBSCRIPTIONS = [
  { key: 'pro', monthly: 'pro_monthly', yearly: 'pro_yearly' },
  { key: 'agency', monthly: 'agency_monthly', yearly: 'agency_yearly' },
]

// Every buy/manage button is a plain form post to the route handler, which
// sends the browser on to Stripe.
function Action({ action, teamId, product, children, className = '', extra = null }) {
  return (
    <form action={`/api/poofy-events/${action}`} method="post" className="contents">
      <input type="hidden" name="teamId" value={teamId} />
      {product ? <input type="hidden" name="product" value={product} /> : null}
      {extra}
      <button type="submit" className={className}>
        {children}
      </button>
    </form>
  )
}

const btn =
  'inline-flex items-center gap-2 border-2 border-ink px-5 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors'
const btnAccent =
  'inline-flex items-center gap-2 border-2 border-accent bg-accent text-paper px-5 py-3 text-sm font-semibold uppercase tracking-wider hover:opacity-80 transition-opacity'
const label = 'text-mute text-xs font-semibold uppercase tracking-widest'

export default async function PoofyEventsBilling({ searchParams }) {
  const { token } = await requireUser()
  const sp = await searchParams
  const lang = await getLocale()
  const { header, footer, ui } = getContent(lang)
  const s = getAccountStrings(lang)

  const teamsRes = await poofy('/api/teams', { token })
  if (teamsRes.status === 401) redirect('/login?next=/poofy-events/billing')
  const teams = Array.isArray(teamsRes.data) ? teamsRes.data : []
  const unavailable = teamsRes.status !== 200

  // The team in the URL, else the first one they can manage, else any.
  const team =
    teams.find((t) => String(t.id) === String(sp?.teamId)) ??
    teams.find((t) => ADMIN.includes(t.role)) ??
    teams[0]
  const isAdmin = team && ADMIN.includes(team.role)

  const [billingRes, projectsRes, prices] = team
    ? await Promise.all([
        poofy(`/api/teams/${encodeURIComponent(team.id)}/billing`, { token }),
        isAdmin ? poofy(`/api/teams/${encodeURIComponent(team.id)}/projects`, { token }) : null,
        isAdmin ? getPrices() : null,
      ])
    : []
  const billing = billingRes?.status === 200 ? billingRes.data : null
  const projects = Array.isArray(projectsRes?.data) ? projectsRes.data.filter((p) => !p.eventPass) : []
  const invoices = billing?.invoices ?? []

  const plan = billing?.plan ?? team?.plan ?? 'free'
  const planStatus = billing?.planStatus ?? team?.planStatus
  const subscribed = plan !== 'free' && ['active', 'trialing', 'past_due'].includes(planStatus)
  const hasPurchases = subscribed || invoices.length > 0 || Boolean(billing?.seasonPassUntil) || plan !== 'free'
  const price = (product) =>
    prices?.[product] ? formatMoney(prices[product].amount, prices[product].currency, lang) : null

  const error = sp?.error ? (s.errors[sp.error] ?? s.errors.generic) : unavailable ? s.errors.unavailable : ''

  return (
    <>
      <SiteHeader
        variant="back"
        wordmark={header.wordmark}
        tagline={header.tagline}
        wordmarkHref="/"
        backLabel={ui.back}
        backHref="/account"
      />

      <section className="pt-24 md:pt-40 pb-12 md:pb-16">
        <p className={label}>Poofy Events</p>
        <h1 className="mt-4 pr-16 md:pr-20 font-display uppercase tracking-tight2 leading-[0.95] text-[clamp(2.5rem,12vw,5rem)] md:text-[8vw]">
          {s.billingTitle}
          <span className="text-accent">.</span>
        </h1>
        {error ? (
          <p role="alert" className="mt-8 max-w-2xl border-l-4 border-accent pl-4 text-lg leading-snug">
            {error}
          </p>
        ) : null}
      </section>

      {!unavailable && teams.length === 0 ? (
        <section className="pb-24 md:pb-40 max-w-3xl">
          <p className="text-xl md:text-2xl leading-snug text-ink/80">{s.noTeams}</p>
          <form action="/api/poofy-events/team" method="post" className="mt-10 space-y-8">
            <div>
              <label htmlFor="b-team" className="field-label">{s.teamName}</label>
              <input id="b-team" name="name" required maxLength={80} placeholder={s.teamPlaceholder} className="field-input" />
            </div>
            <button type="submit" className="send-btn">
              {s.createButton}
              <span className="inline-block rotate-[-45deg] leading-none">→</span>
            </button>
          </form>
        </section>
      ) : null}

      {team ? (
        <>
          {teams.length > 1 ? (
            <nav aria-label={s.teams} className="pb-10">
              <p className={label}>{s.teams}</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {teams.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`/poofy-events/billing?teamId=${encodeURIComponent(t.id)}`}
                      aria-current={t.id === team.id ? 'page' : undefined}
                      className={`inline-block border-2 px-4 py-2 text-sm font-semibold ${
                        t.id === team.id ? 'border-ink bg-ink text-paper' : 'border-ink/20 hover:border-ink'
                      }`}
                    >
                      {t.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          <section className="border-t border-ink/15 py-10 md:py-14 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className={label}>{s.currentPlan} · {team.name}</p>
              <p className="mt-4 font-display uppercase tracking-tight2 leading-none text-5xl md:text-7xl">
                {s.planNames[plan] ?? plan}
                {planStatus && plan !== 'free' ? (
                  <span className={`ms-4 align-middle font-sans normal-case tracking-normal text-sm font-semibold ${planStatus === 'past_due' ? 'text-accent' : 'text-mute'}`}>
                    {s.planStatus[planStatus] ?? planStatus}
                  </span>
                ) : null}
              </p>
              <div className="mt-4 space-y-1 text-base md:text-lg text-ink/80">
                {billing?.planRenewsAt && subscribed ? (
                  <p>{fill(billing.cancelAtPeriodEnd ? s.cancelsOn : s.renewsOn, { date: formatDate(billing.planRenewsAt, lang) })}</p>
                ) : null}
                {billing?.seasonPassUntil ? (
                  <p>{fill(s.seasonPassUntil, { date: formatDate(billing.seasonPassUntil, lang) })}</p>
                ) : null}
              </div>
            </div>
            <div className="md:col-span-5 md:text-end">
              {isAdmin && hasPurchases ? (
                <>
                  <Action action="portal" teamId={team.id} className={btn}>
                    {s.manageBilling} →
                  </Action>
                  <p className="mt-3 text-sm text-mute">{s.manageHint}</p>
                </>
              ) : null}
              {!isAdmin ? <p className="text-base text-ink/80">{s.membersOnly}</p> : null}
            </div>
          </section>

          {isAdmin && !subscribed ? (
            <section className="border-t border-ink/15 py-10 md:py-14">
              <h2 className={label}>{s.choosePlan}</h2>
              <ul className="mt-6 grid gap-px bg-ink/15 border border-ink/15 md:grid-cols-2">
                {SUBSCRIPTIONS.map((p) => (
                  <li key={p.key} className="bg-paper p-6 md:p-8">
                    <h3 className="font-display uppercase tracking-tight2 leading-none text-4xl">{s.plans[p.key].name}</h3>
                    <ul className="mt-4 space-y-1 text-sm text-ink/70">
                      {s.plans[p.key].features.map((f) => <li key={f}>— {f}</li>)}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Action action="checkout" teamId={team.id} product={p.monthly} className={btnAccent}>
                        {s.monthly}{price(p.monthly) ? ` · ${price(p.monthly)}` : ''}
                      </Action>
                      <Action action="checkout" teamId={team.id} product={p.yearly} className={btn}>
                        {s.yearly}{price(p.yearly) ? ` · ${price(p.yearly)}` : ''}
                      </Action>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {isAdmin ? (
            <section className="border-t border-ink/15 py-10 md:py-14">
              <h2 className={label}>{s.passes}</h2>
              <ul className="mt-6 grid gap-px bg-ink/15 border border-ink/15 md:grid-cols-2">
                <li className="bg-paper p-6 md:p-8">
                  <h3 className="font-display uppercase tracking-tight2 leading-none text-4xl">{s.plans.event_pass.name}</h3>
                  <p className="mt-2 text-base text-ink/80">{s.plans.event_pass.text}</p>
                  {projects.length ? (
                    <form action="/api/poofy-events/checkout" method="post" className="mt-6 flex flex-wrap items-end gap-4">
                      <input type="hidden" name="teamId" value={team.id} />
                      <input type="hidden" name="product" value="event_pass" />
                      <div className="min-w-0 flex-1 basis-48">
                        <label htmlFor="b-project" className="field-label">{s.project}</label>
                        <select id="b-project" name="projectId" required className="field-input !text-lg">
                          {projects.map((p) => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                          ))}
                        </select>
                      </div>
                      <button type="submit" className={btnAccent}>
                        {s.buy}{price('event_pass') ? ` · ${price('event_pass')}` : ''}
                      </button>
                    </form>
                  ) : (
                    <p className="mt-6 text-sm text-mute">{s.noProjects}</p>
                  )}
                </li>
                <li className="bg-paper p-6 md:p-8">
                  <h3 className="font-display uppercase tracking-tight2 leading-none text-4xl">{s.plans.season_pass.name}</h3>
                  <p className="mt-2 text-base text-ink/80">{s.plans.season_pass.text}</p>
                  <div className="mt-6">
                    <Action action="checkout" teamId={team.id} product="season_pass" className={btnAccent}>
                      {s.buy}{price('season_pass') ? ` · ${price('season_pass')}` : ''}
                    </Action>
                  </div>
                </li>
              </ul>
            </section>
          ) : null}

          {isAdmin ? (
            <section className="border-t border-ink/15 py-10 md:py-14 pb-24 md:pb-40">
              <h2 className={label}>{s.invoices}</h2>
              {invoices.length ? (
                <ul className="mt-6 border-t border-ink/15">
                  {invoices.map((inv) => (
                    <li key={inv.id} className="border-b border-ink/15 py-4 flex flex-wrap items-baseline gap-x-6 gap-y-1">
                      <span className="w-40 shrink-0">{formatDate(inv.date, lang)}</span>
                      <span className="text-mute text-sm">{inv.number}</span>
                      <span className="font-semibold">{formatMoney(inv.total, inv.currency, lang)}</span>
                      <span className="text-sm text-mute">{s.invoiceStatus[inv.status] ?? inv.status}</span>
                      <span className="ms-auto flex gap-4 text-sm font-semibold uppercase tracking-wider">
                        {inv.hostedUrl ? <a href={inv.hostedUrl} target="_blank" rel="noopener noreferrer" className="ul">{s.invoiceView}</a> : null}
                        {inv.pdfUrl ? <a href={inv.pdfUrl} target="_blank" rel="noopener noreferrer" className="ul">{s.invoicePdf}</a> : null}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-6 text-base text-mute">{s.noInvoices}</p>
              )}
            </section>
          ) : (
            <div className="pb-24 md:pb-40" />
          )}
        </>
      ) : null}

      <SiteFooter leftText={footer.leftText} rightText={footer.rightText} />
    </>
  )
}
