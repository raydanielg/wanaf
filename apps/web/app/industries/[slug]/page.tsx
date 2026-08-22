import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { IconArrowRight, IconArrowLeft, IconCheck } from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { industriesData, industrySlugs } from "@/lib/industries-data"

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const industry = industriesData[slug]
  if (!industry) return { title: "Industry — WANAF Technologies" }
  return {
    title: `${industry.title} — WANAF Technologies`,
    description: industry.description,
  }
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const industry = industriesData[slug]
  if (!industry) notFound()

  const otherIndustries = industrySlugs
    .filter((s) => s !== slug)
    .slice(0, 4)

  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-dhow-ink py-20 lg:py-32">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div
              className="absolute right-0 top-0 h-[32rem] w-[32rem] -translate-y-1/4 translate-x-1/4 rounded-full bg-monsoon-teal/[0.07] blur-3xl"
              style={{ animation: "glow-pulse 6s ease-in-out infinite" }}
            />
            <div
              className="absolute bottom-0 left-0 h-72 w-72 translate-y-1/4 -translate-x-1/4 rounded-full bg-brass/[0.06] blur-3xl"
              style={{ animation: "glow-pulse 6s ease-in-out infinite", animationDelay: "2s" }}
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
            <div className="flex flex-col items-start gap-8">
              <Link
                href="/industries"
                className="flex items-center gap-1.5 text-sm font-medium text-sandstone/50 transition-colors hover:text-sandstone"
              >
                <IconArrowLeft className="size-4" />
                All industries
              </Link>

              <div className="flex flex-col gap-6">
                <div className="flex size-16 items-center justify-center rounded-2xl border border-monsoon-teal/30 bg-monsoon-teal/10 shadow-[0_0_40px_-12px_rgba(30,127,118,0.5)]">
                  <industry.heroIcon className="size-8 text-monsoon-teal" />
                </div>

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
                  {industry.label}
                </span>

                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-sandstone text-balance sm:text-5xl lg:text-6xl">
                  {industry.title}
                </h1>

                <p className="max-w-2xl text-lg font-medium text-monsoon-teal text-pretty">
                  {industry.tagline}
                </p>

                <p className="max-w-2xl text-base text-sandstone/60 text-pretty">
                  {industry.description}
                </p>

                <div className="mt-2 flex flex-wrap gap-3">
                  <Button size="lg" nativeButton={false} className="transition-transform duration-300 hover:scale-105" render={<Link href="/contact" />}>
                    Talk to an Expert
                    <IconArrowRight data-icon="inline-end" className="size-4" />
                  </Button>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-md border border-sandstone/15 px-6 py-2.5 text-sm font-medium text-sandstone transition-all duration-300 hover:border-monsoon-teal/40 hover:bg-monsoon-teal/10"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
              {industry.stats.map((stat, idx) => (
                <RevealOnScroll key={stat.label} delay={idx * 80}>
                  <div className="flex flex-col items-center gap-1 py-8 text-center">
                    <span className="text-3xl font-semibold text-monsoon-teal sm:text-4xl">
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
                      {stat.label}
                    </span>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="mb-16 max-w-2xl">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
                  What We Deliver
                </span>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                  Capabilities for {industry.title.toLowerCase()}
                </h2>
              </div>
            </RevealOnScroll>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industry.capabilities.map((cap, idx) => (
                <RevealOnScroll key={cap.title} delay={idx * 80}>
                  <div className="group flex h-full flex-col gap-4 rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-monsoon-teal/30 hover:shadow-lg hover:shadow-monsoon-teal/5">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-monsoon-teal/10 transition-transform duration-300 group-hover:scale-110">
                      <cap.icon className="size-5 text-monsoon-teal" />
                    </div>
                    <h3 className="text-lg font-semibold">{cap.title}</h3>
                    <p className="text-sm text-muted-foreground">{cap.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-dhow-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="mb-16 max-w-2xl">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
                  Real World
                </span>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-sandstone text-balance sm:text-4xl lg:text-5xl">
                  How it works in practice
                </h2>
              </div>
            </RevealOnScroll>

            <div className="flex flex-col gap-6">
              {industry.useCases.map((uc, idx) => (
                <RevealOnScroll key={uc.title} delay={idx * 120}>
                  <div className="group grid gap-6 rounded-xl border border-sandstone/8 bg-sandstone/[0.03] p-8 transition-all duration-300 hover:border-monsoon-teal/25 hover:bg-sandstone/[0.05] lg:grid-cols-[auto_1fr_1fr_1fr] lg:items-center">
                    <div className="flex items-center gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-monsoon-teal/15 text-lg font-semibold text-monsoon-teal">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold text-sandstone">{uc.title}</h3>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-medium uppercase tracking-wider text-sandstone/40">Problem</span>
                      <p className="text-sm text-sandstone/60">{uc.problem}</p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-medium uppercase tracking-wider text-monsoon-teal">Solution</span>
                      <p className="text-sm text-sandstone/60">{uc.solution}</p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-medium uppercase tracking-wider text-brass">Impact</span>
                      <p className="text-sm font-medium text-sandstone/80">{uc.impact}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="mb-12 max-w-2xl">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
                  How We Help
                </span>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  Services powering this industry
                </h2>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="flex flex-wrap gap-3">
                {industry.services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-monsoon-teal/30 hover:text-foreground hover:-translate-y-0.5"
                  >
                    <IconCheck className="size-4 text-monsoon-teal" />
                    {service}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Other Industries */}
        <section className="border-t border-border bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="flex flex-col gap-8">
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Other industries
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {otherIndustries.map((otherSlug) => {
                    const other = industriesData[otherSlug]
                    if (!other) return null
                    return (
                      <Link
                        key={otherSlug}
                        href={`/industries/${otherSlug}`}
                        className="group flex flex-col gap-3 rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-monsoon-teal/30 hover:shadow-md"
                      >
                        <div className="flex size-10 items-center justify-center rounded-lg bg-monsoon-teal/10 transition-transform duration-300 group-hover:scale-110">
                          <other.heroIcon className="size-5 text-monsoon-teal" />
                        </div>
                        <h4 className="text-sm font-semibold">{other.title}</h4>
                        <span className="mt-auto flex items-center gap-1.5 text-xs font-medium text-monsoon-teal">
                          Learn more
                          <IconArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-dhow-ink py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="flex flex-col items-center gap-6 text-center">
                <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-sandstone text-balance sm:text-4xl">
                  Have a challenge in {industry.title.toLowerCase()}?
                </h2>
                <p className="max-w-xl text-base text-sandstone/50 text-pretty">
                  Tell us the problem. We&apos;ll tell you what it takes to solve it.
                </p>
                <Button size="lg" nativeButton={false} className="transition-transform duration-300 hover:scale-105" render={<Link href="/contact" />}>
                  Request a Consultation
                  <IconArrowRight data-icon="inline-end" className="size-4" />
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
