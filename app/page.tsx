import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { DesignProcess } from '@/components/design-process'
import { Personas } from '@/components/personas'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <DesignProcess />
      <Personas />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
