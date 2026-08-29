import { multifamily } from '../content'

export const Multifamily = () => {
  return (
    <section id="multifamily" className="bg-surface-alt">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
          <div>
            <span className="inline-flex items-center rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-sm font-medium text-gold-300">
              {multifamily.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{multifamily.heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-400">{multifamily.subheading}</p>
            <a
              href={multifamily.cta.href}
              className="mt-8 inline-flex rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
            >
              {multifamily.cta.label}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {multifamily.services.map((service) => (
              <div key={service.title} className="rounded-xl border border-white/10 bg-surface p-5">
                <h3 className="text-sm font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
