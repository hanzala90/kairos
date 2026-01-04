import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { MissionSection } from "@/components/sections/mission"
import { RoadmapSection } from "@/components/sections/roadmap"
import { TeamSection } from "@/components/sections/team"
import { FaqSection } from "@/components/sections/faq"
import { CtaSection } from "@/components/sections/cta"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <HeroSection />
        <FeaturesSection />
        <MissionSection />
        <RoadmapSection />
        <TeamSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}

