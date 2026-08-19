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
      'Elk project is een echt bedrijfsprobleem, end-to-end opgelost en gebouwd om in productie te draaien. De platforms en tools die de studio voor klanten heeft geleverd — en de eigen producten die er worden gebouwd en gerund.',
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
        text: 'raoul.studio is een digital agency en product studio in Rotterdam die ambitieuze bedrijven helpt om ideeën te vertalen naar schaalbare digitale producten. In de studio worden strategie, branding, software-engineering, AI, automatisering en infrastructuur samengebracht tot oplossingen die blijvende zakelijke waarde leveren.',
      },
      {
        text: 'De studio werkt samen met founders, start-ups en gevestigde bedrijven om maatwerkplatforms, AI-gedreven tools, commerce-oplossingen en digitale ervaringen te ontwerpen, te bouwen en door te ontwikkelen. Elk project wordt aangepakt met een productmindset: echte zakelijke uitdagingen oplossen, intuïtieve gebruikerservaringen maken en technologie bouwen die met het bedrijf meegroeit.',
      },
      {
        text: 'Als studio wordt er gebouwd aan langdurige partnerschappen met teams die snel willen schakelen, groot durven denken en betekenisvolle digitale producten willen maken. Van het eerste idee tot de lancering — en elke iteratie die daarop volgt — werkt de studio als verlengstuk van je team, gericht op meetbare impact via technologie.',
        highlight: 'Als studio wordt er gebouwd aan langdurige partnerschappen',
      },
    ],
    servicesLabel: 'Wat de studio bouwt',
    services: [
      { label: 'Maatwerk webplatforms & SaaS' },
      { label: 'Headless e-commerce op schaal' },
      { label: 'AI-tools & automatisering' },
      { label: 'CRMs & interne tooling' },
      { label: 'APIs & systeemarchitectuur' },
      { label: 'Tweezijdige marktplaatsen' },
    ],
    systemsParagraph: [
      'In de studio worden digitale producten gebouwd die zijn gemaakt om te evolueren. Elk platform staat op een stevig technisch fundament — met schaalbare architectuur, doordachte engineering en oog voor toekomstige groei. Of het nu gaat om een AI-gedreven platform, een commerce-ecosysteem of een maatwerk-bedrijfsapplicatie: er wordt technologie gemaakt die meegroeit met je bedrijf.',
      'Van de eerste strategiesessie tot lang na de lancering ligt de focus op digitale oplossingen die robuust en schaalbaar zijn en gemaakt om te blijven.',
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
      'Zes fasen, één principe: begrijp het systeem voor je het bouwt. De studio werkt snel omdat het denkwerk vooraf gedaan is, niet omdat het wordt overgeslagen. Maatwerkproducten, stap voor stap gevormd.',
    steps: [
      {
        title: 'Richting',
        lead: 'Bepalen wat er eigenlijk gebouwd wordt.',
        body: [
          {
            text: 'De studio begint bij het probleem, niet bij de featurelijst. Wat hapert, wat is traag, wat kost je geld — en hoe "klaar" eruitziet.',
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
            text: 'Voor er ook maar één scherm is, worden de data, de flows en de architectuur in kaart gebracht. Maatwerkproducten staan of vallen met wat eronder ligt.',
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
            text: 'Er wordt ontworpen rond de echte workflow — de dagelijkse handelingen, de randgevallen, de mensen die het straks echt gebruiken.',
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
            text: 'De studio bouwt in de openheid met je mee — je ziet voortgang zodra die landt, niet in één grote onthulling op het eind.',
          },
        ],
      },
      {
        title: 'Itereren',
        lead: 'Breng het voor echt gebruik.',
        body: [
          {
            text: 'Echte gebruikers leggen bloot wat specs niet kunnen. Er wordt geleverd, gekeken en aangescherpt — snelle loops, kleine releases.',
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
            text: 'De studio blijft betrokken. Het meeste werk is langlopend, en wat er gebouwd wordt, wordt behandeld alsof het van de studio zelf is.',
          },
        ],
      },
    ],
    howWeWork: {
      label: 'Hoe de studio werkt',
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
          a: 'raoul.studio is een digital product studio. De studio ontwerpt, bouwt en laat maatwerkproducten groeien — webplatforms en SaaS, headless e-commerce, AI-tools en automatisering, CRMs en interne tooling, APIs en tweezijdige marktplaatsen — voor fintech, advocatenkantoren, commerciële bureaus en e-commerceteams, naast eigen producten.',
        },
        {
          q: 'Hoe werken jullie?',
          a: 'Elk project doorloopt zes fasen: Richting, Structuur, Ontwerp, Bouw, Itereren en Schalen. Het principe is om het systeem te begrijpen voor je het bouwt — het denkwerk is vooraf gedaan, zodat de bouw snel gaat zonder stappen over te slaan.',
        },
        {
          q: 'Hoe lang duurt een project?',
          a: 'Dat hangt af van de scope, maar de studio werkt in snelle loops met kleine, frequente releases in plaats van één grote onthulling op het eind. Je ziet voortgang zodra die landt en het product wordt elke cyclus scherper, omdat de architectuur en richting al vaststaan voor de bouw begint.',
        },
        {
          q: 'Met wie werken jullie?',
          a: 'Vooral fintech, advocatenkantoren, commerciële bureaus en e-commerceteams. Sommig werk is voor klanten, sommig zijn eigen producten — alles is gebouwd om in productie te draaien.',
        },
        {
          q: 'Bieden jullie ondersteuning na de lancering?',
          a: 'Ja. Het meeste werk is langlopend: systemen zijn gebouwd om met je mee te groeien — meer gebruikers, data, talen en features — en de studio blijft betrokken in plaats van over te dragen en te verdwijnen.',
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
        'Hoe raoul.studio met persoonsgegevens omgaat op de website en in de Poofy-app: wat we verzamelen, waarom, wie het verwerkt, hoe lang we het bewaren en jouw rechten onder de AVG.',
    },
    eyebrow: 'Juridisch',
    titleLine1: 'Privacy',
    titleAccent: '.',
    updated: 'Laatst bijgewerkt — augustus 2026',
    intro:
      'Dit beleid legt uit welke persoonsgegevens raoul.studio verzamelt, waarom we ze verzamelen en welke rechten je erover hebt. Het geldt voor deze website en voor de apps die de studio draait, waaronder de Poofy-takenapp voor iPhone en Mac. We houden de gegevensverzameling tot het minimum dat nodig is om de studio te draaien, de mensen die contact opnemen te beantwoorden en je taken gesynchroniseerd te houden.',
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
        heading: 'Poofy — de iPhone- en Mac-app',
        body: [
          'Poofy is de eigen takenapp van de studio voor iPhone en Mac. Er is een account nodig zodat je lijsten met je meegaan van het ene apparaat naar het andere, en dat account is de enige reden dat de app iets over je bewaart.',
        ],
        points: [
          'Account: je e-mailadres en — als je je met een wachtwoord registreert — een gehashte versie van dat wachtwoord. Het wachtwoord zelf wordt nooit opgeslagen en kan niet worden teruggelezen.',
          'Doorgaan met Google: als je met Google inlogt, ontvangen we je e-mailadres, je basisprofielgegevens en je Google-account-ID. We gebruiken die voor één ding — je account aanmaken en je de volgende keer herkennen.',
          'Doorgaan met Apple: als je met Apple inlogt, ontvangen we een vaste identificatie van je Apple-account en je e-mailadres — een privérelay-adres als je voor “Verberg mijn e-mailadres” koos. Apple stuurt het e-mailadres alleen de eerste keer dat je de app toestemming geeft; daarna herkennen we je aan die identificatie.',
          'Jouw inhoud: de lijsten en taken die je schrijft, of een taak af is, en de volgorde waarin je ze zet.',
        ],
      },
      {
        heading: 'Hoe Poofy Google-gegevens gebruikt',
        body: [
          'Inloggen met Google wordt puur aangeboden als manier om je account te identificeren. Poofy vraagt Google alleen om je e-mailadres en basisprofiel. De app vraagt geen toegang tot Gmail, Drive, Agenda, Contacten, Foto’s of enige andere Google-dienst, en kan niets in je Google-account lezen, schrijven of verwijderen.',
          'Het gebruik door Poofy van informatie die via Google API’s wordt ontvangen, voldoet aan het Google API Services User Data Policy, inclusief de Limited Use-vereisten. Informatie van Google wordt uitsluitend gebruikt om de inlogfunctie te bieden. Ze wordt nooit verkocht, nooit gebruikt voor advertenties of profilering, nooit doorgegeven aan derden behalve waar dat nodig is om de dienst te leveren of waar de wet dat vereist, en nooit gebruikt om AI-modellen te trainen.',
          'Je taken zijn van jou. We lezen ze niet voor enig ander doel dan ze op te slaan en aan jou terug te geven, we delen ze niet, en we gebruiken ze niet voor advertenties of om modellen te trainen.',
        ],
      },
      {
        heading: 'Je Poofy-account verwijderen',
        body: [
          'Je kunt je account en alles erin in de app zelf verwijderen: open het ⋯-menu, kies “Delete account” en bevestig. Het account, de lijsten en de taken zijn dan meteen weg, en dat is niet terug te draaien.',
          'Je kunt je account en alles erin op elk moment laten verwijderen door te mailen naar hello@raoul.studio vanaf het adres van het account. We verwijderen het account, de lijsten en de taken. Inloggen met Google kun je ook op elk moment loskoppelen via de beveiligingsinstellingen van je Google-account, en Inloggen met Apple via “Inloggen met Apple” in je Apple ID-instellingen; daarmee stopt verder inloggen — mail ons daarnaast als je wilt dat de gegevens zelf worden verwijderd.',
          'We bewaren accountgegevens zolang het account bestaat, en niet langer.',
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
          'Google (Google Ireland Limited) — alleen als je in Poofy voor “Doorgaan met Google” kiest. Google verzorgt het inloggen en geeft ons je e-mailadres en basisprofiel door. Wat er aan Google’s kant gebeurt, valt onder het privacybeleid van Google zelf.',
          'Apple (Apple Distribution International Ltd.) — alleen als je in Poofy voor “Inloggen met Apple” kiest. Apple verzorgt het inloggen en geeft ons een identificatie van je Apple-account en een e-mailadres door, dat een privérelay-adres van Apple kan zijn. Wat er aan Apple’s kant gebeurt, valt onder het privacybeleid van Apple zelf.',
          'DigitalOcean — levert de servers en de managed database in Amsterdam waar de website en alle Poofy-accounts, -lijsten en -taken worden opgeslagen.',
          'Onze eigen servers — de website en de Poofy-API draaien op infrastructuur die we zelf beheren, en contactinzendingen worden daar in onze database opgeslagen.',
        ],
      },
      {
        heading: 'Waar je gegevens staan',
        body: [
          'Websitegegevens en Poofy-accounts, -lijsten en -taken worden in de EU opgeslagen, op servers en een managed database in Amsterdam. Verbindingen met de site en met de Poofy-API zijn versleuteld, en de toegang tot de database is beperkt.',
        ],
      },
      {
        heading: 'Internationale doorgifte',
        body: [
          'SendGrid (Twilio) is een Amerikaans bedrijf, dus het versturen van een contact-e-mail kan inhouden dat je gegevens buiten de EU worden doorgegeven. DigitalOcean heeft eveneens zijn hoofdkantoor in de VS, al staan de servers met jouw gegevens in Amsterdam. Waar doorgifte buiten de EU plaatsvindt, is dit gedekt door passende waarborgen zoals de modelcontractbepalingen van de Europese Commissie. Google en Apple verzorgen het inloggen in Poofy via hun Ierse entiteiten; doorgifte aan hun kant valt onder hun eigen beleid en waarborgen.',
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
  terms: {
    slug: 'terms',
    meta: {
      title: 'Algemene voorwaarden',
      description:
        'De voorwaarden waaronder raoul.studio met klanten werkt en zijn eigen apps draait: scope, betaling, intellectueel eigendom, accounts, toegestaan gebruik, aansprakelijkheid en meer — in gewone taal, naar Nederlands recht.',
    },
    eyebrow: 'Juridisch',
    titleLine1: 'Voorwaarden',
    titleAccent: '.',
    updated: 'Laatst bijgewerkt — augustus 2026',
    intro:
      'Deze voorwaarden beschrijven hoe raoul.studio met klanten werkt — wat we leveren, hoe we werken en wie waarvoor verantwoordelijk is — en hoe je de apps mag gebruiken die de studio zelf draait, zoals Poofy. We hebben ze in gewone taal geschreven: ze zijn bedoeld om eerlijk te zijn, en om gelezen te worden.',
    sections: [
      {
        heading: 'Inleiding',
        body: [
          'Deze algemene voorwaarden ("Voorwaarden") gelden voor alle diensten, offertes, voorstellen, abonnementen, opdrachten en overeenkomsten tussen raoul.studio ("de Studio", "wij", "ons") en haar klanten ("de Klant", "jij"). Ze zijn van toepassing tenzij we schriftelijk iets anders zijn overeengekomen.',
          'raoul.studio is een digitale productstudio in Nederland, gerund door Raoul Guillermo. Je bereikt ons op hello@raoul.studio. Door een Voorstel te accepteren, een Overeenkomst te ondertekenen of ons opdracht te geven te beginnen, ga je akkoord met deze Voorwaarden.',
          'Deze Voorwaarden bestaan uit twee delen. Het meeste hieronder gaat over opdrachten voor klanten. De secties onder “De eigen apps van de studio gebruiken”, verderop, gelden in plaats daarvan als je een app gebruikt die de Studio voor eigen rekening draait — op dit moment Poofy, de todo-app voor iPhone en Mac. Je hoeft geen Klant te zijn om die apps te gebruiken.',
        ],
      },
      {
        heading: 'Definities',
        body: ['In deze Voorwaarden betekenen de volgende woorden het volgende:'],
        points: [
          'Studio — raoul.studio, de aanbieder van de diensten.',
          'Klant — de natuurlijke persoon of rechtspersoon die een Overeenkomst met de Studio aangaat.',
          'Project — het werk dat de Studio afspreekt uit te voeren, zoals beschreven in een Voorstel of Overeenkomst.',
          'Deliverables — de ontwerpen, software, code, documentatie, content of andere materialen die de Studio oplevert.',
          'Voorstel — elke offerte, raming, opdrachtomschrijving of aanbieding van de Studio.',
          'Overeenkomst — het geaccepteerde Voorstel samen met deze Voorwaarden en eventuele schriftelijke afspraken tussen partijen.',
          'Intellectueel eigendom — alle rechten op software, ontwerpen, teksten, methodes en knowhow, waaronder auteursrecht, databankrechten, merkrechten en bedrijfsgeheimen.',
          'Vertrouwelijke informatie — niet-openbare informatie die de ene partij aan de andere verstrekt en die als vertrouwelijk is aangemerkt of redelijkerwijs als vertrouwelijk moet worden opgevat.',
          'Diensten van derden — producten of diensten van andere partijen dan de Studio, zoals hosting, cloud, betalingen, AI of API-aanbieders.',
          'AI-diensten — diensten die gebruikmaken van kunstmatige intelligentie, machine learning of het automatisch genereren van content, code, tekst of beslissingen.',
        ],
      },
      {
        heading: 'Toepasselijkheid',
        body: [
          'Deze Voorwaarden gelden voor elk Voorstel, elke Overeenkomst en elk Project, en voor vervolg- of meerwerk, tenzij uitdrukkelijk schriftelijk anders is afgesproken.',
          'Deze Voorwaarden gaan voor op inkoop- of andere algemene voorwaarden van de Klant. De toepasselijkheid van de voorwaarden van de Klant wordt uitdrukkelijk van de hand gewezen, tenzij wij die schriftelijk hebben aanvaard.',
          'Is een bepaling van deze Voorwaarden ongeldig of niet afdwingbaar, dan blijven de overige bepalingen volledig van kracht en wordt de ongeldige bepaling vervangen door een geldige bepaling die de strekking ervan zo dicht mogelijk benadert.',
        ],
      },
      {
        heading: 'Offertes & voorstellen',
        body: ['Tenzij anders vermeld:'],
        points: [
          'Voorstellen zijn vrijblijvend en binden de Studio pas als beide partijen ze hebben aanvaard.',
          'Een Voorstel is 30 dagen geldig vanaf de datum ervan; daarna kan het worden herzien of ingetrokken.',
          'Prijzen kunnen vóór aanvaarding van een Voorstel wijzigen — bijvoorbeeld door wijzigingen in de scope, kosten van derden of belastingen.',
          'Alle prijzen zijn exclusief btw en kosten van derden, tenzij anders vermeld.',
          'Kennelijke vergissingen en schrijffouten in een Voorstel binden de Studio niet.',
        ],
      },
      {
        heading: 'Scope van het project',
        body: [
          'De Studio voert het werk uit dat in het aanvaarde Voorstel staat beschreven. Alles wat daarin niet uitdrukkelijk is opgenomen, valt buiten de scope.',
          'Werk buiten de scope — waaronder extra functies, integraties of eisen — kan extra budget, een herziene planning of een apart Voorstel vergen voordat het wordt uitgevoerd.',
        ],
      },
      {
        heading: 'Wijzigingsverzoeken',
        body: [
          'Vraagt de Klant om extra functies, revisies, nieuwe eisen of andere prioriteiten, dan beoordeelt de Studio de gevolgen voor scope, planning en prijs.',
          'Wijzigingen worden pas uitgevoerd na akkoord. De Studio mag planning en tarieven aanpassen aan een wijziging en is niet verplicht met gewijzigd werk te beginnen voordat overeenstemming is bereikt.',
        ],
      },
      {
        heading: 'Verantwoordelijkheden van de klant',
        body: [
          'Een Project staat of valt met de medewerking van de Klant. De Klant zorgt ervoor dat het volgende tijdig en volledig beschikbaar is. Vertraging door de Klant verlengt de planning navenant, en de Studio is niet aansprakelijk voor de daaruit voortvloeiende vertraging of kosten:',
        ],
        points: [
          'juiste en volledige informatie;',
          'content, assets, merkmaterialen en toegangsgegevens;',
          'tijdige feedback, goedkeuringen en beslissingen;',
          'een of meer bevoegde beslissers;',
          'het testen en beoordelen van Deliverables wanneer daarom wordt gevraagd.',
        ],
      },
      {
        heading: 'Levering',
        body: [
          'Data of planningen die de Studio noemt zijn indicatief en geen harde deadlines, tenzij uitdrukkelijk schriftelijk een fatale termijn is afgesproken.',
          'Redelijke vertraging levert geen tekortkoming op. Wordt vertraging veroorzaakt door de Klant of door Diensten van derden, dan schuift de afgesproken planning navenant op.',
        ],
      },
      {
        heading: 'Acceptatie',
        body: ['Tenzij anders afgesproken:'],
        points: [
          'Deliverables gelden als aanvaard als de Klant niet binnen tien (10) werkdagen na levering schriftelijk onderbouwde gebreken meldt.',
          'Kleine gebreken die het gebruik niet wezenlijk in de weg staan, rechtvaardigen geen afkeuring en worden in het normale werkproces opgelost.',
          'Het in gebruik nemen van een Deliverable, of het gebruik ervan in productie, geldt als aanvaarding.',
        ],
      },
      {
        heading: 'Betalingsvoorwaarden',
        body: ['Tenzij in het Voorstel anders is afgesproken:'],
        points: [
          'De Studio kan een aanbetaling verlangen voordat het werk begint, en kan factureren per mijlpaal of periodiek (retainer of abonnement).',
          'Facturen zijn betaalbaar binnen veertien (14) dagen na factuurdatum.',
          'Alle bedragen zijn exclusief btw, die waar van toepassing in rekening wordt gebracht.',
          'Wordt een factuur niet op tijd betaald, dan is de Klant zonder nadere ingebrekestelling in verzuim en is vanaf de vervaldatum de wettelijke (handels)rente naar Nederlands recht verschuldigd.',
          'De Klant is alle redelijke gerechtelijke en buitengerechtelijke incassokosten verschuldigd die worden gemaakt om achterstallige bedragen te innen.',
          'De Studio mag werk, hosting, onderhoud en support opschorten zolang facturen openstaan.',
        ],
      },
      {
        heading: 'Opschorting',
        body: [
          'Komt de Klant een betalings- of andere wezenlijke verplichting niet na, dan mag de Studio haar diensten opschorten — waaronder ontwikkeling, hosting, onderhoud en support — totdat de Klant aan zijn verplichtingen heeft voldaan.',
          'Opschorting ontslaat de Klant niet van zijn betalingsverplichtingen, en de Studio is niet aansprakelijk voor schade door een rechtmatige opschorting.',
        ],
      },
      {
        heading: 'Intellectueel eigendom',
        body: [
          'Na volledige betaling van alle voor een Project verschuldigde bedragen verkrijgt de Klant de eigendom van, of de uitdrukkelijk overeengekomen licentie op, de op maat gemaakte Deliverables. Tot volledige betaling blijven alle rechten bij de Studio.',
          'De Studio behoudt alle intellectuele eigendomsrechten op alles wat geen op maat gemaakte Deliverable is, waaronder maar niet beperkt tot haar methodieken, interne frameworks, herbruikbare code, libraries, SDK’s, templates, architectuur, AI-workflows, automatiseringsframeworks, ontwikkeltools, knowhow, concepten en bestaande software.',
          'Worden zulke behouden materialen in een Deliverable verwerkt, dan krijgt de Klant een niet-exclusieve, niet-overdraagbare licentie om ze als onderdeel van die Deliverable te gebruiken, maar verkrijgt daarop geen eigendom.',
          'Het staat de Studio vrij de algemene kennis, vaardigheden, technieken en ervaring die zij tijdens een Project opdoet, voor andere klanten en doeleinden te gebruiken.',
        ],
      },
      {
        heading: 'Opensourcesoftware',
        body: [
          'Deliverables kunnen opensourcesoftware bevatten, die onder haar eigen licentievoorwaarden wordt geleverd. Die licenties bepalen hoe de Klant de opensourcecomponenten mag gebruiken, en de Studio geeft daarop geen garantie of vrijwaring die verder gaat dan wat die licenties bieden.',
        ],
      },
      {
        heading: 'Diensten van derden',
        body: [
          'Projecten leunen vaak op Diensten van derden zoals hosting, cloudaanbieders, betaaldienstverleners, AI-aanbieders, API’s en CMS-platformen. Daarop gelden hun eigen voorwaarden, die de Klant waar relevant aanvaardt.',
          'Voor zover de wet dat toestaat is de Studio niet aansprakelijk voor, en geeft zij geen garantie op, Diensten van derden, waaronder:',
        ],
        points: [
          'storingen, downtime of verminderde prestaties;',
          'prijswijzigingen of beëindigde diensten;',
          'wijzigingen in voorwaarden, beleid of API’s;',
          'beveiligingsincidenten, dataverlies of datalekken.',
        ],
      },
      {
        heading: 'AI-diensten',
        body: [
          'AI-diensten zijn gebaseerd op probabilistische en statistische modellen. Hun output wordt automatisch gegenereerd en is inherent onzeker.',
          'Output van AI-diensten kan onjuistheden bevatten, verzonnen ("gehallucineerde") informatie, onvolledige of verouderde informatie, of resultaten die ongeschikt zijn voor een bepaald doel.',
          'De Klant blijft volledig verantwoordelijk voor het controleren, valideren en goedkeuren van AI-output voordat hij erop vertrouwt of die in productie gebruikt, en voor het naleven van toepasselijke wetgeving daarbij.',
          'De Studio levert AI-diensten op basis van een inspanningsverplichting en garandeert niets over de juistheid, volledigheid, feitelijke correctheid, wettelijke naleving, geschiktheid voor een doel of bedrijfsresultaten van AI-output.',
        ],
      },
      {
        heading: 'Beveiliging',
        body: [
          'De Studio treft commercieel redelijke technische en organisatorische maatregelen om de systemen en gegevens die zij verwerkt te beschermen.',
          'Geen enkel digitaal systeem, stuk software of onlinedienst is echter gegarandeerd volledig veilig. Voor zover de wet dat toestaat garandeert de Studio niets over, en is zij niet aansprakelijk voor, beveiligingsincidenten buiten haar redelijke invloedssfeer — waaronder cyberaanvallen, zerodaykwetsbaarheden, phishing, malware, cloud- of hostingstoringen en internet- of netwerkuitval.',
        ],
      },
      {
        heading: 'Geheimhouding',
        body: [
          'Elke partij houdt de Vertrouwelijke informatie van de ander geheim, gebruikt die alleen voor het Project en beschermt die met redelijke zorg.',
          'Dit geldt niet voor informatie die zonder schending openbaar is of wordt, die een partij al rechtmatig had, of die op grond van wet, regelgeving of rechterlijk bevel moet worden verstrekt — in welk geval de verstrekkende partij, waar dat mag, vooraf bericht geeft.',
        ],
      },
      {
        heading: 'Privacy',
        body: [
          'De Studio verwerkt persoonsgegevens volgens haar privacybeleid, dat op deze website staat.',
          'De Klant is en blijft verantwoordelijk voor de persoonsgegevens die hij aanlevert of via de Deliverables verwerkt, waaronder een geldige grondslag voor die verwerking. Verwerkt de Studio persoonsgegevens namens de Klant, dan sluiten partijen waar vereist een aparte verwerkersovereenkomst.',
        ],
      },
      {
        heading: 'Onderhoud & support',
        body: ['Onderhoud en support worden alleen geleverd als dat uitdrukkelijk is afgesproken. Tenzij anders afgesproken:'],
        points: [
          'Inbegrepen: het oplossen van bugs ten opzichte van de afgesproken specificatie, monitoring en het onderhoud dat in de Overeenkomst staat.',
          'Uitgesloten: nieuwe functies, redesigns, nieuwe integraties en advies of werk buiten de Overeenkomst — die worden apart geoffreerd.',
        ],
      },
      {
        heading: 'Garanties',
        body: [
          'De Studio verricht haar diensten met redelijke vakkundigheid en zorg, en Deliverables voldoen bij levering wezenlijk aan de afgesproken specificatie. Dit is de enige garantie die de Klant krijgt.',
          'Voor zover de wet dat toestaat geeft de Studio geen andere garanties en garandeert zij niet dat software ononderbroken of foutloos werkt, dat die compatibel blijft met toekomstige systemen of wijzigingen van derden, of dat die een bepaald commercieel resultaat oplevert.',
        ],
      },
      {
        heading: 'Beperking van aansprakelijkheid',
        body: [
          'Voor zover de wet dat maximaal toestaat is de totale aansprakelijkheid van de Studio uit of in verband met een Project beperkt tot het bedrag dat de Klant voor dat specifieke Project heeft betaald in de twaalf (12) maanden vóór de gebeurtenis die tot de aansprakelijkheid leidt.',
          'De Studio is niet aansprakelijk voor indirecte schade of gevolgschade, waaronder gederfde winst, gemiste omzet, gemiste business of kansen, reputatieschade, verlies of beschadiging van gegevens, downtime of bedrijfsstilstand.',
          'Aansprakelijkheid van de Studio ontstaat alleen als de Klant het verzuim schriftelijk meldt, een redelijke termijn geeft om het te herstellen, en de Studio alsnog niet nakomt — tenzij herstel blijvend onmogelijk is.',
          'Niets in deze Voorwaarden sluit aansprakelijkheid uit of beperkt die, waar dat naar Nederlands recht niet is toegestaan, waaronder aansprakelijkheid voor opzet of bewuste roekeloosheid van de leiding van de Studio.',
        ],
      },
      {
        heading: 'Vrijwaring',
        body: [
          'De Klant vrijwaart de Studio en houdt haar schadeloos tegen alle aanspraken van derden, schade, kosten en uitgaven (waaronder redelijke juridische kosten) die voortvloeien uit of samenhangen met:',
        ],
        points: [
          'content, materialen of instructies die de Klant aanlevert;',
          'inbreuk op intellectuele eigendomsrechten of andere rechten van derden door materialen van de Klant;',
          'onrechtmatige, inbreukmakende of onjuiste instructies;',
          'misbruik van de Deliverables, of ander gebruik dan bedoeld;',
          'onwettige activiteiten van de Klant of schending van toepasselijke wetgeving.',
        ],
      },
      {
        heading: 'Overmacht',
        body: [
          'De Studio is niet aansprakelijk voor niet-nakoming of vertraging door omstandigheden buiten haar redelijke invloedssfeer (overmacht), waaronder natuurrampen, extreem weer, pandemieën en epidemieën, stakingen, oorlog of onrust, overheidsmaatregelen, internet- of telecomstoringen, storingen bij cloud-, hosting- of andere leveranciers, uitval bij AI-aanbieders en cyberaanvallen.',
          'Tijdens overmacht zijn de verplichtingen van partijen opgeschort. Duurt de situatie langer dan zestig (60) dagen, dan mag elke partij de Overeenkomst voor het getroffen deel schriftelijk beëindigen, zonder aansprakelijkheid, terwijl reeds verricht werk verschuldigd blijft.',
        ],
      },
      {
        heading: 'Beëindiging',
        body: [
          'Elke partij mag een Overeenkomst opzeggen met een redelijke schriftelijke opzegtermijn, met inachtneming van een eventueel afgesproken minimumduur bij retainers of abonnementen.',
          'Elke partij mag met onmiddellijke ingang beëindigen als de ander wezenlijk tekortschiet en dat niet binnen een redelijke termijn na schriftelijke aanmaning herstelt, of bij faillissement, surseance van betaling of insolventie van de ander.',
          'Bij beëindiging betaalt de Klant al het verrichte werk en de aangegane kosten tot de einddatum. Bepalingen die naar hun aard moeten voortduren — waaronder intellectueel eigendom, geheimhouding, aansprakelijkheid en toepasselijk recht — blijven gelden.',
        ],
      },
      {
        heading: 'Portfoliorechten',
        body: [
          'Tenzij uitdrukkelijk schriftelijk anders afgesproken, mag de Studio de Klant noemen en afgerond, openbaar uitgebracht werk tonen — waaronder schermafbeeldingen, beschrijvingen en de naam en het logo van de Klant — in haar portfolio, op haar website en in marketingmateriaal, met inachtneming van Vertrouwelijke informatie.',
        ],
      },
      {
        heading: 'Geen overname van personeel',
        body: [
          'Tijdens een Project en gedurende twaalf (12) maanden na afronding neemt de Klant geen medewerker, opdrachtnemer of freelancer van de Studio die bij het Project betrokken was direct of indirect in dienst of onder de arm, zonder voorafgaande schriftelijke toestemming van de Studio.',
        ],
      },
      {
        heading: 'De eigen apps van de studio gebruiken',
        body: [
          'Naast klantwerk draait de Studio haar eigen apps — op dit moment Poofy, een todo-app voor iPhone en Mac. Deze sectie en de secties die erop volgen gelden voor jou als gebruiker van die apps, of je nu ook Klant bent of niet. Waar ze afwijken van de klantgerichte secties hierboven, gaan deze secties voor op jouw gebruik van de apps.',
          'Poofy is gratis en voor persoonlijk gebruik. Je hebt er een account voor nodig, en door er een aan te maken accepteer je deze Voorwaarden. Hoe de apps met je persoonsgegevens omgaan, staat in ons privacybeleid.',
        ],
      },
      {
        heading: 'Je app-account',
        body: [
          'Je moet een bindende overeenkomst kunnen aangaan om een account te maken. Ben je jonger dan de leeftijd waarop je in jouw land zelf toestemming mag geven voor onlinediensten, vraag dan eerst een ouder of voogd.',
        ],
        points: [
          'Gebruik een e-mailadres waar je echt over beschikt, en houd het actueel.',
          'Houd je wachtwoord — of het Google- of Apple-account waarmee je inlogt — veilig. Wat er via jouw account gebeurt, is jouw verantwoordelijkheid.',
          'Een account is voor één persoon. Deel je inloggegevens niet en laat niemand anders je account gebruiken.',
          'Mail hello@raoul.studio als je denkt dat iemand anders toegang tot je account heeft gekregen.',
        ],
      },
      {
        heading: 'Toegestaan gebruik van de apps',
        body: ['Bij het gebruik van de apps ga je ermee akkoord dat je niet:'],
        points: [
          'de wet overtreedt of onrechtmatige content opslaat;',
          'probeert bij het account, de gegevens of de content van een andere gebruiker te komen;',
          'de apps of hun API onderzoekt, scant, overbelast of verstoort, of ingestelde limieten omzeilt;',
          'de dienst reverse-engineert of kopieert, behalve waar de wet dat uitdrukkelijk toestaat;',
          'de apps gebruikt om spam of malware te versturen of om geautomatiseerd bulkverkeer te genereren.',
        ],
      },
      {
        heading: 'Jouw content in de apps',
        body: [
          'Je lijsten en taken zijn van jou. Je behoudt alle rechten die je erop hebt, en de Studio claimt er geen eigendom op.',
          'Je geeft de Studio alleen de toestemming die nodig is om de dienst te draaien: je content opslaan en die naar je eigen apparaten sturen en daar tonen. Verder niets. We gebruiken je content niet voor advertenties en niet om AI-modellen te trainen.',
          'Je bent zelf verantwoordelijk voor wat je in de apps zet. Bewaar een eigen kopie van alles wat je niet kunt missen — de apps zijn een takenlijst, geen back-updienst.',
        ],
      },
      {
        heading: 'Beschikbaarheid van de apps',
        body: [
          'De apps worden geleverd "as is" en "as available", zonder enige garantie. De Studio belooft geen bepaalde beschikbaarheid en mag functies op elk moment wijzigen, opschorten of intrekken.',
          'Besluit de Studio een app helemaal te stoppen, dan geeft zij dat redelijke tijd van tevoren per e-mail door op het adres van je account, met een redelijke gelegenheid om je content op te halen, tenzij de omstandigheden dat echt onmogelijk maken.',
        ],
      },
      {
        heading: 'Opschorting en stoppen met de apps',
        body: [
          'Je kunt op elk moment stoppen met een app, en je account en alles erin verwijderen via het ⋯-menu in de app of door te mailen naar hello@raoul.studio vanaf het adres van het account. Verwijderen is definitief en niet terug te draaien.',
          'De Studio mag een account opschorten of sluiten dat deze Voorwaarden schendt, onrechtmatig wordt gebruikt of de dienst of andere gebruikers in gevaar brengt. Waar dat redelijk is, vertellen we waarom en krijg je eerst de kans het recht te zetten.',
        ],
      },
      {
        heading: 'Aansprakelijkheid voor de apps',
        body: [
          'De apps zijn gratis software voor persoonlijk gebruik. Voor zover de wet dat toestaat is de Studio niet aansprakelijk voor verloren of beschadigde content, downtime, ongeoorloofde toegang of indirecte schade of gevolgschade door je gebruik van — of het niet kunnen gebruiken van — de apps.',
          'Niets in deze sectie beperkt aansprakelijkheid die wettelijk niet kan worden uitgesloten, waaronder aansprakelijkheid voor opzet of grove schuld, noch de dwingende rechten die je als consument hebt.',
        ],
      },
      {
        heading: 'Toepasselijk recht & geschillen',
        body: [
          'Op deze Voorwaarden en elke Overeenkomst is uitsluitend Nederlands recht van toepassing. De toepasselijkheid van het Weens Koopverdrag (CISG) is uitgesloten.',
          'Geschillen die niet in onderling overleg worden opgelost, worden uitsluitend voorgelegd aan de bevoegde rechter van de Rechtbank Rotterdam, Nederland, tenzij dwingend recht anders bepaalt.',
          'Gebruik je de apps als consument, dan doet dit geen afbreuk aan de bescherming van het dwingende consumentenrecht van je woonland of aan je recht om een procedure te starten bij de rechter daar.',
        ],
      },
      {
        heading: 'Taal van deze voorwaarden',
        body: [
          'Deze Voorwaarden zijn in meerdere talen beschikbaar. De Engelse versie is de bindende tekst; wijkt een vertaling daarvan af, dan gaat de Engelse tekst voor.',
        ],
      },
      {
        heading: 'Wijzigingen in deze voorwaarden',
        body: [
          'De Studio kan deze Voorwaarden van tijd tot tijd bijwerken. De versie die gold bij de start van een Project geldt voor dat Project. Werken we deze Voorwaarden bij, dan werken we de datum boven aan deze pagina bij.',
        ],
      },
    ],
    directLabel: 'Vragen over deze voorwaarden',
    directEmail: 'hello@raoul.studio',
    posterRailMiddle: 'Voorwaarden · Juridisch',
  },
}
