import { services } from '../content'

export const Services = () => {
  return (
    <section id="services" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{services.heading}</h2>
          <p className="mt-4 text-lg text-ink-400">{services.subheading}</p>
        </div>

        {/* Painting — primary/featured service */}
        <div className="mt-16 rounded-3xl border border-gold-500/30 bg-gradient-to-br from-brand-900 to-surface-alt p-8 sm:p-10">
          <span className="inline-flex items-center rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-300">
            {services.primary.badge}
          </span>
          <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{services.primary.title}</h3>
          <p className="mt-3 max-w-2xl text-ink-300">{services.primary.description}</p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.primary.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2 text-sm text-ink-200">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Additional services */}
        <h3 className="mt-16 text-center text-sm font-semibold uppercase tracking-wide text-ink-400">
          Additional Services
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.additional.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-surface-alt p-6 transition hover:-translate-y-1 hover:border-gold-500/50"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <span className="h-5 w-5 rounded-full bg-gold-500" aria-hidden="true" />
              </div>
              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
