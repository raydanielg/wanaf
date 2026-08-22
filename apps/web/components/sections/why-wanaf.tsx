const reasons = [
  {
    title: "Two Regions. One Team.",
    description:
      "Dubai governance + African delivery capability. One point of responsibility across both.",
  },
  {
    title: "Production First",
    description:
      "Systems designed for real-world deployment, monitoring and handover from day one.",
  },
  {
    title: "Multilingual",
    description:
      "Solutions built to work in English, Arabic and Swahili — not translated after the fact.",
  },
  {
    title: "Data Residency",
    description:
      "Private, on-premise and in-country deployment where regulation or policy requires it.",
  },
  {
    title: "Vendor Neutral",
    description:
      "Technology selected based on requirements and budget, not the largest margin.",
  },
  {
    title: "Transparent Commercials",
    description:
      "Clear pricing, licensing and infrastructure costs set out before signature.",
  },
]

export function WhyWanaf() {
  return (
    <section className="bg-dhow-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
            Difference
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-sandstone text-balance sm:text-4xl lg:text-5xl">
            Why organisations choose WANAF
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-sandstone/8 bg-sandstone/8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col gap-3 bg-dhow-ink p-8"
            >
              <h3 className="text-lg font-semibold text-sandstone">
                {reason.title}
              </h3>
              <p className="text-sm text-sandstone/50">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
