"use client"

import Link from "next/link"
import {
  IconBrain,
  IconDatabase,
  IconCode,
  IconCloud,
  IconShieldCheck,
  IconBuildingCog,
  IconServer,
  IconArrowRight,
} from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { useLanguage } from "@/components/language-provider"
import type { TranslationKey } from "@/lib/translations"

const services: { number: string; icon: typeof IconBrain; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { number: "01", icon: IconBrain, titleKey: "s1_title", descKey: "s1_desc" },
  { number: "02", icon: IconDatabase, titleKey: "s2_title", descKey: "s2_desc" },
  { number: "03", icon: IconCode, titleKey: "s3_title", descKey: "s3_desc" },
  { number: "04", icon: IconCloud, titleKey: "s4_title", descKey: "s4_desc" },
  { number: "05", icon: IconShieldCheck, titleKey: "s5_title", descKey: "s5_desc" },
  { number: "06", icon: IconBuildingCog, titleKey: "s6_title", descKey: "s6_desc" },
  { number: "07", icon: IconServer, titleKey: "s7_title", descKey: "s7_desc" },
]

export function Services() {
  const { t } = useLanguage()
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
              {t("services_label")}
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {t("services_title")}
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <RevealOnScroll key={service.number} delay={idx * 60} className="h-full">
              <div
                className="group flex h-full flex-col gap-4 bg-background p-8 transition-all duration-300 hover:bg-muted/30 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-monsoon-teal/10 transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="size-5 text-monsoon-teal" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground/50">
                    {service.number}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{t(service.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t(service.descKey)}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" variant="outline" nativeButton={false} render={<Link href="/services" />}>
            {t("services_view_all")}
            <IconArrowRight data-icon="inline-end" className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
