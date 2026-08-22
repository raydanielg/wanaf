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
import { Button } from "@workspace/ui/components/button"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const services = [
  {
    number: "01",
    icon: IconBrain,
    title: "Artificial Intelligence",
    description:
      "AI strategy, GenAI, machine learning, computer vision and AI governance.",
  },
  {
    number: "02",
    icon: IconDatabase,
    title: "Data & Analytics",
    description:
      "Data platforms, warehouses, pipelines, BI and operational analytics.",
  },
  {
    number: "03",
    icon: IconCode,
    title: "Software Engineering",
    description:
      "Web, mobile, enterprise applications and system integrations.",
  },
  {
    number: "04",
    icon: IconCloud,
    title: "Cloud & Infrastructure",
    description:
      "Cloud architecture, DevOps, private/hybrid infrastructure and managed hosting.",
  },
  {
    number: "05",
    icon: IconShieldCheck,
    title: "Cybersecurity",
    description:
      "Security assessments, IAM, monitoring, incident response and compliance.",
  },
  {
    number: "06",
    icon: IconBuildingCog,
    title: "Enterprise Technology",
    description:
      "ERP, CRM, workflow, document management, payments and telecom integrations.",
  },
  {
    number: "07",
    icon: IconServer,
    title: "Managed IT",
    description:
      "Service desk, infrastructure management, licensing and technology support.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
              What we build
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Core services
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <RevealOnScroll key={service.number} delay={idx * 60} className="h-full">
              <div
                className="group flex h-full flex-col gap-4 bg-background p-8 transition-all duration-300 hover:bg-muted/30 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-monsoon-teal/10 transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="size-5 text-monsoon-teal" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground/50">
                    {service.number}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" variant="outline" nativeButton={false} render={<Link href="/services" />}>
            View All Services
            <IconArrowRight data-icon="inline-end" className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
