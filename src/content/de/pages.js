// Flacher Inhalt der statischen Seiten (Über uns, Prozess, Arbeit), nach Slug.

export const pages = {
  work: {
    slug: 'work',
    meta: {
      title: 'Arbeit',
      description:
        'Ausgewählte Projekte des Studios — maßgeschneiderte Plattformen, SaaS, KI-Tools, headless E-Commerce und CRMs für Fintech, Kanzleien und kommerzielle Teams, dazu die eigenen Produkte des Studios.',
    },
    eyebrow: 'Ausgewählte Arbeiten',
    titleLine1: 'Arbeit',
    titleAccent: '.',
    lead:
      'Jedes Projekt ist ein echtes Geschäftsproblem, durchgängig gelöst und für den Produktivbetrieb gebaut. Die Plattformen und Tools, die das Studio für Kunden geliefert hat — und die Produkte, die es selbst baut und betreibt.',
    groups: {
      client: 'Kundenarbeit',
      product: 'Eigene Produkte',
    },
    posterRailMiddle: 'Arbeit · Ausgewählte Projekte',
  },

  about: {
    slug: 'about',
    meta: {
      title: 'Über uns',
      description:
        'Eine Digitalagentur und ein Produktstudio aus Rotterdam, das vollständige Produkte gestaltet, baut und wachsen lässt — Strategie, Engineering, KI, Automatisierung und Marke für Fintech, Kanzleien, Agenturen und E-Commerce.',
    },
    eyebrow: 'Über uns',
    titleLine1: 'Über uns',
    titleAccent: '.',
    intro: [
      {
        text: 'raoul.studio ist eine Digitalagentur und ein Produktstudio aus Rotterdam, das ambitionierten Unternehmen hilft, aus Ideen skalierbare digitale Produkte zu machen. Im Studio werden Strategie, Branding, Software-Engineering, KI, Automatisierung und Infrastruktur zu Lösungen verbunden, die dauerhaften geschäftlichen Mehrwert schaffen.',
      },
      {
        text: 'Das Studio arbeitet partnerschaftlich mit Gründern, Start-ups und etablierten Unternehmen, um maßgeschneiderte Plattformen, KI-gestützte Tools, Commerce-Lösungen und digitale Erlebnisse zu gestalten, zu bauen und weiterzuentwickeln. Jedes Projekt geht das Studio mit Produktdenken an: echte geschäftliche Herausforderungen lösen, intuitive Nutzererlebnisse schaffen und Technologie bauen, die mit dem Unternehmen mitwächst.',
      },
      {
        text: 'Das Studio baut langfristige Partnerschaften mit Teams, die schnell vorankommen, groß denken und bedeutungsvolle digitale Produkte schaffen wollen. Von der ersten Idee bis zum Launch — und bei jeder Iteration danach — arbeitet das Studio als verlängerter Arm Ihres Teams, mit dem Fokus auf messbare Wirkung durch Technologie.',
        highlight: 'Das Studio baut langfristige Partnerschaften',
      },
    ],
    servicesLabel: 'Was das Studio baut',
    services: [
      { label: 'Maßgeschneiderte Webplattformen & SaaS' },
      { label: 'Headless E-Commerce im großen Maßstab' },
      { label: 'KI-Tools & Automatisierung' },
      { label: 'CRMs & interne Tools' },
      { label: 'APIs & Systemarchitektur' },
      { label: 'Zweiseitige Marktplätze' },
    ],
    systemsParagraph: [
      'Das Studio baut digitale Produkte, die sich weiterentwickeln können. Jede Plattform steht auf einem soliden technischen Fundament — mit skalierbarer Architektur, durchdachtem Engineering und Blick auf künftiges Wachstum. Ob KI-gestützte Plattform, Commerce-Ökosystem oder maßgeschneiderte Business-Anwendung: Das Studio schafft Technologie, die mitwächst, wenn Ihr Unternehmen wächst.',
      'Vom ersten Strategiegespräch bis lange nach dem Launch konzentriert sich das Studio darauf, digitale Lösungen zu bauen, die robust und skalierbar sind und Bestand haben.',
    ],
    manifestoLead: 'Wo Strategie, KI und Software',
    manifestoTail: 'zusammenkommen.',
    posterRailMiddle: 'Über uns · Studio',
  },

  process: {
    slug: 'process',
    meta: {
      title: 'Prozess',
      description:
        'Wie das Studio arbeitet: Richtung, Struktur, Design, Bau, Iteration, Skalierung. Direkt, fokussiert auf maßgeschneiderte Produkte, die halten.',
    },
    eyebrow: 'Prozess',
    titleLine1: 'Prozess',
    titleAccent: '.',
    lead:
      'Sechs Phasen, ein Prinzip: das System verstehen, bevor man es baut. Das Studio ist schnell, weil das Denken vorab passiert, nicht weil es übersprungen wird. Maßgeschneiderte Produkte, Schritt für Schritt geformt.',
    steps: [
      {
        title: 'Richtung',
        lead: 'Klären, was wirklich gebaut wird.',
        body: [
          {
            text: 'Das Studio startet beim Problem, nicht bei der Feature-Liste. Was hakt, was ist zu langsam, was kostet Sie — und wie „fertig“ aussieht.',
          },
          {
            text: 'Sie verlassen diese Phase mit klarem Umfang und einem gemeinsamen Bild davon, wohin es geht. Keine späteren Überraschungen.',
          },
        ],
      },
      {
        title: 'Struktur',
        lead: 'Das System darunter entwerfen.',
        body: [
          {
            text: 'Vor dem ersten Screen werden Daten, Abläufe und Architektur kartiert. Maßgeschneiderte Produkte stehen und fallen mit dem, was darunter liegt.',
          },
          {
            text: 'Stimmt das, wird alles danach leichter. Stimmt es nicht, zahlen Sie ewig dafür.',
          },
        ],
      },
      {
        title: 'Design',
        lead: 'Klar machen, nutzbar machen.',
        body: [
          {
            text: 'Gestaltet wird rund um den echten Workflow — die täglichen Handgriffe, die Sonderfälle, die Menschen, die wirklich damit arbeiten.',
          },
          {
            text: 'Scharf, schnell, ohne Ballast. Die Oberfläche soll verschwinden und die Arbeit geschehen lassen.',
          },
        ],
      },
      {
        title: 'Bau',
        lead: 'Produktionsreifen Code liefern.',
        body: [
          {
            text: 'Handgefertigt, ohne Boilerplate-Ballast. Moderner Stack, sauberer Code, ab dem ersten Tag für den Produktivbetrieb gebaut.',
          },
          {
            text: 'Das Studio baut offen mit Ihnen — Sie sehen Fortschritt, sobald er entsteht, nicht in einer großen Enthüllung am Ende.',
          },
        ],
      },
      {
        title: 'Iteration',
        lead: 'In den echten Einsatz bringen.',
        body: [
          {
            text: 'Echte Nutzer zeigen, was kein Lastenheft erfasst. Das Studio liefert, beobachtet und schärft nach — schnelle Schleifen, kleine Releases.',
          },
          { text: 'Mit jedem Zyklus wird das Produkt schärfer.' },
        ],
      },
      {
        title: 'Skalierung',
        lead: 'Gebaut, um mit Ihnen zu wachsen.',
        body: [
          {
            text: 'Mehr Nutzer, mehr Daten, mehr Sprachen, mehr Features — das System ist dafür gebaut.',
          },
          {
            text: 'Das Studio bleibt dran. Das meiste seiner Arbeit ist langfristig, und es behandelt, was es baut, als wäre es sein eigenes.',
          },
        ],
      },
    ],
    howWeWork: {
      label: 'Wie das Studio arbeitet',
      lead: 'Direkt und gründergeführt. Sie sprechen mit den Menschen, die das Ding bauen.',
      points: [
        { label: 'Direkte Kommunikation' },
        { label: 'Schnelle Entscheidungen' },
        { label: 'Keine Ebenen, kein Rauschen' },
      ],
      closing: 'Sie arbeiten mit den Menschen, die bauen.',
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: 'Was macht raoul.studio?',
          a: 'raoul.studio ist ein digitales Produktstudio. Das Studio gestaltet, baut und skaliert maßgeschneiderte Produkte — Webplattformen und SaaS, headless E-Commerce, KI-Tools und Automatisierung, CRMs und interne Tools, APIs und zweiseitige Marktplätze — für Fintech, Kanzleien, kommerzielle Agenturen und E-Commerce-Teams, dazu die eigenen Produkte des Studios.',
        },
        {
          q: 'Wie arbeiten Sie?',
          a: 'Jedes Projekt läuft durch sechs Phasen: Richtung, Struktur, Design, Bau, Iteration und Skalierung. Das Prinzip ist, das System zu verstehen, bevor man es baut — das Denken passiert vorab, sodass der Bau schnell vorankommt, ohne Schritte zu überspringen.',
        },
        {
          q: 'Wie lange dauert ein Projekt?',
          a: 'Das hängt vom Umfang ab, aber das Studio arbeitet in schnellen Schleifen mit kleinen, häufigen Releases statt einer großen Enthüllung am Ende. Sie sehen Fortschritt, sobald er entsteht, und das Produkt wird mit jedem Zyklus schärfer, weil Architektur und Richtung vor Baubeginn feststehen.',
        },
        {
          q: 'Mit wem arbeiten Sie?',
          a: 'Vor allem mit Fintech, Kanzleien, kommerziellen Agenturen und E-Commerce-Teams. Manches ist Kundenarbeit, manches sind die eigenen Produkte des Studios — alles ist für den Produktivbetrieb gebaut.',
        },
        {
          q: 'Bieten Sie laufende Betreuung nach dem Launch?',
          a: 'Ja. Das meiste der Arbeit des Studios ist langfristig: Systeme sind gebaut, um mit Ihnen zu wachsen — über mehr Nutzer, Daten, Sprachen und Features hinweg — und das Studio bleibt eingebunden, statt zu übergeben und zu verschwinden.',
        },
        {
          q: 'Wie starte ich ein Projekt?',
          a: 'Erzählen Sie uns, was Sie bauen oder was Sie ausbremst — per E-Mail an hello@raoul.studio oder über die Kontaktseite. Jedes echte Briefing wird gelesen, mit Antwort innerhalb von 24 Stunden.',
        },
      ],
    },
    posterRailMiddle: 'Prozess · Richtung → Skalierung',
  },

  privacy: {
    slug: 'privacy',
    meta: {
      title: 'Datenschutz',
      description:
        'Wie raoul.studio mit personenbezogenen Daten auf der Website und in der Tododo-App umgeht: was wir erheben, warum, wer sie verarbeitet, wie lange wir sie speichern und Ihre Rechte nach der DSGVO.',
    },
    eyebrow: 'Rechtliches',
    titleLine1: 'Datenschutz',
    titleAccent: '.',
    updated: 'Zuletzt aktualisiert — August 2026',
    intro:
      'Diese Richtlinie erklärt, welche personenbezogenen Daten raoul.studio erhebt, warum wir sie erheben und welche Rechte Sie daran haben. Sie gilt für diese Website und für die Apps, die das Studio betreibt, einschließlich der Aufgaben-App Tododo für iPhone und Mac. Wir halten die Datenerhebung auf das Minimum, das nötig ist, um das Studio zu betreiben, denjenigen zu antworten, die uns kontaktieren, und Ihre Aufgaben synchron zu halten.',
    sections: [
      {
        heading: 'Wer wir sind',
        body: [
          'raoul.studio ist ein Produkt- und Engineering-Studio von Raoul Guillermo mit Sitz in der EU. Bei allem, was diese Richtlinie betrifft — oder um Ihre Rechte auszuüben — erreichen Sie uns unter hello@raoul.studio.',
          'Im Sinne der DSGVO ist raoul.studio Verantwortlicher für die hier beschriebenen personenbezogenen Daten.',
        ],
      },
      {
        heading: 'Was wir erheben',
        body: [
          'Wir erheben nur personenbezogene Daten, die Sie uns geben oder die Ihr Browser bei der Nutzung der Seite übermittelt:',
        ],
        points: [
          'Kontaktformular: Ihr Name, Ihre E-Mail-Adresse, optional ein Firmenname und die Nachricht, die Sie schreiben.',
          'Technische Daten: Wenn Sie das Formular absenden, speichern wir die IP-Adresse und den Browser-User-Agent der Anfrage, um vor Spam und Missbrauch zu schützen.',
          'Spracheinstellung: Ein kleines „lang“-Cookie merkt sich, in welcher Sprache Sie die Seite lesen möchten.',
        ],
      },
      {
        heading: 'Tododo — die iPhone- und Mac-App',
        body: [
          'Tododo ist die eigene Aufgaben-App des Studios für iPhone und Mac. Sie benötigt ein Konto, damit Ihre Listen von einem Gerät zum anderen mitwandern, und dieses Konto ist der einzige Grund, warum sie überhaupt etwas über Sie speichert.',
        ],
        points: [
          'Konto: Ihre E-Mail-Adresse und — wenn Sie sich mit einem Passwort registrieren — eine gehashte Version dieses Passworts. Das Passwort selbst wird nie gespeichert und kann nicht zurückgelesen werden.',
          'Weiter mit Google: Wenn Sie sich mit Google anmelden, erhalten wir Ihre E-Mail-Adresse, Ihre Basis-Profildaten und Ihre Google-Konto-ID. Wir nutzen sie für eine Sache — Ihr Konto anzulegen und Sie beim nächsten Mal wiederzuerkennen.',
          'Weiter mit Apple: Wenn Sie sich mit Apple anmelden, erhalten wir eine feste Kennung Ihres Apple-Kontos und Ihre E-Mail-Adresse — eine Relay-Adresse, wenn Sie „E-Mail-Adresse verbergen“ gewählt haben. Apple übermittelt die E-Mail-Adresse nur bei der ersten Autorisierung; danach erkennt Sie diese Kennung wieder.',
          'Ihre Inhalte: die Listen und Aufgaben, die Sie schreiben, ob eine Aufgabe erledigt ist, und die Reihenfolge, in die Sie sie bringen.',
        ],
      },
      {
        heading: 'Wie Tododo Google-Daten nutzt',
        body: [
          'Die Anmeldung mit Google wird ausschließlich als Möglichkeit angeboten, Ihr Konto zu identifizieren. Tododo fragt bei Google nur Ihre E-Mail-Adresse und Ihr Basisprofil ab. Die App fordert keinen Zugriff auf Gmail, Drive, Kalender, Kontakte, Fotos oder einen anderen Google-Dienst an und kann in Ihrem Google-Konto nichts lesen, schreiben oder löschen.',
          'Die Verwendung von Informationen, die Tododo über Google-APIs erhält, entspricht der Google API Services User Data Policy einschließlich der Limited-Use-Anforderungen. Von Google erhaltene Informationen werden ausschließlich für die Anmeldefunktion verwendet. Sie werden nie verkauft, nie für Werbung oder Profiling genutzt, nie an Dritte weitergegeben außer soweit dies für den Betrieb des Dienstes nötig ist oder das Gesetz es verlangt, und nie zum Training von KI-Modellen verwendet.',
          'Ihre Aufgaben gehören Ihnen. Wir lesen sie zu keinem anderen Zweck, als sie zu speichern und Ihnen zurückzugeben, wir geben sie nicht weiter und wir nutzen sie nicht für Werbung oder zum Training von Modellen.',
        ],
      },
      {
        heading: 'Ihr Tododo-Konto löschen',
        body: [
          'Sie können Ihr Konto und alles darin direkt in der App löschen: Öffnen Sie das ⋯-Menü, wählen Sie „Delete account“ und bestätigen Sie. Das Konto, seine Listen und seine Aufgaben sind damit sofort gelöscht, und das lässt sich nicht rückgängig machen.',
          'Sie können Ihr Konto und alles darin jederzeit löschen lassen, indem Sie von der Adresse des Kontos aus eine E-Mail an hello@raoul.studio schreiben. Wir löschen das Konto, seine Listen und seine Aufgaben. Die Anmeldung mit Google lässt sich außerdem jederzeit in den Sicherheitseinstellungen Ihres Google-Kontos trennen, die Anmeldung mit Apple unter „Anmelden mit Apple“ in Ihren Apple-ID-Einstellungen; dadurch ist keine weitere Anmeldung mehr möglich — schreiben Sie uns zusätzlich, wenn auch die Daten selbst gelöscht werden sollen.',
          'Wir speichern Kontodaten so lange, wie das Konto besteht, und nicht länger.',
        ],
      },
      {
        heading: 'Wozu wir sie nutzen und unsere Rechtsgrundlage',
        body: [
          'Wir nutzen Ihre Kontaktdaten und Nachricht für eine Sache: um Ihre Anfrage zu lesen und zu beantworten. Rechtsgrundlage ist unser berechtigtes Interesse, Menschen zu antworten, die uns kontaktieren, sowie die Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage hin.',
          'Die technischen Daten (IP, User-Agent) nutzen wir auf Grundlage unseres berechtigten Interesses, das Formular sicher und frei von Spam zu halten. Das Sprach-Cookie ist ein funktionales Cookie, das auf Grundlage Ihrer Wahl gesetzt wird.',
        ],
      },
      {
        heading: 'Cookies',
        body: [
          'Die Seite nutzt ein einziges funktionales Cookie („lang“), um sich Ihre Sprache zu merken. Wir setzen keine Werbe-Cookies ein und betreiben kein Tracking oder Profiling über Dritte.',
        ],
      },
      {
        heading: 'Wer Ihre Daten verarbeitet',
        body: ['Wir halten die Zahl der Dritten klein. Diejenigen, die Ihre Daten verarbeiten könnten, sind:'],
        points: [
          'SendGrid (Twilio Inc.) — stellt die E-Mail aus dem Kontaktformular an uns zu. Ihr Name, Ihre E-Mail und Ihre Nachricht laufen darüber.',
          'Google (Google Ireland Limited) — nur wenn Sie in Tododo „Weiter mit Google“ wählen. Google führt die Anmeldung durch und übermittelt uns Ihre E-Mail-Adresse und Ihr Basisprofil. Was auf Google’s Seite geschieht, unterliegt der eigenen Datenschutzerklärung von Google.',
          'Apple (Apple Distribution International Ltd.) — nur wenn Sie in Tododo „Anmelden mit Apple“ wählen. Apple führt die Anmeldung durch und übermittelt uns eine Kennung Ihres Apple-Kontos sowie eine E-Mail-Adresse, die eine Relay-Adresse von Apple sein kann. Was auf Apple’s Seite geschieht, unterliegt der eigenen Datenschutzerklärung von Apple.',
          'DigitalOcean — stellt die Server und die Managed-Datenbank in Amsterdam bereit, auf denen die Website und alle Tododo-Konten, -Listen und -Aufgaben gespeichert werden.',
          'Unsere eigenen Server — die Website und die Tododo-API laufen auf von uns verwalteter Infrastruktur, und Kontaktanfragen werden dort in unserer Datenbank gespeichert.',
        ],
      },
      {
        heading: 'Wo Ihre Daten liegen',
        body: [
          'Website-Daten sowie Tododo-Konten, -Listen und -Aufgaben werden in der EU gespeichert, auf Servern und einer Managed-Datenbank in Amsterdam. Verbindungen zur Website und zur Tododo-API sind bei der Übertragung verschlüsselt, und der Zugriff auf die Datenbank ist beschränkt.',
        ],
      },
      {
        heading: 'Internationale Übermittlungen',
        body: [
          'SendGrid (Twilio) ist ein US-Unternehmen, daher kann der Versand einer Kontakt-E-Mail eine Übermittlung Ihrer Daten außerhalb der EU bedeuten. DigitalOcean hat seinen Hauptsitz ebenfalls in den USA, auch wenn die Server mit Ihren Daten in Amsterdam stehen. Wo eine Übermittlung außerhalb der EU stattfindet, ist sie durch geeignete Garantien wie die Standardvertragsklauseln der Europäischen Kommission abgesichert. Google und Apple bieten die Anmeldung in Tododo über ihre irischen Gesellschaften an; eine Übermittlung auf ihrer Seite unterliegt ihren eigenen Richtlinien und Garantien.',
        ],
      },
      {
        heading: 'Wie lange wir sie speichern',
        body: [
          'Wir speichern Kontaktanfragen so lange, wie wir sie zur Bearbeitung Ihrer Anfrage und für unsere eigenen Unterlagen brauchen, und nicht länger als nötig. Sie können uns jederzeit auffordern, Ihre Daten zu löschen.',
        ],
      },
      {
        heading: 'Ihre Rechte',
        body: ['Nach der DSGVO haben Sie das Recht,'],
        points: [
          'auf die personenbezogenen Daten zuzugreifen, die wir über Sie speichern;',
          'sie berichtigen oder löschen zu lassen;',
          'ihre Nutzung einzuschränken oder ihr zu widersprechen;',
          'sie in einem übertragbaren Format zu erhalten.',
        ],
      },
      {
        heading: 'Beschwerden',
        body: [
          'Um eines dieser Rechte auszuüben, schreiben Sie an hello@raoul.studio. Wenn Sie der Ansicht sind, dass wir mit Ihren Daten falsch umgegangen sind, haben Sie zudem das Recht, sich bei Ihrer örtlichen Datenschutzbehörde zu beschweren — in den Niederlanden der Autoriteit Persoonsgegevens.',
        ],
      },
      {
        heading: 'Sicherheit',
        body: [
          'Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Daten, einschließlich Transportverschlüsselung und beschränktem Zugriff. Kein System ist vollkommen sicher, aber wir halten die Angriffsfläche klein, indem wir von vornherein wenig erheben.',
        ],
      },
      {
        heading: 'Software, Sicherheit und Haftung',
        body: [
          'Die Website sowie sämtliche von uns bereitgestellten Werkzeuge oder Software werden „wie besehen“ und „wie verfügbar“ zur Verfügung gestellt. Wir wenden angemessene Sorgfalt auf, um sie sicher und betriebsbereit zu halten; gleichwohl kann für keine Software und keinen Onlinedienst gewährleistet werden, dass sie vollständig sicher, ununterbrochen oder fehlerfrei sind.',
          'Soweit gesetzlich zulässig, haftet raoul.studio nicht für Datenverluste, Ausfallzeiten, Sicherheitsverletzungen, unbefugte Zugriffe oder für unmittelbare oder mittelbare Schäden, die aus Ihrer Nutzung der Website oder unserer Software oder der Unmöglichkeit ihrer Nutzung entstehen, einschließlich Vorfällen außerhalb unseres zumutbaren Einflussbereichs wie Angriffen Dritter, Hackerangriffen oder Dienstausfällen.',
          'Die vorstehenden Bestimmungen beschränken weder Ihre Rechte aus der DSGVO noch eine Haftung, die gesetzlich nicht ausgeschlossen werden kann – einschließlich der Haftung für Vorsatz und grobe Fahrlässigkeit.',
        ],
      },
      {
        heading: 'Änderungen dieser Richtlinie',
        body: [
          'Wir können diese Richtlinie anpassen, wenn sich das Studio verändert. Wenn wir das tun, aktualisieren wir das Datum oben auf dieser Seite.',
        ],
      },
    ],
    directLabel: 'Datenschutzfragen',
    directEmail: 'hello@raoul.studio',
    posterRailMiddle: 'Datenschutz · Rechtliches',
  },
  terms: {
    slug: 'terms',
    meta: {
      title: 'Allgemeine Geschäftsbedingungen',
      description:
        'Die Bedingungen, zu denen raoul.studio mit Kunden arbeitet und seine eigenen Apps betreibt: Leistungsumfang, Zahlung, geistiges Eigentum, Konten, zulässige Nutzung, Haftung und mehr — in klarer Sprache, nach niederländischem Recht.',
    },
    eyebrow: 'Rechtliches',
    titleLine1: 'AGB',
    titleAccent: '.',
    updated: 'Zuletzt aktualisiert — August 2026',
    intro:
      'Diese Bedingungen beschreiben, wie raoul.studio mit seinen Kunden arbeitet — was wir liefern, wie wir arbeiten und wer wofür verantwortlich ist — und wie Sie die Apps nutzen dürfen, die das Studio selbst betreibt, etwa Tododo. Wir haben sie in klarer Sprache verfasst: Sie sollen fair sein und gelesen werden.',
    sections: [
      {
        heading: 'Einleitung',
        body: [
          'Diese Allgemeinen Geschäftsbedingungen („Bedingungen“) gelten für alle Leistungen, Angebote, Vorschläge, Abonnements, Aufträge und Vereinbarungen zwischen raoul.studio („das Studio“, „wir“, „uns“) und seinen Kunden („der Kunde“, „Sie“). Sie gelten, sofern wir nicht schriftlich etwas anderes vereinbart haben.',
          'raoul.studio ist ein digitales Produktstudio mit Sitz in den Niederlanden, geführt von Raoul Guillermo. Sie erreichen uns unter hello@raoul.studio. Mit der Annahme eines Angebots, der Unterzeichnung einer Vereinbarung oder der Beauftragung, mit der Arbeit zu beginnen, stimmen Sie diesen Bedingungen zu.',
          'Diese Bedingungen bestehen aus zwei Teilen. Das meiste im Folgenden betrifft Kundenprojekte. Die Abschnitte unter „Nutzung der eigenen Apps des Studios“ weiter unten gelten stattdessen, wenn Sie eine App nutzen, die das Studio auf eigene Rechnung betreibt — derzeit Tododo, die Todo-App für iPhone und Mac. Sie müssen kein Kunde sein, um diese Apps zu nutzen.',
        ],
      },
      {
        heading: 'Begriffsbestimmungen',
        body: ['In diesen Bedingungen haben die folgenden Begriffe die folgende Bedeutung:'],
        points: [
          'Studio — raoul.studio, der Anbieter der Leistungen.',
          'Kunde — die natürliche oder juristische Person, die eine Vereinbarung mit dem Studio schließt.',
          'Projekt — die Arbeit, die das Studio zu erbringen zusagt, wie in einem Angebot oder einer Vereinbarung beschrieben.',
          'Leistungen (Deliverables) — die Designs, Software, der Code, die Dokumentation, Inhalte oder sonstigen Materialien, die das Studio liefert.',
          'Angebot — jedes Angebot, jede Schätzung, Leistungsbeschreibung oder Offerte des Studios.',
          'Vereinbarung — das angenommene Angebot zusammen mit diesen Bedingungen und etwaigen schriftlichen Absprachen zwischen den Parteien.',
          'Geistiges Eigentum — alle Rechte an Software, Designs, Texten, Methoden und Know-how, einschließlich Urheberrecht, Datenbankrechten, Marken und Geschäftsgeheimnissen.',
          'Vertrauliche Informationen — nicht öffentliche Informationen, die eine Partei der anderen offenlegt und die als vertraulich gekennzeichnet sind oder vernünftigerweise als vertraulich zu verstehen sind.',
          'Drittleistungen — Produkte oder Dienste anderer Anbieter als des Studios, etwa Hosting, Cloud, Zahlungsdienste, KI- oder API-Anbieter.',
          'KI-Dienste — Dienste, die künstliche Intelligenz, maschinelles Lernen oder die automatisierte Erzeugung von Inhalten, Code, Text oder Entscheidungen einsetzen.',
        ],
      },
      {
        heading: 'Geltungsbereich',
        body: [
          'Diese Bedingungen gelten für jedes Angebot, jede Vereinbarung und jedes Projekt sowie für Folge- oder Zusatzarbeiten, sofern nicht ausdrücklich schriftlich etwas anderes vereinbart ist.',
          'Diese Bedingungen gehen etwaigen Einkaufs-, Beschaffungs- oder sonstigen allgemeinen Bedingungen des Kunden vor. Der Geltung der Bedingungen des Kunden wird ausdrücklich widersprochen, sofern wir sie nicht schriftlich anerkannt haben.',
          'Ist eine Bestimmung dieser Bedingungen unwirksam oder undurchsetzbar oder wird sie es, bleiben die übrigen Bestimmungen vollständig wirksam; die unwirksame Bestimmung wird durch eine wirksame ersetzt, die ihrem Zweck möglichst nahekommt.',
        ],
      },
      {
        heading: 'Angebote & Vorschläge',
        body: ['Sofern nicht anders angegeben:'],
        points: [
          'Angebote sind freibleibend und verpflichten das Studio erst, wenn beide Parteien sie angenommen haben.',
          'Ein Angebot gilt 30 Tage ab Datum; danach kann es geändert oder zurückgezogen werden.',
          'Preise können sich vor Annahme eines Angebots ändern — etwa durch Änderungen des Leistungsumfangs, Kosten Dritter oder Steuern.',
          'Alle Preise verstehen sich zuzüglich Umsatzsteuer und etwaiger Kosten Dritter, sofern nicht anders angegeben.',
          'Offensichtliche Irrtümer und Schreibfehler in einem Angebot binden das Studio nicht.',
        ],
      },
      {
        heading: 'Projektumfang',
        body: [
          'Das Studio erbringt die im angenommenen Angebot beschriebene Arbeit. Alles, was dort nicht ausdrücklich enthalten ist, liegt außerhalb des Umfangs.',
          'Arbeiten außerhalb des Umfangs — einschließlich zusätzlicher Funktionen, Integrationen oder Anforderungen — können zusätzliches Budget, eine geänderte Planung oder ein separates Angebot erfordern, bevor sie ausgeführt werden.',
        ],
      },
      {
        heading: 'Änderungswünsche',
        body: [
          'Wünscht der Kunde zusätzliche Funktionen, Überarbeitungen, neue Anforderungen oder geänderte Prioritäten, bewertet das Studio die Auswirkungen auf Umfang, Planung und Preis.',
          'Änderungen werden erst nach Einigung ausgeführt. Das Studio kann Zeitpläne und Honorare entsprechend anpassen und ist nicht verpflichtet, mit geänderten Arbeiten vor der Einigung zu beginnen.',
        ],
      },
      {
        heading: 'Mitwirkung des Kunden',
        body: [
          'Ein Projekt lebt von der Mitwirkung des Kunden. Der Kunde stellt Folgendes rechtzeitig und vollständig bereit. Vom Kunden verursachte Verzögerungen verlängern die Planung entsprechend; das Studio haftet nicht für daraus entstehende Verzögerungen oder Kosten:',
        ],
        points: [
          'zutreffende und vollständige Informationen;',
          'Inhalte, Assets, Markenmaterialien und Zugangsdaten;',
          'zeitnahes Feedback, Freigaben und Entscheidungen;',
          'eine oder mehrere entscheidungsbefugte Personen;',
          'das Testen und Prüfen von Leistungen auf Anfrage.',
        ],
      },
      {
        heading: 'Lieferung',
        body: [
          'Vom Studio genannte Termine oder Planungen sind Schätzungen und keine festen Fristen, sofern nicht ausdrücklich schriftlich eine feste Frist als solche vereinbart wurde („fatale termijn“).',
          'Angemessene Verzögerungen stellen keine Vertragsverletzung dar. Wird eine Verzögerung durch den Kunden oder durch Drittleistungen verursacht, verlängert sich der vereinbarte Zeitplan entsprechend.',
        ],
      },
      {
        heading: 'Abnahme',
        body: ['Sofern nicht anders vereinbart:'],
        points: [
          'Leistungen gelten als abgenommen, wenn der Kunde nicht innerhalb von zehn (10) Werktagen nach Lieferung schriftlich begründete Mängel meldet.',
          'Geringfügige Mängel, die die Nutzung nicht wesentlich beeinträchtigen, rechtfertigen keine Zurückweisung und werden im normalen Arbeitsablauf behoben.',
          'Die Inbetriebnahme einer Leistung oder ihr Einsatz in der Produktion gilt als Abnahme.',
        ],
      },
      {
        heading: 'Zahlungsbedingungen',
        body: ['Sofern im Angebot nicht anders vereinbart:'],
        points: [
          'Das Studio kann vor Arbeitsbeginn eine Anzahlung verlangen und nach Meilensteinen oder wiederkehrend (Retainer oder Abonnement) abrechnen.',
          'Rechnungen sind innerhalb von vierzehn (14) Tagen ab Rechnungsdatum zahlbar.',
          'Alle Beträge verstehen sich zuzüglich Umsatzsteuer, die gegebenenfalls berechnet wird.',
          'Wird eine Rechnung nicht fristgerecht bezahlt, befindet sich der Kunde ohne weitere Mahnung in Verzug, und ab Fälligkeit gelten die gesetzlichen (Handels-)Zinsen nach niederländischem Recht.',
          'Der Kunde schuldet alle angemessenen gerichtlichen und außergerichtlichen Inkassokosten, die zur Beitreibung überfälliger Beträge anfallen.',
          'Das Studio kann Arbeiten, Hosting, Wartung und Support aussetzen, solange Rechnungen offen sind.',
        ],
      },
      {
        heading: 'Aussetzung',
        body: [
          'Kommt der Kunde einer Zahlungs- oder anderen wesentlichen Pflicht nicht nach, kann das Studio seine Leistungen aussetzen — einschließlich Entwicklung, Hosting, Wartung und Support — bis der Kunde seine Pflichten erfüllt hat.',
          'Die Aussetzung befreit den Kunden nicht von seinen Zahlungspflichten, und das Studio haftet nicht für Schäden aus einer rechtmäßigen Aussetzung.',
        ],
      },
      {
        heading: 'Geistiges Eigentum',
        body: [
          'Mit vollständiger Zahlung aller für ein Projekt geschuldeten Beträge erhält der Kunde das Eigentum an den eigens für ihn erstellten Leistungen oder die ausdrücklich dafür vereinbarte Lizenz. Bis zur vollständigen Zahlung verbleiben alle Rechte beim Studio.',
          'Das Studio behält alle Rechte des geistigen Eigentums an allem, was keine eigens erstellte Leistung ist, einschließlich, aber nicht beschränkt auf Methodiken, interne Frameworks, wiederverwendbaren Code, Bibliotheken, SDKs, Vorlagen, Architektur, KI-Workflows, Automatisierungs-Frameworks, Entwicklungswerkzeuge, Know-how, Konzepte und bereits bestehende Software.',
          'Werden solche zurückbehaltenen Materialien in eine Leistung integriert, erhält der Kunde eine nicht ausschließliche, nicht übertragbare Lizenz, sie als Teil dieser Leistung zu nutzen, erwirbt daran jedoch kein Eigentum.',
          'Es steht dem Studio frei, das allgemeine Wissen, die Fähigkeiten, Techniken und Erfahrungen aus einem Projekt für andere Kunden und Zwecke zu nutzen.',
        ],
      },
      {
        heading: 'Open-Source-Software',
        body: [
          'Leistungen können Open-Source-Software enthalten, die unter ihren eigenen Lizenzbedingungen bereitgestellt wird. Diese Lizenzen regeln die Nutzung der Open-Source-Komponenten durch den Kunden; das Studio übernimmt dafür keine Gewährleistung oder Freistellung, die über diese Lizenzen hinausgeht.',
        ],
      },
      {
        heading: 'Drittleistungen',
        body: [
          'Projekte stützen sich häufig auf Drittleistungen wie Hosting, Cloud-Anbieter, Zahlungsdienstleister, KI-Anbieter, APIs und CMS-Plattformen. Für diese gelten deren eigene Bedingungen, die der Kunde, soweit einschlägig, akzeptiert.',
          'Soweit gesetzlich zulässig haftet das Studio nicht für Drittleistungen und übernimmt dafür keine Gewähr, einschließlich:',
        ],
        points: [
          'Ausfälle, Downtime oder verminderte Leistung;',
          'Preisänderungen oder eingestellte Dienste;',
          'Änderungen von Bedingungen, Richtlinien oder APIs;',
          'Sicherheitsvorfälle, Datenverlust oder Datenschutzverletzungen.',
        ],
      },
      {
        heading: 'KI-Dienste',
        body: [
          'KI-Dienste beruhen auf probabilistischen und statistischen Modellen. Ihre Ausgaben entstehen automatisiert und sind naturgemäß unsicher.',
          'Ausgaben von KI-Diensten können Ungenauigkeiten, erfundene („halluzinierte“) Informationen, unvollständige oder veraltete Informationen oder für einen bestimmten Zweck ungeeignete Ergebnisse enthalten.',
          'Der Kunde bleibt in vollem Umfang dafür verantwortlich, KI-generierte Ausgaben zu prüfen, zu validieren und freizugeben, bevor er sich darauf verlässt oder sie produktiv einsetzt, und dafür, dass ihre Nutzung geltendem Recht entspricht.',
          'Das Studio erbringt KI-Dienste nach bestem Bemühen und übernimmt keine Gewähr für Richtigkeit, Vollständigkeit, sachliche Korrektheit, Rechtskonformität, Eignung für einen Zweck oder geschäftliche Ergebnisse KI-generierter Ausgaben.',
        ],
      },
      {
        heading: 'Sicherheit',
        body: [
          'Das Studio trifft wirtschaftlich angemessene technische und organisatorische Maßnahmen, um die von ihm verarbeiteten Systeme und Daten zu schützen.',
          'Kein digitales System, keine Software und kein Onlinedienst kann jedoch als vollständig sicher garantiert werden. Soweit gesetzlich zulässig garantiert das Studio nichts und haftet nicht für Sicherheitsvorfälle außerhalb seines zumutbaren Einflussbereichs — darunter Cyberangriffe, Zero-Day-Schwachstellen, Phishing, Schadsoftware, Cloud- oder Hosting-Ausfälle sowie Internet- oder Netzwerkstörungen.',
        ],
      },
      {
        heading: 'Vertraulichkeit',
        body: [
          'Jede Partei behandelt die Vertraulichen Informationen der anderen vertraulich, nutzt sie nur für den Zweck des Projekts und schützt sie mit angemessener Sorgfalt.',
          'Dies gilt nicht für Informationen, die ohne Verstoß öffentlich sind oder werden, die eine Partei bereits rechtmäßig besaß oder die aufgrund von Gesetz, Verordnung oder gerichtlicher Anordnung offengelegt werden müssen — in diesem Fall informiert die offenlegende Partei, soweit zulässig, vorab.',
        ],
      },
      {
        heading: 'Datenschutz',
        body: [
          'Das Studio verarbeitet personenbezogene Daten gemäß seiner Datenschutzerklärung, die auf dieser Website verfügbar ist.',
          'Der Kunde ist und bleibt verantwortlich für die personenbezogenen Daten, die er bereitstellt oder über die Leistungen verarbeitet, einschließlich einer Rechtsgrundlage für diese Verarbeitung. Verarbeitet das Studio personenbezogene Daten im Auftrag des Kunden, schließen die Parteien, soweit erforderlich, einen gesonderten Auftragsverarbeitungsvertrag.',
        ],
      },
      {
        heading: 'Wartung & Support',
        body: ['Wartung und Support werden nur erbracht, wenn dies ausdrücklich vereinbart ist. Sofern nicht anders vereinbart:'],
        points: [
          'Enthalten: Fehlerbehebung gemessen an der vereinbarten Spezifikation, Monitoring und die in der Vereinbarung beschriebene Wartung.',
          'Nicht enthalten: neue Funktionen, Redesigns, neue Integrationen sowie Beratung oder Arbeiten außerhalb der Vereinbarung — diese werden gesondert angeboten.',
        ],
      },
      {
        heading: 'Gewährleistung',
        body: [
          'Das Studio erbringt seine Leistungen mit angemessener Sachkunde und Sorgfalt, und die Leistungen entsprechen zum Zeitpunkt der Lieferung im Wesentlichen der vereinbarten Spezifikation. Dies ist die ausschließliche Gewährleistung des Kunden.',
          'Soweit gesetzlich zulässig gibt das Studio keine weiteren Zusicherungen und garantiert nicht, dass Software unterbrechungs- oder fehlerfrei läuft, mit künftigen Systemen oder Änderungen Dritter kompatibel bleibt oder ein bestimmtes wirtschaftliches Ergebnis erzielt.',
        ],
      },
      {
        heading: 'Haftungsbeschränkung',
        body: [
          'Soweit nach geltendem Recht zulässig ist die Gesamthaftung des Studios aus oder im Zusammenhang mit einem Projekt auf den Betrag begrenzt, den der Kunde für dieses konkrete Projekt in den zwölf (12) Monaten vor dem haftungsauslösenden Ereignis gezahlt hat.',
          'Das Studio haftet nicht für mittelbare Schäden oder Folgeschäden, einschließlich entgangenen Gewinns, entgangener Umsätze, entgangener Geschäfte oder Chancen, Rufschädigung, Verlust oder Beschädigung von Daten, Downtime oder Betriebsunterbrechung.',
          'Eine Haftung des Studios entsteht nur, wenn der Kunde den Verzug schriftlich anzeigt, eine angemessene Frist zur Behebung setzt und das Studio dennoch nicht leistet — es sei denn, eine Behebung ist dauerhaft unmöglich.',
          'Nichts in diesen Bedingungen schließt eine Haftung aus oder begrenzt sie, die nach niederländischem Recht nicht ausgeschlossen oder begrenzt werden kann, einschließlich der Haftung für Vorsatz oder bewusste Leichtfertigkeit („opzet of bewuste roekeloosheid“) der Leitung des Studios.',
        ],
      },
      {
        heading: 'Freistellung',
        body: [
          'Der Kunde stellt das Studio von allen Ansprüchen Dritter, Schäden, Kosten und Aufwendungen (einschließlich angemessener Rechtsverfolgungskosten) frei, die entstehen aus oder zusammenhängen mit:',
        ],
        points: [
          'vom Kunden gelieferten Inhalten, Materialien oder Anweisungen;',
          'der Verletzung geistigen Eigentums oder anderer Rechte Dritter durch vom Kunden gelieferte Materialien;',
          'rechtswidrigen, rechtsverletzenden oder unsachgemäßen Anweisungen;',
          'dem Missbrauch der Leistungen oder einer anderen als der vorgesehenen Nutzung;',
          'rechtswidrigen Aktivitäten des Kunden oder Verstößen gegen geltendes Recht.',
        ],
      },
      {
        heading: 'Höhere Gewalt',
        body: [
          'Das Studio haftet nicht für Nichterfüllung oder Verzögerungen aufgrund von Umständen außerhalb seines zumutbaren Einflussbereichs („overmacht“), darunter Naturkatastrophen, extremes Wetter, Pandemien und Epidemien, Streiks, Krieg oder Unruhen, behördliche Maßnahmen, Internet- oder Telekommunikationsausfälle, Ausfälle von Cloud-, Hosting- oder anderen Lieferanten, Ausfälle von KI-Anbietern und Cyberangriffe.',
          'Während höherer Gewalt ruhen die Pflichten der Parteien. Dauert die Situation länger als sechzig (60) Tage, kann jede Partei die Vereinbarung für den betroffenen Teil schriftlich und ohne Haftung beenden; bereits erbrachte Arbeiten bleiben zahlbar.',
        ],
      },
      {
        heading: 'Beendigung',
        body: [
          'Jede Partei kann eine Vereinbarung mit angemessener schriftlicher Frist ordentlich beenden, vorbehaltlich einer für Retainer oder Abonnements vereinbarten Mindestlaufzeit.',
          'Jede Partei kann fristlos beenden, wenn die andere eine wesentliche Pflicht verletzt und dies nicht innerhalb angemessener Frist nach schriftlicher Aufforderung behebt, oder bei Insolvenz, Zahlungsaufschub oder Zahlungsunfähigkeit der anderen Partei.',
          'Bei Beendigung bezahlt der Kunde alle bis zum Wirksamkeitsdatum erbrachten Arbeiten und eingegangenen Kosten. Bestimmungen, die ihrer Natur nach fortgelten sollen — darunter geistiges Eigentum, Vertraulichkeit, Haftung und anwendbares Recht — bleiben in Kraft.',
        ],
      },
      {
        heading: 'Portfoliorechte',
        body: [
          'Sofern nicht ausdrücklich schriftlich anders vereinbart, darf das Studio den Kunden nennen und abgeschlossene, öffentlich veröffentlichte Arbeiten zeigen — einschließlich Screenshots, Beschreibungen sowie Name und Logo des Kunden — in seinem Portfolio, auf seiner Website und in Marketingmaterialien, unter Wahrung Vertraulicher Informationen.',
        ],
      },
      {
        heading: 'Abwerbeverbot',
        body: [
          'Während eines Projekts und für zwölf (12) Monate nach dessen Abschluss wird der Kunde ohne vorherige schriftliche Zustimmung des Studios keine am Projekt beteiligten Mitarbeitenden, Auftragnehmer oder Freelancer des Studios unmittelbar oder mittelbar abwerben, einstellen oder beauftragen.',
        ],
      },
      {
        heading: 'Nutzung der eigenen Apps des Studios',
        body: [
          'Neben der Kundenarbeit betreibt das Studio eigene Apps — derzeit Tododo, eine Todo-App für iPhone und Mac. Dieser Abschnitt und die folgenden gelten für Sie als Nutzerin oder Nutzer dieser Apps, unabhängig davon, ob Sie auch Kunde sind. Weichen sie von den kundenbezogenen Abschnitten oben ab, gehen diese Abschnitte für Ihre Nutzung der Apps vor.',
          'Tododo wird kostenlos und für den persönlichen Gebrauch bereitgestellt. Die Nutzung erfordert ein Konto, und mit dessen Anlage akzeptieren Sie diese Bedingungen. Wie die Apps mit Ihren personenbezogenen Daten umgehen, steht in unserer Datenschutzerklärung.',
        ],
      },
      {
        heading: 'Ihr App-Konto',
        body: [
          'Sie müssen in der Lage sein, einen verbindlichen Vertrag zu schließen, um ein Konto anzulegen. Liegt Ihr Alter unter der Altersgrenze, ab der Sie in Ihrem Land selbst in Onlinedienste einwilligen dürfen, fragen Sie zuerst einen Elternteil oder Erziehungsberechtigten.',
        ],
        points: [
          'Verwenden Sie eine E-Mail-Adresse, über die Sie tatsächlich verfügen, und halten Sie sie aktuell.',
          'Halten Sie Ihr Passwort — oder das Google- oder Apple-Konto, mit dem Sie sich anmelden — sicher. Aktivitäten über Ihr Konto liegen in Ihrer Verantwortung.',
          'Ein Konto ist für eine Person. Teilen Sie Ihre Zugangsdaten nicht und lassen Sie niemanden sonst Ihr Konto nutzen.',
          'Schreiben Sie an hello@raoul.studio, wenn Sie vermuten, dass jemand anderes Zugriff auf Ihr Konto erlangt hat.',
        ],
      },
      {
        heading: 'Zulässige Nutzung der Apps',
        body: ['Bei der Nutzung der Apps verpflichten Sie sich, nicht:'],
        points: [
          'gegen das Gesetz zu verstoßen oder rechtswidrige Inhalte zu speichern;',
          'zu versuchen, auf Konto, Daten oder Inhalte einer anderen Person zuzugreifen;',
          'die Apps oder ihre API zu untersuchen, zu scannen, zu überlasten oder zu stören oder gesetzte Limits zu umgehen;',
          'den Dienst zurückzuentwickeln oder zu kopieren, außer wo das Gesetz dies ausdrücklich erlaubt;',
          'die Apps zum Versand von Spam oder Schadsoftware oder zur Erzeugung automatisierten Massenverkehrs zu nutzen.',
        ],
      },
      {
        heading: 'Ihre Inhalte in den Apps',
        body: [
          'Ihre Listen und Aufgaben gehören Ihnen. Sie behalten alle Rechte daran, die Sie bereits haben, und das Studio beansprucht daran kein Eigentum.',
          'Sie räumen dem Studio nur die Erlaubnis ein, die es zum Betrieb des Dienstes braucht: Ihre Inhalte zu speichern und sie an Ihre eigenen Geräte zu übertragen und dort anzuzeigen. Nichts darüber hinaus. Wir nutzen Ihre Inhalte nicht für Werbung und nicht zum Training von KI-Modellen.',
          'Sie sind für das verantwortlich, was Sie in die Apps eingeben. Bewahren Sie eine eigene Kopie von allem auf, dessen Verlust Sie sich nicht leisten können — die Apps sind eine Aufgabenliste, kein Backup-Dienst.',
        ],
      },
      {
        heading: 'Verfügbarkeit der Apps',
        body: [
          'Die Apps werden „wie besehen“ und „wie verfügbar“ bereitgestellt, ohne jegliche Gewährleistung. Das Studio sagt keine bestimmte Verfügbarkeit zu und kann Funktionen jederzeit ändern, aussetzen oder einstellen.',
          'Entscheidet sich das Studio, eine App ganz einzustellen, kündigt es dies mit angemessenem Vorlauf per E-Mail an die Adresse Ihres Kontos an und gibt Ihnen eine angemessene Gelegenheit, Ihre Inhalte zu sichern, sofern die Umstände dies nicht wirklich verhindern.',
        ],
      },
      {
        heading: 'Sperrung und Beendigung Ihrer Nutzung',
        body: [
          'Sie können die Nutzung einer App jederzeit beenden und Ihr Konto samt allen Inhalten über das ⋯-Menü in der App löschen oder per E-Mail an hello@raoul.studio von der Adresse des Kontos aus. Die Löschung ist endgültig und kann nicht rückgängig gemacht werden.',
          'Das Studio kann ein Konto sperren oder schließen, das gegen diese Bedingungen verstößt, rechtswidrig genutzt wird oder den Dienst oder andere Nutzende gefährdet. Wo dies angemessen ist, nennen wir den Grund und geben Ihnen zuvor Gelegenheit zur Abhilfe.',
        ],
      },
      {
        heading: 'Haftung für die Apps',
        body: [
          'Die Apps sind kostenlose Software für den persönlichen Gebrauch. Soweit gesetzlich zulässig haftet das Studio nicht für verlorene oder beschädigte Inhalte, Downtime, unbefugten Zugriff oder mittelbare Schäden und Folgeschäden aus Ihrer Nutzung — oder der Unmöglichkeit der Nutzung — der Apps.',
          'Nichts in diesem Abschnitt beschränkt eine Haftung, die gesetzlich nicht ausgeschlossen werden kann, einschließlich der Haftung für Vorsatz oder grobe Fahrlässigkeit, oder zwingende Rechte, die Ihnen als Verbraucherin oder Verbraucher zustehen.',
        ],
      },
      {
        heading: 'Anwendbares Recht & Streitigkeiten',
        body: [
          'Auf diese Bedingungen und jede Vereinbarung ist ausschließlich niederländisches Recht anwendbar. Die Anwendung des UN-Kaufrechts (CISG) ist ausgeschlossen.',
          'Streitigkeiten, die nicht einvernehmlich beigelegt werden können, werden ausschließlich dem zuständigen Gericht der Rechtbank Rotterdam, Niederlande, vorgelegt, sofern zwingendes Recht nichts anderes bestimmt.',
          'Nutzen Sie die Apps als Verbraucherin oder Verbraucher, nimmt Ihnen dies weder den Schutz des zwingenden Verbraucherrechts Ihres Wohnsitzlandes noch das Recht, dessen Gerichte anzurufen.',
        ],
      },
      {
        heading: 'Sprache dieser Bedingungen',
        body: [
          'Diese Bedingungen liegen in mehreren Sprachen vor. Die englische Fassung ist die verbindliche; weicht eine Übersetzung davon ab, geht der englische Text vor.',
        ],
      },
      {
        heading: 'Änderungen dieser Bedingungen',
        body: [
          'Das Studio kann diese Bedingungen von Zeit zu Zeit aktualisieren. Für ein Projekt gilt die bei Projektbeginn geltende Fassung. Wenn wir diese Bedingungen aktualisieren, aktualisieren wir das Datum oben auf dieser Seite.',
        ],
      },
    ],
    directLabel: 'Fragen zu diesen Bedingungen',
    directEmail: 'hello@raoul.studio',
    posterRailMiddle: 'AGB · Rechtliches',
  },
}
