const useCases = [
  {
    category: "Predict",
    items: ["Demand", "Revenue", "Inventory", "Maintenance"],
  },
  {
    category: "Automate",
    items: ["Documents", "Claims", "Approvals", "Data capture"],
  },
  {
    category: "Detect",
    items: ["Fraud", "Anomalies", "Defects", "Security risks"],
  },
  {
    category: "Understand",
    items: ["Contracts", "Invoices", "Policies", "Customer conversations"],
  },
]

export function AIUseCases() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
            Applied AI
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            AI for real operational problems
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((uc) => (
            <div key={uc.category} className="flex flex-col gap-4 bg-background p-8">
              <h3 className="text-lg font-semibold text-monsoon-teal">
                {uc.category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {uc.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="size-1 rounded-full bg-monsoon-teal/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
