import type { Metadata } from "next"
import Link from "next/link"
import { IconArrowRight } from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/sections/page-hero"

export const metadata: Metadata = {
  title: "How We Work — WANAF Technologies",
  description:
    "Discover, Design, Prove, Build, Run. Our delivery method and engagement models.",
}

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map the current process, the data available, the constraints and the cost of the problem before proposing anything.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architecture, scope, timeline and price agreed in writing, with assumptions and data requirements stated.",
  },
  {
    number: "03",
    title: "Prove",
    description:
      "For AI work, a short pilot against a defined success measure. If it does not clear the bar, we say so rather than scaling it.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Short delivery cycles with working software demonstrated to you at each stage.",
  },
  {
    number: "05",
    title: "Run",
    description:
      "Handover, documentation, training, model monitoring and support under a defined service level.",
  },
]

const models = [
  {
    title: "Fixed-Scope Project",
    description: "Defined deliverables, milestones and a fixed price.",
  },
  {
    title: "AI Pilot",
    description:
      "A contained proof of value with an agreed success measure and a decision point at the end.",
  },
  {
    title: "Dedicated Team",
    description:
      "A named engineering or data team retained monthly and directed by you.",
  },
  {
    title: "Managed Service",
    description:
      "Ongoing operation, model monitoring and support against agreed service levels.",
  },
  {
    title: "Advisory",
    description:
      "Short assignments — AI readiness, architecture review, vendor selection, security assessment, second opinion.",
  },
]

export default function HowWeWorkPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          label="Method"
          title={
            <>
              How we <span className="text-monsoon-teal">work</span>
            </>
          }
          subtitle="A structured delivery method that de-risks AI and technology projects from day one."
        />

        {/* Delivery steps */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
                Delivery
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Five steps from problem to production
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-4 border-b border-border pb-8 last:border-0 lg:grid-cols-[auto_1fr] lg:gap-8"
                >
                  <span className="text-3xl font-semibold text-monsoon-teal">
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-base text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement models */}
        <section className="bg-dhow-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
                Engagement
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-sandstone text-balance sm:text-4xl">
                Ways to engage
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {models.map((model) => (
                <div
                  key={model.title}
                  className="flex flex-col gap-3 rounded-xl border border-sandstone/8 bg-sandstone/[0.02] p-6"
                >
                  <h3 className="font-semibold text-sandstone">
                    {model.title}
                  </h3>
                  <p className="text-sm text-sandstone/50">
                    {model.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
                Request a Consultation
                <IconArrowRight data-icon="inline-end" className="size-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
