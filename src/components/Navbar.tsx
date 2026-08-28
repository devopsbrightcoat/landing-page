import { useState } from 'react'
import { nav } from '../content'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center">
          <img src="/brightcoat-logo.png" alt="BrightCoat Painting & Remodeling" className="h-14 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-800 transition hover:text-gold-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={nav.ctaHref}
          className="hidden rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-brand-900 transition hover:bg-gold-400 md:inline-block"
        >
          {nav.ctaLabel}
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-800 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-brand-800" />
            <span className="block h-0.5 w-6 bg-brand-800" />
            <span className="block h-0.5 w-6 bg-brand-800" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink-200 bg-white px-6 py-4 md:hidden">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-brand-800 hover:bg-ink-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.ctaHref}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-gold-500 px-5 py-2.5 text-center text-sm font-semibold text-brand-900"
          >
            {nav.ctaLabel}
          </a>
        </nav>
      )}
    </header>
  )
}
