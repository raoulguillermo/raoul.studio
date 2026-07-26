// Contenido plano de las páginas estáticas (nosotros, proceso, trabajo), por slug.

export const pages = {
  work: {
    slug: 'work',
    meta: {
      title: 'Trabajo',
      description:
        'Proyectos seleccionados del estudio: plataformas a medida, SaaS, herramientas de IA, e-commerce headless y CRMs para equipos de fintech, derecho y comercio, además de nuestros propios productos.',
    },
    eyebrow: 'Trabajo seleccionado',
    titleLine1: 'Trabajo',
    titleAccent: '.',
    lead:
      'Cada proyecto es un problema real de negocio, resuelto de principio a fin y construido para funcionar en producción. Las plataformas y herramientas que hemos entregado para clientes, y los productos que construimos y operamos nosotros mismos.',
    groups: {
      client: 'Trabajo para clientes',
      product: 'Productos propios',
    },
    posterRailMiddle: 'Trabajo · Proyectos seleccionados',
  },

  about: {
    slug: 'about',
    meta: {
      title: 'Sobre nosotros',
      description:
        'Una agencia digital y estudio de producto con sede en Rotterdam que diseña, construye y hace crecer productos completos, combinando estrategia, ingeniería, IA, automatización y marca para fintech, derecho, agencias y e-commerce.',
    },
    eyebrow: 'Sobre nosotros',
    titleLine1: 'Sobre nosotros',
    titleAccent: '.',
    intro: [
      {
        text: 'raoul.studio es una agencia digital y estudio de producto con sede en Rotterdam que ayuda a empresas ambiciosas a convertir ideas en productos digitales escalables. Combinamos estrategia, branding, ingeniería de software, IA, automatización e infraestructura para crear soluciones que aportan valor de negocio duradero.',
      },
      {
        text: 'Nos asociamos con fundadores, startups y empresas consolidadas para diseñar, construir y hacer evolucionar plataformas a medida, herramientas impulsadas por IA, soluciones de commerce y experiencias digitales. Cada proyecto lo afrontamos con mentalidad de producto: resolver retos de negocio reales, crear experiencias de usuario intuitivas y construir tecnología que pueda crecer junto al negocio.',
      },
      {
        text: 'Construimos relaciones a largo plazo con equipos que quieren ir rápido, pensar en grande y crear productos digitales con sentido. Desde la primera idea hasta el lanzamiento —y cada iteración que sigue— trabajamos como una extensión de tu equipo, centrados en generar un impacto medible a través de la tecnología.',
        highlight: 'Construimos relaciones a largo plazo',
      },
    ],
    servicesLabel: 'Lo que construimos',
    services: [
      { label: 'Plataformas web a medida y SaaS' },
      { label: 'E-commerce headless a gran escala' },
      { label: 'Herramientas de IA y automatización' },
      { label: 'CRMs y herramientas internas' },
      { label: 'APIs y arquitectura de sistemas' },
      { label: 'Marketplaces de dos lados' },
    ],
    systemsParagraph: [
      'Construimos productos digitales pensados para evolucionar. Cada plataforma se asienta sobre una base técnica sólida, con arquitectura escalable, ingeniería bien pensada y el crecimiento futuro en mente. Ya sea una plataforma impulsada por IA, un ecosistema de commerce o una aplicación de negocio a medida, creamos tecnología que se adapta a medida que crece tu negocio.',
      'Desde la primera sesión de estrategia hasta mucho después del lanzamiento, nos centramos en construir soluciones digitales robustas, escalables y hechas para durar.',
    ],
    manifestoLead: 'Donde la estrategia, la IA y el software',
    manifestoTail: 'se encuentran.',
    posterRailMiddle: 'Sobre nosotros · Estudio',
  },

  process: {
    slug: 'process',
    meta: {
      title: 'Proceso',
      description:
        'Cómo trabaja el estudio: dirección, estructura, diseño, construcción, iteración, escala. Directo, centrado en entregar productos a medida que perduran.',
    },
    eyebrow: 'Proceso',
    titleLine1: 'Proceso',
    titleAccent: '.',
    lead:
      'Seis etapas, un principio: entender el sistema antes de construirlo. Vamos rápido porque el pensamiento se hace al principio, no porque nos lo saltemos. Productos a medida, dados forma paso a paso.',
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
            text: 'Antes de una sola pantalla, mapeamos los datos, los flujos y la arquitectura. Los productos a medida viven o mueren por lo que tienen debajo.',
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
            text: 'Nos quedamos. La mayor parte de nuestro trabajo es a largo plazo, y tratamos lo que construimos como si fuera nuestro.',
          },
        ],
      },
    ],
    howWeWork: {
      label: 'Cómo trabajamos',
      lead: 'Directo y dirigido por sus fundadores. Hablas con las personas que construyen la cosa.',
      points: [
        { label: 'Comunicación directa' },
        { label: 'Decisiones ágiles' },
        { label: 'Sin capas, sin ruido' },
      ],
      closing: 'Trabajas con las personas que construyen.',
    },
    faq: {
      label: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Qué hace raoul.studio?',
          a: 'raoul.studio es un estudio de producto digital. Diseñamos, construimos y hacemos crecer productos a medida: plataformas web y SaaS, e-commerce headless, herramientas de IA y automatización, CRMs y herramientas internas, APIs y marketplaces de dos lados, para fintech, despachos de abogados, agencias comerciales y equipos de e-commerce, junto a nuestros propios productos.',
        },
        {
          q: '¿Cómo trabajáis?',
          a: 'Cada proyecto pasa por seis etapas: Dirección, Estructura, Diseño, Construcción, Iteración y Escala. El principio es entender el sistema antes de construirlo: el pensamiento se hace al principio, así la construcción avanza rápido sin saltarse pasos.',
        },
        {
          q: '¿Cuánto tarda un proyecto?',
          a: 'Depende del alcance, pero trabajamos en ciclos cortos con lanzamientos pequeños y frecuentes, en lugar de una gran revelación al final. Ves los avances según llegan y el producto se afina en cada ciclo, porque la arquitectura y la dirección quedan cerradas antes de empezar a construir.',
        },
        {
          q: '¿Con quién trabajáis?',
          a: 'Sobre todo con fintech, despachos de abogados, agencias comerciales y equipos de e-commerce. Parte del trabajo es para clientes, parte son nuestros propios productos: todo está hecho para funcionar en producción.',
        },
        {
          q: '¿Ofrecéis soporte continuo tras el lanzamiento?',
          a: 'Sí. La mayor parte de nuestro trabajo es a largo plazo: los sistemas se construyen para crecer contigo en usuarios, datos, idiomas y funcionalidades, y seguimos implicados en lugar de entregar y desaparecer.',
        },
        {
          q: '¿Cómo arranco un proyecto?',
          a: 'Cuéntanos qué estás construyendo o qué te está frenando: escribe a hello@raoul.studio o usa la página de contacto. Cada briefing real se lee, con respuesta en menos de 24 horas.',
        },
      ],
    },
    posterRailMiddle: 'Proceso · Dirección → Escala',
  },

  privacy: {
    slug: 'privacy',
    meta: {
      title: 'Política de privacidad',
      description:
        'Cómo trata raoul.studio los datos personales: qué recogemos a través del formulario de contacto, por qué, quién los procesa, cuánto los conservamos y tus derechos bajo el RGPD.',
    },
    eyebrow: 'Legal',
    titleLine1: 'Privacidad',
    titleAccent: '.',
    updated: 'Última actualización — junio de 2026',
    intro:
      'Esta política explica qué datos personales recoge raoul.studio, por qué los recogemos y qué derechos tienes sobre ellos. Limitamos la recogida de datos al mínimo necesario para llevar el estudio y responder a quienes nos escriben.',
    sections: [
      {
        heading: 'Quiénes somos',
        body: [
          'raoul.studio es un estudio de producto e ingeniería dirigido por Raoul Guillermo, con sede en la UE. Para cualquier asunto de esta política —o para ejercer tus derechos— escríbenos a hello@raoul.studio.',
          'A efectos del RGPD, raoul.studio es el responsable del tratamiento de los datos personales descritos aquí.',
        ],
      },
      {
        heading: 'Qué recogemos',
        body: [
          'Solo recogemos los datos personales que nos facilitas o que tu navegador envía cuando usas el sitio:',
        ],
        points: [
          'Formulario de contacto: tu nombre, dirección de correo, el nombre de tu empresa (opcional) y el mensaje que escribes.',
          'Datos técnicos: al enviar el formulario guardamos la dirección IP y el agente de usuario del navegador de la petición, para protegernos del spam y los abusos.',
          'Preferencia de idioma: una pequeña cookie "lang" recuerda en qué idioma elegiste leer el sitio.',
        ],
      },
      {
        heading: 'Para qué los usamos, y nuestra base legal',
        body: [
          'Usamos tus datos de contacto y tu mensaje para una sola cosa: leer y responder a tu consulta. La base legal es nuestro interés legítimo en responder a quienes nos contactan y en dar los pasos que solicites antes de un posible acuerdo.',
          'Usamos los datos técnicos (IP, agente de usuario) sobre la base de nuestro interés legítimo en mantener el formulario seguro y libre de spam. La cookie de idioma es una cookie funcional establecida sobre la base de tu elección.',
        ],
      },
      {
        heading: 'Cookies',
        body: [
          'El sitio usa una única cookie funcional ("lang") para recordar tu idioma. No usamos cookies publicitarias y no realizamos seguimiento ni perfilado de terceros sobre ti.',
        ],
      },
      {
        heading: 'Quién procesa tus datos',
        body: ['Mantenemos reducido el número de terceros. Los que pueden tratar tus datos son:'],
        points: [
          'SendGrid (Twilio Inc.) — nos entrega el correo del formulario de contacto. Tu nombre, correo y mensaje pasan por él.',
          'Nuestros propios servidores — el sitio web se aloja en infraestructura que gestionamos, y los envíos de contacto se almacenan en nuestra base de datos allí.',
        ],
      },
      {
        heading: 'Transferencias internacionales',
        body: [
          'SendGrid (Twilio) es una empresa estadounidense, por lo que enviar un correo de contacto puede implicar transferir tus datos fuera de la UE. Cuando eso ocurre, está cubierto por garantías adecuadas como las Cláusulas Contractuales Tipo de la Comisión Europea.',
        ],
      },
      {
        heading: 'Cuánto los conservamos',
        body: [
          'Conservamos los envíos de contacto durante el tiempo que necesitamos para atender tu consulta y para nuestros propios registros, y no más de lo necesario. Puedes pedirnos que eliminemos tus datos en cualquier momento.',
        ],
      },
      {
        heading: 'Tus derechos',
        body: ['Bajo el RGPD tienes derecho a:'],
        points: [
          'acceder a los datos personales que tenemos sobre ti;',
          'que se corrijan o eliminen;',
          'limitar u oponerte a cómo los usamos;',
          'recibirlos en un formato portable.',
        ],
      },
      {
        heading: 'Reclamaciones',
        body: [
          'Para ejercer cualquiera de estos derechos, escribe a hello@raoul.studio. Si crees que hemos tratado mal tus datos, también tienes derecho a reclamar ante tu autoridad local de protección de datos: en los Países Bajos, la Autoriteit Persoonsgegevens.',
        ],
      },
      {
        heading: 'Seguridad',
        body: [
          'Tomamos medidas técnicas y organizativas razonables para proteger tus datos, incluido el cifrado en tránsito y el acceso restringido. Ningún sistema es perfectamente seguro, pero mantenemos pequeña la superficie de ataque recogiendo poco de entrada.',
        ],
      },
      {
        heading: 'Software, seguridad y responsabilidad',
        body: [
          'El sitio web y cualquier herramienta o software que pongamos a tu disposición se ofrecen «tal cual» y «según disponibilidad». Ponemos un cuidado razonable en mantenerlos seguros y operativos, pero ningún software ni servicio en línea puede garantizar que sea completamente seguro, ininterrumpido o libre de errores.',
          'En la máxima medida permitida por la ley, raoul.studio no se hace responsable de ninguna pérdida de datos, interrupción del servicio, brecha de seguridad, acceso no autorizado, ni de ningún daño directo o indirecto derivado del uso —o de la imposibilidad de uso— del sitio web o de nuestro software, incluidos los incidentes ajenos a nuestro control razonable, como ataques o intrusiones de terceros o caídas del servicio.',
          'Nada de lo aquí dispuesto limita los derechos que te asisten en virtud del RGPD, ni ninguna responsabilidad que no pueda excluirse legalmente, incluida la responsabilidad por dolo o negligencia grave.',
        ],
      },
      {
        heading: 'Cambios en esta política',
        body: [
          'Podemos actualizar esta política a medida que el estudio cambie. Cuando lo hagamos, actualizaremos la fecha en la parte superior de esta página.',
        ],
      },
    ],
    directLabel: 'Preguntas de privacidad',
    directEmail: 'hello@raoul.studio',
    posterRailMiddle: 'Privacidad · Legal',
  },
}
