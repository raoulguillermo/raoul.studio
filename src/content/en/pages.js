// Flat content for the static pages (about, process, work), keyed by slug.

export const pages = {
  work: {
    slug: 'work',
    meta: {
      title: 'Work',
      description:
        'Selected projects from the studio — custom platforms, SaaS, AI tools, headless e-commerce and CRMs built for fintech, law and commercial teams, plus the studio’s own products.',
    },
    eyebrow: 'Selected work',
    titleLine1: 'Work',
    titleAccent: '.',
    lead:
      'Every project is a real business problem, solved end to end and built to run in production. The platforms and tools the studio has shipped for clients — and the products it builds and runs itself.',
    groups: {
      client: 'Client work',
      product: 'Own products',
    },
    posterRailMiddle: 'Work · Selected projects',
  },

  about: {
    slug: 'about',
    meta: {
      title: 'About',
      description:
        'A Rotterdam-based digital agency and product studio that designs, builds and grows complete products — combining strategy, engineering, AI, automation and brand for fintech, law, agencies and e-commerce.',
    },
    eyebrow: 'About',
    titleLine1: 'About',
    titleAccent: '.',
    intro: [
      {
        text: 'raoul.studio is a Rotterdam-based digital agency and product studio that helps ambitious businesses turn ideas into scalable digital products. The studio brings together strategy, branding, software engineering, AI, automation and infrastructure to create solutions that deliver lasting business value.',
      },
      {
        text: 'The studio partners with founders, startups and established companies to design, build and evolve custom platforms, AI-powered tools, commerce solutions and digital experiences. Every project is approached with a product mindset: solving real business challenges, creating intuitive user experiences and building technology that can grow alongside the business.',
      },
      {
        text: 'The studio builds long-term partnerships with teams that want to move fast, think big and create meaningful digital products. From the first idea to launch — and every iteration that follows — the studio works as an extension of your team, focused on delivering measurable impact through technology.',
        highlight: 'The studio builds long-term partnerships',
      },
    ],
    servicesLabel: 'What the studio builds',
    services: [
      { label: 'Custom web platforms & SaaS' },
      { label: 'Headless e-commerce at scale' },
      { label: 'AI tools & automation' },
      { label: 'CRMs & internal tooling' },
      { label: 'APIs & system architecture' },
      { label: 'Two-sided marketplaces' },
    ],
    systemsParagraph: [
      'The studio builds digital products that are designed to evolve. Every platform is built on a solid technical foundation, with scalable architecture, thoughtful engineering and future growth in mind. Whether it’s an AI-powered platform, a commerce ecosystem or a custom business application, the studio creates technology that adapts as your business grows.',
      'From the first strategy session to long after launch, the focus stays on building digital solutions that are robust, scalable and made to last.',
    ],
    manifestoLead: 'Where strategy, AI and software',
    manifestoTail: 'come together.',
    posterRailMiddle: 'About · Studio',
  },

  process: {
    slug: 'process',
    meta: {
      title: 'Process',
      description:
        'How the studio works: direction, structure, design, build, iterate, scale. Direct, focused on shipping custom products that last.',
    },
    eyebrow: 'Process',
    titleLine1: 'Process',
    titleAccent: '.',
    lead:
      'Six stages, one principle: understand the system before you build it. The studio moves fast because the thinking is done up front, not because it skips steps. Custom products, shaped step by step.',
    steps: [
      {
        title: 'Direction',
        lead: 'Figure out what’s actually being built.',
        body: [
          {
            text: 'The studio starts with the problem, not the feature list. What’s broken, what’s slow, what’s costing you — and what "done" looks like.',
          },
          {
            text: 'You leave this stage with a clear scope and a shared idea of where it’s headed. No surprises later.',
          },
        ],
      },
      {
        title: 'Structure',
        lead: 'Design the system underneath.',
        body: [
          {
            text: 'Before a single screen, the studio maps the data, the flows and the architecture. Custom products live or die on what’s underneath.',
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
            text: 'Design starts from the real workflow — the daily actions, the edge cases, the people who’ll actually use it.',
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
            text: 'The studio builds in the open with you — you see progress as it lands, not in one big reveal at the end.',
          },
        ],
      },
      {
        title: 'Iterate',
        lead: 'Get it in front of real use.',
        body: [
          {
            text: 'Real users surface what specs can’t. Work ships, gets watched and tightened — fast loops, small releases.',
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
            text: 'The studio sticks around. Most of its work is long-term, and it treats what it builds as its own.',
          },
        ],
      },
    ],
    howWeWork: {
      label: 'How the studio works',
      lead: 'Direct and founder-led. You talk to the people building the thing.',
      points: [
        { label: 'Direct communication' },
        { label: 'Fast decisions' },
        { label: 'No layers, no noise' },
      ],
      closing: 'You work with the people who build.',
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: 'What does raoul.studio do?',
          a: 'raoul.studio is a digital product studio. The studio designs, builds and grows custom products — web platforms and SaaS, headless e-commerce, AI tools and automation, CRMs and internal tooling, APIs and two-sided marketplaces — for fintech, law firms, commercial agencies and e-commerce teams, alongside its own products.',
        },
        {
          q: 'How do you work?',
          a: 'Every project runs through six stages: Direction, Structure, Design, Build, Iterate and Scale. The principle is to understand the system before building it — the thinking is done up front, so the build moves fast without skipping steps.',
        },
        {
          q: 'How long does a project take?',
          a: 'It depends on scope, but the studio works in fast loops with small, frequent releases rather than one big reveal at the end. You see progress as it lands and the product gets sharper every cycle, because the architecture and direction are settled before the build starts.',
        },
        {
          q: 'Who do you work with?',
          a: 'Mostly fintech, law firms, commercial agencies and e-commerce teams. Some work is for clients, some is the studio’s own products — all of it is built to run in production.',
        },
        {
          q: 'Do you offer ongoing support after launch?',
          a: 'Yes. Most of the studio’s work is long-term: systems are built to grow with you across more users, data, languages and features, and the studio stays involved rather than handing off and disappearing.',
        },
        {
          q: 'How do I start a project?',
          a: 'Tell us what you’re building or what’s slowing you down — email hello@raoul.studio or use the contact page. Every real brief gets read, with a reply within 24 hours.',
        },
      ],
    },
    posterRailMiddle: 'Process · Direction → Scale',
  },

  privacy: {
    slug: 'privacy',
    meta: {
      title: 'Privacy Policy',
      description:
        'How raoul.studio handles personal data across the website and the Tododo app: what we collect, why, who processes it, how long we keep it and your rights under the GDPR.',
    },
    eyebrow: 'Legal',
    titleLine1: 'Privacy',
    titleAccent: '.',
    updated: 'Last updated — August 2026',
    intro:
      'This policy explains what personal data raoul.studio collects, why we collect it, and what rights you have over it. It covers this website and the apps the studio runs, including the Tododo todo app for iPhone and Mac. We keep data collection to the minimum needed to run the studio, reply to the people who get in touch, and keep your tasks in sync.',
    sections: [
      {
        heading: 'Who we are',
        body: [
          'raoul.studio is a product and engineering studio run by Raoul Guillermo, based in the EU. For anything in this policy — or to exercise your rights — reach us at hello@raoul.studio.',
          'For the purposes of the GDPR, raoul.studio is the data controller for the personal data described here.',
        ],
      },
      {
        heading: 'What we collect',
        body: [
          'We only collect personal data you give us or that your browser sends when you use the site:',
        ],
        points: [
          'Contact form: your name, email address, optional company name and the message you write.',
          'Technical data: when you submit the form we store the IP address and browser user-agent of the request, to protect against spam and abuse.',
          'Language preference: a small "lang" cookie remembers which language you chose to read the site in.',
          'Newsletter: if you subscribe, your email address and the language you chose, so we can send you the weekly newsletter. Every newsletter has a one-click unsubscribe link, and you can opt out at any time.',
        ],
      },
      {
        heading: 'Tododo — the iPhone and Mac app',
        body: [
          'Tododo is the studio’s own todo app for iPhone and Mac. It needs an account so your lists can follow you from one device to the other, and that account is the only reason it holds anything about you.',
        ],
        points: [
          'Account: your email address, and — if you register with a password — a hashed version of that password. The password itself is never stored and cannot be read back.',
          'Continue with Google: if you sign in with Google, we receive your email address, your basic profile information and your Google account ID. We use them for one thing — to create your account and recognise you next time.',
          'Your content: the lists and tasks you write, whether each task is done, and the order you put them in.',
        ],
      },
      {
        heading: 'How Tododo uses Google data',
        body: [
          'Signing in with Google is offered purely as a way to identify your account. Tododo asks Google only for your email address and basic profile. It requests no access to Gmail, Drive, Calendar, Contacts, Photos or any other Google service, and it cannot read, write or delete anything in your Google account.',
          'Tododo’s use of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements. Information received from Google is used only to provide the sign-in feature. It is never sold, never used for advertising or profiling, never transferred to third parties except as needed to run the service or where the law requires it, and never used to train AI models.',
          'Your tasks are yours. We do not read them for any purpose beyond storing them and serving them back to you, we do not share them, and we do not use them for advertising or to train models.',
        ],
      },
      {
        heading: 'Deleting your Tododo account',
        body: [
          'You can have your account and everything in it removed at any time by emailing hello@raoul.studio from the address the account uses. We delete the account, its lists and its tasks. Signing in with Google can also be disconnected at any time from your Google account’s security settings, which stops any further sign-in — email us as well if you want the data itself deleted.',
          'We keep account data for as long as the account exists, and no longer.',
        ],
      },
      {
        heading: 'Why we use it, and our legal basis',
        body: [
          'We use your contact details and message for one thing: to read and reply to your enquiry. The legal basis is our legitimate interest in responding to people who contact us, and taking steps at your request before any possible agreement.',
          'We use the technical data (IP, user-agent) on the basis of our legitimate interest in keeping the form secure and free of spam. The language cookie is a functional cookie set on the basis of your choice.',
        ],
      },
      {
        heading: 'Cookies',
        body: [
          'The site uses a single functional cookie ("lang") to remember your language. We do not use advertising cookies, and we do not run third-party tracking or profiling on you.',
        ],
      },
      {
        heading: 'Who processes your data',
        body: ['We keep the number of third parties small. The ones that may handle your data are:'],
        points: [
          'SendGrid (Twilio Inc.) — delivers the contact-form email to us. Your name, email and message pass through it.',
          'Google (Google Ireland Limited) — only if you choose “Continue with Google” in Tododo. Google runs the sign-in and tells us your email address and basic profile. What happens on Google’s side is governed by Google’s own privacy policy.',
          'DigitalOcean — provides the servers and the managed database, in Amsterdam, where the website and all Tododo accounts, lists and tasks are stored.',
          'Our own servers — the website and the Tododo API run on infrastructure we manage, and contact submissions are stored in our database there.',
        ],
      },
      {
        heading: 'Where your data lives',
        body: [
          'Website data and Tododo accounts, lists and tasks are stored in the EU, on servers and a managed database in Amsterdam. Connections to the site and to the Tododo API are encrypted in transit, and access to the database is restricted.',
        ],
      },
      {
        heading: 'International transfers',
        body: [
          'SendGrid (Twilio) is a US company, so sending a contact email may involve transferring your data outside the EU. DigitalOcean is likewise US-headquartered, although the servers holding your data are in Amsterdam. Where a transfer outside the EU happens, it is covered by appropriate safeguards such as the European Commission’s Standard Contractual Clauses.',
        ],
      },
      {
        heading: 'How long we keep it',
        body: [
          'We keep contact submissions for as long as we need them to handle your enquiry and for our own records, and no longer than necessary. You can ask us to delete your data at any time.',
        ],
      },
      {
        heading: 'Your rights',
        body: ['Under the GDPR you have the right to:'],
        points: [
          'access the personal data we hold about you;',
          'have it corrected or deleted;',
          'restrict or object to how we use it;',
          'receive it in a portable format.',
        ],
      },
      {
        heading: 'Complaints',
        body: [
          'To exercise any of these rights, email hello@raoul.studio. If you believe we’ve mishandled your data, you also have the right to complain to your local data protection authority — in the Netherlands, the Autoriteit Persoonsgegevens.',
        ],
      },
      {
        heading: 'Security',
        body: [
          'We take reasonable technical and organisational measures to protect your data, including transport encryption and restricted access. No system is perfectly secure, but we keep the attack surface small by collecting little in the first place.',
        ],
      },
      {
        heading: 'Software, security and liability',
        body: [
          'The website and any tools or software we make available are provided on an "as is" and "as available" basis. We take reasonable care to keep them secure and running, but no software or online service can be guaranteed to be completely safe, uninterrupted or error-free.',
          'To the fullest extent permitted by law, raoul.studio is not liable for any loss of data, downtime, security breach, unauthorised access, or any direct or indirect damage arising from your use of — or inability to use — the website or our software, including incidents outside our reasonable control such as third-party hacks, attacks or service outages.',
          'Nothing here limits any rights you have under the GDPR, or any liability that cannot legally be excluded — including liability for intent or gross negligence.',
        ],
      },
      {
        heading: 'Changes to this policy',
        body: [
          'We may update this policy as the studio changes. When we do, we’ll update the date at the top of this page.',
        ],
      },
    ],
    directLabel: 'Privacy questions',
    directEmail: 'hello@raoul.studio',
    posterRailMiddle: 'Privacy · Legal',
  },

  terms: {
    slug: 'terms',
    meta: {
      title: 'Terms & Conditions',
      description:
        'The terms on which raoul.studio works with its clients: scope, payment, intellectual property, AI services, liability and more — in plain English, under Dutch law.',
    },
    eyebrow: 'Legal',
    titleLine1: 'Terms',
    titleAccent: '.',
    updated: 'Last updated — June 2026',
    intro:
      'These Terms set out how raoul.studio works with its clients — what we deliver, how we work, and who is responsible for what. We’ve written them in plain English: they’re meant to be fair, and to be read.',
    sections: [
      {
        heading: 'Introduction',
        body: [
          'These Terms & Conditions ("Terms") govern all services, quotations, proposals, subscriptions, orders and agreements between raoul.studio ("the Studio", "we", "us") and its clients ("the Client", "you"). They apply unless we have agreed otherwise in writing.',
          'raoul.studio is a digital product studio based in the Netherlands, run by Raoul Guillermo. You can reach us at hello@raoul.studio. By accepting a Proposal, signing an Agreement, or instructing us to begin work, you agree to these Terms.',
        ],
      },
      {
        heading: 'Definitions',
        body: ['In these Terms, the following words have the following meanings:'],
        points: [
          'Studio — raoul.studio, the provider of the services.',
          'Client — the natural or legal person that enters into an Agreement with the Studio.',
          'Project — the work the Studio agrees to perform, as described in a Proposal or Agreement.',
          'Deliverables — the designs, software, code, documentation, content or other materials the Studio delivers.',
          'Proposal — any quotation, estimate, statement of work or offer made by the Studio.',
          'Agreement — the accepted Proposal together with these Terms and any written arrangements between the parties.',
          'Intellectual Property — all rights in software, designs, text, methods and know-how, including copyright, database rights, trademarks and trade secrets.',
          'Confidential Information — non-public information disclosed by one party to the other that is marked confidential or should reasonably be understood to be confidential.',
          'Third-party Services — products or services provided by parties other than the Studio, such as hosting, cloud, payment, AI or API providers.',
          'AI Services — services that use artificial intelligence, machine learning or the automated generation of content, code, text or decisions.',
        ],
      },
      {
        heading: 'Applicability',
        body: [
          'These Terms apply to every Proposal, Agreement and Project, and to any follow-up or additional work, unless expressly agreed otherwise in writing.',
          'These Terms prevail over any purchasing, procurement or other general conditions of the Client. The applicability of the Client’s conditions is expressly rejected, unless we have accepted them in writing.',
          'If any provision of these Terms is or becomes invalid or unenforceable, the remaining provisions stay in full force, and the invalid provision will be replaced by a valid one that matches its purpose as closely as possible.',
        ],
      },
      {
        heading: 'Quotations & proposals',
        body: ['Unless stated otherwise:'],
        points: [
          'Proposals are non-binding and do not oblige the Studio until accepted by both parties.',
          'A Proposal is valid for 30 days from its date, after which it may be revised or withdrawn.',
          'Prices may change before a Proposal is accepted — for example due to changes in scope, third-party costs or applicable taxes.',
          'All prices are exclusive of VAT and any third-party costs unless stated otherwise.',
          'Obvious mistakes and typographical errors in a Proposal do not bind the Studio.',
        ],
      },
      {
        heading: 'Project scope',
        body: [
          'The Studio performs the work described in the accepted Proposal. Anything not expressly included is out of scope.',
          'Out-of-scope work — including additional features, integrations or requirements — may require additional budget, revised planning or a separate Proposal before it is carried out.',
        ],
      },
      {
        heading: 'Change requests',
        body: [
          'If the Client requests additional features, revisions, new requirements or changes in priorities, the Studio will assess the impact on scope, planning and price.',
          'Changes are only carried out once agreed. The Studio may adjust timelines and fees to reflect a change, and is not obliged to start changed work before agreement is reached.',
        ],
      },
      {
        heading: 'Client responsibilities',
        body: [
          'A Project depends on the Client’s cooperation. The Client is responsible for providing the following on time and in full. Delays caused by the Client extend the planning accordingly, and the Studio is not liable for any resulting delay or cost:',
        ],
        points: [
          'accurate and complete information;',
          'content, assets, branding materials and access credentials;',
          'timely feedback, approvals and decisions;',
          'one or more authorised decision-makers;',
          'testing and reviewing Deliverables when requested.',
        ],
      },
      {
        heading: 'Delivery',
        body: [
          'Any dates or planning communicated by the Studio are estimates, not strict deadlines, unless a fixed deadline has been expressly agreed in writing as such (a "fatale termijn").',
          'Reasonable delays do not constitute a breach of contract. Where a delay is caused by the Client or by Third-party Services, the agreed timeline extends accordingly.',
        ],
      },
      {
        heading: 'Acceptance',
        body: ['Unless agreed otherwise:'],
        points: [
          'Deliverables are deemed accepted if the Client does not report substantiated defects in writing within ten (10) business days of delivery.',
          'Minor defects that do not materially prevent use do not justify rejection, and are addressed in the normal course of work.',
          'Putting a Deliverable into use, or using it in production, constitutes acceptance.',
        ],
      },
      {
        heading: 'Payment terms',
        body: ['Unless agreed otherwise in the Proposal:'],
        points: [
          'The Studio may require a deposit before starting work, and may invoice in milestones or on a recurring (retainer or subscription) basis.',
          'Invoices are payable within fourteen (14) days of the invoice date.',
          'All amounts are exclusive of VAT, which is charged where applicable.',
          'If an invoice is not paid on time, the Client is in default without further notice, and statutory (commercial) interest under Dutch law applies from the due date.',
          'The Client owes all reasonable judicial and extrajudicial collection costs incurred in recovering overdue amounts.',
          'The Studio may suspend work, hosting, maintenance and support while invoices remain overdue.',
        ],
      },
      {
        heading: 'Suspension',
        body: [
          'If the Client fails to meet any payment or other material obligation, the Studio may suspend its services — including development, hosting, maintenance and support — until the Client has met its obligations.',
          'Suspension does not relieve the Client of its payment obligations, and the Studio is not liable for any loss arising from a lawful suspension.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          'On full payment of all amounts due for a Project, the Client receives ownership of, or the licence expressly agreed for, the custom Deliverables created specifically for the Client. Until full payment, all rights remain with the Studio.',
          'The Studio retains all Intellectual Property in everything that is not a custom Deliverable, including but not limited to its methodologies, internal frameworks, reusable code, libraries, SDKs, templates, architecture, AI workflows, automation frameworks, development tools, know-how, concepts and any pre-existing software.',
          'Where such retained materials are incorporated into a Deliverable, the Client receives a non-exclusive, non-transferable licence to use them as part of that Deliverable, but acquires no ownership in them.',
          'The Studio is free to use the general knowledge, skills, techniques and experience gained during a Project for other clients and purposes.',
        ],
      },
      {
        heading: 'Open-source software',
        body: [
          'Deliverables may include open-source software, which is provided under its own licence terms. Those licences govern the Client’s use of the open-source components, and the Studio gives no warranty or indemnity in respect of them beyond what those licences provide.',
        ],
      },
      {
        heading: 'Third-party services',
        body: [
          'Projects often rely on Third-party Services such as hosting, cloud providers, payment providers, AI providers, APIs and CMS platforms. These are governed by their own terms, which the Client accepts where relevant.',
          'To the extent permitted by law, the Studio is not liable for, and gives no warranty regarding, Third-party Services, including:',
        ],
        points: [
          'outages, downtime or degraded performance;',
          'price changes or discontinued services;',
          'changes to terms, policies or APIs;',
          'security incidents, data loss or breaches.',
        ],
      },
      {
        heading: 'AI services',
        body: [
          'AI Services are based on probabilistic and statistical models. Their output is generated automatically and is inherently uncertain.',
          'Output produced by AI Services may contain inaccuracies, fabricated or "hallucinated" information, incomplete or outdated information, or results unsuitable for a particular purpose.',
          'The Client remains fully responsible for reviewing, validating and approving any AI-generated output before relying on it or using it in production, and for ensuring its use complies with applicable law.',
          'The Studio provides AI Services on a best-effort basis and gives no warranty as to the correctness, completeness, factual accuracy, legal compliance, fitness for purpose, or business outcomes of any AI-generated output.',
        ],
      },
      {
        heading: 'Security',
        body: [
          'The Studio applies commercially reasonable technical and organisational measures to protect the systems and data it handles.',
          'However, no digital system, software or online service can be guaranteed to be completely secure. To the extent permitted by law, the Studio does not guarantee, and is not liable for, security incidents beyond its reasonable control — including cyber-attacks, zero-day vulnerabilities, phishing, malware, cloud or hosting outages, and internet or network failures.',
        ],
      },
      {
        heading: 'Confidentiality',
        body: [
          'Each party will keep the other’s Confidential Information confidential, use it only for the purpose of the Project, and protect it with reasonable care.',
          'This does not apply to information that is or becomes public without breach, that a party already lawfully held, or that must be disclosed by law, regulation or court order — in which case the disclosing party will, where permitted, give prior notice.',
        ],
      },
      {
        heading: 'Privacy',
        body: [
          'The Studio processes personal data in accordance with its Privacy Policy, available on this website.',
          'The Client is and remains responsible for the personal data it provides to, or processes through, the Deliverables, including having a lawful basis for that processing. Where the Studio processes personal data on the Client’s behalf, the parties will, where required, enter into a separate data processing agreement.',
        ],
      },
      {
        heading: 'Maintenance & support',
        body: ['Maintenance and support are only provided if expressly agreed. Unless agreed otherwise:'],
        points: [
          'Included: bug fixes for the agreed specification, monitoring, and the maintenance described in the Agreement.',
          'Excluded: new features, redesigns, new integrations, and consultancy or work outside the Agreement — which are quoted separately.',
        ],
      },
      {
        heading: 'Warranties',
        body: [
          'The Studio performs its services with reasonable skill and care, and Deliverables will materially conform to the agreed specification at the time of delivery. This is the Client’s exclusive warranty.',
          'To the extent permitted by law, the Studio gives no other warranties and does not guarantee that software will operate uninterrupted or error-free, that it will be compatible with future systems or third-party changes, or that it will achieve any particular commercial result.',
        ],
      },
      {
        heading: 'Limitation of liability',
        body: [
          'To the maximum extent permitted by applicable law, the Studio’s total liability arising out of or in connection with a Project is limited to the amount paid by the Client for that specific Project in the twelve (12) months preceding the event giving rise to the liability.',
          'The Studio is not liable for any indirect or consequential loss, including lost profits, lost revenue, lost business or opportunities, loss of goodwill, loss or corruption of data, downtime, or business interruption.',
          'Any liability of the Studio only arises if the Client gives written notice of the default, allows a reasonable period to remedy it, and the Studio still fails to perform — unless remedy is permanently impossible.',
          'Nothing in these Terms excludes or limits liability that cannot be excluded or limited under Dutch law, including liability for intent or deliberate recklessness ("opzet of bewuste roekeloosheid") on the part of the Studio’s management.',
        ],
      },
      {
        heading: 'Indemnification',
        body: [
          'The Client indemnifies and holds the Studio harmless against all third-party claims, damages, costs and expenses (including reasonable legal costs) arising from or relating to:',
        ],
        points: [
          'content, materials or instructions supplied by the Client;',
          'infringement of third-party intellectual property or other rights through Client-supplied materials;',
          'unlawful, infringing or improper instructions;',
          'misuse of the Deliverables, or use other than as intended;',
          'the Client’s illegal activities or breach of applicable law.',
        ],
      },
      {
        heading: 'Force majeure',
        body: [
          'The Studio is not liable for any failure or delay caused by circumstances beyond its reasonable control ("overmacht"), including natural disasters, extreme weather, pandemics and epidemics, strikes, war or unrest, government measures, internet or telecommunications outages, cloud, hosting or supplier failures, AI-provider downtime, and cyber-attacks.',
          'During force majeure the parties’ obligations are suspended. If the situation lasts longer than sixty (60) days, either party may terminate the Agreement in writing for the affected part, without liability, while work already performed remains payable.',
        ],
      },
      {
        heading: 'Termination',
        body: [
          'Either party may terminate an Agreement for convenience by giving reasonable written notice, subject to any minimum term agreed for retainers or subscriptions.',
          'Either party may terminate with immediate effect if the other commits a material breach that is not remedied within a reasonable period after written notice, or in the event of bankruptcy, suspension of payments or insolvency of the other party.',
          'On termination, the Client pays for all work performed and costs committed up to the effective date. Provisions that by their nature should survive — including intellectual property, confidentiality, liability and governing law — continue to apply.',
        ],
      },
      {
        heading: 'Portfolio rights',
        body: [
          'Unless expressly agreed otherwise in writing, the Studio may reference the Client and display completed, publicly released work — including screenshots, descriptions and the Client’s name and logo — in its portfolio, website and marketing materials, while respecting Confidential Information.',
        ],
      },
      {
        heading: 'Non-solicitation',
        body: [
          'During a Project and for twelve (12) months after its completion, the Client will not directly or indirectly recruit, hire or engage any employee, contractor or freelancer of the Studio who was involved in the Project, without the Studio’s prior written consent.',
        ],
      },
      {
        heading: 'Governing law & disputes',
        body: [
          'These Terms and any Agreement are governed exclusively by Dutch law. The applicability of the UN Convention on Contracts for the International Sale of Goods (CISG) is excluded.',
          'Any dispute that cannot be resolved amicably will be submitted exclusively to the competent court of the Rechtbank Rotterdam, the Netherlands, unless mandatory law provides otherwise.',
        ],
      },
      {
        heading: 'Changes to these terms',
        body: [
          'The Studio may update these Terms from time to time. The version in force at the start of a Project applies to that Project. When we update these Terms, we update the date at the top of this page.',
        ],
      },
    ],
    directLabel: 'Questions about these terms',
    directEmail: 'hello@raoul.studio',
    posterRailMiddle: 'Terms · Legal',
  },
}
