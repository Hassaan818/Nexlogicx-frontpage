import About from "@/components/about"
import Features from "@/components/features"
import Trial from "@/components/trial"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import HeroSection from "../components/HeroSection"

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <About />
      <Features />
      <Trial />
      <Contact />
      <Footer />
    </main>
  )
}
