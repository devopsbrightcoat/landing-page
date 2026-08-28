import { cta } from '../content'

export const CTA = () => {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex flex-col items-center rounded-3xl bg-brand-900 px-8 py-16 text-center ring-1 ring-gold-500/20">
          <h2 className="max-w-xl text-3xl font-bold text-white sm:text-4xl">{cta.heading}</h2>
          <p className="mt-4 max-w-md text-brand-100">{cta.subheading}</p>
          <a
            href={cta.buttonHref}
            className="mt-8 rounded-full bg-gold-500 px-8 py-3.5 text-base font-semibold text-brand-900 transition hover:bg-gold-400"
          >
            {cta.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
