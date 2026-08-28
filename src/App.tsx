import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { CTA } from './components/CTA'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

// Note: <Testimonials /> exists in ./components/Testimonials.tsx but is not
// rendered yet — enable it once BrightCoat provides real client reviews.

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
