import type { Metadata } from "next"
import Link from "next/link"
import {
  IconBuildingEstate,
  IconBuildingBank,
  IconFlame,
  IconPick,
  IconTruckDelivery,
  IconAntenna,
  IconShoppingCart,
  IconPlant,
  IconHeartPlus,
  IconSchool,
  IconBuildingSkyscraper,
  IconArrowRight,
} from "@tabler/icons-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/sections/page-hero"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export const metadata: Metadata = {
  title: "Industries — WANAF Technologies",
  description:
    "Technology built for the way your industry works. Government, banking, energy, logistics, telecom, retail, agriculture, healthcare, education and real estate.",
}

const industries = [
  {
    slug: "government",
    icon: IconBuildingEstate,
    title: "Government & Public Sector",
    description:
      "Citizen service assistants in local languages, document and permit processing, inter-agency data integration, policy analytics, smart-city and traffic systems.",
  },
  {
    slug: "banking",
    icon: IconBuildingBank,
    title: "Banking, Fintech & Insurance",
    description:
      "Credit scoring including alternative-data lending, fraud and AML detection, claims automation, customer onboarding and KYC, collections prioritisation.",
  },
  {
    slug: "energy",
    icon: IconFlame,
    title: "Energy, Oil, Gas & Mining",
    description:
      "Predictive maintenance, field data capture, production forecasting, safety monitoring by computer vision, asset and inspection analytics.",
  },
  {
    slug: "mining",
    icon: IconPick,
    title: "Mining",
    description:
      "Geological data analysis, equipment monitoring, safety compliance and operational analytics for mining operations.",
  },
  {
    slug: "logistics",
    icon: IconTruckDelivery,
    title: "Logistics, Ports & Trade",
    description:
      "Route and load optimisation, customs and trade documentation automation, gate and yard recognition, shipment visibility across the Gulf–Africa corridor.",
  },
  {
    slug: "telecommunications",
    icon: IconAntenna,
    title: "Telecommunications",
    description:
      "Network optimisation, churn prediction, revenue assurance, automated customer support, mobile money analytics.",
  },
  {
    slug: "retail",
    icon: IconShoppingCart,
    title: "Retail, Distribution & Ecommerce",
    description:
      "Demand forecasting, stock and pricing optimisation, recommendation engines, point-of-sale and online channel integration.",
  },
  {
    slug: "agriculture",
    icon: IconPlant,
    title: "Agriculture & Agri-processing",
    description:
      "Satellite and drone crop monitoring, yield estimation, traceability and supply-chain visibility, advisory tools, quality inspection.",
  },
  {
    slug: "healthcare",
    icon: IconHeartPlus,
    title: "Healthcare",
    description:
      "Records digitisation and search, scheduling and capacity planning, imaging support tools, clinical documentation assistance with privacy controls.",
  },
  {
    slug: "education",
    icon: IconSchool,
    title: "Education & Training",
    description:
      "Learning platforms, adaptive assessment, administrative automation, institutional analytics.",
  },
  {
    slug: "real-estate",
    icon: IconBuildingSkyscraper,
    title: "Real Estate & Construction",
    description:
      "Project and cost analytics, site safety monitoring, building management systems, tenant and facilities platforms.",
  },
]

export default function IndustriesPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          label="Industries"
          title={
            <>
              Technology built for the way your{" "}
              <span className="text-monsoon-teal">industry works</span>
            </>
          }
          subtitle="Where we concentrate, and what artificial intelligence realistically delivers in each sector."
        />

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((ind, idx) => (
                <RevealOnScroll key={ind.slug} delay={idx * 60}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group flex h-full flex-col gap-4 rounded-xl border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-monsoon-teal/30 hover:shadow-lg hover:shadow-monsoon-teal/5"
                  >
                    <div className="flex size-12 items-center justify-center rounded-lg bg-monsoon-teal/10 transition-transform duration-300 group-hover:scale-110">
                      <ind.icon className="size-6 text-monsoon-teal" />
                    </div>
                    <h3 className="text-lg font-semibold">{ind.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {ind.description}
                    </p>
                    <span className="mt-auto flex items-center gap-1.5 text-sm font-medium text-monsoon-teal">
                      Learn more
                      <IconArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
