import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WorkGallery } from './components/WorkGallery'
import { Services } from './components/Services'
import { Multifamily } from './components/Multifamily'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Reviews } from './components/Reviews'
import { CTA } from './components/CTA'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WorkGallery />
        <Services />
        <Multifamily />
        <Projects />
        <About />
        <Reviews />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
