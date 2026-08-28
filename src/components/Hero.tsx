import { hero } from '../content'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-32">
        <span className="mb-4 inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
          {hero.eyebrow}
        </span>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
          {hero.heading}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-ink-600">{hero.subheading}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={hero.primaryCta.href}
            className="rounded-full bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="rounded-full border border-ink-300 px-8 py-3.5 text-base font-semibold text-ink-700 transition hover:border-ink-400 hover:bg-ink-50"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
