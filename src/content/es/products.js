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
