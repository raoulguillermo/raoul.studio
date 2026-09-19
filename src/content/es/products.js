// Páginas de software — texto en español.
// Un producto que falte aquí recurre al inglés (ver ../index.js).

export const products = {
  'voice-ai': {
    meta: {
      title: 'Voice AI — un agente telefónico con IA para tu negocio',
      description:
        'Un agente telefónico con IA que contesta la línea de tu negocio, habla como una persona y resuelve — pedidos, citas, avisos — directamente en tus propios sistemas.',
    },
    eyebrow: 'Software · Voice AI',
    titleLine1: 'Voice',
    titleLine2: 'AI',
    lead: 'Una IA que contesta tu teléfono como tu mejor empleado — y lleva cada llamada directamente a tus propios sistemas.',
    primaryCta: 'Pide una demo',
    caseStudyCta: 'Cómo lo construyó el estudio',
    highlights: [
      { label: 'Contesta', value: 'Cada llamada, de día y de noche' },
      { label: 'Habla', value: 'Neerlandés e inglés — cambia en plena llamada' },
      { label: 'Se conecta a', value: 'Tu CRM, agenda, tienda online o ERP' },
    ],
    problem: {
      label: 'El problema',
      heading: 'El teléfono suena cuando nadie puede contestar.',
      body: [
        'En mitad de un corte de pelo, debajo de un coche, en plena hora punta de la cena, en una reunión con un cliente. Cada llamada perdida es un pedido perdido, una cita perdida o un cliente que llama a la competencia.',
        'La mayoría de esas llamadas giran en torno a las mismas pocas preguntas. Voice AI las responde — bien, en una conversación normal — y pasa la llamada a una persona cuando conviene.',
      ],
    },
    steps: {
      label: 'Cómo funciona',
      items: [
        {
          title: 'Alguien llama',
          body: 'Tus clientes llaman a tu número de siempre. El agente contesta y habla como una persona — se le puede interrumpir a mitad de frase, como a cualquiera.',
        },
        {
          title: 'Consulta tus datos reales',
          body: 'Durante la llamada consulta tus propios sistemas: tu carta, tu agenda, tu stock, tu horario. Solo ofrece lo que de verdad está disponible.',
        },
        {
          title: 'Primero confirma, luego actúa',
          body: 'Primero lo repite todo. Solo cuando quien llama dice de verdad que sí, lo ejecuta — y eso lo comprueba el propio sistema, no la IA.',
        },
        {
          title: 'Llega a tu sistema',
          body: 'El pedido, la cita o el aviso aparece donde ya trabajas — tu sistema de pedidos, CRM, agenda o bandeja de entrada — como si hubiera entrado por tu web.',
        },
      ],
    },
    features: {
      label: 'Qué puede hacer',
      items: [
        { title: 'Tomar pedidos', body: 'Pedidos para recoger o a domicilio a partir de tu carta o catálogo real, con tamaños, extras y precios — directos a tu sistema de pedidos.' },
        { title: 'Reservar citas', body: 'Consulta tu agenda, reserva, mueve o cancela citas y confirma la hora con quien llama.' },
        { title: 'Reconocer a los habituales', body: 'Reconoce a quienes llaman a menudo por su número, para que no tengan que explicar quiénes son cada vez.' },
        { title: 'Registrar avisos', body: 'Anota una incidencia o una pregunta y la reenvía por correo, o abre un ticket en tu sistema.' },
        { title: 'Pasar a una persona', body: 'Transfiere la llamada a alguien de tu equipo siempre que esa sea la mejor respuesta.' },
        { title: 'Dentro de sus límites', body: 'Tú decides exactamente qué puede y qué no puede hacer. El agente para restaurantes, por ejemplo, puede hacer pedidos nuevos, pero no puede cambiar, cancelar ni reembolsar nada.' },
      ],
    },
    useCases: {
      label: 'Pensado para',
      lead: 'Cualquier sitio donde el teléfono suena cada día con las mismas preguntas.',
      items: ['Restaurantes', 'Peluquerías y salones', 'Talleres', 'Clínicas y consultas', 'Despachos de abogados', 'Empresas de alquiler'],
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: '¿Suena como un robot?',
          a: 'No. Usa una voz natural, se le puede interrumpir y, cuando necesita un momento, lo dice como lo haría una persona. Quien llama le habla como hablaría con tu equipo.',
        },
        {
          q: '¿Tengo que cambiar de número?',
          a: 'No. Tus clientes siguen marcando tu número de siempre. El estudio lo desvía al agente — todas las llamadas, solo fuera de horario o solo cuando tu equipo no contesta.',
        },
        {
          q: '¿Con qué sistemas se puede conectar?',
          a: 'Con casi todo lo que tenga una API: CRM, plataformas de reservas, tiendas online, sistemas de caja y ERP, herramientas de tickets y correo. El estudio también construye sistemas a medida, así que si el tuyo aún no tiene API, esa parte también se puede construir.',
        },
        {
          q: '¿Qué idiomas habla?',
          a: 'Neerlandés e inglés de serie, y cambia cuando cambia quien llama. Otros idiomas son posibles — pregúntanos.',
        },
        {
          q: '¿Puede equivocarse?',
          a: 'Lo repite todo y solo actúa tras un sí claro, y esa confirmación la impone el sistema, no la IA. Además, tú decides exactamente qué acciones puede realizar.',
        },
        {
          q: '¿Cuánto cuesta?',
          a: 'Depende de tu volumen de llamadas y de los sistemas a los que se conecte. Pide una demo y recibirás un presupuesto claro y cerrado.',
        },
      ],
    },
    getStarted: {
      label: 'Pide una demo',
      heading: 'Escúchalo en tu propio negocio.',
      body: 'Cuéntanos qué tipo de llamadas recibes y qué sistemas usas. El estudio responde en menos de 24 horas para preparar una demo.',
      form: {
        messageLabel: 'Tus llamadas',
        messagePlaceholder:
          '¿Para qué te llama la gente? ¿Pedidos, citas, preguntas? ¿Cuántas llamadas al día, más o menos, y qué sistemas usas (herramienta de reservas, CRM, tienda online…)?',
        sendLabel: 'pide una demo',
      },
    },
    posterRailMiddle: 'Voice AI · No vuelvas a perder una llamada',
  },

  'no-cms': {
    meta: {
      title: 'No-CMS — edita tu web por WhatsApp',
      description:
        'Gestiona toda tu web desde WhatsApp. Envía un mensaje para cambiar textos, colores, fotos o el diseño, y míralo publicarse al momento. Todo lo que hace un CMS — sin el CMS.',
    },
    eyebrow: 'Software · No-CMS',
    titleLine1: 'No',
    titleLine2: 'CMS',
    lead: 'Cambia tu web enviando un WhatsApp. Sin panel, sin contraseñas, nada que aprender.',
    primaryCta: 'Pide acceso anticipado',
    caseStudyCta: 'Lee la historia',
    highlights: [
      { label: 'Se edita con', value: 'Un mensaje de WhatsApp' },
      { label: 'Los cambios', value: 'Se publican al momento' },
      { label: 'Estado', value: 'Nuevo — acceso anticipado' },
    ],
    problem: {
      label: 'El problema',
      heading: 'Nadie quiere entrar en el panel de su web.',
      body: [
        'Un horario nuevo, un cambio de precio, la oferta de la semana, una foto nueva. Cambios pequeños — pero implican buscar la contraseña, aprender un panel de administración, actualizar plugins o esperar a tu desarrollador web.',
        'Así que la web se va quedando desfasada. No-CMS convierte la parte que todos temen tocar en algo tan fácil como mandar un mensaje.',
      ],
    },
    steps: {
      label: 'Cómo funciona',
      items: [
        {
          title: 'Envía un mensaje',
          body: 'Escríbele a tu web como a una persona: «Cambia el horario a de 9 a 18» o «Pon la cabecera en rojo y cambia la foto principal».',
        },
        {
          title: 'Se hace el cambio',
          body: 'No-CMS entiende lo que quieres decir y actualiza los textos, los colores, las imágenes o el diseño de tu web.',
        },
        {
          title: 'Ya está publicado',
          body: 'Tu web se actualiza al momento. Sin botón de publicar, sin vaciar la caché, sin esperar a nadie.',
        },
      ],
    },
    features: {
      label: 'Qué puedes cambiar',
      items: [
        { title: 'Textos', body: 'Reescribir un titular, actualizar precios, horarios o una carta, añadir las novedades de la semana.' },
        { title: 'Colores y estilo', body: 'Cambiar un color, un botón o el aspecto de una sección — solo descríbelo.' },
        { title: 'Fotos', body: 'Envía una foto y di dónde va.' },
        { title: 'Diseño', body: 'Añadir, mover o quitar secciones, o replantear la página entera.' },
        { title: 'Sin contraseñas', body: 'Sin panel de administración, sin contraseñas que olvidar, sin plugins que actualizar.' },
        { title: 'Nada que aprender', body: 'Si sabes enviar un WhatsApp, sabes gestionar tu web.' },
      ],
    },
    useCases: {
      label: 'Pensado para',
      lead: 'Negocios que lleva su dueño, sin webmaster propio.',
      items: ['Restaurantes y cafés', 'Tiendas', 'Salones', 'Profesionales de oficios', 'Estudios y autónomos', 'Servicios locales'],
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: '¿Necesito una web nueva?',
          a: 'No necesariamente. Durante el acceso anticipado el estudio configura No-CMS contigo — en tu web actual cuando es posible, o en una nueva construida para ti.',
        },
        {
          q: '¿Quién puede cambiar mi web?',
          a: 'Solo los números de WhatsApp que tú hayas aprobado. Los mensajes de cualquier otra persona se ignoran.',
        },
        {
          q: '¿Qué puedo cambiar?',
          a: 'Todo lo que te dejaría cambiar un CMS — textos, colores, imágenes, secciones, diseño. Solo descríbelo como se lo explicarías a una persona.',
        },
        {
          q: '¿Qué significa acceso anticipado?',
          a: 'No-CMS es nuevo y primero se abre a un grupo reducido de usuarios. El estudio lo configura contigo en persona y da forma al producto según cómo lo usas.',
        },
      ],
    },
    getStarted: {
      label: 'Acceso anticipado',
      heading: 'Gestiona tu web desde WhatsApp.',
      body: 'Cuéntanos sobre tu web y tu negocio. El estudio responde en menos de 24 horas.',
      form: {
        messageLabel: 'Tu web',
        messagePlaceholder:
          '¿Cuál es tu web (si tienes una), qué tipo de negocio es y qué cambias más a menudo?',
        sendLabel: 'pide acceso anticipado',
      },
    },
    posterRailMiddle: 'No-CMS · Tu web, por WhatsApp',
  },

  poofy: {
    meta: {
      title: 'Poofy — la app de tareas a golpe de swipe para iPhone y Mac',
      description:
        'Poofy es una app de tareas rápida y sin distracciones. Desliza a la derecha para completar, a la izquierda para borrar. Listas, widget, app en la barra de menús del Mac y sincronización sin conexión. Gratis en el App Store.',
    },
    eyebrow: 'Software · Poofy',
    titleLine1: 'Poofy',
    titleLine2: '',
    lead: 'La app de tareas que no se interpone. Desliza a la derecha: hecha. Desliza a la izquierda: fuera.',
    primaryCta: 'Descárgala en el App Store',
    caseStudyCta: 'Cómo lo construyó el estudio',
    highlights: [
      { label: 'Precio', value: 'Gratis' },
      { label: 'Funciona en', value: 'iPhone + widget · barra de menús del Mac' },
      { label: 'Funciona', value: 'Sin conexión — sincroniza al volver' },
    ],
    problem: {
      label: 'Por qué Poofy',
      heading: 'La mayoría de apps de tareas acaban siendo otra tarea.',
      body: [
        'Proyectos, etiquetas, fechas límite, prioridades, ajustes — y sin darte cuenta estás gestionando la app en lugar de tus tareas.',
        'Poofy hace una sola cosa: guarda tus tareas y te deja quitártelas de encima rápido. El estudio la construyó para llevar con ella su propio día a día.',
      ],
    },
    steps: {
      label: 'Cómo funciona',
      items: [
        { title: 'Apúntalo', body: 'Escribe una tarea. Las nuevas aparecen arriba, así lo último nunca se pierde.' },
        { title: 'Deslízalo', body: 'A la derecha para completar, a la izquierda para borrar. Toca para editar en el sitio, mantén pulsado y arrastra para reordenar.' },
        { title: 'Encuéntralo en todas partes', body: 'Añade algo en el iPhone y te espera en la barra de menús del Mac. También sin conexión — se sincroniza en cuanto vuelves a estar online.' },
      ],
    },
    features: {
      label: 'Funciones',
      items: [
        { title: 'Desliza, no hagas clic', body: 'Construida alrededor de gestos en lugar de botones, para vaciar tu lista rápido.' },
        { title: 'Listas', body: 'Mantén separados el trabajo, la casa y los proyectos personales.' },
        { title: 'Mapa de calor', body: 'Tu lista se colorea según la urgencia, así ves lo que importa en lugar de leerlo.' },
        { title: 'Widget', body: 'Tus tareas principales, directamente en la pantalla de inicio del iPhone.' },
        { title: 'Barra de menús del Mac', body: 'Tus listas a un clic, sin abrir ninguna app.' },
        { title: 'Inicio de sesión privado', body: 'Entra con Apple, Google o correo. Poofy solo lo usa para identificar tu cuenta — tus tareas nunca se comparten.' },
      ],
    },
    useCases: null,
    faq: {
      label: 'FAQ',
      items: [
        { q: '¿Poofy es gratis?', a: 'Sí. Poofy es gratis para descargar y usar.' },
        { q: '¿En qué dispositivos funciona?', a: 'En el iPhone (iOS 17 o posterior), con widget en la pantalla de inicio, y en el Mac como app de la barra de menús. Tus listas son las mismas en ambos.' },
        { q: '¿Funciona sin conexión?', a: 'Sí. Todo funciona sin conexión, y tus cambios se sincronizan automáticamente en cuanto vuelves a estar online.' },
        { q: '¿Por qué necesito una cuenta?', a: 'Para que tus listas te acompañen de un dispositivo a otro. Es la única razón por la que Poofy guarda algo sobre ti. Tus datos se guardan en la UE, y tu cuenta se elimina si lo pides.' },
      ],
    },
    getStarted: {
      label: 'Consigue Poofy',
      heading: 'Vacía tu lista.',
      body: 'Gratis en el App Store para iPhone.',
      appStoreMeta: 'Gratis · iPhone · iOS 17 o posterior',
    },
    posterRailMiddle: 'Poofy · Desliza y listo',
  },

  crm: {
    meta: {
      title: 'CRM — un CRM a medida construido según cómo funciona tu negocio',
      description:
        'Un CRM diseñado y construido para un solo negocio: clientes, expedientes o pipelines, horas y facturación con pago online, pedidos, documentos, paneles y permisos por rol — conectado a tus propias herramientas. Construido para un despacho de abogados, un sello discográfico y un restaurante.',
    },
    eyebrow: 'Software · CRM',
    titleLine1: 'CRM',
    titleLine2: 'a medida',
    lead: 'Un CRM construido según cómo funciona de verdad tu negocio — no una herramienta genérica a la que tienes que adaptarte.',
    primaryCta: 'Agenda una conversación',
    caseStudyCta: '',
    highlights: [
      { label: 'Hecho para', value: 'Tu forma exacta de trabajar' },
      { label: 'Se conecta a', value: 'Pagos, correo, caja, agentes de IA' },
      { label: 'En uso en', value: 'Un despacho, un sello discográfico, un restaurante' },
    ],
    problem: {
      label: 'El problema',
      heading: 'Los CRM estándar no encajan del todo con nadie.',
      body: [
        'Están hechos para el negocio medio, así que el tuyo acaba trabajando a su alrededor: hojas de cálculo aparte, campos que significan otra cosa, facturas en otra herramienta y un equipo que copia los mismos datos tres veces.',
        'Un CRM a medida empieza por el otro extremo. Se diseña en torno a tus clientes, tu proceso y tu papeleo — para que el sistema haga la administración y tu equipo, el trabajo.',
      ],
    },
    steps: {
      label: 'Cómo lo construye el estudio',
      items: [
        {
          title: 'Mapear el flujo de trabajo',
          body: 'El estudio se sienta con quienes lo van a usar y mapea cómo fluye realmente el trabajo: qué entra, quién lo recoge, qué se factura y qué hay que reportar.',
        },
        {
          title: 'Diseñado en torno a ti',
          body: 'Tus propias piezas — clientes y expedientes, artistas y eventos, platos y pedidos — con los campos, estados y permisos que tu negocio usa de verdad.',
        },
        {
          title: 'Construir en pasos que funcionan',
          body: 'El núcleo sale primero, para que tu equipo lo use pronto. Facturación, pagos, portales e integraciones llegan después, cada uno probado con trabajo real.',
        },
        {
          title: 'Seguir creciendo',
          body: 'Una vez en marcha, el estudio lo sigue ampliando — un informe nuevo, una integración nueva o agentes de IA que le quitan trabajo a tu equipo.',
        },
      ],
    },
    features: {
      label: 'Qué puede incluir',
      items: [
        { title: 'Clientes, expedientes y pipelines', body: 'Clientes con sus expedientes o proyectos, partes y contactos, y pipelines con las fases que tu negocio tiene de verdad.' },
        { title: 'Horas y facturación', body: 'Un temporizador en vivo por expediente, horas que se convierten en facturas y PDF con tu marca enviados por correo con un enlace de pago que las marca como pagadas automáticamente.' },
        { title: 'Pedidos y pagos', body: 'Pedidos que pasan de nuevo a completado, pagos online, reembolsos y un stock que se actualiza solo.' },
        { title: 'Documentos y archivos', body: 'Una carpeta por cliente o expediente, una estructura estándar que se crea automáticamente y archivos que se quedan donde está el trabajo.' },
        { title: 'Paneles e informes', body: 'Las cifras que mueven tu negocio de un vistazo, más informes en PDF sobre finanzas, horas y trabajo pendiente.' },
        { title: 'Acceso y seguridad', body: 'Permisos por rol y por módulo, invitaciones para nuevos usuarios e inicio de sesión con verificación en dos pasos.' },
      ],
    },
    useCases: {
      label: 'Pensado para',
      lead: 'Negocios cuya forma de trabajar no cabe en una caja estándar.',
      items: ['Despachos y servicios profesionales', 'Sellos, agencias y eventos', 'Hostelería y comercio', 'Empresas de servicios', 'Asociaciones y fundaciones', 'Equipos en crecimiento'],
    },
    references: {
      label: 'Referencias',
      lead: 'CRM que el estudio ha construido y opera hoy.',
      items: [
        {
          sector: 'Despacho de abogados · Róterdam',
          body: 'Gestión de expedientes para todo el despacho: clientes y expedientes, un temporizador en vivo en cada expediente, los cuatro tipos de factura para abogados en los Países Bajos, facturas en PDF con su marca enviadas por correo con un enlace de pago que las marca como pagadas, informes en PDF, una carpeta de documentos por expediente y permisos por rol con verificación en dos pasos.',
        },
        {
          sector: 'Sello discográfico y eventos',
          body: 'El sistema con el que funciona el sello: un pipeline de artistas desde el primer contacto hasta la firma, bandejas de demos y solicitudes de sesión que llegan desde la web, producción de eventos con horarios, presupuesto, socios y subvenciones, un calendario compartido y un portal donde los artistas gestionan su propio perfil.',
        },
        {
          sector: 'Restaurante · Schiedam',
          body: 'Gestión de pedidos para un restaurante: un flujo de cocina de nuevo a listo, reembolsos desde el panel, platos con alérgenos y fotos, horarios y un botón de pausa — con un agente telefónico de IA que mete los pedidos en el mismo flujo.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      items: [
        {
          q: '¿Por qué no usar un CRM existente?',
          a: 'Si un CRM estándar encaja con tu negocio, úsalo. Uno a medida tiene sentido cuando tu proceso, tus facturas o tus datos no encajan — y tu equipo pierde tiempo trabajando alrededor del software en lugar de con él.',
        },
        {
          q: '¿Se puede conectar con las herramientas que ya usamos?',
          a: 'Sí. Pagos, correo, contabilidad, un sistema de caja, tu web o tienda online — el CRM se construye para funcionar con lo que ya tienes.',
        },
        {
          q: '¿Pueden trabajar agentes de IA en él?',
          a: 'Sí. Como el estudio construye el CRM, los agentes de IA pueden conectarse directamente — contestar el teléfono, tomar pedidos o preparar trabajo, dentro de los permisos que tú les des.',
        },
        {
          q: '¿Están seguros mis datos?',
          a: 'Cada usuario solo ve lo que su rol permite, y el inicio de sesión puede exigir verificación en dos pasos. El sistema lo construye y mantiene el estudio, así siempre sabes dónde están tus datos y quién puede acceder.',
        },
        {
          q: '¿Cuánto cuesta?',
          a: 'Depende de lo que tenga que hacer el CRM. Tras una primera conversación recibes una propuesta clara con un alcance cerrado, y el núcleo puede estar en marcha antes de que todo lo demás esté listo.',
        },
      ],
    },
    getStarted: {
      label: 'Agenda una conversación',
      heading: '¿Qué debería hacer tu CRM?',
      body: 'Cuéntanos cómo funciona hoy tu negocio y dónde te estorba el software. El estudio responde en menos de 24 horas.',
      form: {
        messageLabel: 'Tu negocio',
        messagePlaceholder:
          '¿Qué tipo de negocio es, cuántas personas usarían el CRM y qué usáis hoy (hojas de cálculo, un CRM estándar, una herramienta de facturación…)? ¿Qué es lo que más tiempo os cuesta?',
        sendLabel: 'agenda una conversación',
      },
    },
    posterRailMiddle: 'CRM · Construido en torno a tu negocio',
  },
}

export const productUi = {
  softwarePage: {
    meta: {
      title: 'Software — productos construidos y operados por el estudio',
      description:
        'El software propio del estudio: Voice AI, un agente telefónico con IA para cualquier negocio; No-CMS, edición de webs por WhatsApp; y Poofy, una app de tareas a golpe de swipe para iPhone y Mac.',
    },
    eyebrow: 'Software',
    titleLine1: 'Software',
    titleAccent: '.',
    lead: 'Además del trabajo para clientes, el estudio construye y opera sus propios productos. Cada uno resuelve bien un solo problema.',
    openLabel: 'Ver',
    posterRailMiddle: 'Software · Construido y operado por el estudio',
  },
  seeProduct: 'Ver el producto',
  formDefaults: {
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre',
    emailLabel: 'Correo',
    emailPlaceholder: 'tu@empresa.com',
    companyLabel: 'Empresa',
    companyOptional: 'opcional',
    companyPlaceholder: 'Empresa o web',
  },
}
