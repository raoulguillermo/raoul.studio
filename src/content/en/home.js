// Home page content.

export const home = {
  meta: {
    title: 'raoul.studio — in business with you',
    description:
      'studio.raoul is a digital product studio that helps ambitious businesses turn ideas into scalable digital products — strategy, design, software engineering, AI, automation, commerce and infrastructure.',
  },
  hero: {
    prefix: 'In business',
    accent: 'with you',
    suffix: '',
    ctaLabel: 'see what the studio does',
    ctaHref: '/services',
  },
  intro:
    'From AI-powered platforms and custom software to automation, commerce, branding, and infrastructure.',
  clients: {
    label: 'Clients',
  },
  pillars: {
    label: 'What the studio does',
    items: [
      {
        title: 'Products',
        body: 'Custom SaaS platforms, portals, internal tools and customer experiences — built end to end and made to run in production.',
      },
      {
        title: 'AI',
        body: 'AI agents, document intelligence, automation and intelligent integrations, woven into how a business actually works.',
      },
      {
        title: 'Commerce',
        body: 'E-commerce at scale — Magento, headless storefronts, PIM and ERP integrations, and the custom back offices behind them.',
      },
      {
        title: 'Brand',
        body: 'Identity, websites and digital experiences — the product and the brand around it, designed and built together.',
      },
      {
        title: 'Growth',
        body: 'Long-term technical partnerships — infrastructure, optimisation and continuous product evolution long after launch.',
      },
    ],
  },
  featuredWork: {
    label: 'Selected work',
    lead: 'How the studio helps ambitious businesses solve hard problems.',
    allLabel: 'Work',
    allServicesLabel: 'Services',
    allSoftwareLabel: 'Software',
    items: [
      {
        slug: 'screensaver',
        tagline:
          'Turning an idle Mac screen into one giant clock — white on black, the seconds highlighted in red. Free to download.',
        metrics: ['Free download', 'Signed by Apple', 'Installs in seconds'],
      },
      {
        slug: 'poofy',
        tagline:
          'Running the studio’s own day-to-day on a gesture-first todo app — iPhone widget, Mac menu bar, one shared codebase.',
        metrics: ['iPhone + Mac', 'One SwiftUI codebase', 'Gesture-first'],
      },
      {
        slug: 'anonimise',
        tagline:
          'Letting a law firm put AI to work without a single client file ever leaving the building.',
        metrics: ['Fully offline AI', 'On-device redaction', 'GDPR-safe by design'],
      },
      {
        slug: 'lexpert',
        tagline:
          'Replacing generic tools with a bespoke CRM built around how a law firm actually runs.',
        metrics: ['Bespoke CRM', 'Direct invoicing', 'Role-based access'],
      },
      {
        slug: 'outdoorxl',
        tagline:
          'Rebuilding one of Europe’s largest outdoor retailers into a modern, headless commerce platform.',
        metrics: ['200K+ products', '14 markets', 'Headless migration'],
      },
    ],
  },
  insights: {
    label: 'Insights',
    lead: 'Thoughts on AI, software engineering and digital products.',
    allLabel: 'All articles',
  },
  blogTitle: 'Blog',

  contact: {
    eyebrow: 'Got something to build?',
    beforeLink: 'Tell us about it — ',
    linkLabel: 'hello@raoul.studio',
    linkHref: '/contact',
    afterLink: '',
  },
}
