// Página de servicios — lo que hace el estudio, con las estructuras de agentes primero.
// Sin nombres de clientes ni proveedores en esta página.

export const services = {
  meta: {
    title: 'Servicios — estructuras de agentes de IA, software y productos digitales',
    description:
      'Qué hace studio.raoul: estructuras completas de agentes de IA que llevan el día a día de un negocio, software y plataformas a medida, automatización, comercio, marca y colaboraciones de producto a largo plazo.',
  },
  eyebrow: 'Servicios',
  titleLine1: 'Servicios',
  titleAccent: '.',
  lead: 'El estudio diseña, construye y opera los sistemas sobre los que funciona un negocio — desde una sola herramienta hasta un equipo completo de agentes de IA que se encarga del día a día por ti.',

  agents: {
    label: '01 — Estructuras de agentes de IA',
    heading: 'Un equipo de agentes de IA que lleva tu negocio contigo.',
    intro: [
      'No es un chatbot en tu web. El estudio construye una estructura completa de agentes de IA, cada uno con su propio trabajo — contestar el teléfono, gestionar el correo, tramitar pedidos, planificar, facturar, hacer seguimiento, informar — que colaboran como un equipo bien engrasado.',
      'Cada agente está conectado a los sistemas que ya usas, sabe exactamente qué puede y qué no puede hacer, y pasa el testigo a una persona cuando esa es la mejor respuesta. Tú mantienes las decisiones. Los agentes se ocupan del resto, de día y de noche.',
    ],
    diagram: {
      owner: 'Tú',
      ownerNote: 'Marcas los objetivos · apruebas lo que importa',
      orchestrator: 'Coordinador',
      orchestratorNote: 'Reparte el trabajo · revisa resultados · escala',
      teams: [
        { name: 'Atención al cliente', agents: ['Teléfono', 'Correo', 'WhatsApp y chat'] },
        { name: 'Operaciones', agents: ['Pedidos', 'Planificación', 'Seguimiento'] },
        { name: 'Administración', agents: ['Facturación', 'Informes', 'Gestión'] },
      ],
      systems: 'Tus sistemas',
      systemsNote: 'CRM · agenda · tienda online · ERP · contabilidad · correo',
      caption: 'Una estructura de agentes',
    },
    stepsLabel: 'Cómo lo pone en marcha el estudio',
    steps: [
      {
        title: 'Mapear el negocio',
        body: 'El estudio se sienta contigo y mapea cómo fluye realmente el trabajo: qué preguntas llegan, qué tareas se repiten, qué decisiones necesitan a una persona y dónde se escapan el tiempo y el dinero.',
      },
      {
        title: 'Diseñar la estructura',
        body: 'El trabajo se divide en roles — un agente por tarea — con un coordinador por encima. Para cada rol se decide qué puede consultar el agente, qué puede cambiar y cuándo debe preguntarte primero.',
      },
      {
        title: 'Conectar tus sistemas',
        body: 'Los agentes se conectan a las herramientas con las que ya trabajas: CRM, agenda, tienda online, caja, contabilidad, correo y teléfono. Si un sistema aún no tiene conexión, el estudio la construye — o construye el sistema.',
      },
      {
        title: 'Probarlo con trabajo real',
        body: 'Un agente se prueba con el trabajo real que va a hacer, y tú ves lo que produce antes de que pueda actuar por su cuenta.',
      },
      {
        title: 'Entregar y seguir mejorando',
        body: 'Una vez en marcha, el estudio sigue vigilando, ajustando y ampliando la estructura — un agente nuevo para una tarea nueva, una conexión nueva cuando tu negocio cambia.',
      },
    ],
    guardrailsLabel: 'Tú mantienes el control',
    guardrails: [
      {
        title: 'Permisos claros',
        body: 'Cada agente solo accede a lo que su trabajo necesita. Un agente que toma pedidos no puede hacer reembolsos.',
      },
      {
        title: 'Confirmación integrada',
        body: 'Todo lo importante se confirma antes de hacerse — y esa comprobación la impone el sistema, no se deja en manos de la IA.',
      },
      {
        title: 'Una persona cuando cuenta',
        body: 'Los agentes saben cuándo parar y pasarte el trabajo a ti o a tu equipo, con todo lo necesario para retomarlo.',
      },
      {
        title: 'Todo registrado',
        body: 'Cada llamada, mensaje y acción queda registrado, así siempre puedes ver qué pasó y por qué.',
      },
    ],
  },

  offer: {
    label: '02 — Todo lo que lo rodea',
    lead: 'Los agentes son tan buenos como los sistemas que tienen debajo. El estudio también construye esos.',
    items: [
      {
        title: 'Software y plataformas a medida',
        body: 'Plataformas SaaS, portales, marketplaces y herramientas internas — diseñados, construidos y operados en producción.',
      },
      {
        title: 'Automatización e integraciones',
        body: 'Conectar las herramientas que un negocio ya usa, para que los datos fluyan solos en vez de copiarse a mano.',
      },
      {
        title: 'Herramientas de IA',
        body: 'Análisis de documentos, búsqueda, IA respetuosa con la privacidad que funciona en tu propio hardware y asistentes integrados en tu forma de trabajar.',
      },
      {
        title: 'Comercio',
        body: 'Tiendas online a escala, storefronts headless, gestión de productos y stock, y las trastiendas que los sostienen.',
      },
      {
        title: 'Marca y webs',
        body: 'Identidad, webs y experiencias digitales — el producto y la marca que lo rodea, diseñados juntos.',
      },
      {
        title: 'Infraestructura y crecimiento',
        body: 'Hosting, seguridad, rendimiento y desarrollo continuo mucho después del lanzamiento.',
      },
    ],
  },

  faq: {
    label: 'FAQ',
    items: [
      {
        q: '¿De verdad pueden los agentes de IA llevar un negocio?',
        a: 'Pueden llevar gran parte del día a día: atender a clientes, tramitar pedidos y reservas, hacer seguimiento, preparar facturas e informes. Las decisiones importantes siguen siendo tuyas — la estructura está hecha para que los agentes hagan el trabajo y tú apruebes lo que cuenta.',
      },
      {
        q: '¿Tengo que sustituir mi software actual?',
        a: 'No. Los agentes se conectan a los sistemas que ya usas. Solo donde falta algo o te frena, el estudio construye algo nuevo.',
      },
      {
        q: '¿Por dónde empiezo?',
        a: 'Normalmente por la tarea que más tiempo consume o más dinero deja escapar — a menudo el teléfono o el correo. Primero se pone en marcha un agente, y la estructura crece desde ahí.',
      },
      {
        q: '¿Y si un agente se equivoca?',
        a: 'Los agentes solo actúan dentro de los permisos que se les dan, las acciones importantes requieren confirmación y todo queda registrado. Si un agente duda, pasa el trabajo a una persona en lugar de adivinar.',
      },
      {
        q: '¿Cuánto cuesta?',
        a: 'Depende de cuántos agentes, a qué sistemas se conectan y cuánto se construye a medida. Cuéntale al estudio lo que tienes en mente y recibes una respuesta para tu caso.',
      },
    ],
  },

  cta: {
    heading: '¿Qué delegarías primero?',
    body: 'Cuéntale al estudio cómo funciona hoy tu negocio. Recibirás respuesta en menos de 24 horas.',
    label: 'Hablemos',
    href: '/contact',
  },
  posterRailMiddle: 'Servicios · Agentes, software y productos',
}
