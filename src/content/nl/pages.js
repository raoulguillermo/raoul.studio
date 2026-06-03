// Flat content for the static pages (about, process, work), keyed by slug.

export const pages = {
  work: {
    slug: 'work',
    meta: {
      title: 'Werk — raoul.studio',
      description:
        'Geselecteerde projecten uit de studio — maatwerkplatforms, SaaS, AI-tools, headless e-commerce en CRMs voor fintech, advocatuur en commerciële teams.',
    },
    eyebrow: 'Geselecteerd werk',
    titleLine1: 'Werk',
    titleAccent: '.',
    lead:
      'Elk project is maatwerk, end-to-end gebouwd en gemaakt om in productie te draaien. Een blik op wat de studio heeft geleverd — en waar nu aan gewerkt wordt.',
    posterRailMiddle: 'Werk · Geselecteerde projecten',
  },

  about: {
    slug: 'about',
    meta: {
      title: 'Over ons — raoul.studio',
      description:
        'Een founder-led product- en engineeringstudio die maatwerksoftware bouwt voor fintech, advocatuur, bureaus en e-commerce. Op maat, productieklaar, gebouwd om te schalen.',
    },
    eyebrow: 'Over ons',
    titleLine1: 'Over ons',
    titleAccent: '.',
    intro: [
      {
        text: 'raoul.studio is een product- en engineeringstudio. We bouwen maatwerk tools en platforms — software die zich vormt naar hoe een bedrijf echt werkt, en niet andersom.',
      },
      {
        text: 'We werken met fintech, advocatenkantoren, commerciële bureaus en e-commerceteams. Soms is het klantwerk, soms zijn het onze eigen producten. Alles is gebouwd om in productie te draaien.',
      },
      {
        text: 'Founder-led door Raoul Guillermo, met een lang track record in het end-to-end bouwen van productiesoftware. Klein team, directe lijn, geen lagen tussen de brief en de bouw.',
      },
    ],
    servicesLabel: 'De studio werkt aan',
    services: [
      { label: 'Maatwerk webplatforms & SaaS' },
      { label: 'Headless e-commerce op schaal' },
      { label: 'AI-tools & automatisering' },
      { label: 'CRMs & interne tooling' },
      { label: 'APIs & systeemarchitectuur' },
      { label: 'Tweezijdige marktplaatsen' },
    ],
    systemsParagraph:
      'We leveren geen losse pagina’s. Elk project bouwen we als een systeem — schone architectuur, echte datamodellen, ruimte om te groeien. De eerste versie moet de belasting aankunnen, en de tiende feature mag niet vechten met de eerste. Maatwerk, gemaakt om te schalen.',
    manifestoLead: 'We doen liever een paar dingen goed dan veel dingen snel.',
    manifestoTail: 'Founder-led, op maat gebouwd, voor de lange termijn.',
    posterRailMiddle: 'Over ons · Studio · Manifest',
  },

  process: {
    slug: 'process',
    meta: {
      title: 'Proces — raoul.studio',
      description:
        'Hoe de studio werkt: richting, structuur, ontwerp, bouw, itereren, schalen. Founder-led, direct, gericht op het leveren van maatwerksoftware die blijft.',
    },
    eyebrow: 'Proces',
    titleLine1: 'Proces',
    titleAccent: '.',
    lead:
      'Zes fasen, één principe: begrijp het systeem voor je het bouwt. We werken snel omdat het denkwerk vooraf gedaan is, niet omdat we het overslaan. Maatwerksoftware, stap voor stap gevormd.',
    steps: [
      {
        title: 'Richting',
        lead: 'Bepalen wat we eigenlijk bouwen.',
        body: [
          {
            text: 'We beginnen bij het probleem, niet bij de featurelijst. Wat hapert, wat is traag, wat kost je geld — en hoe "klaar" eruitziet.',
          },
          {
            text: 'Je verlaat deze fase met een heldere scope en een gedeeld beeld van waar we heen gaan. Geen verrassingen achteraf.',
          },
        ],
      },
      {
        title: 'Structuur',
        lead: 'Ontwerp het systeem eronder.',
        body: [
          {
            text: 'Voor er ook maar één scherm is, brengen we de data, de flows en de architectuur in kaart. Maatwerk tools staan of vallen met wat eronder ligt.',
          },
          {
            text: 'Doe je dit goed, dan wordt al het volgende makkelijker. Doe je het fout, dan betaal je er eindeloos voor.',
          },
        ],
      },
      {
        title: 'Ontwerp',
        lead: 'Maak het helder, maak het bruikbaar.',
        body: [
          {
            text: 'We ontwerpen rond de echte workflow — de dagelijkse handelingen, de randgevallen, de mensen die het straks gebruiken.',
          },
          {
            text: 'Scherp, snel, geen rommel. De interface moet verdwijnen en het werk laten gebeuren.',
          },
        ],
      },
      {
        title: 'Bouw',
        lead: 'Lever productieklare code.',
        body: [
          {
            text: 'Op maat, zonder boilerplate-ballast. Moderne stack, schone codebase, vanaf dag één gebouwd om in productie te draaien.',
          },
          {
            text: 'We bouwen in de openheid met je mee — je ziet voortgang zodra die landt, niet in één grote onthulling op het eind.',
          },
        ],
      },
      {
        title: 'Itereren',
        lead: 'Breng het voor echt gebruik.',
        body: [
          {
            text: 'Echte gebruikers leggen bloot wat specs niet kunnen. We leveren, kijken en scherpen aan — snelle loops, kleine releases.',
          },
          { text: 'Het product wordt elke cyclus scherper.' },
        ],
      },
      {
        title: 'Schalen',
        lead: 'Gebouwd om met je mee te groeien.',
        body: [
          {
            text: 'Meer gebruikers, meer data, meer talen, meer features — het systeem is gebouwd om het aan te kunnen.',
          },
          {
            text: 'We blijven betrokken. Het meeste van ons werk is langetermijn, en we behandelen wat we bouwen alsof het van onszelf is.',
          },
        ],
      },
    ],
    howWeWork: {
      label: 'Hoe we werken',
      lead: 'Founder-led en direct. Je praat met de mensen die het bouwen.',
      points: [
        { label: 'Directe communicatie' },
        { label: 'Snelle beslissingen' },
        { label: 'Geen lagen, geen ruis' },
      ],
      closing: 'Je werkt met mensen die bouwen.',
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: 'Wat doet raoul.studio?',
          a: 'raoul.studio is een founder-led product- en engineeringstudio die maatwerksoftware bouwt — webplatforms en SaaS, headless e-commerce, AI-tools en automatisering, CRMs en interne tooling, APIs en tweezijdige marktplaatsen — voor fintech, advocatenkantoren, commerciële bureaus en e-commerceteams.',
        },
        {
          q: 'Hoe werkt de studio?',
          a: 'Elk project doorloopt zes fasen: Richting, Structuur, Ontwerp, Bouw, Itereren en Schalen. Het principe is om het systeem te begrijpen voor je het bouwt — het denkwerk is vooraf gedaan, zodat de bouw snel gaat zonder stappen over te slaan.',
        },
        {
          q: 'Hoe lang duurt een project?',
          a: 'Dat hangt af van de scope, maar de studio werkt in snelle loops met kleine, frequente releases in plaats van één grote onthulling op het eind. Je ziet voortgang zodra die landt en het product wordt elke cyclus scherper, omdat de architectuur en richting al vaststaan voor de bouw begint.',
        },
        {
          q: 'Met wie werkt de studio?',
          a: 'Vooral fintech, advocatenkantoren, commerciële bureaus en e-commerceteams. Sommig werk is voor klanten, sommig zijn de eigen producten van de studio — alles is gebouwd om in productie te draaien. Alleen echte briefs.',
        },
        {
          q: 'Bieden jullie ondersteuning na de lancering?',
          a: 'Ja. Het meeste werk van de studio is langetermijn: systemen zijn gebouwd om met je mee te groeien — meer gebruikers, data, talen en features — en het team blijft betrokken in plaats van overdragen en verdwijnen.',
        },
        {
          q: 'Hoe start ik een project?',
          a: 'Vertel de studio wat je bouwt of wat je tegenhoudt — mail naar hello@raoul.studio of gebruik de contactpagina. Elke echte brief wordt gelezen, met een antwoord binnen 24 uur.',
        },
      ],
    },
    posterRailMiddle: 'Proces · Richting → Schalen',
  },
}
