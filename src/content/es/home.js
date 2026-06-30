// Contenido de la página de inicio.

export const home = {
  meta: {
    title: 'raoul.studio — estudio de producto digital para IA, software y commerce',
    description:
      'raoul.studio es un estudio de producto digital que ayuda a empresas ambiciosas a convertir ideas en productos digitales escalables — estrategia, diseño, ingeniería de software, IA, automatización, commerce e infraestructura.',
  },
  hero: {
    prefix: 'Construimos',
    accent: 'lo que viene.',
    suffix: '',
  },
  intro:
    'Desde plataformas impulsadas por IA y software a medida hasta automatización, commerce, branding e infraestructura. Nos asociamos con fundadores y empresas ambiciosos para convertir ideas en productos escalables.',
  pillars: {
    label: 'Qué hacemos',
    items: [
      {
        title: 'Productos',
        body: 'Plataformas SaaS a medida, portales, herramientas internas y experiencias de cliente: construidas de principio a fin y hechas para funcionar en producción.',
      },
      {
        title: 'IA',
        body: 'Agentes de IA, inteligencia documental, automatización e integraciones inteligentes, integradas en cómo funciona de verdad un negocio.',
      },
      {
        title: 'Commerce',
        body: 'E-commerce a gran escala: Magento, escaparates headless, integraciones de PIM y ERP, y los back offices a medida que hay detrás.',
      },
      {
        title: 'Marca',
        body: 'Identidad, webs y experiencias digitales: el producto y la marca que lo envuelve, diseñados y construidos juntos.',
      },
      {
        title: 'Crecimiento',
        body: 'Alianzas técnicas a largo plazo: infraestructura, optimización y evolución continua del producto mucho después del lanzamiento.',
      },
    ],
  },
  featuredWork: {
    label: 'Trabajo seleccionado',
    lead: 'Cómo ayudamos a empresas ambiciosas a resolver problemas difíciles.',
    allLabel: 'Ver todo el trabajo',
    items: [
      { slug: 'outdoorxl', tagline: 'Reconstruimos uno de los mayores retailers outdoor de Europa convirtiéndolo en una plataforma de commerce moderna y headless.', metrics: ['200K+ productos', '14 mercados', 'Migración headless'] },
      { slug: 'lexpert', tagline: 'Sustituimos las herramientas genéricas por un CRM a medida pensado en torno a cómo funciona de verdad un despacho de abogados.', metrics: ['CRM a medida', 'Facturación directa', 'Acceso por roles'] },
      { slug: 'anonimise', tagline: 'Permitimos que un despacho de abogados ponga la IA a trabajar sin que un solo expediente de cliente salga nunca del edificio.', metrics: ['IA totalmente offline', 'Anonimización en el dispositivo', 'Conforme al RGPD por diseño'] },
    ],
  },
  insights: {
    label: 'Ideas',
    lead: 'Reflexiones sobre IA, ingeniería de software y productos digitales.',
    allLabel: 'Todos los artículos',
  },
  contact: {
    eyebrow: '¿Tienes algo que construir?',
    beforeLink: 'Cuéntanoslo — ',
    linkLabel: 'hello@raoul.studio',
    linkHref: '/contact',
    afterLink: '',
  },
}
