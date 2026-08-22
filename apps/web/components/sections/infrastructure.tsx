export function Infrastructure() {
  return (
    <section className="bg-dhow-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
            Foundation
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-sandstone text-balance sm:text-4xl lg:text-5xl">
            AI is only as strong as the infrastructure beneath it.
          </h2>
        </div>

        <div className="mx-auto max-w-2xl">
          {/* Diagram */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center rounded-lg border border-monsoon-teal/30 bg-monsoon-teal/10 px-8 py-4">
              <span className="text-lg font-semibold text-monsoon-teal">AI</span>
            </div>

            <div className="h-8 w-px bg-sandstone/15" />

            <div className="grid w-full grid-cols-3 gap-4">
              <div className="flex items-center justify-center rounded-lg border border-sandstone/10 bg-sandstone/[0.03] px-4 py-3 text-center">
                <span className="text-sm font-medium text-sandstone/80">Data</span>
              </div>
              <div className="flex items-center justify-center rounded-lg border border-sandstone/10 bg-sandstone/[0.03] px-4 py-3 text-center">
                <span className="text-sm font-medium text-sandstone/80">Software</span>
              </div>
              <div className="flex items-center justify-center rounded-lg border border-sandstone/10 bg-sandstone/[0.03] px-4 py-3 text-center">
                <span className="text-sm font-medium text-sandstone/80">Security</span>
              </div>
            </div>

            <div className="h-8 w-px bg-sandstone/15" />

            <div className="flex items-center justify-center rounded-lg border border-brass/30 bg-brass/10 px-8 py-4">
              <span className="text-sm font-semibold text-brass">
                Cloud &amp; Infrastructure
              </span>
            </div>
          </div>

          <p className="mt-12 text-center text-base text-sandstone/50 text-pretty">
            From cloud architecture and data engineering to cybersecurity and
            enterprise applications, WANAF delivers the technology foundation
            required to run AI reliably.
          </p>
        </div>
      </div>
    </section>
  )
}
