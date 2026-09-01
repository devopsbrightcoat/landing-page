import { useEffect, useState } from 'react'
import { projects } from '../content'

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const hasBeforeAfter = projects.items.length > 0
  const images = projects.images
  const hasGallery = images.length > 0

  const close = () => setActiveIndex(null)
  const showPrev = () =>
    setActiveIndex((current) => (current === null ? null : (current - 1 + images.length) % images.length))
  const showNext = () =>
    setActiveIndex((current) => (current === null ? null : (current + 1) % images.length))

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') showPrev()
      if (event.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex])

  return (
    <section id="projects" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{projects.heading}</h2>
          <p className="mt-4 text-lg text-ink-400">{projects.subheading}</p>
        </div>

        {hasBeforeAfter ? (
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.items.map((project) => (
              <div key={project.title} className="overflow-hidden rounded-2xl border border-white/10 bg-surface-alt">
                <div className="grid grid-cols-2">
                  <img src={project.before} alt={`${project.title}, before`} className="h-40 w-full object-cover" />
                  <img src={project.after} alt={`${project.title}, after`} className="h-40 w-full object-cover" />
                </div>
                <p className="p-4 text-sm font-semibold text-white">{project.title}</p>
              </div>
            ))}
          </div>
        ) : hasGallery ? (
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-surface-alt"
              >
                <img
                  src={src}
                  alt={`BrightCoat project photo ${index + 1}`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/50 group-hover:opacity-100">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white ring-1 ring-white/30 backdrop-blur">
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-2xl border border-dashed border-white/15 bg-surface-alt p-12 text-center">
            <p className="text-sm font-medium text-ink-300">Before &amp; after photos coming soon.</p>
            <p className="mt-1 text-sm text-ink-500">Send project photos and we'll feature them here.</p>
          </div>
        )}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Project photo viewer"
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              close()
            }}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-white ring-1 ring-white/20 transition hover:bg-white/20"
            aria-label="Close"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showPrev()
            }}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white ring-1 ring-white/20 transition hover:bg-white/20 sm:left-6"
            aria-label="Previous photo"
          >
            ‹
          </button>

          <img
            src={images[activeIndex]}
            alt={`BrightCoat project photo ${activeIndex + 1}`}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              showNext()
            }}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white ring-1 ring-white/20 transition hover:bg-white/20 sm:right-6"
            aria-label="Next photo"
          >
            ›
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-medium text-ink-400">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </section>
  )
}
