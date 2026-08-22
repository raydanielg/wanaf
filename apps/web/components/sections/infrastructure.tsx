import {
  IconBrain,
  IconDatabase,
  IconCode,
  IconShieldCheck,
  IconCloud,
} from "@tabler/icons-react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const midLayer = [
  { icon: IconDatabase, label: "Data" },
  { icon: IconCode, label: "Software" },
  { icon: IconShieldCheck, label: "Security" },
]

function FlowLine({ delay = 0 }: { delay?: number }) {
  return (
    <div className="relative h-10 w-px overflow-hidden bg-sandstone/10">
      <span
        className="absolute inset-x-0 top-full h-6 bg-gradient-to-t from-monsoon-teal via-monsoon-teal/60 to-transparent"
        style={{
          animation: "flow-up 2.2s ease-in-out infinite",
          animationDelay: `${delay}ms`,
        }}
      />
    </div>
  )
}

export function Infrastructure() {
  return (
    <section className="relative overflow-hidden bg-dhow-ink py-20 lg:py-28">
      {/* Ambient glow background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-monsoon-teal/[0.06] blur-3xl"
          style={{ animation: "glow-pulse 6s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brass/[0.06] blur-3xl"
          style={{ animation: "glow-pulse 6s ease-in-out infinite", animationDelay: "1.5s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(244,239,228,1) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,228,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
              Foundation
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-sandstone text-balance sm:text-4xl lg:text-5xl">
              AI is only as strong as the infrastructure beneath it.
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="mx-auto max-w-2xl">
            {/* Diagram */}
            <div className="flex flex-col items-center gap-0">
              {/* AI - top layer */}
              <div className="group relative flex items-center gap-3 rounded-xl border border-monsoon-teal/40 bg-monsoon-teal/10 px-10 py-5 shadow-[0_0_40px_-12px_rgba(30,127,118,0.5)] transition-all duration-300 hover:scale-105 hover:bg-monsoon-teal/15">
                <IconBrain className="size-6 text-monsoon-teal" />
                <span className="text-xl font-semibold text-monsoon-teal">AI</span>
              </div>

              <FlowLine delay={0} />

              {/* Mid layer: Data / Software / Security */}
              <div className="grid w-full grid-cols-3 gap-4">
                {midLayer.map((item, idx) => (
                  <div key={item.label} className="flex flex-col items-center gap-3">
                    <div className="flex w-full flex-col items-center gap-2 rounded-xl border border-sandstone/10 bg-sandstone/[0.03] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-monsoon-teal/25 hover:bg-sandstone/[0.06]">
                      <item.icon className="size-5 text-sandstone/70" />
                      <span className="text-sm font-medium text-sandstone/80">
                        {item.label}
                      </span>
                    </div>
                    <FlowLine delay={idx * 250} />
                  </div>
                ))}
              </div>

              {/* Cloud & Infrastructure - base layer */}
              <div className="group relative flex items-center gap-3 rounded-xl border border-brass/40 bg-brass/10 px-10 py-5 shadow-[0_0_40px_-12px_rgba(201,153,46,0.4)] transition-all duration-300 hover:scale-105 hover:bg-brass/15">
                <IconCloud className="size-5 text-brass" />
                <span className="text-sm font-semibold text-brass">
                  Cloud &amp; Infrastructure
                </span>
              </div>
            </div>

            <p className="mt-14 text-center text-base text-sandstone/50 text-pretty">
              From cloud architecture and data engineering to cybersecurity and
              enterprise applications, WANAF delivers the technology foundation
              required to run AI reliably.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
