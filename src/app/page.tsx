import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Achievements from '@/components/Achievements'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
      <Chatbot />
    </main>
  )
}