// Voice AI por sector — una landing page por sector, en /voice-ai/<slug>.
// Los slugs y alias están en ../products.js (voiceIndustryRegistry); este archivo
// solo contiene los textos. Precios, RGPD, el número de demo y el formulario se
// comparten con la página principal de Voice AI.

export const voiceIndustryUi = {
  eyebrow: 'Voice AI',
  painsLabel: '¿Te suena?',
  doesLabel: 'Qué hace el asistente',
  callLabel: 'Así suena una llamada',
  caller: 'Cliente',
  assistant: 'Asistente',
  faqLabel: 'Preguntas de tu sector',
  otherLabel: 'También para',
  backLabel: 'Voice AI',
}

export const voiceIndustries = {
  dentist: {
    name: 'Dentistas',
    meta: {
      title: 'Asistente telefónico con IA para dentistas — Voice AI',
      description:
        'No vuelvas a perder un paciente durante un tratamiento. Un asistente con IA atiende el teléfono de la clínica, agenda citas y deriva las urgencias — conforme al RGPD, con contrato de encargo del tratamiento.',
    },
    title: 'Llamada perdida durante un tratamiento = paciente perdido.',
    lead: 'Tu auxiliar está en el sillón y suena el teléfono. La IA contesta, apunta la cita en tu agenda y pasa las urgencias directamente a una persona.',
    pains: [
      { title: 'Llamadas en pleno tratamiento', body: 'Con guantes nadie puede contestar. El paciente oye el buzón de voz y llama a la clínica de al lado.' },
      { title: 'Las mismas preguntas, cada día', body: 'Horarios, aparcamiento, “¿aceptan pacientes nuevos?”. Tiempo que tu auxiliar preferiría pasar en el sillón.' },
      { title: 'Cancelaciones que nadie ve', body: 'Una cancelación a las 7:45 no se ve hasta las 9:00. Ese hueco en la agenda lo podría haber ocupado otra persona.' },
    ],
    does: [
      { title: 'Agendar citas', body: 'Revisión, limpieza o un paciente nuevo: consulta tu agenda y solo reserva lo que de verdad está libre.' },
      { title: 'Cambiar y cancelar', body: 'Los pacientes cambian o cancelan su cita ellos mismos, también por la noche. El hueco libre vuelve a estar disponible al momento.' },
      { title: 'Reconocer urgencias', body: 'Dolor, un accidente, una inflamación: pasa la llamada directamente a la clínica o, fuera de horario, indica el teléfono de urgencias.' },
      { title: 'Sin detalles médicos', body: 'No pregunta por síntomas ni da consejo médico. Agenda la cita; la conversación sobre el problema sigue siendo tuya.' },
    ],
    call: [
      { who: 'caller', text: 'Hola, quería pedir cita para una revisión.' },
      { who: 'assistant', text: 'Claro. ¿Ya es paciente nuestro? Entonces le busco por su fecha de nacimiento.' },
      { who: 'caller', text: 'Sí, 14 de marzo de 1986.' },
      { who: 'assistant', text: 'Le tengo. Hay hueco el martes a las 10:30 o el jueves a las 14:00. ¿Qué le viene mejor?' },
      { who: 'caller', text: 'El jueves.' },
      { who: 'assistant', text: 'Jueves a las 14:00 con el dentista, ¿correcto? Entonces la dejo confirmada y le llegará un mensaje de confirmación.' },
    ],
    faq: [
      { q: '¿Se conecta con mi software de gestión clínica?', a: 'Si tu agenda tiene integración, la usa. Si no, buscamos juntos una alternativa, por ejemplo una agenda aparte que tu equipo use para las citas telefónicas.' },
      { q: '¿Y si alguien tiene dolor?', a: 'Tú decides qué es urgente. En ese caso pasa la llamada directamente a la clínica o, fuera de horario, indica el teléfono de urgencias que tú le des.' },
      { q: '¿Puede dar de alta a pacientes nuevos?', a: 'Sí, si quieres. Anota nombre, fecha de nacimiento y datos de contacto y agenda una primera cita, o pone la solicitud en lista de espera.' },
    ],
  },

  clinic: {
    name: 'Clínicas y consultas',
    meta: {
      title: 'Asistente telefónico con IA para clínicas y consultas — Voice AI',
      description:
        'Para fisioterapeutas, clínicas dermatológicas, veterinarios y otras consultas: un asistente con IA que atiende el teléfono, agenda citas y pasa la llamada cuando hace falta.',
    },
    title: 'La cola al teléfono es tu sala de espera.',
    lead: 'Fisioterapia, dermatología, veterinaria o psicología: el asistente atiende cada llamada, agenda citas y deja que tu equipo haga aquello para lo que se ha formado.',
    pains: [
      { title: 'La línea echa humo', body: 'A las 8:00 llama todo el mundo a la vez. Quien se queda en espera cuelga, o vuelve a llamar en el peor momento.' },
      { title: 'Recepción y consulta a la vez', body: 'En las consultas pequeñas, el propio profesional coge el teléfono. Cada llamada interrumpe a un paciente.' },
      { title: 'Pacientes que no se presentan', body: 'Quien no puede cambiar la cita fácilmente, simplemente no viene. Una hora vacía que ya no llenas.' },
    ],
    does: [
      { title: 'Agendar citas', body: 'Primera visita, seguimiento o un profesional concreto: reserva en tu agenda lo que de verdad está libre.' },
      { title: 'Cambios sin esperas', body: 'Los pacientes cambian la cita ellos mismos, de día y de noche. Menos ausencias, una agenda más llena.' },
      { title: 'Preguntas prácticas', body: 'Coberturas del seguro, si hace falta volante, dirección y aparcamiento: respuestas a partir de tu propia información.' },
      { title: 'Pasar la llamada', body: '¿Dudas, una urgencia o algo personal? Pasa la llamada a tu equipo o deja una solicitud de devolución de llamada.' },
    ],
    call: [
      { who: 'caller', text: 'Tengo que cambiar mi cita de mañana.' },
      { who: 'assistant', text: 'Sin problema. ¿Me dice su nombre y fecha de nacimiento?' },
      { who: 'caller', text: 'Lucía Fernández, 2 de junio de 1990.' },
      { who: 'assistant', text: 'Veo su cita mañana a las 9:00 con Marcos. El viernes a las 11:15 también puede con él. ¿Se la paso a ese día?' },
      { who: 'caller', text: 'Sí, por favor.' },
      { who: 'assistant', text: 'Hecho: viernes a las 11:15 con Marcos. Libero el hueco de mañana.' },
    ],
    faq: [
      { q: '¿Funciona con varios profesionales?', a: 'Sí. Conoce a tu equipo y sus agendas, y reserva con un profesional concreto si el paciente lo pide.' },
      { q: '¿Guarda información médica?', a: 'No, lo configuramos así. Solo pregunta lo necesario para agendar la cita y no da consejo médico.' },
      { q: '¿Puede tomar solicitudes de devolución de llamada?', a: 'Sí. Anota quién ha llamado y para qué, y lo deja en tu bandeja de entrada o tu sistema para que tu equipo pueda devolver la llamada.' },
    ],
  },

  restaurant: {
    name: 'Restaurantes',
    meta: {
      title: 'Asistente telefónico con IA para restaurantes — Voice AI',
      description:
        'Atiende cada pedido y cada reserva, también en la hora punta de la cena. Un asistente con IA que conoce tu carta y pasa los pedidos directamente a tu sistema de caja.',
    },
    title: 'En plena hora punta suena el teléfono. Y nadie contesta.',
    lead: 'La cocina va a tope, la sala no para. El asistente toma pedidos para llevar y reservas a partir de tu carta real y los pasa directamente a tu sistema.',
    pains: [
      { title: 'Pedidos perdidos', body: 'Entre las 19:30 y las 21:30 es cuando más suena el teléfono, justo cuando nadie tiene tiempo. Cada llamada perdida es un pedido perdido.' },
      { title: 'Errores con las prisas', body: 'Un pedido mal entendido, una alergia olvidada. Al final sale más caro de lo que dejaba el pedido.' },
      { title: 'Personal al teléfono', body: 'Alguien de sala está al teléfono en vez de atender a los clientes.' },
    ],
    does: [
      { title: 'Tomar pedidos', body: 'Para recoger o a domicilio, con tamaños, extras y precios de tu carta real. Directo a tu sistema de caja o de pedidos.' },
      { title: 'Reservar', body: 'Comprueba si hay sitio, anota el número de personas y confirma la hora.' },
      { title: 'Anotar alergias', body: 'Pregunta por ellas y las deja bien claras en el pedido, para que cocina las vea.' },
      { title: 'Dentro de los límites', body: 'Solo hace pedidos nuevos. Modificar, cancelar o devolver dinero sigue siendo cosa tuya.' },
    ],
    call: [
      { who: 'caller', text: 'Quería hacer un pedido para recoger.' },
      { who: 'assistant', text: '¡Perfecto! ¿Qué le pongo?' },
      { who: 'caller', text: 'Dos margaritas y un tiramisú.' },
      { who: 'assistant', text: 'Dos pizzas margarita y un tiramisú, en total 31,50 €. ¿Alguien tiene alguna alergia?' },
      { who: 'caller', text: 'No, y paso a las nueve.' },
      { who: 'assistant', text: 'Listo para las 21:00 a nombre de García. ¿Correcto? Entonces lo paso a cocina.' },
    ],
    faq: [
      { q: '¿Conoce nuestra carta?', a: 'Sí, lee la carta de tu propio sistema, con precios, tamaños y lo que lleva cada plato. Si cambias la carta, lo sabe al instante.' },
      { q: '¿Y si hay demasiado lío para aceptar pedidos?', a: 'Puedes fijar un máximo por franja horaria. Si está completa, ofrece una hora más tarde.' },
      { q: '¿Puede cobrar?', a: 'Por teléfono no acepta datos de pago. El cliente paga al recoger, o con un enlace de pago si lo prefieres.' },
    ],
  },

  salon: {
    name: 'Peluquerías y salones',
    meta: {
      title: 'Asistente telefónico con IA para peluquerías y salones — Voice AI',
      description:
        'Se acabó coger el teléfono con las tijeras en la mano. Un asistente con IA que da citas con el estilista adecuado, también por la noche.',
    },
    title: 'Las tijeras en una mano. ¿Y el teléfono en la otra?',
    lead: 'Estás en mitad de un corte y suena el teléfono. El asistente contesta, elige una hora con el cliente y apunta la cita en tu agenda.',
    pains: [
      { title: 'Servicios interrumpidos', body: 'Cada vez que coges el teléfono, tu cliente se queda esperando en el sillón.' },
      { title: 'Mensajes de voz sin respuesta', body: 'Al final del día hay cinco mensajes en el buzón. Dos clientes ya han reservado en otro sitio.' },
      { title: 'Reservas fuera de horario', body: 'Mucha gente llama por la noche, cuando el salón está cerrado.' },
    ],
    does: [
      { title: 'Citas con el estilista adecuado', body: 'Corte, color o un tratamiento: sabe cuánto dura y quién lo hace.' },
      { title: 'Cambiar y cancelar', body: 'Los clientes lo gestionan ellos mismos, también fuera de horario.' },
      { title: 'Precios y servicios', body: 'Cuánto cuesta unas mechas balayage, cuánto dura una permanente: respuestas a partir de tu propia lista de precios.' },
      { title: 'Confirmación', body: 'Después de la llamada el cliente recibe una confirmación, así menos gente olvida su cita.' },
    ],
    call: [
      { who: 'caller', text: '¿Tenéis hueco el sábado para cortarme el pelo?' },
      { who: 'assistant', text: 'El sábado Laura tiene hueco a las 11:00 y Omar a las 14:30. ¿Tiene alguna preferencia?' },
      { who: 'caller', text: 'Laura, a las once.' },
      { who: 'assistant', text: 'Corte con Laura, sábado a las 11:00. ¿A nombre de quién la pongo?' },
      { who: 'caller', text: 'Fátima.' },
      { who: 'assistant', text: 'Apuntado, Fátima. Le llegará una confirmación.' },
    ],
    faq: [
      { q: '¿Funciona con mi sistema de reservas?', a: 'Si tu sistema de reservas tiene integración, reserva directamente en él. Si no, buscamos juntos una solución.' },
      { q: '¿Sabe cuánto dura cada servicio?', a: 'Sí. Indicas la duración de cada servicio y solo ofrece horas en las que de verdad cabe.' },
      { q: '¿Puedo seguir cogiendo yo el teléfono?', a: 'Claro. Tú eliges cuándo contesta: siempre, solo fuera de horario o solo si tú no lo coges tras unos cuantos tonos.' },
    ],
  },

  garage: {
    name: 'Talleres',
    meta: {
      title: 'Asistente telefónico con IA para talleres — Voice AI',
      description:
        'Debajo del coche y aun así localizable. Un asistente con IA que da cita para la ITV y el mantenimiento y le dice al cliente si su coche ya está listo.',
    },
    title: 'Debajo de un coche no se puede contestar.',
    lead: 'Tus mecánicos están en el taller. El asistente da cita para la ITV y el mantenimiento, y les dice a los clientes si su coche ya está listo.',
    pains: [
      { title: 'Manos sucias, teléfono sonando', body: 'Contestar significa lavarse las manos y dejar el trabajo a medias. O no contestar.' },
      { title: '“¿Está ya mi coche?”', body: 'La pregunta que se repite todo el día. Cada vez hay que buscar, mirar y devolver la llamada.' },
      { title: 'Planificación del taller', body: 'Citas por teléfono, una nota en un papel y la agenda: todo se descuadra enseguida.' },
    ],
    does: [
      { title: 'Citas de ITV y mantenimiento', body: 'Matrícula, tipo de revisión, día preferido: agenda lo que cabe en tu taller.' },
      { title: 'Informar del estado', body: 'Mira en tu sistema si el coche está listo y se lo dice al cliente.' },
      { title: 'Anotar averías', body: 'Anota las quejas sobre el coche con las palabras del cliente, para que tu mecánico sepa en qué fijarse.' },
      { title: 'Pasar la llamada', body: '¿Preguntas sobre un presupuesto o una reparación? Pasa la llamada o deja una solicitud de devolución de llamada.' },
    ],
    call: [
      { who: 'caller', text: 'Se me pasa la ITV el mes que viene, ¿puedo pedir cita?' },
      { who: 'assistant', text: 'Por supuesto. ¿Cuál es su matrícula?' },
      { who: 'caller', text: '1234 KLM.' },
      { who: 'assistant', text: 'Un Volkswagen Golf, ¿correcto? Tengo el miércoles 8 a las 8:30 o el lunes 13 a las 13:00.' },
      { who: 'caller', text: 'El miércoles.' },
      { who: 'assistant', text: 'ITV el miércoles 8 a las 8:30. Puede traer el coche a partir de las 8:00. ¡Hasta entonces!' },
    ],
    faq: [
      { q: '¿Se conecta con mi software de taller?', a: 'Si tu sistema tiene integración, agenda directamente en él y consulta el estado de cada coche. Si no, buscamos juntos una solución.' },
      { q: '¿Puede dar precios?', a: 'Los precios fijos, como una ITV o una revisión pequeña, los da a partir de tu propia lista de precios. Para reparaciones deja una solicitud de devolución de llamada.' },
      { q: '¿Y si alguien tiene una avería en carretera?', a: 'Tú decides qué pasa entonces: pasar la llamada directamente o dar el número de tu servicio de asistencia.' },
    ],
  },

  'law-firm': {
    name: 'Despachos de abogados',
    meta: {
      title: 'Asistente telefónico con IA para despachos de abogados — Voice AI',
      description:
        'Un primer contacto profesional para cada persona que llama. Un asistente con IA que recoge asuntos nuevos, agenda citas y pasa la llamada al abogado adecuado.',
    },
    title: 'Cada llamada perdida es un caso para otro despacho.',
    lead: 'Quien tiene un problema legal llama al primer despacho que contesta. El asistente contesta, anota lo esencial y agenda una primera consulta.',
    pains: [
      { title: 'Abogados en juicio o en reunión', body: 'La secretaría está desbordada, los abogados no están localizables. El cliente nuevo sigue llamando a otros.' },
      { title: 'Primeras consultas que llevan tiempo', body: 'Averiguar si un asunto encaja con tu despacho le cuesta a un abogado tiempo que no puede facturar.' },
      { title: 'Fuera del horario de oficina', body: 'Un despido, una demanda: la gente llama cuando le pasa, no cuando estáis abiertos.' },
    ],
    does: [
      { title: 'Recoger asuntos nuevos', body: 'Pregunta por el área del derecho y lo esencial del asunto, y lo deja ordenado en tu sistema.' },
      { title: 'Agendar primeras consultas', body: 'Con el abogado que lleva esa área, en la agenda que ya usáis.' },
      { title: 'Pasar a clientes actuales', body: 'Reconoce los asuntos en curso y pasa la llamada o deja un mensaje para el abogado adecuado.' },
      { title: 'Confidencial', body: 'No da asesoramiento jurídico y solo pregunta lo necesario para la primera consulta.' },
    ],
    call: [
      { who: 'caller', text: 'Hoy me han despedido y quiero saber qué puedo hacer.' },
      { who: 'assistant', text: 'Lamento oírlo. Con gusto le agendo una consulta con uno de nuestros abogados laboralistas. ¿Me dice su nombre?' },
      { who: 'caller', text: 'Pedro Sánchez.' },
      { who: 'assistant', text: 'La abogada Ruiz tiene hueco mañana a las 10:00 para una primera consulta. ¿Le viene bien?' },
      { who: 'caller', text: 'Sí.' },
      { who: 'assistant', text: 'Apuntado. Le llegará una confirmación por correo con lo que conviene traer.' },
    ],
    faq: [
      { q: '¿Da asesoramiento jurídico?', a: 'No. Recoge lo esencial de la consulta y agenda una cita. El asesoramiento lo dan tus abogados.' },
      { q: '¿Y la confidencialidad?', a: 'Firmamos un contrato de encargo del tratamiento y dejamos por escrito, juntos, qué se guarda, dónde y durante cuánto tiempo.' },
      { q: '¿Puede comprobar conflictos de intereses?', a: 'Anota los nombres de la parte contraria, para que tu despacho pueda hacer la comprobación antes de la primera consulta.' },
    ],
  },

  rental: {
    name: 'Empresas de alquiler',
    meta: {
      title: 'Asistente telefónico con IA para empresas de alquiler — Voice AI',
      description:
        'Disponibilidad, precios y reservas por teléfono, de día y de noche. Para alquiler de coches, furgonetas, herramientas, bicicletas y más.',
    },
    title: '“¿Está libre este fin de semana?” Cien veces por semana.',
    lead: 'Furgonetas, herramientas, bicis o carpas para fiestas: el asistente mira en tu sistema qué está libre, dice el precio y deja hecha la reserva.',
    pains: [
      { title: 'La misma pregunta, una y otra vez', body: 'Disponibilidad y precio. Buscarlo cada vez, explicarlo cada vez.' },
      { title: 'Mostrador y teléfono', body: 'Mientras atiendes a alguien que viene a recoger, llama el siguiente cliente.' },
      { title: 'Picos de fin de semana', body: 'El viernes llama todo el mundo a la vez para el fin de semana.' },
    ],
    does: [
      { title: 'Comprobar disponibilidad', body: 'Mira en tu sistema qué está libre en los días que piden.' },
      { title: 'Dar precios', body: 'Por día, por fin de semana, con fianza: a partir de tus propias tarifas.' },
      { title: 'Reservar', body: 'Deja hecha la reserva con nombre, días y hora de recogida.' },
      { title: 'Explicar las condiciones', body: 'Carné de conducir, fianza, kilómetros: respuestas a partir de tus condiciones.' },
    ],
    call: [
      { who: 'caller', text: '¿Os queda alguna furgoneta libre este fin de semana?' },
      { who: 'assistant', text: 'De viernes a domingo me queda una furgoneta de 12 m³. Son 195 € el fin de semana, con 300 kilómetros incluidos.' },
      { who: 'caller', text: 'Me la quedo. La recojo el viernes a las cuatro.' },
      { who: 'assistant', text: '¿Me dice su nombre y teléfono?' },
      { who: 'caller', text: 'Javier Moreno, 612 34 56 78.' },
      { who: 'assistant', text: 'Reservado: furgoneta de 12 m³, del viernes a las 16:00 al domingo. Traiga su carné de conducir; la fianza es de 250 €.' },
    ],
    faq: [
      { q: '¿Se conecta con mi sistema de alquiler?', a: 'Si tu sistema tiene integración, comprueba y reserva directamente en él. Si no, buscamos juntos una solución.' },
      { q: '¿Puede cobrar la fianza?', a: 'Por teléfono no acepta datos de pago. Eso sí, puedes hacer que se envíe un enlace de pago después de la reserva.' },
      { q: '¿Y si algo no está libre?', a: 'Entonces ofrece una alternativa: otro día, o algo parecido que sí esté libre.' },
    ],
  },
}
