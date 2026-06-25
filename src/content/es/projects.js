// Español — overrides por slug de los campos traducibles de cada proyecto.
// Los campos no incluidos se heredan de la estructura base en inglés.
export const projectOverrides = {
  outdoorxl: {
    shortTag: 'e-commerce, escala',
    shortDescription:
      'E-commerce Magento a gran escala — más de 200.000 productos en 14+ idiomas y sitios, ahora migrando a headless.',
    lead:
      'Una plataforma de e-commerce con 200.000 productos y 14 mercados, y una reconstrucción en marcha de Magento a headless.',
    tagsLine: 'E-commerce · Magento · Headless · Next.js · GraphQL',
    status: 'en curso',
    info: [
      { label: 'Rol', value: 'Desarrollador principal y arquitecto de software' },
      { label: 'Stack', value: 'Magento, Varnish, PHP, MySQL → Next.js, MongoDB, Payload, GraphQL + REST' },
      { label: 'Alcance', value: 'Más de 200.000 productos · 14+ idiomas y sitios' },
    ],
    body: [
      {
        text: 'OutdoorXL opera a escala seria: más de 200.000 productos en 14+ idiomas y tiendas, servidos rápido con Magento y Varnish. Lideramos el desarrollo y somos dueños de la arquitectura que hay detrás.',
      },
      {
        text: 'Ahora lo estamos reconstruyendo en headless: Next.js y MongoDB en el front, el backend de Magento 2 tras una capa GraphQL y REST, con módulos a medida que unen ambos y Payload CMS para el contenido.',
      },
      {
        text: 'El objetivo: conservar el catálogo y los mercados, soltar el peso del legacy. Una tienda más rápida y una base de código lista para la próxima década.',
      },
    ],
  },

  aboutspace: {
    shortTag: 'marketplace, pagos',
    shortDescription:
      'Un marketplace de dos lados para publicar, alquilar y reservar espacios creativos y comerciales, con chat, monedero y pagos entre particulares integrados.',
    lead:
      'Un marketplace de dos lados para espacios creativos y comerciales: publícalo, alquílalo, resérvalo y págalo, todo en un mismo sitio.',
    tagsLine: 'Marketplace · Next.js · Node.js · Stripe Connect · MongoDB',
    status: 'lanzando',
    info: [
      { label: 'Rol', value: 'Desarrollo y diseño de concepto' },
      { label: 'Stack', value: 'Next.js, API REST en Node.js, MongoDB, Stripe' },
      { label: 'Estado', value: 'Lanzando ahora' },
    ],
    body: [
      {
        text: 'AboutSpace conecta a quien tiene espacio con quien lo necesita: un marketplace para publicar, alquilar y reservar locales creativos y comerciales. Construido junto a la responsable de proyecto Jette Schneider (Timewindow).',
      },
      {
        text: 'La plataforma no estorba. El chat integrado mantiene las conversaciones en un solo lugar, y los pagos directos entre particulares (Stripe Connect) permiten transaccionar sin intermediarios, con un monedero integrado y planes de suscripción que hacen el resto.',
      },
      {
        text: 'Headless desde la base — Next.js, una API REST en Node.js y MongoDB — pensado para soportar ambos lados de un marketplace desde el primer día. Lanzando ahora.',
      },
    ],
  },

  threadly: {
    shortTag: 'saas, soporte',
    shortDescription:
      'Nuestro propio SaaS: un sistema de tickets de soporte para equipos de soporte, agencias y operadores en solitario. Bandeja compartida, seguimiento de SLA, automatización.',
    lead:
      'Soporte que no se cuela por las grietas: un sistema de tickets para equipos, agencias y operadores en solitario.',
    tagsLine: 'SaaS · Soporte · Next.js · Node.js · MongoDB',
    status: 'en producción',
    info: [
      { label: 'Rol', value: 'Desarrollo y arquitectura en solitario' },
      { label: 'Stack', value: 'Next.js, MongoDB, API REST en Node.js' },
      { label: 'Estado', value: 'En producción — producto propio' },
    ],
    body: [
      {
        text: 'Threadly es el SaaS propio de raoul.studio: un sistema de tickets de soporte hecho para equipos de soporte, agencias y operadores en solitario que necesitan estar al tanto de cada conversación.',
      },
      {
        text: 'Una bandeja compartida reúne todos los canales en un solo lugar, el seguimiento de SLA mantiene honestos los tiempos de respuesta, y la automatización se encarga del trabajo repetitivo para que el equipo se centre en las respuestas que importan.',
      },
      { text: 'Diseñado, construido y arquitecturado internamente. Nosotros también lo usamos.' },
    ],
  },

  lexpert: {
    shortTag: 'crm, legal',
    shortDescription:
      'Un CRM a medida para un despacho de abogados: clientes, facturación directa, métricas y acceso por roles, ajustado al flujo de trabajo exacto del despacho.',
    lead: 'Un CRM completo a medida para un despacho de abogados, construido en torno a cómo funciona de verdad la práctica.',
    tagsLine: 'CRM · Legal · Facturación · Next.js · MongoDB',
    status: 'en producción',
    info: [
      { label: 'Rol', value: 'Desarrollador en solitario y arquitecto principal' },
      { label: 'Stack', value: 'Next.js, MongoDB, Node.js' },
      { label: 'Cliente', value: 'Lexpert Advocaten' },
    ],
    body: [
      {
        text: 'Lexpert Advocaten necesitaba un CRM moldeado a la práctica legal, no una herramienta genérica forzada a encajar. Así que construimos uno: gestiona clientes y relaciones, les factura directamente y hace seguimiento de las métricas que mueven el despacho.',
      },
      {
        text: 'Los permisos de usuario por roles mantienen la información correcta con las personas correctas, y todo el sistema se construyó según la dirección del despacho, desde la primera decisión hasta la última.',
      },
      {
        text: 'Una herramienta interna limpia y de propósito único, de esas en las que el software de paquete no llega a convertirse.',
      },
    ],
  },

  fndracer: {
    shortTag: 'ia, financiación',
    shortDescription:
      'Una herramienta de IA para solicitudes de financiación: rastrea fuentes de financiación, las cruza con un negocio y redacta una solicitud completa en unos cinco minutos.',
    lead: 'De "¿qué financiación existe?" a una primera solicitud completa en unos cinco minutos.',
    tagsLine: 'IA · Financiación · Next.js · OpenAI · MongoDB',
    status: 'en desarrollo',
    info: [
      { label: 'Rol', value: 'Desarrollo y arquitectura en solitario' },
      { label: 'Stack', value: 'Next.js, MongoDB, OpenAI' },
      { label: 'Estado', value: 'En desarrollo' },
    ],
    body: [
      {
        text: 'Las solicitudes de financiación son lentas, dispersas y fáciles de hacer mal. FndRacer le quita el sufrimiento: rastrea fuentes de financiación, cruza las adecuadas con un negocio y usa IA para redactar la solicitud.',
      },
      {
        text: 'Todo el proceso se resuelve en unos cinco minutos: un primer borrador completo, listo para pulir en lugar de una página en blanco que rellenar.',
      },
      { text: 'En desarrollo ahora mismo.' },
    ],
  },

  'smart-dossier': {
    shortTag: 'ia, documentos',
    shortDescription:
      'Un sistema de IA para dossieres documentales: búsqueda a texto completo dentro de los documentos y reestructuración automática de grandes conjuntos de documentos.',
    lead:
      'Busca dentro de los documentos, no solo en sus títulos, y deja que la IA reordene el montón mientras lo hace.',
    tagsLine: 'IA · Documentos · Búsqueda · Next.js · MongoDB',
    status: 'en desarrollo',
    info: [
      { label: 'Rol', value: 'Desarrollador y arquitecto en solitario' },
      { label: 'Stack', value: 'PHP/MySQL → Next.js, MongoDB, Node.js + IA' },
      { label: 'Cliente', value: 'Vastgoedkor' },
    ],
    body: [
      {
        text: 'Smart Dossier empezó en 2016 como un sistema documental en PHP/MySQL para Vastgoedkor. En 2026 lo reconstruimos en algo más inteligente.',
      },
      {
        text: 'Busca el texto completo dentro de los documentos, no solo los nombres de archivo, y reestructura automáticamente grandes conjuntos de documentos desordenados en algo que de verdad puedes navegar. La IA hace el trabajo pesado en búsqueda y estructuración de datos.',
      },
      {
        text: 'Una herramienta de hace una década, reconstruida para cómo se trabaja con documentos hoy. En desarrollo.',
      },
    ],
  },

  aboutdesk: {
    shortTag: 'reservas, equipos',
    shortDescription:
      'Una app de reserva de escritorios para equipos: las organizaciones mapean su edificio y sus plantas, y los equipos reservan escritorios en una sala para sentarse y trabajar juntos.',
    lead: 'Reserva de escritorios que mantiene a los equipos juntos, no solo sentados.',
    tagsLine: 'Reservas · Equipos · Next.js · Node.js · MongoDB',
    status: 'en desarrollo',
    info: [
      { label: 'Rol', value: 'Desarrollo y arquitectura en solitario' },
      { label: 'Stack', value: 'Next.js, MongoDB, Node.js' },
      { label: 'Estado', value: 'En curso' },
    ],
    body: [
      {
        text: 'AboutDesk es una app de reserva de escritorios pensada en torno a los equipos, no solo a los asientos. Una organización mapea su edificio y sus plantas, y los equipos reservan sus escritorios dentro de una sala, para que quienes trabajan juntos se sienten juntos.',
      },
      {
        text: 'Sencilla de gestionar, sencilla de usar: elige una sala, ocupa los escritorios, listo. Construida como producto independiente.',
      },
      { text: 'En curso.' },
    ],
  },

  footsteppa: {
    shortTag: 'marca, medios',
    shortDescription:
      'La marca y sello de medios independiente del fundador: más de 6.000 seguidores, 5 artistas, expandiéndose a eventos, merch y un sello discográfico.',
    lead: 'La prueba de que el estudio puede construir una marca desde cero, no solo software.',
    tagsLine: 'Marca · Medios · Comunidad',
    status: 'en curso',
    info: [
      { label: 'Rol', value: 'Propietario y fundador' },
      { label: 'Alcance', value: 'Más de 6.000 seguidores · 5 artistas' },
      { label: 'Estado', value: 'En curso — marca independiente' },
    ],
    body: [
      {
        text: 'Footsteppa es la marca de medios independiente del propio fundador: levantada desde la nada hasta una comunidad de más de 6.000 seguidores en torno a cinco artistas, con dirección creativa de Anoep Chowhari.',
      },
      {
        text: 'También está creciendo más allá de la pantalla: hacia eventos, ropa y merch, y un sello discográfico.',
      },
      {
        text: 'La incluimos aquí como muestra de versatilidad. El mismo instinto que entrega software —construirlo bien, hacerlo crecer a largo plazo— funciona igual de bien con una marca.',
      },
    ],
  },

  'no-cms': {
    shortTag: 'webs, whatsapp',
    shortDescription:
      'Actualiza tu web mandando un WhatsApp. Cambia colores, textos, diseño —lo que sea— al vuelo. Es un CMS reinventado: sin paneles, sin logins, sin nada que aprender.',
    lead:
      'Gestiona toda tu web desde WhatsApp. Manda un mensaje para cambiar colores, textos o el diseño entero, y míralo actualizarse al vuelo. Todo lo que hace un CMS, sin el CMS.',
    tagsLine: 'Producto · WhatsApp · Sin login · Cambios al instante',
    status: 'nuevo',
    info: [
      { label: 'Producto', value: 'Edición de tu web por WhatsApp' },
      { label: 'Cómo funciona', value: 'Escríbele como a una persona · los cambios entran en vivo al vuelo' },
      { label: 'Estado', value: 'Nuevo — acceso anticipado' },
    ],
    body: [
      {
        text: 'No CMS convierte WhatsApp en el único panel que tu web necesita. ¿Quieres cambiar un color, reescribir un titular, mover una sección o replantear el diseño entero? Manda un mensaje y míralo suceder.',
      },
      {
        text: 'Funciona como un CMS, solo que más listo y muchísimo más fácil. Sin panel de administración que aprender, sin logins que perseguir, sin plugins que actualizar. Ya sabes mandar un WhatsApp: ahora eso es todo lo que hace falta para gestionar tu web.',
      },
      {
        text: 'Convierte eso que casi nadie se atreve a tocar en algo tan sencillo como escribir un mensaje. Nuevo, y abriéndose ahora a los primeros usuarios.',
      },
    ],
  },

  anonimise: {
    shortTag: 'privacidad, ia offline',
    shortDescription:
      'Borra los nombres, BSN y datos personales de cualquier documento — con una IA que corre por completo en tu propia máquina y nunca toca internet. Límpialo aquí y ya puedes pegarlo sin riesgo en ChatGPT o Claude. Construido junto a Lexpert Advocaten.',
    lead:
      'Anonimiza documentos sensibles antes de que lleguen siquiera a una IA online — con una herramienta que corre totalmente offline, para que ningún dato de cliente salga del despacho.',
    tagsLine: 'Privacidad · IA offline · Presidio · spaCy · Legal-tech',
    status: 'en producción',
    info: [
      { label: 'Rol', value: 'Desarrollador y arquitecto' },
      { label: 'Stack', value: 'Microsoft Presidio, spaCy NER en local, coincidencia por reglas' },
      { label: 'Cliente', value: 'En colaboración con Lexpert Advocaten' },
    ],
    body: [
      {
        text: 'Los profesionales quieren usar IA, pero no pueden pegar los archivos de sus clientes en ChatGPT. Anonimise es la herramienta que pasas primero: limpia nombres, direcciones, BSN (el documento de identidad neerlandés) y números de cuenta de un documento, para que lo que queda sea seguro de enviar a un modelo online.',
      },
      {
        text: 'Corre por entero en tu propio ordenador. La IA que lleva dentro es un modelo local de reconocimiento de nombres —no un chatbot, jamás conectado a ninguna nube— acompañado de reglas estrictas para los datos con formato fijo, como el dígito de control 11-proef del BSN y los IBAN. Desenchufa el cable de red y funciona exactamente igual; se bloquea activamente a sí misma para no salir a internet.',
      },
      {
        text: 'Sale una versión en texto limpio con los nombres sustituidos por marcadores neutros, más un PDF o un archivo Word debidamente redactado, con el texto sensible eliminado de verdad, no solo tapado en negro. Tú mandas: revisa cada coincidencia, añade tus propias palabras para redactar — y nada sale nunca de tu máquina. Construido junto a Lexpert Advocaten.',
      },
    ],
  },
}
