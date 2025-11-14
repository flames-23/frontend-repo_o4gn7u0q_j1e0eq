import { motion } from 'framer-motion'
import { Palette, Ruler, Layers, Package } from 'lucide-react'

const steps = [
  {
    icon: Palette,
    title: 'Discovery & Moodboards',
    desc: 'We align on identity, materials, references, and season objectives.'
  },
  {
    icon: Ruler,
    title: 'Pattern & Fit',
    desc: 'Ergonomic pattern blocks optimized for movement and breathability.'
  },
  {
    icon: Layers,
    title: 'Graphics & Trim',
    desc: 'Numbering systems, sponsor lockups, crests, and heat-transfer placements.'
  },
  {
    icon: Package,
    title: 'Production Ready',
    desc: 'Tech packs, colorways, Pantone specs, and factory handoff.'
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900">Design Process</h2>
        <p className="text-gray-600 mt-2 max-w-2xl">A streamlined workflow that balances creativity with manufacturability for elite performance apparel.</p>

        <div className="grid md:grid-cols-4 gap-6 md:gap-8 mt-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <s.icon className="text-gray-900" />
              <h3 className="font-bold mt-4 text-gray-900">{s.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
