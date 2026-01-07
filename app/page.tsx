import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { JourneySection } from "@/components/journey-section"
import { TrophiesSection } from "@/components/trophies-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <JourneySection />
      <TrophiesSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
