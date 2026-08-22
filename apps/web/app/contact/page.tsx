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
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export const metadata: Metadata = {
  title: "Contact — WANAF Technologies",
  description:
    "Tell us the problem. We'll tell you what it will take, what it should cost, and whether AI is the right answer.",
}

const industries = [
  "Government & Public Sector",
  "Banking & Fintech",
  "Energy, Oil & Gas",
  "Mining",
  "Logistics & Trade",
  "Telecommunications",
  "Retail & Ecommerce",
  "Agriculture",
  "Healthcare",
  "Education",
  "Real Estate & Construction",
  "Other",
]

const services = [
  "Artificial Intelligence",
  "Data & Analytics",
  "Software Engineering",
  "Cloud & Infrastructure",
  "Cybersecurity",
  "Enterprise Systems",
  "Managed IT",
  "Advisory",
  "Not sure yet",
]

const budgets = [
  "Under $10k",
  "$10k – $50k",
  "$50k – $100k",
  "$100k – $250k",
  "$250k – $500k",
  "Over $500k",
  "To be discussed",
]

const timelines = [
  "Immediate (0–3 months)",
  "Short-term (3–6 months)",
  "Medium-term (6–12 months)",
  "Long-term (12+ months)",
  "Exploring",
]

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
              <form className="flex flex-col gap-8">
                {/* About you */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-7 items-center justify-center rounded-full bg-monsoon-teal/10 text-xs font-semibold text-monsoon-teal">
                      1
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      About You
                    </h3>
                    <span className="h-px flex-1 bg-border" />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="e.g. Ahmed Al Mansoori"
                        required
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="company" className="text-sm font-medium">Company / Organisation</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="e.g. Ministry of Digital Economy"
                        required
                        className="h-12 text-base"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-sm font-medium">Work Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="e.g. ahmed@moe.gov.ae"
                        required
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone <span className="text-muted-foreground font-normal">(optional)</span></Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="e.g. +971 50 123 4567"
                        className="h-12 text-base"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="country" className="text-sm font-medium">Country</Label>
                      <Input
                        id="country"
                        name="country"
                        placeholder="e.g. United Arab Emirates"
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="industry" className="text-sm font-medium">Industry</Label>
                      <Select name="industry">
                        <SelectTrigger id="industry" className="h-12 text-base">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((ind) => (
                            <SelectItem key={ind} value={ind}>
                              {ind}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* The challenge */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-7 items-center justify-center rounded-full bg-monsoon-teal/10 text-xs font-semibold text-monsoon-teal">
                      2
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      The Challenge
                    </h3>
                    <span className="h-px flex-1 bg-border" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="service" className="text-sm font-medium">What kind of help do you need?</Label>
                    <Select name="service">
                      <SelectTrigger id="service" className="h-12 text-base">
                        <SelectValue placeholder="e.g. Artificial Intelligence, Software Engineering, Not sure yet..." />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((svc) => (
                          <SelectItem key={svc} value={svc}>
                            {svc}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="challenge" className="text-sm font-medium">Tell us about your challenge</Label>
                    <Textarea
                      id="challenge"
                      name="challenge"
                      placeholder="Describe the problem you're facing, what you've tried so far, and what success would look like. The more detail you share, the more specific our response will be — e.g. 'We process 5,000 permit applications per month manually, each taking 2 weeks. We want to automate intake and classification.'"
                      rows={7}
                      required
                      className="text-base"
                    />
                    <p className="text-xs text-muted-foreground">
                      Tip: Include current process, volume, pain points, and any systems you already use.
                    </p>
                  </div>
                </div>

                {/* Scope */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-7 items-center justify-center rounded-full bg-monsoon-teal/10 text-xs font-semibold text-monsoon-teal">
                      3
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Scope & Timeline
                    </h3>
                    <span className="h-px flex-1 bg-border" />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="budget" className="text-sm font-medium">Budget Range</Label>
                      <Select name="budget">
                        <SelectTrigger id="budget" className="h-12 text-base">
                          <SelectValue placeholder="e.g. $50k – $100k, To be discussed..." />
                        </SelectTrigger>
                        <SelectContent>
                          {budgets.map((b) => (
                            <SelectItem key={b} value={b}>
                              {b}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="timeline" className="text-sm font-medium">Timeline</Label>
                      <Select name="timeline">
                        <SelectTrigger id="timeline" className="h-12 text-base">
                          <SelectValue placeholder="e.g. Immediate (0–3 months), Exploring..." />
                        </SelectTrigger>
                        <SelectContent>
                          {timelines.map((t) => (
                            <SelectItem key={t} value={t}>
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-4 border-t border-border pt-8">
                  <Button
                    type="submit"
                    size="lg"
                    className="h-14 w-full gap-2 text-base transition-transform duration-300 hover:scale-[1.01] sm:w-auto sm:self-start"
                  >
                    Request a Consultation
                    <IconArrowRight data-icon="inline-end" className="size-5" />
                  </Button>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Send us the requirement, or the symptom. We will tell you what
                    we think it will take, what it should cost, and whether AI is
                    the right answer.
                  </p>
                </div>
              </form>
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
                { icon: IconMapPin, label: "Head Office", value: "Dubai, United Arab Emirates", sub: "Gulf Region", color: "text-monsoon-teal" },
                { icon: IconMail, label: "Email", value: "info@wanaf.tech", sub: "We reply within 1 business day", color: "text-brass", href: "mailto:info@wanaf.tech" },
                { icon: IconPhone, label: "Telephone", value: "+971 0 000 0000", sub: "Sun–Thu, 9am–6pm GST", color: "text-monsoon-teal", href: "tel:+9710000000" },
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
