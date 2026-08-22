const capabilities = [
  "AI & Data",
  "Enterprise Software",
  "Cloud Infrastructure",
  "Cybersecurity",
  "Managed IT",
]

export function TrustStrip() {
  return (
    <section className="border-b border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 py-8 lg:flex-row lg:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="text-sm font-medium text-muted-foreground"
              >
                {cap}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <span className="size-1.5 rounded-full bg-monsoon-teal" />
            Dubai · GCC · Africa
          </div>
        </div>
      </div>
    </section>
  )
}
