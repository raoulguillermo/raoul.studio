// Nederlands — per-slug overrides of translatable project fields.
// Inherits slug/number/year/colors/titleLine1/titleLine2 from the English base.
// Toon: gewone spreektaal, geen jargon — te volgen zonder technische voorkennis.

export const projectOverrides = {
  outdoorxl: {
    shortTag: 'webshop, grote schaal',
    shortDescription:
      'Een webshop met ruim 200.000 producten, in 14 talen en landen. We bouwen hem nu opnieuw op, zodat hij een stuk sneller wordt.',
    lead:
      'Een webshop met 200.000 producten en 14 markten — en we bouwen hem opnieuw op terwijl hij gewoon doordraait.',
    tagsLine: 'E-commerce · Magento · Headless · Next.js · GraphQL',
    status: 'doorlopend',
    info: [
      { label: 'Rol', value: 'Hoofdontwikkelaar & architect' },
      { label: 'Stack', value: 'Magento, Varnish, PHP, MySQL → Next.js, MongoDB, Payload, GraphQL + REST' },
      { label: 'Bereik', value: '200.000+ producten · 14+ talen & sites' },
    ],
    body: [
      {
        text: 'OutdoorXL is groot: ruim 200.000 producten, in 14 talen en landen, en alles moet razendsnel op je scherm staan. Wij leiden de ontwikkeling en bepalen hoe het geheel in elkaar zit.',
      },
      {
        text: 'Nu bouwen we de voorkant helemaal opnieuw. De winkel die je ziet draait straks op nieuwe techniek, terwijl de oude motor met alle producten erin gewoon blijft draaien. Zelfgebouwde koppelstukken praten tussen die twee in.',
      },
      {
        text: 'Het doel: alle producten en landen houden, maar de oude ballast eruit. Een snellere winkel, en code waar we de komende tien jaar mee vooruit kunnen.',
      },
    ],
  },

  aboutspace: {
    shortTag: 'marktplaats, betalen',
    shortDescription:
      'Een marktplaats voor ruimtes: de één zet zijn zaal of studio erop, de ander huurt hem. Chatten, betalen en je geld beheren zit er allemaal in.',
    lead:
      'Een marktplaats voor creatieve en zakelijke ruimtes — aanbieden, verhuren, boeken en betalen op één plek.',
    tagsLine: 'Marktplaats · Next.js · Node.js · Stripe Connect · MongoDB',
    status: 'lancering',
    info: [
      { label: 'Rol', value: 'Bouw & concept' },
      { label: 'Stack', value: 'Next.js, Node.js REST API, MongoDB, Stripe' },
      { label: 'Status', value: 'Gaat nu live' },
    ],
    body: [
      {
        text: 'AboutSpace brengt mensen mét ruimte en mensen die ruimte zoeken bij elkaar. Heb je een zaal, studio of kantoor over? Zet hem erop. Zoek je er juist een? Boek hem. Gemaakt samen met projectleider Jette Schneider (Timewindow).',
      },
      {
        text: 'Het platform loopt niet in de weg. Je chat gewoon in de app, dus alle afspraken staan op één plek, en je betaalt elkaar rechtstreeks. Er zit een eigen portemonnee in, en abonnementen regelen de rest.',
      },
      {
        text: 'Vanaf de eerste dag gebouwd om allebei de kanten aan te kunnen: de verhuurders én de huurders. Gaat nu live.',
      },
    ],
  },

  threadly: {
    shortTag: 'saas, klantenservice',
    shortDescription:
      'Onze eigen tool voor klantenservice. Alle vragen komen binnen in één gedeelde inbox, je ziet wie wat oppakt, en niemand wordt vergeten.',
    lead:
      'Klantvragen die niet tussen wal en schip vallen — één gedeelde inbox voor teams, bureaus en zzp’ers.',
    tagsLine: 'SaaS · Support · Next.js · Node.js · MongoDB',
    status: 'live',
    info: [
      { label: 'Rol', value: 'Zelf bedacht en gebouwd' },
      { label: 'Stack', value: 'Next.js, MongoDB, Node.js REST API' },
      { label: 'Status', value: 'Live — ons eigen product' },
    ],
    body: [
      {
        text: 'Threadly is onze eigen tool: één plek waar alle vragen van klanten binnenkomen, gemaakt voor supportteams, bureaus en mensen die in hun eentje werken.',
      },
      {
        text: 'Alles komt samen in dezelfde inbox, of het nu via mail, chat of een formulier binnenkomt. Een klok houdt bij hoelang iemand op antwoord wacht, en het saaie herhaalwerk gaat vanzelf. Zo houd je tijd over voor de antwoorden die er echt toe doen.',
      },
      { text: 'Zelf bedacht, zelf gebouwd. En we gebruiken hem ook gewoon zelf.' },
    ],
  },

  lexpert: {
    shortTag: 'crm, advocaten',
    shortDescription:
      'Een systeem op maat voor een advocatenkantoor: alle cliënten op één plek, meteen een factuur eruit, en iedereen ziet alleen wat hij mag zien.',
    lead: 'Een systeem op maat voor een advocatenkantoor, gebouwd rond hoe zij echt werken.',
    tagsLine: 'CRM · Legal · Facturatie · Next.js · MongoDB',
    status: 'live',
    info: [
      { label: 'Rol', value: 'Zelf bedacht en gebouwd' },
      { label: 'Stack', value: 'Next.js, MongoDB, Node.js' },
      { label: 'Klant', value: 'Lexpert Advocaten' },
    ],
    body: [
      {
        text: 'Lexpert Advocaten wilde geen standaardprogramma waar ze zich in moesten wringen. Dus bouwden we er zelf een: alle cliënten en contacten bij elkaar, met één druk op de knop een factuur eruit, en in één oogopslag zien hoe het kantoor ervoor staat.',
      },
      {
        text: 'Iedereen heeft zijn eigen rol. Een advocaat ziet andere dingen dan iemand van de administratie, dus gevoelige informatie blijft bij de mensen die hem nodig hebben.',
      },
      {
        text: 'Eén nette tool met één duidelijk doel — precies wat kant-en-klare software nét niet kan zijn.',
      },
    ],
  },

  fndracer: {
    shortTag: 'ai, financiering',
    shortDescription:
      'Zoekt zelf op welke potjes met geld er voor een bedrijf zijn, kijkt welke passen, en schrijft de hele aanvraag alvast. In ongeveer vijf minuten.',
    lead: 'Van "welke financiering bestaat er eigenlijk?" naar een complete eerste aanvraag, in ongeveer vijf minuten.',
    tagsLine: 'AI · Financiering · Next.js · OpenAI · MongoDB',
    status: 'in aanbouw',
    info: [
      { label: 'Rol', value: 'Zelf bedacht en gebouwd' },
      { label: 'Stack', value: 'Next.js, MongoDB, OpenAI' },
      { label: 'Status', value: 'In aanbouw' },
    ],
    body: [
      {
        text: 'Financiering aanvragen is traag, rommelig en je maakt er zo een fout in. FndRacer haalt dat gedoe weg: hij verzamelt zelf waar geld te halen valt, zoekt uit wat bij het bedrijf past, en schrijft met AI de aanvraag.',
      },
      {
        text: 'Het hele rondje duurt zo’n vijf minuten. Je begint dus niet met een leeg vel, maar met een complete eerste versie die je alleen nog hoeft bij te schaven.',
      },
      { text: 'Nu in aanbouw.' },
    ],
  },

  'smart-dossier': {
    shortTag: 'ai, documenten',
    shortDescription:
      'Zoeken ín je documenten in plaats van alleen in de bestandsnamen. En een grote, rommelige stapel wordt vanzelf netjes op orde gezet.',
    lead:
      'Zoeken in wat er ín de documenten staat — en de hele stapel meteen laten opruimen.',
    tagsLine: 'AI · Documenten · Zoeken · Next.js · MongoDB',
    status: 'in aanbouw',
    info: [
      { label: 'Rol', value: 'Zelf bedacht en gebouwd' },
      { label: 'Stack', value: 'PHP/MySQL → Next.js, MongoDB, Node.js + AI' },
      { label: 'Klant', value: 'Vastgoedkor' },
    ],
    body: [
      {
        text: 'Smart Dossier begon in 2016 als een documentsysteem voor Vastgoedkor. In 2026 hebben we het omgebouwd tot iets veel slimmers.',
      },
      {
        text: 'Het leest de tekst ín elk document, dus je vindt een zin ook als je de bestandsnaam allang vergeten bent. En een grote, rommelige berg documenten wordt automatisch geordend tot iets waar je doorheen kunt lopen. De AI doet dat zware werk.',
      },
      {
        text: 'Een tool van tien jaar oud, opnieuw gebouwd voor hoe mensen nu met documenten werken. Nu in aanbouw.',
      },
    ],
  },

  aboutdesk: {
    shortTag: 'boeken, teams',
    shortDescription:
      'Een app om werkplekken te boeken. Een bedrijf tekent zijn gebouw en verdiepingen in, en teams pakken samen een paar bureaus in dezelfde ruimte.',
    lead: 'Werkplekken boeken waarbij je team bij elkaar zit, en niet verspreid door het gebouw.',
    tagsLine: 'Boeken · Teams · Next.js · Node.js · MongoDB',
    status: 'in aanbouw',
    info: [
      { label: 'Rol', value: 'Zelf bedacht en gebouwd' },
      { label: 'Stack', value: 'Next.js, MongoDB, Node.js' },
      { label: 'Status', value: 'In aanbouw' },
    ],
    body: [
      {
        text: 'AboutDesk gaat over teams, niet over losse stoelen. Een bedrijf tekent eerst het gebouw en de verdiepingen in. Daarna kiest een team een ruimte en claimt het de bureaus die het nodig heeft — zo zitten de mensen die samenwerken ook echt naast elkaar.',
      },
      {
        text: 'Makkelijk te beheren, makkelijk te gebruiken: ruimte kiezen, bureaus claimen, klaar. We bouwen het als los product.',
      },
      { text: 'Nu in aanbouw.' },
    ],
  },

  footsteppa: {
    shortTag: 'merk, media',
    shortDescription:
      'Ons eigen mediamerk en label — ruim 6.000 volgers, 5 artiesten, en het groeit door naar events, kleding en muziekuitgaves.',
    lead: 'Het bewijs dat we niet alleen software bouwen, maar ook een merk vanaf nul.',
    tagsLine: 'Merk · Media · Community',
    status: 'doorlopend',
    info: [
      { label: 'Rol', value: 'Eigenaar & oprichter' },
      { label: 'Bereik', value: '6.000+ volgers · 5 artiesten' },
      { label: 'Status', value: 'Doorlopend — eigen merk' },
    ],
    body: [
      {
        text: 'Footsteppa is het eigen mediamerk van onze oprichter, van nul opgebouwd tot een club van ruim 6.000 volgers rond vijf artiesten. De creatieve koers komt van Anoep Chowhari.',
      },
      {
        text: 'Het groeit ook buiten het scherm: events, kleding en merch, en een eigen platenlabel.',
      },
      {
        text: 'Het staat hier omdat het iets laat zien: hetzelfde gevoel dat goede software oplevert — goed bouwen en het rustig laten groeien — werkt net zo goed voor een merk.',
      },
    ],
  },

  'no-cms': {
    shortTag: 'websites, whatsapp',
    shortDescription:
      'Pas je website aan door een appje te sturen. Kleuren, teksten, de hele indeling — geen inlog, niks te leren.',
    lead:
      'Stuur een appje en je website verandert. "Maak de kop rood" of "zet die foto er anders op" — en het staat er meteen op. Alles wat een CMS doet, zonder het CMS.',
    tagsLine: 'Product · WhatsApp · Geen login · Direct aangepast',
    status: 'nieuw',
    info: [
      { label: 'Product', value: 'Je website aanpassen via WhatsApp' },
      { label: 'Hoe het werkt', value: 'App het alsof je het tegen een mens zegt · het staat er meteen op' },
      { label: 'Status', value: 'Nieuw — eerste gebruikers kunnen erin' },
    ],
    body: [
      {
        text: 'Bij No CMS is WhatsApp het enige knoppenpaneel dat je website nodig heeft. Een kleur veranderen, een kop herschrijven, een stuk omwisselen of de hele bladzijde omgooien? Stuur een berichtje en kijk hoe het gebeurt.',
      },
      {
        text: 'Het doet hetzelfde als een gewoon beheersysteem, maar dan makkelijker. Geen ingewikkeld scherm om te leren, geen wachtwoorden om kwijt te raken, niks om bij te werken. Appen kun je al — en meer heb je niet nodig.',
      },
      {
        text: 'Precies dat ene klusje waar bijna niemand zin in heeft, wordt zo makkelijk als een berichtje sturen. Nieuw, en de eerste gebruikers kunnen erin.',
      },
    ],
  },

  anonimise: {
    shortTag: 'privacy, offline ai',
    shortDescription:
      'Haalt namen, adressen, BSN’s en rekeningnummers uit een document. Draait helemaal op je eigen computer, dus er gaat niets het internet op. Daarna kun je de tekst veilig in ChatGPT plakken. Gemaakt met Lexpert Advocaten.',
    lead:
      'Maak een gevoelig document eerst anoniem, en plak het pas daarna in een online AI. De tool draait offline, dus er verlaat geen enkel dossier het kantoor.',
    tagsLine: 'Privacy · Offline AI · Presidio · spaCy · Legal-tech',
    status: 'live',
    info: [
      { label: 'Rol', value: 'Bouw & architectuur' },
      { label: 'Stack', value: 'Microsoft Presidio, offline spaCy NER, rule-based matching' },
      { label: 'Klant', value: 'Samen met Lexpert Advocaten' },
    ],
    body: [
      {
        text: 'Veel mensen willen AI gebruiken, maar je plakt natuurlijk geen dossier van een cliënt in ChatGPT. Anonimise draai je daarvóór: hij haalt de namen, adressen, BSN’s en rekeningnummers eruit, zodat wat overblijft wél veilig naar een online AI mag.',
      },
      {
        text: 'Alles gebeurt op je eigen computer. De AI erin is een klein programma dat namen herkent — geen chatbot, en nooit verbonden met internet. Daarnaast zitten er vaste regels in voor alles met een vast patroon, zoals een BSN of een rekeningnummer. Trek de internetkabel eruit en hij werkt precies hetzelfde; hij houdt zichzelf zelfs tegen als hij online zou kunnen.',
      },
      {
        text: 'Je krijgt een schone tekst terug waarin de namen vervangen zijn door neutrale woorden, plus een PDF of Word-bestand waarin de gevoelige stukken écht weg zijn — niet alleen met een zwarte streep eroverheen. Jij houdt het stuur: je loopt elke vondst na en voegt zelf woorden toe die ook weg moeten. En niets verlaat ooit je computer. Gemaakt met Lexpert Advocaten.',
      },
    ],
  },

  dfns: {
    shortTag: 'beurs, live',
    shortDescription:
      'Een scherm dat twee beursmarkten live volgt. Staan alle seinen tegelijk op groen, dan geeft het een signaal — en het houdt precies bij wat er daarna gebeurde.',
    lead:
      'Een live scherm dat een stroom beurskoersen omzet in duidelijke koop- en verkoopsignalen, op het moment dat ze er zijn.',
    tagsLine: 'Fintech · Realtime · WebSockets · Next.js · Node.js · MongoDB',
    status: 'live',
    info: [
      { label: 'Rol', value: 'Zelf bedacht en gebouwd' },
      { label: 'Stack', value: 'Next.js, Node.js, Express, MongoDB, WebSockets, SSE' },
      { label: 'Status', value: 'Live — ons eigen product' },
    ],
    body: [
      {
        text: 'DFNS volgt twee beursmarkten (NQ en ES) op de voet. Een vaste verbinding haalt elke prijsverandering binnen, het programma bundelt die per seconde, en pas als vier dingen tegelijk kloppen — de richting, de vaart, hoeveel er verhandeld wordt en hoe onrustig de markt is — zegt hij: hier zit iets.',
      },
      {
        text: 'Elk signaal wordt bijgehouden: waar je instapt, waar je eruit wilt met winst, en waar je stopt bij verlies. Zodra de prijs zo’n punt raakt, wordt dat vastgelegd. Zo ontstaat een blijvend logboek van wat het systeem zag en wanneer — geen screenshots achteraf.',
      },
      {
        text: 'Van voor tot achter zelf gebouwd: een server die alles bijhoudt, en een scherm dat de grafieken live meeschrijft. Let op: hij kijkt en noteert, hij koopt en verkoopt niets. Een eigen product van de studio, dat we echt gebruiken.',
      },
    ],
  },

  poofy: {
    shortTag: 'to-do-app, ios & mac',
    shortDescription:
      'Een snelle to-do-app voor iPhone en Mac. Swipe naar rechts en je taak is klaar, naar links en hij is weg, en slepen zet hem op een andere plek. Met lijstjes, een widget op je beginscherm en een app bovenin je Mac — overal precies hetzelfde.',
    lead:
      'Een to-do-app die je niet in de weg zit: swipen om af te vinken, swipen om weg te gooien, en je lijstjes gaan met je mee van je iPhone naar je Mac.',
    tagsLine: 'iOS · macOS · SwiftUI · Node.js · MongoDB · Google Sign-In',
    status: 'live',
    info: [
      { label: 'Rol', value: 'Zelf bedacht en gebouwd' },
      { label: 'Stack', value: 'SwiftUI (iOS + macOS), Node.js, Express, MongoDB' },
      { label: 'Status', value: 'Live — onze eigen app' },
    ],
    body: [
      {
        text: 'Poofy is een app voor je to-dolijst: opschrijven, afvinken, weggooien. Hij staat op je iPhone, met een widget op je beginscherm, en bovenin je Mac in de menubalk. Op allebei zie je precies dezelfde lijstjes.',
      },
      {
        text: 'Je bedient hem met je vinger in plaats van met knopjes. Swipe een taak naar rechts en hij is klaar. Naar links en hij is weg. Sleep hem omhoog of omlaag om te ordenen, of tik erop om hem aan te passen. Nieuwe taken komen bovenaan, en de lijst kleurt als een warmtekaart: hoe roder, hoe meer haast. Zo zie je in één oogopslag wat als eerste moet.',
      },
      {
        text: 'Je taken zitten in aparte lijstjes, zodat werk, thuis en je eigen projecten niet door elkaar gaan lopen. Alles wordt bij je eigen account bewaard, dus wat je op de bank op je telefoon opschrijft, staat klaar zodra je je Mac openklapt.',
      },
      {
        text: 'Een account maak je met je e-mailadres en een wachtwoord, of met Doorgaan met Google. Dat inloggen met Google doet niets anders dan jou herkennen: Poofy ziet je e-mailadres en je naam, en verder niets. Geen toegang tot je Gmail, je Drive, je agenda of je contacten, en je taken gaan nooit naar iemand anders. Wil je je account weg? Dan halen we hem weg, met alles wat erin staat.',
      },
      {
        text: 'Helemaal zelf gebouwd — dezelfde code voor de iPhone- en de Mac-app, met een eigen server erachter die alles bewaart en netjes gelijk houdt. De studio gebruikt hem elke dag zelf.',
      },
    ],
  },

  screensaver: {
    shortTag: 'screensaver, mac',
    shortDescription:
      'Een gratis screensaver voor je Mac. Blijf je er even vanaf, dan verandert je scherm in één grote klok — witte cijfers op zwart, met de seconden in een rood blokje.',
    lead: 'Laat je Mac even met rust en hij verandert in een reuzenklok.',
    tagsLine: 'macOS · Swift · Screensaver · Gratis download',
    status: 'live',
    download: {
      label: 'Download voor Mac',
      meta: 'ClockSaver.dmg · ongeveer 134 KB · gecontroleerd en goedgekeurd door Apple',
      steps:
        'Open het bestand dat je hebt gedownload, dubbelklik op ClockSaver.saver, klik op Install en kies daarna “Clock” bij Systeeminstellingen → Schermbeveiliging.',
    },
    info: [
      { label: 'Rol', value: 'Zelf bedacht en gebouwd' },
      { label: 'Gemaakt met', value: 'Swift, AppKit, ScreenSaverView, XcodeGen' },
      { label: 'Status', value: 'Live — gratis te downloaden' },
    ],
    body: [
      {
        text: 'Een screensaver is wat je Mac laat zien als je hem even niet gebruikt. De meeste laten foto’s of zwevende figuren zien. Deze laat de tijd zien, en verder niets.',
      },
      {
        text: 'Je scherm wordt zwart en de klok neemt hem helemaal over: uren, minuten en seconden in enorme witte letters, in Anton — hetzelfde stevige lettertype als de grote koppen op deze site. De seconden staan in een rood blokje, alsof je dat stukje met je muis hebt geselecteerd. De cijfers rekken zich uit tot ze precies op je scherm passen, van een kleine laptop tot een groot beeldscherm, met altijd een nette rand eromheen.',
      },
      {
        text: 'Hij tekent het beeld ook alleen opnieuw als de tijd echt verandert: één keer per seconde, in plaats van zestig keer per seconde zoals de meeste bewegende dingen. Zo staat hij rustig te wachten en vreet hij bijna geen batterij.',
      },
      {
        text: 'Hij is geschreven in Swift, de taal waarin Apple zijn eigen apps maakt, en het lettertype zit ín het bestand zelf. Daardoor ziet hij er op elke Mac goed uit, ook op eentje waar dat lettertype nooit is geïnstalleerd.',
      },
      {
        text: 'Het lastige is hem überhaupt op de Mac van iemand anders krijgen. macOS vertrouwt bestanden van internet niet en zet er normaal gesproken een waarschuwing voor. Daarom hebben we één scriptje geschreven dat het hele klusje in één keer doet: de screensaver bouwen, hem ondertekenen met onze Apple-ontwikkelaarssleutel, hem in een schijfbestand stoppen, hem naar Apple sturen om te laten controleren — dat heet notariseren — en Apple’s goedkeuring daarna aan het bestand vastnieten. Omdat die goedkeuring er echt aan vastzit en niet online opgezocht hoeft te worden, ziet je Mac hem zelfs als je wifi uitstaat.',
      },
      {
        text: 'Wat eruit komt, is de download op deze pagina. Openen, dubbelklikken, installeren, klaar — geen waarschuwingen, geen instellingen die je achteraf moet goedzetten. Gratis, en ongeveer zo groot als één foto.',
      },
    ],
  },

  'voice-agent': {
    shortTag: 'spraak-AI, telefonisch bestellen',
    shortDescription:
      'Een AI die de telefoon van een restaurant opneemt, in een gewoon gesprek een afhaalbestelling noteert en die meteen in het bestelsysteem van de keuken zet — en die ook aan andere systemen of een CRM te koppelen is.',
    lead:
      'Je belt het restaurant, zegt wat je wilt eten, en een AI noteert je bestelling — en zet hem meteen in het systeem van de keuken.',
    tagsLine: 'Voice AI · Claude · ElevenLabs · Twilio · Node.js · REST API',
    status: 'lancering',
    info: [
      { label: 'Rol', value: 'Bedacht en gebouwd' },
      { label: 'Stack', value: 'Claude, ElevenLabs, Twilio, Node.js, Express, MongoDB' },
      { label: 'Status', value: 'Lancering — de eerste restaurantlijn' },
    ],
    body: [
      {
        text: 'Restaurants missen elke avond bestellingen, simpelweg omdat niemand de telefoon kan opnemen als de keuken vol staat. Deze assistent neemt wél op: een klant belt het gewone nummer van het restaurant, zegt wat hij wil, en een AI noteert de bestelling.',
      },
      {
        text: 'Hij werkt met de echte kaart, openingstijden en afhaaltijden van het restaurant, opgehaald terwijl het gesprek loopt. Zo biedt hij alleen aan wat er echt is, met de juiste maten, extra’s en prijzen, en kiest hij het vroegste moment waarop de bestelling klaar kan zijn. Hij spreekt Nederlands en schakelt over op Engels als de beller dat doet.',
      },
      {
        text: 'Voordat er iets wordt doorgezet, leest hij de bestelling terug: de gerechten, de naam, het totaal en wanneer het klaarstaat. Pas na een duidelijk ja gaat de bestelling erdoor — en dat controleert het systeem, niet de AI. Daarna komt hij binnen in het eigen bestelsysteem van het restaurant, net als een webshopbestelling. De assistent kan alleen nieuwe afhaalbestellingen plaatsen; wijzigen, annuleren of terugbetalen kan hij niet.',
      },
      {
        text: 'Het verstaan en de stem komen van een gespecialiseerd spraakplatform, het denkwerk van Claude op onze eigen server. Onder de restaurantlijn zit een algemene assistent die via een API aan bijna elk systeem te koppelen is — en omdat de studio die systemen ook zelf bouwt, van CRM’s tot boekingsplatforms en webshops, kan hij er direct op worden aangesloten. Overal waar de telefoon elke dag met dezelfde vragen gaat, kan een assistent opnemen.',
      },
    ],
  },
}
