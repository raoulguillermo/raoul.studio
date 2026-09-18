// Dienstenpagina — wat de studio doet, met de agentstructuren voorop.
// Geen namen van klanten of leveranciers op deze pagina.

export const services = {
  meta: {
    title: 'Diensten — AI-agentstructuren, software & digitale producten',
    description:
      'Wat raoul.studio doet: complete structuren van AI-agents die het dagelijkse werk van een bedrijf draaien, maatwerksoftware en platforms, automatisering, commerce, merk en langdurige productpartnerschappen.',
  },
  eyebrow: 'Diensten',
  titleLine1: 'Diensten',
  titleAccent: '.',
  lead: 'De studio ontwerpt, bouwt en draait de systemen waar een bedrijf op draait — van één tool tot een compleet team van AI-agents dat het dagelijkse werk voor je doet.',

  agents: {
    label: '01 — AI-agentstructuren',
    heading: 'Een team van AI-agents dat je bedrijf samen met je runt.',
    intro: [
      'Geen chatbot op je website. De studio bouwt een complete structuur van AI-agents, elk met een eigen taak — de telefoon opnemen, e-mail afhandelen, bestellingen verwerken, plannen, factureren, opvolgen, rapporteren — die samenwerken als een goed geolied team.',
      'Elke agent is gekoppeld aan de systemen die je al gebruikt, weet precies wat hij wel en niet mag, en geeft het door aan een mens als dat het betere antwoord is. Jij houdt de beslissingen. De agents doen de rest, dag en nacht.',
    ],
    diagram: {
      owner: 'Jij',
      ownerNote: 'Bepaalt de doelen · keurt goed wat ertoe doet',
      orchestrator: 'Coördinator',
      orchestratorNote: 'Verdeelt het werk · controleert · schaalt op',
      teams: [
        { name: 'Front office', agents: ['Telefoon', 'E-mail', 'WhatsApp & chat'] },
        { name: 'Operatie', agents: ['Bestellingen', 'Planning', 'Opvolging'] },
        { name: 'Back office', agents: ['Facturatie', 'Rapportage', 'Administratie'] },
      ],
      systems: 'Jouw systemen',
      systemsNote: 'CRM · agenda · webshop · ERP · boekhouding · inbox',
      caption: 'Een agentstructuur',
    },
    stepsLabel: 'Hoe de studio het opzet',
    steps: [
      {
        title: 'Het bedrijf in kaart',
        body: 'De studio gaat met je om tafel en brengt in kaart hoe het werk echt loopt: welke vragen binnenkomen, welke taken zich herhalen, welke beslissingen een mens nodig hebben en waar tijd en geld weglekken.',
      },
      {
        title: 'De structuur ontwerpen',
        body: 'Het werk wordt verdeeld in rollen — één agent per taak — met een coördinator erboven. Per rol wordt vastgelegd wat de agent mag inzien, wat hij mag wijzigen en wanneer hij het jou eerst moet vragen.',
      },
      {
        title: 'Je systemen koppelen',
        body: 'De agents worden aangesloten op de tools waar je al op draait: CRM, agenda, webshop, kassa, boekhouding, e-mail en telefoon. Heeft een systeem nog geen koppeling, dan bouwt de studio die — of het systeem zelf.',
      },
      {
        title: 'Meedraaien met je team',
        body: 'Voordat er iets live gaat, draaien de agents naast je team mee: ze stellen voor in plaats van te handelen, zodat je hun werk kunt controleren. Alleen wat betrouwbaar blijkt, gaat aan.',
      },
      {
        title: 'Overdragen en blijven verbeteren',
        body: 'Eenmaal live blijft de studio de structuur volgen, bijstellen en uitbreiden — een nieuwe agent voor een nieuwe taak, een nieuwe koppeling als je bedrijf verandert.',
      },
    ],
    guardrailsLabel: 'Jij houdt de controle',
    guardrails: [
      {
        title: 'Heldere bevoegdheden',
        body: 'Elke agent kan alleen bij wat zijn taak nodig heeft. Een agent die bestellingen opneemt, kan geen geld terugstorten.',
      },
      {
        title: 'Bevestiging ingebouwd',
        body: 'Alles wat ertoe doet wordt eerst bevestigd — en die controle wordt afgedwongen door het systeem, niet overgelaten aan de AI.',
      },
      {
        title: 'Een mens als het telt',
        body: 'Agents weten wanneer ze moeten stoppen en het werk doorgeven aan jou of je team, met alles wat nodig is om het op te pakken.',
      },
      {
        title: 'Alles vastgelegd',
        body: 'Elk gesprek, bericht en elke actie wordt vastgelegd, zodat je altijd kunt zien wat er gebeurde en waarom.',
      },
    ],
  },

  offer: {
    label: '02 — Alles eromheen',
    lead: 'Agents zijn zo goed als de systemen eronder. Die bouwt de studio ook.',
    items: [
      {
        title: 'Maatwerksoftware & platforms',
        body: 'SaaS-platforms, portalen, marktplaatsen en interne tools — ontworpen, gebouwd en in productie gedraaid.',
      },
      {
        title: 'Automatisering & koppelingen',
        body: 'De tools die een bedrijf al gebruikt met elkaar verbinden, zodat data vanzelf stroomt in plaats van met de hand te worden overgetypt.',
      },
      {
        title: 'AI-tools',
        body: 'Documentintelligentie, zoeken, privacyveilige AI die op je eigen hardware draait, en assistenten die in je werkproces zijn ingebouwd.',
      },
      {
        title: 'Commerce',
        body: 'Webshops op schaal, headless storefronts, product- en voorraadbeheer, en de back offices erachter.',
      },
      {
        title: 'Merk & websites',
        body: 'Identiteit, websites en digitale ervaringen — het product en het merk eromheen, samen ontworpen.',
      },
      {
        title: 'Infrastructuur & groei',
        body: 'Hosting, beveiliging, performance en doorontwikkeling, lang na de lancering.',
      },
    ],
  },

  faq: {
    label: 'FAQ',
    items: [
      {
        q: 'Kunnen AI-agents echt een bedrijf runnen?',
        a: 'Ze kunnen een groot deel van het dagelijkse werk doen: klanten te woord staan, bestellingen en boekingen verwerken, opvolgen, facturen en rapportages voorbereiden. Beslissingen die ertoe doen blijven bij jou — de structuur is zo gebouwd dat de agents het werk doen en jij goedkeurt wat telt.',
      },
      {
        q: 'Moet ik mijn huidige software vervangen?',
        a: 'Nee. Agents worden gekoppeld aan de systemen die je al gebruikt. Alleen waar iets ontbreekt of je tegenhoudt, bouwt de studio iets nieuws.',
      },
      {
        q: 'Waar begin ik?',
        a: 'Meestal bij de ene taak die de meeste tijd kost of het meeste geld laat liggen — vaak de telefoon of de inbox. Eén agent gaat eerst live, en daarna groeit de structuur verder.',
      },
      {
        q: 'Wat als een agent een fout maakt?',
        a: 'Agents handelen alleen binnen de bevoegdheden die ze krijgen, belangrijke acties moeten worden bevestigd en alles wordt vastgelegd. Twijfelt een agent, dan geeft hij het door aan een mens in plaats van te gokken.',
      },
      {
        q: 'Wat kost het?',
        a: 'Dat hangt af van hoeveel agents, met welke systemen ze koppelen en hoeveel er op maat wordt gebouwd. Na een eerste gesprek krijg je een helder voorstel met een vaste scope.',
      },
    ],
  },

  cta: {
    heading: 'Wat zou je als eerste uit handen geven?',
    body: 'Vertel de studio hoe je bedrijf vandaag draait. Je krijgt binnen 24 uur antwoord.',
    label: 'Laten we praten',
    href: '/contact',
  },
  posterRailMiddle: 'Diensten · Agents, software & producten',
}
