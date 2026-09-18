// Page services — ce que fait le studio, avec les structures d’agents en tête.
// Aucun nom de client ni de fournisseur sur cette page.

export const services = {
  meta: {
    title: 'Services — structures d’agents IA, logiciels et produits numériques',
    description:
      'Ce que fait raoul.studio : des structures complètes d’agents IA qui gèrent le quotidien d’une entreprise, des logiciels et plateformes sur mesure, de l’automatisation, du commerce, de la marque et des partenariats produit sur le long terme.',
  },
  eyebrow: 'Services',
  titleLine1: 'Services',
  titleAccent: '.',
  lead: 'Le studio conçoit, construit et fait tourner les systèmes sur lesquels repose une entreprise — d’un simple outil à une équipe complète d’agents IA qui gère le quotidien à votre place.',

  agents: {
    label: '01 — Structures d’agents IA',
    heading: 'Une équipe d’agents IA qui fait tourner votre entreprise avec vous.',
    intro: [
      'Pas un chatbot sur votre site. Le studio construit une structure complète d’agents IA, chacun avec son propre rôle — répondre au téléphone, traiter les e-mails, prendre les commandes, planifier, facturer, relancer, faire le reporting — qui travaillent ensemble comme une équipe bien rodée.',
      'Chaque agent est connecté aux systèmes que vous utilisez déjà, sait exactement ce qu’il peut faire ou non, et passe la main à une personne quand c’est la meilleure réponse. Les décisions restent les vôtres. Les agents s’occupent du reste, jour et nuit.',
    ],
    diagram: {
      owner: 'Vous',
      ownerNote: 'Fixez les objectifs · validez ce qui compte',
      orchestrator: 'Coordinateur',
      orchestratorNote: 'Répartit le travail · vérifie · fait remonter',
      teams: [
        { name: 'Front office', agents: ['Téléphone', 'E-mail', 'WhatsApp et chat'] },
        { name: 'Opérations', agents: ['Commandes', 'Planning', 'Relances'] },
        { name: 'Back office', agents: ['Facturation', 'Reporting', 'Administratif'] },
      ],
      systems: 'Vos systèmes',
      systemsNote: 'CRM · agenda · boutique en ligne · ERP · comptabilité · boîte mail',
      caption: 'Une structure d’agents',
    },
    stepsLabel: 'Comment le studio la met en place',
    steps: [
      {
        title: 'Cartographier l’entreprise',
        body: 'Le studio s’assoit avec vous et cartographie la façon dont le travail circule vraiment : quelles demandes arrivent, quelles tâches se répètent, quelles décisions exigent une personne, et où se perdent le temps et l’argent.',
      },
      {
        title: 'Concevoir la structure',
        body: 'Le travail est découpé en rôles — un agent par tâche — avec un coordinateur au-dessus. Pour chaque rôle, on définit ce que l’agent peut consulter, ce qu’il peut modifier et quand il doit d’abord vous demander.',
      },
      {
        title: 'Connecter vos systèmes',
        body: 'Les agents sont branchés sur les outils avec lesquels vous travaillez déjà : CRM, agenda, boutique en ligne, caisse, comptabilité, e-mail et téléphone. Quand un système n’a pas encore de connexion, le studio la construit — ou construit le système lui-même.',
      },
      {
        title: 'Tourner aux côtés de votre équipe',
        body: 'Avant toute mise en ligne, les agents fonctionnent à côté de votre équipe : ils proposent au lieu d’agir, pour que vous puissiez vérifier leur travail. Seul ce qui s’avère fiable est activé.',
      },
      {
        title: 'Passer la main, puis améliorer',
        body: 'Une fois en ligne, le studio continue de suivre, d’ajuster et d’étendre la structure — un nouvel agent pour une nouvelle tâche, une nouvelle connexion quand votre entreprise évolue.',
      },
    ],
    guardrailsLabel: 'Vous gardez le contrôle',
    guardrails: [
      {
        title: 'Des droits clairs',
        body: 'Chaque agent n’accède qu’à ce dont son rôle a besoin. Un agent qui prend les commandes ne peut pas effectuer de remboursement.',
      },
      {
        title: 'Confirmation intégrée',
        body: 'Tout ce qui compte est confirmé avant d’être fait — et cette vérification est imposée par le système, pas laissée à l’IA.',
      },
      {
        title: 'Une personne quand ça compte',
        body: 'Les agents savent quand s’arrêter et transmettre le travail à vous ou à votre équipe, avec tout ce qu’il faut pour le reprendre.',
      },
      {
        title: 'Tout est tracé',
        body: 'Chaque appel, message et action est enregistré : vous pouvez toujours voir ce qui s’est passé et pourquoi.',
      },
    ],
  },

  offer: {
    label: '02 — Tout ce qui l’entoure',
    lead: 'Des agents ne valent que les systèmes sur lesquels ils reposent. Le studio construit aussi ceux-là.',
    items: [
      {
        title: 'Logiciels et plateformes sur mesure',
        body: 'Plateformes SaaS, portails, marketplaces et outils internes — conçus, construits et exploités en production.',
      },
      {
        title: 'Automatisation et intégrations',
        body: 'Relier les outils qu’une entreprise utilise déjà, pour que les données circulent d’elles-mêmes au lieu d’être recopiées à la main.',
      },
      {
        title: 'Outils IA',
        body: 'Analyse de documents, recherche, IA respectueuse de la vie privée qui tourne sur votre propre matériel, et assistants intégrés à votre façon de travailler.',
      },
      {
        title: 'Commerce',
        body: 'Boutiques en ligne à grande échelle, storefronts headless, gestion des produits et des stocks, et les back offices qui les font tourner.',
      },
      {
        title: 'Marque et sites web',
        body: 'Identité, sites web et expériences numériques — le produit et la marque autour, conçus ensemble.',
      },
      {
        title: 'Infrastructure et croissance',
        body: 'Hébergement, sécurité, performance et développement continu bien après le lancement.',
      },
    ],
  },

  faq: {
    label: 'FAQ',
    items: [
      {
        q: 'Des agents IA peuvent-ils vraiment faire tourner une entreprise ?',
        a: 'Ils peuvent prendre en charge une grande partie du quotidien : répondre aux clients, traiter les commandes et les réservations, relancer, préparer factures et rapports. Les décisions importantes restent les vôtres — la structure est conçue pour que les agents fassent le travail et que vous validiez ce qui compte.',
      },
      {
        q: 'Dois-je remplacer mes logiciels actuels ?',
        a: 'Non. Les agents sont connectés aux systèmes que vous utilisez déjà. Le studio ne construit du neuf que là où quelque chose manque ou vous freine.',
      },
      {
        q: 'Par où commencer ?',
        a: 'En général par la tâche qui coûte le plus de temps ou fait perdre le plus d’argent — souvent le téléphone ou la boîte mail. Un premier agent est mis en ligne, puis la structure grandit à partir de là.',
      },
      {
        q: 'Et si un agent se trompe ?',
        a: 'Les agents n’agissent que dans le cadre des droits qui leur sont donnés, les actions importantes doivent être confirmées et tout est tracé. Quand un agent a un doute, il passe la main à une personne au lieu de deviner.',
      },
      {
        q: 'Combien ça coûte ?',
        a: 'Cela dépend du nombre d’agents, des systèmes à connecter et de la part de sur-mesure. Après un premier échange, vous recevez une proposition claire avec un périmètre fixe.',
      },
    ],
  },

  cta: {
    heading: 'Que confieriez-vous en premier ?',
    body: 'Dites au studio comment votre entreprise fonctionne aujourd’hui. Vous recevrez une réponse sous 24 heures.',
    label: 'On en parle',
    href: '/contact',
  },
  posterRailMiddle: 'Services · Agents, logiciels et produits',
}
