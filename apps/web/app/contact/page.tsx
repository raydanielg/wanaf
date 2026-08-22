import type { Metadata } from "next"
import { IconMapPin, IconMail, IconPhone } from "@tabler/icons-react"
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

export default function ContactPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-dhow-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        {/* Form */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <form className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Organisation" required />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" placeholder="+971 ..." />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" name="country" placeholder="UAE, Tanzania, ..." />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select name="industry">
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select industry" />
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

              <div className="flex flex-col gap-2">
                <Label htmlFor="service">Service Required</Label>
                <Select name="service">
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select service" />
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
                <Label htmlFor="challenge">Tell us about your challenge</Label>
                <Textarea
                  id="challenge"
                  name="challenge"
                  placeholder="Describe the problem, the symptom, or what you're trying to achieve."
                  rows={5}
                  required
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select name="budget">
                    <SelectTrigger id="budget">
                      <SelectValue placeholder="Select budget" />
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
                  <Label htmlFor="timeline">Timeline</Label>
                  <Select name="timeline">
                    <SelectTrigger id="timeline">
                      <SelectValue placeholder="Select timeline" />
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

              <div className="flex flex-col gap-4 pt-4">
                <Button type="submit" size="lg" className="w-full sm:w-auto sm:self-start">
                  Request a Consultation
                </Button>
                <p className="text-sm text-muted-foreground text-pretty">
                  Send us the requirement, or the symptom. We will tell you what
                  we think it will take, what it should cost, and whether AI is
                  the right answer.
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* Contact info */}
        <section className="bg-dhow-ink py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-monsoon-teal">
                  <IconMapPin className="size-5" />
                  <span className="text-sm font-medium uppercase tracking-wider">
                    Head Office
                  </span>
                </div>
                <p className="text-sm text-sandstone/60">
                  Dubai, United Arab Emirates
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-monsoon-teal">
                  <IconMail className="size-5" />
                  <span className="text-sm font-medium uppercase tracking-wider">
                    Email
                  </span>
                </div>
                <p className="text-sm text-sandstone/60">info@wanaf.tech</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-monsoon-teal">
                  <IconPhone className="size-5" />
                  <span className="text-sm font-medium uppercase tracking-wider">
                    Telephone
                  </span>
                </div>
                <p className="text-sm text-sandstone/60">+971 0 000 0000</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
