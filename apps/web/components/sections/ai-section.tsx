import Link from "next/link"
import {
  IconCompass,
  IconMessage2,
  IconChartLine,
  IconEye,
  IconDatabase,
  IconRobot,
  IconGavel,
  IconArrowRight,
} from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"

const aiCapabilities = [
  { icon: IconCompass, title: "AI Strategy", description: "Opportunity assessment and use-case prioritisation." },
  { icon: IconMessage2, title: "Generative AI", description: "Assistants grounded in your documents and databases." },
  { icon: IconChartLine, title: "Machine Learning", description: "Forecasting, scoring and predictive models." },
  { icon: IconEye, title: "Computer Vision", description: "Image, video and sensor analysis at scale." },
  { icon: IconDatabase, title: "Data Engineering", description: "Warehouses, pipelines and governed data platforms." },
  { icon: IconRobot, title: "Intelligent Automation", description: "Workflow automation with AI decisioning." },
  { icon: IconGavel, title: "AI Governance", description: "Policy, bias testing, audit trails and compliance." },
]

export function AISection() {
  return (
    <section className="bg-dhow-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
            Core Practice
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-sandstone text-balance sm:text-4xl lg:text-5xl">
            AI that moves from strategy to production.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiCapabilities.map((cap) => (
            <div
              key={cap.title}
              className="flex flex-col gap-3 rounded-xl border border-sandstone/8 bg-sandstone/[0.02] p-6 transition-colors hover:border-monsoon-teal/30 hover:bg-sandstone/[0.04]"
            >
              <cap.icon className="size-6 text-monsoon-teal" />
              <h3 className="font-semibold text-sandstone">{cap.title}</h3>
              <p className="text-sm text-sandstone/50">{cap.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl text-base text-sandstone/50 text-pretty">
            We don&apos;t build AI for demonstration. We build systems designed
            to operate inside real organisations.
          </p>
          <Button size="lg" render={<Link href="/services/artificial-intelligence" />}>
            Explore AI Solutions
            <IconArrowRight data-icon="inline-end" className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
