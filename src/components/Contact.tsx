import { type FormEvent, useState } from 'react'
import { contact } from '../content'

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // [PLACEHOLDER] Conectar con el backend/servicio de correo real
    // (por ejemplo: fetch a una API, Formspree, EmailJS, etc.)
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="bg-ink-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{contact.heading}</h2>
          <p className="mt-4 text-lg text-ink-600">{contact.subheading}</p>

          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex gap-2">
              <dt className="font-semibold text-ink-900">Correo:</dt>
              <dd className="text-ink-600">{contact.email}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-ink-900">Teléfono:</dt>
              <dd className="text-ink-600">{contact.phone}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-ink-900">Ubicación:</dt>
              <dd className="text-ink-600">{contact.address}</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-sm">
          {submitted ? (
            <p className="text-center text-sm font-medium text-brand-700">
              ¡Gracias! Hemos recibido tu mensaje.
            </p>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink-700">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-ink-300 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink-700">
                  Correo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-ink-300 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-ink-300 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Enviar mensaje
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
