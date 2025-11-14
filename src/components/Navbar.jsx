import { useState } from 'react'
import { Menu, X, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/30" />
          <span className="font-extrabold tracking-tight text-gray-900 text-lg">Apparel Designer</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
          <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="YouTube"><Youtube size={18} /></a>
          <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#contact" className="ml-2 px-4 py-2 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors">Hire Me</a>
        </div>

        <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-full hover:bg-gray-100">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <span className="font-extrabold text-lg">Menu</span>
            <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
              <X />
            </button>
          </div>
          <div className="px-6 py-6 space-y-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block text-xl font-semibold text-gray-900">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="p-2 rounded-full bg-gray-900 text-white" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" className="p-2 rounded-full bg-gray-900 text-white" aria-label="YouTube"><Youtube size={18} /></a>
              <a href="#" className="p-2 rounded-full bg-gray-900 text-white" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
            <a href="#contact" className="inline-block px-5 py-3 rounded-full bg-gray-900 text-white font-semibold">Hire Me</a>
          </div>
        </div>
      )}
    </header>
  )
}
