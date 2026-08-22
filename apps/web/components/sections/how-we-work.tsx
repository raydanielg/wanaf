import { RevealOnScroll } from "@/components/reveal-on-scroll"

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the problem. Map the current process, data and constraints.",
  },
  {
    number: "02",
    title: "Design",
    description: "Define architecture, scope, timeline and cost. Agreed in writing.",
  },
  {
    number: "03",
    title: "Prove",
    description: "Test the idea against a measurable outcome. If it doesn't clear the bar, we say so.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop and deploy working software in short delivery cycles.",
  },
  {
    number: "05",
    title: "Run",
    description: "Support, monitor and improve. Handover, documentation and training.",
  },
]

export function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
              Method
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              How we work
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid gap-6 lg:grid-cols-5">
          {steps.map((step, idx) => (
            <RevealOnScroll key={step.number} delay={idx * 100}>
              <div className="group flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-semibold text-monsoon-teal transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </span>
                  {idx < steps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-border lg:block" />
                  )}
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
