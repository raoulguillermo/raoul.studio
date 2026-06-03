// Flat content for the static pages (about, process, work), keyed by slug.

export const pages = {
  work: {
    slug: 'work',
    meta: {
      title: 'Work — raoul.studio',
      description:
        'Selected projects from the studio — custom platforms, SaaS, AI tools, headless e-commerce and CRMs built for fintech, law and commercial teams.',
    },
    eyebrow: 'Selected work',
    titleLine1: 'Work',
    titleAccent: '.',
    lead:
      "Every project is custom, built end to end, and made to run in production. A look at what the studio has shipped — and what it's building now.",
    posterRailMiddle: 'Work · Selected projects',
  },

  about: {
    slug: 'about',
    meta: {
      title: 'About — raoul.studio',
      description:
        'A founder-led product & engineering studio building custom software for fintech, law, agencies and e-commerce. Hand-tailored, production-grade, built to scale.',
    },
    eyebrow: 'About',
    titleLine1: 'About',
    titleAccent: '.',
    intro: [
      {
        text: 'raoul.studio is a product and engineering studio. We build custom-made, hand-tailored tools and platforms — software shaped around how a business actually works, not the other way around.',
      },
      {
        text: 'We work with fintech, law firms, commercial agencies and e-commerce teams. Some of it is client work; some of it is our own products. All of it is built to run in production.',
      },
      {
        text: 'Founder-led by Raoul Guillermo, with a long track record building production software end to end. Small team, direct line, no layers between the brief and the build.',
      },
    ],
    servicesLabel: 'The studio works across',
    services: [
      { label: 'Custom web platforms & SaaS' },
      { label: 'Headless e-commerce at scale' },
      { label: 'AI tools & automation' },
      { label: 'CRMs & internal tooling' },
      { label: 'APIs & system architecture' },
      { label: 'Two-sided marketplaces' },
    ],
    systemsParagraph:
      "We don't ship one-off pages. Every project is built as a system — clean architecture, real data models, room to grow. The first version should hold up under load, and the tenth feature shouldn't fight the first. Custom work, made to scale.",
    manifestoLead: "We'd rather do a few things properly than many things fast.",
    manifestoTail: 'Founder-led, custom-built, in it for the long run.',
    posterRailMiddle: 'About · Studio · Manifesto',
  },

  process: {
    slug: 'process',
    meta: {
      title: 'Process — raoul.studio',
      description:
        'How the studio works: direction, structure, design, build, iterate, scale. Founder-led, direct, focused on shipping custom software that lasts.',
    },
    eyebrow: 'Process',
    titleLine1: 'Process',
    titleAccent: '.',
    lead:
      'Six stages, one principle: understand the system before you build it. We move fast because the thinking is done up front, not because we skip it. Custom software, shaped step by step.',
    steps: [
      {
        title: 'Direction',
        lead: "Figure out what we're actually building.",
        body: [
          {
            text: 'We start with the problem, not the feature list. What’s broken, what’s slow, what’s costing you — and what "done" looks like.',
          },
          {
            text: "You leave this stage with a clear scope and a shared idea of where we're headed. No surprises later.",
          },
        ],
      },
      {
        title: 'Structure',
        lead: 'Design the system underneath.',
        body: [
          {
            text: 'Before a single screen, we map the data, the flows and the architecture. Custom tools live or die on what’s underneath.',
          },
          {
            text: 'Get this right and everything after it gets easier. Get it wrong and you pay for it forever.',
          },
        ],
      },
      {
        title: 'Design',
        lead: 'Make it clear, make it usable.',
        body: [
          {
            text: "We design around the real workflow — the daily actions, the edge cases, the people who'll actually use it.",
          },
          {
            text: 'Sharp, fast, no clutter. The interface should disappear and let the work happen.',
          },
        ],
      },
      {
        title: 'Build',
        lead: 'Ship production-grade code.',
        body: [
          {
            text: 'Hand-tailored, no boilerplate bloat. Modern stack, clean codebase, built to run in production from day one.',
          },
          {
            text: 'We build in the open with you — you see progress as it lands, not in one big reveal at the end.',
          },
        ],
      },
      {
        title: 'Iterate',
        lead: 'Get it in front of real use.',
        body: [
          {
            text: "Real users surface what specs can't. We ship, watch, and tighten — fast loops, small releases.",
          },
          { text: 'The product gets sharper every cycle.' },
        ],
      },
      {
        title: 'Scale',
        lead: 'Built to grow with you.',
        body: [
          {
            text: 'More users, more data, more languages, more features — the system was built to take it.',
          },
          {
            text: "We stick around. Most of our work is long-term, and we treat what we build like it's ours.",
          },
        ],
      },
    ],
    howWeWork: {
      label: 'How we work',
      lead: 'Founder-led and direct. You talk to the people building the thing.',
      points: [
        { label: 'Direct communication' },
        { label: 'Fast decisions' },
        { label: 'No layers, no noise' },
      ],
      closing: 'You work with people who build.',
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: 'What does raoul.studio do?',
          a: 'raoul.studio is a founder-led product and engineering studio that builds custom, hand-tailored software — web platforms and SaaS, headless e-commerce, AI tools and automation, CRMs and internal tooling, APIs and two-sided marketplaces — for fintech, law firms, commercial agencies and e-commerce teams.',
        },
        {
          q: 'How does the studio work?',
          a: 'Every project runs through six stages: Direction, Structure, Design, Build, Iterate and Scale. The principle is to understand the system before building it — the thinking is done up front, so the build moves fast without skipping steps.',
        },
        {
          q: 'How long does a project take?',
          a: 'It depends on scope, but the studio works in fast loops with small, frequent releases rather than one big reveal at the end. You see progress as it lands and the product gets sharper every cycle, because the architecture and direction are settled before the build starts.',
        },
        {
          q: 'Who does the studio work with?',
          a: 'Mostly fintech, law firms, commercial agencies and e-commerce teams. Some work is for clients, some is the studio’s own products — all of it is built to run in production. Real briefs only.',
        },
        {
          q: 'Do you offer ongoing support after launch?',
          a: 'Yes. Most of the studio’s work is long-term: systems are built to grow with you across more users, data, languages and features, and the team stays involved rather than handing off and disappearing.',
        },
        {
          q: 'How do I start a project?',
          a: 'Tell the studio what you’re building or what’s slowing you down — email hello@raoul.studio or use the contact page. Every real brief gets read, with a reply within 24 hours.',
        },
      ],
    },
    posterRailMiddle: 'Process · Direction → Scale',
  },
}
