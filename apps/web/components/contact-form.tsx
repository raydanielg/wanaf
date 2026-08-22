"use client"

import { useState, type FormEvent } from "react"
import { IconArrowRight, IconLoader2, IconCheck } from "@tabler/icons-react"
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

type Status = "idle" | "loading" | "success"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status !== "idle") return
    setStatus("loading")
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setStatus("success")
    setTimeout(() => setStatus("idle"), 4000)
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
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
          disabled={status !== "idle"}
          className="group relative h-14 w-full gap-2 overflow-hidden text-base transition-all duration-300 hover:scale-[1.01] sm:w-auto sm:self-start"
        >
          {status === "idle" && (
            <>
              Request a Consultation
              <IconArrowRight data-icon="inline-end" className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
          {status === "loading" && (
            <>
              <IconLoader2 className="size-5 animate-spin" />
              Sending your request...
            </>
          )}
          {status === "success" && (
            <>
              <IconCheck className="size-5" />
              Request sent! We'll be in touch.
            </>
          )}
        </Button>

        {status === "success" && (
          <div
            className="flex items-center gap-3 rounded-xl border border-monsoon-teal/20 bg-monsoon-teal/5 p-4"
            style={{ animation: "fade-in 0.4s ease-out" }}
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-monsoon-teal/15">
              <IconCheck className="size-5 text-monsoon-teal" />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-medium text-foreground">Thank you for reaching out.</p>
              <p className="text-sm text-muted-foreground">
                We&apos;ve received your request and will respond within one business day.
              </p>
            </div>
          </div>
        )}

        <p className="text-sm text-muted-foreground text-pretty">
          Send us the requirement, or the symptom. We will tell you what
          we think it will take, what it should cost, and whether AI is
          the right answer.
        </p>
      </div>
    </form>
  )
}
