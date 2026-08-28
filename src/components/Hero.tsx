import { hero } from '../content'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, var(--color-gold-500), transparent 45%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-32">
        <span className="mb-4 inline-flex items-center rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-sm font-medium text-gold-300">
          {hero.eyebrow}
        </span>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          {hero.heading}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-brand-100">{hero.subheading}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={hero.primaryCta.href}
            className="rounded-full bg-gold-500 px-8 py-3.5 text-base font-semibold text-brand-900 shadow-lg shadow-gold-500/20 transition hover:bg-gold-400"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="rounded-full border border-brand-100/30 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
