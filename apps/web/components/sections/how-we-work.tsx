"use client"

import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { useLanguage } from "@/components/language-provider"
import type { TranslationKey } from "@/lib/translations"

const steps: { number: string; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { number: "01", titleKey: "hww_s1_title", descKey: "hww_s1_desc" },
  { number: "02", titleKey: "hww_s2_title", descKey: "hww_s2_desc" },
  { number: "03", titleKey: "hww_s3_title", descKey: "hww_s3_desc" },
  { number: "04", titleKey: "hww_s4_title", descKey: "hww_s4_desc" },
  { number: "05", titleKey: "hww_s5_title", descKey: "hww_s5_desc" },
]

export function HowWeWork() {
  const { t } = useLanguage()
  return (
    <section id="how-we-work" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
              {t("hww_label")}
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {t("hww_title")}
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid gap-6 lg:grid-cols-5">
          {steps.map((step, idx) => (
            <RevealOnScroll key={step.number} delay={idx * 100}>
              <div className="group flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-semibold text-monsoon-teal transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </span>
                  {idx < steps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-border lg:block" />
                  )}
                </div>
                <h3 className="text-lg font-semibold">{t(step.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(step.descKey)}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
