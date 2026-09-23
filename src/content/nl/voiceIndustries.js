// Voice AI per branche — one landing page each, at /voice-ai/<slug>.
// Slugs and aliases live in ../products.js (voiceIndustryRegistry); this file
// holds only the words. Pricing, AVG, the demo number and the form are shared
// with the main Voice AI page.

export const voiceIndustryUi = {
  eyebrow: 'Voice AI',
  painsLabel: 'Herkenbaar?',
  doesLabel: 'Wat de assistent doet',
  callLabel: 'Zo klinkt een gesprek',
  caller: 'Beller',
  assistant: 'Assistent',
  faqLabel: 'Vragen uit jouw branche',
  otherLabel: 'Ook voor',
  backLabel: 'Voice AI',
}

export const voiceIndustries = {
  dentist: {
    name: 'Tandartsen',
    meta: {
      title: 'AI-telefoonassistent voor tandartsen — Voice AI',
      description:
        'Mis geen patiënt meer tijdens een behandeling. Een AI-assistent neemt de praktijklijn op, plant afspraken in je agenda en verwijst spoed door — AVG-proof, met verwerkersovereenkomst.',
    },
    title: 'Gemiste oproep tijdens een behandeling = gemiste patiënt.',
    lead: 'Je assistente staat aan de stoel, de telefoon gaat. De AI neemt op, plant de afspraak in je agenda en zet spoed direct door naar een mens.',
    pains: [
      { title: 'Bellen tijdens behandelingen', body: 'Niemand kan opnemen met handschoenen aan. De patiënt krijgt de voicemail en belt de volgende praktijk.' },
      { title: 'Dezelfde vragen, elke dag', body: 'Openingstijden, parkeren, “neemt u nog nieuwe patiënten aan?”. Tijd die je assistente liever aan de stoel besteedt.' },
      { title: 'Afzeggingen die blijven liggen', body: 'Een afzegging om 7:45 wordt pas om 9:00 gezien. Dat gat in de agenda had iemand anders kunnen vullen.' },
    ],
    does: [
      { title: 'Afspraken plannen', body: 'Controle, gebitsreiniging of een nieuwe patiënt: hij kijkt in je agenda en boekt alleen wat echt vrij is.' },
      { title: 'Verzetten en afzeggen', body: 'Patiënten verzetten of annuleren zelf, ook ’s avonds. Het vrijgekomen tijdslot staat meteen weer open.' },
      { title: 'Spoed herkennen', body: 'Pijn, een ongeluk, zwelling: hij verbindt direct door met de praktijk of noemt het spoednummer buiten openingstijden.' },
      { title: 'Geen medische details', body: 'Hij vraagt niet naar klachten en geeft geen medisch advies. Hij plant de afspraak; het gesprek over de klacht blijft bij jou.' },
    ],
    call: [
      { who: 'caller', text: 'Hoi, ik wil graag een controle-afspraak maken.' },
      { who: 'assistant', text: 'Dat kan. Bent u al patiënt bij ons? Dan zoek ik u even op via uw geboortedatum.' },
      { who: 'caller', text: 'Ja, 14 maart 1986.' },
      { who: 'assistant', text: 'Gevonden. Ik heb dinsdag om 10:30 of donderdag om 14:00. Wat past beter?' },
      { who: 'caller', text: 'Donderdag.' },
      { who: 'assistant', text: 'Donderdag om 14:00 bij de tandarts, klopt dat? Dan zet ik hem vast en krijgt u een bevestiging.' },
    ],
    faq: [
      { q: 'Koppelt hij met mijn praktijksoftware?', a: 'Als je agenda een koppeling heeft, gebruikt hij die. Zo niet, dan kijken we samen naar een alternatief, bijvoorbeeld een aparte agenda die je team gebruikt voor telefonische afspraken.' },
      { q: 'Wat als iemand pijn heeft?', a: 'Je bepaalt zelf wat spoed is. Hij verbindt dan direct door met de praktijk, of noemt buiten openingstijden het spoednummer dat jij opgeeft.' },
      { q: 'Kan hij nieuwe patiënten inschrijven?', a: 'Ja, als je dat wilt. Hij noteert naam, geboortedatum en contactgegevens en plant een eerste afspraak, of zet de aanvraag op een wachtlijst.' },
    ],
  },

  clinic: {
    name: 'Klinieken & praktijken',
    meta: {
      title: 'AI-telefoonassistent voor klinieken en praktijken — Voice AI',
      description:
        'Voor fysio’s, huidklinieken, dierenartsen en andere praktijken: een AI-assistent die de telefoon opneemt, afspraken inplant en doorverbindt als het nodig is.',
    },
    title: 'De wachtrij aan de telefoon is je wachtkamer.',
    lead: 'Fysio, huidkliniek, dierenarts of psycholoog: de assistent neemt elk gesprek op, plant afspraken in en laat je team doen waar het voor is opgeleid.',
    pains: [
      { title: 'De lijn staat roodgloeiend', body: 'Om 8:00 belt iedereen tegelijk. Wie in de wacht staat, hangt op of belt terug op het slechtste moment.' },
      { title: 'Balie en behandeling tegelijk', body: 'In kleine praktijken neemt de behandelaar zelf op. Elk telefoontje onderbreekt een patiënt.' },
      { title: 'No-shows', body: 'Wie niet makkelijk kan verzetten, komt gewoon niet. Een leeg uur dat je niet meer vult.' },
    ],
    does: [
      { title: 'Afspraken plannen', body: 'Intake, vervolgafspraak of een specifieke behandelaar: hij boekt in je agenda wat echt vrij is.' },
      { title: 'Verzetten zonder wachttijd', body: 'Patiënten verzetten zelf, dag en nacht. Minder no-shows, een vollere agenda.' },
      { title: 'Praktische vragen', body: 'Vergoedingen, verwijsbrief nodig, adres en parkeren: antwoorden uit jouw eigen informatie.' },
      { title: 'Doorverbinden', body: 'Twijfel, spoed of iets persoonlijks? Hij verbindt door met je team of laat een terugbelverzoek achter.' },
    ],
    call: [
      { who: 'caller', text: 'Ik moet mijn afspraak van morgen verzetten.' },
      { who: 'assistant', text: 'Geen probleem. Mag ik uw naam en geboortedatum?' },
      { who: 'caller', text: 'Sanne de Vries, 2 juni 1990.' },
      { who: 'assistant', text: 'Ik zie uw afspraak morgen om 9:00 bij Mark. Vrijdag om 11:15 kan ook bij hem. Zal ik hem daarheen verzetten?' },
      { who: 'caller', text: 'Ja, graag.' },
      { who: 'assistant', text: 'Staat erin: vrijdag 11:15 bij Mark. Het tijdslot van morgen geef ik vrij.' },
    ],
    faq: [
      { q: 'Werkt het met meerdere behandelaars?', a: 'Ja. Hij kent je team en hun agenda’s, en boekt bij een vaste behandelaar als de patiënt daarom vraagt.' },
      { q: 'Slaat hij medische informatie op?', a: 'Nee, dat stellen we zo in. Hij vraagt alleen wat nodig is om de afspraak te maken en geeft geen medisch advies.' },
      { q: 'Kan hij terugbelverzoeken aannemen?', a: 'Ja. Hij noteert wie er belde en waarover, en zet het in je inbox of systeem zodat je team kan terugbellen.' },
    ],
  },

  restaurant: {
    name: 'Restaurants',
    meta: {
      title: 'AI-telefoonassistent voor restaurants — Voice AI',
      description:
        'Neem elke bestelling en reservering aan, ook in de avondspits. Een AI-assistent die je menu kent en bestellingen direct in je kassasysteem zet.',
    },
    title: 'In de spits gaat de telefoon. En niemand neemt op.',
    lead: 'De keuken draait vol, de bediening loopt. De assistent neemt afhaalbestellingen en reserveringen aan uit je echte menu en zet ze direct in je systeem.',
    pains: [
      { title: 'Gemiste bestellingen', body: 'Tussen 17:30 en 19:30 gaat de telefoon het vaakst, precies wanneer niemand tijd heeft. Elke gemiste oproep is een gemiste bestelling.' },
      { title: 'Fouten in de drukte', body: 'Een bestelling half verstaan, een allergie vergeten. Achteraf kost dat meer dan de bestelling opleverde.' },
      { title: 'Personeel aan de telefoon', body: 'Iemand van de vloer staat aan de lijn in plaats van bij de gasten.' },
    ],
    does: [
      { title: 'Bestellingen opnemen', body: 'Afhalen of bezorgen, met formaten, extra’s en prijzen uit je echte menu. Direct in je kassa- of bestelsysteem.' },
      { title: 'Reserveren', body: 'Kijkt of er plek is, noteert het aantal personen en bevestigt de tijd.' },
      { title: 'Allergieën noteren', body: 'Hij vraagt ernaar en zet het duidelijk bij de bestelling, zodat de keuken het ziet.' },
      { title: 'Binnen de lijntjes', body: 'Hij plaatst alleen nieuwe bestellingen. Wijzigen, annuleren of terugbetalen blijft bij jou.' },
    ],
    call: [
      { who: 'caller', text: 'Ik wil graag bestellen om af te halen.' },
      { who: 'assistant', text: 'Leuk! Wat mag het zijn?' },
      { who: 'caller', text: 'Twee margherita’s en een tiramisu.' },
      { who: 'assistant', text: 'Twee margherita’s en een tiramisu, samen € 31,50. Heeft iemand een allergie?' },
      { who: 'caller', text: 'Nee, en ik kom om zes uur.' },
      { who: 'assistant', text: 'Klaar om 18:00 op naam van Jansen. Klopt dat? Dan zet ik hem door naar de keuken.' },
    ],
    faq: [
      { q: 'Kent hij ons menu?', a: 'Ja, hij leest je menu uit je eigen systeem, met prijzen, formaten en wat er op is. Pas je het menu aan, dan weet hij dat meteen.' },
      { q: 'Wat als het te druk is om bestellingen aan te nemen?', a: 'Je kunt een maximum per tijdslot instellen. Is het vol, dan biedt hij een later tijdstip aan.' },
      { q: 'Kan hij betalingen afhandelen?', a: 'Aan de telefoon neemt hij geen betaalgegevens aan. De klant betaalt bij het afhalen, of via een betaallink als je dat wilt.' },
    ],
  },

  salon: {
    name: 'Kappers & salons',
    meta: {
      title: 'AI-telefoonassistent voor kappers en salons — Voice AI',
      description:
        'Nooit meer met een schaar in je hand de telefoon opnemen. Een AI-assistent die afspraken plant bij de juiste stylist, ook ’s avonds.',
    },
    title: 'Schaar in de ene hand. Telefoon in de andere?',
    lead: 'Je staat midden in een knipbeurt als er gebeld wordt. De assistent neemt op, kiest samen met de klant een tijd en zet de afspraak in je agenda.',
    pains: [
      { title: 'Onderbroken behandelingen', body: 'Elke keer dat je opneemt, staat je klant in de stoel te wachten.' },
      { title: 'Voicemails die niemand terugbelt', body: 'Aan het eind van de dag zijn er vijf voicemails. Twee klanten hebben al ergens anders geboekt.' },
      { title: 'Boeken na sluitingstijd', body: 'Veel mensen bellen ’s avonds, als de salon dicht is.' },
    ],
    does: [
      { title: 'Afspraken bij de juiste stylist', body: 'Knippen, kleuren of een behandeling: hij weet hoe lang het duurt en wie het doet.' },
      { title: 'Verzetten en annuleren', body: 'Klanten regelen het zelf, ook buiten openingstijden.' },
      { title: 'Prijzen en behandelingen', body: 'Wat kost balayage, hoe lang duurt een permanent: antwoorden uit je eigen prijslijst.' },
      { title: 'Bevestiging', body: 'Na het gesprek krijgt de klant een bevestiging, zodat minder mensen hun afspraak vergeten.' },
    ],
    call: [
      { who: 'caller', text: 'Kan ik zaterdag terecht om te knippen?' },
      { who: 'assistant', text: 'Zaterdag heeft Lisa om 11:00 plek, en Omar om 14:30. Heeft u een voorkeur?' },
      { who: 'caller', text: 'Lisa, om elf uur.' },
      { who: 'assistant', text: 'Knippen bij Lisa, zaterdag 11:00. Op welke naam mag ik hem zetten?' },
      { who: 'caller', text: 'Fatima.' },
      { who: 'assistant', text: 'Staat erin, Fatima. U krijgt nog een bevestiging.' },
    ],
    faq: [
      { q: 'Werkt het met mijn boekingssysteem?', a: 'Heeft je boekingssysteem een koppeling, dan boekt hij daar direct in. Zo niet, dan zoeken we samen een oplossing.' },
      { q: 'Weet hij hoe lang een behandeling duurt?', a: 'Ja. Je geeft per behandeling de duur op, en hij plant alleen tijden waarin het ook echt past.' },
      { q: 'Kan ik zelf nog opnemen?', a: 'Zeker. Je kiest wanneer hij opneemt: altijd, alleen buiten openingstijden, of alleen als jij niet binnen een paar keer overgaan opneemt.' },
    ],
  },

  garage: {
    name: 'Garages',
    meta: {
      title: 'AI-telefoonassistent voor garages — Voice AI',
      description:
        'Onder de auto en toch bereikbaar. Een AI-assistent die APK- en onderhoudsafspraken plant en vertelt of een auto klaar is.',
    },
    title: 'Onder de auto kun je niet opnemen.',
    lead: 'Je monteurs staan in de werkplaats. De assistent plant APK en onderhoud in, en vertelt klanten of hun auto al klaar is.',
    pains: [
      { title: 'Vieze handen, rinkelende telefoon', body: 'Opnemen betekent handen wassen en je werk laten liggen. Of niet opnemen.' },
      { title: '“Is mijn auto al klaar?”', body: 'De vraag die de hele dag terugkomt. Elke keer even zoeken, even kijken, even terugbellen.' },
      { title: 'Werkplaatsplanning', body: 'Afspraken via de telefoon, een briefje en de agenda raken snel uit elkaar.' },
    ],
    does: [
      { title: 'APK en onderhoud plannen', body: 'Kenteken, soort beurt, gewenste dag: hij plant in wat in je werkplaats past.' },
      { title: 'Status doorgeven', body: 'Hij kijkt in je systeem of de auto klaar is en vertelt het de klant.' },
      { title: 'Storingen noteren', body: 'Klachten over de auto noteert hij in de woorden van de klant, zodat je monteur weet waar hij op moet letten.' },
      { title: 'Doorverbinden', body: 'Vragen over een offerte of reparatie? Hij verbindt door of laat een terugbelverzoek achter.' },
    ],
    call: [
      { who: 'caller', text: 'Mijn APK verloopt volgende maand, kan ik een afspraak maken?' },
      { who: 'assistant', text: 'Zeker. Wat is uw kenteken?' },
      { who: 'caller', text: 'K-123-AB.' },
      { who: 'assistant', text: 'Een Volkswagen Golf, klopt dat? Ik heb woensdag de 8e om 8:30 of maandag de 13e om 13:00.' },
      { who: 'caller', text: 'Woensdag.' },
      { who: 'assistant', text: 'APK op woensdag de 8e om 8:30. U kunt de auto brengen vanaf 8:00. Tot dan!' },
    ],
    faq: [
      { q: 'Koppelt hij met mijn garagesysteem?', a: 'Heeft je systeem een koppeling, dan plant hij daar direct in en leest hij de status van een auto uit. Anders zoeken we samen een oplossing.' },
      { q: 'Kan hij prijzen noemen?', a: 'Vaste prijzen, zoals een APK of een kleine beurt, noemt hij uit je eigen prijslijst. Voor reparaties laat hij een terugbelverzoek achter.' },
      { q: 'Wat als iemand pech heeft?', a: 'Je bepaalt wat er dan gebeurt: direct doorverbinden, of het nummer van je pechhulp noemen.' },
    ],
  },

  'law-firm': {
    name: 'Advocatenkantoren',
    meta: {
      title: 'AI-telefoonassistent voor advocatenkantoren — Voice AI',
      description:
        'Een professioneel eerste contact voor elke beller. Een AI-assistent die nieuwe zaken aanneemt, afspraken plant en doorverbindt met de juiste advocaat.',
    },
    title: 'Elke gemiste beller is een zaak voor een ander kantoor.',
    lead: 'Mensen met een juridisch probleem bellen het eerste kantoor dat opneemt. De assistent neemt op, noteert de kern en plant een intakegesprek.',
    pains: [
      { title: 'Advocaten in zitting of overleg', body: 'Het secretariaat is druk, de advocaten zijn onbereikbaar. De nieuwe cliënt belt verder.' },
      { title: 'Intakes die veel tijd kosten', body: 'Uitzoeken of een zaak bij je kantoor past, kost een advocaat tijd die hij niet kan declareren.' },
      { title: 'Na kantoortijd', body: 'Een ontslag, een dagvaarding: mensen bellen als het hen overkomt, niet als jullie open zijn.' },
    ],
    does: [
      { title: 'Nieuwe zaken aannemen', body: 'Hij vraagt naar het rechtsgebied en de kern van de zaak, en zet dat overzichtelijk in je systeem.' },
      { title: 'Intakes inplannen', body: 'Bij de advocaat die het rechtsgebied behandelt, in de agenda die al gebruikt wordt.' },
      { title: 'Bestaande cliënten doorverbinden', body: 'Hij herkent lopende zaken en verbindt door of laat een bericht achter voor de juiste advocaat.' },
      { title: 'Vertrouwelijk', body: 'Hij geeft geen juridisch advies en vraagt alleen wat nodig is voor de intake.' },
    ],
    call: [
      { who: 'caller', text: 'Ik ben vandaag ontslagen en wil weten wat ik kan doen.' },
      { who: 'assistant', text: 'Vervelend om te horen. Ik plan graag een gesprek met een van onze arbeidsrechtadvocaten. Mag ik uw naam?' },
      { who: 'caller', text: 'Peter Bakker.' },
      { who: 'assistant', text: 'Mr. De Jong heeft morgen om 10:00 tijd voor een eerste gesprek. Past dat?' },
      { who: 'caller', text: 'Ja.' },
      { who: 'assistant', text: 'Staat erin. U krijgt een bevestiging per e-mail met wat u kunt meenemen.' },
    ],
    faq: [
      { q: 'Geeft hij juridisch advies?', a: 'Nee. Hij neemt de kern van de vraag op en plant een gesprek. Het advies komt van jouw advocaten.' },
      { q: 'Hoe zit het met vertrouwelijkheid?', a: 'We tekenen een verwerkersovereenkomst, en samen leggen we vast wat er wordt opgeslagen, waar en hoe lang.' },
      { q: 'Kan hij een conflictcheck doen?', a: 'Hij noteert namen van de wederpartij, zodat je kantoor de check kan doen voordat het intakegesprek plaatsvindt.' },
    ],
  },

  rental: {
    name: 'Verhuurbedrijven',
    meta: {
      title: 'AI-telefoonassistent voor verhuurbedrijven — Voice AI',
      description:
        'Beschikbaarheid, prijzen en reserveringen aan de telefoon, dag en nacht. Voor verhuur van auto’s, busjes, gereedschap, fietsen en meer.',
    },
    title: '“Is hij dit weekend nog vrij?” Honderd keer per week.',
    lead: 'Busjes, gereedschap, fietsen of partytenten: de assistent kijkt in je systeem wat vrij is, noemt de prijs en legt de reservering vast.',
    pains: [
      { title: 'Dezelfde vraag, steeds weer', body: 'Beschikbaarheid en prijs. Elke keer opzoeken, elke keer uitleggen.' },
      { title: 'Balie én telefoon', body: 'Terwijl je iemand helpt met ophalen, belt de volgende klant.' },
      { title: 'Weekendpieken', body: 'Op vrijdag belt iedereen tegelijk voor het weekend.' },
    ],
    does: [
      { title: 'Beschikbaarheid checken', body: 'Hij kijkt in je systeem wat er vrij is op de gevraagde dagen.' },
      { title: 'Prijzen noemen', body: 'Per dag, per weekend, met borg: uit je eigen tarieven.' },
      { title: 'Reserveren', body: 'Legt de reservering vast met naam, dagen en ophaaltijd.' },
      { title: 'Voorwaarden uitleggen', body: 'Rijbewijs, borg, kilometers: antwoorden uit jouw voorwaarden.' },
    ],
    call: [
      { who: 'caller', text: 'Hebben jullie dit weekend nog een bus vrij?' },
      { who: 'assistant', text: 'Van vrijdag tot en met zondag heb ik nog een bestelbus van 12 kuub. Dat is € 195 voor het weekend, inclusief 300 kilometer.' },
      { who: 'caller', text: 'Die wil ik. Ophalen vrijdag om vier uur.' },
      { who: 'assistant', text: 'Mag ik uw naam en telefoonnummer?' },
      { who: 'caller', text: 'Kevin Smit, 06 12 34 56 78.' },
      { who: 'assistant', text: 'Staat erin: bus van 12 kuub, vrijdag 16:00 tot zondag. Neem uw rijbewijs mee; de borg is € 250.' },
    ],
    faq: [
      { q: 'Koppelt hij met mijn verhuursysteem?', a: 'Heeft je systeem een koppeling, dan checkt en reserveert hij daar direct. Anders zoeken we samen een oplossing.' },
      { q: 'Kan hij een borg innen?', a: 'Aan de telefoon neemt hij geen betaalgegevens aan. Je kunt wel een betaallink laten sturen na de reservering.' },
      { q: 'Wat als iets niet vrij is?', a: 'Dan biedt hij een alternatief aan: een andere dag, of iets vergelijkbaars dat wel vrij is.' },
    ],
  },
}
