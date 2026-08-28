import { services } from '../content'

export const Services = () => {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">{services.heading}</h2>
        <p className="mt-4 text-lg text-ink-600">{services.subheading}</p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-ink-200 p-6 transition hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-900">
              <span className="h-5 w-5 rounded-full bg-gold-500" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-brand-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
