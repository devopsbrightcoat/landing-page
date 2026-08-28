// ---------------------------------------------------------------------------
// Contenido de la landing page.
// Todo el texto e información editable vive aquí — no hace falta tocar los
// componentes para actualizar copy, precios, testimonios, etc.
// Reemplaza los valores de ejemplo (marcados con [PLACEHOLDER]) con la
// información real del cliente.
// ---------------------------------------------------------------------------

export const site = {
  name: '[PLACEHOLDER] Nombre de la Empresa',
  tagline: 'Descripción corta de una línea sobre qué hace la empresa',
}

export const nav = {
  links: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
  ],
  ctaLabel: 'Contáctanos',
  ctaHref: '#contacto',
}

export const hero = {
  eyebrow: '[PLACEHOLDER] Frase de posicionamiento',
  heading: 'El título principal que capta la atención del visitante',
  subheading:
    'Un párrafo breve que explica el valor que ofrece el producto o servicio y por qué el visitante debería seguir leyendo.',
  primaryCta: { label: 'Empezar ahora', href: '#contacto' },
  secondaryCta: { label: 'Conocer más', href: '#servicios' },
}

export const services = {
  heading: 'Nuestros servicios',
  subheading: 'Todo lo que necesitas, en un solo lugar.',
  items: [
    {
      title: 'Servicio uno',
      description: 'Descripción breve del primer servicio o característica clave que ofrece la empresa.',
    },
    {
      title: 'Servicio dos',
      description: 'Descripción breve del segundo servicio o característica clave que ofrece la empresa.',
    },
    {
      title: 'Servicio tres',
      description: 'Descripción breve del tercer servicio o característica clave que ofrece la empresa.',
    },
    {
      title: 'Servicio cuatro',
      description: 'Descripción breve del cuarto servicio o característica clave que ofrece la empresa.',
    },
    {
      title: 'Servicio cinco',
      description: 'Descripción breve del quinto servicio o característica clave que ofrece la empresa.',
    },
    {
      title: 'Servicio seis',
      description: 'Descripción breve del sexto servicio o característica clave que ofrece la empresa.',
    },
  ],
}

export const about = {
  heading: 'Sobre nosotros',
  paragraphs: [
    'Un párrafo contando la historia, misión o propuesta de valor de la empresa.',
    'Un segundo párrafo opcional con más contexto o diferenciadores frente a la competencia.',
  ],
  stats: [
    { value: '00+', label: 'Clientes atendidos' },
    { value: '00', label: 'Años de experiencia' },
    { value: '00%', label: 'Satisfacción' },
  ],
}

export const testimonials = {
  heading: 'Lo que dicen nuestros clientes',
  items: [
    {
      quote: 'Frase textual de un cliente satisfecho sobre su experiencia con el producto o servicio.',
      name: 'Nombre Apellido',
      role: 'Cargo, Empresa',
    },
    {
      quote: 'Otra frase textual de un cliente satisfecho sobre su experiencia con el producto o servicio.',
      name: 'Nombre Apellido',
      role: 'Cargo, Empresa',
    },
    {
      quote: 'Una tercera frase textual de un cliente satisfecho con el producto o servicio.',
      name: 'Nombre Apellido',
      role: 'Cargo, Empresa',
    },
  ],
}

export const cta = {
  heading: '¿Listo para empezar?',
  subheading: 'Ponte en contacto con nosotros hoy mismo y da el siguiente paso.',
  buttonLabel: 'Contáctanos',
  buttonHref: '#contacto',
}

export const contact = {
  heading: 'Hablemos',
  subheading: 'Escríbenos y te responderemos lo antes posible.',
  email: 'contacto@[placeholder].com',
  phone: '+504 0000-0000',
  address: 'Ciudad, Honduras',
}

export const footer = {
  copyright: `© ${new Date().getFullYear()} [PLACEHOLDER] Nombre de la Empresa. Todos los derechos reservados.`,
  links: [
    { label: 'Privacidad', href: '#' },
    { label: 'Términos', href: '#' },
  ],
}
