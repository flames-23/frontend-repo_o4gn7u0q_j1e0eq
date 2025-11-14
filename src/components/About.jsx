export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900">About</h2>
          </div>
          <div className="md:col-span-2 space-y-5 text-gray-700">
            <p>
              I’m a performance apparel designer focused on sport jerseys and team identity systems. I blend research-driven ergonomics with strong visual storytelling to deliver kits athletes are proud to wear.
            </p>
            <p>
              Over the last 6+ years, I’ve designed for clubs, federations, and consumer brands—from grassroots to pro—owning the process from concept to production handoff.
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-sm">
              <li className="p-3 rounded-lg border bg-white">• Tech packs and factory communication</li>
              <li className="p-3 rounded-lg border bg-white">• Sublimation and screenprint graphics</li>
              <li className="p-3 rounded-lg border bg-white">• Pattern blocks and grading</li>
              <li className="p-3 rounded-lg border bg-white">• Material and trim selection</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
