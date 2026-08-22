import { RevealOnScroll } from "@/components/reveal-on-scroll"

const models = [
  {
    title: "Fixed-Scope Project",
    description: "Defined deliverables, milestones and a fixed price.",
  },
  {
    title: "AI Pilot",
    description: "A contained proof of value with an agreed success measure.",
  },
  {
    title: "Dedicated Team",
    description: "A named engineering or data team retained monthly.",
  },
  {
    title: "Managed Service",
    description: "Ongoing operation, model monitoring and support against SLAs.",
  },
  {
    title: "Advisory",
    description: "Architecture, AI readiness and security assessments.",
  },
]

export function Engagement() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
              Engagement
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Engagement models
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model, idx) => (
            <RevealOnScroll key={model.title} delay={idx * 80}>
              <div
                className="flex h-full flex-col gap-3 rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-monsoon-teal/30 hover:shadow-md"
              >
                <h3 className="font-semibold">{model.title}</h3>
                <p className="text-sm text-muted-foreground">{model.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
