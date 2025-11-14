import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      // For now, just simulate sending
      await new Promise((r) => setTimeout(r, 1200))
      setStatus('Thanks! I will get back to you within 24 hours.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900">Start a Project</h2>
        <p className="text-gray-600 mt-2">Tell me about your team, brand, or event. I’ll follow up with timelines and a tailored proposal.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input required name="name" placeholder="Name" className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            <input required type="email" name="email" placeholder="Email" className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <input name="team" placeholder="Team / Brand" className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <textarea required name="message" rows="5" placeholder="Project details, scope, timeline..." className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <div className="flex items-center gap-4">
            <button className="px-5 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800">Send Inquiry</button>
            <span className="text-sm text-gray-600">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
