// Voice AI nach Branche — je eine Landingpage unter /voice-ai/<slug>.
// Slugs und Aliase stehen in ../products.js (voiceIndustryRegistry); diese Datei
// enthält nur die Texte. Preise, DSGVO, die Demo-Nummer und das Formular teilen
// sich die Seiten mit der Voice-AI-Hauptseite.

export const voiceIndustryUi = {
  eyebrow: 'Voice AI',
  painsLabel: 'Kommt Ihnen das bekannt vor?',
  doesLabel: 'Was der Assistent übernimmt',
  callLabel: 'So klingt ein Gespräch',
  caller: 'Anrufer',
  assistant: 'Assistent',
  faqLabel: 'Fragen aus Ihrer Branche',
  otherLabel: 'Auch für',
  backLabel: 'Voice AI',
}

export const voiceIndustries = {
  dentist: {
    name: 'Zahnarztpraxen',
    meta: {
      title: 'KI-Telefonassistent für Zahnarztpraxen — Voice AI',
      description:
        'Verpassen Sie keinen Patienten mehr während einer Behandlung. Ein KI-Assistent nimmt die Praxisleitung an, trägt Termine in Ihren Kalender ein und leitet Notfälle weiter — DSGVO-konform, mit Auftragsverarbeitungsvertrag.',
    },
    title: 'Verpasster Anruf während der Behandlung = verpasster Patient.',
    lead: 'Ihre Assistenz steht am Stuhl, das Telefon klingelt. Die KI nimmt ab, trägt den Termin in Ihren Kalender ein und stellt Notfälle sofort zu einem Menschen durch.',
    pains: [
      { title: 'Anrufe während der Behandlung', body: 'Mit Handschuhen kann niemand abnehmen. Der Patient landet auf der Mailbox und ruft die nächste Praxis an.' },
      { title: 'Jeden Tag dieselben Fragen', body: 'Öffnungszeiten, Parken, „Nehmen Sie noch neue Patienten auf?“. Zeit, die Ihre Assistenz lieber am Stuhl verbringt.' },
      { title: 'Absagen, die liegen bleiben', body: 'Eine Absage um 7:45 Uhr wird erst um 9:00 Uhr gesehen. Diese Lücke im Kalender hätte jemand anderes füllen können.' },
    ],
    does: [
      { title: 'Termine vereinbaren', body: 'Kontrolle, Prophylaxe oder ein neuer Patient: Er schaut in Ihren Kalender und bucht nur, was wirklich frei ist.' },
      { title: 'Verschieben und absagen', body: 'Patienten verschieben oder stornieren selbst, auch abends. Der frei gewordene Termin ist sofort wieder buchbar.' },
      { title: 'Notfälle erkennen', body: 'Schmerzen, ein Unfall, eine Schwellung: Er verbindet direkt mit der Praxis oder nennt außerhalb der Sprechzeiten die Notdienstnummer.' },
      { title: 'Keine medizinischen Details', body: 'Er fragt nicht nach Beschwerden und gibt keinen medizinischen Rat. Er vereinbart den Termin; das Gespräch über die Beschwerden bleibt bei Ihnen.' },
    ],
    call: [
      { who: 'caller', text: 'Hallo, ich hätte gern einen Termin zur Kontrolle.' },
      { who: 'assistant', text: 'Gern. Sind Sie bereits Patient bei uns? Dann suche ich Sie kurz über Ihr Geburtsdatum heraus.' },
      { who: 'caller', text: 'Ja, 14. März 1986.' },
      { who: 'assistant', text: 'Ich habe Sie gefunden. Ich hätte Dienstag um 10:30 Uhr oder Donnerstag um 14:00 Uhr. Was passt Ihnen besser?' },
      { who: 'caller', text: 'Donnerstag.' },
      { who: 'assistant', text: 'Donnerstag um 14:00 Uhr beim Zahnarzt, richtig? Dann trage ich den Termin fest ein, und Sie bekommen eine Bestätigung.' },
    ],
    faq: [
      { q: 'Lässt er sich mit meiner Praxissoftware verbinden?', a: 'Wenn Ihr Kalender eine Schnittstelle hat, nutzt er diese. Wenn nicht, suchen wir gemeinsam eine Alternative, zum Beispiel einen eigenen Kalender, den Ihr Team für telefonische Termine verwendet.' },
      { q: 'Was, wenn jemand Schmerzen hat?', a: 'Sie legen selbst fest, was ein Notfall ist. Dann verbindet er direkt mit der Praxis oder nennt außerhalb der Sprechzeiten die Notdienstnummer, die Sie hinterlegen.' },
      { q: 'Kann er neue Patienten aufnehmen?', a: 'Ja, wenn Sie das möchten. Er notiert Name, Geburtsdatum und Kontaktdaten und vereinbart einen ersten Termin oder setzt die Anfrage auf eine Warteliste.' },
    ],
  },

  clinic: {
    name: 'Kliniken & Praxen',
    meta: {
      title: 'KI-Telefonassistent für Kliniken und Praxen — Voice AI',
      description:
        'Für Physiotherapie, Hautkliniken, Tierarztpraxen und andere Praxen: ein KI-Assistent, der das Telefon annimmt, Termine vereinbart und weiterverbindet, wenn es nötig ist.',
    },
    title: 'Die Warteschleife am Telefon ist Ihr Wartezimmer.',
    lead: 'Physiotherapie, Hautklinik, Tierarzt oder Psychotherapie: Der Assistent nimmt jedes Gespräch an, vereinbart Termine und lässt Ihr Team das tun, wofür es ausgebildet ist.',
    pains: [
      { title: 'Die Leitung glüht', body: 'Um 8:00 Uhr rufen alle gleichzeitig an. Wer in der Warteschleife hängt, legt auf oder ruft im ungünstigsten Moment zurück.' },
      { title: 'Empfang und Behandlung zugleich', body: 'In kleinen Praxen nimmt die Therapeutin selbst ab. Jeder Anruf unterbricht einen Patienten.' },
      { title: 'Nicht erschienene Patienten', body: 'Wer nicht einfach verschieben kann, kommt schlicht nicht. Eine leere Stunde, die Sie nicht mehr füllen.' },
    ],
    does: [
      { title: 'Termine vereinbaren', body: 'Erstgespräch, Folgetermin oder eine bestimmte Behandlerin: Er bucht in Ihrem Kalender, was wirklich frei ist.' },
      { title: 'Verschieben ohne Wartezeit', body: 'Patienten verschieben selbst, Tag und Nacht. Weniger Ausfälle, ein vollerer Kalender.' },
      { title: 'Praktische Fragen', body: 'Kostenübernahme, ob eine Überweisung nötig ist, Adresse und Parken: Antworten aus Ihren eigenen Informationen.' },
      { title: 'Weiterverbinden', body: 'Unklarheit, Notfall oder etwas Persönliches? Er verbindet mit Ihrem Team oder hinterlässt eine Rückrufbitte.' },
    ],
    call: [
      { who: 'caller', text: 'Ich muss meinen Termin morgen verschieben.' },
      { who: 'assistant', text: 'Kein Problem. Darf ich Ihren Namen und Ihr Geburtsdatum haben?' },
      { who: 'caller', text: 'Sarah Wagner, 2. Juni 1990.' },
      { who: 'assistant', text: 'Ich sehe Ihren Termin morgen um 9:00 Uhr bei Herrn Becker. Freitag um 11:15 Uhr ginge auch bei ihm. Soll ich ihn dorthin verschieben?' },
      { who: 'caller', text: 'Ja, gern.' },
      { who: 'assistant', text: 'Ist eingetragen: Freitag, 11:15 Uhr bei Herrn Becker. Den Termin von morgen gebe ich frei.' },
    ],
    faq: [
      { q: 'Funktioniert das mit mehreren Behandlern?', a: 'Ja. Er kennt Ihr Team und dessen Kalender und bucht bei einer festen Behandlerin, wenn der Patient danach fragt.' },
      { q: 'Speichert er medizinische Informationen?', a: 'Nein, so stellen wir ihn ein. Er fragt nur, was für den Termin nötig ist, und gibt keinen medizinischen Rat.' },
      { q: 'Kann er Rückrufbitten entgegennehmen?', a: 'Ja. Er notiert, wer angerufen hat und worum es ging, und legt es in Ihren Posteingang oder Ihr System, damit Ihr Team zurückrufen kann.' },
    ],
  },

  restaurant: {
    name: 'Restaurants',
    meta: {
      title: 'KI-Telefonassistent für Restaurants — Voice AI',
      description:
        'Nehmen Sie jede Bestellung und Reservierung an, auch im Abendgeschäft. Ein KI-Assistent, der Ihre Speisekarte kennt und Bestellungen direkt in Ihr Kassensystem überträgt.',
    },
    title: 'Im Stoßgeschäft klingelt das Telefon. Und keiner geht ran.',
    lead: 'Die Küche läuft auf Hochtouren, der Service rennt. Der Assistent nimmt Abholbestellungen und Reservierungen aus Ihrer echten Speisekarte an und überträgt sie direkt in Ihr System.',
    pains: [
      { title: 'Verpasste Bestellungen', body: 'Zwischen 17:30 und 19:30 Uhr klingelt das Telefon am häufigsten, genau dann, wenn niemand Zeit hat. Jeder verpasste Anruf ist eine verpasste Bestellung.' },
      { title: 'Fehler im Trubel', body: 'Eine Bestellung halb verstanden, eine Allergie vergessen. Das kostet hinterher mehr, als die Bestellung eingebracht hat.' },
      { title: 'Personal am Telefon', body: 'Jemand aus dem Service steht an der Leitung statt bei den Gästen.' },
    ],
    does: [
      { title: 'Bestellungen aufnehmen', body: 'Abholung oder Lieferung, mit Größen, Extras und Preisen aus Ihrer echten Speisekarte. Direkt in Ihr Kassen- oder Bestellsystem.' },
      { title: 'Reservieren', body: 'Prüft, ob Platz frei ist, notiert die Personenzahl und bestätigt die Uhrzeit.' },
      { title: 'Allergien notieren', body: 'Er fragt danach und vermerkt sie deutlich bei der Bestellung, damit die Küche sie sieht.' },
      { title: 'Klare Grenzen', body: 'Er gibt nur neue Bestellungen auf. Ändern, Stornieren oder Erstatten bleibt bei Ihnen.' },
    ],
    call: [
      { who: 'caller', text: 'Ich möchte gern etwas zum Abholen bestellen.' },
      { who: 'assistant', text: 'Sehr gern! Was darf es sein?' },
      { who: 'caller', text: 'Zwei Pizza Margherita und ein Tiramisu.' },
      { who: 'assistant', text: 'Zwei Margherita und ein Tiramisu, zusammen 31,50 €. Hat jemand eine Allergie?' },
      { who: 'caller', text: 'Nein, und ich komme um sechs.' },
      { who: 'assistant', text: 'Fertig um 18:00 Uhr auf den Namen Schneider. Stimmt das? Dann gebe ich die Bestellung an die Küche weiter.' },
    ],
    faq: [
      { q: 'Kennt er unsere Speisekarte?', a: 'Ja, er liest Ihre Speisekarte aus Ihrem eigenen System, mit Preisen, Größen und Zutaten. Ändern Sie die Karte, weiß er es sofort.' },
      { q: 'Was, wenn zu viel los ist, um Bestellungen anzunehmen?', a: 'Sie können ein Maximum pro Zeitfenster festlegen. Ist es voll, bietet er eine spätere Uhrzeit an.' },
      { q: 'Kann er Zahlungen abwickeln?', a: 'Am Telefon nimmt er keine Zahlungsdaten entgegen. Der Kunde bezahlt bei der Abholung oder über einen Zahlungslink, wenn Sie das möchten.' },
    ],
  },

  salon: {
    name: 'Friseure & Salons',
    meta: {
      title: 'KI-Telefonassistent für Friseure und Salons — Voice AI',
      description:
        'Nie mehr mit der Schere in der Hand ans Telefon gehen. Ein KI-Assistent, der Termine bei der richtigen Stylistin vereinbart, auch abends.',
    },
    title: 'Die Schere in der einen Hand. Das Telefon in der anderen?',
    lead: 'Sie sind mitten im Haarschnitt, als das Telefon klingelt. Der Assistent nimmt ab, sucht mit der Kundin einen Termin aus und trägt ihn in Ihren Kalender ein.',
    pains: [
      { title: 'Unterbrochene Behandlungen', body: 'Jedes Mal, wenn Sie abnehmen, wartet Ihre Kundin im Stuhl.' },
      { title: 'Mailbox-Nachrichten, die niemand zurückruft', body: 'Am Ende des Tages sind fünf Nachrichten auf der Mailbox. Zwei Kunden haben schon woanders gebucht.' },
      { title: 'Buchen nach Ladenschluss', body: 'Viele Menschen rufen abends an, wenn der Salon geschlossen ist.' },
    ],
    does: [
      { title: 'Termine bei der richtigen Stylistin', body: 'Schneiden, Färben oder eine Behandlung: Er weiß, wie lange es dauert und wer es macht.' },
      { title: 'Verschieben und stornieren', body: 'Kunden regeln das selbst, auch außerhalb der Öffnungszeiten.' },
      { title: 'Preise und Behandlungen', body: 'Was kostet Balayage, wie lange dauert eine Dauerwelle: Antworten aus Ihrer eigenen Preisliste.' },
      { title: 'Bestätigung', body: 'Nach dem Gespräch bekommt die Kundin eine Bestätigung, damit weniger Leute ihren Termin vergessen.' },
    ],
    call: [
      { who: 'caller', text: 'Kann ich am Samstag zum Schneiden kommen?' },
      { who: 'assistant', text: 'Am Samstag hat Lisa um 11:00 Uhr Zeit, und Omar um 14:30 Uhr. Haben Sie einen Wunsch?' },
      { who: 'caller', text: 'Lisa, um elf.' },
      { who: 'assistant', text: 'Schneiden bei Lisa, Samstag 11:00 Uhr. Auf welchen Namen darf ich den Termin eintragen?' },
      { who: 'caller', text: 'Fatma.' },
      { who: 'assistant', text: 'Ist eingetragen. Sie bekommen noch eine Bestätigung.' },
    ],
    faq: [
      { q: 'Funktioniert das mit meinem Buchungssystem?', a: 'Hat Ihr Buchungssystem eine Schnittstelle, bucht er direkt dort. Wenn nicht, suchen wir gemeinsam eine Lösung.' },
      { q: 'Weiß er, wie lange eine Behandlung dauert?', a: 'Ja. Sie hinterlegen für jede Behandlung die Dauer, und er bietet nur Zeiten an, in die sie auch wirklich passt.' },
      { q: 'Kann ich trotzdem selbst abnehmen?', a: 'Natürlich. Sie wählen, wann er abnimmt: immer, nur außerhalb der Öffnungszeiten oder nur, wenn Sie nach ein paar Klingeltönen nicht rangehen.' },
    ],
  },

  garage: {
    name: 'Autowerkstätten',
    meta: {
      title: 'KI-Telefonassistent für Autowerkstätten — Voice AI',
      description:
        'Unter dem Auto und trotzdem erreichbar. Ein KI-Assistent, der HU- und Inspektionstermine vereinbart und Auskunft gibt, ob ein Auto fertig ist.',
    },
    title: 'Unter dem Auto können Sie nicht ans Telefon.',
    lead: 'Ihre Mechaniker stehen in der Werkstatt. Der Assistent plant HU und Inspektion ein und sagt Kunden, ob ihr Auto schon fertig ist.',
    pains: [
      { title: 'Ölige Hände, klingelndes Telefon', body: 'Abnehmen heißt Hände waschen und die Arbeit liegen lassen. Oder eben nicht abnehmen.' },
      { title: '„Ist mein Auto schon fertig?“', body: 'Die Frage, die den ganzen Tag wiederkommt. Jedes Mal kurz suchen, kurz nachsehen, kurz zurückrufen.' },
      { title: 'Werkstattplanung', body: 'Termine per Telefon, ein Zettel und der Kalender geraten schnell durcheinander.' },
    ],
    does: [
      { title: 'HU und Inspektion planen', body: 'Kennzeichen, Art der Wartung, Wunschtag: Er plant ein, was in Ihre Werkstatt passt.' },
      { title: 'Status durchgeben', body: 'Er schaut in Ihrem System nach, ob das Auto fertig ist, und sagt es dem Kunden.' },
      { title: 'Störungen notieren', body: 'Beschwerden über das Auto notiert er in den Worten des Kunden, damit Ihr Mechaniker weiß, worauf er achten muss.' },
      { title: 'Weiterverbinden', body: 'Fragen zu einem Kostenvoranschlag oder einer Reparatur? Er verbindet weiter oder hinterlässt eine Rückrufbitte.' },
    ],
    call: [
      { who: 'caller', text: 'Meine HU läuft nächsten Monat ab, kann ich einen Termin machen?' },
      { who: 'assistant', text: 'Sicher. Wie lautet Ihr Kennzeichen?' },
      { who: 'caller', text: 'M-AB 1234.' },
      { who: 'assistant', text: 'Ein Volkswagen Golf, richtig? Ich hätte Mittwoch, den 8., um 8:30 Uhr oder Montag, den 13., um 13:00 Uhr.' },
      { who: 'caller', text: 'Mittwoch.' },
      { who: 'assistant', text: 'HU am Mittwoch, den 8., um 8:30 Uhr. Sie können das Auto ab 8:00 Uhr bringen. Bis dann!' },
    ],
    faq: [
      { q: 'Lässt er sich mit meiner Werkstattsoftware verbinden?', a: 'Hat Ihr System eine Schnittstelle, plant er direkt dort ein und liest den Status eines Autos aus. Sonst suchen wir gemeinsam eine Lösung.' },
      { q: 'Kann er Preise nennen?', a: 'Festpreise, etwa für die HU oder eine kleine Inspektion, nennt er aus Ihrer eigenen Preisliste. Bei Reparaturen hinterlässt er eine Rückrufbitte.' },
      { q: 'Was, wenn jemand eine Panne hat?', a: 'Sie legen fest, was dann passiert: direkt weiterverbinden oder die Nummer Ihres Pannendienstes nennen.' },
    ],
  },

  'law-firm': {
    name: 'Anwaltskanzleien',
    meta: {
      title: 'KI-Telefonassistent für Anwaltskanzleien — Voice AI',
      description:
        'Ein professioneller erster Kontakt für jeden Anrufer. Ein KI-Assistent, der neue Mandate aufnimmt, Termine vereinbart und mit der richtigen Anwältin verbindet.',
    },
    title: 'Jeder verpasste Anrufer ist ein Mandat für eine andere Kanzlei.',
    lead: 'Menschen mit einem rechtlichen Problem rufen die erste Kanzlei an, die abnimmt. Der Assistent nimmt ab, notiert das Wesentliche und vereinbart ein Erstgespräch.',
    pains: [
      { title: 'Anwälte bei Gericht oder in Besprechungen', body: 'Das Sekretariat ist ausgelastet, die Anwälte sind nicht erreichbar. Der neue Mandant ruft woanders an.' },
      { title: 'Erstgespräche, die viel Zeit kosten', body: 'Herauszufinden, ob ein Fall zu Ihrer Kanzlei passt, kostet Anwaltszeit, die sich nicht abrechnen lässt.' },
      { title: 'Nach Büroschluss', body: 'Eine Kündigung, eine Klage: Menschen rufen an, wenn es ihnen passiert, nicht wenn Sie geöffnet haben.' },
    ],
    does: [
      { title: 'Neue Mandate aufnehmen', body: 'Er fragt nach dem Rechtsgebiet und dem Kern des Falls und legt das übersichtlich in Ihrem System ab.' },
      { title: 'Erstgespräche einplanen', body: 'Bei der Anwältin, die das Rechtsgebiet betreut, in dem Kalender, den Sie ohnehin nutzen.' },
      { title: 'Bestehende Mandanten weiterverbinden', body: 'Er erkennt laufende Mandate und verbindet weiter oder hinterlässt eine Nachricht für den richtigen Anwalt.' },
      { title: 'Vertraulich', body: 'Er gibt keine Rechtsberatung und fragt nur, was für das Erstgespräch nötig ist.' },
    ],
    call: [
      { who: 'caller', text: 'Mir wurde heute gekündigt, und ich möchte wissen, was ich tun kann.' },
      { who: 'assistant', text: 'Das tut mir leid. Ich vereinbare gern ein Gespräch mit einer unserer Anwältinnen für Arbeitsrecht. Darf ich Ihren Namen haben?' },
      { who: 'caller', text: 'Peter Hoffmann.' },
      { who: 'assistant', text: 'Frau Dr. Keller hat morgen um 10:00 Uhr Zeit für ein Erstgespräch. Passt Ihnen das?' },
      { who: 'caller', text: 'Ja.' },
      { who: 'assistant', text: 'Ist eingetragen. Sie bekommen eine Bestätigung per E-Mail, mit dem, was Sie mitbringen sollten.' },
    ],
    faq: [
      { q: 'Gibt er Rechtsberatung?', a: 'Nein. Er nimmt den Kern der Frage auf und vereinbart ein Gespräch. Die Beratung kommt von Ihren Anwältinnen und Anwälten.' },
      { q: 'Wie steht es um die Vertraulichkeit?', a: 'Wir schließen einen Auftragsverarbeitungsvertrag, und gemeinsam legen wir fest, was gespeichert wird, wo und wie lange.' },
      { q: 'Kann er eine Kollisionsprüfung machen?', a: 'Er notiert die Namen der Gegenseite, damit Ihre Kanzlei die Prüfung vor dem Erstgespräch durchführen kann.' },
    ],
  },

  rental: {
    name: 'Vermietungen',
    meta: {
      title: 'KI-Telefonassistent für Vermietungen — Voice AI',
      description:
        'Verfügbarkeit, Preise und Reservierungen am Telefon, Tag und Nacht. Für die Vermietung von Autos, Transportern, Werkzeug, Fahrrädern und mehr.',
    },
    title: '„Ist der am Wochenende noch frei?“ Hundertmal pro Woche.',
    lead: 'Transporter, Werkzeug, Fahrräder oder Partyzelte: Der Assistent schaut in Ihrem System nach, was frei ist, nennt den Preis und hält die Reservierung fest.',
    pains: [
      { title: 'Immer wieder dieselbe Frage', body: 'Verfügbarkeit und Preis. Jedes Mal nachschlagen, jedes Mal erklären.' },
      { title: 'Theke und Telefon', body: 'Während Sie jemandem bei der Abholung helfen, ruft schon der nächste Kunde an.' },
      { title: 'Spitzen am Wochenende', body: 'Freitags rufen alle gleichzeitig fürs Wochenende an.' },
    ],
    does: [
      { title: 'Verfügbarkeit prüfen', body: 'Er schaut in Ihrem System nach, was an den gewünschten Tagen frei ist.' },
      { title: 'Preise nennen', body: 'Pro Tag, pro Wochenende, mit Kaution: aus Ihren eigenen Tarifen.' },
      { title: 'Reservieren', body: 'Hält die Reservierung mit Name, Tagen und Abholzeit fest.' },
      { title: 'Bedingungen erklären', body: 'Führerschein, Kaution, Kilometer: Antworten aus Ihren Bedingungen.' },
    ],
    call: [
      { who: 'caller', text: 'Haben Sie am Wochenende noch einen Transporter frei?' },
      { who: 'assistant', text: 'Von Freitag bis Sonntag habe ich noch einen Transporter mit 12 Kubikmetern. Das kostet 195 € fürs Wochenende, inklusive 300 Kilometer.' },
      { who: 'caller', text: 'Den nehme ich. Abholung Freitag um vier.' },
      { who: 'assistant', text: 'Darf ich Ihren Namen und Ihre Telefonnummer haben?' },
      { who: 'caller', text: 'Kevin Schmidt, 0151 23456789.' },
      { who: 'assistant', text: 'Ist eingetragen: Transporter mit 12 Kubikmetern, Freitag 16:00 Uhr bis Sonntag. Bitte bringen Sie Ihren Führerschein mit; die Kaution beträgt 250 €.' },
    ],
    faq: [
      { q: 'Lässt er sich mit meiner Vermietsoftware verbinden?', a: 'Hat Ihr System eine Schnittstelle, prüft und reserviert er direkt dort. Sonst suchen wir gemeinsam eine Lösung.' },
      { q: 'Kann er eine Kaution kassieren?', a: 'Am Telefon nimmt er keine Zahlungsdaten entgegen. Sie können nach der Reservierung aber einen Zahlungslink verschicken lassen.' },
      { q: 'Was, wenn etwas nicht frei ist?', a: 'Dann bietet er eine Alternative an: einen anderen Tag oder etwas Vergleichbares, das frei ist.' },
    ],
  },
}
