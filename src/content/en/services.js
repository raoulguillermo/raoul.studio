// Services page — what the studio does, with the agent-structure offer up front.
// No client or vendor names on this page.

export const services = {
  meta: {
    title: 'Services — AI agent structures, software & digital products',
    description:
      'What raoul.studio does: complete AI agent structures that run the day-to-day of a business, custom software and platforms, automation, commerce, brand and long-term product partnerships.',
  },
  eyebrow: 'Services',
  titleLine1: 'Services',
  titleAccent: '.',
  lead: 'The studio designs, builds and runs the systems a business runs on — from a single tool to a complete team of AI agents that handles the day-to-day for you.',

  agents: {
    label: '01 — AI agent structures',
    heading: 'A team of AI agents that runs your business with you.',
    intro: [
      'Not a chatbot on your website. The studio builds a complete structure of AI agents, each with its own job — answering the phone, handling email, taking orders, planning, invoicing, following up, reporting — working together like a well-run team.',
      'Every agent is connected to the systems you already use, knows exactly what it is and isn’t allowed to do, and hands over to a person when that’s the better answer. You stay in charge of the decisions. The agents take care of the rest, day and night.',
    ],
    diagram: {
      owner: 'You',
      ownerNote: 'Set the goals · approve what matters',
      orchestrator: 'Coordinator',
      orchestratorNote: 'Divides the work · checks results · escalates',
      teams: [
        { name: 'Front office', agents: ['Phone', 'Email', 'WhatsApp & chat'] },
        { name: 'Operations', agents: ['Orders', 'Planning', 'Follow-up'] },
        { name: 'Back office', agents: ['Invoicing', 'Reporting', 'Admin'] },
      ],
      systems: 'Your systems',
      systemsNote: 'CRM · agenda · webshop · ERP · bookkeeping · inbox',
      caption: 'An agent structure',
    },
    stepsLabel: 'How the studio sets it up',
    steps: [
      {
        title: 'Map the business',
        body: 'The studio sits down with you and maps how work actually flows: which questions come in, which tasks repeat, which decisions need a person and where time and money leak away.',
      },
      {
        title: 'Design the structure',
        body: 'The work is divided into roles — one agent per job — with a coordinator on top. For every role it’s decided what the agent may read, what it may change and when it must ask you first.',
      },
      {
        title: 'Connect your systems',
        body: 'The agents are wired into the tools you already run on: CRM, agenda, webshop, till, bookkeeping, email and phone. Where a system has no connection yet, the studio builds one — or builds the system itself.',
      },
      {
        title: 'Test it on real work',
        body: 'An agent is tested against the real work it will be doing, and you see what it produces before it is allowed to act on its own.',
      },
      {
        title: 'Hand over, then keep improving',
        body: 'Once live, the studio keeps watching, tuning and extending the structure — a new agent for a new task, a new connection when your business changes.',
      },
    ],
    guardrailsLabel: 'You stay in control',
    guardrails: [
      {
        title: 'Clear permissions',
        body: 'Each agent can only touch what its job needs. An agent that takes orders can’t issue refunds.',
      },
      {
        title: 'Confirmation built in',
        body: 'Anything that matters is confirmed before it happens — and that check is enforced by the system, not left to the AI.',
      },
      {
        title: 'A person when it counts',
        body: 'Agents know when to stop and pass work on to you or your team, with everything needed to pick it up.',
      },
      {
        title: 'Everything logged',
        body: 'Every call, message and action is recorded, so you can always see what happened and why.',
      },
    ],
  },

  offer: {
    label: '02 — Everything around it',
    lead: 'Agents are only as good as the systems underneath them. The studio builds those too.',
    items: [
      {
        title: 'Custom software & platforms',
        body: 'SaaS platforms, portals, marketplaces and internal tools — designed, built and run in production.',
      },
      {
        title: 'Automation & integrations',
        body: 'Connecting the tools a business already uses, so data flows by itself instead of being copied by hand.',
      },
      {
        title: 'AI tools',
        body: 'Document intelligence, search, privacy-safe AI that runs on your own hardware, and assistants built into your workflow.',
      },
      {
        title: 'Commerce',
        body: 'Webshops at scale, headless storefronts, product and stock management, and the back offices behind them.',
      },
      {
        title: 'Brand & websites',
        body: 'Identity, websites and digital experiences — the product and the brand around it, designed together.',
      },
      {
        title: 'Infrastructure & growth',
        body: 'Hosting, security, performance and continuous development long after launch.',
      },
    ],
  },

  faq: {
    label: 'FAQ',
    items: [
      {
        q: 'Can AI agents really run a business?',
        a: 'They can run a large part of the day-to-day: answering customers, processing orders and bookings, following up, preparing invoices and reports. Decisions that matter stay with you — the structure is built so the agents do the work and you approve what counts.',
      },
      {
        q: 'Do I have to replace my current software?',
        a: 'No. Agents are connected to the systems you already use. Only where something is missing or holding you back does the studio build something new.',
      },
      {
        q: 'Where do I start?',
        a: 'Usually with the one task that costs the most time or loses the most money — often the phone or the inbox. One agent goes live first, and the structure grows from there.',
      },
      {
        q: 'What if an agent gets something wrong?',
        a: 'Agents only act within the permissions they’re given, important actions need confirmation, and everything is logged. When an agent isn’t sure, it hands over to a person instead of guessing.',
      },
      {
        q: 'What does it cost?',
        a: 'It depends on how many agents, which systems they connect to and how much is custom-built. Tell the studio what you have in mind and you get an answer for your situation.',
      },
    ],
  },

  cta: {
    heading: 'What would you hand over first?',
    body: 'Tell the studio how your business runs today. You’ll get a reply within 24 hours.',
    label: 'Let’s talk',
    href: '/contact',
  },
  posterRailMiddle: 'Services · Agents, software & products',
}
