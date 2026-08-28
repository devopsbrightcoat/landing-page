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
    <section id="contact" className="bg-ink-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">{contact.heading}</h2>
          <p className="mt-4 text-lg text-ink-600">{contact.subheading}</p>

          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex gap-2">
              <dt className="font-semibold text-brand-900">Email:</dt>
              <dd className="text-ink-600">{contact.email}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-brand-900">Phone:</dt>
              <dd className="text-ink-600">{contact.phone}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-brand-900">Address:</dt>
              <dd className="text-ink-600">{contact.address}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-brand-900">Hours:</dt>
              <dd className="text-ink-600">{contact.hours}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-brand-900">Contact:</dt>
              <dd className="text-ink-600">{contact.owner}</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-sm">
          {submitted ? (
            <p className="text-center text-sm font-medium text-brand-700">
              Thank you! We've received your message and will be in touch soon.
            </p>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-ink-300 px-3 py-2 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-ink-300 px-3 py-2 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-ink-300 px-3 py-2 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
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
