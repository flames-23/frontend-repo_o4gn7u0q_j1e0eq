import { motion } from 'framer-motion'
import { Star, Users, BadgeCheck } from 'lucide-react'

const projects = [
  {
    title: 'Elite FC 2025 Home Kit',
    description: 'Aero-mesh paneling, gradient fade, and pro-grade typography system.',
    tags: ['Sublimation', 'Typography', 'Mesh'],
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'National Team Alternate',
    description: 'Monochrome blackout kit with reflective piping and tonal crest.',
    tags: ['Blackout', 'Reflective', 'Tonal'],
    image: 'https://images.unsplash.com/photo-1518600506278-4e8ef466b810?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'City Runners Club',
    description: 'Ultra-light race singlet with heat-mapped ventilation zones.',
    tags: ['Running', 'Ventilated', 'Ultra-light'],
    image: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900">Selected Work</h2>
            <p className="text-gray-600 mt-2">A look at jerseys and performance apparel crafted for clubs, federations, and brands.</p>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><Users size={18} /> Team Kits</div>
            <div className="flex items-center gap-2"><Star size={18} /> Limited Drops</div>
            <div className="flex items-center gap-2"><BadgeCheck size={18} /> Production Ready</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-gray-900"
            >
              <img src={p.image} alt={p.title} className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-white/80 text-sm mt-1">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-full bg-white/10 text-xs border border-white/20">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
