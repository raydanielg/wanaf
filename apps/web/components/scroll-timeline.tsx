"use client"

import { useEffect, useRef, useState } from "react"

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

export function ScrollTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const total = rect.height + windowHeight
      const passed = windowHeight - rect.top
      const raw = passed / total

      setProgress(Math.min(1, Math.max(0, raw)))
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const activeIndex = Math.min(
    steps.length - 1,
    Math.floor(progress * steps.length)
  )

  return (
    <div ref={containerRef} className="relative">
      {/* Desktop: horizontal timeline */}
      <div className="hidden lg:block">
        <div className="relative mb-16 h-px w-full bg-border">
          <div
            className="absolute inset-y-0 left-0 bg-monsoon-teal transition-[width] duration-150 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div className="grid grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const isActive = idx <= activeIndex
            const isCurrent = idx === activeIndex
            return (
              <div key={step.number} className="relative flex flex-col gap-4">
                <div
                  className="absolute -top-[4.5rem] left-0 flex size-9 items-center justify-center rounded-full border transition-all duration-300"
                  style={{
                    borderColor: isActive ? "var(--monsoon-teal)" : "var(--border)",
                    backgroundColor: isActive ? "var(--monsoon-teal)" : "var(--background)",
                    transform: isCurrent ? "scale(1.15)" : "scale(1)",
                    boxShadow: isCurrent
                      ? "0 0 0 6px color-mix(in oklab, var(--monsoon-teal) 15%, transparent)"
                      : "none",
                  }}
                >
                  <span
                    className="text-xs font-semibold transition-colors duration-300"
                    style={{ color: isActive ? "var(--dhow-ink)" : "var(--muted-foreground)" }}
                  >
                    {idx + 1}
                  </span>
                </div>

                <div
                  className="flex flex-col gap-2 transition-all duration-500"
                  style={{
                    opacity: isActive ? 1 : 0.4,
                    transform: isActive ? "translateY(0)" : "translateY(8px)",
                  }}
                >
                  <span className="text-2xl font-semibold text-monsoon-teal">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile/Tablet: vertical timeline */}
      <div className="flex flex-col gap-0 lg:hidden">
        <div className="relative">
          <div
            className="absolute left-[17px] top-0 w-px bg-border"
            style={{ height: "100%" }}
          />
          <div
            className="absolute left-[17px] top-0 w-px bg-monsoon-teal transition-[height] duration-150 ease-out"
            style={{ height: `${progress * 100}%` }}
          />

          {steps.map((step, idx) => {
            const isActive = idx <= activeIndex
            const isCurrent = idx === activeIndex
            return (
              <div key={step.number} className="relative flex gap-6 pb-10 last:pb-0">
                <div
                  className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
                  style={{
                    borderColor: isActive ? "var(--monsoon-teal)" : "var(--border)",
                    backgroundColor: isActive ? "var(--monsoon-teal)" : "var(--background)",
                    transform: isCurrent ? "scale(1.15)" : "scale(1)",
                    boxShadow: isCurrent
                      ? "0 0 0 6px color-mix(in oklab, var(--monsoon-teal) 15%, transparent)"
                      : "none",
                  }}
                >
                  <span
                    className="text-xs font-semibold transition-colors duration-300"
                    style={{ color: isActive ? "var(--dhow-ink)" : "var(--muted-foreground)" }}
                  >
                    {idx + 1}
                  </span>
                </div>

                <div
                  className="flex flex-1 flex-col gap-1.5 pt-1 transition-all duration-500"
                  style={{
                    opacity: isActive ? 1 : 0.4,
                    transform: isActive ? "translateX(0)" : "translateX(8px)",
                  }}
                >
                  <span className="text-xl font-semibold text-monsoon-teal">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
