import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ScreenshotsSection } from "@/components/screenshots-section"
import { ThemesSection } from "@/components/themes-section"
import { PricingSection } from "@/components/pricing-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" />

      {/* Gradient Orbs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <ThemesSection />
      <PricingSection />
      <DownloadSection />
      <Footer />
    </main>
  )
}
