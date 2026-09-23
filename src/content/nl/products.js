// Software-landingspagina's — Nederlandse tekst.
// Een product dat hier ontbreekt valt terug op het Engels (zie ../index.js).

export const products = {
  'voice-ai': {
    meta: {
      title: 'Voice AI — een AI-telefoonassistent voor je bedrijf',
      description:
        'Een AI-telefoonassistent die je bedrijfslijn opneemt, praat als een mens en het werk afmaakt — bestellingen, afspraken, meldingen — rechtstreeks in je eigen systemen.',
    },
    eyebrow: 'Software · Voice AI',
    titleLine1: 'Voice',
    titleLine2: 'AI',
    lead: 'Een AI die je telefoon opneemt als je beste medewerker — en elk gesprek meteen in je eigen systemen zet.',
    primaryCta: 'Plan een demo',
    caseStudyCta: 'Hoe de studio het bouwde',
    highlights: [
      { label: 'Neemt op', value: 'Elk gesprek, dag en nacht' },
      { label: 'Spreekt', value: 'Nederlands en Engels — wisselt tijdens het gesprek' },
      { label: 'Koppelt met', value: 'Je CRM, agenda, webshop of ERP' },
    ],
    problem: {
      label: 'Het probleem',
      heading: 'De telefoon gaat als niemand kan opnemen.',
      body: [
        'Midden in een knipbeurt, onder een auto, tijdens de avondspits, in gesprek met een klant. Elk gemist telefoontje is een gemiste bestelling, een gemiste afspraak of een klant die de concurrent belt.',
        'De meeste van die telefoontjes gaan over dezelfde paar vragen. Voice AI beantwoordt ze — gewoon, in een normaal gesprek — en geeft door aan een mens wanneer dat nodig is.',
      ],
    },
    steps: {
      label: 'Hoe het werkt',
      items: [
        {
          title: 'Iemand belt',
          body: 'Je klanten bellen je gewone nummer. De assistent neemt op en loopt het gesprek met ze door, gewoon in het Nederlands of Engels.',
        },
        {
          title: 'Hij kijkt in je echte gegevens',
          body: 'Tijdens het gesprek zoekt hij dingen op in je eigen systemen: je menu, je agenda, je voorraad, je openingstijden. Hij biedt alleen aan wat er echt is.',
        },
        {
          title: 'Eerst bevestigen, dan pas doen',
          body: 'Hij leest alles eerst terug. Pas als de beller echt “ja” zegt, voert hij het uit — en dat controleert het systeem zelf, niet de AI.',
        },
        {
          title: 'Het staat in je systeem',
          body: 'De bestelling, afspraak of melding verschijnt waar je al werkt — je bestelsysteem, CRM, agenda of inbox — alsof hij via je website binnenkwam.',
        },
      ],
    },
    features: {
      label: 'Wat hij kan',
      items: [
        { title: 'Bestellingen opnemen', body: 'Afhaal- en bezorgbestellingen uit je echte menu of assortiment, met formaten, extra’s en prijzen — direct in je bestelsysteem.' },
        { title: 'Afspraken inplannen', body: 'Kijkt in je agenda, plant afspraken in, verzet of annuleert ze, en bevestigt de tijd met de beller.' },
        { title: 'Vragen beantwoorden', body: 'Openingstijden, prijzen, wat er op de kaart staat — opgezocht in je eigen gegevens terwijl het gesprek loopt.' },
        { title: 'Meldingen vastleggen', body: 'Noteert een storing of vraag en mailt die door, of maakt een ticket aan in je systeem.' },
        { title: 'Doorverbinden', body: 'Verbindt de beller door met iemand uit je team als dat het betere antwoord is.' },
        { title: 'Binnen de lijntjes', body: 'Jij bepaalt precies wat hij wel en niet mag. De restaurantassistent kan bijvoorbeeld nieuwe bestellingen plaatsen, maar niets wijzigen, annuleren of terugbetalen.' },
      ],
    },
    useCases: {
      label: 'Gemaakt voor',
      lead: 'Overal waar de telefoon elke dag met dezelfde vragen rinkelt.',
      items: ['Restaurants', 'Kappers & salons', 'Garages', 'Klinieken & praktijken', 'Advocatenkantoren', 'Verhuurbedrijven'],
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: 'Klinkt het als een robot?',
          a: 'Hij gebruikt een natuurlijke stem, en heeft hij even nodig, dan zegt hij dat, net als een mens. Bellers praten ertegen ongeveer zoals tegen je personeel.',
        },
        {
          q: 'Moet ik een ander telefoonnummer nemen?',
          a: 'Nee. Bellers bellen gewoon je eigen nummer. De studio stuurt het door naar de assistent — alle gesprekken, alleen buiten openingstijden, of alleen als je team niet opneemt.',
        },
        {
          q: 'Met welke systemen kan hij koppelen?',
          a: 'Met bijna alles wat een API heeft: CRM’s, boekingsplatforms, webshops, kassa- en ERP-systemen, ticketsystemen en e-mail. De studio bouwt ook maatwerksystemen, dus heeft het jouwe nog geen API, dan kan dat stuk ook gebouwd worden.',
        },
        {
          q: 'Welke talen spreekt hij?',
          a: 'Standaard Nederlands en Engels, en hij wisselt als de beller wisselt. Andere talen zijn mogelijk — vraag het ons.',
        },
        {
          q: 'Kan hij fouten maken?',
          a: 'Hij leest alles terug en doet pas iets na een duidelijk “ja”, en die bevestiging wordt door het systeem afgedwongen, niet door de AI. Daarnaast bepaal jij precies welke acties hij mag uitvoeren.',
        },
        {
          q: 'Wat kost het?',
          a: 'Vanaf € 149 per maand, inclusief ongeveer 300 gesprekken, plus een eenmalige setup van € 495 (excl. btw). Meer gesprekken of koppelingen met je eigen systemen? Dan krijg je na de demo een vaste prijs.',
        },
      ],
    },
    getStarted: {
      label: 'Plan een demo',
      heading: 'Hoor het op je eigen bedrijf.',
      body: 'Vertel ons wat voor telefoontjes je krijgt en welke systemen je gebruikt. De studio reageert binnen 24 uur om een demo in te plannen.',
      form: {
        messageLabel: 'Je telefoontjes',
        messagePlaceholder:
          'Waarvoor bellen mensen je? Bestellingen, afspraken, vragen? Ongeveer hoeveel gesprekken per dag, en welke systemen gebruik je (boekingstool, CRM, webshop…)?',
        sendLabel: 'plan een demo',
      },
    },
    pricing: {
      label: 'Prijs',
      prefix: 'Vanaf',
      amount: '€ 149',
      unit: 'per maand',
      points: [
        'Inclusief ongeveer 300 gesprekken per maand',
        'Eenmalige setup: € 495',
        'Koppelingen met je eigen systemen in overleg',
      ],
      note: 'Alle prijzen excl. btw.',
    },
    callDemo: {
      label: 'Bel en hoor het zelf',
      note: 'Onze AI neemt op. Probeer maar een afspraak te maken.',
      secondary: 'Of plan een demo',
    },
    dataPrivacy: {
      label: 'AVG & data',
      heading: 'Wat er met gesprekken gebeurt.',
      items: [
        { title: 'Alleen wat nodig is', body: 'De assistent vraagt alleen wat nodig is om het werk af te maken, zoals naam, telefoonnummer en de afspraak. Dat komt in jouw eigen systeem terecht.' },
        { title: 'Opnames en transcripten', body: 'Of gesprekken worden opgenomen en hoe lang transcripten bewaard blijven, leggen we samen vast. Zo kort als voor jouw bedrijf nodig is.' },
        { title: 'Verwerkersovereenkomst', body: 'We tekenen standaard een verwerkersovereenkomst met je: wie welke gegevens verwerkt, waar en hoe lang.' },
        { title: 'Wie er meewerkt', body: 'Telefonie loopt via Twilio, spraak via ElevenLabs en het taalmodel is Claude van Anthropic. De volledige lijst staat in de verwerkersovereenkomst.' },
      ],
    },
    posterRailMiddle: 'Voice AI · Mis nooit meer een telefoontje',
  },

  'no-cms': {
    meta: {
      title: 'No-CMS — je website aanpassen via WhatsApp',
      description:
        'Beheer je hele website vanuit WhatsApp. Stuur een bericht om tekst, kleuren, foto’s of de indeling te veranderen en zie het meteen live gaan. Alles wat een CMS doet — zonder het CMS.',
    },
    eyebrow: 'Software · No-CMS',
    titleLine1: 'No',
    titleLine2: 'CMS',
    lead: 'Pas je website aan met een WhatsAppje. Geen dashboard, geen login, niets te leren.',
    primaryCta: 'Vraag early access aan',
    caseStudyCta: 'Lees het verhaal',
    highlights: [
      { label: 'Aanpassen met', value: 'Een WhatsApp-bericht' },
      { label: 'Wijzigingen', value: 'Meteen live' },
      { label: 'Status', value: 'Nieuw — early access' },
    ],
    problem: {
      label: 'Het probleem',
      heading: 'Niemand wil inloggen op z’n website.',
      body: [
        'Nieuwe openingstijden, een andere prijs, de special van deze week, een nieuwe foto. Kleine dingen — maar dan moet je de login zoeken, een beheerpaneel leren, plugins bijwerken of wachten op je webbouwer.',
        'Dus raakt de website langzaam verouderd. No-CMS maakt van het stuk waar iedereen tegen opziet iets wat zo makkelijk is als appen.',
      ],
    },
    steps: {
      label: 'Hoe het werkt',
      items: [
        {
          title: 'Stuur een bericht',
          body: 'App je website zoals je iemand appt: “Zet de openingstijden op 9 tot 6” of “Maak de header rood en wissel de grote foto”.',
        },
        {
          title: 'Het wordt aangepast',
          body: 'No-CMS snapt wat je bedoelt en past de tekst, kleuren, foto’s of indeling van je site aan.',
        },
        {
          title: 'Het staat live',
          body: 'Je website is meteen bijgewerkt. Geen publiceerknop, geen cache legen, op niemand wachten.',
        },
      ],
    },
    features: {
      label: 'Wat je kunt aanpassen',
      items: [
        { title: 'Tekst', body: 'Een kop herschrijven, prijzen, openingstijden of een menukaart bijwerken, nieuws van deze week toevoegen.' },
        { title: 'Kleuren & stijl', body: 'Een kleur, een knop of de look van een onderdeel veranderen — beschrijf het gewoon.' },
        { title: 'Foto’s', body: 'Stuur een foto en zeg waar hij moet komen.' },
        { title: 'Indeling', body: 'Onderdelen toevoegen, verplaatsen of weghalen, of de hele pagina anders opzetten.' },
        { title: 'Geen logins', body: 'Geen beheerpaneel, geen wachtwoorden om te vergeten, geen plugins om bij te werken.' },
        { title: 'Niets te leren', body: 'Kun je een WhatsAppje sturen, dan kun je je website beheren.' },
      ],
    },
    useCases: {
      label: 'Gemaakt voor',
      lead: 'Ondernemers zonder eigen webbeheerder.',
      items: ['Restaurants & cafés', 'Winkels', 'Salons', 'Vakmensen', 'Studio’s & zzp’ers', 'Lokale dienstverleners'],
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: 'Heb ik een nieuwe website nodig?',
          a: 'Niet per se. Tijdens early access zet de studio No-CMS samen met je op — waar het kan op je huidige site, anders op een nieuwe die voor je gebouwd wordt.',
        },
        {
          q: 'Wie kan mijn site aanpassen?',
          a: 'Alleen de WhatsApp-nummers die jij hebt goedgekeurd. Berichten van anderen worden genegeerd.',
        },
        {
          q: 'Wat kan ik aanpassen?',
          a: 'Alles wat je in een CMS zou kunnen aanpassen — tekst, kleuren, foto’s, onderdelen, indeling. Beschrijf het gewoon zoals je het aan iemand zou uitleggen.',
        },
        {
          q: 'Wat betekent early access?',
          a: 'No-CMS is nieuw en gaat eerst open voor een kleine groep vroege gebruikers. De studio zet het persoonlijk met je op en vormt het product rond hoe jij het gebruikt.',
        },
      ],
    },
    getStarted: {
      label: 'Early access',
      heading: 'Beheer je website vanuit WhatsApp.',
      body: 'Vertel ons over je website en je bedrijf. De studio reageert binnen 24 uur.',
      form: {
        messageLabel: 'Je website',
        messagePlaceholder:
          'Wat is je website (als je er een hebt), wat voor bedrijf heb je, en wat pas je het vaakst aan?',
        sendLabel: 'vraag early access aan',
      },
    },
    pricing: {
      label: 'Prijs',
      prefix: '',
      amount: '€ 19',
      unit: 'per maand',
      points: [
        'Plus tegoed voor je wijzigingen: je koopt tokens en betaalt alleen wat je gebruikt',
        'Tegoed koop je bij wanneer je het nodig hebt',
      ],
      note: 'Alle prijzen excl. btw.',
    },
    posterRailMiddle: 'No-CMS · Je website, via WhatsApp',
  },

  poofy: {
    meta: {
      title: 'Poofy — de swipe-to-do-app voor iPhone en Mac',
      description:
        'Poofy is een snelle, overzichtelijke to-do-app. Swipe naar rechts om af te vinken, naar links om te verwijderen. Lijstjes, een widget, een Mac-menubalkapp en offline synchronisatie. Gratis in de App Store.',
    },
    eyebrow: 'Software · Poofy',
    titleLine1: 'Poofy',
    titleLine2: '',
    lead: 'De to-do-app die je niet in de weg zit. Swipe naar rechts: klaar. Swipe naar links: weg.',
    primaryCta: 'Download in de App Store',
    caseStudyCta: 'Hoe de studio het bouwde',
    highlights: [
      { label: 'Prijs', value: 'Gratis' },
      { label: 'Werkt op', value: 'iPhone + widget · Mac-menubalk' },
      { label: 'Werkt', value: 'Offline — synchroniseert zodra je weer online bent' },
    ],
    problem: {
      label: 'Waarom Poofy',
      heading: 'De meeste to-do-apps worden zelf de to-do.',
      body: [
        'Projecten, labels, deadlines, prioriteiten, instellingen — en voor je het weet beheer je de app in plaats van je taken.',
        'Poofy doet één ding: je taken bewaren, en je ze snel laten wegwerken. De studio bouwde hem om er zelf elke dag op te draaien.',
      ],
    },
    steps: {
      label: 'Hoe het werkt',
      items: [
        { title: 'Schrijf het op', body: 'Typ een taak. Nieuwe taken komen bovenaan, dus het laatste raakt nooit zoek.' },
        { title: 'Swipe het weg', body: 'Naar rechts om af te vinken, naar links om te verwijderen. Tik om ter plekke te bewerken, houd vast en sleep om te ordenen.' },
        { title: 'Overal bij de hand', body: 'Zet iets op je iPhone en het staat klaar in de menubalk van je Mac. Ook offline — het synchroniseert zodra je weer online bent.' },
      ],
    },
    features: {
      label: 'Functies',
      items: [
        { title: 'Swipen, niet klikken', body: 'Gebouwd rond gebaren in plaats van knoppen, dus je lijst is zo leeg.' },
        { title: 'Lijstjes', body: 'Houd werk, thuis en bijprojecten uit elkaar.' },
        { title: 'Heatmap', body: 'Je lijst kleurt op urgentie, dus je ziet wat belangrijk is in plaats van dat je het moet lezen.' },
        { title: 'Widget', body: 'Je belangrijkste taken, direct op het beginscherm van je iPhone.' },
        { title: 'Mac-menubalk', body: 'Je lijstjes één klik weg, zonder een app te openen.' },
        { title: 'Privé inloggen', body: 'Log in met Apple, Google of e-mail. Poofy gebruikt dat alleen om je account te herkennen — je taken worden nooit gedeeld.' },
      ],
    },
    useCases: null,
    faq: {
      label: 'FAQ',
      items: [
        { q: 'Is Poofy gratis?', a: 'Ja. Poofy is gratis te downloaden en te gebruiken.' },
        { q: 'Op welke apparaten werkt het?', a: 'Op de iPhone (iOS 17 of nieuwer), met een widget op je beginscherm, en op de Mac als menubalkapp. Je lijstjes zijn op allebei hetzelfde.' },
        { q: 'Werkt het offline?', a: 'Ja. Alles werkt zonder verbinding, en je wijzigingen synchroniseren automatisch zodra je weer online bent.' },
        { q: 'Waarom heb ik een account nodig?', a: 'Zodat je lijstjes met je meegaan van het ene apparaat naar het andere. Dat is de enige reden dat Poofy iets over je bewaart. Je gegevens staan in de EU, en je account wordt op verzoek verwijderd.' },
      ],
    },
    getStarted: {
      label: 'Download Poofy',
      heading: 'Maak je lijst leeg.',
      body: 'Gratis in de App Store voor iPhone.',
      appStoreMeta: 'Gratis · iPhone · iOS 17 of nieuwer',
    },
    posterRailMiddle: 'Poofy · Swipe, klaar',
  },

  crm: {
    meta: {
      title: 'CRM — software die werkt zoals jij werkt',
      description:
        'Een CRM gemaakt voor één bedrijf. Je klanten, je klussen, je uren en facturen, je bestellingen en bestanden op één plek — en het werkt samen met wat je al gebruikt. Gebouwd voor een advocatenkantoor, een platenlabel en een restaurant.',
    },
    eyebrow: 'Software · CRM',
    titleLine1: 'Je eigen',
    titleLine2: 'CRM',
    lead: 'Eén plek voor je klanten, je werk en je facturen — gemaakt zoals jij al werkt.',
    primaryCta: 'Plan een gesprek',
    caseStudyCta: '',
    highlights: [
      { label: 'Gemaakt voor', value: 'Hoe jij werkt' },
      { label: 'Werkt samen met', value: 'Je betalingen, mail, kassa en AI-agents' },
      { label: 'In gebruik bij', value: 'Een advocatenkantoor, een platenlabel, een restaurant' },
    ],
    problem: {
      label: 'Het probleem',
      heading: 'Kant-en-klare software past nooit helemaal.',
      body: [
        'Ze zijn gemaakt voor het gemiddelde bedrijf. Dus werkt jouw bedrijf eromheen. Een Excel’tje ernaast. Hokjes die iets anders betekenen. Facturen in een ander programma. Dezelfde gegevens die je drie keer overtypt.',
        'Je eigen software begint andersom. Die volgt jouw klanten, jouw stappen en jouw papierwerk — zodat het programma het regelwerk doet en je mensen het werk.',
      ],
    },
    steps: {
      label: 'Hoe de studio het bouwt',
      items: [
        {
          title: 'Het begint bij jouw werk',
          body: 'De studio gaat zitten met de mensen die ermee gaan werken: wat er binnenkomt, wie het oppakt, wat er op de rekening komt en wat je wilt bijhouden.',
        },
        {
          title: 'Het wordt om jou heen gebouwd',
          body: 'Jouw eigen woorden en jouw eigen stappen. Klanten en dossiers, artiesten en shows, gerechten en bestellingen — waar jouw bedrijf ook op draait.',
        },
        {
          title: 'Het wordt gebouwd',
          body: 'Eerst het systeem eronder, dan een ontwerp dat duidelijk werkt, dan code die de productie in kan — software waar je team elke dag in werkt.',
        },
        {
          title: 'Het groeit met je mee',
          body: 'Als het draait, blijft de studio eraan toevoegen: een nieuw overzicht, een koppeling met een ander programma, of AI-agents die werk uit handen nemen.',
        },
      ],
    },
    features: {
      label: 'Wat het kan',
      items: [
        { title: 'Klanten & klussen', body: 'Elke klant met zijn klussen, zijn contactpersonen en hoe het ervoor staat.' },
        { title: 'Uren & facturen', body: 'Een klok die je aanzet op een klus. Je uren worden een factuur, per mail met een betaallink — en hij vinkt zichzelf af als het geld binnen is.' },
        { title: 'Bestellingen & betalen', body: 'Bestellingen van nieuw tot klaar, online betalen, geld terug als dat moet, en voorraad die zichzelf aftelt.' },
        { title: 'Bestanden', body: 'Een map voor elke klant en elke klus, automatisch aangemaakt, zodat er niets zoekraakt op iemands laptop.' },
        { title: 'Je cijfers', body: 'Hoe het bedrijf ervoor staat in één blik, en een pdf als je het moet laten zien.' },
        { title: 'Wie wat ziet', body: 'Iedereen ziet alleen wat bij zijn werk hoort, met een extra code bij het inloggen als je dat wilt.' },
      ],
    },
    useCases: {
      label: 'Gemaakt voor',
      lead: 'Bedrijven die niet werken zoals de rest.',
      items: ['Advocaten & adviseurs', 'Labels, bureaus & evenementen', 'Restaurants & winkels', 'Dienstverleners', 'Verenigingen & stichtingen', 'Groeiende teams'],
    },
    references: {
      label: 'Referenties',
      lead: 'Drie die we bouwden, alle drie in gebruik.',
      items: [
        {
          sector: 'Advocatenkantoor · Rotterdam',
          body: 'Het hele kantoor op één plek: cliënten, hun dossiers en een klok die de advocaten per dossier aanzetten. Van die uren maakt het systeem een factuur in de huisstijl, die per mail de deur uit gaat met een betaallink en zichzelf afvinkt als hij betaald is. Elk dossier heeft zijn eigen map, en iedereen ziet alleen zijn eigen deel.',
        },
        {
          sector: 'Platenlabel & evenementen',
          body: 'Alles wat het label doet: artiesten van eerste contact tot handtekening, demo’s en aanmeldingen die binnenkomen vanaf de website, en shows tot op het speelschema, de begroting, de partners en de subsidies. Eén gedeelde agenda, en een inlog waar artiesten hun eigen pagina bijhouden.',
        },
        {
          sector: 'Restaurant · Schiedam',
          body: 'De bestellingen van de keuken op één scherm, van nieuw tot klaar, met een knop om iemand terug te betalen. De kaart staat er ook in — foto’s, allergenen, openingstijden en een pauzeknop als het te druk wordt. Een AI neemt de telefoon op en zet die bestellingen in dezelfde lijst.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: 'Waarom niet iets kant-en-klaars kopen?',
          a: 'Past iets kant-en-klaars, koop het dan. Je eigen software is het waard als jouw manier van werken, je facturen of je cijfers er niet in passen — en je mensen tijd verliezen met om het programma heen werken in plaats van ermee.',
        },
        {
          q: 'Werkt het samen met wat we al gebruiken?',
          a: 'Ja. Betalingen, mail, de boekhouding, de kassa, je website of webshop. Het wordt gebouwd om samen te werken met wat je hebt.',
        },
        {
          q: 'Kunnen AI-agents erin werken?',
          a: 'Ja. Omdat de studio het zelf bouwt, kun je AI-agents er direct op aansluiten — de telefoon opnemen, bestellingen aannemen of werk klaarzetten, en alleen wat jij ze toestaat.',
        },
        {
          q: 'Zijn mijn gegevens veilig?',
          a: 'Iedereen ziet alleen wat bij zijn werk hoort, en je kunt een extra code bij het inloggen instellen. De studio bouwt het en houdt het bij, dus je weet altijd waar je gegevens staan en wie erbij kan.',
        },
        {
          q: 'Wat kost het?',
          a: 'Een CRM op maat begint bij € 4.950 eenmalig (excl. btw). Wat het precies wordt, hangt af van wat het moet doen: met hoeveel mensen je het gebruikt, wat je wilt bijhouden en waar het aan moet koppelen. Na een kennismaking krijg je vooraf een vaste prijs.',
        },
      ],
    },
    getStarted: {
      label: 'Plan een gesprek',
      heading: 'Wat moet die van jou doen?',
      body: 'Vertel ons hoe je bedrijf nu draait en waar de software in de weg zit. De studio reageert binnen 24 uur.',
      form: {
        messageLabel: 'Je bedrijf',
        messagePlaceholder:
          'Wat voor bedrijf is het, met hoeveel mensen zouden jullie het gebruiken, en wat gebruik je nu (Excel, een kant-en-klaar programma…)? Wat kost de meeste tijd?',
        sendLabel: 'plan een gesprek',
      },
    },
    pricing: {
      label: 'Prijs',
      prefix: 'Vanaf',
      amount: '€ 4.950',
      unit: 'eenmalig',
      points: [
        'Gebouwd rond hoe jouw bedrijf werkt',
        'Vooraf een vaste prijs, na een kennismaking',
        'Hosting en onderhoud in overleg',
      ],
      note: 'Alle prijzen excl. btw.',
    },
    posterRailMiddle: 'CRM · Gebouwd rond jouw bedrijf',
  },
}

export const productUi = {
  softwarePage: {
    meta: {
      title: 'Software — producten gebouwd en gedraaid door de studio',
      description:
        'De eigen software van de studio: Voice AI, een AI-telefoonassistent voor elk bedrijf; No-CMS, je website aanpassen via WhatsApp; en Poofy, een swipe-to-do-app voor iPhone en Mac.',
    },
    eyebrow: 'Software',
    titleLine1: 'Software',
    titleAccent: '.',
    lead: 'Naast klantwerk bouwt en draait de studio eigen producten. Elk lost één probleem goed op.',
    openLabel: 'Bekijk',
    posterRailMiddle: 'Software · Gebouwd en gedraaid door de studio',
  },
  seeProduct: 'Bekijk het product',
  formDefaults: {
    nameLabel: 'Naam',
    namePlaceholder: 'Je naam',
    emailLabel: 'E-mail',
    emailPlaceholder: 'jij@bedrijf.nl',
    companyLabel: 'Bedrijf',
    companyOptional: 'optioneel',
    companyPlaceholder: 'Bedrijf of website',
  },
}
