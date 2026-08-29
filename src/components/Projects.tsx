import { projects } from '../content'

export const Projects = () => {
  return (
    <section id="projects" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{projects.heading}</h2>
          <p className="mt-4 text-lg text-ink-400">{projects.subheading}</p>
        </div>

        {projects.items.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-dashed border-white/15 bg-surface-alt p-12 text-center">
            <p className="text-sm font-medium text-ink-300">Before &amp; after photos coming soon.</p>
            <p className="mt-1 text-sm text-ink-500">Send project photos and we'll feature them here.</p>
          </div>
        ) : (
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.items.map((project) => (
              <div key={project.title} className="overflow-hidden rounded-2xl border border-white/10 bg-surface-alt">
                <div className="grid grid-cols-2">
                  <img src={project.before} alt={`${project.title} — before`} className="h-40 w-full object-cover" />
                  <img src={project.after} alt={`${project.title} — after`} className="h-40 w-full object-cover" />
                </div>
                <p className="p-4 text-sm font-semibold text-white">{project.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
