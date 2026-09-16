// Français — overrides par slug des champs traduisibles de chaque projet.
// Les champs non inclus sont hérités de la structure de base en anglais.
export const projectOverrides = {
  outdoorxl: {
    shortTag: 'e-commerce, échelle',
    shortDescription:
      'E-commerce Magento à grande échelle — plus de 200,000 produits sur 14+ langues et sites, en cours de migration vers le headless.',
    lead:
      'Une plateforme e-commerce de 200,000 produits sur 14 marchés — et une refonte en cours de Magento vers le headless.',
    tagsLine: 'E-commerce · Magento · Headless · Next.js · GraphQL',
    status: 'en cours',
    info: [
      { label: 'Rôle', value: 'Développeur principal et architecte logiciel' },
      { label: 'Stack', value: 'Magento, Varnish, PHP, MySQL → Next.js, MongoDB, Payload, GraphQL + REST' },
      { label: 'Portée', value: 'Plus de 200,000 produits · 14+ langues et sites' },
    ],
    body: [
      {
        text: 'OutdoorXL tourne à grande échelle : plus de 200,000 produits sur 14+ langues et boutiques, servis vite avec Magento et Varnish. Le studio mène le développement et possède l’architecture qui le sous-tend.',
      },
      {
        text: 'Le studio le reconstruit aujourd’hui en headless : Next.js et MongoDB en façade, le back-end Magento 2 derrière une couche GraphQL et REST, avec des modules sur mesure pour relier les deux et Payload CMS pour le contenu.',
      },
      {
        text: 'L’objectif : garder le catalogue et les marchés, lâcher le poids du legacy. Une boutique plus rapide et une base de code prête pour la prochaine décennie.',
      },
    ],
  },

  aboutspace: {
    shortTag: 'place de marché, paiements',
    shortDescription:
      'Une place de marché à deux faces pour publier, louer et réserver des espaces créatifs et commerciaux, avec chat, portefeuille et paiements entre particuliers intégrés.',
    lead:
      'Une place de marché à deux faces pour les espaces créatifs et commerciaux : publiez-le, louez-le, réservez-le et payez-le, le tout au même endroit.',
    tagsLine: 'Place de marché · Next.js · Node.js · Stripe Connect · MongoDB',
    status: 'lancement',
    info: [
      { label: 'Rôle', value: 'Développement et conception du concept' },
      { label: 'Stack', value: 'Next.js, API REST en Node.js, MongoDB, Stripe' },
      { label: 'Statut', value: 'En cours de lancement' },
    ],
    body: [
      {
        text: 'AboutSpace relie celles et ceux qui ont de l’espace à celles et ceux qui en cherchent : une place de marché pour publier, louer et réserver des lieux créatifs et commerciaux. Construit avec la responsable de projet Jette Schneider (Timewindow).',
      },
      {
        text: 'La plateforme ne gêne pas. Le chat intégré garde les conversations au même endroit, et les paiements directs entre particuliers (Stripe Connect) permettent de transiger sans intermédiaire, avec un portefeuille intégré et des formules d’abonnement qui font le reste.',
      },
      {
        text: 'Headless de fond en comble — Next.js, une API REST en Node.js et MongoDB — pensé pour gérer les deux faces d’une place de marché dès le premier jour. En cours de lancement.',
      },
    ],
  },

  threadly: {
    shortTag: 'saas, support',
    shortDescription:
      'Le SaaS maison du studio : un système de tickets de support pour les équipes de support, les agences et les indépendants. Boîte de réception partagée, suivi des SLA, automatisation.',
    lead:
      'Un support qui ne passe pas entre les mailles : un système de tickets pour les équipes, les agences et les indépendants.',
    tagsLine: 'SaaS · Support · Next.js · Node.js · MongoDB',
    status: 'en production',
    info: [
      { label: 'Rôle', value: 'Développement et architecture en solo' },
      { label: 'Stack', value: 'Next.js, MongoDB, API REST en Node.js' },
      { label: 'Statut', value: 'En production — produit maison' },
    ],
    body: [
      {
        text: 'Threadly est le SaaS maison de raoul.studio : un système de tickets de support conçu pour les équipes de support, les agences et les indépendants qui doivent rester maîtres de chaque conversation.',
      },
      {
        text: 'Une boîte de réception partagée réunit tous les canaux au même endroit, le suivi des SLA garde les délais de réponse honnêtes, et l’automatisation se charge du travail répétitif pour que l’équipe se concentre sur les réponses qui comptent.',
      },
      { text: 'Conçu, construit et architecturé en interne. Le studio l’utilise aussi.' },
    ],
  },

  lexpert: {
    shortTag: 'crm, juridique',
    shortDescription:
      'Un CRM sur mesure pour un cabinet d’avocats : clients, facturation directe, métriques et accès par rôles, ajusté au flux de travail exact du cabinet.',
    lead: 'Un CRM complet et sur mesure pour un cabinet d’avocats, construit autour du fonctionnement réel de la pratique.',
    tagsLine: 'CRM · Juridique · Facturation · Next.js · MongoDB',
    status: 'en production',
    info: [
      { label: 'Rôle', value: 'Développeur en solo et architecte principal' },
      { label: 'Stack', value: 'Next.js, MongoDB, Node.js' },
      { label: 'Client', value: 'Lexpert Advocaten' },
    ],
    body: [
      {
        text: 'Lexpert Advocaten avait besoin d’un CRM façonné autour de la pratique juridique, pas d’un outil générique forcé à entrer dans le moule. Le studio en a donc construit un : il gère les clients et les relations, les facture directement et suit les métriques qui font tourner le cabinet.',
      },
      {
        text: 'Les droits d’accès par rôles gardent la bonne information entre les bonnes mains, et tout le système a été construit selon la direction du cabinet, de la première décision à la dernière.',
      },
      {
        text: 'Un outil interne propre et à usage unique, comme le logiciel sur étagère ne parvient jamais tout à fait à le devenir.',
      },
    ],
  },

  fndracer: {
    shortTag: 'ia, financement',
    shortDescription:
      'Un outil d’IA pour les demandes de financement : il explore les sources de financement, les met en correspondance avec une entreprise et rédige une demande complète en environ cinq minutes.',
    lead: 'De « quels financements existent ? » à un premier brouillon complet de demande en environ cinq minutes.',
    tagsLine: 'IA · Financement · Next.js · OpenAI · MongoDB',
    status: 'en développement',
    info: [
      { label: 'Rôle', value: 'Développement et architecture en solo' },
      { label: 'Stack', value: 'Next.js, MongoDB, OpenAI' },
      { label: 'Statut', value: 'En développement' },
    ],
    body: [
      {
        text: 'Les demandes de financement sont lentes, éparpillées et faciles à rater. FndRacer en retire la corvée : il explore les sources de financement, met les bonnes en correspondance avec une entreprise et utilise l’IA pour rédiger la demande.',
      },
      {
        text: 'Tout le processus se règle en environ cinq minutes : un premier brouillon complet, prêt à être peaufiné au lieu d’une page blanche à remplir.',
      },
      { text: 'En développement en ce moment.' },
    ],
  },

  'smart-dossier': {
    shortTag: 'ia, documents',
    shortDescription:
      'Un système d’IA pour les dossiers documentaires : recherche en texte intégral à l’intérieur des documents et restructuration automatique de grands ensembles de documents.',
    lead:
      'Cherchez à l’intérieur des documents, pas seulement dans leurs titres, et laissez l’IA réordonner la pile pendant qu’elle y est.',
    tagsLine: 'IA · Documents · Recherche · Next.js · MongoDB',
    status: 'en développement',
    info: [
      { label: 'Rôle', value: 'Développeur et architecte en solo' },
      { label: 'Stack', value: 'PHP/MySQL → Next.js, MongoDB, Node.js + IA' },
      { label: 'Client', value: 'Vastgoedkor' },
    ],
    body: [
      {
        text: 'Smart Dossier a débuté en 2016 comme un système documentaire en PHP/MySQL pour Vastgoedkor. En 2026, le studio l’a reconstruit en quelque chose de plus intelligent.',
      },
      {
        text: 'Il recherche le texte intégral à l’intérieur des documents, pas seulement les noms de fichiers, et restructure automatiquement de grands ensembles de documents désordonnés en quelque chose que l’on peut réellement parcourir. L’IA fait le gros du travail sur la recherche et la structuration des données.',
      },
      {
        text: 'Un outil vieux d’une décennie, reconstruit pour la façon dont on travaille les documents aujourd’hui. En développement.',
      },
    ],
  },

  aboutdesk: {
    shortTag: 'réservation, équipes',
    shortDescription:
      'Une appli de réservation de bureaux pour les équipes : les organisations cartographient leur bâtiment et leurs étages, et les équipes réservent des bureaux dans une salle pour s’asseoir et travailler ensemble.',
    lead: 'Une réservation de bureaux qui garde les équipes ensemble, pas seulement assises.',
    tagsLine: 'Réservation · Équipes · Next.js · Node.js · MongoDB',
    status: 'en développement',
    info: [
      { label: 'Rôle', value: 'Développement et architecture en solo' },
      { label: 'Stack', value: 'Next.js, MongoDB, Node.js' },
      { label: 'Statut', value: 'En cours' },
    ],
    body: [
      {
        text: 'AboutDesk est une appli de réservation de bureaux pensée autour des équipes, pas seulement des places. Une organisation cartographie son bâtiment et ses étages, et les équipes réservent leurs bureaux au sein d’une salle, pour que celles et ceux qui travaillent ensemble s’assoient ensemble.',
      },
      {
        text: 'Simple à administrer, simple à utiliser : choisissez une salle, prenez les bureaux, c’est fait. Construit comme un produit autonome.',
      },
      { text: 'En cours.' },
    ],
  },

  footsteppa: {
    shortTag: 'marque, médias',
    shortDescription:
      'La marque et le label de médias indépendant du fondateur : plus de 6,000 abonnés, 5 artistes, en expansion vers les événements, le merch et un label discographique.',
    lead: 'La preuve que le studio sait bâtir une marque de toutes pièces, pas seulement du logiciel.',
    tagsLine: 'Marque · Médias · Communauté',
    status: 'en cours',
    info: [
      { label: 'Rôle', value: 'Propriétaire et fondateur' },
      { label: 'Portée', value: 'Plus de 6,000 abonnés · 5 artistes' },
      { label: 'Statut', value: 'En cours — marque indépendante' },
    ],
    body: [
      {
        text: 'Footsteppa est la marque de médias indépendante du fondateur lui-même : montée à partir de rien jusqu’à une communauté de plus de 6,000 abonnés autour de cinq artistes, avec une direction créative signée Anoep Chowhari.',
      },
      {
        text: 'Elle grandit aussi au-delà de l’écran : vers les événements, les vêtements et le merch, et un label discographique.',
      },
      {
        text: 'Le studio la mentionne ici comme preuve de polyvalence. Le même instinct qui livre du logiciel — bien le construire, le faire grandir sur le long terme — fonctionne tout aussi bien avec une marque.',
      },
    ],
  },

  'no-cms': {
    shortTag: 'sites web, whatsapp',
    shortDescription:
      'Mettez à jour votre site web en envoyant un WhatsApp. Changez les couleurs, les textes, la mise en page — n’importe quoi — à la volée. C’est un CMS réinventé : sans tableaux de bord, sans identifiants, rien à apprendre.',
    lead:
      'Pilotez tout votre site web depuis WhatsApp. Envoyez un message pour changer les couleurs, les textes ou la mise en page entière, et regardez-le se mettre à jour à la volée. Tout ce que fait un CMS, sans le CMS.',
    tagsLine: 'Produit · WhatsApp · Sans identifiant · Mises à jour instantanées',
    status: 'nouveau',
    info: [
      { label: 'Produit', value: 'Édition de votre site web par WhatsApp' },
      { label: 'Comment ça marche', value: 'Écrivez-lui comme à une personne · les changements passent en direct à la volée' },
      { label: 'Statut', value: 'Nouveau — accès anticipé' },
    ],
    body: [
      {
        text: 'No CMS transforme WhatsApp en le seul tableau de bord dont votre site a besoin. Vous voulez changer une couleur, réécrire un titre, déplacer une section ou repenser toute la mise en page ? Envoyez un message — et regardez ça arriver.',
      },
      {
        text: 'Ça fonctionne comme un CMS, en plus malin et bien plus facile. Aucun panneau d’administration à apprendre, aucun identifiant à courir après, aucun plugin à mettre à jour. Vous savez déjà envoyer un WhatsApp : c’est désormais tout ce qu’il faut pour gérer votre site.',
      },
      {
        text: 'Ça transforme ce que presque personne n’ose toucher en quelque chose d’aussi simple qu’écrire un message. Nouveau, et qui s’ouvre maintenant à ses premiers utilisateurs.',
      },
    ],
  },

  anonimise: {
    shortTag: 'confidentialité, ia hors ligne',
    shortDescription:
      'Effacez les noms, BSN et données personnelles de n’importe quel document — avec une IA qui tourne entièrement sur votre propre machine et ne touche jamais à internet. Nettoyez-le ici, et vous pouvez ensuite le coller sans risque dans ChatGPT ou Claude. Construit avec Lexpert Advocaten.',
    lead:
      'Anonymisez les documents sensibles avant même qu’ils n’atteignent une IA en ligne — avec un outil qui tourne entièrement hors ligne, pour qu’aucune donnée client ne quitte le cabinet.',
    tagsLine: 'Confidentialité · IA hors ligne · Presidio · spaCy · Legal-tech',
    status: 'en production',
    info: [
      { label: 'Rôle', value: 'Développeur et architecte' },
      { label: 'Stack', value: 'Microsoft Presidio, spaCy NER en local, correspondance par règles' },
      { label: 'Client', value: 'En collaboration avec Lexpert Advocaten' },
    ],
    body: [
      {
        text: 'Les professionnels veulent utiliser l’IA, mais ne peuvent pas coller les fichiers de leurs clients dans ChatGPT. Anonimise est l’outil que vous passez en premier : il nettoie les noms, les adresses, les BSN (le numéro d’identité néerlandais) et les numéros de compte d’un document, pour que ce qui reste soit sûr à envoyer à un modèle en ligne.',
      },
      {
        text: 'Il tourne entièrement sur votre propre ordinateur. L’IA qu’il embarque est un modèle local de reconnaissance de noms — pas un chatbot, jamais connecté à aucun cloud — accompagné de règles strictes pour les données à format fixe, comme la somme de contrôle 11-proef du BSN et les IBAN. Débranchez le câble réseau et il fonctionne exactement pareil ; il se bloque activement lui-même pour ne pas sortir sur internet.',
      },
      {
        text: 'Il en ressort une version en texte propre où les noms sont remplacés par des marqueurs neutres, plus un PDF ou un fichier Word dûment caviardé, dont le texte sensible est réellement supprimé, pas seulement barré en noir. Vous gardez la main : vérifiez chaque correspondance, ajoutez vos propres mots à caviarder — et rien ne quitte jamais votre machine. Construit avec Lexpert Advocaten.',
      },
    ],
  },

  dfns: {
    shortTag: 'fintech, temps réel',
    shortDescription:
      "Un tableau de bord de signaux sur les futures NQ et ES, en direct. Il diffuse les ticks de marché en temps réel via WebSocket, fait tourner un moteur de confluence multifacteur chaque seconde, et journalise chaque entrée, take-profit et stop-loss à l’instant où ils se déclenchent.",
    lead:
      "Un tableau de bord de trading en direct qui transforme un flux de ticks de futures en temps réel en signaux d’achat et de vente nets et journalisés — à l’écran dès qu’ils se déclenchent.",
    tagsLine: 'Fintech · Temps réel · WebSockets · Next.js · Node.js · MongoDB',
    status: 'en production',
    info: [
      { label: 'Rôle', value: 'Développement et architecture en solo' },
      { label: 'Stack', value: 'Next.js, Node.js, Express, MongoDB, WebSockets, SSE' },
      { label: 'Statut', value: 'En production — produit maison' },
    ],
    body: [
      {
        text: "DFNS surveille les futures NQ et ES en temps réel. Un unique WebSocket persistant tire les ticks de transactions en direct, le moteur les agrège en barres à la seconde, et un contrôle de confluence multifacteur — tendance, momentum, volume et volatilité doivent tous s’aligner — décide quand un trade vaut la peine d’être appelé.",
      },
      {
        text: "Chaque signal est suivi et journalisé : entrée, objectif et stop, puis le take-profit ou le stop-loss à l’instant où le prix l’atteint. Résultat : un enregistrement permanent et interrogeable de ce que le système a vu, et quand — pas des captures d’écran après coup.",
      },
      {
        text: "Construit de bout en bout — un back-end Node et MongoDB alimentant un tableau de bord Next.js avec chandeliers en direct, diffusé au navigateur en server-sent events. Il observe et enregistre ; il ne passe pas d’ordres. Un outil maison du studio, en production.",
      },
    ],
  },

  poofy: {
    shortTag: 'app de tâches, ios & mac',
    shortDescription:
      "Une app de tâches rapide, pilotée aux gestes, pour iPhone et Mac. Balayez vers la droite pour valider, vers la gauche pour supprimer, glissez pour réordonner — avec des listes, un widget sur l’écran d’accueil et une app dans la barre de menus, synchronisées entre les appareils.",
    lead:
      "Une app de tâches qui ne se met pas en travers du chemin — un balayage pour valider, un balayage pour supprimer, et vos listes vous suivent de l’iPhone au Mac.",
    tagsLine: 'iOS · macOS · SwiftUI · Node.js · MongoDB · Google Sign-In',
    status: 'en production',
    info: [
      { label: 'Rôle', value: 'Développement et architecture en solo' },
      { label: 'Stack', value: 'SwiftUI (iOS + macOS), Node.js, Express, MongoDB' },
      { label: 'Statut', value: "En production — l’app maison du studio" },
    ],
    body: [
      {
        text: "Poofy est une app de tâches pour garder le fil : on note, on coche, on jette. Elle tourne comme app iPhone avec widget sur l’écran d’accueil et comme app dans la barre de menus du Mac, avec les mêmes listes des deux côtés.",
      },
      {
        text: "Tout est construit autour des gestes plutôt que des boutons. Balayez une tâche vers la droite pour la valider, vers la gauche pour la supprimer, glissez pour réordonner, touchez pour modifier sur place. Les nouvelles tâches arrivent en haut, et la liste est colorée comme une carte de chaleur — le plus urgent se trouve du côté chaud, si bien que la priorité se voit au lieu de se lire.",
      },
      {
        text: "Les tâches sont regroupées en listes, pour que le travail, la maison et les projets perso restent séparés. Tout est enregistré sur votre compte et synchronisé via une API REST : c’est ce qui fait qu’une tâche ajoutée sur le téléphone vous attend dans la barre de menus du Mac.",
      },
      {
        text: "Vous pouvez créer un compte avec une adresse e-mail et un mot de passe, ou passer par Continuer avec Google. La connexion Google sert uniquement à identifier le compte : Poofy lit votre adresse e-mail et votre profil de base, rien d’autre. Aucun accès n’est demandé à Gmail, Drive, Agenda, Contacts ou à un autre service Google, et vos tâches ne sont jamais partagées avec des tiers. Les comptes et leurs données sont supprimés sur demande.",
      },
      {
        text: "Construite de bout en bout en interne — SwiftUI sur les deux plateformes, avec un même modèle et un même client d’API, face à une API REST Node.js et Express adossée à MongoDB. Le studio y gère son propre quotidien.",
      },
    ],
  },

  screensaver: {
    shortTag: 'économiseur d’écran, mac',
    shortDescription:
      'Un économiseur d’écran gratuit pour votre Mac. Laissez-le tranquille une minute et l’écran devient une horloge géante — des chiffres blancs sur fond noir, les secondes posées dans un bloc rouge.',
    lead: 'Laissez votre Mac tranquille une minute et il se transforme en horloge géante.',
    tagsLine: 'macOS · Swift · Économiseur d’écran · Téléchargement gratuit',
    status: 'en production',
    download: {
      label: 'Télécharger pour Mac',
      meta: 'ClockSaver.dmg · environ 134 Ko · vérifié et approuvé par Apple',
      steps:
        'Ouvrez le fichier téléchargé, double-cliquez sur ClockSaver.saver, cliquez sur Install, puis choisissez « Clock » dans Réglages Système → Économiseur d’écran.',
    },
    info: [
      { label: 'Rôle', value: 'Conçu et développé en solo' },
      { label: 'Fabriqué avec', value: 'Swift, AppKit, ScreenSaverView, XcodeGen' },
      { label: 'Statut', value: 'En production — téléchargement gratuit' },
    ],
    body: [
      {
        text: 'Un économiseur d’écran, c’est ce que votre Mac affiche quand vous ne vous en servez plus pendant un moment. La plupart montrent des photos ou des formes qui flottent. Celui-ci montre l’heure, et rien d’autre.',
      },
      {
        text: 'L’écran devient noir et l’horloge le remplit entièrement : heures, minutes et secondes en énormes lettres blanches, en Anton — la même typo bien épaisse que les grands titres de ce site. Les secondes sont posées dans un bloc rouge, comme un mot que vous auriez sélectionné à la souris. Les chiffres s’étirent pour tenir sur n’importe quel écran, du petit portable au grand moniteur, en laissant toujours une marge nette tout autour.',
      },
      {
        text: 'Il ne redessine l’image que lorsque l’heure change vraiment : une fois par seconde, au lieu de soixante fois par seconde comme la plupart des animations. Il reste donc tranquille dans son coin et ne touche presque pas à la batterie.',
      },
      {
        text: 'Il est écrit en Swift, le langage avec lequel Apple fabrique ses propres applis, et la typo voyage à l’intérieur du fichier. Résultat : il s’affiche correctement sur n’importe quel Mac, même sur un Mac où cette typo n’a jamais été installée.',
      },
      {
        text: 'Le plus délicat, c’est de le faire arriver sur le Mac de quelqu’un d’autre. macOS se méfie des fichiers venus d’internet et met normalement un avertissement en travers du chemin. Nous avons donc écrit un seul script qui fait tout le travail d’une traite : construire l’économiseur d’écran, le signer avec la clé de développeur Apple du studio, l’emballer dans une image disque, l’envoyer à Apple pour vérification — cela s’appelle la notarisation — puis agrafer l’accord d’Apple au fichier. Comme cet accord est agrafé et n’a pas besoin d’être vérifié en ligne, votre Mac le voit même avec le Wi-Fi coupé.',
      },
      {
        text: 'Ce qui en sort, c’est le téléchargement de cette page. Ouvrez, double-cliquez, installez, et c’est tout : aucun avertissement, aucun réglage à rattraper ensuite. Gratuit, et à peu près du poids d’une seule photo.',
      },
    ],
  },

  'voice-agent': {
    shortTag: 'IA vocale, commandes par téléphone',
    shortDescription:
      'Un agent téléphonique IA qui répond à la ligne d’un restaurant, prend les commandes à emporter au fil d’une conversation normale et les envoie directement dans le système de commandes de la cuisine — et qui se connecte à n’importe quelle API ou CRM.',
    lead:
      'Vous appelez le restaurant, vous dites ce que vous voulez manger, et une IA prend la commande — puis l’envoie directement dans le système de la cuisine.',
    tagsLine: 'Voice AI · Claude · ElevenLabs · Twilio · Node.js · REST API',
    status: 'lancement',
    info: [
      { label: 'Rôle', value: 'Concept, architecture et développement' },
      { label: 'Stack', value: 'Claude, ElevenLabs, Twilio, Node.js, Express, MongoDB' },
      { label: 'Statut', value: 'En lancement — la première ligne de restaurant' },
    ],
    body: [
      {
        text: 'Chaque soir, des restaurants perdent des commandes parce que personne ne peut décrocher quand la cuisine tourne à plein. Cet agent téléphonique répond à leur place. Un client appelle le numéro habituel du restaurant, dit ce qu’il veut — « deux sandwichs et un grand plat de riz » — et parle à une IA qui sonne comme une vraie personne, le comprend et note la commande.',
      },
      {
        text: 'Il travaille avec la vraie carte du restaurant, ses horaires d’ouverture et ses créneaux de retrait, récupérés en direct pendant l’appel. Il ne propose donc que des plats vraiment à la carte, sait ce qui est épuisé, connaît les tailles, les suppléments et leurs prix, et choisit l’heure la plus proche à laquelle la commande peut être prête. Il parle néerlandais, et passe à l’anglais sans faire d’histoires si l’appelant le fait.',
      },
      {
        text: 'Une commande par téléphone doit être exacte, alors l’agent procède en deux temps. D’abord, il fait le total et relit la commande : les plats, le nom, le montant et l’heure à laquelle tout sera prêt. Ce n’est qu’une fois que l’appelant a vraiment dit « oui » qu’il passe la commande — et c’est le système lui-même qui le vérifie, pas l’IA. La commande arrive ensuite dans le système de commandes du restaurant, exactement comme une commande de la boutique en ligne, et la cuisine la reçoit tout de suite. L’agent ne peut passer que de nouvelles commandes à emporter : il ne peut rien consulter, modifier, annuler ni rembourser.',
      },
      {
        text: 'Au téléphone, le silence donne tout de suite l’impression d’une panne. La compréhension, la voix et les interruptions — vous pouvez le couper en pleine phrase, comme une personne — sont gérées par une plateforme vocale spécialisée. La réflexion, elle, est assurée par Claude, sur le serveur du studio. Tout ce que l’agent peut savoir à l’avance est vérifié avant qu’il ne commence à parler, et s’il lui faut quand même un instant, il le dit, comme le ferait une personne.',
      },
      {
        text: 'La ligne du restaurant n’est qu’un usage parmi d’autres. Derrière, il y a un agent généraliste qui se connecte à presque n’importe quel système via une API. Une deuxième ligne tourne déjà sur la même technologie : elle reconnaît les appelants habituels à leur numéro, consulte un agenda, réserve ou annule des rendez-vous, note un signalement et le transmet par e-mail, ou passe l’appel à un humain.',
      },
      {
        text: 'Et c’est là que ça devient intéressant pour d’autres entreprises. Comme le studio construit aussi les systèmes qui se trouvent derrière — CRM sur mesure, plateformes de réservation, boutiques en ligne et back-offices —, l’agent peut y être branché directement : retrouver un client dans votre CRM, ouvrir un ticket, planifier un rendez-vous, vérifier un stock ou enregistrer une commande dans votre caisse ou votre ERP. Salons de coiffure, garages, cabinets médicaux, cabinets d’avocats, loueurs : partout où le téléphone sonne chaque jour pour les mêmes questions, un agent peut décrocher, avec derrière lui un système qui n’oublie rien.',
      },
    ],
  },
}
