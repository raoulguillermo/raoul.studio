// Pages logiciels — texte français.
// Un produit absent ici retombe sur l’anglais (voir ../index.js).

export const products = {
  'voice-ai': {
    meta: {
      title: 'Voice AI — un agent téléphonique IA pour votre entreprise',
      description:
        'Un agent téléphonique IA qui répond à votre ligne, parle comme une personne et fait le travail — commandes, rendez-vous, signalements — directement dans vos propres systèmes.',
    },
    eyebrow: 'Logiciel · Voice AI',
    titleLine1: 'Voice',
    titleLine2: 'AI',
    lead: 'Une IA qui répond à votre téléphone comme votre meilleur employé — et envoie chaque appel directement dans vos propres systèmes.',
    primaryCta: 'Réserver une démo',
    caseStudyCta: 'Comment le studio l’a construit',
    highlights: [
      { label: 'Répond', value: 'À chaque appel, jour et nuit' },
      { label: 'Parle', value: 'Néerlandais et anglais — change en cours d’appel' },
      { label: 'Se connecte à', value: 'Votre CRM, agenda, boutique en ligne ou ERP' },
    ],
    problem: {
      label: 'Le problème',
      heading: 'Le téléphone sonne quand personne ne peut décrocher.',
      body: [
        'En pleine coupe de cheveux, sous une voiture, au coup de feu du soir, en rendez-vous client. Chaque appel manqué, c’est une commande manquée, un rendez-vous manqué ou un client qui appelle la concurrence.',
        'La plupart de ces appels portent sur les mêmes quelques questions. Voice AI y répond — correctement, dans une conversation normale — et passe la main à une personne quand il le faut.',
      ],
    },
    steps: {
      label: 'Comment ça marche',
      items: [
        {
          title: 'Quelqu’un appelle',
          body: 'Vos clients appellent votre numéro habituel. L’agent décroche et parle comme une personne — on peut l’interrompre en pleine phrase, comme n’importe qui.',
        },
        {
          title: 'Il consulte vos vraies données',
          body: 'Pendant l’appel, il vérifie dans vos propres systèmes : votre carte, votre agenda, votre stock, vos horaires. Il ne propose que ce qui est réellement disponible.',
        },
        {
          title: 'Il confirme, puis il agit',
          body: 'Il relit d’abord tout. Ce n’est qu’après un vrai « oui » de l’appelant qu’il agit — et c’est le système lui-même qui le vérifie, pas l’IA.',
        },
        {
          title: 'Tout arrive dans votre système',
          body: 'La commande, le rendez-vous ou la demande apparaît là où vous travaillez déjà — système de commandes, CRM, agenda ou boîte mail — comme s’il venait de votre site.',
        },
      ],
    },
    features: {
      label: 'Ce qu’il sait faire',
      items: [
        { title: 'Prendre des commandes', body: 'Commandes à emporter ou en livraison à partir de votre vraie carte ou de votre catalogue, avec tailles, suppléments et prix — directement dans votre système de commandes.' },
        { title: 'Prendre des rendez-vous', body: 'Consulte votre agenda, réserve, déplace ou annule des rendez-vous, et confirme l’heure avec l’appelant.' },
        { title: 'Reconnaître les habitués', body: 'Reconnaît les appelants réguliers à leur numéro, pour qu’ils n’aient pas à se présenter à chaque fois.' },
        { title: 'Enregistrer les demandes', body: 'Note un signalement ou une question et le transmet par e-mail, ou ouvre un ticket dans votre système.' },
        { title: 'Passer à une personne', body: 'Transfère l’appel à quelqu’un de votre équipe chaque fois que c’est la meilleure réponse.' },
        { title: 'Dans son rôle', body: 'Vous décidez exactement ce qu’il peut faire ou non. L’agent pour restaurants, par exemple, peut passer de nouvelles commandes, mais ne peut rien modifier, annuler ni rembourser.' },
      ],
    },
    useCases: {
      label: 'Pensé pour',
      lead: 'Partout où le téléphone sonne chaque jour avec les mêmes questions.',
      items: ['Restaurants', 'Coiffeurs et salons', 'Garages', 'Cliniques et cabinets', 'Cabinets d’avocats', 'Loueurs'],
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: 'Est-ce que ça sonne comme un robot ?',
          a: 'Non. Il utilise une voix naturelle, se laisse interrompre et, quand il a besoin d’un instant, le dit comme le ferait une personne. Les appelants lui parlent comme à votre équipe.',
        },
        {
          q: 'Dois-je changer de numéro ?',
          a: 'Non. Vos clients composent toujours votre numéro habituel. Le studio le renvoie vers l’agent — tous les appels, seulement en dehors des heures d’ouverture, ou seulement quand votre équipe ne décroche pas.',
        },
        {
          q: 'À quels systèmes peut-il se connecter ?',
          a: 'À presque tout ce qui dispose d’une API : CRM, plateformes de réservation, boutiques en ligne, caisses et ERP, outils de tickets et e-mail. Le studio construit aussi des systèmes sur mesure : si le vôtre n’a pas encore d’API, cette partie peut aussi être construite.',
        },
        {
          q: 'Quelles langues parle-t-il ?',
          a: 'Néerlandais et anglais par défaut, et il change quand l’appelant change. D’autres langues sont possibles — demandez-nous.',
        },
        {
          q: 'Peut-il se tromper ?',
          a: 'Il relit tout et n’agit qu’après un « oui » clair, et cette confirmation est imposée par le système, pas par l’IA. Vous décidez aussi précisément quelles actions il a le droit d’effectuer.',
        },
        {
          q: 'Combien ça coûte ?',
          a: 'Cela dépend de votre volume d’appels et des systèmes à connecter. Réservez une démo et vous recevrez un devis clair et forfaitaire.',
        },
      ],
    },
    getStarted: {
      label: 'Réserver une démo',
      heading: 'Écoutez-le sur votre propre entreprise.',
      body: 'Dites-nous quels appels vous recevez et quels systèmes vous utilisez. Le studio revient vers vous sous 24 heures pour organiser une démo.',
      form: {
        messageLabel: 'Vos appels',
        messagePlaceholder:
          'Pour quoi vous appelle-t-on ? Commandes, rendez-vous, questions ? Combien d’appels par jour environ, et quels systèmes utilisez-vous (outil de réservation, CRM, boutique en ligne…) ?',
        sendLabel: 'réserver une démo',
      },
    },
    posterRailMiddle: 'Voice AI · Ne manquez plus un appel',
  },

  'no-cms': {
    meta: {
      title: 'No-CMS — modifiez votre site par WhatsApp',
      description:
        'Pilotez tout votre site depuis WhatsApp. Envoyez un message pour changer textes, couleurs, photos ou mise en page, et voyez-le en ligne aussitôt. Tout ce que fait un CMS — sans le CMS.',
    },
    eyebrow: 'Logiciel · No-CMS',
    titleLine1: 'No',
    titleLine2: 'CMS',
    lead: 'Modifiez votre site en envoyant un WhatsApp. Pas de tableau de bord, pas d’identifiants, rien à apprendre.',
    primaryCta: 'Demander un accès anticipé',
    caseStudyCta: 'Lire l’histoire',
    highlights: [
      { label: 'Se modifie avec', value: 'Un message WhatsApp' },
      { label: 'Les changements', value: 'En ligne aussitôt' },
      { label: 'Statut', value: 'Nouveau — accès anticipé' },
    ],
    problem: {
      label: 'Le problème',
      heading: 'Personne n’a envie de se connecter à son site.',
      body: [
        'De nouveaux horaires, un changement de prix, l’offre de la semaine, une nouvelle photo. De petites choses — mais il faut retrouver l’identifiant, apprendre une interface d’administration, mettre à jour des plugins ou attendre son prestataire web.',
        'Alors le site vieillit doucement. No-CMS transforme la partie que tout le monde redoute en quelque chose d’aussi simple qu’un texto.',
      ],
    },
    steps: {
      label: 'Comment ça marche',
      items: [
        {
          title: 'Envoyez un message',
          body: 'Écrivez à votre site comme à une personne : « Passe les horaires de 9 h à 18 h » ou « Mets l’en-tête en rouge et change la grande photo ».',
        },
        {
          title: 'Le changement est fait',
          body: 'No-CMS comprend ce que vous voulez dire et met à jour les textes, les couleurs, les images ou la mise en page de votre site.',
        },
        {
          title: 'C’est en ligne',
          body: 'Votre site est mis à jour aussitôt. Pas de bouton publier, pas de cache à vider, personne à attendre.',
        },
      ],
    },
    features: {
      label: 'Ce que vous pouvez changer',
      items: [
        { title: 'Textes', body: 'Réécrire un titre, mettre à jour des prix, des horaires ou une carte, ajouter les nouvelles de la semaine.' },
        { title: 'Couleurs et style', body: 'Changer une couleur, un bouton ou l’apparence d’une section — décrivez-le, simplement.' },
        { title: 'Photos', body: 'Envoyez une photo et dites où elle va.' },
        { title: 'Mise en page', body: 'Ajouter, déplacer ou supprimer des sections, ou repenser toute la page.' },
        { title: 'Aucun identifiant', body: 'Pas d’interface d’administration, pas de mot de passe à oublier, pas de plugin à mettre à jour.' },
        { title: 'Rien à apprendre', body: 'Si vous savez envoyer un WhatsApp, vous savez gérer votre site.' },
      ],
    },
    useCases: {
      label: 'Pensé pour',
      lead: 'Les entreprises gérées par leur patron, sans webmaster.',
      items: ['Restaurants et cafés', 'Boutiques', 'Salons', 'Artisans', 'Studios et indépendants', 'Services de proximité'],
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: 'Ai-je besoin d’un nouveau site ?',
          a: 'Pas forcément. Pendant l’accès anticipé, le studio installe No-CMS avec vous — sur votre site actuel quand c’est possible, sinon sur un nouveau site construit pour vous.',
        },
        {
          q: 'Qui peut modifier mon site ?',
          a: 'Uniquement les numéros WhatsApp que vous avez approuvés. Les messages de quiconque d’autre sont ignorés.',
        },
        {
          q: 'Que puis-je changer ?',
          a: 'Tout ce qu’un CMS vous permettrait de changer — textes, couleurs, images, sections, mise en page. Décrivez-le comme vous l’expliqueriez à quelqu’un.',
        },
        {
          q: 'Que signifie l’accès anticipé ?',
          a: 'No-CMS est nouveau et s’ouvre d’abord à un petit groupe de premiers utilisateurs. Le studio l’installe avec vous personnellement et façonne le produit selon votre usage.',
        },
      ],
    },
    getStarted: {
      label: 'Accès anticipé',
      heading: 'Pilotez votre site depuis WhatsApp.',
      body: 'Parlez-nous de votre site et de votre activité. Le studio revient vers vous sous 24 heures.',
      form: {
        messageLabel: 'Votre site',
        messagePlaceholder:
          'Quel est votre site (si vous en avez un), quel type d’activité, et que modifiez-vous le plus souvent ?',
        sendLabel: 'demander l’accès',
      },
    },
    posterRailMiddle: 'No-CMS · Votre site, par WhatsApp',
  },

  poofy: {
    meta: {
      title: 'Poofy — l’app de tâches à balayer pour iPhone et Mac',
      description:
        'Poofy est une app de tâches rapide et épurée. Balayez à droite pour terminer, à gauche pour supprimer. Listes, widget, app dans la barre des menus du Mac et synchronisation hors ligne. Gratuite sur l’App Store.',
    },
    eyebrow: 'Logiciel · Poofy',
    titleLine1: 'Poofy',
    titleLine2: '',
    lead: 'L’app de tâches qui ne vous encombre pas. Balayez à droite : c’est fait. Balayez à gauche : c’est parti.',
    primaryCta: 'Télécharger sur l’App Store',
    caseStudyCta: 'Comment le studio l’a construite',
    highlights: [
      { label: 'Prix', value: 'Gratuite' },
      { label: 'Fonctionne sur', value: 'iPhone + widget · barre des menus du Mac' },
      { label: 'Fonctionne', value: 'Hors ligne — se synchronise à votre retour' },
    ],
    problem: {
      label: 'Pourquoi Poofy',
      heading: 'La plupart des apps de tâches deviennent elles-mêmes une tâche.',
      body: [
        'Projets, étiquettes, échéances, priorités, réglages — et bientôt vous gérez l’app au lieu de vos tâches.',
        'Poofy fait une seule chose : garder vos tâches et vous en débarrasser vite. Le studio l’a construite pour faire tourner son propre quotidien.',
      ],
    },
    steps: {
      label: 'Comment ça marche',
      items: [
        { title: 'Notez-le', body: 'Tapez une tâche. Les nouvelles arrivent en haut, pour que la dernière ne se perde jamais.' },
        { title: 'Balayez-le', body: 'À droite pour terminer, à gauche pour supprimer. Touchez pour modifier sur place, appuyez longuement et faites glisser pour réorganiser.' },
        { title: 'Retrouvez-le partout', body: 'Ajoutez quelque chose sur l’iPhone et il vous attend dans la barre des menus du Mac. Hors ligne aussi — la synchronisation se fait dès votre retour en ligne.' },
      ],
    },
    features: {
      label: 'Fonctionnalités',
      items: [
        { title: 'Balayer, pas cliquer', body: 'Conçue autour des gestes plutôt que des boutons, pour vider votre liste vite.' },
        { title: 'Listes', body: 'Séparez le travail, la maison et les projets perso.' },
        { title: 'Carte de chaleur', body: 'Votre liste est colorée selon l’urgence : vous voyez ce qui compte au lieu de le lire.' },
        { title: 'Widget', body: 'Vos tâches principales, directement sur l’écran d’accueil de l’iPhone.' },
        { title: 'Barre des menus du Mac', body: 'Vos listes à un clic, sans ouvrir d’app.' },
        { title: 'Connexion privée', body: 'Connectez-vous avec Apple, Google ou un e-mail. Poofy ne s’en sert que pour identifier votre compte — vos tâches ne sont jamais partagées.' },
      ],
    },
    useCases: null,
    faq: {
      label: 'FAQ',
      items: [
        { q: 'Poofy est-elle gratuite ?', a: 'Oui. Poofy est gratuite à télécharger et à utiliser.' },
        { q: 'Sur quels appareils fonctionne-t-elle ?', a: 'Sur iPhone (iOS 17 ou ultérieur), avec un widget sur l’écran d’accueil, et sur Mac dans la barre des menus. Vos listes sont les mêmes sur les deux.' },
        { q: 'Fonctionne-t-elle hors ligne ?', a: 'Oui. Tout fonctionne sans connexion, et vos modifications se synchronisent automatiquement dès votre retour en ligne.' },
        { q: 'Pourquoi faut-il un compte ?', a: 'Pour que vos listes vous suivent d’un appareil à l’autre. C’est la seule raison pour laquelle Poofy conserve quoi que ce soit à votre sujet. Vos données sont stockées dans l’UE, et votre compte est supprimé sur demande.' },
      ],
    },
    getStarted: {
      label: 'Obtenir Poofy',
      heading: 'Videz votre liste.',
      body: 'Gratuite sur l’App Store pour iPhone.',
      appStoreMeta: 'Gratuite · iPhone · iOS 17 ou ultérieur',
    },
    posterRailMiddle: 'Poofy · Un geste, c’est fait',
  },
}

export const productUi = {
  softwarePage: {
    meta: {
      title: 'Logiciels — des produits construits et exploités par le studio',
      description:
        'Les logiciels du studio : Voice AI, un agent téléphonique IA pour toute entreprise ; No-CMS, la modification de site par WhatsApp ; et Poofy, une app de tâches à balayer pour iPhone et Mac.',
    },
    eyebrow: 'Logiciels',
    titleLine1: 'Logiciels',
    titleAccent: '.',
    lead: 'En plus du travail pour ses clients, le studio construit et exploite ses propres produits. Chacun résout bien un seul problème.',
    openLabel: 'Voir',
    posterRailMiddle: 'Logiciels · Construits et exploités par le studio',
  },
  seeProduct: 'Voir le produit',
  formDefaults: {
    nameLabel: 'Nom',
    namePlaceholder: 'Votre nom',
    emailLabel: 'E-mail',
    emailPlaceholder: 'vous@entreprise.com',
    companyLabel: 'Entreprise',
    companyOptional: 'facultatif',
    companyPlaceholder: 'Entreprise ou site web',
  },
}
