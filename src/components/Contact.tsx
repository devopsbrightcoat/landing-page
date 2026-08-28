import { type FormEvent, useState } from 'react'
import { contact } from '../content'

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // [PENDING] Wire this up to a real submission target before launch
    // (e.g. Formspree, EmailJS, or a custom API endpoint that emails
    // brightcoatpainting@gmail.com).
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-surface-alt">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{contact.heading}</h2>
          <p className="mt-4 text-lg text-ink-400">{contact.subheading}</p>

          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex gap-2">
              <dt className="font-semibold text-white">Email:</dt>
              <dd className="text-ink-400">{contact.email}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-white">Phone:</dt>
              <dd className="text-ink-400">{contact.phone}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-white">Address:</dt>
              <dd className="text-ink-400">{contact.address}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-white">Hours:</dt>
              <dd className="text-ink-400">{contact.hours}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-white">Contact:</dt>
              <dd className="text-ink-400">{contact.owner}</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-surface p-6 ring-1 ring-white/10">
          {submitted ? (
            <p className="text-center text-sm font-medium text-gold-400">
              Thank you! We've received your message and will be in touch soon.
            </p>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-white/15 bg-surface-alt px-3 py-2 text-sm text-white outline-none placeholder:text-ink-500 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/15 bg-surface-alt px-3 py-2 text-sm text-white outline-none placeholder:text-ink-500 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-white/15 bg-surface-alt px-3 py-2 text-sm text-white outline-none placeholder:text-ink-500 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
              >
                Send Message
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
