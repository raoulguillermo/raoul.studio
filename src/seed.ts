/* eslint-disable @typescript-eslint/no-explicit-any */
import 'dotenv/config'
import { getPayload } from 'payload'
import config from './payload.config'

const seededProjectSlugs = new Set<string>()

async function upsertProject(payload: any, data: any) {
  seededProjectSlugs.add(data.slug)
  const existing = await payload.find({
    collection: 'projects',
    where: { slug: { equals: data.slug } },
    limit: 1,
  })
  if (existing.docs[0]) {
    await payload.update({
      collection: 'projects',
      id: existing.docs[0].id,
      data,
    })
    console.log(`  ↻ updated project: ${data.slug}`)
  } else {
    await payload.create({ collection: 'projects', data })
    console.log(`  + created project: ${data.slug}`)
  }
}

async function pruneProjects(payload: any) {
  const stale = await payload.find({
    collection: 'projects',
    where: { slug: { not_in: Array.from(seededProjectSlugs) } },
    limit: 1000,
  })
  for (const doc of stale.docs) {
    await payload.delete({ collection: 'projects', id: doc.id })
    console.log(`  − deleted stale project: ${doc.slug}`)
  }
}

async function upsertPage(payload: any, data: any) {
  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: data.slug } },
    limit: 1,
  })
  if (existing.docs[0]) {
    await payload.update({
      collection: 'pages',
      id: existing.docs[0].id,
      data,
    })
    console.log(`  ↻ updated page: ${data.slug}`)
  } else {
    await payload.create({ collection: 'pages', data })
    console.log(`  + created page: ${data.slug}`)
  }
}

async function main() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // ============ GLOBALS ============
  console.log('Seeding globals…')

  await payload.updateGlobal({
    slug: 'header',
    data: {
      wordmark: 'raoul.studio',
      wordmarkHref: '/',
      ctaLabel: "let's talk",
      ctaHref: '/contact',
    },
  })

  await payload.updateGlobal({
    slug: 'menu',
    data: {
      eyebrow: 'Menu — 2026',
      columns: [
        {
          heading: '01 — Studio',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/about#services' },
            { label: 'Process', href: '/process' },
            { label: 'Manifesto', href: '/about#manifesto' },
          ],
        },
        {
          heading: '02 — Work',
          links: [
            { label: 'Booking', href: '/projects/booking' },
            { label: 'Magento', href: '/projects/magento' },
            { label: 'Footsteppa', href: '/projects/footsteppa' },
            { label: 'Fund Scraper', href: '/projects/fundscraper' },
            { label: 'Archive', href: '#' },
          ],
        },
        {
          heading: '03 — Connect',
          links: [
            { label: "Let's talk", href: '/contact' },
            { label: 'Email', href: 'mailto:hello@raoul.studio' },
            { label: 'LinkedIn', href: '#' },
            { label: 'GitHub', href: '#' },
          ],
        },
      ],
      footerLeft: '© raoul.studio · 2026',
      footerRightLabel: 'hello@raoul.studio',
      footerRightHref: 'mailto:hello@raoul.studio',
    },
  })

  await payload.updateGlobal({
    slug: 'posterRail',
    data: {
      topText: 'raoul.studio — Edition 2026',
      middleText: 'code · concept & engineering studio',
      bottomText: 'raoul.studio',
    },
  })

  await payload.updateGlobal({
    slug: 'footer',
    data: {
      leftText: '© 2026 raoul.studio',
      rightText: 'EU · Remote',
    },
  })

  await payload.updateGlobal({
    slug: 'home',
    data: {
      meta: {
        title: 'raoul.studio — design + engineering studio',
        description:
          'raoul.studio is a small product studio. We design and build web software, platforms and tools for teams that ship.',
      },
      hero: {
        prefix: 'I build and automate',
        accent: 'digital systems',
        suffix: 'for people who would rather ship than meet.',
      },
      intro:
        'raoul.studio is a small product studio designing, engineering and shipping web software, platforms and tools — booking systems, e-commerce stacks, internal dashboards, automations. AI is part of the toolkit when it earns its keep. Days and weeks, not quarters.',
      selectedWorkLabel: 'Selected work',
      contact: {
        eyebrow: 'Got an idea or a stuck project?',
        beforeLink: 'Write to ',
        linkLabel: 'hello@raoul.studio',
        linkHref: 'mailto:hello@raoul.studio',
        afterLink:
          ".\nA straight answer back on whether it's worth building.",
      },
    },
  })

  await payload.updateGlobal({
    slug: 'contact',
    data: {
      meta: {
        title: "Let's talk — raoul.studio",
        description: 'Get in touch with raoul.studio.',
      },
      eyebrow: 'Get in touch',
      titleLine1: "Let's",
      titleLine2: 'talk',
      titleAccent: '.',
      lead:
        "Got an idea, a stuck project, or want a sanity check? Drop a line — I read every message and reply within 24 hours.",
      form: {
        nameLabel: 'Your name',
        namePlaceholder: 'Jane Doe',
        emailLabel: 'Email',
        emailPlaceholder: 'jane@company.com',
        companyLabel: 'Company / project',
        companyOptional: 'optional',
        companyPlaceholder: 'Acme Inc.',
        messageLabel: 'What are you working on?',
        messagePlaceholder:
          "A few sentences is enough — what you're building, what's stuck, what you want from me.",
        sendLabel: 'send message',
        recipient: 'hello@raoul.studio',
      },
      directContact: {
        label: 'Or write me directly',
        email: 'hello@raoul.studio',
      },
      posterRailMiddle: "Let's talk · Get in touch",
    },
  })

  console.log('Seeding pages…')

  // ============ PAGES ============
  await upsertPage(payload, {
    slug: 'about',
    meta: {
      title: 'About — raoul.studio',
      description:
        'Raoul Studio is a creative technology studio operating at the intersection of design, development, and digital culture.',
    },
    eyebrow: 'About',
    titleLine1: 'About',
    titleAccent: '.',
    intro: [
      {
        text: 'Raoul Studio is a creative technology studio operating at the intersection of design, development, and digital culture.',
      },
      {
        text: 'Founded by Raoul Guillermo, the studio builds digital products, platforms, and experiences that are meant to perform — technically, visually, and commercially.',
      },
      {
        text: 'With over 25 years of experience across software development and electronic music, the work combines deep technical knowledge with a strong sense of timing, aesthetics, and energy. This results in products that don’t just function, but connect.',
      },
    ],
    servicesLabel: 'The studio works across',
    services: [
      { label: 'Custom web platforms and applications' },
      { label: 'Headless e-commerce and CMS architectures' },
      { label: 'AI-driven tools and automation' },
      { label: 'Brand-driven digital experiences' },
    ],
    systemsParagraph:
      'Each project is approached as a system — not just a website or app, but something that needs to scale, evolve, and hold attention.',
    manifestoLead: 'Raoul Studio is not built around volume.',
    manifestoTail: 'It’s built around focus, quality, and long-term thinking.',
    posterRailMiddle: 'About · Studio · Manifesto',
  })

  await upsertPage(payload, {
    slug: 'process',
    meta: {
      title: 'Process — raoul.studio',
      description:
        'How Raoul Studio works — direction, structure, design, build, iterate, scale.',
    },
    eyebrow: 'Process',
    titleLine1: 'Process',
    titleAccent: '.',
    lead:
      'At Raoul Studio, every project follows a clear structure. Not to slow things down — but to move faster with better results.',
    steps: [
      {
        title: 'Direction',
        lead: 'Everything starts with clarity.',
        body: [
          { text: 'We define the goal, the context, and the constraints.' },
          {
            text: 'What needs to be built, why it matters, and what success actually looks like.',
          },
          { text: 'No vague ideas. No guessing.' },
        ],
      },
      {
        title: 'Structure',
        lead: 'Before design or code, the system is mapped.',
        body: [
          { text: 'Architecture, data flow, and core logic are defined upfront.' },
          { text: 'This is where most projects win or fail.' },
          { text: 'A solid foundation removes friction later.' },
        ],
      },
      {
        title: 'Design',
        lead: 'Design is not decoration — it’s communication.',
        body: [
          { text: 'Interfaces are built to be clear, fast, and intentional.' },
          {
            text: 'Every decision supports usability, performance, and brand identity.',
          },
        ],
      },
      {
        title: 'Build',
        lead: 'Clean, scalable development.',
        body: [
          {
            text: 'From frontend to backend, everything is built to perform and evolve.',
          },
          { text: 'No unnecessary complexity. No shortcuts that break later.' },
        ],
      },
      {
        title: 'Iterate',
        lead: 'Launch is not the finish line.',
        body: [
          { text: 'Real-world usage reveals what matters.' },
          {
            text: 'Based on data and feedback, the product is refined and improved.',
          },
        ],
      },
      {
        title: 'Scale',
        lead: 'Once the foundation is solid, growth becomes predictable.',
        body: [
          {
            text: 'New features, integrations, and optimizations are added without breaking the system.',
          },
        ],
      },
    ],
    howWeWork: {
      label: 'How we work',
      lead:
        'Raoul Studio is led by Raoul Guillermo and operates as a focused, high-level studio.',
      points: [
        { label: 'Direct communication' },
        { label: 'Fast decision-making' },
        { label: 'No layers, no noise' },
      ],
      closing: 'You work with someone who builds — not just manages.',
    },
    posterRailMiddle: 'Process · Direction → Scale',
  })

  console.log('Seeding projects…')

  // ============ PROJECTS ============
  await upsertProject(payload, {
    slug: 'booking',
    number: 1,
    year: '2024',
    titlePlain: 'Booking Platform',
    titleLine1: 'Booking',
    titleLine2: 'Platform',
    shortTag: 'web, payments',
    shortDescription:
      'A full-stack booking system handling payments, calendars and capacity for a multi-location service business.',
    lead:
      'A full-stack booking system handling payments, calendars and capacity for a multi-location service business.',
    tagsLine: 'Web · Payments · Calendar · Stripe',
    colors: {
      bg: '#E92316',
      fg: '#D6D9DC',
      numeralColor: '',
      numeralOpacity: 0.1,
    },
    info: [
      { label: 'Role', value: 'Solo · Design + Engineering' },
      { label: 'Stack', value: 'Next.js · Stripe · Postgres · Vercel' },
      { label: 'Status', value: 'Live · 12 locations' },
    ],
    body: [
      {
        text:
          'The challenge was orchestrating concurrent bookings across multiple service providers, locations and time zones — all while keeping the customer-facing flow under three taps from intent to confirmed slot.',
      },
      {
        text:
          'Built the entire stack from scratch: a Next.js front-end, a Postgres-backed availability engine that prevents double-booking via row-level locks, Stripe payment intents for deposits, and a Slack/email notification layer for staff. Self-serve admin tools let owners adjust pricing, capacity and rules without touching code.',
      },
      {
        text:
          'The system has been live for eighteen months across twelve locations with zero double-bookings and a measurable lift in fill rate during off-peak hours.',
      },
    ],
  })

  await upsertProject(payload, {
    slug: 'magento',
    number: 2,
    year: '2023',
    titlePlain: 'Magento at Scale',
    titleLine1: 'Magento',
    titleLine2: 'at scale',
    titleLine2Color: '#E92316',
    shortTag: 'e-commerce, performance',
    shortDescription:
      'Replatformed and tuned a Magento store doing eight figures — sub-second TTFB, headless storefront, automated ops.',
    lead:
      'Replatformed and tuned a Magento store doing eight figures — sub-second TTFB, headless storefront, automated ops.',
    tagsLine: 'E-commerce · Performance · Infra',
    colors: {
      bg: '#0F0F0F',
      fg: '#D6D9DC',
      numeralColor: '#E92316',
      numeralOpacity: 0.18,
    },
    info: [
      { label: 'Role', value: 'Lead Engineer' },
      { label: 'Stack', value: 'Magento · Redis · Varnish · Headless React' },
      { label: 'Result', value: 'TTFB 220ms · +4× conversion' },
    ],
    body: [
      {
        text:
          'The store had outgrown its monolith — page loads were 4 seconds, the catalog refresh blocked checkout, and ops needed manual intervention every week.',
      },
      {
        text:
          'I cut the front-end off the Magento monolith into a headless React storefront, layered Redis + Varnish for catalog and full-page caching, and wrote a small automation toolkit to handle deployments, indexer runs and inventory sync from suppliers. Net result: sub-second TTFB, a 4× conversion lift, and zero-touch ops on weekends.',
      },
      {
        text:
          'The platform now handles flash sales without a sweat — recently sustained 18× normal traffic for a Black Friday window with no degradation.',
      },
    ],
  })

  await upsertProject(payload, {
    slug: 'footsteppa',
    number: 3,
    year: '2025',
    titlePlain: 'Footsteppa',
    titleLine1: 'Footsteppa',
    titleLine2: '',
    shortTag: 'media, tech',
    shortDescription:
      'A media + tech platform for the streetwear world — editorial, drops and audience tools, all on one stack.',
    lead:
      'A media + tech platform for the streetwear world — editorial, drops and audience tools, all on one stack.',
    tagsLine: 'Media · Tech · Product · Community',
    colors: {
      bg: '#D6D9DC',
      fg: '#0F0F0F',
      numeralColor: '',
      numeralOpacity: 0.12,
    },
    info: [
      { label: 'Role', value: 'Founder · Engineering · Product' },
      { label: 'Stack', value: 'Next.js · Sanity · Postgres · Algolia' },
      { label: 'Reach', value: '150k MAU · 40k subscribers' },
    ],
    body: [
      {
        text:
          'Streetwear coverage is fragmented across blogs, Instagram and Discord. Footsteppa unifies the editorial side (long-form writing, release calendars, brand archives) with the audience side (newsletters, drop alerts, community polls) in a single platform.',
      },
      {
        text:
          'The CMS is Sanity, the storefront is Next.js, search runs on Algolia. Drop alerts use a Postgres queue + worker pool to fan out notifications across email, web push and Discord webhooks within seconds of a release going live.',
      },
      {
        text:
          'What started as a personal side-project now reaches 150k monthly readers and powers releases for several boutique brands.',
      },
    ],
  })

  await upsertProject(payload, {
    slug: 'fundscraper',
    number: 4,
    year: '2026',
    titlePlain: 'Fund Scraper',
    titleLine1: 'Fund',
    titleLine2: 'Scraper',
    titleLine2Color: '#D6D9DC',
    shortTag: 'saas, funding',
    shortDescription:
      "A SaaS for founders chasing public funding — finds programmes you qualify for, drafts the application, and alerts you on deadlines. Never miss money you could've won.",
    lead:
      "A SaaS that scrapes public funding sources, matches them to your business, and auto-drafts the application — so founders never miss a deadline they could've won.",
    tagsLine: 'SaaS · Funding · Drafting · Alerts',
    colors: {
      bg: '#E92316',
      fg: '#0F0F0F',
      numeralColor: '#0F0F0F',
      numeralOpacity: 0.18,
    },
    info: [
      { label: 'Role', value: 'Founder · Solo build' },
      { label: 'Stack', value: 'Python · Anthropic · Postgres · Next.js' },
      { label: 'Status', value: 'Beta · 80+ teams' },
    ],
    body: [
      {
        text:
          "Most public funding leaves money on the table because founders don't know it exists, or only find out after the deadline. Fund Scraper crawls government, EU, regional and foundation programmes, parses them into a structured database, and matches each one against the founder's business profile.",
      },
      {
        text:
          'The drafting layer uses LLMs with strict structured prompts to produce a first-draft application — not to send blindly, but to give founders a 70% head-start and a checklist of what\'s missing. Teams get notified the moment a relevant programme opens, with a draft already waiting.',
      },
      {
        text:
          'In closed beta with eighty teams, Fund Scraper has surfaced over €4M in eligible funding and delivered a 30% time-to-submit reduction on average.',
      },
    ],
  })

  console.log('Pruning stale projects…')
  await pruneProjects(payload)

  console.log('✓ Seed complete.')
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
