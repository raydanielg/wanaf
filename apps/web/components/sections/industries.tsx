import Link from "next/link"
import {
  IconBuildingEstate,
  IconBuildingBank,
  IconTruckDelivery,
  IconArrowRight,
} from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const industries = [
  "Government & Public Sector",
  "Banking & Fintech",
  "Energy, Oil & Gas",
  "Mining",
  "Logistics & Trade",
  "Telecommunications",
  "Retail & Ecommerce",
  "Agriculture",
  "Healthcare",
  "Education",
  "Real Estate & Construction",
]

const featured = [
  {
    icon: IconBuildingEstate,
    title: "Government",
    description:
      "AI-powered public services, document processing and citizen experience.",
    href: "/industries/government",
  },
  {
    icon: IconBuildingBank,
    title: "Banking & Fintech",
    description:
      "Fraud detection, credit scoring, KYC automation and intelligent customer operations.",
    href: "/industries/banking",
  },
  {
    icon: IconTruckDelivery,
    title: "Logistics & Trade",
    description:
      "Route optimisation, customs automation, yard intelligence and shipment visibility.",
    href: "/industries/logistics",
  },
]

export function Industries() {
  return (
    <section id="industries" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Featured industries */}
        <div className="mb-20">
          <RevealOnScroll>
            <div className="mb-12 max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
                Featured
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                Technology built for the way your industry works.
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid gap-6 lg:grid-cols-3">
            {featured.map((ind, idx) => (
              <RevealOnScroll key={ind.title} delay={idx * 100}>
                <Link
                  href={ind.href}
                  className="group flex h-full flex-col gap-4 rounded-xl border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-monsoon-teal/30 hover:shadow-lg hover:shadow-monsoon-teal/5"
                >
                  <div className="flex size-12 items-center justify-center rounded-lg bg-monsoon-teal/10 transition-transform duration-300 group-hover:scale-110">
                    <ind.icon className="size-6 text-monsoon-teal" />
                  </div>
                  <h3 className="text-xl font-semibold">{ind.title}</h3>
                  <p className="text-sm text-muted-foreground">{ind.description}</p>
                  <span className="mt-auto flex items-center gap-1.5 text-sm font-medium text-monsoon-teal">
                    Learn more
                    <IconArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* All industries */}
        <RevealOnScroll>
          <div className="border-t border-border pt-16">
            <h3 className="mb-8 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              All industries
            </h3>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind) => (
                <Link
                  key={ind}
                  href={`/industries/${ind.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-monsoon-teal/30 hover:text-foreground hover:-translate-y-0.5"
                >
                  {ind}
                </Link>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button size="lg" variant="outline" nativeButton={false} render={<Link href="/industries" />}>
                Explore Industries
                <IconArrowRight data-icon="inline-end" className="size-4" />
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
