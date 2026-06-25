// Translatable labels for the per-project infographics (src/components/Infographic.jsx).
// Brand/tech tokens (Next.js, Magento, GraphQL, REST, Stripe, SLA, WhatsApp,
// ChatGPT, Claude, BSN, IBAN, [NAME_1]…) are NOT here — they stay literal in the
// component. Only prose lives here so it can be translated per locale.

export const infographics = {
  outdoorxl: {
    caption: 'Headless rebuild at scale',
    products: 'Products',
    markets: 'Markets · languages',
  },
  aboutspace: {
    caption: 'Two-sided marketplace',
    host: 'Host',
    guest: 'Guest',
    list: 'List',
    book: 'Book',
    pay: 'Pay', // rendered as “{pay} · Stripe”
  },
  threadly: {
    caption: 'Support, one shared inbox',
    email: 'Email',
    chat: 'Chat',
    form: 'Form',
    inbox: 'Shared inbox',
    sla: 'SLA timer', // keep “SLA”
    resolved: 'Resolved', // rendered as “{resolved} ✓”
  },
  lexpert: {
    caption: 'Bespoke legal CRM', // keep “CRM”
    clients: 'Clients',
    invoicing: 'Invoicing',
    metrics: 'Metrics',
    roleAccess: 'Role access',
    admin: 'Admin',
    lawyer: 'Lawyer',
    staff: 'Staff',
  },
  fndracer: {
    caption: 'AI funding pipeline', // keep “AI”
    scrape: 'Scrape sources',
    match: 'Match business',
    draft: 'Draft application',
    fromBlank: 'Blank page → first draft',
  },
  'smart-dossier': {
    caption: 'Search inside documents',
    searchPill: 'Search inside documents', // rendered as “⌕ {searchPill}”
    messy: 'Messy set',
    structured: 'Structured',
  },
  aboutdesk: {
    caption: 'Team desk booking',
    booked: 'Team booked',
    free: 'Free',
  },
  footsteppa: {
    caption: 'Independent media brand',
    followers: 'Followers',
    artists: 'Artists',
  },
  'no-cms': {
    caption: 'Edit by WhatsApp', // keep “WhatsApp”
    message: 'Make the header red and swap the hero photo',
    live: 'Live', // rendered as “{live} ✓”
  },
  anonimise: {
    caption: 'Offline redaction flow',
    yourDoc: 'Your document',
    offline: 'offline', // rendered under “Anonimise”
    noInternet: 'No internet',
    safe: 'Safe to share',
    dear: 'Dear', // sample letter word
    livesIn: 'lives in', // sample letter words
    pasteInto: 'Then safe to paste into', // before “ChatGPT · Claude”
  },
  dfns: {
    caption: 'Real-time futures signals',
    entry: 'Entry',
    takeProfit: 'Take-profit',
    stopLoss: 'Stop-loss',
    liveTicks: 'Live ticks', // sub-label “WebSocket · NQ · ES”
    confluence: 'Confluence', // keep — header over the 4 checks
    trend: 'Trend',
    momentum: 'Momentum',
    volume: 'Volume',
    volatility: 'Volatility',
    logged: 'Logged + streamed', // streamed over SSE
  },
}
