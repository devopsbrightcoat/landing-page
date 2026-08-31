import { about } from '../content'

export const About = () => {
  return (
    <section id="about" className="bg-surface-alt">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{about.heading}</h2>
          <p className="mt-2 text-lg font-semibold text-gold-400">{about.subheading}</p>
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-ink-400">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-6 border-l-2 border-gold-500 pl-4 text-lg font-semibold italic text-white">
            {about.motto}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {about.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-3 rounded-xl bg-surface p-5 ring-1 ring-white/10"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-800">
                <span className="h-3 w-3 rounded-full bg-gold-500" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold text-white">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
