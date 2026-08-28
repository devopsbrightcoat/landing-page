import { cta } from '../content'

export const CTA = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="flex flex-col items-center rounded-3xl bg-brand-600 px-8 py-16 text-center">
        <h2 className="max-w-xl text-3xl font-bold text-white sm:text-4xl">{cta.heading}</h2>
        <p className="mt-4 max-w-md text-brand-100">{cta.subheading}</p>
        <a
          href={cta.buttonHref}
          className="mt-8 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 transition hover:bg-brand-50"
        >
          {cta.buttonLabel}
        </a>
      </div>
    </section>
  )
}
