import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { TrustStrip } from "@/components/sections/trust-strip"
import { WhoWeAre } from "@/components/sections/who-we-are"
import { GulfAfrica } from "@/components/sections/gulf-africa"
import { Services } from "@/components/sections/services"
import { AISection } from "@/components/sections/ai-section"
import { AIUseCases } from "@/components/sections/ai-use-cases"
import { Industries } from "@/components/sections/industries"
import { Infrastructure } from "@/components/sections/infrastructure"
import { HowWeWork } from "@/components/sections/how-we-work"
import { Engagement } from "@/components/sections/engagement"
import { WhyWanaf } from "@/components/sections/why-wanaf"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <WhoWeAre />
        <GulfAfrica />
        <Services />
        <AISection />
        <AIUseCases />
        <Industries />
        <Infrastructure />
        <HowWeWork />
        <Engagement />
        <WhyWanaf />
      </main>
      <Footer />
    </div>
  )
}
