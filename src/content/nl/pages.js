// Flat content for the static pages (about, process, work), keyed by slug.

export const pages = {
  work: {
    slug: 'work',
    meta: {
      title: 'Werk',
      description:
        'Geselecteerde projecten uit de studio — maatwerkplatforms, SaaS, AI-tools, headless e-commerce en CRMs voor fintech, advocatuur en commerciële teams, plus onze eigen producten.',
    },
    eyebrow: 'Geselecteerd werk',
    titleLine1: 'Werk',
    titleAccent: '.',
    lead:
      'Elk project is een echt bedrijfsprobleem, end-to-end opgelost en gebouwd om in productie te draaien. De platforms en tools die we voor klanten hebben geleverd — en de producten die we zelf bouwen en runnen.',
    groups: {
      client: 'Klantwerk',
      product: 'Eigen producten',
    },
    posterRailMiddle: 'Werk · Geselecteerde projecten',
  },

  about: {
    slug: 'about',
    meta: {
      title: 'Over ons',
      description:
        'Een digital agency en product studio in Rotterdam die complete producten ontwerpt, bouwt en laat groeien — strategie, engineering, AI, automatisering en merk samengebracht voor fintech, advocatuur, bureaus en e-commerce.',
    },
    eyebrow: 'Over ons',
    titleLine1: 'Over ons',
    titleAccent: '.',
    intro: [
      {
        text: 'raoul.studio is een digital agency en product studio in Rotterdam die ambitieuze bedrijven helpt om ideeën te vertalen naar schaalbare digitale producten. We combineren strategie, branding, software-engineering, AI, automatisering en infrastructuur tot oplossingen die blijvende zakelijke waarde leveren.',
      },
      {
        text: 'We werken samen met founders, start-ups en gevestigde bedrijven om maatwerkplatforms, AI-gedreven tools, commerce-oplossingen en digitale ervaringen te ontwerpen, te bouwen en door te ontwikkelen. Elk project pakken we aan met een productmindset: echte zakelijke uitdagingen oplossen, intuïtieve gebruikerservaringen maken en technologie bouwen die met het bedrijf meegroeit.',
      },
      {
        text: 'We bouwen langetermijnpartnerschappen met teams die snel willen schakelen, groot durven denken en betekenisvolle digitale producten willen maken. Van het eerste idee tot de lancering — en elke iteratie die daarop volgt — werken we als verlengstuk van je team, gericht op meetbare impact via technologie.',
        highlight: 'We bouwen langetermijnpartnerschappen',
      },
    ],
    servicesLabel: 'Wat we bouwen',
    services: [
      { label: 'Maatwerk webplatforms & SaaS' },
      { label: 'Headless e-commerce op schaal' },
      { label: 'AI-tools & automatisering' },
      { label: 'CRMs & interne tooling' },
      { label: 'APIs & systeemarchitectuur' },
      { label: 'Tweezijdige marktplaatsen' },
    ],
    systemsParagraph: [
      'We bouwen digitale producten die zijn gemaakt om te evolueren. Elk platform staat op een stevig technisch fundament — met schaalbare architectuur, doordachte engineering en oog voor toekomstige groei. Of het nu gaat om een AI-gedreven platform, een commerce-ecosysteem of een maatwerk-bedrijfsapplicatie: we maken technologie die meegroeit met je bedrijf.',
      'Van de eerste strategiesessie tot lang na de lancering richten we ons op digitale oplossingen die robuust en schaalbaar zijn en gemaakt om te blijven.',
    ],
    manifestoLead: 'Waar strategie, AI en software',
    manifestoTail: 'samenkomen.',
    posterRailMiddle: 'Over ons · Studio',
  },

  process: {
    slug: 'process',
    meta: {
      title: 'Proces',
      description:
        'Hoe de studio werkt: richting, structuur, ontwerp, bouw, itereren, schalen. Direct, gericht op het leveren van maatwerkproducten die blijven.',
    },
    eyebrow: 'Proces',
    titleLine1: 'Proces',
    titleAccent: '.',
    lead:
      'Zes fasen, één principe: begrijp het systeem voor je het bouwt. We werken snel omdat het denkwerk vooraf gedaan is, niet omdat we het overslaan. Maatwerkproducten, stap voor stap gevormd.',
    steps: [
      {
        title: 'Richting',
        lead: 'Bepalen wat we eigenlijk bouwen.',
        body: [
          {
            text: 'We beginnen bij het probleem, niet bij de featurelijst. Wat hapert, wat is traag, wat kost je geld — en hoe "klaar" eruitziet.',
          },
          {
            text: 'Je verlaat deze fase met een heldere scope en een gedeeld beeld van waar het heen gaat. Geen verrassingen achteraf.',
          },
        ],
      },
      {
        title: 'Structuur',
        lead: 'Ontwerp het systeem eronder.',
        body: [
          {
            text: 'Voor er ook maar één scherm is, brengen we de data, de flows en de architectuur in kaart. Maatwerkproducten staan of vallen met wat eronder ligt.',
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
            text: 'We ontwerpen rond de echte workflow — de dagelijkse handelingen, de randgevallen, de mensen die het straks echt gebruiken.',
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
      lead: 'Direct en founder-led. Je praat met de mensen die het bouwen.',
      points: [
        { label: 'Directe communicatie' },
        { label: 'Snelle beslissingen' },
        { label: 'Geen lagen, geen ruis' },
      ],
      closing: 'Je werkt met de mensen die bouwen.',
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: 'Wat doet raoul.studio?',
          a: 'raoul.studio is een digital product studio. We ontwerpen, bouwen en laten maatwerkproducten groeien — webplatforms en SaaS, headless e-commerce, AI-tools en automatisering, CRMs en interne tooling, APIs en tweezijdige marktplaatsen — voor fintech, advocatenkantoren, commerciële bureaus en e-commerceteams, naast onze eigen producten.',
        },
        {
          q: 'Hoe werken jullie?',
          a: 'Elk project doorloopt zes fasen: Richting, Structuur, Ontwerp, Bouw, Itereren en Schalen. Het principe is om het systeem te begrijpen voor je het bouwt — het denkwerk is vooraf gedaan, zodat de bouw snel gaat zonder stappen over te slaan.',
        },
        {
          q: 'Hoe lang duurt een project?',
          a: 'Dat hangt af van de scope, maar we werken in snelle loops met kleine, frequente releases in plaats van één grote onthulling op het eind. Je ziet voortgang zodra die landt en het product wordt elke cyclus scherper, omdat de architectuur en richting al vaststaan voor de bouw begint.',
        },
        {
          q: 'Met wie werken jullie?',
          a: 'Vooral fintech, advocatenkantoren, commerciële bureaus en e-commerceteams. Sommig werk is voor klanten, sommig zijn onze eigen producten — alles is gebouwd om in productie te draaien.',
        },
        {
          q: 'Bieden jullie ondersteuning na de lancering?',
          a: 'Ja. Het meeste van ons werk is langetermijn: systemen zijn gebouwd om met je mee te groeien — meer gebruikers, data, talen en features — en we blijven betrokken in plaats van over te dragen en te verdwijnen.',
        },
        {
          q: 'Hoe start ik een project?',
          a: 'Vertel ons wat je bouwt of wat je tegenhoudt — mail naar hello@raoul.studio of gebruik de contactpagina. Elke echte brief wordt gelezen, met een antwoord binnen 24 uur.',
        },
      ],
    },
    posterRailMiddle: 'Proces · Richting → Schalen',
  },

  privacy: {
    slug: 'privacy',
    meta: {
      title: 'Privacybeleid',
      description:
        'Hoe raoul.studio met persoonsgegevens omgaat: wat we via het contactformulier verzamelen, waarom, wie het verwerkt, hoe lang we het bewaren en jouw rechten onder de AVG.',
    },
    eyebrow: 'Juridisch',
    titleLine1: 'Privacy',
    titleAccent: '.',
    updated: 'Laatst bijgewerkt — juni 2026',
    intro:
      'Dit beleid legt uit welke persoonsgegevens raoul.studio verzamelt, waarom we ze verzamelen en welke rechten je erover hebt. We houden de gegevensverzameling tot het minimum dat nodig is om de studio te draaien en de mensen die contact opnemen te beantwoorden.',
    sections: [
      {
        heading: 'Wie we zijn',
        body: [
          'raoul.studio is een product- en engineeringstudio onder leiding van Raoul Guillermo, gevestigd in de EU. Voor alles in dit beleid — of om je rechten uit te oefenen — bereik je ons op hello@raoul.studio.',
          'Voor de AVG is raoul.studio de verwerkingsverantwoordelijke voor de hier beschreven persoonsgegevens.',
        ],
      },
      {
        heading: 'Wat we verzamelen',
        body: [
          'We verzamelen alleen persoonsgegevens die je ons geeft of die je browser meestuurt wanneer je de site gebruikt:',
        ],
        points: [
          'Contactformulier: je naam, e-mailadres, optioneel je bedrijfsnaam en het bericht dat je schrijft.',
          'Technische gegevens: bij het versturen van het formulier slaan we het IP-adres en de browser-user-agent van het verzoek op, om spam en misbruik tegen te gaan.',
          'Taalvoorkeur: een kleine "lang"-cookie onthoudt in welke taal je de site wilt lezen.',
        ],
      },
      {
        heading: 'Waarom we het gebruiken, en onze grondslag',
        body: [
          'We gebruiken je contactgegevens en bericht voor één ding: je vraag lezen en beantwoorden. De grondslag is ons gerechtvaardigd belang om te reageren op mensen die contact met ons opnemen, en om op jouw verzoek stappen te zetten vóór een eventuele overeenkomst.',
          'De technische gegevens (IP, user-agent) gebruiken we op basis van ons gerechtvaardigd belang om het formulier veilig en spamvrij te houden. De taalcookie is een functionele cookie die op basis van jouw keuze wordt geplaatst.',
        ],
      },
      {
        heading: 'Cookies',
        body: [
          'De site gebruikt één functionele cookie ("lang") om je taal te onthouden. We gebruiken geen advertentiecookies en doen geen tracking of profilering van derden.',
        ],
      },
      {
        heading: 'Wie je gegevens verwerkt',
        body: ['We houden het aantal derde partijen klein. Degenen die je gegevens mogelijk verwerken zijn:'],
        points: [
          'SendGrid (Twilio Inc.) — bezorgt de e-mail van het contactformulier bij ons. Je naam, e-mailadres en bericht gaan hier doorheen.',
          'Onze eigen servers — de website draait op infrastructuur die we zelf beheren, en contactinzendingen worden daar in onze database opgeslagen.',
        ],
      },
      {
        heading: 'Internationale doorgifte',
        body: [
          'SendGrid (Twilio) is een Amerikaans bedrijf, dus het versturen van een contact-e-mail kan inhouden dat je gegevens buiten de EU worden doorgegeven. Waar dat gebeurt, is dit gedekt door passende waarborgen zoals de modelcontractbepalingen van de Europese Commissie.',
        ],
      },
      {
        heading: 'Hoe lang we het bewaren',
        body: [
          'We bewaren contactinzendingen zo lang als nodig om je vraag af te handelen en voor onze eigen administratie, en niet langer dan noodzakelijk. Je kunt ons op elk moment vragen je gegevens te verwijderen.',
        ],
      },
      {
        heading: 'Jouw rechten',
        body: ['Onder de AVG heb je het recht om:'],
        points: [
          'de persoonsgegevens die we over je hebben in te zien;',
          'ze te laten corrigeren of verwijderen;',
          'het gebruik ervan te beperken of er bezwaar tegen te maken;',
          'ze in een overdraagbaar formaat te ontvangen.',
        ],
      },
      {
        heading: 'Klachten',
        body: [
          'Om een van deze rechten uit te oefenen, mail je naar hello@raoul.studio. Als je vindt dat we onzorgvuldig met je gegevens zijn omgegaan, heb je ook het recht om een klacht in te dienen bij je lokale toezichthouder — in Nederland de Autoriteit Persoonsgegevens.',
        ],
      },
      {
        heading: 'Beveiliging',
        body: [
          'We nemen redelijke technische en organisatorische maatregelen om je gegevens te beschermen, waaronder transportversleuteling en beperkte toegang. Geen enkel systeem is volledig veilig, maar we houden het aanvalsoppervlak klein door om te beginnen weinig te verzamelen.',
        ],
      },
      {
        heading: 'Software, beveiliging en aansprakelijkheid',
        body: [
          'De website en alle tools of software die we beschikbaar stellen, worden aangeboden op een "as is"- en "as available"-basis, dat wil zeggen in de staat waarin ze zich bevinden en voor zover beschikbaar. We spannen ons redelijkerwijs in om ze veilig en operationeel te houden, maar van geen enkele software of online dienst kan worden gegarandeerd dat deze volledig veilig, ononderbroken of foutloos is.',
          'Voor zover wettelijk toegestaan is raoul.studio niet aansprakelijk voor enig verlies van gegevens, downtime, beveiligingsinbreuk, ongeoorloofde toegang, of enige directe of indirecte schade die voortvloeit uit je gebruik van — of het niet kunnen gebruiken van — de website of onze software, met inbegrip van incidenten buiten onze redelijke invloedssfeer, zoals hacks, aanvallen of storingen bij derden.',
          'Niets in dit beleid beperkt de rechten die je op grond van de AVG hebt, of enige aansprakelijkheid die wettelijk niet kan worden uitgesloten — waaronder aansprakelijkheid voor opzet of grove nalatigheid.',
        ],
      },
      {
        heading: 'Wijzigingen in dit beleid',
        body: [
          'We kunnen dit beleid bijwerken naarmate de studio verandert. Doen we dat, dan werken we de datum boven aan deze pagina bij.',
        ],
      },
    ],
    directLabel: 'Privacyvragen',
    directEmail: 'hello@raoul.studio',
    posterRailMiddle: 'Privacy · Juridisch',
  },
}
