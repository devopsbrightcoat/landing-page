import { gallery } from '../content'

const PLACEHOLDER_COUNT = 8

export const WorkGallery = () => {
  const hasImages = gallery.images.length > 0
  const items: (string | undefined)[] = hasImages ? gallery.images : Array.from({ length: PLACEHOLDER_COUNT })
  const track = [...items, ...items]

  return (
    <section className="relative overflow-hidden bg-surface py-28">
      <div className="absolute inset-0 flex items-center opacity-70">
        <div className="marquee-track flex gap-4">
          {track.map((src, index) => (
            <div
              key={index}
              className="h-56 w-80 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-800 to-surface-alt"
            >
              {hasImages ? (
                <img src={src} alt="BrightCoat project work" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-xs font-medium uppercase tracking-wide text-ink-500">
                    Photo coming soon
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-surface/85" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{gallery.heading}</h2>
        <p className="mt-4 text-lg text-ink-200">{gallery.subheading}</p>
        <a
          href={gallery.cta.href}
          className="mt-8 rounded-full bg-gold-500 px-8 py-3.5 text-base font-semibold text-brand-900 transition hover:bg-gold-400"
        >
          {gallery.cta.label}
        </a>
      </div>
    </section>
  )
}
