// Nederlands — per-slug overrides of translatable project fields.
// Inherits slug/number/year/colors/titleLine1/titleLine2 from the English base.

export const projectOverrides = {
  outdoorxl: {
    shortTag: 'e-commerce, schaal',
    shortDescription:
      'Magento e-commerce op schaal — 200.000+ producten over 14+ talen en sites, nu op weg naar headless.',
    lead:
      'Een e-commerceplatform met 200.000 producten en 14 markten — en een live rebuild van Magento naar headless.',
    tagsLine: 'E-commerce · Magento · Headless · Next.js · GraphQL',
    status: 'doorlopend',
    info: [
      { label: 'Rol', value: 'Lead developer & software-architect' },
      { label: 'Stack', value: 'Magento, Varnish, PHP, MySQL → Next.js, MongoDB, Payload, GraphQL + REST' },
      { label: 'Bereik', value: '200.000+ producten · 14+ talen & sites' },
    ],
    body: [
      {
        text: 'OutdoorXL draait op serieuze schaal: 200.000+ producten over 14+ talen en storefronts, razendsnel geserveerd met Magento en Varnish. Wij leiden de ontwikkeling en zijn eigenaar van de architectuur erachter.',
      },
      {
        text: 'Nu bouwen we het headless om — Next.js en MongoDB aan de voorkant, de Magento 2-backend achter een GraphQL- en REST-laag, met custom modules die de twee verbinden en Payload CMS voor content.',
      },
      {
        text: 'Het doel: de catalogus en de markten behouden, het legacy-gewicht kwijtraken. Een snellere storefront en een codebase die klaar is voor het komende decennium.',
      },
    ],
  },

  aboutspace: {
    shortTag: 'marktplaats, betalingen',
    shortDescription:
      'Een tweezijdige marktplaats om creatieve en commerciële ruimtes te plaatsen, verhuren en boeken — met chat, wallet en peer-to-peer betalingen ingebouwd.',
    lead:
      'Een tweezijdige marktplaats voor creatieve en commerciële ruimtes — plaatsen, verhuren, boeken, betalen, alles op één plek.',
    tagsLine: 'Marktplaats · Next.js · Node.js · Stripe Connect · MongoDB',
    status: 'lancering',
    info: [
      { label: 'Rol', value: 'Developer & conceptontwerp' },
      { label: 'Stack', value: 'Next.js, Node.js REST API, MongoDB, Stripe' },
      { label: 'Status', value: 'Lancering nu' },
    ],
    body: [
      {
        text: 'AboutSpace verbindt mensen met ruimte aan de mensen die ze nodig hebben — een marktplaats om creatieve en commerciële locaties te plaatsen, verhuren en boeken. Gebouwd met projectlead Jette Schneider (Timewindow).',
      },
      {
        text: 'Het platform blijft op de achtergrond. In-app chat houdt gesprekken op één plek, en peer-to-peer connect-and-pay (Stripe Connect) laat gebruikers direct transacteren, met een ingebouwde wallet en abonnementen die de rest afhandelen.',
      },
      {
        text: 'Vanaf de grond headless — Next.js, een Node.js REST API en MongoDB — gebouwd om beide kanten van een marktplaats vanaf dag één aan te kunnen. Lancering nu.',
      },
    ],
  },

  threadly: {
    shortTag: 'saas, support',
    shortDescription:
      'Onze eigen SaaS — een support-ticketsysteem voor supportteams, bureaus en solo-ondernemers. Gedeelde inbox, SLA-tracking, automatisering.',
    lead:
      'Support die niet tussen wal en schip valt — een ticketsysteem voor teams, bureaus en solo-ondernemers.',
    tagsLine: 'SaaS · Support · Next.js · Node.js · MongoDB',
    status: 'live',
    info: [
      { label: 'Rol', value: 'Solo-bouw & architectuur' },
      { label: 'Stack', value: 'Next.js, MongoDB, Node.js REST API' },
      { label: 'Status', value: 'Live — ons eigen product' },
    ],
    body: [
      {
        text: 'Threadly is de eigen SaaS van raoul.studio: een support-ticketsysteem gebouwd voor supportteams, bureaus en solo-ondernemers die grip willen houden op elk gesprek.',
      },
      {
        text: 'Een gedeelde inbox trekt elk kanaal op één plek samen, SLA-tracking houdt reactietijden eerlijk, en automatisering neemt het repetitieve werk over zodat het team zich kan richten op de antwoorden die ertoe doen.',
      },
      { text: 'In-house ontworpen, gebouwd en gearchitecteerd. Wij draaien er zelf ook op.' },
    ],
  },

  lexpert: {
    shortTag: 'crm, legal',
    shortDescription:
      'Een CRM op maat voor een advocatenkantoor — cliënten, directe facturatie, metrics en rolgebaseerde toegang, gebouwd naar de exacte workflow van het kantoor.',
    lead: 'Een volledig CRM op maat voor een advocatenkantoor, gebouwd rond hoe de praktijk echt draait.',
    tagsLine: 'CRM · Legal · Facturatie · Next.js · MongoDB',
    status: 'live',
    info: [
      { label: 'Rol', value: 'Solo-developer & lead-architect' },
      { label: 'Stack', value: 'Next.js, MongoDB, Node.js' },
      { label: 'Klant', value: 'Lexpert Advocaten' },
    ],
    body: [
      {
        text: 'Lexpert Advocaten had een CRM nodig dat gevormd was rond de advocatuur, niet een generieke tool die ze moesten ombuigen. Dus bouwden we er een — cliënten en relaties beheren, ze direct factureren, en de metrics bijhouden die het kantoor sturen.',
      },
      {
        text: 'Rolgebaseerde gebruikersrechten houden de juiste informatie bij de juiste mensen, en het hele systeem is naar de richting van het kantoor gebouwd, van de eerste beslissing tot de laatste.',
      },
      {
        text: 'Een schone interne tool met één duidelijk doel — het soort dat kant-en-klare software net niet kan worden.',
      },
    ],
  },

  fndracer: {
    shortTag: 'ai, financiering',
    shortDescription:
      'Een AI-tool voor financieringsaanvragen — scrapt financieringsbronnen, matcht ze aan een bedrijf en stelt een complete aanvraag op in zo’n vijf minuten.',
    lead: 'Van "welke financiering bestaat er" naar een complete eerste aanvraag in zo’n vijf minuten.',
    tagsLine: 'AI · Financiering · Next.js · OpenAI · MongoDB',
    status: 'in ontwikkeling',
    info: [
      { label: 'Rol', value: 'Solo-bouw & architectuur' },
      { label: 'Stack', value: 'Next.js, MongoDB, OpenAI' },
      { label: 'Status', value: 'In ontwikkeling' },
    ],
    body: [
      {
        text: 'Financieringsaanvragen zijn traag, versnipperd en makkelijk fout te doen. FndRacer haalt het geploeter eruit: het scrapt financieringsbronnen, matcht de juiste aan een bedrijf, en gebruikt AI om de aanvraag op te stellen.',
      },
      {
        text: 'Het hele proces draait in zo’n vijf minuten — een complete eerste versie, klaar om te verfijnen in plaats van een leeg vel om te vullen.',
      },
      { text: 'Nu in ontwikkeling.' },
    ],
  },

  'smart-dossier': {
    shortTag: 'ai, documenten',
    shortDescription:
      'Een AI-documentdossiersysteem — full-text zoeken ín documenten en automatisch herstructureren van grote documentsets.',
    lead:
      'Zoeken ín de documenten, niet alleen in hun titels — en AI laat de stapel meteen herordenen.',
    tagsLine: 'AI · Documenten · Zoeken · Next.js · MongoDB',
    status: 'in ontwikkeling',
    info: [
      { label: 'Rol', value: 'Solo-developer & architect' },
      { label: 'Stack', value: 'PHP/MySQL → Next.js, MongoDB, Node.js + AI' },
      { label: 'Klant', value: 'Vastgoedkor' },
    ],
    body: [
      {
        text: 'Smart Dossier begon in 2016 als een PHP/MySQL-documentsysteem voor Vastgoedkor. In 2026 bouwden we het om tot iets slimmers.',
      },
      {
        text: 'Het doorzoekt de volledige tekst ín documenten — niet alleen bestandsnamen — en herstructureert grote, rommelige documentsets automatisch tot iets waar je echt doorheen kunt navigeren. AI doet het zware werk op zoeken en datastructurering.',
      },
      {
        text: 'Een tien jaar oude tool, herbouwd voor hoe documentwerk nu gaat. In ontwikkeling.',
      },
    ],
  },

  aboutdesk: {
    shortTag: 'boeken, teams',
    shortDescription:
      'Een desk-booking-app voor teams — organisaties brengen hun gebouw en verdiepingen in kaart, en teams boeken bureaus in een ruimte zodat ze samen kunnen zitten en werken.',
    lead: 'Bureaus boeken die teams bij elkaar houdt, niet alleen een zitplaats geeft.',
    tagsLine: 'Boeken · Teams · Next.js · Node.js · MongoDB',
    status: 'in uitvoering',
    info: [
      { label: 'Rol', value: 'Solo-bouw & architectuur' },
      { label: 'Stack', value: 'Next.js, MongoDB, Node.js' },
      { label: 'Status', value: 'In uitvoering' },
    ],
    body: [
      {
        text: 'AboutDesk is een desk-booking-app gebouwd rond teams, niet alleen rond zitplaatsen. Een organisatie brengt haar gebouw en verdiepingen in kaart, en teams boeken hun bureaus binnen een ruimte — zodat de mensen die samenwerken bij elkaar zitten.',
      },
      {
        text: 'Simpel te beheren, simpel te gebruiken: kies een ruimte, claim de bureaus, klaar. Gebouwd als standalone-product.',
      },
      { text: 'In uitvoering.' },
    ],
  },

  footsteppa: {
    shortTag: 'merk, media',
    shortDescription:
      'Het eigen onafhankelijke mediamerk en label van de oprichter — 6.000+ volgers, 5 artiesten, in uitbreiding naar events, merch en een platenlabel.',
    lead: 'Bewijs dat de studio een merk vanaf nul kan bouwen, niet alleen software.',
    tagsLine: 'Merk · Media · Community',
    status: 'doorlopend',
    info: [
      { label: 'Rol', value: 'Eigenaar & oprichter' },
      { label: 'Bereik', value: '6.000+ volgers · 5 artiesten' },
      { label: 'Status', value: 'Doorlopend — onafhankelijk merk' },
    ],
    body: [
      {
        text: 'Footsteppa is het eigen onafhankelijke mediamerk van de oprichter — van niets opgebouwd tot een community van 6.000+ volgers over vijf artiesten, met creatieve directie door Anoep Chowhari.',
      },
      {
        text: 'Het groeit ook voorbij het scherm: naar events, kleding en merch, en een platenlabel.',
      },
      {
        text: 'We zetten het hier neer als bewijs van bereik. Hetzelfde instinct dat software levert — bouw het goed, laat het groeien voor de lange termijn — werkt net zo goed op een merk.',
      },
    ],
  },

  'no-cms': {
    shortTag: 'websites, whatsapp',
    shortDescription:
      'Werk je website bij met een WhatsApp-bericht. Kleuren, teksten, layout — alles, in een handomdraai. Een CMS, opnieuw uitgevonden: geen dashboards, geen logins, niks te leren.',
    lead:
      'Bedien je hele website vanuit WhatsApp. Stuur een bericht om kleuren, teksten of de complete layout aan te passen, en zie het meteen veranderen. Alles wat een CMS doet — zonder het CMS.',
    tagsLine: 'Product · WhatsApp · Geen login · Direct aangepast',
    status: 'nieuw',
    info: [
      { label: 'Product', value: 'Je website aanpassen via WhatsApp' },
      { label: 'Hoe het werkt', value: 'App het alsof het een mens is · wijzigingen staan meteen live' },
      { label: 'Status', value: 'Nieuw — early access' },
    ],
    body: [
      {
        text: 'No CMS maakt van WhatsApp het enige dashboard dat je website nodig heeft. Een kleur veranderen, een kop herschrijven, een sectie omwisselen of de hele layout omgooien? Stuur een bericht — en zie het gebeuren.',
      },
      {
        text: 'Het werkt als een CMS, alleen slimmer en veel makkelijker. Geen adminpaneel om te leren, geen logins om bij te houden, geen plug-ins om te updaten. Je weet al hoe je een WhatsApp stuurt — en meer heb je niet nodig om je site te bedienen.',
      },
      {
        text: 'Het verandert datgene waar de meeste mensen liever niet aankomen in iets dat zo makkelijk is als appen. Nieuw, en nu open voor de eerste gebruikers.',
      },
    ],
  },

  anonimise: {
    shortTag: 'privacy, offline ai',
    shortDescription:
      'Haal de namen, BSN’s en persoonsgegevens uit elk document — met een AI die volledig op je eigen machine draait en nooit het internet raakt. Schoon het hier op, en daarna kun je het veilig in ChatGPT of Claude plakken. Gebouwd met Lexpert Advocaten.',
    lead:
      'Anonimiseer gevoelige documenten voordat ze ooit bij een online AI belanden — met een tool die volledig offline draait, zodat er geen cliëntgegevens het kantoor verlaten.',
    tagsLine: 'Privacy · Offline AI · Presidio · spaCy · Legal-tech',
    status: 'live',
    info: [
      { label: 'Rol', value: 'Developer & architect' },
      { label: 'Stack', value: 'Microsoft Presidio, offline spaCy NER, rule-based matching' },
      { label: 'Klant', value: 'In samenwerking met Lexpert Advocaten' },
    ],
    body: [
      {
        text: 'Professionals willen AI gebruiken, maar kunnen geen cliëntdossiers in ChatGPT plakken. Anonimise is de tool die je eerst draait — het schrobt namen, adressen, BSN’s en bankrekeningnummers uit een document, zodat wat overblijft veilig naar een online model kan.',
      },
      {
        text: 'Het draait volledig op je eigen computer. De AI erin is een lokaal naamherkenningsmodel — geen chatbot, nooit verbonden met een cloud — gekoppeld aan strikte regels voor data met een vaste vorm, zoals de 11-proef van het BSN en IBAN’s. Trek de netwerkkabel eruit en het werkt precies hetzelfde; het blokkeert zichzelf actief om online te gaan.',
      },
      {
        text: 'Eruit komt een schone tekstversie met namen vervangen door neutrale placeholders, plus een netjes geredigeerde PDF of Word-bestand waar de gevoelige tekst écht verwijderd is, niet alleen zwartgelakt. Jij houdt de regie — controleer elke match, voeg je eigen woorden toe om te redigeren — en niets verlaat ooit je machine. Gebouwd met Lexpert Advocaten.',
      },
    ],
  },
}
