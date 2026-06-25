// Flat project data, sorted by display number. Replaces the Payload "projects" collection.
// Palette: red #E92316, ink #0F0F0F, paper #D6D9DC.

export const projects = [
  {
    slug: 'outdoorxl',
    number: 1,
    year: '2022–present',
    status: 'ongoing',
    titlePlain: 'OutdoorXL',
    titleLine1: 'OutdoorXL',
    titleLine2: '',
    shortTag: 'e-commerce, scale',
    shortDescription:
      'Magento e-commerce at scale — 200,000+ products across 14+ languages and sites, now going headless.',
    lead:
      'A 200,000-product, 14-market e-commerce platform — and a live rebuild from Magento to headless.',
    tagsLine: 'E-commerce · Magento · Headless · Next.js · GraphQL',
    colors: { bg: '#0F0F0F', fg: '#D6D9DC', numeralColor: '#E92316', numeralOpacity: 0.18 },
    info: [
      { label: 'Role', value: 'Lead developer & software architect' },
      { label: 'Stack', value: 'Magento, Varnish, PHP, MySQL → Next.js, MongoDB, Payload, GraphQL + REST' },
      { label: 'Reach', value: '200,000+ products · 14+ languages & sites' },
    ],
    body: [
      {
        text: 'OutdoorXL runs at serious scale: 200,000+ products across 14+ languages and storefronts, served fast with Magento and Varnish. We lead the development and own the architecture behind it.',
      },
      {
        text: "Now we're rebuilding it headless — Next.js and MongoDB on the front, the Magento 2 backend behind a GraphQL and REST layer, with custom modules bridging the two and Payload CMS for content.",
      },
      {
        text: "The goal: keep the catalogue and the markets, lose the legacy weight. A faster storefront and a codebase that's ready for the next decade.",
      },
    ],
  },

  {
    slug: 'aboutspace',
    number: 2,
    year: '2026',
    status: 'launching',
    titlePlain: 'AboutSpace',
    titleLine1: 'About',
    titleLine2: 'Space',
    titleLine2Color: '#0F0F0F',
    shortTag: 'marketplace, payments',
    shortDescription:
      'A two-sided marketplace to list, let and book creative and commercial spaces — with chat, wallet and peer-to-peer payments built in.',
    lead:
      'A two-sided marketplace for creative and commercial spaces — list it, let it, book it, pay for it, all in one place.',
    tagsLine: 'Marketplace · Next.js · Node.js · Stripe Connect · MongoDB',
    colors: { bg: '#E92316', fg: '#D6D9DC', numeralColor: '', numeralOpacity: 0.1 },
    info: [
      { label: 'Role', value: 'Developer & concept design' },
      { label: 'Stack', value: 'Next.js, Node.js REST API, MongoDB, Stripe' },
      { label: 'Status', value: 'Launching now' },
    ],
    body: [
      {
        text: 'AboutSpace connects people with space to the people who need it — a marketplace to list, let and book creative and commercial venues. Built with project lead Jette Schneider (Timewindow).',
      },
      {
        text: 'The platform stays out of the way. In-app chat keeps conversations in one place, and peer-to-peer connect-and-pay (Stripe Connect) lets users transact directly, with a built-in wallet and subscription plans handling the rest.',
      },
      {
        text: 'Headless from the ground up — Next.js, a Node.js REST API and MongoDB — built to handle both sides of a marketplace from day one. Launching now.',
      },
    ],
  },

  {
    slug: 'threadly',
    number: 3,
    year: '2026',
    status: 'live',
    titlePlain: 'Threadly',
    titleLine1: 'Threadly',
    titleLine2: '',
    shortTag: 'saas, support',
    shortDescription:
      'Our own SaaS — a support-ticket system for support teams, agencies and solo operators. Shared inbox, SLA tracking, automation.',
    lead:
      "Support that doesn't slip through the cracks — a ticketing system for teams, agencies and solo operators.",
    tagsLine: 'SaaS · Support · Next.js · Node.js · MongoDB',
    colors: { bg: '#D6D9DC', fg: '#0F0F0F', numeralColor: '', numeralOpacity: 0.12 },
    info: [
      { label: 'Role', value: 'Solo build & architecture' },
      { label: 'Stack', value: 'Next.js, MongoDB, Node.js REST API' },
      { label: 'Status', value: 'Live — our own product' },
    ],
    body: [
      {
        text: "Threadly is raoul.studio's own SaaS: a support-ticket system built for support teams, agencies and solo operators who need to stay on top of every conversation.",
      },
      {
        text: 'A shared inbox pulls every channel into one place, SLA tracking keeps response times honest, and automation handles the repetitive work so the team can focus on the replies that matter.',
      },
      { text: 'Designed, built and architected in-house. We run on it too.' },
    ],
  },

  {
    slug: 'lexpert',
    number: 4,
    year: '2026',
    status: 'live',
    titlePlain: 'Lexpert CRM',
    titleLine1: 'Lexpert',
    titleLine2: 'CRM',
    shortTag: 'crm, legal',
    shortDescription:
      "A bespoke CRM for a law firm — clients, direct invoicing, metrics and role-based access, built to the firm's exact workflow.",
    lead: 'A full bespoke CRM for a law firm, built around how the practice actually runs.',
    tagsLine: 'CRM · Legal · Invoicing · Next.js · MongoDB',
    colors: { bg: '#0F0F0F', fg: '#D6D9DC', numeralColor: '#E92316', numeralOpacity: 0.15 },
    info: [
      { label: 'Role', value: 'Solo developer & lead architect' },
      { label: 'Stack', value: 'Next.js, MongoDB, Node.js' },
      { label: 'Client', value: 'Lexpert Advocaten' },
    ],
    body: [
      {
        text: 'Lexpert Advocaten needed a CRM shaped around legal practice, not a generic tool bent to fit. So we built one — managing clients and relations, billing them directly, and tracking the metrics that run the firm.',
      },
      {
        text: "Role-based user rights keep the right information with the right people, and the whole system was built to the firm's direction from the first decision to the last.",
      },
      {
        text: "A clean, single-purpose internal tool — the kind off-the-shelf software can't quite become.",
      },
    ],
  },

  {
    slug: 'fndracer',
    number: 5,
    year: '2026',
    status: 'in dev',
    titlePlain: 'FndRacer',
    titleLine1: 'FndRacer',
    titleLine2: '',
    shortTag: 'ai, funding',
    shortDescription:
      'An AI funding-application tool — scrapes funding sources, matches them to a business, and drafts a full application in about five minutes.',
    lead: 'From "what funding exists" to a full first-draft application in about five minutes.',
    tagsLine: 'AI · Funding · Next.js · OpenAI · MongoDB',
    colors: { bg: '#E92316', fg: '#0F0F0F', numeralColor: '#0F0F0F', numeralOpacity: 0.18 },
    info: [
      { label: 'Role', value: 'Solo build & architecture' },
      { label: 'Stack', value: 'Next.js, MongoDB, OpenAI' },
      { label: 'Status', value: 'In development' },
    ],
    body: [
      {
        text: 'Funding applications are slow, scattered and easy to get wrong. FndRacer takes the grind out of it: it scrapes funding sources, matches the right ones to a business, and uses AI to draft the application.',
      },
      {
        text: 'The whole thing runs in about a five-minute operation — a complete first draft, ready to refine instead of a blank page to fill.',
      },
      { text: 'In development now.' },
    ],
  },

  {
    slug: 'smart-dossier',
    number: 6,
    year: '2016 → 2026',
    status: 'in dev',
    titlePlain: 'Smart Dossier',
    titleLine1: 'Smart',
    titleLine2: 'Dossier',
    titleLine2Color: '#E92316',
    shortTag: 'ai, documents',
    shortDescription:
      'An AI document-dossier system — full-text search inside documents and automatic restructuring of large document sets.',
    lead:
      "Search inside the documents, not just their titles — and let AI restructure the pile while it's at it.",
    tagsLine: 'AI · Documents · Search · Next.js · MongoDB',
    colors: { bg: '#D6D9DC', fg: '#0F0F0F', numeralColor: '', numeralOpacity: 0.12 },
    info: [
      { label: 'Role', value: 'Solo developer & architect' },
      { label: 'Stack', value: 'PHP/MySQL → Next.js, MongoDB, Node.js + AI' },
      { label: 'Client', value: 'Vastgoedkor' },
    ],
    body: [
      {
        text: 'Smart Dossier started in 2016 as a PHP/MySQL document system for Vastgoedkor. In 2026 we rebuilt it into something smarter.',
      },
      {
        text: 'It searches the full text inside documents — not just filenames — and automatically restructures large, messy document sets into something you can actually navigate. AI does the heavy lifting on search and data structuring.',
      },
      {
        text: 'A decade-old tool, rebuilt for how document work is done now. In development.',
      },
    ],
  },

  {
    slug: 'aboutdesk',
    number: 7,
    year: '2026',
    status: 'in dev',
    titlePlain: 'AboutDesk',
    titleLine1: 'About',
    titleLine2: 'Desk',
    titleLine2Color: '#E92316',
    shortTag: 'booking, teams',
    shortDescription:
      'A team desk-booking app — organizations map their building and floors, and teams book desks in a room so they can sit and work together.',
    lead: 'Desk booking that keeps teams together, not just seated.',
    tagsLine: 'Booking · Teams · Next.js · Node.js · MongoDB',
    colors: { bg: '#0F0F0F', fg: '#D6D9DC', numeralColor: '#E92316', numeralOpacity: 0.15 },
    info: [
      { label: 'Role', value: 'Solo build & architecture' },
      { label: 'Stack', value: 'Next.js, MongoDB, Node.js' },
      { label: 'Status', value: 'In progress' },
    ],
    body: [
      {
        text: 'AboutDesk is a desk-booking app built around teams, not just seats. An organization maps its building and floors, and teams book their desks within a room — so the people who work together sit together.',
      },
      {
        text: 'Simple to run, simple to use: pick a room, grab the desks, done. Built as a standalone product.',
      },
      { text: 'In progress.' },
    ],
  },

  {
    slug: 'footsteppa',
    number: 8,
    year: '2025–present',
    status: 'ongoing',
    titlePlain: 'Footsteppa',
    titleLine1: 'Footsteppa',
    titleLine2: '',
    shortTag: 'brand, media',
    shortDescription:
      "The founder's own independent media brand and label — 6,000+ followers, 5 artists, expanding into events, merch and a record label.",
    lead: 'Proof the studio can build a brand from scratch, not just software.',
    tagsLine: 'Brand · Media · Community',
    colors: { bg: '#E92316', fg: '#D6D9DC', numeralColor: '', numeralOpacity: 0.1 },
    info: [
      { label: 'Role', value: 'Owner & founder' },
      { label: 'Reach', value: '6,000+ followers · 5 artists' },
      { label: 'Status', value: 'Ongoing — independent brand' },
    ],
    body: [
      {
        text: "Footsteppa is the founder's own independent media brand — built from nothing into a community of 6,000+ followers across five artists, with creative direction by Anoep Chowhari.",
      },
      {
        text: "It's growing beyond the screen too: into events, clothing and merch, and a record label.",
      },
      {
        text: 'We list it here as a range-piece. The same instinct that ships software — build it properly, grow it for the long run — works just as well on a brand.',
      },
    ],
  },

  {
    slug: 'no-cms',
    number: 9,
    year: '2026',
    status: 'new',
    titlePlain: 'No CMS',
    titleLine1: 'No',
    titleLine2: 'CMS',
    titleLine2Color: '#E92316',
    shortTag: 'websites, whatsapp',
    shortDescription:
      'Update your website by sending a WhatsApp. Change colours, copy, layout — anything — on the fly. It’s a CMS, reinvented: no dashboards, no logins, nothing to learn.',
    lead:
      'Run your whole website from WhatsApp. Send a message to change colours, copy or the entire layout, and watch it update on the fly. Everything a CMS does — without the CMS.',
    tagsLine: 'Product · WhatsApp · No login · Instant updates',
    colors: { bg: '#0F0F0F', fg: '#D6D9DC', numeralColor: '#E92316', numeralOpacity: 0.18 },
    info: [
      { label: 'Product', value: 'Website editing over WhatsApp' },
      { label: 'How it works', value: 'Message it like a person · changes go live on the fly' },
      { label: 'Status', value: 'New — early access' },
    ],
    body: [
      {
        text: 'No CMS turns WhatsApp into the only dashboard your website needs. Want to change a colour, rewrite a headline, swap a section or rethink the whole layout? Send a message — and watch it happen.',
      },
      {
        text: 'It works like a CMS, just smarter and far easier. No admin panel to learn, no logins to chase, no plugins to update. You already know how to send a WhatsApp — now that’s all it takes to run your site.',
      },
      {
        text: 'It turns the thing most people dread touching into something as easy as texting. New, and opening up to early users now.',
      },
    ],
  },

  {
    slug: 'anonimise',
    number: 10,
    year: '2026',
    status: 'live',
    titlePlain: 'Anonimise',
    titleLine1: 'Anonimise',
    titleLine2: '',
    shortTag: 'privacy, offline ai',
    shortDescription:
      'Strip the names, BSNs and personal data out of any document — with an AI that runs entirely on your own machine and never touches the internet. Clean it here, then it’s safe to paste into ChatGPT or Claude. Built with Lexpert Advocaten.',
    lead:
      'Anonymise sensitive documents before they ever reach an online AI — with a tool that runs fully offline, so no client data leaves the office.',
    tagsLine: 'Privacy · Offline AI · Presidio · spaCy · Legal-tech',
    colors: { bg: '#D6D9DC', fg: '#0F0F0F', numeralColor: '', numeralOpacity: 0.12 },
    info: [
      { label: 'Role', value: 'Developer & architect' },
      { label: 'Stack', value: 'Microsoft Presidio, offline spaCy NER, rule-based matching' },
      { label: 'Client', value: 'In cooperation with Lexpert Advocaten' },
    ],
    body: [
      {
        text: 'Professionals want to use AI, but can’t paste client files into ChatGPT. Anonimise is the tool you run first — it scrubs names, addresses, BSNs and bank numbers out of a document, so what’s left is safe to send to an online model.',
      },
      {
        text: 'It runs entirely on your own computer. The AI inside is a local name-recognition model — not a chatbot, never connected to any cloud — paired with strict rules for data that has a fixed shape, like the BSN’s 11-proef checksum and IBANs. Pull the network cable and it works exactly the same; it actively blocks itself from going online.',
      },
      {
        text: 'Out comes a clean text version with names swapped for neutral placeholders, plus a properly redacted PDF or Word file with the sensitive text removed, not just blacked out. You stay in charge — review every match, add your own words to redact — and nothing ever leaves your machine. Built with Lexpert Advocaten.',
      },
    ],
  },
]

export const projectSlugs = projects.map((p) => p.slug)

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
