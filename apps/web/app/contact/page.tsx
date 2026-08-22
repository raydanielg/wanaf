import type { Metadata } from "next"
import Link from "next/link"
import {
  IconMapPin,
  IconMail,
  IconPhone,
  IconArrowRight,
  IconShieldCheck,
  IconClock,
  IconMessage2,
} from "@tabler/icons-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact — WANAF Technologies",
  description:
    "Tell us the problem. We'll tell you what it will take, what it should cost, and whether AI is the right answer.",
}


const trustBadges = [
  { icon: IconShieldCheck, text: "Your data stays private. We sign NDAs before the first call." },
  { icon: IconClock, text: "We respond within one business day, usually faster." },
  { icon: IconMessage2, text: "No sales scripts. You'll talk to an engineer or architect." },
]

export default function ContactPage() {
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
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
                Contact
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-sandstone text-balance sm:text-5xl lg:text-6xl">
                Tell us the <span className="text-monsoon-teal">problem</span>.
              </h1>
              <p className="mt-6 text-lg text-sandstone/60 text-pretty">
                Send us the requirement, or the symptom. We will tell you what we
                think it will take, what it should cost, whether artificial
                intelligence is the right answer for it, and whether we are the
                right people to build it.
              </p>
            </div>
          </div>
        </section>

        {/* Trust badges */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 py-6 sm:grid-cols-3">
              {trustBadges.map((badge, idx) => (
                <RevealOnScroll key={badge.text} delay={idx * 80}>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-monsoon-teal/10">
                      <badge.icon className="size-5 text-monsoon-teal" />
                    </div>
                    <p className="text-sm text-muted-foreground text-pretty">{badge.text}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="mb-12">
                <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                  Start the conversation
                </h2>
                <p className="mt-3 text-base text-muted-foreground text-pretty">
                  Fill in what you can. The more context you give us, the more useful our first response will be.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <ContactForm />
            </RevealOnScroll>
          </div>
        </section>

        {/* Contact info */}
        <section className="relative overflow-hidden bg-dhow-ink py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div
              className="absolute left-1/2 top-0 h-48 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-monsoon-teal/[0.05] blur-3xl"
              style={{ animation: "glow-pulse 6s ease-in-out infinite" }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="mb-12 text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-sandstone text-balance sm:text-3xl">
                  Or reach us directly
                </h2>
                <p className="mt-3 text-base text-sandstone/50 text-pretty">
                  Prefer email or phone? We're here.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { icon: IconMapPin, label: "Head Office", value: "WANAF Technologies L.L.C", sub: "RSP 2 – F01, Office F01-01A, Nad Al Hamar, Dubai, UAE", color: "text-monsoon-teal" },
                { icon: IconMail, label: "Email", value: "info@wanaf.tech", sub: "We reply within 1 business day", color: "text-brass", href: "mailto:info@wanaf.tech" },
                { icon: IconPhone, label: "Telephone", value: "+971 50 216 9323", sub: "Sun–Thu, 9am–6pm GST", color: "text-monsoon-teal", href: "tel:+971502169323" },
              ].map((item, idx) => (
                <RevealOnScroll key={item.label} delay={idx * 100}>
                  <div className="group flex h-full flex-col gap-4 rounded-xl border border-sandstone/8 bg-sandstone/[0.02] p-8 transition-all duration-300 hover:border-monsoon-teal/25 hover:bg-sandstone/[0.04]">
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-lg bg-monsoon-teal/10 transition-transform duration-300 group-hover:scale-110">
                        <item.icon className={`size-5 ${item.color}`} />
                      </div>
                      <span className="text-sm font-medium uppercase tracking-wider text-sandstone/70">
                        {item.label}
                      </span>
                    </div>
                    {item.href ? (
                      <Link href={item.href} className="text-lg font-medium text-sandstone transition-colors hover:text-monsoon-teal">
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-lg font-medium text-sandstone">{item.value}</p>
                    )}
                    <p className="mt-auto text-sm text-sandstone/40">{item.sub}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={300}>
              <div className="mt-12 flex flex-col items-center gap-4 rounded-xl border border-sandstone/8 bg-sandstone/[0.02] p-8 text-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-brass/10">
                  <IconMapPin className="size-6 text-brass" />
                </div>
                <p className="text-sm text-sandstone/60 text-pretty">
                  <span className="font-medium text-sandstone">East Africa Delivery Centre</span>
                  <br />
                  Tanzania — serving Kenya, Uganda, Rwanda, Zambia, Malawi, Mozambique & beyond
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
