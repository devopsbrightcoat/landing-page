import { reviews } from '../content'

export const Reviews = () => {
  return (
    <section id="reviews" className="bg-surface-alt">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{reviews.heading}</h2>
          <p className="mt-4 text-lg text-ink-400">{reviews.subheading}</p>
        </div>

        {reviews.items.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-dashed border-white/15 bg-surface p-12 text-center">
            <p className="text-sm font-medium text-ink-300">Client reviews coming soon.</p>
            <p className="mt-1 text-sm text-ink-500">
              Share the reviews you'd like featured (or your Google Business Profile link) and we'll add them here.
            </p>
          </div>
        ) : (
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {reviews.items.map((review) => (
              <figure key={review.author} className="rounded-2xl border border-white/10 bg-surface p-6">
                <div className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className={index < review.rating ? 'text-gold-400' : 'text-white/15'}>
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-ink-300">“{review.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-white">{review.author}</figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            href={reviews.googleUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition hover:text-gold-300"
          >
            Read Our Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  )
}
