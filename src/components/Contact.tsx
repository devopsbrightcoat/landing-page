import { type FormEvent, useState } from 'react'
import { contact } from '../content'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export const Contact = () => {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('submitting')

    try {
      const response = await fetch(contact.formspreeEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
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
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-surface p-6 ring-1 ring-white/10">
          {status === 'success' ? (
            <p className="text-center text-sm font-medium text-gold-400">
              Thank you! We've received your message and will be in touch soon.
            </p>
          ) : (
            <div className="space-y-4">
              {/* Honeypot spam trap — real visitors never see or fill this */}
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />
              <input type="hidden" name="_subject" value="New message from the BrightCoat website" />

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

              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Something went wrong sending your message. Please try again, or email us directly at{' '}
                  {contact.email}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : 'Send Message'}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
