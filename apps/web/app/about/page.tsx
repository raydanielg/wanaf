import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/sections/page-hero"

export const metadata: Metadata = {
  title: "About — WANAF Technologies",
  description:
    "WANAF Technologies is a Dubai-based AI and IT company delivering AI, data platforms, enterprise software, cloud infrastructure and cybersecurity across the Gulf and Africa.",
}

const values = [
  {
    title: "Useful before impressive",
    description:
      "We measure an AI project by the decision it improves or the hours it returns, not by the model behind it.",
  },
  {
    title: "Engineering integrity",
    description:
      "We build what will still hold up in three years, and we say so when a shortcut will not.",
  },
  {
    title: "Responsible by design",
    description:
      "Data protection, human oversight and explainability are built into the scope, not bolted on for the audit.",
  },
  {
    title: "Ownership",
    description:
      "A named engineer is accountable for every system we deliver, through to handover and beyond.",
  },
  {
    title: "Local knowledge",
    description:
      "We work within the regulations, languages, payment systems and realities of each market we serve.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          label="About"
          title={
            <>
              Artificial intelligence, engineered for{" "}
              <span className="text-monsoon-teal">two regions</span>
            </>
          }
          subtitle="WANAF Technologies is a Dubai-based artificial intelligence and information technology company. We build and run the systems organisations depend on — AI and data platforms, enterprise software, cloud infrastructure and the security around them — for clients across the Gulf Cooperation Council states and across Africa."
        />

        {/* Our Story */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
                Our Story
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-balance">
                A Dubai front office. Engineering serving Africa.
              </h2>
              <div className="flex flex-col gap-4 text-base text-muted-foreground text-pretty">
                <p>
                  Gulf governments and corporations are investing heavily in
                  artificial intelligence, sovereign data capability and the
                  digitisation of public services. African markets are building
                  fast on mobile-first infrastructure, with payments, logistics
                  and agriculture leapfrogging straight to digital.
                </p>
                <p>
                  Both need partners who can deliver to international
                  engineering standards while working within local regulation,
                  procurement culture and language. That is the gap WANAF
                  Technologies was established to fill: a Dubai front office for
                  contracting, client relationships and delivery governance,
                  supported by engineering and data teams serving African
                  markets.
                </p>
                <p>
                  One accountable team, working in both directions along the
                  same corridor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-dhow-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
                  Vision
                </span>
                <p className="text-2xl font-medium text-sandstone text-pretty">
                  To be the artificial intelligence and technology partner of
                  choice for organisations operating between the Gulf and
                  Africa.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-brass">
                  Mission
                </span>
                <p className="text-2xl font-medium text-sandstone text-pretty">
                  To put artificial intelligence to work on real operational
                  problems — safely, transparently, and on systems our clients
                  can own, audit and afford to run.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
                Values
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                What we stand for
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex flex-col gap-3 bg-background p-8"
                >
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
