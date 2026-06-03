// Contenido plano de las páginas estáticas (nosotros, proceso, trabajo), por slug.

export const pages = {
  work: {
    slug: 'work',
    meta: {
      title: 'Trabajo — raoul.studio',
      description:
        'Proyectos seleccionados del estudio: plataformas a medida, SaaS, herramientas de IA, e-commerce headless y CRMs para equipos de fintech, derecho y comercio.',
    },
    eyebrow: 'Trabajo seleccionado',
    titleLine1: 'Trabajo',
    titleAccent: '.',
    lead:
      'Cada proyecto es a medida, construido de principio a fin y pensado para funcionar en producción. Un vistazo a lo que el estudio ha entregado, y a lo que está construyendo ahora.',
    posterRailMiddle: 'Trabajo · Proyectos seleccionados',
  },

  about: {
    slug: 'about',
    meta: {
      title: 'Nosotros — raoul.studio',
      description:
        'Un estudio de producto e ingeniería dirigido por su fundador que crea software a medida para fintech, derecho, agencias y e-commerce. Hecho a mano, a nivel de producción, pensado para escalar.',
    },
    eyebrow: 'Nosotros',
    titleLine1: 'Estudio',
    titleAccent: '.',
    intro: [
      {
        text: 'raoul.studio es un estudio de producto e ingeniería. Construimos herramientas y plataformas a medida, hechas a mano: software que se adapta a cómo funciona realmente un negocio, y no al revés.',
      },
      {
        text: 'Trabajamos con fintech, despachos de abogados, agencias comerciales y equipos de e-commerce. Parte es trabajo para clientes; parte son nuestros propios productos. Todo está hecho para funcionar en producción.',
      },
      {
        text: 'Dirigido por su fundador, Raoul Guillermo, con una larga trayectoria construyendo software de producción de principio a fin. Equipo pequeño, trato directo, sin capas entre el briefing y la ejecución.',
      },
    ],
    servicesLabel: 'El estudio trabaja en',
    services: [
      { label: 'Plataformas web a medida y SaaS' },
      { label: 'E-commerce headless a gran escala' },
      { label: 'Herramientas de IA y automatización' },
      { label: 'CRMs y herramientas internas' },
      { label: 'APIs y arquitectura de sistemas' },
      { label: 'Marketplaces de dos lados' },
    ],
    systemsParagraph:
      'No entregamos páginas sueltas. Cada proyecto se construye como un sistema: arquitectura limpia, modelos de datos reales, espacio para crecer. La primera versión debe aguantar bajo carga, y la décima funcionalidad no debería pelearse con la primera. Trabajo a medida, hecho para escalar.',
    manifestoLead: 'Preferimos hacer pocas cosas bien que muchas deprisa.',
    manifestoTail: 'Dirigido por su fundador, hecho a medida, a largo plazo.',
    posterRailMiddle: 'Nosotros · Estudio · Manifiesto',
  },

  process: {
    slug: 'process',
    meta: {
      title: 'Proceso — raoul.studio',
      description:
        'Cómo trabaja el estudio: dirección, estructura, diseño, construcción, iteración, escala. Dirigido por su fundador, directo, centrado en entregar software a medida que perdura.',
    },
    eyebrow: 'Proceso',
    titleLine1: 'Proceso',
    titleAccent: '.',
    lead:
      'Seis etapas, un principio: entender el sistema antes de construirlo. Vamos rápido porque el pensamiento se hace al principio, no porque nos lo saltemos. Software a medida, dado forma paso a paso.',
    steps: [
      {
        title: 'Dirección',
        lead: 'Definir qué estamos construyendo de verdad.',
        body: [
          {
            text: 'Empezamos por el problema, no por la lista de funcionalidades. Qué está roto, qué va lento, qué te está costando, y qué significa "terminado".',
          },
          {
            text: 'Sales de esta etapa con un alcance claro y una idea compartida de adónde vamos. Sin sorpresas más adelante.',
          },
        ],
      },
      {
        title: 'Estructura',
        lead: 'Diseñar el sistema que va por debajo.',
        body: [
          {
            text: 'Antes de una sola pantalla, mapeamos los datos, los flujos y la arquitectura. Las herramientas a medida viven o mueren por lo que tienen debajo.',
          },
          {
            text: 'Acierta aquí y todo lo que venga después será más fácil. Falla y lo pagarás para siempre.',
          },
        ],
      },
      {
        title: 'Diseño',
        lead: 'Que sea claro, que sea usable.',
        body: [
          {
            text: 'Diseñamos en torno al flujo de trabajo real: las acciones diarias, los casos límite, las personas que de verdad lo van a usar.',
          },
          {
            text: 'Nítido, rápido, sin ruido. La interfaz debe desaparecer y dejar que el trabajo ocurra.',
          },
        ],
      },
      {
        title: 'Construcción',
        lead: 'Código a nivel de producción.',
        body: [
          {
            text: 'Hecho a mano, sin código de relleno. Stack moderno, base de código limpia, lista para producción desde el primer día.',
          },
          {
            text: 'Construimos en abierto contigo: ves los avances según llegan, no en una gran revelación al final.',
          },
        ],
      },
      {
        title: 'Iteración',
        lead: 'Ponerlo frente al uso real.',
        body: [
          {
            text: 'Los usuarios reales sacan a la luz lo que las especificaciones no pueden. Entregamos, observamos y ajustamos: ciclos cortos, lanzamientos pequeños.',
          },
          { text: 'El producto se vuelve más afinado en cada ciclo.' },
        ],
      },
      {
        title: 'Escala',
        lead: 'Pensado para crecer contigo.',
        body: [
          {
            text: 'Más usuarios, más datos, más idiomas, más funcionalidades: el sistema se construyó para soportarlo.',
          },
          {
            text: 'Nos quedamos. La mayoría de nuestro trabajo es a largo plazo, y tratamos lo que construimos como si fuera nuestro.',
          },
        ],
      },
    ],
    howWeWork: {
      label: 'Cómo trabajamos',
      lead: 'Dirigido por su fundador y directo. Hablas con quien construye la cosa.',
      points: [
        { label: 'Comunicación directa' },
        { label: 'Decisiones ágiles' },
        { label: 'Sin capas, sin ruido' },
      ],
      closing: 'Trabajas con gente que construye.',
    },
    faq: {
      label: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Qué hace raoul.studio?',
          a: 'raoul.studio es un estudio de producto e ingeniería dirigido por su fundador que crea software a medida, hecho a mano: plataformas web y SaaS, e-commerce headless, herramientas de IA y automatización, CRMs y herramientas internas, APIs y marketplaces de dos lados, para fintech, despachos de abogados, agencias comerciales y equipos de e-commerce.',
        },
        {
          q: '¿Cómo trabaja el estudio?',
          a: 'Cada proyecto pasa por seis etapas: Dirección, Estructura, Diseño, Construcción, Iteración y Escala. El principio es entender el sistema antes de construirlo: el pensamiento se hace al principio, así la construcción avanza rápido sin saltarse pasos.',
        },
        {
          q: '¿Cuánto tarda un proyecto?',
          a: 'Depende del alcance, pero el estudio trabaja en ciclos cortos con lanzamientos pequeños y frecuentes, en lugar de una gran revelación al final. Ves los avances según llegan y el producto se afina en cada ciclo, porque la arquitectura y la dirección quedan cerradas antes de empezar a construir.',
        },
        {
          q: '¿Con quién trabaja el estudio?',
          a: 'Sobre todo con fintech, despachos de abogados, agencias comerciales y equipos de e-commerce. Parte del trabajo es para clientes, parte son los propios productos del estudio: todo está hecho para funcionar en producción. Solo briefings reales.',
        },
        {
          q: '¿Ofrecéis soporte continuo tras el lanzamiento?',
          a: 'Sí. La mayor parte del trabajo del estudio es a largo plazo: los sistemas se construyen para crecer contigo en usuarios, datos, idiomas y funcionalidades, y el equipo sigue implicado en lugar de entregar y desaparecer.',
        },
        {
          q: '¿Cómo arranco un proyecto?',
          a: 'Cuéntale al estudio qué estás construyendo o qué te está frenando: escribe a hello@raoul.studio o usa la página de contacto. Cada briefing real se lee, con respuesta en menos de 24 horas.',
        },
      ],
    },
    posterRailMiddle: 'Proceso · Dirección → Escala',
  },
}
