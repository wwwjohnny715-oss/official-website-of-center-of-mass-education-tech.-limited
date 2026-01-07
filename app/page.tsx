import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Courses from '@/components/Courses'
import Tracks from '@/components/Tracks'
import Teaching from '@/components/Teaching'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Tracks />
        <Teaching />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  )
}

