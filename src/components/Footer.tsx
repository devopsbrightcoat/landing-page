import { footer, site } from '../content'

export const Footer = () => {
  return (
    <footer className="border-t border-ink-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-ink-500">{footer.copyright}</p>

        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-ink-700">{site.name}</span>
          {footer.links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-ink-500 hover:text-ink-800">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
