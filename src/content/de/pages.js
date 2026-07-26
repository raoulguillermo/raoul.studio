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
        'Wie raoul.studio mit personenbezogenen Daten umgeht: was wir über das Kontaktformular erheben, warum, wer sie verarbeitet, wie lange wir sie speichern und Ihre Rechte nach der DSGVO.',
    },
    eyebrow: 'Rechtliches',
    titleLine1: 'Datenschutz',
    titleAccent: '.',
    updated: 'Zuletzt aktualisiert — Juni 2026',
    intro:
      'Diese Richtlinie erklärt, welche personenbezogenen Daten raoul.studio erhebt, warum wir sie erheben und welche Rechte Sie daran haben. Wir halten die Datenerhebung auf das Minimum, das nötig ist, um das Studio zu betreiben und denjenigen zu antworten, die uns kontaktieren.',
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
          'Unsere eigenen Server — die Website wird auf von uns verwalteter Infrastruktur gehostet, und Kontaktanfragen werden dort in unserer Datenbank gespeichert.',
        ],
      },
      {
        heading: 'Internationale Übermittlungen',
        body: [
          'SendGrid (Twilio) ist ein US-Unternehmen, daher kann der Versand einer Kontakt-E-Mail eine Übermittlung Ihrer Daten außerhalb der EU bedeuten. Wo das geschieht, ist es durch geeignete Garantien wie die Standardvertragsklauseln der Europäischen Kommission abgesichert.',
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
}
