import type { Metadata } from "next"
import Link from "next/link"
import {
  IconBrain,
  IconDatabase,
  IconCode,
  IconCloud,
  IconShieldCheck,
  IconBuildingCog,
  IconServer,
  IconArrowRight,
} from "@tabler/icons-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/sections/page-hero"

export const metadata: Metadata = {
  title: "Services — WANAF Technologies",
  description:
    "AI, data engineering, software development, cloud infrastructure, cybersecurity, enterprise systems and managed IT services.",
}

const services = [
  {
    slug: "artificial-intelligence",
    icon: IconBrain,
    title: "Artificial Intelligence",
    description:
      "AI strategy, GenAI, machine learning, computer vision and AI governance.",
    capabilities: [
      "AI strategy & readiness",
      "Generative AI & language solutions",
      "Machine learning & predictive analytics",
      "Computer vision & sensing",
      "Data engineering & BI",
      "Intelligent automation",
      "AI governance, security & compliance",
    ],
  },
  {
    slug: "data-engineering",
    icon: IconDatabase,
    title: "Data & Analytics",
    description:
      "Data platforms, warehouses, pipelines, BI and operational analytics.",
    capabilities: [
      "Data warehouses & lakehouses",
      "Integration pipelines",
      "Master data management",
      "Executive dashboards",
      "Real-time operational reporting",
      "Spreadsheet-to-platform migration",
    ],
  },
  {
    slug: "software-engineering",
    icon: IconCode,
    title: "Software Engineering",
    description:
      "Web, mobile, enterprise applications and system integrations.",
    capabilities: [
      "Web & mobile development",
      "System & API integration",
      "Legacy system modernisation",
      "UI/UX design & prototyping",
      "QA & test automation",
      "Performance testing",
    ],
  },
  {
    slug: "cloud-infrastructure",
    icon: IconCloud,
    title: "Cloud & Infrastructure",
    description:
      "Cloud architecture, DevOps, private/hybrid infrastructure and managed hosting.",
    capabilities: [
      "Cloud migration (AWS, Azure, GCP)",
      "Solution architecture & DevOps",
      "Private & on-premise deployment",
      "Network & Wi-Fi deployment",
      "Backup & disaster recovery",
      "Managed hosting",
    ],
  },
  {
    slug: "cybersecurity",
    icon: IconShieldCheck,
    title: "Cybersecurity",
    description:
      "Security assessments, IAM, monitoring, incident response and compliance.",
    capabilities: [
      "Vulnerability scanning & pentesting",
      "Identity & access management",
      "Security monitoring & incident response",
      "Policy development",
      "Staff security awareness",
      "ISO 27001 readiness",
    ],
  },
  {
    slug: "enterprise-systems",
    icon: IconBuildingCog,
    title: "Enterprise Technology",
    description:
      "ERP, CRM, workflow, document management, payments and telecom integrations.",
    capabilities: [
      "ERP & CRM implementation",
      "Document & records management",
      "Payment gateway & mobile money",
      "E-commerce integration",
      "Workflow automation",
      "Service desk & licence management",
    ],
  },
  {
    slug: "managed-it",
    icon: IconServer,
    title: "Managed IT",
    description:
      "Service desk, infrastructure management, licensing and technology support.",
    capabilities: [
      "Service desk under SLAs",
      "Device & licence management",
      "Infrastructure monitoring",
      "Hardware & software procurement",
      "IT staff augmentation",
      "Ongoing support & maintenance",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          label="Services"
          title={
            <>
              What we <span className="text-monsoon-teal">build</span>
            </>
          }
          subtitle="From AI strategy through to managed IT support, WANAF delivers the full technology stack — independently or as an integrated programme."
        />

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12">
              {services.map((service, idx) => (
                <div
                  key={service.slug}
                  className="grid gap-8 border-b border-border pb-12 last:border-0 lg:grid-cols-[auto_1fr_auto] lg:items-start"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-muted-foreground/40">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex size-12 items-center justify-center rounded-lg bg-monsoon-teal/10">
                      <service.icon className="size-6 text-monsoon-teal" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-base text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground"
                        >
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-1.5 text-sm font-medium text-monsoon-teal whitespace-nowrap"
                  >
                    Learn more
                    <IconArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
