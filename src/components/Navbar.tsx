import { useState } from 'react'
import { nav, site } from '../content'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold text-ink-900">
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-600 transition hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={nav.ctaHref}
          className="hidden rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 md:inline-block"
        >
          {nav.ctaLabel}
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-700 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span className="sr-only">Menú</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-ink-700" />
            <span className="block h-0.5 w-6 bg-ink-700" />
            <span className="block h-0.5 w-6 bg-ink-700" />
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
              className="rounded-md px-2 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.ctaHref}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-brand-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            {nav.ctaLabel}
          </a>
        </nav>
      )}
    </header>
  )
}
