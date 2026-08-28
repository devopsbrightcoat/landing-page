import { footer, contact } from '../content'

export const Footer = () => {
  return (
    <footer className="bg-brand-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <img src="/brightcoat-logo.png" alt="BrightCoat Painting & Remodeling" className="h-16 w-auto" />
          <p className="max-w-xs text-sm text-brand-200">{footer.tagline}</p>
        </div>

        <div className="text-sm text-brand-200">
          <p>{contact.address}</p>
          <p className="mt-1">
            {contact.phone} · {contact.email}
          </p>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <p className="mx-auto max-w-6xl px-6 py-4 text-center text-xs text-brand-300">{footer.copyright}</p>
      </div>
    </footer>
  )
}
