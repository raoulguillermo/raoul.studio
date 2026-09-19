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
        text: 'OutdoorXL opera a escala seria: más de 200.000 productos en 14+ idiomas y tiendas, servidos rápido con Magento y Varnish. El estudio lidera el desarrollo y es dueño de la arquitectura que hay detrás.',
      },
      {
        text: 'Ahora el estudio lo está reconstruyendo en headless: Next.js y MongoDB en el front, el backend de Magento 2 tras una capa GraphQL y REST, con módulos a medida que unen ambos y Payload CMS para el contenido.',
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
      'El SaaS propio del estudio: un sistema de tickets de soporte para equipos de soporte, agencias y operadores en solitario. Bandeja compartida, seguimiento de SLA, automatización.',
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
      { text: 'Diseñado, construido y arquitecturado internamente. El estudio también lo usa.' },
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
        text: 'Lexpert Advocaten necesitaba un CRM moldeado a la práctica legal, no una herramienta genérica forzada a encajar. Así que el estudio construyó uno: gestiona clientes y relaciones, les factura directamente y hace seguimiento de las métricas que mueven el despacho.',
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
        text: 'Smart Dossier empezó en 2016 como un sistema documental en PHP/MySQL para Vastgoedkor. En 2026 el estudio lo reconstruyó en algo más inteligente.',
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
        text: 'El estudio la incluye aquí como muestra de versatilidad. El mismo instinto que entrega software —construirlo bien, hacerlo crecer a largo plazo— funciona igual de bien con una marca.',
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

  dfns: {
    shortTag: 'fintech, tiempo real',
    shortDescription:
      'Un dashboard de señales de futuros en vivo para NQ y ES. Recibe ticks de mercado en tiempo real por WebSocket, ejecuta un motor de confluencia multifactor cada segundo y registra cada entrada, take-profit y stop-loss en el momento exacto en que salta.',
    lead:
      'Un dashboard de trading en vivo que convierte un flujo de ticks de futuros en tiempo real en señales de compra/venta limpias y registradas — en pantalla en el instante en que saltan.',
    tagsLine: 'Fintech · Tiempo real · WebSockets · Next.js · Node.js · MongoDB',
    status: 'en producción',
    info: [
      { label: 'Rol', value: 'Desarrollo y arquitectura en solitario' },
      { label: 'Stack', value: 'Next.js, Node.js, Express, MongoDB, WebSockets, SSE' },
      { label: 'Estado', value: 'En producción — herramienta propia' },
    ],
    body: [
      {
        text: 'DFNS vigila los mercados de futuros NQ y ES en tiempo real. Un único WebSocket persistente trae los ticks de operaciones en vivo, el motor los agrega en barras por segundo y una comprobación de confluencia multifactor —tendencia, momentum, volumen y volatilidad tienen que alinearse— decide cuándo hay una operación que merece la pena anunciar.',
      },
      {
        text: 'Cada señal se sigue y se registra: entrada, objetivo y stop, y luego el take-profit o el stop-loss en el momento en que el precio llega. El resultado es un registro permanente y consultable de exactamente lo que vio el sistema y cuándo — nada de capturas a posteriori.',
      },
      {
        text: 'Construido de principio a fin — un backend en Node y MongoDB que alimenta un dashboard en Next.js con velas en vivo, transmitido al navegador por server-sent events. Vigila y registra; no manda órdenes. Herramienta propia, corriendo en vivo.',
      },
    ],
  },

  poofy: {
    shortTag: 'app de tareas, ios y mac',
    shortDescription:
      'Una app de tareas rápida y basada en gestos para iPhone y Mac. Desliza a la derecha para completar, a la izquierda para borrar, arrastra para reordenar — con listas, un widget en la pantalla de inicio y una app en la barra de menús, sincronizadas entre dispositivos.',
    lead:
      'Una app de tareas que no estorba: deslizas para completar, deslizas para borrar, y tus listas te siguen del iPhone al Mac.',
    tagsLine: 'iOS · macOS · SwiftUI · Node.js · MongoDB · Google Sign-In',
    status: 'en producción',
    info: [
      { label: 'Rol', value: 'Desarrollo y arquitectura en solitario' },
      { label: 'Stack', value: 'SwiftUI (iOS + macOS), Node.js, Express, MongoDB' },
      { label: 'Estado', value: 'En producción — la app propia del estudio' },
    ],
    body: [
      {
        text: 'Poofy es una app de tareas para no perderles la pista: apuntarlas, tacharlas, tirarlas. Funciona como app de iPhone con widget en la pantalla de inicio y como app en la barra de menús del Mac, con las mismas listas en ambas.',
      },
      {
        text: 'Todo está construido en torno a gestos en lugar de botones. Desliza una tarea a la derecha para completarla, a la izquierda para borrarla, arrástrala para reordenar, tócala para editarla ahí mismo. Las tareas nuevas aparecen arriba y la lista se colorea como un mapa de calor: lo más urgente queda en el extremo caliente, así la prioridad se ve en vez de leerse.',
      },
      {
        text: 'Las tareas se agrupan en listas, para que el trabajo, la casa y los proyectos paralelos no se mezclen. Todo se guarda en tu propia cuenta y se sincroniza mediante una API REST: por eso añades algo en el móvil y lo encuentras esperando en la barra de menús del Mac.',
      },
      {
        text: 'Puedes crear una cuenta con correo y contraseña o usar Continuar con Google. Iniciar sesión con Google sirve únicamente para identificar tu cuenta: Poofy lee tu dirección de correo y tu perfil básico, y nada más. No solicita acceso a Gmail, Drive, Calendar, Contactos ni a ningún otro servicio de Google, y tus tareas nunca se comparten con terceros. Las cuentas y sus datos se eliminan si lo pides.',
      },
      {
        text: 'Construida de principio a fin en casa — SwiftUI en ambas plataformas, compartiendo un mismo modelo y cliente de API, contra una API REST en Node.js y Express con MongoDB detrás. El estudio lleva su propio día a día con ella.',
      },
    ],
  },

  screensaver: {
    shortTag: 'salvapantallas, mac',
    shortDescription:
      'Un salvapantallas gratuito para tu Mac. Si lo dejas quieto un minuto, la pantalla se convierte en un reloj enorme — números blancos sobre negro, con los segundos dentro de un bloque rojo.',
    lead: 'Deja tu Mac en paz un minuto y se convierte en un reloj gigante.',
    tagsLine: 'macOS · Swift · Salvapantallas · Descarga gratuita',
    status: 'en producción',
    download: {
      label: 'Descargar para Mac',
      meta: 'ClockSaver.dmg · unos 134 KB · revisado y aprobado por Apple',
      steps:
        'Abre el archivo que has descargado, haz doble clic en ClockSaver.saver, pulsa Install y luego elige “Clock” en Ajustes del Sistema → Salvapantallas.',
    },
    info: [
      { label: 'Rol', value: 'Diseñado y construido en solitario' },
      { label: 'Hecho con', value: 'Swift, AppKit, ScreenSaverView, XcodeGen' },
      { label: 'Estado', value: 'En producción — descarga gratuita' },
    ],
    body: [
      {
        text: 'Un salvapantallas es lo que tu Mac muestra cuando dejas de usarlo un rato. La mayoría enseñan fotos o formas flotantes. Este enseña la hora, y nada más.',
      },
      {
        text: 'La pantalla se pone negra y el reloj la ocupa entera: horas, minutos y segundos en letras blancas enormes, en Anton, la misma tipografía gruesa de los titulares grandes de esta web. Los segundos van dentro de un bloque rojo, como si los hubieras seleccionado con el ratón. Los números se estiran hasta encajar en cualquier pantalla, desde un portátil pequeño hasta un monitor grande, dejando siempre un margen limpio alrededor.',
      },
      {
        text: 'Además, solo vuelve a dibujar la imagen cuando la hora cambia de verdad: una vez por segundo, en lugar de sesenta veces por segundo como casi todo lo que se mueve. Así se queda ahí tranquilo y apenas gasta batería.',
      },
      {
        text: 'Está escrito en Swift, el lenguaje con el que Apple hace sus propias apps, y la tipografía viaja dentro del propio archivo. Por eso se ve bien en cualquier Mac, incluso en uno donde esa tipografía nunca se ha instalado.',
      },
      {
        text: 'Lo complicado es conseguir que llegue al Mac de otra persona. macOS no se fía de los archivos que vienen de internet y normalmente pone un aviso por delante. Así que escribimos un único script que hace todo el trabajo de una sola pasada: construir el salvapantallas, firmarlo con la clave de desarrollador de Apple del estudio, empaquetarlo en una imagen de disco, enviarlo a Apple para que lo revise —eso se llama notarizar— y luego grapar la aprobación de Apple al archivo. Como la aprobación va grapada y no hay que consultarla en internet, tu Mac la ve incluso con el wifi apagado.',
      },
      {
        text: 'El resultado es la descarga de esta página. Ábrela, doble clic, instalar y listo: sin avisos y sin ajustes que corregir después. Gratis, y ocupa más o menos lo que una sola foto.',
      },
    ],
  },

  'voice-agent': {
    shortTag: 'IA de voz, pedidos por teléfono',
    shortDescription:
      'Un agente telefónico con IA que atiende la línea de un restaurante, toma pedidos para recoger en una conversación normal y los pasa directamente al sistema de pedidos de la cocina, y que se puede conectar a cualquier API o CRM.',
    lead:
      'Llamas al restaurante, dices lo que quieres comer y una IA toma el pedido, y lo pasa directamente al sistema de la cocina.',
    tagsLine: 'Voice AI · Claude · ElevenLabs · Twilio · Node.js · REST API',
    status: 'lanzando',
    info: [
      { label: 'Rol', value: 'Concepto, arquitectura y desarrollo' },
      { label: 'Stack', value: 'Claude, ElevenLabs, Twilio, Node.js, Express, MongoDB' },
      { label: 'Estado', value: 'En lanzamiento: la primera línea de restaurante' },
    ],
    body: [
      {
        text: 'Los restaurantes pierden pedidos cada noche porque nadie puede coger el teléfono cuando la cocina va a tope. Este agente telefónico contesta en su lugar. Un cliente llama al número de siempre del restaurante, dice lo que quiere —«dos bocadillos y un plato grande de arroz»— y habla con una IA que suena como una persona, le entiende y apunta el pedido.',
      },
      {
        text: 'Trabaja con la carta real del restaurante, su horario y sus horas de recogida, que consulta en directo durante la llamada. Así solo ofrece platos que están de verdad en la carta, sabe qué se ha agotado, conoce los tamaños, los extras y lo que cuestan, y elige la hora más temprana a la que el pedido puede estar listo. Habla neerlandés y cambia al inglés sin más si quien llama lo hace.',
      },
      {
        text: 'Un pedido por teléfono tiene que ser exacto, así que el agente trabaja en dos pasos. Primero lo suma todo y lee el pedido en voz alta: los platos, el nombre, el total y cuándo estará listo. Solo cuando quien llama ha dicho «sí» de verdad, hace el pedido, y eso lo comprueba el propio sistema; no se deja en manos de la IA. Después, el pedido entra en el sistema de pedidos del restaurante, igual que un pedido de la tienda online, y la cocina lo recibe al instante. El agente solo puede hacer pedidos nuevos para recoger: no puede ver, cambiar, cancelar ni reembolsar nada.',
      },
      {
        text: 'Al teléfono, el silencio parece enseguida una avería. Entender lo que se dice y la voz los gestiona una plataforma de voz especializada. El razonamiento lo hace Claude, en el servidor propio del estudio. Todo lo que el agente puede saber de antemano se consulta antes de que empiece a hablar, y si aun así necesita un momento, lo dice, como haría una persona.',
      },
      {
        text: 'La línea del restaurante es solo un uso. Debajo hay un agente general que se puede conectar a casi cualquier sistema mediante una API. Sobre la misma tecnología ya funciona una segunda línea: reconoce a quien llama por su número, consulta una agenda, reserva o cancela citas, toma nota de una incidencia y la envía por correo, o pasa la llamada a una persona.',
      },
      {
        text: 'Y ahí es donde se pone interesante para otras empresas. Como el estudio también construye los sistemas que hay detrás —CRM a medida, plataformas de reservas, tiendas online y paneles de gestión—, el agente se puede conectar directamente a ellos: buscar a un cliente en tu CRM, abrir un ticket, programar una cita, consultar el stock o registrar un pedido en tu caja o ERP. Peluquerías, talleres, clínicas, despachos de abogados, empresas de alquiler: en cualquier sitio donde el teléfono suena cada día con las mismas preguntas, un agente puede contestar, con un sistema detrás que lo recuerda todo.',
      },
    ],
  },
}
