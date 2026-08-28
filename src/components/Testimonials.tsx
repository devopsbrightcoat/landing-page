import { testimonials } from '../content'

export const Testimonials = () => {
  return (
    <section id="testimonios" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-center text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
        {testimonials.heading}
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.items.map((item) => (
          <figure key={item.name} className="flex flex-col rounded-2xl border border-ink-200 p-6">
            <blockquote className="flex-1 text-sm leading-relaxed text-ink-700">“{item.quote}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="h-10 w-10 shrink-0 rounded-full bg-brand-100" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold text-ink-900">{item.name}</span>
                <span className="block text-xs text-ink-500">{item.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
