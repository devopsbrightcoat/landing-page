// ---------------------------------------------------------------------------
// Landing page content for BrightCoat Painting & Remodeling, LLC.
// Everything editable lives here — update copy, services, or contact info
// without touching the components.
// ---------------------------------------------------------------------------

export const site = {
  name: 'BrightCoat Painting & Remodeling',
  tagline: 'Building Trust Through Quality & Professionalism',
}

export const nav = {
  links: [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  ctaLabel: 'Free Estimate',
  ctaHref: '#contact',
}

export const hero = {
  eyebrow: 'Austin, TX — Residential & Multifamily',
  heading: 'Professional Painting & Remodeling You Can Trust',
  subheading:
    'BrightCoat Painting & Remodeling, LLC provides professional painting, cleaning, repair, and remodeling services throughout the Austin area. We specialize in reliable, high-quality services for apartment communities, property managers, and residential properties.',
  primaryCta: { label: 'Request a Free Estimate', href: '#contact' },
  secondaryCta: { label: 'Our Services', href: '#services' },
}

export const services = {
  heading: 'Our Services',
  subheading: 'From a single room to a full property turn, we handle it all.',
  items: [
    {
      title: 'Interior Painting',
      description:
        'Professional interior painting for apartments, residential properties, common areas, offices, and other spaces.',
    },
    {
      title: 'Drywall Repair & Installation',
      description: 'Drywall installation, patching, tape and float, texture matching, and repairs.',
    },
    {
      title: 'Cleaning Services',
      description:
        'Apartment make-ready cleaning, full cleaning, heavy cleaning, touch-up cleaning, and common-area cleaning.',
    },
    {
      title: 'General Repairs',
      description:
        'Interior repairs including baseboards, trim, minor carpentry, wall repairs, and other property maintenance needs.',
    },
    {
      title: 'Remodeling',
      description:
        'Interior remodeling and restoration services, including kitchens, bathrooms, flooring-related repairs, cabinets, and other improvement projects.',
    },
    {
      title: 'Cabinet & Trim Painting',
      description: 'Professional preparation and painting of cabinets, doors, trim, and baseboards.',
    },
    {
      title: 'Water Damage Build-Back & Repairs',
      description:
        'Interior reconstruction and build-back after water mitigation, including drywall, baseboards, texture, painting, and related repairs.',
    },
  ],
}

export const about = {
  heading: 'About BrightCoat',
  paragraphs: [
    'BrightCoat Painting & Remodeling, LLC is an Austin-based company specializing in professional painting, make-ready services, cleaning, repairs, and remodeling.',
    'We work closely with property managers and multifamily communities to provide dependable, efficient, and high-quality service. From apartment turns and full interior painting to drywall repairs, cleaning, and larger renovation projects, our goal is to make every project simple and reliable from start to finish.',
  ],
  // Non-numeric trust highlights (no invented stats/years-in-business numbers)
  highlights: ['Residential & Multifamily', 'Property Manager Preferred', 'Available 24/7'],
}

// [PENDING] Real client testimonials have not been provided yet.
// The <Testimonials /> component is built and ready in
// src/components/Testimonials.tsx, but is intentionally NOT rendered in
// App.tsx until BrightCoat provides real reviews — never fill this with
// placeholder/fake reviews.
export const testimonials = {
  heading: 'What Our Clients Say',
  items: [] as { quote: string; name: string; role: string }[],
}

export const cta = {
  heading: 'Ready to Start Your Project?',
  subheading: 'Contact BrightCoat today for a free estimate on your next painting, repair, or remodeling project.',
  buttonLabel: 'Request a Free Estimate',
  buttonHref: '#contact',
}

export const contact = {
  heading: 'Get In Touch',
  subheading: "Reach out and we'll get back to you as soon as possible.",
  email: 'brightcoatpainting@gmail.com',
  phone: '(512) 541-9987',
  address: '3903 S Congress Ave #40006, Austin, TX 78704',
  hours: 'Available 24/7',
  owner: 'David Lopez — Owner / Project Manager',
}

export const footer = {
  tagline: 'Building Trust Through Quality & Professionalism',
  copyright: `© ${new Date().getFullYear()} BrightCoat Painting & Remodeling, LLC. All rights reserved.`,
}
