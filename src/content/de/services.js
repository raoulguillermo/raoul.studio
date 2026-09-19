// Leistungsseite — was das Studio macht, mit den Agentenstrukturen vorne.
// Keine Kunden- oder Anbieternamen auf dieser Seite.

export const services = {
  meta: {
    title: 'Leistungen — KI-Agentenstrukturen, Software & digitale Produkte',
    description:
      'Was raoul.studio macht: komplette Strukturen aus KI-Agenten, die das Tagesgeschäft eines Unternehmens erledigen, individuelle Software und Plattformen, Automatisierung, Commerce, Marke und langfristige Produktpartnerschaften.',
  },
  eyebrow: 'Leistungen',
  titleLine1: 'Leistungen',
  titleAccent: '.',
  lead: 'Das Studio entwirft, baut und betreibt die Systeme, auf denen ein Unternehmen läuft — von einem einzelnen Tool bis zu einem kompletten Team aus KI-Agenten, das das Tagesgeschäft für Sie erledigt.',

  agents: {
    label: '01 — KI-Agentenstrukturen',
    heading: 'Ein Team aus KI-Agenten, das Ihr Unternehmen mit Ihnen führt.',
    intro: [
      'Kein Chatbot auf Ihrer Website. Das Studio baut eine komplette Struktur aus KI-Agenten, jeder mit einer eigenen Aufgabe — Telefon annehmen, E-Mails bearbeiten, Bestellungen abwickeln, planen, fakturieren, nachfassen, berichten — die zusammenarbeiten wie ein eingespieltes Team.',
      'Jeder Agent ist mit den Systemen verbunden, die Sie bereits nutzen, weiß genau, was er darf und was nicht, und übergibt an einen Menschen, wenn das die bessere Antwort ist. Die Entscheidungen bleiben bei Ihnen. Den Rest erledigen die Agenten, Tag und Nacht.',
    ],
    diagram: {
      owner: 'Sie',
      ownerNote: 'Setzen die Ziele · geben frei, was zählt',
      orchestrator: 'Koordinator',
      orchestratorNote: 'Verteilt die Arbeit · prüft Ergebnisse · eskaliert',
      teams: [
        { name: 'Front Office', agents: ['Telefon', 'E-Mail', 'WhatsApp & Chat'] },
        { name: 'Betrieb', agents: ['Bestellungen', 'Planung', 'Nachfassen'] },
        { name: 'Back Office', agents: ['Rechnungen', 'Berichte', 'Verwaltung'] },
      ],
      systems: 'Ihre Systeme',
      systemsNote: 'CRM · Kalender · Webshop · ERP · Buchhaltung · Posteingang',
      caption: 'Eine Agentenstruktur',
    },
    stepsLabel: 'So richtet das Studio es ein',
    steps: [
      {
        title: 'Das Unternehmen erfassen',
        body: 'Das Studio setzt sich mit Ihnen zusammen und erfasst, wie die Arbeit tatsächlich läuft: welche Anfragen eingehen, welche Aufgaben sich wiederholen, welche Entscheidungen einen Menschen brauchen und wo Zeit und Geld verloren gehen.',
      },
      {
        title: 'Die Struktur entwerfen',
        body: 'Die Arbeit wird in Rollen aufgeteilt — ein Agent pro Aufgabe — mit einem Koordinator darüber. Für jede Rolle wird festgelegt, was der Agent einsehen darf, was er ändern darf und wann er Sie zuerst fragen muss.',
      },
      {
        title: 'Ihre Systeme anbinden',
        body: 'Die Agenten werden an die Tools angebunden, mit denen Sie bereits arbeiten: CRM, Kalender, Webshop, Kasse, Buchhaltung, E-Mail und Telefon. Fehlt einem System noch eine Schnittstelle, baut das Studio sie — oder gleich das System selbst.',
      },
      {
        title: 'An echter Arbeit testen',
        body: 'Ein Agent wird an der echten Arbeit getestet, die er übernehmen soll, und Sie sehen seine Ergebnisse, bevor er selbstständig handeln darf.',
      },
      {
        title: 'Übergeben und weiter verbessern',
        body: 'Nach dem Start beobachtet, justiert und erweitert das Studio die Struktur weiter — ein neuer Agent für eine neue Aufgabe, eine neue Anbindung, wenn sich Ihr Unternehmen verändert.',
      },
    ],
    guardrailsLabel: 'Sie behalten die Kontrolle',
    guardrails: [
      {
        title: 'Klare Befugnisse',
        body: 'Jeder Agent kommt nur an das, was seine Aufgabe erfordert. Ein Agent, der Bestellungen aufnimmt, kann keine Erstattungen auslösen.',
      },
      {
        title: 'Bestätigung eingebaut',
        body: 'Alles, was zählt, wird vorher bestätigt — und diese Prüfung erzwingt das System, sie wird nicht der KI überlassen.',
      },
      {
        title: 'Ein Mensch, wenn es darauf ankommt',
        body: 'Agenten wissen, wann sie anhalten und die Arbeit an Sie oder Ihr Team übergeben müssen — mit allem, was nötig ist, um sie aufzugreifen.',
      },
      {
        title: 'Alles protokolliert',
        body: 'Jeder Anruf, jede Nachricht und jede Aktion wird festgehalten, sodass Sie jederzeit sehen, was passiert ist und warum.',
      },
    ],
  },

  offer: {
    label: '02 — Alles drumherum',
    lead: 'Agenten sind nur so gut wie die Systeme darunter. Die baut das Studio ebenfalls.',
    items: [
      {
        title: 'Individuelle Software & Plattformen',
        body: 'SaaS-Plattformen, Portale, Marktplätze und interne Tools — entworfen, gebaut und im Produktivbetrieb betreut.',
      },
      {
        title: 'Automatisierung & Integrationen',
        body: 'Die Tools, die ein Unternehmen bereits nutzt, miteinander verbinden, damit Daten von selbst fließen, statt von Hand übertragen zu werden.',
      },
      {
        title: 'KI-Tools',
        body: 'Dokumentenanalyse, Suche, datenschutzsichere KI auf Ihrer eigenen Hardware und Assistenten, die in Ihre Arbeitsabläufe eingebaut sind.',
      },
      {
        title: 'Commerce',
        body: 'Webshops im großen Maßstab, Headless-Storefronts, Produkt- und Bestandsverwaltung und die Back Offices dahinter.',
      },
      {
        title: 'Marke & Websites',
        body: 'Identität, Websites und digitale Erlebnisse — das Produkt und die Marke darum herum, gemeinsam gestaltet.',
      },
      {
        title: 'Infrastruktur & Wachstum',
        body: 'Hosting, Sicherheit, Performance und kontinuierliche Weiterentwicklung, lange nach dem Launch.',
      },
    ],
  },

  faq: {
    label: 'FAQ',
    items: [
      {
        q: 'Können KI-Agenten wirklich ein Unternehmen führen?',
        a: 'Sie können einen großen Teil des Tagesgeschäfts übernehmen: Kunden antworten, Bestellungen und Buchungen abwickeln, nachfassen, Rechnungen und Berichte vorbereiten. Entscheidungen, die zählen, bleiben bei Ihnen — die Struktur ist so gebaut, dass die Agenten die Arbeit machen und Sie freigeben, was zählt.',
      },
      {
        q: 'Muss ich meine bestehende Software ersetzen?',
        a: 'Nein. Die Agenten werden an die Systeme angebunden, die Sie bereits nutzen. Nur wo etwas fehlt oder Sie ausbremst, baut das Studio etwas Neues.',
      },
      {
        q: 'Wo fange ich an?',
        a: 'Meist bei der einen Aufgabe, die am meisten Zeit kostet oder am meisten Geld liegen lässt — oft das Telefon oder der Posteingang. Ein Agent geht zuerst live, und von dort wächst die Struktur weiter.',
      },
      {
        q: 'Was, wenn ein Agent etwas falsch macht?',
        a: 'Agenten handeln nur innerhalb der Befugnisse, die sie erhalten, wichtige Aktionen müssen bestätigt werden, und alles wird protokolliert. Ist sich ein Agent unsicher, übergibt er an einen Menschen, statt zu raten.',
      },
      {
        q: 'Was kostet das?',
        a: 'Das hängt davon ab, wie viele Agenten es sind, mit welchen Systemen sie verbunden werden und wie viel individuell gebaut wird. Sagen Sie dem Studio, was Ihnen vorschwebt, und Sie bekommen eine Antwort für Ihre Situation.',
      },
    ],
  },

  cta: {
    heading: 'Was würden Sie als Erstes abgeben?',
    body: 'Erzählen Sie dem Studio, wie Ihr Unternehmen heute läuft. Sie erhalten innerhalb von 24 Stunden eine Antwort.',
    label: 'Reden wir',
    href: '/contact',
  },
  posterRailMiddle: 'Leistungen · Agenten, Software & Produkte',
}
