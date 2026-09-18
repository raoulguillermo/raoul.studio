// Software landing pages — English copy (canonical).
// Routes, links and CTA kinds live in ../products.js.

export const products = {
  'voice-ai': {
    meta: {
      title: 'Voice AI — an AI phone agent for your business',
      description:
        'An AI phone agent that answers your business line, talks like a person and gets the job done — takes orders, books appointments, logs requests — straight into your own systems.',
    },
    eyebrow: 'Software · Voice AI',
    titleLine1: 'Voice',
    titleLine2: 'AI',
    lead: 'An AI that answers your phone like your best employee — and puts every call straight into your own systems.',
    primaryCta: 'Book a demo',
    caseStudyCta: 'How the studio built it',
    highlights: [
      { label: 'Answers', value: 'Every call, day and night' },
      { label: 'Speaks', value: 'Dutch and English — switches mid-call' },
      { label: 'Connects', value: 'Your CRM, calendar, webshop or ERP' },
    ],
    problem: {
      label: 'The problem',
      heading: 'The phone rings when nobody can pick up.',
      body: [
        'In the middle of a haircut, under a car, during the dinner rush, in a meeting with a client. Every missed call is a missed order, a missed booking or a customer who rings the competitor instead.',
        'Most of those calls are the same handful of questions. Voice AI answers them — properly, in a normal conversation — and hands over to a person when it should.',
      ],
    },
    steps: {
      label: 'How it works',
      items: [
        {
          title: 'Someone calls',
          body: 'Your customers call your normal number. The agent picks up and talks like a person — they can interrupt it mid-sentence, just like with anyone else.',
        },
        {
          title: 'It checks your real data',
          body: 'While the call is going on, it looks things up in your own systems: your menu, your calendar, your stock, your opening hours. It only offers what’s actually available.',
        },
        {
          title: 'It confirms, then acts',
          body: 'It reads everything back first. Only after the caller really says yes does it act — and that check is done by the system itself, not left to the AI.',
        },
        {
          title: 'It lands in your system',
          body: 'The order, booking or request shows up where you already work — your order system, CRM, agenda or inbox — as if it came in through your website.',
        },
      ],
    },
    features: {
      label: 'What it can do',
      items: [
        { title: 'Take orders', body: 'Pickup and delivery orders from your real menu or catalogue, with sizes, extras and prices — straight into your order system.' },
        { title: 'Book appointments', body: 'Checks your calendar, books, moves or cancels appointments, and confirms the time with the caller.' },
        { title: 'Recognise regulars', body: 'Knows returning callers by their number, so they don’t have to explain who they are every time.' },
        { title: 'Log requests', body: 'Takes down a problem report or a question and emails it on, or opens a ticket in your system.' },
        { title: 'Hand over to a person', body: 'Puts the caller through to someone on your team whenever that’s the better answer.' },
        { title: 'Stay in its lane', body: 'You decide exactly what it can and can’t do. The restaurant agent, for example, can place new orders, but can’t change, cancel or refund anything.' },
      ],
    },
    useCases: {
      label: 'Made for',
      lead: 'Anywhere the phone rings with the same questions every day.',
      items: ['Restaurants', 'Hairdressers & salons', 'Garages', 'Clinics & practices', 'Law firms', 'Rental companies'],
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: 'Does it sound like a robot?',
          a: 'No. It uses a natural voice, handles interruptions and, when it needs a moment, says so the way a person would. Callers talk to it like they would to your staff.',
        },
        {
          q: 'Do I need to change my phone number?',
          a: 'No. Callers keep dialling your normal number. The studio routes it to the agent — all calls, only out of hours, or only when your team doesn’t pick up.',
        },
        {
          q: 'Which systems can it connect to?',
          a: 'Almost anything with an API: CRMs, booking platforms, webshops, till and ERP systems, ticketing tools and email. The studio also builds custom systems, so if yours doesn’t have an API yet, that part can be built too.',
        },
        {
          q: 'Which languages does it speak?',
          a: 'Dutch and English out of the box, and it switches when the caller does. Other languages are possible — ask us.',
        },
        {
          q: 'Can it make mistakes?',
          a: 'It reads everything back and only acts after a clear yes, and that confirmation is enforced by the system, not by the AI. You also decide exactly which actions it’s allowed to take.',
        },
        {
          q: 'What does it cost?',
          a: 'It depends on your call volume and which systems it connects to. Book a demo and you’ll get a clear, fixed quote.',
        },
      ],
    },
    getStarted: {
      label: 'Book a demo',
      heading: 'Hear it on your own business.',
      body: 'Tell us what kind of calls you get and which systems you use. The studio replies within 24 hours to set up a demo.',
      form: {
        messageLabel: 'Your calls',
        messagePlaceholder:
          'What do people call you about? Orders, appointments, questions? Roughly how many calls a day, and which systems do you use (booking tool, CRM, webshop…)?',
        sendLabel: 'book a demo',
      },
    },
    posterRailMiddle: 'Voice AI · Never miss a call',
  },

  'no-cms': {
    meta: {
      title: 'No-CMS — edit your website by WhatsApp',
      description:
        'Run your whole website from WhatsApp. Send a message to change copy, colours, photos or the layout, and watch it go live. Everything a CMS does — without the CMS.',
    },
    eyebrow: 'Software · No-CMS',
    titleLine1: 'No',
    titleLine2: 'CMS',
    lead: 'Change your website by sending a WhatsApp. No dashboard, no login, nothing to learn.',
    primaryCta: 'Get early access',
    caseStudyCta: 'Read the story',
    highlights: [
      { label: 'Edit with', value: 'A WhatsApp message' },
      { label: 'Changes', value: 'Go live on the fly' },
      { label: 'Status', value: 'New — early access' },
    ],
    problem: {
      label: 'The problem',
      heading: 'Nobody wants to log into their website.',
      body: [
        'A new opening time, a price change, this week’s special, a fresh photo. Small changes — but they mean finding the login, learning an admin panel, updating plugins or waiting for your web builder.',
        'So the website slowly goes out of date. No-CMS turns the part everyone dreads into something as easy as texting.',
      ],
    },
    steps: {
      label: 'How it works',
      items: [
        {
          title: 'Send a message',
          body: 'Text your website like you’d text a person: “Change the opening hours to 9 to 6” or “Make the header red and swap the hero photo”.',
        },
        {
          title: 'It makes the change',
          body: 'No-CMS understands what you mean and updates the copy, colours, images or layout of your site.',
        },
        {
          title: 'It’s live',
          body: 'Your website updates on the fly. No publishing button, no cache to clear, no one to wait for.',
        },
      ],
    },
    features: {
      label: 'What you can change',
      items: [
        { title: 'Copy', body: 'Rewrite a headline, update prices, opening hours or a menu, add this week’s news.' },
        { title: 'Colours & style', body: 'Change a colour, a button or the look of a section — just describe it.' },
        { title: 'Photos', body: 'Send a photo and say where it goes.' },
        { title: 'Layout', body: 'Add, move or remove sections, or rethink the whole page.' },
        { title: 'No logins', body: 'No admin panel, no passwords to forget, no plugins to update.' },
        { title: 'Nothing to learn', body: 'If you can send a WhatsApp, you can run your website.' },
      ],
    },
    useCases: {
      label: 'Made for',
      lead: 'Owner-run businesses without a webmaster.',
      items: ['Restaurants & cafés', 'Shops', 'Salons', 'Tradespeople', 'Studios & freelancers', 'Local services'],
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: 'Do I need a new website?',
          a: 'Not necessarily. During early access the studio sets No-CMS up with you — on your current site where possible, or on a new one built for you.',
        },
        {
          q: 'Who can change my site?',
          a: 'Only the WhatsApp numbers you’ve approved. A message from anyone else is ignored.',
        },
        {
          q: 'What can I change?',
          a: 'Anything a CMS would let you change — copy, colours, images, sections, layout. Just describe it the way you’d explain it to a person.',
        },
        {
          q: 'What does early access mean?',
          a: 'No-CMS is new and is opening up to a small group of early users first. The studio sets it up with you personally and shapes the product around how you use it.',
        },
      ],
    },
    getStarted: {
      label: 'Early access',
      heading: 'Run your website from WhatsApp.',
      body: 'Tell us about your website and your business. The studio replies within 24 hours.',
      form: {
        messageLabel: 'Your website',
        messagePlaceholder:
          'What’s your website (if you have one), what kind of business is it, and what do you change most often?',
        sendLabel: 'get early access',
      },
    },
    posterRailMiddle: 'No-CMS · Your website, by WhatsApp',
  },

  poofy: {
    meta: {
      title: 'Poofy — the swipe-first to-do app for iPhone and Mac',
      description:
        'Poofy is a fast, focused to-do app. Swipe right to complete, left to delete. Lists, a home-screen widget, a Mac menu-bar app and offline sync. Free on the App Store.',
    },
    eyebrow: 'Software · Poofy',
    titleLine1: 'Poofy',
    titleLine2: '',
    lead: 'The to-do app that gets out of the way. Swipe right, it’s done. Swipe left, it’s gone.',
    primaryCta: 'Download on the App Store',
    caseStudyCta: 'How the studio built it',
    highlights: [
      { label: 'Price', value: 'Free' },
      { label: 'Runs on', value: 'iPhone + widget · Mac menu bar' },
      { label: 'Works', value: 'Offline — syncs when you’re back' },
    ],
    problem: {
      label: 'Why Poofy',
      heading: 'Most to-do apps become the to-do.',
      body: [
        'Projects, tags, due dates, priorities, settings — and before long you’re managing the app instead of your tasks.',
        'Poofy does one thing: it keeps your tasks, and lets you get rid of them fast. The studio built it to run its own day-to-day on.',
      ],
    },
    steps: {
      label: 'How it works',
      items: [
        { title: 'Write it down', body: 'Type a task. New tasks land on top, so the latest thing is never lost.' },
        { title: 'Swipe it away', body: 'Swipe right to complete, left to delete. Tap to edit in place, long-press and drag to reorder.' },
        { title: 'Find it anywhere', body: 'Add something on your iPhone and it’s waiting in your Mac’s menu bar. Offline too — it syncs the moment you’re back online.' },
      ],
    },
    features: {
      label: 'Features',
      items: [
        { title: 'Swipe, don’t click', body: 'Built around gestures instead of buttons, so clearing your list is fast.' },
        { title: 'Lists', body: 'Keep work, home and side projects apart.' },
        { title: 'Heat map', body: 'Your list is coloured by urgency, so you see what matters instead of reading it.' },
        { title: 'Home-screen widget', body: 'Your top tasks, right on your iPhone’s home screen.' },
        { title: 'Mac menu bar', body: 'Your lists one click away, without opening an app.' },
        { title: 'Private sign-in', body: 'Sign in with Apple, Google or email. Poofy only uses it to identify your account — your tasks are never shared.' },
      ],
    },
    useCases: null,
    faq: {
      label: 'FAQ',
      items: [
        { q: 'Is Poofy free?', a: 'Yes. Poofy is free to download and use.' },
        { q: 'Which devices does it run on?', a: 'iPhone (iOS 17 or later), with a home-screen widget, and the Mac as a menu-bar app. Your lists are the same on both.' },
        { q: 'Does it work offline?', a: 'Yes. Everything works without a connection, and your changes sync automatically when you’re back online.' },
        { q: 'Why do I need an account?', a: 'So your lists can follow you from one device to another. That’s the only reason Poofy stores anything about you. Your data is kept in the EU, and your account can be deleted on request.' },
      ],
    },
    getStarted: {
      label: 'Get Poofy',
      heading: 'Clear your list.',
      body: 'Free on the App Store for iPhone.',
      appStoreMeta: 'Free · iPhone · iOS 17 or later',
    },
    posterRailMiddle: 'Poofy · Swipe it, done',
  },
}

// Chrome strings for the landing pages.
export const productUi = {
  softwarePage: {
    meta: {
      title: 'Software — products built and run by the studio',
      description:
        'The studio’s own software: Voice AI, an AI phone agent for any business; No-CMS, website editing over WhatsApp; and Poofy, a swipe-first to-do app for iPhone and Mac.',
    },
    eyebrow: 'Software',
    titleLine1: 'Software',
    titleAccent: '.',
    lead: 'Next to client work, the studio builds and runs its own products. Each one solves a single problem well.',
    openLabel: 'View',
    posterRailMiddle: 'Software · Built and run by the studio',
  },
  seeProduct: 'See the product',
  formDefaults: {
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@company.com',
    companyLabel: 'Company',
    companyOptional: 'optional',
    companyPlaceholder: 'Company or website',
  },
}
