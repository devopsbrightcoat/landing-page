import { about } from '../content'

export const About = () => {
  return (
    <section id="nosotros" className="bg-ink-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{about.heading}</h2>
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-ink-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {about.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-brand-600">{stat.value}</p>
              <p className="mt-2 text-sm text-ink-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
