import Link from "next/link"
import { IconArrowRight } from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-monsoon-teal/[0.04] via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11,44,51,1) 1px, transparent 1px), linear-gradient(90deg, rgba(11,44,51,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-8 animate-[fade-in_0.8s_ease-out]">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal animate-[fade-in_0.6s_ease-out]">
              Dubai · Gulf &amp; Africa
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl animate-[fade-in_0.8s_ease-out_0.1s_both]">
              Artificial Intelligence, engineered for the{" "}
              <span className="text-monsoon-teal">Gulf and Africa</span>.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground text-pretty animate-[fade-in_0.8s_ease-out_0.2s_both]">
              WANAF Technologies builds AI, data and enterprise technology
              systems that solve real operational problems across the Gulf and
              Africa.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row animate-[fade-in_0.8s_ease-out_0.3s_both]">
            <Button
              size="lg"
              variant="default"
              render={<Link href="/services" />}
            >
              Explore Our Services
              <IconArrowRight data-icon="inline-end" className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="/contact" />}
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
