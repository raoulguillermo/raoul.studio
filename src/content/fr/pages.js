// Flat content for the static pages (about, process, work), keyed by slug.

export const pages = {
  work: {
    slug: 'work',
    meta: {
      title: 'Réalisations — raoul.studio',
      description:
        'Une sélection de projets du studio : plateformes sur mesure, SaaS, outils d’IA, e-commerce headless et CRM conçus pour la fintech, le droit et les équipes commerciales.',
    },
    eyebrow: 'Sélection de projets',
    titleLine1: 'Réalisations',
    titleAccent: '.',
    lead:
      'Chaque projet est un vrai problème d’entreprise, résolu de bout en bout et conçu pour tourner en production. Les plateformes et outils que nous avons livrés pour des clients — et les produits que nous construisons et exploitons nous-mêmes.',
    groups: {
      client: 'Travaux clients',
      product: 'Nos produits',
    },
    posterRailMiddle: 'Réalisations · Projets sélectionnés',
  },

  about: {
    slug: 'about',
    meta: {
      title: 'À propos — raoul.studio',
      description:
        'Un studio de produit et d’ingénierie dirigé par son fondateur, qui conçoit des logiciels sur mesure pour la fintech, le droit, les agences et l’e-commerce. Fait main, prêt pour la production, conçu pour passer à l’échelle.',
    },
    eyebrow: 'À propos',
    titleLine1: 'À propos',
    titleAccent: '.',
    intro: [
      {
        text: 'raoul.studio est un studio de produit digital qui aide les entreprises ambitieuses à transformer leurs idées en produits digitaux évolutifs. Nous réunissons stratégie, branding, ingénierie logicielle, IA, automatisation et infrastructure pour créer des solutions qui génèrent une valeur métier durable.',
      },
      {
        text: 'Nous accompagnons fondateurs, start-up et entreprises établies pour concevoir, construire et faire évoluer des plateformes sur mesure, des outils propulsés par l’IA, des solutions de commerce et des expériences digitales. Chaque projet est abordé avec un état d’esprit produit : résoudre de vrais enjeux métier, créer des expériences utilisateur intuitives et bâtir une technologie capable de grandir avec l’entreprise.',
      },
      {
        text: 'Nous construisons des partenariats durables avec des équipes qui veulent avancer vite, voir grand et créer des produits digitaux qui comptent. De la première idée au lancement — et à chaque itération qui suit — nous travaillons comme le prolongement de votre équipe, avec un objectif : un impact mesurable par la technologie.',
        highlight: 'Nous construisons des partenariats durables',
      },
    ],
    servicesLabel: 'Ce que nous construisons',
    services: [
      { label: 'Plateformes web sur mesure & SaaS' },
      { label: 'E-commerce headless à grande échelle' },
      { label: 'Outils d’IA & automatisation' },
      { label: 'CRM & outils internes' },
      { label: 'API & architecture système' },
      { label: 'Places de marché à deux faces' },
    ],
    systemsParagraph: [
      'Nous construisons des produits digitaux conçus pour évoluer. Chaque plateforme repose sur une base technique solide — architecture évolutive, ingénierie réfléchie et croissance future à l’esprit. Qu’il s’agisse d’une plateforme propulsée par l’IA, d’un écosystème de commerce ou d’une application métier sur mesure, nous créons une technologie qui s’adapte à mesure que votre entreprise grandit.',
      'De la première session de stratégie à bien après le lancement, nous nous concentrons sur des solutions digitales robustes, évolutives et faites pour durer.',
    ],
    manifestoLead: 'Là où la stratégie, l’IA et le logiciel',
    manifestoTail: 'se rejoignent.',
    posterRailMiddle: 'À propos · Studio',
  },

  process: {
    slug: 'process',
    meta: {
      title: 'Méthode — raoul.studio',
      description:
        'Comment travaille le studio : direction, structure, design, développement, itération, échelle. Dirigé par son fondateur, direct, focalisé sur la livraison de logiciels sur mesure qui durent.',
    },
    eyebrow: 'Méthode',
    titleLine1: 'Méthode',
    titleAccent: '.',
    lead:
      'Six étapes, un principe : comprendre le système avant de le construire. Nous avançons vite parce que la réflexion est faite en amont, pas parce que nous la sautons. Du produit sur mesure, façonné étape par étape.',
    steps: [
      {
        title: 'Direction',
        lead: 'Définir ce que l’on construit vraiment.',
        body: [
          {
            text: 'Nous partons du problème, pas de la liste de fonctionnalités. Ce qui est cassé, ce qui est lent, ce qui vous coûte — et à quoi ressemble « terminé ».',
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
            text: 'Avant le moindre écran, nous cartographions les données, les flux et l’architecture. Les produits sur mesure vivent ou meurent par ce qu’il y a en dessous.',
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
            text: 'Nous concevons autour du flux de travail réel — les actions quotidiennes, les cas limites, les personnes qui l’utiliseront vraiment.',
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
            text: 'Nous construisons à découvert avec vous — vous voyez les avancées au fur et à mesure, pas dans une grande révélation à la fin.',
          },
        ],
      },
      {
        title: 'Itération',
        lead: 'Le confronter à un usage réel.',
        body: [
          {
            text: 'Les vrais utilisateurs révèlent ce que les spécifications ne peuvent pas. Nous livrons, observons et resserrons — boucles courtes, petites versions.',
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
            text: 'Nous restons présents. La majeure partie de notre travail est sur le long terme, et nous traitons ce que nous construisons comme si c’était le nôtre.',
          },
        ],
      },
    ],
    howWeWork: {
      label: 'Notre façon de travailler',
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
          a: 'raoul.studio est un studio de produit digital. Nous concevons, construisons et faisons grandir des produits sur mesure — plateformes web et SaaS, e-commerce headless, outils d’IA et automatisation, CRM et outils internes, API et places de marché à deux faces — pour la fintech, les cabinets d’avocats, les agences commerciales et les équipes e-commerce, aux côtés de nos propres produits.',
        },
        {
          q: 'Comment travaillez-vous ?',
          a: 'Chaque projet passe par six étapes : Direction, Structure, Design, Développement, Itération et Échelle. Le principe est de comprendre le système avant de le construire — la réflexion est faite en amont, si bien que le développement avance vite sans sauter d’étape.',
        },
        {
          q: 'Combien de temps prend un projet ?',
          a: 'Cela dépend du périmètre, mais nous travaillons en boucles courtes avec des versions petites et fréquentes plutôt qu’une grande révélation à la fin. Vous voyez les avancées au fur et à mesure et le produit gagne en précision à chaque cycle, parce que l’architecture et la direction sont fixées avant le début du développement.',
        },
        {
          q: 'Avec qui travaillez-vous ?',
          a: 'Principalement la fintech, les cabinets d’avocats, les agences commerciales et les équipes e-commerce. Une partie du travail est pour des clients, une partie ce sont nos propres produits — tout est conçu pour tourner en production.',
        },
        {
          q: 'Proposez-vous un suivi après le lancement ?',
          a: 'Oui. La majeure partie de notre travail s’inscrit dans la durée : les systèmes sont conçus pour grandir avec vous, à mesure qu’augmentent utilisateurs, données, langues et fonctionnalités, et nous restons impliqués plutôt que de passer la main et disparaître.',
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
      title: 'Politique de confidentialité — raoul.studio',
      description:
        'Comment raoul.studio traite les données personnelles : ce que nous collectons via le formulaire de contact, pourquoi, qui les traite, combien de temps nous les conservons et vos droits au titre du RGPD.',
    },
    eyebrow: 'Mentions légales',
    titleLine1: 'Confidentialité',
    titleAccent: '.',
    updated: 'Dernière mise à jour — juin 2026',
    intro:
      'Cette politique explique quelles données personnelles raoul.studio collecte, pourquoi nous les collectons et quels droits vous détenez à leur sujet. Nous limitons la collecte au strict minimum nécessaire au fonctionnement du studio et à la réponse aux personnes qui nous contactent.',
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
          'Nos propres serveurs — le site web est hébergé sur une infrastructure que nous gérons, et les soumissions de contact y sont stockées dans notre base de données.',
        ],
      },
      {
        heading: 'Transferts internationaux',
        body: [
          'SendGrid (Twilio) est une société américaine ; l’envoi d’un e-mail de contact peut donc impliquer un transfert de vos données hors de l’UE. Lorsque c’est le cas, ce transfert est couvert par des garanties appropriées telles que les Clauses Contractuelles Types de la Commission européenne.',
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
}
