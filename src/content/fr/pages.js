// Flat content for the static pages (about, process, work), keyed by slug.

export const pages = {
  work: {
    slug: 'work',
    meta: {
      title: 'Réalisations',
      description:
        'Une sélection de projets du studio : plateformes sur mesure, SaaS, outils d’IA, e-commerce headless et CRM conçus pour la fintech, le droit et les équipes commerciales.',
    },
    eyebrow: 'Sélection de projets',
    titleLine1: 'Réalisations',
    titleAccent: '.',
    lead:
      'Chaque projet est un vrai problème d’entreprise, résolu de bout en bout et conçu pour tourner en production. Les plateformes et outils que le studio a livrés pour des clients — et les produits qu’il construit et exploite lui-même.',
    groups: {
      client: 'Travaux clients',
      product: 'Produits maison',
    },
    posterRailMiddle: 'Réalisations · Projets sélectionnés',
  },

  about: {
    slug: 'about',
    meta: {
      title: 'À propos',
      description:
        'Une agence digitale et un studio de produit basés à Rotterdam, qui conçoivent des logiciels sur mesure pour la fintech, le droit, les agences et l’e-commerce. Fait main, prêt pour la production, conçu pour passer à l’échelle.',
    },
    eyebrow: 'À propos',
    titleLine1: 'À propos',
    titleAccent: '.',
    intro: [
      {
        text: 'raoul.studio est une agence digitale et un studio de produit basés à Rotterdam qui aident les entreprises ambitieuses à transformer leurs idées en produits digitaux évolutifs. Le studio réunit stratégie, branding, ingénierie logicielle, IA, automatisation et infrastructure pour créer des solutions qui génèrent une valeur métier durable.',
      },
      {
        text: 'Le studio accompagne fondateurs, start-up et entreprises établies pour concevoir, construire et faire évoluer des plateformes sur mesure, des outils propulsés par l’IA, des solutions de commerce et des expériences digitales. Chaque projet est abordé avec un état d’esprit produit : résoudre de vrais enjeux métier, créer des expériences utilisateur intuitives et bâtir une technologie capable de grandir avec l’entreprise.',
      },
      {
        text: 'Le studio construit des partenariats durables avec des équipes qui veulent avancer vite, voir grand et créer des produits digitaux qui comptent. De la première idée au lancement — et à chaque itération qui suit — nous travaillons comme le prolongement de votre équipe, avec un objectif : un impact mesurable par la technologie.',
        highlight: 'Le studio construit des partenariats durables',
      },
    ],
    servicesLabel: 'Ce que construit le studio',
    services: [
      { label: 'Plateformes web sur mesure & SaaS' },
      { label: 'E-commerce headless à grande échelle' },
      { label: 'Outils d’IA & automatisation' },
      { label: 'CRM & outils internes' },
      { label: 'API & architecture système' },
      { label: 'Places de marché à deux faces' },
    ],
    systemsParagraph: [
      'Le studio construit des produits digitaux conçus pour évoluer. Chaque plateforme repose sur une base technique solide — architecture évolutive, ingénierie réfléchie et croissance future à l’esprit. Qu’il s’agisse d’une plateforme propulsée par l’IA, d’un écosystème de commerce ou d’une application métier sur mesure, le studio crée une technologie qui s’adapte à mesure que votre entreprise grandit.',
      'De la première session de stratégie à bien après le lancement, le studio se concentre sur des solutions digitales robustes, évolutives et faites pour durer.',
    ],
    manifestoLead: 'Là où la stratégie, l’IA et le logiciel',
    manifestoTail: 'se rejoignent.',
    posterRailMiddle: 'À propos · Studio',
  },

  process: {
    slug: 'process',
    meta: {
      title: 'Méthode',
      description:
        'Comment travaille le studio : direction, structure, design, développement, itération, échelle. Dirigé par son fondateur, direct, focalisé sur la livraison de logiciels sur mesure qui durent.',
    },
    eyebrow: 'Méthode',
    titleLine1: 'Méthode',
    titleAccent: '.',
    lead:
      'Six étapes, un principe : comprendre le système avant de le construire. Le studio avance vite parce que la réflexion est faite en amont, pas parce qu’il la saute. Du produit sur mesure, façonné étape par étape.',
    steps: [
      {
        title: 'Direction',
        lead: 'Définir ce que l’on construit vraiment.',
        body: [
          {
            text: 'Au studio, on part du problème, pas de la liste de fonctionnalités. Ce qui est cassé, ce qui est lent, ce qui vous coûte — et à quoi ressemble « terminé ».',
          },
          {
            text: 'Vous ressortez de cette étape avec un périmètre clair et une vision partagée de la direction prise. Aucune surprise par la suite.',
          },
        ],
      },
      {
        title: 'Structure',
        lead: 'Concevoir le système qui se trouve dessous.',
        body: [
          {
            text: 'Avant le moindre écran, le studio cartographie les données, les flux et l’architecture. Les produits sur mesure vivent ou meurent par ce qu’il y a en dessous.',
          },
          {
            text: 'Faites-le bien et tout le reste devient plus simple. Faites-le mal et vous le payez pour toujours.',
          },
        ],
      },
      {
        title: 'Design',
        lead: 'Le rendre clair, le rendre utilisable.',
        body: [
          {
            text: 'La conception part du flux de travail réel — les actions quotidiennes, les cas limites, les personnes qui l’utiliseront vraiment.',
          },
          {
            text: 'Net, rapide, sans encombrement. L’interface doit s’effacer et laisser le travail se faire.',
          },
        ],
      },
      {
        title: 'Développement',
        lead: 'Livrer du code prêt pour la production.',
        body: [
          {
            text: 'Fait main, sans surcharge de code générique. Stack moderne, base de code propre, conçue pour tourner en production dès le premier jour.',
          },
          {
            text: 'Le studio construit à découvert avec vous — vous voyez les avancées au fur et à mesure, pas dans une grande révélation à la fin.',
          },
        ],
      },
      {
        title: 'Itération',
        lead: 'Le confronter à un usage réel.',
        body: [
          {
            text: 'Les vrais utilisateurs révèlent ce que les spécifications ne peuvent pas. Le studio livre, observe et resserre — boucles courtes, petites versions.',
          },
          { text: 'Le produit gagne en précision à chaque cycle.' },
        ],
      },
      {
        title: 'Échelle',
        lead: 'Conçu pour grandir avec vous.',
        body: [
          {
            text: 'Plus d’utilisateurs, plus de données, plus de langues, plus de fonctionnalités — le système a été construit pour l’encaisser.',
          },
          {
            text: 'Le studio reste présent. La majeure partie de son travail est sur le long terme, et il traite ce qu’il construit comme si c’était le sien.',
          },
        ],
      },
    ],
    howWeWork: {
      label: 'La façon de travailler du studio',
      lead: 'Dirigé par son fondateur, en direct. Vous parlez à la personne qui construit la chose.',
      points: [
        { label: 'Communication directe' },
        { label: 'Décisions rapides' },
        { label: 'Pas d’intermédiaires, pas de bruit' },
      ],
      closing: 'Vous travaillez avec la personne qui construit.',
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: 'Que fait raoul.studio ?',
          a: 'raoul.studio est un studio de produit digital. Il conçoit, construit et fait grandir des produits sur mesure — plateformes web et SaaS, e-commerce headless, outils d’IA et automatisation, CRM et outils internes, API et places de marché à deux faces — pour la fintech, les cabinets d’avocats, les agences commerciales et les équipes e-commerce, aux côtés de ses propres produits.',
        },
        {
          q: 'Comment travaillez-vous ?',
          a: 'Chaque projet passe par six étapes : Direction, Structure, Design, Développement, Itération et Échelle. Le principe est de comprendre le système avant de le construire — la réflexion est faite en amont, si bien que le développement avance vite sans sauter d’étape.',
        },
        {
          q: 'Combien de temps prend un projet ?',
          a: 'Cela dépend du périmètre, mais le studio travaille en boucles courtes avec des versions petites et fréquentes plutôt qu’une grande révélation à la fin. Vous voyez les avancées au fur et à mesure et le produit gagne en précision à chaque cycle, parce que l’architecture et la direction sont fixées avant le début du développement.',
        },
        {
          q: 'Avec qui travaillez-vous ?',
          a: 'Principalement la fintech, les cabinets d’avocats, les agences commerciales et les équipes e-commerce. Une partie du travail est pour des clients, une partie ce sont ses propres produits — tout est conçu pour tourner en production.',
        },
        {
          q: 'Proposez-vous un suivi après le lancement ?',
          a: 'Oui. La majeure partie du travail du studio s’inscrit dans la durée : les systèmes sont conçus pour grandir avec vous, à mesure qu’augmentent utilisateurs, données, langues et fonctionnalités, et le studio reste impliqué plutôt que de passer la main et disparaître.',
        },
        {
          q: 'Comment démarrer un projet ?',
          a: 'Dites-nous ce que vous construisez ou ce qui vous ralentit — par e-mail à hello@raoul.studio ou via la page de contact. Chaque vrai projet est lu, avec une réponse sous 24 heures.',
        },
      ],
    },
    posterRailMiddle: 'Méthode · Direction → Échelle',
  },

  privacy: {
    slug: 'privacy',
    meta: {
      title: 'Politique de confidentialité',
      description:
        'Comment raoul.studio traite les données personnelles sur le site web et dans l’application Poofy : ce que nous collectons, pourquoi, qui les traite, combien de temps nous les conservons et vos droits au titre du RGPD.',
    },
    eyebrow: 'Mentions légales',
    titleLine1: 'Confidentialité',
    titleAccent: '.',
    updated: 'Dernière mise à jour — août 2026',
    intro:
      'Cette politique explique quelles données personnelles raoul.studio collecte, pourquoi nous les collectons et quels droits vous détenez à leur sujet. Elle couvre ce site web ainsi que les applications que le studio exploite, dont l’application de tâches Poofy pour iPhone et Mac. Nous limitons la collecte au strict minimum nécessaire au fonctionnement du studio, à la réponse aux personnes qui nous contactent et à la synchronisation de vos tâches.',
    sections: [
      {
        heading: 'Qui nous sommes',
        body: [
          'raoul.studio est un studio de produit et d’ingénierie dirigé par Raoul Guillermo, établi dans l’UE. Pour toute question relative à cette politique — ou pour exercer vos droits — écrivez-nous à hello@raoul.studio.',
          'Au sens du RGPD, raoul.studio est le responsable du traitement des données personnelles décrites ici.',
        ],
      },
      {
        heading: 'Ce que nous collectons',
        body: [
          'Nous ne collectons que les données personnelles que vous nous fournissez ou que votre navigateur envoie lorsque vous utilisez le site :',
        ],
        points: [
          'Formulaire de contact : votre nom, votre adresse e-mail, le nom de votre société (facultatif) et le message que vous rédigez.',
          'Données techniques : lorsque vous envoyez le formulaire, nous conservons l’adresse IP et l’agent utilisateur (user-agent) du navigateur de la requête, afin de nous protéger contre le spam et les abus.',
          'Préférence de langue : un petit cookie « lang » mémorise la langue dans laquelle vous avez choisi de lire le site.',
        ],
      },
      {
        heading: 'Poofy — l’application iPhone et Mac',
        body: [
          'Poofy est l’application de tâches du studio pour iPhone et Mac. Elle nécessite un compte pour que vos listes vous suivent d’un appareil à l’autre, et ce compte est la seule raison pour laquelle elle conserve quoi que ce soit à votre sujet.',
        ],
        points: [
          'Compte : votre adresse e-mail et — si vous vous inscrivez avec un mot de passe — une version hachée de ce mot de passe. Le mot de passe lui-même n’est jamais stocké et ne peut pas être relu.',
          'Continuer avec Google : si vous vous connectez avec Google, nous recevons votre adresse e-mail, les informations de base de votre profil et votre identifiant de compte Google. Nous les utilisons pour une seule chose : créer votre compte et vous reconnaître la fois suivante.',
          'Continuer avec Apple : si vous vous connectez avec Apple, nous recevons un identifiant stable de votre compte Apple et votre adresse e-mail — une adresse relais privée si vous avez choisi « Masquer mon adresse e-mail ». Apple ne transmet l’adresse qu’à la première autorisation ; ensuite, c’est cet identifiant qui vous reconnaît.',
          'Vos contenus : les listes et les tâches que vous écrivez, l’état d’achèvement de chaque tâche et l’ordre dans lequel vous les placez.',
        ],
      },
      {
        heading: 'Comment Poofy utilise les données Google',
        body: [
          'La connexion avec Google est proposée uniquement comme moyen d’identifier votre compte. Poofy ne demande à Google que votre adresse e-mail et votre profil de base. L’application ne demande aucun accès à Gmail, Drive, Agenda, Contacts, Photos ou tout autre service Google, et ne peut rien lire, écrire ni supprimer dans votre compte Google.',
          'L’utilisation par Poofy des informations reçues des API Google respecte la Google API Services User Data Policy, y compris ses exigences d’Utilisation limitée (Limited Use). Les informations reçues de Google servent uniquement à fournir la fonction de connexion. Elles ne sont jamais vendues, jamais utilisées à des fins publicitaires ou de profilage, jamais transmises à des tiers sauf si nécessaire au fonctionnement du service ou si la loi l’exige, et jamais utilisées pour entraîner des modèles d’IA.',
          'Vos tâches vous appartiennent. Nous ne les lisons à aucune autre fin que de les stocker et de vous les restituer, nous ne les partageons pas et nous ne les utilisons ni pour la publicité ni pour entraîner des modèles.',
        ],
      },
      {
        heading: 'Supprimer votre compte Poofy',
        body: [
          'Vous pouvez supprimer votre compte et tout son contenu depuis l’application elle-même : ouvrez le menu ⋯, choisissez « Delete account » et confirmez. Le compte, ses listes et ses tâches sont supprimés immédiatement, et c’est irréversible.',
          'Vous pouvez faire supprimer votre compte et tout son contenu à tout moment en écrivant à hello@raoul.studio depuis l’adresse du compte. Nous supprimons le compte, ses listes et ses tâches. La connexion avec Google peut également être déconnectée à tout moment dans les paramètres de sécurité de votre compte Google, et la connexion avec Apple depuis « Connexion avec Apple » dans les réglages de votre identifiant Apple ; cela empêche toute nouvelle connexion — écrivez-nous en plus si vous souhaitez que les données elles-mêmes soient effacées.',
          'Nous conservons les données de compte aussi longtemps que le compte existe, et pas au-delà.',
        ],
      },
      {
        heading: 'Pourquoi nous les utilisons, et notre base légale',
        body: [
          'Nous utilisons vos coordonnées et votre message pour une seule chose : lire votre demande et y répondre. La base légale est notre intérêt légitime à répondre aux personnes qui nous contactent, et à prendre des mesures à votre demande avant toute conclusion éventuelle d’un accord.',
          'Nous utilisons les données techniques (IP, agent utilisateur) sur la base de notre intérêt légitime à garder le formulaire sécurisé et exempt de spam. Le cookie de langue est un cookie fonctionnel déposé sur la base de votre choix.',
        ],
      },
      {
        heading: 'Cookies',
        body: [
          'Le site utilise un unique cookie fonctionnel (« lang ») pour mémoriser votre langue. Nous n’utilisons pas de cookies publicitaires et ne mettons en œuvre ni suivi ni profilage par des tiers.',
        ],
      },
      {
        heading: 'Qui traite vos données',
        body: ['Nous gardons un nombre restreint de tiers. Ceux susceptibles de traiter vos données sont :'],
        points: [
          'SendGrid (Twilio Inc.) — assure la remise de l’e-mail du formulaire de contact. Votre nom, votre e-mail et votre message transitent par ce service.',
          'Google (Google Ireland Limited) — uniquement si vous choisissez « Continuer avec Google » dans Poofy. Google assure la connexion et nous transmet votre adresse e-mail et votre profil de base. Ce qui se passe du côté de Google relève de la propre politique de confidentialité de Google.',
          'Apple (Apple Distribution International Ltd.) — uniquement si vous choisissez « Connexion avec Apple » dans Poofy. Apple assure la connexion et nous transmet un identifiant de votre compte Apple ainsi qu’une adresse e-mail, qui peut être une adresse relais privée d’Apple. Ce qui se passe du côté d’Apple relève de la propre politique de confidentialité d’Apple.',
          'DigitalOcean — fournit les serveurs et la base de données managée, à Amsterdam, où sont stockés le site web ainsi que l’ensemble des comptes, listes et tâches Poofy.',
          'Nos propres serveurs — le site web et l’API Poofy tournent sur une infrastructure que nous gérons, et les soumissions de contact y sont stockées dans notre base de données.',
        ],
      },
      {
        heading: 'Où vos données sont hébergées',
        body: [
          'Les données du site ainsi que les comptes, listes et tâches Poofy sont stockés dans l’UE, sur des serveurs et une base de données managée à Amsterdam. Les connexions au site et à l’API Poofy sont chiffrées en transit, et l’accès à la base de données est restreint.',
        ],
      },
      {
        heading: 'Transferts internationaux',
        body: [
          'SendGrid (Twilio) est une société américaine ; l’envoi d’un e-mail de contact peut donc impliquer un transfert de vos données hors de l’UE. DigitalOcean a également son siège aux États-Unis, même si les serveurs qui hébergent vos données se trouvent à Amsterdam. Lorsqu’un transfert hors de l’UE a lieu, il est couvert par des garanties appropriées telles que les Clauses Contractuelles Types de la Commission européenne. Google et Apple assurent la connexion à Poofy via leurs entités irlandaises ; tout transfert effectué de leur côté relève de leurs propres politiques et garanties.',
        ],
      },
      {
        heading: 'Combien de temps nous les conservons',
        body: [
          'Nous conservons les soumissions de contact aussi longtemps que nécessaire pour traiter votre demande et pour nos propres archives, et pas plus longtemps que nécessaire. Vous pouvez à tout moment nous demander de supprimer vos données.',
        ],
      },
      {
        heading: 'Vos droits',
        body: ['Au titre du RGPD, vous avez le droit de :'],
        points: [
          'accéder aux données personnelles que nous détenons à votre sujet ;',
          'les faire rectifier ou supprimer ;',
          'limiter notre utilisation de ces données ou vous y opposer ;',
          'les recevoir dans un format portable.',
        ],
      },
      {
        heading: 'Réclamations',
        body: [
          'Pour exercer l’un de ces droits, écrivez à hello@raoul.studio. Si vous estimez que nous avons mal traité vos données, vous avez également le droit d’introduire une réclamation auprès de votre autorité locale de protection des données — aux Pays-Bas, l’Autoriteit Persoonsgegevens (autorité néerlandaise de protection des données).',
        ],
      },
      {
        heading: 'Sécurité',
        body: [
          'Nous prenons des mesures techniques et organisationnelles raisonnables pour protéger vos données, notamment le chiffrement des transmissions et un accès restreint. Aucun système n’est parfaitement sûr, mais nous réduisons la surface d’attaque en collectant peu de données dès le départ.',
        ],
      },
      {
        heading: 'Logiciel, sécurité et responsabilité',
        body: [
          'Le site web ainsi que tout outil ou logiciel que nous mettons à disposition sont fournis « en l’état » et « selon disponibilité ». Nous apportons un soin raisonnable à les maintenir sécurisés et opérationnels, mais aucun logiciel ni service en ligne ne peut être garanti comme totalement sûr, ininterrompu ou exempt d’erreurs.',
          'Dans toute la mesure permise par la loi, raoul.studio ne saurait être tenu responsable de toute perte de données, indisponibilité, faille de sécurité, accès non autorisé, ni de tout dommage direct ou indirect résultant de votre utilisation — ou de votre impossibilité d’utiliser — le site web ou nos logiciels, y compris les incidents échappant à notre contrôle raisonnable tels que piratages, attaques ou pannes de services tiers.',
          'Rien dans ce qui précède ne limite les droits dont vous disposez au titre du RGPD, ni une responsabilité qui ne peut être légalement exclue — y compris la responsabilité en cas de faute intentionnelle ou de négligence grave.',
        ],
      },
      {
        heading: 'Modifications de cette politique',
        body: [
          'Nous pouvons mettre à jour cette politique à mesure que le studio évolue. Le cas échéant, nous actualiserons la date en haut de cette page.',
        ],
      },
    ],
    directLabel: 'Questions de confidentialité',
    directEmail: 'hello@raoul.studio',
    posterRailMiddle: 'Confidentialité · Mentions légales',
  },
  terms: {
    slug: 'terms',
    meta: {
      title: 'Conditions générales',
      description:
        'Les conditions dans lesquelles raoul.studio travaille avec ses clients et exploite ses propres applications : périmètre, paiement, propriété intellectuelle, comptes, usage acceptable, responsabilité et plus — en langage clair, sous le droit néerlandais.',
    },
    eyebrow: 'Mentions légales',
    titleLine1: 'Conditions',
    titleAccent: '.',
    updated: 'Dernière mise à jour — août 2026',
    intro:
      'Ces Conditions expliquent comment raoul.studio travaille avec ses clients — ce que nous livrons, comment nous travaillons et qui est responsable de quoi — et comment vous pouvez utiliser les applications que le studio exploite pour son propre compte, comme Poofy. Nous les avons écrites en langage clair : elles se veulent équitables, et faites pour être lues.',
    sections: [
      {
        heading: 'Introduction',
        body: [
          'Les présentes conditions générales (« Conditions ») régissent l’ensemble des services, devis, propositions, abonnements, commandes et accords entre raoul.studio (« le Studio », « nous ») et ses clients (« le Client », « vous »). Elles s’appliquent sauf accord écrit contraire.',
          'raoul.studio est un studio de produits numériques basé aux Pays-Bas, dirigé par Raoul Guillermo. Vous pouvez nous écrire à hello@raoul.studio. En acceptant une Proposition, en signant un Accord ou en nous demandant de commencer les travaux, vous acceptez ces Conditions.',
          'Ces Conditions comportent deux parties. L’essentiel de ce qui suit concerne les missions clients. Les sections regroupées sous « Utiliser les applications du studio », plus bas, s’appliquent à la place si vous utilisez une application que le Studio exploite pour son propre compte — actuellement Poofy, l’application de tâches pour iPhone et Mac. Il n’est pas nécessaire d’être Client pour utiliser ces applications.',
        ],
      },
      {
        heading: 'Définitions',
        body: ['Dans ces Conditions, les termes suivants ont le sens suivant :'],
        points: [
          'Studio — raoul.studio, le prestataire des services.',
          'Client — la personne physique ou morale qui conclut un Accord avec le Studio.',
          'Projet — les travaux que le Studio s’engage à réaliser, tels que décrits dans une Proposition ou un Accord.',
          'Livrables — les designs, logiciels, codes, documentations, contenus ou autres éléments livrés par le Studio.',
          'Proposition — tout devis, estimation, cahier des charges ou offre émis par le Studio.',
          'Accord — la Proposition acceptée, ainsi que ces Conditions et tout arrangement écrit entre les parties.',
          'Propriété intellectuelle — tous les droits sur les logiciels, designs, textes, méthodes et savoir-faire, y compris droits d’auteur, droits sur les bases de données, marques et secrets d’affaires.',
          'Informations confidentielles — les informations non publiques communiquées par une partie à l’autre, marquées comme confidentielles ou devant raisonnablement être comprises comme telles.',
          'Services tiers — les produits ou services fournis par des parties autres que le Studio, tels que l’hébergement, le cloud, le paiement, l’IA ou les fournisseurs d’API.',
          'Services d’IA — les services recourant à l’intelligence artificielle, à l’apprentissage automatique ou à la génération automatisée de contenus, de code, de texte ou de décisions.',
        ],
      },
      {
        heading: 'Champ d’application',
        body: [
          'Ces Conditions s’appliquent à chaque Proposition, Accord et Projet, ainsi qu’à tout travail complémentaire ou supplémentaire, sauf accord écrit exprès contraire.',
          'Ces Conditions prévalent sur toutes conditions d’achat, de marché ou autres conditions générales du Client. L’applicabilité des conditions du Client est expressément écartée, sauf acceptation écrite de notre part.',
          'Si une disposition de ces Conditions est ou devient nulle ou inapplicable, les autres dispositions restent pleinement en vigueur et la disposition nulle sera remplacée par une disposition valable au plus proche de sa finalité.',
        ],
      },
      {
        heading: 'Devis et propositions',
        body: ['Sauf mention contraire :'],
        points: [
          'Les Propositions sont sans engagement et ne lient le Studio qu’une fois acceptées par les deux parties.',
          'Une Proposition est valable 30 jours à compter de sa date ; passé ce délai, elle peut être révisée ou retirée.',
          'Les prix peuvent évoluer avant l’acceptation d’une Proposition — par exemple en raison de changements de périmètre, de coûts de tiers ou de taxes applicables.',
          'Tous les prix s’entendent hors TVA et hors coûts de tiers, sauf mention contraire.',
          'Les erreurs manifestes et fautes de frappe figurant dans une Proposition n’engagent pas le Studio.',
        ],
      },
      {
        heading: 'Périmètre du projet',
        body: [
          'Le Studio réalise les travaux décrits dans la Proposition acceptée. Tout ce qui n’y est pas expressément inclus est hors périmètre.',
          'Les travaux hors périmètre — y compris fonctionnalités, intégrations ou exigences supplémentaires — peuvent nécessiter un budget additionnel, un planning revu ou une Proposition distincte avant d’être exécutés.',
        ],
      },
      {
        heading: 'Demandes de modification',
        body: [
          'Si le Client demande des fonctionnalités supplémentaires, des révisions, de nouvelles exigences ou un changement de priorités, le Studio en évalue l’impact sur le périmètre, le planning et le prix.',
          'Les modifications ne sont exécutées qu’une fois convenues. Le Studio peut ajuster les délais et les honoraires en conséquence et n’est pas tenu de commencer les travaux modifiés avant accord.',
        ],
      },
      {
        heading: 'Obligations du client',
        body: [
          'Un Projet dépend de la coopération du Client. Le Client est responsable de fournir les éléments suivants à temps et de manière complète. Les retards causés par le Client prolongent le planning d’autant, et le Studio n’est pas responsable du retard ou des coûts qui en découlent :',
        ],
        points: [
          'des informations exactes et complètes ;',
          'les contenus, ressources, éléments de marque et identifiants d’accès ;',
          'des retours, validations et décisions en temps utile ;',
          'une ou plusieurs personnes habilitées à décider ;',
          'le test et la revue des Livrables lorsqu’ils sont demandés.',
        ],
      },
      {
        heading: 'Livraison',
        body: [
          'Les dates ou plannings communiqués par le Studio sont des estimations et non des délais stricts, sauf si un délai ferme a été expressément convenu par écrit comme tel (« fatale termijn »).',
          'Un retard raisonnable ne constitue pas une inexécution. Lorsqu’un retard est causé par le Client ou par des Services tiers, le calendrier convenu est prolongé d’autant.',
        ],
      },
      {
        heading: 'Acceptation',
        body: ['Sauf accord contraire :'],
        points: [
          'Les Livrables sont réputés acceptés si le Client ne signale pas par écrit de défauts motivés dans les dix (10) jours ouvrés suivant la livraison.',
          'Les défauts mineurs qui n’empêchent pas matériellement l’usage ne justifient pas un refus et sont traités dans le cours normal des travaux.',
          'La mise en service d’un Livrable, ou son utilisation en production, vaut acceptation.',
        ],
      },
      {
        heading: 'Conditions de paiement',
        body: ['Sauf accord contraire dans la Proposition :'],
        points: [
          'Le Studio peut exiger un acompte avant de commencer et facturer par jalons ou de façon récurrente (retainer ou abonnement).',
          'Les factures sont payables dans les quatorze (14) jours suivant leur date.',
          'Tous les montants s’entendent hors TVA, facturée le cas échéant.',
          'À défaut de paiement à l’échéance, le Client est en défaut sans mise en demeure supplémentaire, et les intérêts légaux (commerciaux) du droit néerlandais courent à compter de la date d’échéance.',
          'Le Client doit tous les frais de recouvrement judiciaires et extrajudiciaires raisonnables engagés pour récupérer les montants échus.',
          'Le Studio peut suspendre les travaux, l’hébergement, la maintenance et le support tant que des factures restent impayées.',
        ],
      },
      {
        heading: 'Suspension',
        body: [
          'Si le Client manque à une obligation de paiement ou à une autre obligation essentielle, le Studio peut suspendre ses services — développement, hébergement, maintenance et support compris — jusqu’à ce que le Client s’exécute.',
          'La suspension ne libère pas le Client de ses obligations de paiement, et le Studio n’est pas responsable des dommages résultant d’une suspension licite.',
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        body: [
          'Après paiement intégral de toutes les sommes dues au titre d’un Projet, le Client acquiert la propriété des Livrables créés spécifiquement pour lui, ou la licence expressément convenue sur ceux-ci. Jusqu’au paiement intégral, tous les droits restent au Studio.',
          'Le Studio conserve toute la Propriété intellectuelle sur tout ce qui n’est pas un Livrable sur mesure, y compris, sans s’y limiter, ses méthodologies, frameworks internes, code réutilisable, bibliothèques, SDK, gabarits, architecture, workflows d’IA, frameworks d’automatisation, outils de développement, savoir-faire, concepts et tout logiciel préexistant.',
          'Lorsque ces éléments conservés sont intégrés à un Livrable, le Client reçoit une licence non exclusive et non transférable pour les utiliser dans le cadre de ce Livrable, sans en acquérir la propriété.',
          'Le Studio est libre d’utiliser les connaissances générales, compétences, techniques et l’expérience acquises lors d’un Projet pour d’autres clients et à d’autres fins.',
        ],
      },
      {
        heading: 'Logiciels open source',
        body: [
          'Les Livrables peuvent inclure des logiciels open source, fournis sous leurs propres conditions de licence. Ces licences régissent l’usage que le Client fait des composants open source, et le Studio ne donne à leur égard aucune garantie ni indemnisation au-delà de ce que ces licences prévoient.',
        ],
      },
      {
        heading: 'Services tiers',
        body: [
          'Les Projets reposent souvent sur des Services tiers tels que l’hébergement, les fournisseurs cloud, les prestataires de paiement, les fournisseurs d’IA, les API et les plateformes CMS. Ils sont régis par leurs propres conditions, que le Client accepte le cas échéant.',
          'Dans la mesure permise par la loi, le Studio n’est pas responsable des Services tiers et n’offre à leur égard aucune garantie, notamment concernant :',
        ],
        points: [
          'les pannes, indisponibilités ou baisses de performance ;',
          'les changements de prix ou les services arrêtés ;',
          'les modifications de conditions, de politiques ou d’API ;',
          'les incidents de sécurité, pertes de données ou violations.',
        ],
      },
      {
        heading: 'Services d’IA',
        body: [
          'Les Services d’IA reposent sur des modèles probabilistes et statistiques. Leurs sorties sont générées automatiquement et sont par nature incertaines.',
          'Les sorties produites par des Services d’IA peuvent contenir des inexactitudes, des informations inventées (« hallucinées »), des informations incomplètes ou obsolètes, ou des résultats inadaptés à un usage donné.',
          'Le Client reste pleinement responsable de la revue, de la validation et de l’approbation de toute sortie générée par IA avant de s’y fier ou de l’utiliser en production, ainsi que de la conformité de son usage au droit applicable.',
          'Le Studio fournit les Services d’IA au mieux de ses efforts et ne garantit ni l’exactitude, ni l’exhaustivité, ni la véracité factuelle, ni la conformité juridique, ni l’adéquation à un usage, ni les résultats commerciaux d’une sortie générée par IA.',
        ],
      },
      {
        heading: 'Sécurité',
        body: [
          'Le Studio applique des mesures techniques et organisationnelles commercialement raisonnables pour protéger les systèmes et les données qu’il traite.',
          'Aucun système numérique, logiciel ou service en ligne ne peut toutefois être garanti totalement sûr. Dans la mesure permise par la loi, le Studio ne garantit pas et n’est pas responsable des incidents de sécurité échappant à son contrôle raisonnable — notamment cyberattaques, vulnérabilités zero-day, hameçonnage, logiciels malveillants, pannes de cloud ou d’hébergement et défaillances d’internet ou du réseau.',
        ],
      },
      {
        heading: 'Confidentialité',
        body: [
          'Chaque partie garde confidentielles les Informations confidentielles de l’autre, ne les utilise que pour les besoins du Projet et les protège avec un soin raisonnable.',
          'Cela ne s’applique pas aux informations qui sont ou deviennent publiques sans manquement, qu’une partie détenait déjà licitement, ou qui doivent être divulguées en vertu d’une loi, d’un règlement ou d’une décision de justice — auquel cas la partie qui divulgue en informe préalablement l’autre lorsque cela est permis.',
        ],
      },
      {
        heading: 'Données personnelles',
        body: [
          'Le Studio traite les données personnelles conformément à sa Politique de confidentialité, disponible sur ce site.',
          'Le Client est et reste responsable des données personnelles qu’il fournit ou traite via les Livrables, y compris de l’existence d’une base légale pour ce traitement. Lorsque le Studio traite des données personnelles pour le compte du Client, les parties concluent, lorsque cela est requis, un accord de sous-traitance distinct.',
        ],
      },
      {
        heading: 'Maintenance et support',
        body: ['La maintenance et le support ne sont fournis que s’ils ont été expressément convenus. Sauf accord contraire :'],
        points: [
          'Inclus : la correction des bogues au regard de la spécification convenue, la supervision et la maintenance décrite dans l’Accord.',
          'Exclus : les nouvelles fonctionnalités, refontes, nouvelles intégrations et le conseil ou les travaux hors Accord — qui font l’objet d’un devis distinct.',
        ],
      },
      {
        heading: 'Garanties',
        body: [
          'Le Studio exécute ses services avec une compétence et un soin raisonnables, et les Livrables seront matériellement conformes à la spécification convenue au moment de la livraison. Il s’agit de la garantie exclusive du Client.',
          'Dans la mesure permise par la loi, le Studio ne donne aucune autre garantie et ne garantit pas que le logiciel fonctionnera sans interruption ni erreur, qu’il restera compatible avec de futurs systèmes ou des changements de tiers, ni qu’il produira un résultat commercial particulier.',
        ],
      },
      {
        heading: 'Limitation de responsabilité',
        body: [
          'Dans toute la mesure permise par le droit applicable, la responsabilité totale du Studio découlant d’un Projet ou s’y rapportant est limitée au montant payé par le Client pour ce Projet au cours des douze (12) mois précédant le fait générateur.',
          'Le Studio n’est pas responsable des dommages indirects ou consécutifs, y compris perte de profits, perte de chiffre d’affaires, perte d’activité ou d’opportunités, atteinte à la réputation, perte ou altération de données, indisponibilité ou interruption d’activité.',
          'La responsabilité du Studio n’est engagée que si le Client notifie le manquement par écrit, laisse un délai raisonnable pour y remédier et que le Studio reste défaillant — sauf si la réparation est définitivement impossible.',
          'Rien dans ces Conditions n’exclut ni ne limite une responsabilité qui ne peut l’être en droit néerlandais, y compris la responsabilité pour dol ou imprudence consciente (« opzet of bewuste roekeloosheid ») de la direction du Studio.',
        ],
      },
      {
        heading: 'Garantie d’indemnisation',
        body: [
          'Le Client garantit et indemnise le Studio contre toutes réclamations de tiers, dommages, coûts et frais (y compris les frais juridiques raisonnables) découlant de ou liés à :',
        ],
        points: [
          'les contenus, éléments ou instructions fournis par le Client ;',
          'l’atteinte à la propriété intellectuelle ou à d’autres droits de tiers du fait d’éléments fournis par le Client ;',
          'des instructions illicites, contrefaisantes ou inappropriées ;',
          'un usage abusif des Livrables, ou un usage autre que celui prévu ;',
          'les activités illégales du Client ou la violation du droit applicable.',
        ],
      },
      {
        heading: 'Force majeure',
        body: [
          'Le Studio n’est pas responsable d’une inexécution ou d’un retard causé par des circonstances échappant à son contrôle raisonnable (« overmacht »), notamment catastrophes naturelles, météo extrême, pandémies et épidémies, grèves, guerre ou troubles, mesures gouvernementales, pannes d’internet ou de télécommunications, défaillances de cloud, d’hébergement ou de fournisseurs, indisponibilité de fournisseurs d’IA et cyberattaques.',
          'Pendant la force majeure, les obligations des parties sont suspendues. Si la situation dure plus de soixante (60) jours, chaque partie peut résilier l’Accord par écrit pour la partie affectée, sans responsabilité, les travaux déjà réalisés restant dus.',
        ],
      },
      {
        heading: 'Résiliation',
        body: [
          'Chaque partie peut résilier un Accord pour convenance moyennant un préavis écrit raisonnable, sous réserve de toute durée minimale convenue pour les retainers ou abonnements.',
          'Chaque partie peut résilier avec effet immédiat si l’autre commet un manquement essentiel auquel elle ne remédie pas dans un délai raisonnable après mise en demeure écrite, ou en cas de faillite, de suspension de paiements ou d’insolvabilité de l’autre partie.',
          'À la résiliation, le Client paie tous les travaux réalisés et les coûts engagés jusqu’à la date d’effet. Les dispositions qui, par nature, doivent survivre — notamment propriété intellectuelle, confidentialité, responsabilité et droit applicable — continuent de s’appliquer.',
        ],
      },
      {
        heading: 'Droits de portfolio',
        body: [
          'Sauf accord écrit exprès contraire, le Studio peut mentionner le Client et présenter des travaux achevés et rendus publics — y compris captures d’écran, descriptions, nom et logo du Client — dans son portfolio, sur son site et dans ses supports marketing, en respectant les Informations confidentielles.',
        ],
      },
      {
        heading: 'Non-sollicitation',
        body: [
          'Pendant un Projet et durant les douze (12) mois suivant son achèvement, le Client ne recrutera, n’embauchera ni n’engagera, directement ou indirectement, aucun salarié, prestataire ou indépendant du Studio ayant participé au Projet, sans l’accord écrit préalable du Studio.',
        ],
      },
      {
        heading: 'Utiliser les applications du studio',
        body: [
          'En parallèle du travail client, le Studio exploite ses propres applications — actuellement Poofy, une application de tâches pour iPhone et Mac. Cette section et celles qui la suivent s’appliquent à vous en tant qu’utilisateur de ces applications, que vous soyez ou non également Client. Lorsqu’elles diffèrent des sections consacrées aux clients ci-dessus, ce sont ces sections qui régissent votre usage des applications.',
          'Poofy est fournie gratuitement et pour un usage personnel. Son utilisation nécessite un compte et, en en créant un, vous acceptez ces Conditions. La façon dont les applications traitent vos données personnelles est décrite dans notre Politique de confidentialité.',
        ],
      },
      {
        heading: 'Votre compte dans l’application',
        body: [
          'Vous devez pouvoir vous engager contractuellement pour créer un compte. Si vous n’avez pas l’âge auquel vous pouvez consentir seul aux services en ligne dans votre pays, demandez d’abord à un parent ou tuteur.',
        ],
        points: [
          'Utilisez une adresse e-mail dont vous disposez réellement et tenez-la à jour.',
          'Gardez votre mot de passe — ou le compte Google ou Apple avec lequel vous vous connectez — en sécurité. L’activité effectuée via votre compte relève de votre responsabilité.',
          'Un compte est destiné à une seule personne. Ne partagez pas vos identifiants et ne laissez personne d’autre utiliser votre compte.',
          'Écrivez à hello@raoul.studio si vous pensez que quelqu’un d’autre a accédé à votre compte.',
        ],
      },
      {
        heading: 'Usage acceptable des applications',
        body: ['En utilisant les applications, vous vous engagez à ne pas :'],
        points: [
          'enfreindre la loi ni stocker de contenus illicites ;',
          'tenter d’accéder au compte, aux données ou aux contenus d’un autre utilisateur ;',
          'sonder, scanner, surcharger ou perturber les applications ou leur API, ni contourner les limites mises en place ;',
          'faire de l’ingénierie inverse ou copier le service, sauf là où la loi l’autorise expressément ;',
          'utiliser les applications pour envoyer du spam ou des logiciels malveillants, ou pour générer un trafic automatisé de masse.',
        ],
      },
      {
        heading: 'Vos contenus dans les applications',
        body: [
          'Vos listes et vos tâches vous appartiennent. Vous conservez tous les droits que vous détenez déjà sur elles, et le Studio n’en revendique aucune propriété.',
          'Vous accordez au Studio uniquement l’autorisation nécessaire pour faire fonctionner le service : stocker vos contenus, les transmettre et vous les afficher sur vos propres appareils. Rien de plus. Nous n’utilisons pas vos contenus à des fins publicitaires, ni pour entraîner des modèles d’IA.',
          'Vous êtes responsable de ce que vous mettez dans les applications. Conservez votre propre copie de tout ce que vous ne pouvez pas vous permettre de perdre — les applications sont une liste de tâches, pas un service de sauvegarde.',
        ],
      },
      {
        heading: 'Disponibilité des applications',
        body: [
          'Les applications sont fournies « en l’état » et « selon disponibilité », sans garantie d’aucune sorte. Le Studio ne promet aucun niveau de disponibilité particulier et peut modifier, suspendre ou retirer des fonctionnalités à tout moment.',
          'Si le Studio décide d’arrêter complètement une application, il en informera par e-mail, avec un préavis raisonnable, à l’adresse de votre compte, en vous laissant une possibilité raisonnable de récupérer vos contenus, sauf si les circonstances l’en empêchent véritablement.',
        ],
      },
      {
        heading: 'Suspension et fin de votre utilisation',
        body: [
          'Vous pouvez cesser d’utiliser une application quand vous le souhaitez, et supprimer votre compte et tout son contenu depuis le menu ⋯ dans l’application, ou en écrivant à hello@raoul.studio depuis l’adresse du compte. La suppression est définitive et irréversible.',
          'Le Studio peut suspendre ou fermer un compte qui enfreint ces Conditions, est utilisé de manière illicite ou met en danger le service ou d’autres utilisateurs. Lorsque cela est raisonnable, nous vous en dirons la raison et vous laisserons d’abord la possibilité de régulariser.',
        ],
      },
      {
        heading: 'Responsabilité pour les applications',
        body: [
          'Les applications sont des logiciels gratuits destinés à un usage personnel. Dans toute la mesure permise par la loi, le Studio n’est pas responsable des contenus perdus ou altérés, des indisponibilités, des accès non autorisés, ni des dommages indirects ou consécutifs résultant de votre usage — ou de l’impossibilité d’usage — des applications.',
          'Rien dans cette section ne limite une responsabilité qui ne peut légalement être exclue, y compris la responsabilité pour dol ou faute lourde, ni les droits impératifs dont vous disposez en tant que consommateur.',
        ],
      },
      {
        heading: 'Droit applicable et litiges',
        body: [
          'Ces Conditions et tout Accord sont régis exclusivement par le droit néerlandais. L’application de la Convention des Nations unies sur les contrats de vente internationale de marchandises (CVIM) est exclue.',
          'Tout litige qui ne peut être résolu à l’amiable sera soumis exclusivement au tribunal compétent du Rechtbank Rotterdam, Pays-Bas, sauf disposition impérative contraire.',
          'Si vous utilisez les applications en tant que consommateur, cela ne vous prive pas de la protection du droit de la consommation impératif de votre pays de résidence, ni de votre droit de saisir ses juridictions.',
        ],
      },
      {
        heading: 'Langue de ces conditions',
        body: [
          'Ces Conditions sont disponibles en plusieurs langues. La version anglaise est la version qui fait foi ; en cas de divergence, le texte anglais prévaut.',
        ],
      },
      {
        heading: 'Modifications de ces conditions',
        body: [
          'Le Studio peut mettre à jour ces Conditions de temps à autre. La version en vigueur au début d’un Projet s’applique à ce Projet. Lorsque nous mettons à jour ces Conditions, nous mettons à jour la date en haut de cette page.',
        ],
      },
    ],
    directLabel: 'Questions sur ces conditions',
    directEmail: 'hello@raoul.studio',
    posterRailMiddle: 'Conditions · Légal',
  },
}
