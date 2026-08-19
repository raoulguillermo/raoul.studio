// Contenido plano de las páginas estáticas (nosotros, proceso, trabajo), por slug.

export const pages = {
  work: {
    slug: 'work',
    meta: {
      title: 'Trabajo',
      description:
        'Proyectos seleccionados del estudio: plataformas a medida, SaaS, herramientas de IA, e-commerce headless y CRMs para equipos de fintech, derecho y comercio, además de los productos propios del estudio.',
    },
    eyebrow: 'Trabajo seleccionado',
    titleLine1: 'Trabajo',
    titleAccent: '.',
    lead:
      'Cada proyecto es un problema real de negocio, resuelto de principio a fin y construido para funcionar en producción. Las plataformas y herramientas que el estudio ha entregado para clientes, y los productos que construye y opera por sí mismo.',
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
        text: 'raoul.studio es una agencia digital y estudio de producto con sede en Rotterdam que ayuda a empresas ambiciosas a convertir ideas en productos digitales escalables. En el estudio se combinan estrategia, branding, ingeniería de software, IA, automatización e infraestructura para crear soluciones que aportan valor de negocio duradero.',
      },
      {
        text: 'El estudio se asocia con fundadores, startups y empresas consolidadas para diseñar, construir y hacer evolucionar plataformas a medida, herramientas impulsadas por IA, soluciones de commerce y experiencias digitales. Cada proyecto se afronta con mentalidad de producto: resolver retos de negocio reales, crear experiencias de usuario intuitivas y construir tecnología que pueda crecer junto al negocio.',
      },
      {
        text: 'El estudio construye relaciones a largo plazo con equipos que quieren ir rápido, pensar en grande y crear productos digitales con sentido. Desde la primera idea hasta el lanzamiento —y cada iteración que sigue— el estudio trabaja como una extensión de tu equipo, centrado en generar un impacto medible a través de la tecnología.',
        highlight: 'El estudio construye relaciones a largo plazo',
      },
    ],
    servicesLabel: 'Lo que construye el estudio',
    services: [
      { label: 'Plataformas web a medida y SaaS' },
      { label: 'E-commerce headless a gran escala' },
      { label: 'Herramientas de IA y automatización' },
      { label: 'CRMs y herramientas internas' },
      { label: 'APIs y arquitectura de sistemas' },
      { label: 'Marketplaces de dos lados' },
    ],
    systemsParagraph: [
      'El estudio construye productos digitales pensados para evolucionar. Cada plataforma se asienta sobre una base técnica sólida, con arquitectura escalable, ingeniería bien pensada y el crecimiento futuro en mente. Ya sea una plataforma impulsada por IA, un ecosistema de commerce o una aplicación de negocio a medida, el estudio crea tecnología que se adapta a medida que crece tu negocio.',
      'Desde la primera sesión de estrategia hasta mucho después del lanzamiento, el estudio se centra en construir soluciones digitales robustas, escalables y hechas para durar.',
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
      'Seis etapas, un principio: entender el sistema antes de construirlo. El estudio va rápido porque el pensamiento se hace al principio, no porque se salte pasos. Productos a medida, dados forma paso a paso.',
    steps: [
      {
        title: 'Dirección',
        lead: 'Definir qué se está construyendo de verdad.',
        body: [
          {
            text: 'El estudio empieza por el problema, no por la lista de funcionalidades. Qué está roto, qué va lento, qué te está costando, y qué significa "terminado".',
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
            text: 'Antes de una sola pantalla, el estudio mapea los datos, los flujos y la arquitectura. Los productos a medida viven o mueren por lo que tienen debajo.',
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
            text: 'El estudio diseña en torno al flujo de trabajo real: las acciones diarias, los casos límite, las personas que de verdad lo van a usar.',
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
            text: 'El estudio construye en abierto contigo: ves los avances según llegan, no en una gran revelación al final.',
          },
        ],
      },
      {
        title: 'Iteración',
        lead: 'Ponerlo frente al uso real.',
        body: [
          {
            text: 'Los usuarios reales sacan a la luz lo que las especificaciones no pueden. El estudio entrega, observa y ajusta: ciclos cortos, lanzamientos pequeños.',
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
            text: 'El estudio se queda. La mayor parte de su trabajo es a largo plazo, y trata lo que construye como si fuera suyo.',
          },
        ],
      },
    ],
    howWeWork: {
      label: 'Cómo trabaja el estudio',
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
          a: 'raoul.studio es un estudio de producto digital. Diseña, construye y hace crecer productos a medida: plataformas web y SaaS, e-commerce headless, herramientas de IA y automatización, CRMs y herramientas internas, APIs y marketplaces de dos lados, para fintech, despachos de abogados, agencias comerciales y equipos de e-commerce, junto a sus propios productos.',
        },
        {
          q: '¿Cómo trabajáis?',
          a: 'Cada proyecto pasa por seis etapas: Dirección, Estructura, Diseño, Construcción, Iteración y Escala. El principio es entender el sistema antes de construirlo: el pensamiento se hace al principio, así la construcción avanza rápido sin saltarse pasos.',
        },
        {
          q: '¿Cuánto tarda un proyecto?',
          a: 'Depende del alcance, pero el estudio trabaja en ciclos cortos con lanzamientos pequeños y frecuentes, en lugar de una gran revelación al final. Ves los avances según llegan y el producto se afina en cada ciclo, porque la arquitectura y la dirección quedan cerradas antes de empezar a construir.',
        },
        {
          q: '¿Con quién trabajáis?',
          a: 'Sobre todo con fintech, despachos de abogados, agencias comerciales y equipos de e-commerce. Parte del trabajo es para clientes, parte son sus propios productos: todo está hecho para funcionar en producción.',
        },
        {
          q: '¿Ofrecéis soporte continuo tras el lanzamiento?',
          a: 'Sí. La mayor parte del trabajo del estudio es a largo plazo: los sistemas se construyen para crecer contigo en usuarios, datos, idiomas y funcionalidades, y el estudio sigue implicado en lugar de entregar y desaparecer.',
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
        'Cómo trata raoul.studio los datos personales en el sitio web y en la app Poofy: qué recogemos, por qué, quién los procesa, cuánto los conservamos y tus derechos bajo el RGPD.',
    },
    eyebrow: 'Legal',
    titleLine1: 'Privacidad',
    titleAccent: '.',
    updated: 'Última actualización — agosto de 2026',
    intro:
      'Esta política explica qué datos personales recoge raoul.studio, por qué los recogemos y qué derechos tienes sobre ellos. Cubre este sitio web y las apps que el estudio mantiene, incluida la app de tareas Poofy para iPhone y Mac. Limitamos la recogida de datos al mínimo necesario para llevar el estudio, responder a quienes nos escriben y mantener tus tareas sincronizadas.',
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
        heading: 'Poofy — la app para iPhone y Mac',
        body: [
          'Poofy es la app de tareas propia del estudio para iPhone y Mac. Necesita una cuenta para que tus listas te acompañen de un dispositivo a otro, y esa cuenta es la única razón por la que guarda algo sobre ti.',
        ],
        points: [
          'Cuenta: tu dirección de correo y —si te registras con contraseña— una versión cifrada (hash) de esa contraseña. La contraseña en sí nunca se almacena y no puede recuperarse.',
          'Continuar con Google: si inicias sesión con Google, recibimos tu dirección de correo, la información básica de tu perfil y tu ID de cuenta de Google. Los usamos para una sola cosa: crear tu cuenta y reconocerte la próxima vez.',
          'Continuar con Apple: si inicias sesión con Apple, recibimos un identificador estable de tu cuenta de Apple y tu dirección de correo — una dirección de reenvío privado si elegiste “Ocultar mi correo”. Apple solo envía el correo la primera vez que autorizas la app; a partir de ahí es ese identificador el que te reconoce.',
          'Tu contenido: las listas y tareas que escribes, si cada tarea está hecha, y el orden en que las colocas.',
        ],
      },
      {
        heading: 'Cómo usa Poofy los datos de Google',
        body: [
          'Iniciar sesión con Google se ofrece únicamente como forma de identificar tu cuenta. Poofy solo pide a Google tu dirección de correo y tu perfil básico. No solicita acceso a Gmail, Drive, Calendar, Contactos, Fotos ni a ningún otro servicio de Google, y no puede leer, escribir ni borrar nada en tu cuenta de Google.',
          'El uso por parte de Poofy de la información recibida de las API de Google se ajusta a la Google API Services User Data Policy, incluidos sus requisitos de Uso Limitado (Limited Use). La información recibida de Google se utiliza únicamente para ofrecer el inicio de sesión. Nunca se vende, nunca se usa para publicidad ni elaboración de perfiles, nunca se transfiere a terceros salvo lo necesario para prestar el servicio o cuando lo exija la ley, y nunca se usa para entrenar modelos de IA.',
          'Tus tareas son tuyas. No las leemos con ningún fin más allá de almacenarlas y devolvértelas, no las compartimos y no las usamos para publicidad ni para entrenar modelos.',
        ],
      },
      {
        heading: 'Eliminar tu cuenta de Poofy',
        body: [
          'Puedes eliminar tu cuenta y todo su contenido desde la propia app: abre el menú ⋯, elige “Delete account” y confirma. La cuenta, sus listas y sus tareas se borran al instante, y no se puede deshacer.',
          'Puedes solicitar que se eliminen tu cuenta y todo su contenido en cualquier momento escribiendo a hello@raoul.studio desde la dirección de la cuenta. Eliminamos la cuenta, sus listas y sus tareas. El inicio de sesión con Google también puede desconectarse en cualquier momento desde los ajustes de seguridad de tu cuenta de Google, y el inicio de sesión con Apple desde “Iniciar sesión con Apple” en los ajustes de tu ID de Apple; eso impide seguir accediendo, así que escríbenos además si quieres que se borren los datos.',
          'Conservamos los datos de la cuenta mientras la cuenta exista, y no más.',
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
          'Google (Google Ireland Limited) — solo si eliges “Continuar con Google” en Poofy. Google gestiona el inicio de sesión y nos comunica tu dirección de correo y tu perfil básico. Lo que ocurre del lado de Google se rige por la propia política de privacidad de Google.',
          'Apple (Apple Distribution International Ltd.) — solo si eliges “Iniciar sesión con Apple” en Poofy. Apple gestiona el inicio de sesión y nos comunica un identificador de tu cuenta de Apple y una dirección de correo, que puede ser una dirección de reenvío privado de Apple. Lo que ocurre del lado de Apple se rige por la propia política de privacidad de Apple.',
          'DigitalOcean — proporciona los servidores y la base de datos gestionada, en Ámsterdam, donde se almacenan el sitio web y todas las cuentas, listas y tareas de Poofy.',
          'Nuestros propios servidores — el sitio web y la API de Poofy se ejecutan en infraestructura que gestionamos, y los envíos de contacto se almacenan en nuestra base de datos allí.',
        ],
      },
      {
        heading: 'Dónde se guardan tus datos',
        body: [
          'Los datos del sitio web y las cuentas, listas y tareas de Poofy se almacenan en la UE, en servidores y una base de datos gestionada en Ámsterdam. Las conexiones con el sitio y con la API de Poofy van cifradas en tránsito, y el acceso a la base de datos está restringido.',
        ],
      },
      {
        heading: 'Transferencias internacionales',
        body: [
          'SendGrid (Twilio) es una empresa estadounidense, por lo que enviar un correo de contacto puede implicar transferir tus datos fuera de la UE. DigitalOcean también tiene su sede en EE. UU., aunque los servidores que guardan tus datos están en Ámsterdam. Cuando se produce una transferencia fuera de la UE, está cubierta por garantías adecuadas como las Cláusulas Contractuales Tipo de la Comisión Europea. Google y Apple prestan el inicio de sesión de Poofy a través de sus entidades irlandesas; cualquier transferencia que ocurra de su lado se rige por sus propias políticas y garantías.',
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
  terms: {
    slug: 'terms',
    meta: {
      title: 'Términos y condiciones',
      description:
        'Las condiciones bajo las que raoul.studio trabaja con sus clientes y opera sus propias apps: alcance, pago, propiedad intelectual, cuentas, uso aceptable, responsabilidad y más — en lenguaje claro y bajo derecho neerlandés.',
    },
    eyebrow: 'Legal',
    titleLine1: 'Términos',
    titleAccent: '.',
    updated: 'Última actualización — agosto de 2026',
    intro:
      'Estos Términos explican cómo trabaja raoul.studio con sus clientes — qué entregamos, cómo trabajamos y quién responde de qué — y cómo puedes usar las apps que el estudio opera por su cuenta, como Poofy. Están escritos en lenguaje claro: pretenden ser justos y estar hechos para leerse.',
    sections: [
      {
        heading: 'Introducción',
        body: [
          'Estos Términos y Condiciones (“Términos”) rigen todos los servicios, presupuestos, propuestas, suscripciones, pedidos y acuerdos entre raoul.studio (“el Estudio”, “nosotros”) y sus clientes (“el Cliente”, “tú”). Se aplican salvo que hayamos acordado otra cosa por escrito.',
          'raoul.studio es un estudio de producto digital con sede en los Países Bajos, dirigido por Raoul Guillermo. Puedes escribirnos a hello@raoul.studio. Al aceptar una Propuesta, firmar un Acuerdo o encargarnos que empecemos a trabajar, aceptas estos Términos.',
          'Estos Términos tienen dos partes. La mayor parte de lo que sigue se refiere a los encargos de clientes. Las secciones agrupadas bajo “Uso de las apps propias del estudio”, más abajo, se aplican en su lugar si usas una app que el Estudio opera por cuenta propia — actualmente Poofy, la app de tareas para iPhone y Mac. No hace falta ser Cliente para usar esas apps.',
        ],
      },
      {
        heading: 'Definiciones',
        body: ['En estos Términos, las siguientes palabras tienen el siguiente significado:'],
        points: [
          'Estudio — raoul.studio, el prestador de los servicios.',
          'Cliente — la persona física o jurídica que celebra un Acuerdo con el Estudio.',
          'Proyecto — el trabajo que el Estudio se compromete a realizar, según se describe en una Propuesta o un Acuerdo.',
          'Entregables — los diseños, el software, el código, la documentación, los contenidos u otros materiales que entrega el Estudio.',
          'Propuesta — cualquier presupuesto, estimación, pliego de trabajo u oferta del Estudio.',
          'Acuerdo — la Propuesta aceptada junto con estos Términos y cualquier acuerdo escrito entre las partes.',
          'Propiedad intelectual — todos los derechos sobre software, diseños, textos, métodos y conocimientos técnicos, incluidos derechos de autor, derechos sobre bases de datos, marcas y secretos empresariales.',
          'Información confidencial — información no pública que una parte revela a la otra y que está marcada como confidencial o que razonablemente debe entenderse como tal.',
          'Servicios de terceros — productos o servicios prestados por partes distintas del Estudio, como alojamiento, nube, pagos, IA o proveedores de API.',
          'Servicios de IA — servicios que utilizan inteligencia artificial, aprendizaje automático o la generación automatizada de contenidos, código, texto o decisiones.',
        ],
      },
      {
        heading: 'Ámbito de aplicación',
        body: [
          'Estos Términos se aplican a toda Propuesta, Acuerdo y Proyecto, y a cualquier trabajo posterior o adicional, salvo que se acuerde expresamente otra cosa por escrito.',
          'Estos Términos prevalecen sobre cualesquiera condiciones de compra, contratación u otras condiciones generales del Cliente. Se rechaza expresamente la aplicabilidad de las condiciones del Cliente, salvo que las hayamos aceptado por escrito.',
          'Si alguna disposición de estos Términos es o deviene inválida o inejecutable, el resto conserva plena vigencia y la disposición inválida se sustituirá por otra válida que se aproxime lo más posible a su finalidad.',
        ],
      },
      {
        heading: 'Presupuestos y propuestas',
        body: ['Salvo indicación en contrario:'],
        points: [
          'Las Propuestas no son vinculantes y no obligan al Estudio hasta que ambas partes las aceptan.',
          'Una Propuesta es válida durante 30 días desde su fecha; después puede revisarse o retirarse.',
          'Los precios pueden cambiar antes de que se acepte una Propuesta — por ejemplo, por cambios de alcance, costes de terceros o impuestos aplicables.',
          'Todos los precios se entienden sin IVA ni costes de terceros, salvo indicación en contrario.',
          'Los errores evidentes y las erratas de una Propuesta no vinculan al Estudio.',
        ],
      },
      {
        heading: 'Alcance del proyecto',
        body: [
          'El Estudio realiza el trabajo descrito en la Propuesta aceptada. Todo lo que no esté incluido expresamente queda fuera de alcance.',
          'El trabajo fuera de alcance — incluidas funcionalidades, integraciones o requisitos adicionales — puede requerir presupuesto adicional, una planificación revisada o una Propuesta aparte antes de ejecutarse.',
        ],
      },
      {
        heading: 'Solicitudes de cambio',
        body: [
          'Si el Cliente solicita funcionalidades adicionales, revisiones, nuevos requisitos o cambios de prioridades, el Estudio evaluará el impacto en alcance, planificación y precio.',
          'Los cambios solo se ejecutan una vez acordados. El Estudio puede ajustar plazos y honorarios para reflejar un cambio y no está obligado a iniciar el trabajo modificado antes de alcanzar un acuerdo.',
        ],
      },
      {
        heading: 'Responsabilidades del cliente',
        body: [
          'Un Proyecto depende de la colaboración del Cliente. El Cliente es responsable de aportar lo siguiente a tiempo y de forma completa. Los retrasos causados por el Cliente amplían la planificación en consecuencia, y el Estudio no responde del retraso ni de los costes que de ello se deriven:',
        ],
        points: [
          'información exacta y completa;',
          'contenidos, recursos, materiales de marca y credenciales de acceso;',
          'comentarios, aprobaciones y decisiones a tiempo;',
          'una o varias personas autorizadas para decidir;',
          'probar y revisar los Entregables cuando se solicite.',
        ],
      },
      {
        heading: 'Entrega',
        body: [
          'Las fechas o planificaciones que comunique el Estudio son estimaciones, no plazos estrictos, salvo que se haya pactado expresamente por escrito un plazo fijo como tal (“fatale termijn”).',
          'Los retrasos razonables no constituyen incumplimiento. Cuando el retraso lo cause el Cliente o un Servicio de terceros, el calendario acordado se amplía en consecuencia.',
        ],
      },
      {
        heading: 'Aceptación',
        body: ['Salvo acuerdo en contrario:'],
        points: [
          'Los Entregables se consideran aceptados si el Cliente no comunica por escrito defectos motivados dentro de los diez (10) días hábiles siguientes a la entrega.',
          'Los defectos menores que no impidan materialmente el uso no justifican el rechazo y se resuelven en el curso normal del trabajo.',
          'Poner un Entregable en uso, o utilizarlo en producción, equivale a su aceptación.',
        ],
      },
      {
        heading: 'Condiciones de pago',
        body: ['Salvo que la Propuesta acuerde otra cosa:'],
        points: [
          'El Estudio puede exigir un anticipo antes de empezar y facturar por hitos o de forma recurrente (retainer o suscripción).',
          'Las facturas son pagaderas dentro de los catorce (14) días siguientes a su fecha.',
          'Todos los importes se entienden sin IVA, que se repercute cuando corresponde.',
          'Si una factura no se paga a tiempo, el Cliente incurre en mora sin necesidad de requerimiento y se devengan los intereses legales (comerciales) del derecho neerlandés desde la fecha de vencimiento.',
          'El Cliente debe todos los costes judiciales y extrajudiciales razonables de cobro en que se incurra para recuperar los importes vencidos.',
          'El Estudio puede suspender el trabajo, el alojamiento, el mantenimiento y el soporte mientras existan facturas vencidas.',
        ],
      },
      {
        heading: 'Suspensión',
        body: [
          'Si el Cliente incumple una obligación de pago u otra obligación esencial, el Estudio puede suspender sus servicios — incluidos desarrollo, alojamiento, mantenimiento y soporte — hasta que el Cliente cumpla.',
          'La suspensión no libera al Cliente de sus obligaciones de pago, y el Estudio no responde de los daños derivados de una suspensión lícita.',
        ],
      },
      {
        heading: 'Propiedad intelectual',
        body: [
          'Tras el pago íntegro de todos los importes debidos por un Proyecto, el Cliente adquiere la titularidad de los Entregables hechos a medida para él, o la licencia expresamente pactada sobre ellos. Hasta el pago íntegro, todos los derechos permanecen en el Estudio.',
          'El Estudio conserva toda la propiedad intelectual sobre todo lo que no sea un Entregable a medida, incluidos, entre otros, sus metodologías, marcos internos, código reutilizable, bibliotecas, SDK, plantillas, arquitectura, flujos de trabajo de IA, marcos de automatización, herramientas de desarrollo, conocimientos técnicos, conceptos y cualquier software preexistente.',
          'Cuando esos materiales retenidos se incorporen a un Entregable, el Cliente recibe una licencia no exclusiva e intransferible para usarlos como parte de ese Entregable, sin adquirir titularidad alguna sobre ellos.',
          'El Estudio puede utilizar libremente los conocimientos generales, las capacidades, las técnicas y la experiencia adquiridos durante un Proyecto para otros clientes y finalidades.',
        ],
      },
      {
        heading: 'Software de código abierto',
        body: [
          'Los Entregables pueden incluir software de código abierto, que se suministra bajo sus propias condiciones de licencia. Esas licencias rigen el uso que el Cliente haga de los componentes de código abierto, y el Estudio no ofrece garantía ni indemnidad respecto de ellos más allá de lo que dichas licencias prevean.',
        ],
      },
      {
        heading: 'Servicios de terceros',
        body: [
          'Los Proyectos suelen apoyarse en Servicios de terceros como alojamiento, proveedores de nube, proveedores de pago, proveedores de IA, API y plataformas CMS. Se rigen por sus propias condiciones, que el Cliente acepta cuando corresponda.',
          'En la medida en que lo permita la ley, el Estudio no responde de los Servicios de terceros ni ofrece garantía alguna sobre ellos, incluidos:',
        ],
        points: [
          'caídas, tiempo de inactividad o rendimiento degradado;',
          'cambios de precio o servicios discontinuados;',
          'cambios en condiciones, políticas o API;',
          'incidentes de seguridad, pérdida de datos o brechas.',
        ],
      },
      {
        heading: 'Servicios de IA',
        body: [
          'Los Servicios de IA se basan en modelos probabilísticos y estadísticos. Sus resultados se generan de forma automática y son intrínsecamente inciertos.',
          'Los resultados de los Servicios de IA pueden contener inexactitudes, información inventada (“alucinada”), información incompleta o desactualizada, o resultados inadecuados para una finalidad concreta.',
          'El Cliente sigue siendo plenamente responsable de revisar, validar y aprobar cualquier resultado generado por IA antes de confiar en él o usarlo en producción, y de que su uso cumpla la legislación aplicable.',
          'El Estudio presta los Servicios de IA con una obligación de medios y no garantiza la corrección, integridad, exactitud factual, conformidad legal, idoneidad para un fin ni los resultados de negocio de ningún contenido generado por IA.',
        ],
      },
      {
        heading: 'Seguridad',
        body: [
          'El Estudio aplica medidas técnicas y organizativas comercialmente razonables para proteger los sistemas y los datos que maneja.',
          'Sin embargo, ningún sistema digital, software o servicio en línea puede garantizarse como completamente seguro. En la medida en que lo permita la ley, el Estudio no garantiza ni responde de los incidentes de seguridad que escapen a su control razonable — incluidos ciberataques, vulnerabilidades de día cero, phishing, malware, caídas de nube o alojamiento y fallos de internet o de red.',
        ],
      },
      {
        heading: 'Confidencialidad',
        body: [
          'Cada parte mantendrá confidencial la Información confidencial de la otra, la usará solo para el Proyecto y la protegerá con una diligencia razonable.',
          'Esto no se aplica a la información que sea o pase a ser pública sin incumplimiento, que una parte ya poseyera lícitamente, o que deba revelarse por ley, norma o resolución judicial — en cuyo caso la parte que la revele avisará previamente cuando esté permitido.',
        ],
      },
      {
        heading: 'Privacidad',
        body: [
          'El Estudio trata los datos personales conforme a su Política de privacidad, disponible en esta web.',
          'El Cliente es y sigue siendo responsable de los datos personales que aporte o trate a través de los Entregables, incluida la existencia de una base jurídica para ese tratamiento. Cuando el Estudio trate datos personales por cuenta del Cliente, las partes celebrarán, cuando sea necesario, un contrato de encargo de tratamiento aparte.',
        ],
      },
      {
        heading: 'Mantenimiento y soporte',
        body: ['El mantenimiento y el soporte solo se prestan si se acuerdan expresamente. Salvo acuerdo en contrario:'],
        points: [
          'Incluido: corrección de errores respecto de la especificación acordada, monitorización y el mantenimiento descrito en el Acuerdo.',
          'Excluido: nuevas funcionalidades, rediseños, nuevas integraciones y consultoría o trabajos fuera del Acuerdo — que se presupuestan aparte.',
        ],
      },
      {
        heading: 'Garantías',
        body: [
          'El Estudio presta sus servicios con la pericia y el cuidado razonables, y los Entregables se ajustarán materialmente a la especificación acordada en el momento de la entrega. Esta es la garantía exclusiva del Cliente.',
          'En la medida en que lo permita la ley, el Estudio no ofrece otras garantías y no garantiza que el software funcione sin interrupciones ni errores, que sea compatible con sistemas futuros o con cambios de terceros, ni que logre un resultado comercial concreto.',
        ],
      },
      {
        heading: 'Limitación de responsabilidad',
        body: [
          'En la máxima medida permitida por la ley aplicable, la responsabilidad total del Estudio derivada de un Proyecto o relacionada con él se limita al importe pagado por el Cliente por ese Proyecto concreto en los doce (12) meses anteriores al hecho que origine la responsabilidad.',
          'El Estudio no responde de daños indirectos ni consecuenciales, incluidos el lucro cesante, la pérdida de ingresos, de negocio o de oportunidades, el daño reputacional, la pérdida o corrupción de datos, el tiempo de inactividad o la interrupción de la actividad.',
          'La responsabilidad del Estudio solo surge si el Cliente comunica el incumplimiento por escrito, concede un plazo razonable para subsanarlo y el Estudio sigue sin cumplir — salvo que la subsanación sea permanentemente imposible.',
          'Nada en estos Términos excluye ni limita la responsabilidad que no pueda excluirse o limitarse conforme al derecho neerlandés, incluida la responsabilidad por dolo o temeridad consciente (“opzet of bewuste roekeloosheid”) de la dirección del Estudio.',
        ],
      },
      {
        heading: 'Indemnidad',
        body: [
          'El Cliente mantendrá indemne al Estudio frente a toda reclamación de terceros, daño, coste y gasto (incluidos los costes legales razonables) que se derive de o guarde relación con:',
        ],
        points: [
          'contenidos, materiales o instrucciones facilitados por el Cliente;',
          'la infracción de propiedad intelectual u otros derechos de terceros mediante materiales aportados por el Cliente;',
          'instrucciones ilícitas, infractoras o indebidas;',
          'el uso indebido de los Entregables, o un uso distinto del previsto;',
          'las actividades ilegales del Cliente o el incumplimiento de la legislación aplicable.',
        ],
      },
      {
        heading: 'Fuerza mayor',
        body: [
          'El Estudio no responde de incumplimientos o retrasos causados por circunstancias ajenas a su control razonable (“overmacht”), incluidos desastres naturales, fenómenos meteorológicos extremos, pandemias y epidemias, huelgas, guerra o disturbios, medidas de las autoridades, caídas de internet o de telecomunicaciones, fallos de nube, alojamiento o proveedores, caídas de proveedores de IA y ciberataques.',
          'Durante la fuerza mayor, las obligaciones de las partes quedan suspendidas. Si la situación dura más de sesenta (60) días, cualquiera de las partes puede resolver por escrito el Acuerdo en la parte afectada, sin responsabilidad, quedando pagadero el trabajo ya realizado.',
        ],
      },
      {
        heading: 'Terminación',
        body: [
          'Cualquiera de las partes puede resolver un Acuerdo sin causa mediante preaviso razonable por escrito, respetando el plazo mínimo pactado para retainers o suscripciones.',
          'Cualquiera de las partes puede resolver con efecto inmediato si la otra incurre en un incumplimiento esencial que no subsane en un plazo razonable tras requerimiento escrito, o en caso de concurso, suspensión de pagos o insolvencia de la otra parte.',
          'A la terminación, el Cliente abona todo el trabajo realizado y los costes comprometidos hasta la fecha de efecto. Las disposiciones que por su naturaleza deban subsistir — incluidas propiedad intelectual, confidencialidad, responsabilidad y ley aplicable — siguen vigentes.',
        ],
      },
      {
        heading: 'Derechos de portafolio',
        body: [
          'Salvo pacto expreso en contrario por escrito, el Estudio puede mencionar al Cliente y mostrar trabajos terminados y publicados — incluidas capturas de pantalla, descripciones y el nombre y el logotipo del Cliente — en su portafolio, su web y sus materiales de marketing, respetando la Información confidencial.',
        ],
      },
      {
        heading: 'No captación de personal',
        body: [
          'Durante un Proyecto y durante los doce (12) meses siguientes a su finalización, el Cliente no captará, contratará ni empleará, directa o indirectamente, a ningún empleado, contratista o autónomo del Estudio que haya participado en el Proyecto, sin el consentimiento previo por escrito del Estudio.',
        ],
      },
      {
        heading: 'Uso de las apps propias del estudio',
        body: [
          'Además del trabajo para clientes, el Estudio opera sus propias apps — actualmente Poofy, una app de tareas para iPhone y Mac. Esta sección y las que le siguen se aplican a ti como usuario de esas apps, seas o no también Cliente. Cuando difieran de las secciones dirigidas a clientes, estas secciones rigen tu uso de las apps.',
          'Poofy se ofrece de forma gratuita y para uso personal. Usarla requiere una cuenta y, al crearla, aceptas estos Términos. Cómo tratan las apps tus datos personales se explica en nuestra Política de privacidad.',
        ],
      },
      {
        heading: 'Tu cuenta en la app',
        body: [
          'Debes poder obligarte contractualmente para crear una cuenta. Si no alcanzas la edad a la que puedes consentir servicios en línea en tu país, pide antes permiso a un progenitor o tutor.',
        ],
        points: [
          'Usa una dirección de correo que controles realmente y mantenla actualizada.',
          'Mantén segura tu contraseña — o la cuenta de Google o de Apple con la que inicias sesión. La actividad realizada a través de tu cuenta es responsabilidad tuya.',
          'Una cuenta es para una sola persona. No compartas tus credenciales ni dejes que otra persona use tu cuenta.',
          'Escribe a hello@raoul.studio si crees que alguien más ha accedido a tu cuenta.',
        ],
      },
      {
        heading: 'Uso aceptable de las apps',
        body: ['Al usar las apps, te comprometes a no:'],
        points: [
          'infringir la ley ni almacenar contenidos ilícitos;',
          'intentar acceder a la cuenta, los datos o los contenidos de otra persona;',
          'sondear, escanear, sobrecargar o alterar las apps o su API, ni eludir los límites establecidos;',
          'realizar ingeniería inversa ni copiar el servicio, salvo donde la ley lo permita expresamente;',
          'usar las apps para enviar spam o malware, ni para generar tráfico masivo automatizado.',
        ],
      },
      {
        heading: 'Tus contenidos en las apps',
        body: [
          'Tus listas y tareas son tuyas. Conservas todos los derechos que ya tienes sobre ellas y el Estudio no reclama titularidad alguna.',
          'Concedes al Estudio solo el permiso que necesita para operar el servicio: almacenar tus contenidos y transmitirlos y mostrártelos en tus propios dispositivos. Nada más. No usamos tus contenidos para publicidad ni para entrenar modelos de IA.',
          'Eres responsable de lo que introduces en las apps. Guarda tu propia copia de todo lo que no puedas permitirte perder: las apps son una lista de tareas, no un servicio de copias de seguridad.',
        ],
      },
      {
        heading: 'Disponibilidad de las apps',
        body: [
          'Las apps se ofrecen “tal cual” y “según disponibilidad”, sin garantía de ningún tipo. El Estudio no promete ningún nivel concreto de disponibilidad y puede cambiar, suspender o retirar funcionalidades en cualquier momento.',
          'Si el Estudio decide discontinuar una app por completo, lo avisará con antelación razonable por correo a la dirección de tu cuenta, junto con una oportunidad razonable de recuperar tus contenidos, salvo que las circunstancias lo impidan realmente.',
        ],
      },
      {
        heading: 'Suspensión y fin de tu uso',
        body: [
          'Puedes dejar de usar una app cuando quieras y eliminar tu cuenta y todo su contenido desde el menú ⋯ dentro de la app, o escribiendo a hello@raoul.studio desde la dirección de la propia cuenta. La eliminación es permanente y no se puede deshacer.',
          'El Estudio puede suspender o cerrar una cuenta que incumpla estos Términos, se use de forma ilícita o ponga en riesgo el servicio o a otras personas usuarias. Cuando sea razonable, te diremos por qué y te daremos antes la oportunidad de corregirlo.',
        ],
      },
      {
        heading: 'Responsabilidad por las apps',
        body: [
          'Las apps son software gratuito para uso personal. En la máxima medida permitida por la ley, el Estudio no responde de contenidos perdidos o dañados, tiempo de inactividad, accesos no autorizados ni de daños indirectos o consecuenciales derivados de tu uso — o de la imposibilidad de uso — de las apps.',
          'Nada en esta sección limita la responsabilidad que no pueda excluirse legalmente, incluida la responsabilidad por dolo o culpa grave, ni los derechos imperativos que te correspondan como consumidor.',
        ],
      },
      {
        heading: 'Ley aplicable y controversias',
        body: [
          'Estos Términos y todo Acuerdo se rigen exclusivamente por el derecho neerlandés. Se excluye la aplicación de la Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías (CISG).',
          'Toda controversia que no pueda resolverse amistosamente se someterá exclusivamente al tribunal competente del Rechtbank Rotterdam, Países Bajos, salvo que una norma imperativa disponga otra cosa.',
          'Si usas las apps como consumidor, esto no te priva de la protección del derecho de consumo imperativo de tu país de residencia ni de tu derecho a acudir a sus tribunales.',
        ],
      },
      {
        heading: 'Idioma de estos términos',
        body: [
          'Estos Términos están disponibles en varios idiomas. La versión en inglés es la vinculante; si una traducción difiere, prevalece el texto en inglés.',
        ],
      },
      {
        heading: 'Cambios en estos términos',
        body: [
          'El Estudio puede actualizar estos Términos de vez en cuando. A cada Proyecto se le aplica la versión vigente al inicio de ese Proyecto. Cuando actualizamos estos Términos, actualizamos la fecha que figura al principio de esta página.',
        ],
      },
    ],
    directLabel: 'Dudas sobre estos términos',
    directEmail: 'hello@raoul.studio',
    posterRailMiddle: 'Términos · Legal',
  },
}
