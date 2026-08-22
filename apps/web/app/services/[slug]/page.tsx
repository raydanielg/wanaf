import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/sections/page-hero"

const serviceData: Record<
  string,
  {
    title: string
    label: string
    description: string
    capabilities: { title: string; description: string }[]
  }
> = {
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    label: "Core Practice",
    description:
      "Our AI practice runs from strategy through to production support. We are platform-neutral and work on public cloud, private cloud or on-premise infrastructure where data residency requires it.",
    capabilities: [
      {
        title: "AI strategy & readiness",
        description:
          "Opportunity assessment, data readiness review, build-vs-buy analysis, business case and roadmap.",
      },
      {
        title: "Generative AI & language solutions",
        description:
          "Enterprise assistants grounded in your documents, multilingual deployment, document understanding, knowledge search, call-centre analytics.",
      },
      {
        title: "Machine learning & predictive analytics",
        description:
          "Demand forecasting, credit scoring, fraud detection, churn prediction, predictive maintenance, route optimisation.",
      },
      {
        title: "Computer vision & sensing",
        description:
          "Quality inspection, safety monitoring, vehicle and plate recognition, satellite and drone imagery, crop-health estimation.",
      },
      {
        title: "Data engineering & BI",
        description:
          "Warehouses, lakehouses, integration pipelines, master data management, executive dashboards, real-time reporting.",
      },
      {
        title: "Intelligent automation",
        description:
          "Workflow automation, RPA with AI decisioning, automated data capture, integration into ERP, CRM and core banking.",
      },
      {
        title: "AI governance, security & compliance",
        description:
          "AI policy, model documentation, bias testing, audit trails, data protection alignment, ISO 42001 readiness, MLOps.",
      },
    ],
  },
  "data-engineering": {
    title: "Data & Analytics",
    label: "Core Practice",
    description:
      "The foundation without which nothing above works reliably. We build governed data platforms that turn raw data into operational insight.",
    capabilities: [
      {
        title: "Data warehouses & lakehouses",
        description: "Architecture, implementation and optimisation of enterprise data platforms.",
      },
      {
        title: "Integration pipelines",
        description: "ETL/ELT pipelines connecting source systems to your data platform.",
      },
      {
        title: "Master data management",
        description: "Cleaning, deduplication and governance frameworks for trusted data.",
      },
      {
        title: "Executive dashboards",
        description: "Self-service reporting and visualisation for decision-makers.",
      },
      {
        title: "Real-time operational reporting",
        description: "Live dashboards and alerting for operational teams.",
      },
      {
        title: "Spreadsheet-to-platform migration",
        description: "Moving from spreadsheet-based reporting to governed, auditable data platforms.",
      },
    ],
  },
  "software-engineering": {
    title: "Software Engineering",
    label: "Supporting Practice",
    description:
      "Custom systems built around how your organisation actually works. Web, mobile and enterprise applications, integrated end-to-end.",
    capabilities: [
      {
        title: "Web & mobile development",
        description: "Responsive web applications and native mobile apps for iOS and Android.",
      },
      {
        title: "System & API integration",
        description: "Connecting platforms that were never designed to talk to each other.",
      },
      {
        title: "Legacy modernisation",
        description: "Replacing spreadsheet-based and legacy systems with modern, maintainable software.",
      },
      {
        title: "UI/UX design & prototyping",
        description: "User research, design systems, prototyping and usability testing.",
      },
      {
        title: "QA & test automation",
        description: "Automated test suites, CI/CD integration and regression testing.",
      },
      {
        title: "Performance testing",
        description: "Load, stress and scalability testing for production readiness.",
      },
    ],
  },
  "cloud-infrastructure": {
    title: "Cloud & Infrastructure",
    label: "Supporting Practice",
    description:
      "Environments that stay up, scale predictably and cost what they should. Cloud, hybrid and on-premise deployment.",
    capabilities: [
      {
        title: "Cloud migration",
        description: "Assessment and migration to AWS, Microsoft Azure or Google Cloud.",
      },
      {
        title: "Solution architecture & DevOps",
        description: "Containerisation, CI/CD pipelines and infrastructure as code.",
      },
      {
        title: "Private & on-premise deployment",
        description: "Where data residency applies, we deploy and manage on-premise.",
      },
      {
        title: "Network & Wi-Fi deployment",
        description: "Structured cabling, network design and wireless coverage.",
      },
      {
        title: "Backup & disaster recovery",
        description: "Business continuity planning, backup strategy and recovery testing.",
      },
      {
        title: "Managed hosting",
        description: "Ongoing hosting, patching and infrastructure management.",
      },
    ],
  },
  cybersecurity: {
    title: "Cybersecurity",
    label: "Supporting Practice",
    description:
      "Protection sized to the risk, with evidence you can show a regulator or a board.",
    capabilities: [
      {
        title: "Security assessments",
        description: "Vulnerability scanning, penetration testing and risk assessment.",
      },
      {
        title: "Identity & access management",
        description: "IAM implementation, MFA, endpoint and email security.",
      },
      {
        title: "Monitoring & incident response",
        description: "Security monitoring, incident handling and recovery planning.",
      },
      {
        title: "Policy development",
        description: "Security policies, procedures and staff awareness training.",
      },
      {
        title: "Compliance readiness",
        description: "ISO 27001 and applicable national regulatory requirements.",
      },
    ],
  },
  "enterprise-systems": {
    title: "Enterprise Technology",
    label: "Supporting Practice",
    description:
      "Core business platforms, and the day-to-day support that keeps them running.",
    capabilities: [
      {
        title: "ERP & CRM",
        description: "Selection, implementation, customisation and support.",
      },
      {
        title: "Document & records management",
        description: "Workflow, records management and compliance archiving.",
      },
      {
        title: "Payments & telecom",
        description: "Payment gateway, mobile money and telecom integration.",
      },
      {
        title: "E-commerce",
        description: "Online channel integration with POS and inventory systems.",
      },
      {
        title: "Service desk",
        description: "Device and licence management under agreed service levels.",
      },
    ],
  },
  "managed-it": {
    title: "Managed IT",
    label: "Supporting Practice",
    description:
      "The day-to-day support that keeps your technology running. Service desk, infrastructure management and staff augmentation.",
    capabilities: [
      {
        title: "Service desk",
        description: "Tiered support under agreed service levels.",
      },
      {
        title: "Device & licence management",
        description: "Asset tracking, software licensing and compliance.",
      },
      {
        title: "Infrastructure monitoring",
        description: "Proactive monitoring of servers, networks and applications.",
      },
      {
        title: "Procurement",
        description: "Hardware, software and licence procurement at competitive rates.",
      },
      {
        title: "IT staff augmentation",
        description: "Qualified engineers placed within your team on a flexible basis.",
      },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = serviceData[slug]
  if (!service) return { title: "Service — WANAF Technologies" }
  return {
    title: `${service.title} — WANAF Technologies`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = serviceData[slug]
  if (!service) notFound()

  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          label={service.label}
          title={service.title}
          subtitle={service.description}
        />

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={cap.title}
                  className="flex flex-col gap-3 rounded-xl border border-border p-6"
                >
                  <span className="text-sm font-medium text-monsoon-teal">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-between">
              <Link
                href="/services"
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <IconArrowLeft className="size-4" />
                All services
              </Link>
              <Button nativeButton={false} render={<Link href="/contact" />}>
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
