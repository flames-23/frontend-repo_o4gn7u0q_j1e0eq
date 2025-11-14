import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-end pb-16">
        <div className="backdrop-blur-sm bg-white/50 rounded-2xl p-6 md:p-8 shadow-xl max-w-2xl">
          <p className="uppercase tracking-widest text-xs md:text-sm text-gray-700">Sport Jersey Designer</p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 mt-2">
            High-Performance Apparel Design for Teams and Brands
          </h1>
          <p className="text-gray-700 mt-4 md:text-lg">
            I design dynamic, functional jerseys and apparel that bring identity to life — optimized for performance, production, and storytelling.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#work" className="px-5 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors">View Work</a>
            <a href="#contact" className="px-5 py-3 rounded-full bg-white text-gray-900 font-semibold border border-gray-300 hover:border-gray-400 transition-colors">Get a Quote</a>
          </div>
        </div>
      </div>
    </section>
  )
}
