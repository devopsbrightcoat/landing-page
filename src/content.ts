import gallery1 from './assets/gallery/gallery-1.jpeg'
import gallery2 from './assets/gallery/gallery-2.jpeg'
import gallery3 from './assets/gallery/gallery-3.jpeg'
import gallery4 from './assets/gallery/gallery-4.jpeg'
import gallery5 from './assets/gallery/gallery-5.jpeg'
import gallery6 from './assets/gallery/gallery-6.jpeg'
import gallery7 from './assets/gallery/gallery-7.jpeg'
import gallery8 from './assets/gallery/gallery-8.jpeg'

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
    { label: 'Multifamily', href: '#multifamily' },
    { label: 'Projects', href: '#projects' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  ctaLabel: 'Free Estimate',
  ctaHref: '#contact',
}

export const hero = {
  eyebrow: 'BrightCoat Painting + Multifamily + Austin',
  heading: 'Professional Painting Services',
  subheading:
    "Professional painting and property services built for Austin’s multifamily communities, property managers, and homeowners. From apartment turns to larger projects, BrightCoat delivers quality work, dependable scheduling, and a team you can count on.",
  primaryCta: { label: 'Request a Free Estimate', href: '#contact' },
  secondaryCta: { label: 'Our Services', href: '#services' },
}

export const gallery = {
  heading: 'See Our Work in Action',
  subheading: 'A look at the painting and remodeling work BrightCoat delivers across Austin.',
  cta: { label: 'View Recent Projects', href: '#projects' },
  images: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8],
}

export const services = {
  heading: 'Our Services',
  subheading: 'Painting is our specialty — with cleaning and repairs available for every project.',
  primary: {
    badge: 'Our Specialty',
    title: 'Interior Painting',
    description:
      'Professional interior painting for apartments, residential properties, common areas, offices, and other spaces — the service BrightCoat is built around.',
    bullets: [
      'Apartment & multifamily interiors',
      'Residential interior painting',
      'Common areas & offices',
    ],
  },
  additional: [
    {
      title: 'Cleaning Services',
      description:
        'Apartment make-ready cleaning, full cleaning, heavy cleaning, touch-up cleaning, and common-area cleaning.',
    },
    {
      title: 'Drywall Repair & Installation',
      description: 'Drywall installation, patching, tape and float, texture matching, and repairs.',
    },
    {
      title: 'General Repairs',
      description:
        'Interior repairs including baseboards, trim, minor carpentry, wall repairs, and other property maintenance needs.',
    },
  ],
}

export const multifamily = {
  eyebrow: 'Property Managers & Multifamily',
  heading: 'Multifamily & Property Management Services',
  subheading:
    "A large part of BrightCoat's work is helping property managers and multifamily communities turn units fast and keep properties looking their best.",
  services: [
    {
      title: 'Apartment Turns',
      description:
        'Fast, reliable turnaround between tenants — painting, repairs, and cleaning coordinated so units are ready on schedule.',
    },
    {
      title: 'Painting',
      description:
        'Unit interiors, common areas, and community spaces, painted to a consistent, professional standard across the property.',
    },
    {
      title: 'Drywall Repairs',
      description: 'Patching, tape and float, and texture matching for wear-and-tear and move-out damage.',
    },
    {
      title: 'Cleaning',
      description: 'Make-ready and common-area cleaning to get units and shared spaces resident-ready.',
    },
    {
      title: 'Build-Back',
      description:
        'Interior reconstruction and build-back after water damage or major repairs, from drywall through final paint.',
    },
  ],
  cta: { label: 'Talk to Us About Your Property', href: '#contact' },
}

// General project photos (reused from the real gallery images imported above)
// power a clickable lightbox gallery below. Add real before/after pairs to
// `items` once BrightCoat sends them — the section will switch to a
// dedicated before/after layout once `items` is populated. Never fill
// `items` with stock or placeholder photos presented as real BrightCoat work.
export const projects = {
  heading: 'Recent Projects',
  subheading: 'A look at our painting, repair, and remodeling work across Austin.',
  images: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8],
  items: [] as { title: string; before: string; after: string }[],
}

// [PENDING] Real client reviews have not been provided yet. Add them here
// once BrightCoat shares the reviews they want featured (text, author,
// rating), and replace googleUrl with their real Google Business Profile
// link. Never invent reviews or reviewer names.
export const reviews = {
  heading: 'What Our Clients Say',
  subheading: 'Reviews from real BrightCoat clients on Google.',
  googleUrl: '#',
  items: [] as { quote: string; author: string; rating: number }[],
}

export const about = {
  heading: 'About BrightCoat',
  subheading: 'Built on Trust. Defined by Quality.',
  paragraphs: [
    'BrightCoat Painting & Remodeling began with a single opportunity — and a clear vision: build a company where quality, reliability, and trust come before everything else.',
    'That journey started with smaller projects across Austin, where every job was a chance to prove ourselves. By showing up when we said we would, finishing on time, communicating clearly, and delivering consistent quality, we began earning the trust of our clients and the property managers we work with.',
    "That trust opened new doors. Project by project, relationship by relationship, BrightCoat has grown into a name property managers across Austin's multifamily industry recognize and rely on. Our goal was never simply to compete — it was to earn our place through the quality of our work and the relationships we build.",
    "As we continue to grow, the principles that got us here haven't changed: be responsible, keep our word, communicate openly, and deliver work we're proud to stand behind.",
  ],
  // Non-numeric trust highlights (no invented stats/years-in-business numbers)
  highlights: ['Residential & Multifamily', 'Property Manager Preferred', 'Available 24/7'],
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
  formspreeEndpoint: 'https://formspree.io/f/mrpgbyey',
}

export const footer = {
  tagline: 'Building Trust Through Quality & Professionalism',
  copyright: `© ${new Date().getFullYear()} BrightCoat Painting & Remodeling, LLC. All rights reserved.`,
}
