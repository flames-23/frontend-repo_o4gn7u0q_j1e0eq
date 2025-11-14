import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Process />
        <About />
        <Contact />
      </main>
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Apparel Designer — Sport Jerseys & Performance Wear</p>
          <a href="#hero" className="px-4 py-2 rounded-full bg-gray-900 text-white font-semibold">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
