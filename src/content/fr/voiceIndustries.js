// Voice AI par secteur — une page d’atterrissage chacune, à /voice-ai/<slug>.
// Slugs and aliases live in ../products.js (voiceIndustryRegistry); this file
// holds only the words. Pricing, GDPR, the demo number and the form are shared
// with the main Voice AI page.

export const voiceIndustryUi = {
  eyebrow: 'Voice AI',
  painsLabel: 'Ça vous parle ?',
  doesLabel: 'Ce que fait l’assistant',
  callLabel: 'À quoi ressemble un appel',
  caller: 'Appelant',
  assistant: 'Assistant',
  faqLabel: 'Les questions de votre secteur',
  otherLabel: 'Aussi pour',
  backLabel: 'Voice AI',
}

export const voiceIndustries = {
  dentist: {
    name: 'Dentistes',
    meta: {
      title: 'Assistant téléphonique IA pour dentistes — Voice AI',
      description:
        'Ne perdez plus un patient pendant un soin. Un assistant IA répond à la ligne du cabinet, planifie les rendez-vous dans votre agenda et transfère les urgences — conforme au RGPD, avec accord de sous-traitance.',
    },
    title: 'Un appel manqué pendant un soin, c’est un patient perdu.',
    lead: 'Votre assistante est au fauteuil, le téléphone sonne. L’IA décroche, planifie le rendez-vous dans votre agenda et transfère aussitôt les urgences à un humain.',
    pains: [
      { title: 'Des appels en plein soin', body: 'Personne ne peut décrocher avec des gants. Le patient tombe sur la messagerie et appelle le cabinet suivant.' },
      { title: 'Les mêmes questions, tous les jours', body: 'Les horaires, le stationnement, « vous prenez encore de nouveaux patients ? ». Du temps que votre assistante préférerait passer au fauteuil.' },
      { title: 'Des annulations qui dorment', body: 'Une annulation à 7 h 45 n’est vue qu’à 9 h. Ce trou dans l’agenda, quelqu’un d’autre aurait pu le prendre.' },
    ],
    does: [
      { title: 'Planifier les rendez-vous', body: 'Contrôle, détartrage ou nouveau patient : il consulte votre agenda et ne réserve que les créneaux réellement libres.' },
      { title: 'Déplacer et annuler', body: 'Les patients déplacent ou annulent eux-mêmes, même le soir. Le créneau libéré est aussitôt de nouveau disponible.' },
      { title: 'Reconnaître les urgences', body: 'Douleur, accident, gonflement : il transfère directement l’appel au cabinet ou donne le numéro d’urgence en dehors des heures d’ouverture.' },
      { title: 'Pas de détails médicaux', body: 'Il ne pose pas de questions sur les symptômes et ne donne aucun avis médical. Il fixe le rendez-vous ; la discussion sur le problème reste entre vous et le patient.' },
    ],
    call: [
      { who: 'caller', text: 'Bonjour, je voudrais prendre rendez-vous pour un contrôle.' },
      { who: 'assistant', text: 'Bien sûr. Êtes-vous déjà patient chez nous ? Je peux vous retrouver avec votre date de naissance.' },
      { who: 'caller', text: 'Oui, le 14 mars 1986.' },
      { who: 'assistant', text: 'Je vous ai trouvé. J’ai mardi à 10 h 30 ou jeudi à 14 h. Qu’est-ce qui vous arrange ?' },
      { who: 'caller', text: 'Jeudi.' },
      { who: 'assistant', text: 'Jeudi à 14 h avec le dentiste, c’est bien ça ? Je le confirme et vous recevrez une confirmation.' },
    ],
    faq: [
      { q: 'Se connecte-t-il à mon logiciel de cabinet ?', a: 'Si votre agenda propose une intégration, il l’utilise. Sinon, nous cherchons ensemble une alternative, par exemple un agenda séparé que votre équipe utilise pour les rendez-vous pris par téléphone.' },
      { q: 'Et si quelqu’un a mal ?', a: 'C’est vous qui définissez ce qu’est une urgence. Il transfère alors directement l’appel au cabinet ou, en dehors des heures d’ouverture, donne le numéro d’urgence que vous avez indiqué.' },
      { q: 'Peut-il inscrire de nouveaux patients ?', a: 'Oui, si vous le souhaitez. Il note le nom, la date de naissance et les coordonnées, puis fixe un premier rendez-vous ou place la demande sur une liste d’attente.' },
    ],
  },

  clinic: {
    name: 'Cliniques et cabinets',
    meta: {
      title: 'Assistant téléphonique IA pour cliniques et cabinets — Voice AI',
      description:
        'Pour les kinés, cliniques dermatologiques, vétérinaires et autres cabinets : un assistant IA qui répond au téléphone, planifie les rendez-vous et transfère l’appel quand c’est nécessaire.',
    },
    title: 'Votre file d’attente téléphonique, c’est votre salle d’attente.',
    lead: 'Kiné, clinique dermatologique, vétérinaire ou psychologue : l’assistant répond à chaque appel, planifie les rendez-vous et laisse votre équipe faire ce pour quoi elle est formée.',
    pains: [
      { title: 'La ligne est saturée', body: 'À 8 h, tout le monde appelle en même temps. Ceux qui attendent raccrochent, ou rappellent au pire moment.' },
      { title: 'Accueil et soins en même temps', body: 'Dans les petits cabinets, c’est le praticien qui décroche. Chaque appel interrompt un patient.' },
      { title: 'Les rendez-vous non honorés', body: 'Quand déplacer un rendez-vous est compliqué, les gens ne viennent tout simplement pas. Une heure vide que vous ne remplirez plus.' },
    ],
    does: [
      { title: 'Planifier les rendez-vous', body: 'Premier rendez-vous, suivi ou praticien précis : il réserve dans votre agenda ce qui est réellement libre.' },
      { title: 'Déplacer sans attendre', body: 'Les patients déplacent eux-mêmes leur rendez-vous, jour et nuit. Moins d’absences, un agenda plus rempli.' },
      { title: 'Les questions pratiques', body: 'Remboursements, ordonnance nécessaire ou non, adresse et stationnement : des réponses tirées de vos propres informations.' },
      { title: 'Transférer l’appel', body: 'Un doute, une urgence ou quelque chose de personnel ? Il transfère à votre équipe ou enregistre une demande de rappel.' },
    ],
    call: [
      { who: 'caller', text: 'Je dois déplacer mon rendez-vous de demain.' },
      { who: 'assistant', text: 'Pas de problème. Puis-je avoir votre nom et votre date de naissance ?' },
      { who: 'caller', text: 'Camille Martin, 2 juin 1990.' },
      { who: 'assistant', text: 'Je vois votre rendez-vous demain à 9 h avec Marc. Il a aussi une place vendredi à 11 h 15. Je le déplace à ce moment-là ?' },
      { who: 'caller', text: 'Oui, merci.' },
      { who: 'assistant', text: 'C’est noté : vendredi 11 h 15 avec Marc. Je libère le créneau de demain.' },
    ],
    faq: [
      { q: 'Ça marche avec plusieurs praticiens ?', a: 'Oui. Il connaît votre équipe et leurs agendas, et réserve chez un praticien précis si le patient le demande.' },
      { q: 'Enregistre-t-il des informations médicales ?', a: 'Non, nous le configurons ainsi. Il ne demande que ce qui est nécessaire pour fixer le rendez-vous et ne donne aucun avis médical.' },
      { q: 'Peut-il prendre des demandes de rappel ?', a: 'Oui. Il note qui a appelé et à quel sujet, puis l’envoie dans votre boîte de réception ou votre système pour que votre équipe puisse rappeler.' },
    ],
  },

  restaurant: {
    name: 'Restaurants',
    meta: {
      title: 'Assistant téléphonique IA pour restaurants — Voice AI',
      description:
        'Prenez chaque commande et chaque réservation, même pendant le coup de feu du soir. Un assistant IA qui connaît votre carte et envoie les commandes directement dans votre caisse.',
    },
    title: 'En plein service, le téléphone sonne. Et personne ne décroche.',
    lead: 'La cuisine tourne à plein, la salle est pleine. L’assistant prend les commandes à emporter et les réservations à partir de votre vraie carte et les envoie directement dans votre système.',
    pains: [
      { title: 'Des commandes perdues', body: 'Entre 17 h 30 et 19 h 30, le téléphone sonne le plus, exactement quand personne n’a le temps. Chaque appel manqué, c’est une commande perdue.' },
      { title: 'Des erreurs dans le rush', body: 'Une commande mal comprise, une allergie oubliée. Au final, ça coûte plus que ce que la commande rapportait.' },
      { title: 'Du personnel au téléphone', body: 'Quelqu’un de la salle est au bout du fil au lieu d’être auprès des clients.' },
    ],
    does: [
      { title: 'Prendre les commandes', body: 'À emporter ou en livraison, avec tailles, suppléments et prix tirés de votre vraie carte. Directement dans votre caisse ou votre système de commandes.' },
      { title: 'Réserver', body: 'Il vérifie s’il reste de la place, note le nombre de couverts et confirme l’heure.' },
      { title: 'Noter les allergies', body: 'Il pose la question et l’indique clairement sur la commande, pour que la cuisine la voie.' },
      { title: 'Dans un cadre précis', body: 'Il ne fait que passer de nouvelles commandes. Modifier, annuler ou rembourser reste de votre ressort.' },
    ],
    call: [
      { who: 'caller', text: 'Je voudrais commander à emporter.' },
      { who: 'assistant', text: 'Avec plaisir ! Qu’est-ce qui vous ferait plaisir ?' },
      { who: 'caller', text: 'Deux margheritas et un tiramisu.' },
      { who: 'assistant', text: 'Deux margheritas et un tiramisu, 31,50 € au total. Quelqu’un a-t-il une allergie ?' },
      { who: 'caller', text: 'Non, et je passe à six heures.' },
      { who: 'assistant', text: 'Prêt pour 18 h au nom de Durand. C’est bien ça ? Je transmets la commande à la cuisine.' },
    ],
    faq: [
      { q: 'Connaît-il notre carte ?', a: 'Oui, il lit votre carte dans votre propre système, avec les prix, les tailles et la composition. Si vous modifiez la carte, il le sait immédiatement.' },
      { q: 'Et si c’est trop chargé pour prendre des commandes ?', a: 'Vous pouvez fixer un maximum par créneau. Quand c’est complet, il propose un horaire plus tard.' },
      { q: 'Peut-il gérer les paiements ?', a: 'Il ne prend aucune donnée de paiement au téléphone. Le client paie au retrait, ou via un lien de paiement si vous le souhaitez.' },
    ],
  },

  salon: {
    name: 'Coiffeurs et salons',
    meta: {
      title: 'Assistant téléphonique IA pour coiffeurs et salons — Voice AI',
      description:
        'Ne décrochez plus jamais les ciseaux à la main. Un assistant IA qui planifie les rendez-vous avec le bon coiffeur, même le soir.',
    },
    title: 'Les ciseaux dans une main. Le téléphone dans l’autre ?',
    lead: 'Vous êtes en pleine coupe quand le téléphone sonne. L’assistant décroche, choisit un horaire avec le client et inscrit le rendez-vous dans votre agenda.',
    pains: [
      { title: 'Des prestations interrompues', body: 'Chaque fois que vous décrochez, votre client attend dans le fauteuil.' },
      { title: 'Des messages que personne ne rappelle', body: 'En fin de journée, il y a cinq messages vocaux. Deux clients ont déjà réservé ailleurs.' },
      { title: 'Réserver après la fermeture', body: 'Beaucoup de gens appellent le soir, quand le salon est fermé.' },
    ],
    does: [
      { title: 'Des rendez-vous avec le bon coiffeur', body: 'Coupe, couleur ou soin : il sait combien de temps ça prend et qui s’en charge.' },
      { title: 'Déplacer et annuler', body: 'Les clients s’en occupent eux-mêmes, même en dehors des heures d’ouverture.' },
      { title: 'Prix et prestations', body: 'Combien coûte un balayage, combien de temps dure une permanente : des réponses tirées de votre propre grille tarifaire.' },
      { title: 'Confirmation', body: 'Après l’appel, le client reçoit une confirmation, pour que moins de gens oublient leur rendez-vous.' },
    ],
    call: [
      { who: 'caller', text: 'Est-ce que je peux venir samedi pour une coupe ?' },
      { who: 'assistant', text: 'Samedi, Léa a une place à 11 h, et Karim à 14 h 30. Vous avez une préférence ?' },
      { who: 'caller', text: 'Léa, à onze heures.' },
      { who: 'assistant', text: 'Coupe avec Léa, samedi 11 h. À quel nom dois-je l’inscrire ?' },
      { who: 'caller', text: 'Fatima.' },
      { who: 'assistant', text: 'C’est noté, Fatima. Vous allez recevoir une confirmation.' },
    ],
    faq: [
      { q: 'Ça marche avec mon logiciel de réservation ?', a: 'Si votre logiciel de réservation propose une intégration, il réserve directement dedans. Sinon, nous cherchons une solution ensemble.' },
      { q: 'Sait-il combien de temps dure une prestation ?', a: 'Oui. Vous indiquez la durée de chaque prestation, et il ne propose que des horaires où elle tient vraiment.' },
      { q: 'Puis-je encore décrocher moi-même ?', a: 'Bien sûr. Vous choisissez quand il répond : toujours, seulement en dehors des heures d’ouverture, ou seulement si vous ne décrochez pas au bout de quelques sonneries.' },
    ],
  },

  garage: {
    name: 'Garages',
    meta: {
      title: 'Assistant téléphonique IA pour garages — Voice AI',
      description:
        'Sous la voiture et pourtant joignable. Un assistant IA qui planifie les contrôles techniques et les entretiens, et dit au client si sa voiture est prête.',
    },
    title: 'Sous une voiture, on ne peut pas décrocher.',
    lead: 'Vos mécaniciens sont à l’atelier. L’assistant planifie les contrôles techniques et les entretiens, et dit aux clients si leur voiture est déjà prête.',
    pains: [
      { title: 'Mains sales, téléphone qui sonne', body: 'Décrocher, c’est se laver les mains et laisser son travail en plan. Ou ne pas décrocher.' },
      { title: '« Ma voiture est prête ? »', body: 'La question qui revient toute la journée. À chaque fois, il faut chercher, vérifier, rappeler.' },
      { title: 'Le planning de l’atelier', body: 'Rendez-vous pris au téléphone, sur un bout de papier et dans l’agenda : tout se mélange vite.' },
    ],
    does: [
      { title: 'Planifier contrôles et entretiens', body: 'Immatriculation, type d’intervention, jour souhaité : il planifie ce qui rentre dans votre atelier.' },
      { title: 'Donner l’avancement', body: 'Il vérifie dans votre système si la voiture est prête et l’annonce au client.' },
      { title: 'Noter les pannes', body: 'Il note les problèmes avec les mots du client, pour que votre mécanicien sache à quoi faire attention.' },
      { title: 'Transférer l’appel', body: 'Une question sur un devis ou une réparation ? Il transfère l’appel ou enregistre une demande de rappel.' },
    ],
    call: [
      { who: 'caller', text: 'Mon contrôle technique expire le mois prochain, je peux prendre rendez-vous ?' },
      { who: 'assistant', text: 'Bien sûr. Quelle est votre immatriculation ?' },
      { who: 'caller', text: 'AB-123-CD.' },
      { who: 'assistant', text: 'Une Peugeot 208, c’est bien ça ? J’ai mercredi 8 à 8 h 30 ou lundi 13 à 13 h.' },
      { who: 'caller', text: 'Mercredi.' },
      { who: 'assistant', text: 'Contrôle technique mercredi 8 à 8 h 30. Vous pouvez déposer la voiture à partir de 8 h. À mercredi !' },
    ],
    faq: [
      { q: 'Se connecte-t-il à mon logiciel de garage ?', a: 'Si votre logiciel propose une intégration, il planifie directement dedans et lit l’état d’avancement d’une voiture. Sinon, nous cherchons une solution ensemble.' },
      { q: 'Peut-il annoncer des prix ?', a: 'Les prix fixes, comme un contrôle technique ou une petite révision, il les donne à partir de votre propre grille tarifaire. Pour les réparations, il enregistre une demande de rappel.' },
      { q: 'Et si quelqu’un tombe en panne ?', a: 'Vous décidez de ce qui se passe : transfert direct, ou il donne le numéro de votre service de dépannage.' },
    ],
  },

  'law-firm': {
    name: 'Cabinets d’avocats',
    meta: {
      title: 'Assistant téléphonique IA pour cabinets d’avocats — Voice AI',
      description:
        'Un premier contact professionnel pour chaque appelant. Un assistant IA qui prend les nouveaux dossiers, planifie les rendez-vous et transfère au bon avocat.',
    },
    title: 'Chaque appel manqué, c’est un dossier pour un autre cabinet.',
    lead: 'Les gens qui ont un problème juridique appellent le premier cabinet qui décroche. L’assistant répond, note l’essentiel et planifie un premier rendez-vous.',
    pains: [
      { title: 'Des avocats en audience ou en réunion', body: 'Le secrétariat est débordé, les avocats sont injoignables. Le nouveau client appelle ailleurs.' },
      { title: 'Des premiers entretiens chronophages', body: 'Déterminer si un dossier correspond à votre cabinet prend du temps à un avocat, du temps qu’il ne peut pas facturer.' },
      { title: 'Après les heures de bureau', body: 'Un licenciement, une assignation : les gens appellent quand ça leur arrive, pas quand vous êtes ouverts.' },
    ],
    does: [
      { title: 'Prendre les nouveaux dossiers', body: 'Il demande le domaine du droit et l’essentiel de l’affaire, et l’inscrit clairement dans votre système.' },
      { title: 'Planifier les premiers rendez-vous', body: 'Avec l’avocat qui traite ce domaine, dans l’agenda que vous utilisez déjà.' },
      { title: 'Transférer les clients existants', body: 'Il reconnaît les dossiers en cours et transfère l’appel ou laisse un message au bon avocat.' },
      { title: 'Confidentiel', body: 'Il ne donne aucun conseil juridique et ne demande que ce qui est nécessaire au premier rendez-vous.' },
    ],
    call: [
      { who: 'caller', text: 'J’ai été licencié aujourd’hui et je voudrais savoir ce que je peux faire.' },
      { who: 'assistant', text: 'Je suis désolé de l’apprendre. Je peux vous fixer un rendez-vous avec l’un de nos avocats en droit du travail. Puis-je avoir votre nom ?' },
      { who: 'caller', text: 'Pierre Bernard.' },
      { who: 'assistant', text: 'Maître Lefèvre est disponible demain à 10 h pour un premier entretien. Cela vous convient ?' },
      { who: 'caller', text: 'Oui.' },
      { who: 'assistant', text: 'C’est noté. Vous recevrez une confirmation par e-mail avec les documents à apporter.' },
    ],
    faq: [
      { q: 'Donne-t-il des conseils juridiques ?', a: 'Non. Il note l’essentiel de la demande et planifie un rendez-vous. Le conseil vient de vos avocats.' },
      { q: 'Et la confidentialité ?', a: 'Nous signons un accord de sous-traitance et définissons ensemble ce qui est conservé, où et pendant combien de temps.' },
      { q: 'Peut-il vérifier les conflits d’intérêts ?', a: 'Il note le nom de la partie adverse, pour que votre cabinet puisse faire la vérification avant le premier rendez-vous.' },
    ],
  },

  rental: {
    name: 'Loueurs',
    meta: {
      title: 'Assistant téléphonique IA pour loueurs — Voice AI',
      description:
        'Disponibilités, tarifs et réservations au téléphone, jour et nuit. Pour la location de voitures, d’utilitaires, d’outillage, de vélos et plus encore.',
    },
    title: '« Il est encore libre ce week-end ? » Cent fois par semaine.',
    lead: 'Utilitaires, outillage, vélos ou tentes de réception : l’assistant vérifie dans votre système ce qui est libre, annonce le prix et enregistre la réservation.',
    pains: [
      { title: 'La même question, encore et encore', body: 'Disponibilité et prix. À chaque fois chercher, à chaque fois expliquer.' },
      { title: 'Le comptoir et le téléphone', body: 'Pendant que vous aidez quelqu’un à récupérer sa location, le client suivant appelle.' },
      { title: 'Les pics du week-end', body: 'Le vendredi, tout le monde appelle en même temps pour le week-end.' },
    ],
    does: [
      { title: 'Vérifier les disponibilités', body: 'Il regarde dans votre système ce qui est libre aux dates demandées.' },
      { title: 'Annoncer les prix', body: 'À la journée, au week-end, avec caution : à partir de vos propres tarifs.' },
      { title: 'Réserver', body: 'Il enregistre la réservation avec le nom, les dates et l’heure de retrait.' },
      { title: 'Expliquer les conditions', body: 'Permis, caution, kilométrage : des réponses tirées de vos conditions.' },
    ],
    call: [
      { who: 'caller', text: 'Vous avez encore un utilitaire de libre ce week-end ?' },
      { who: 'assistant', text: 'Du vendredi au dimanche, il me reste un fourgon de 12 m³. C’est 195 € pour le week-end, 300 kilomètres inclus.' },
      { who: 'caller', text: 'Je le prends. Retrait vendredi à seize heures.' },
      { who: 'assistant', text: 'Puis-je avoir votre nom et votre numéro de téléphone ?' },
      { who: 'caller', text: 'Kevin Moreau, 06 12 34 56 78.' },
      { who: 'assistant', text: 'C’est noté : fourgon de 12 m³, du vendredi 16 h au dimanche. Pensez à votre permis ; la caution est de 250 €.' },
    ],
    faq: [
      { q: 'Se connecte-t-il à mon logiciel de location ?', a: 'Si votre logiciel propose une intégration, il vérifie et réserve directement dedans. Sinon, nous cherchons une solution ensemble.' },
      { q: 'Peut-il encaisser une caution ?', a: 'Il ne prend aucune donnée de paiement au téléphone. Vous pouvez en revanche faire envoyer un lien de paiement après la réservation.' },
      { q: 'Et si quelque chose n’est pas disponible ?', a: 'Il propose une alternative : un autre jour, ou quelque chose de comparable qui est libre.' },
    ],
  },
}
