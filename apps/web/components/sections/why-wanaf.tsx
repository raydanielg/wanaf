"use client"

import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { useLanguage } from "@/components/language-provider"
import type { TranslationKey } from "@/lib/translations"

const reasons: { titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { titleKey: "why_r1_title", descKey: "why_r1_desc" },
  { titleKey: "why_r2_title", descKey: "why_r2_desc" },
  { titleKey: "why_r3_title", descKey: "why_r3_desc" },
  { titleKey: "why_r4_title", descKey: "why_r4_desc" },
  { titleKey: "why_r5_title", descKey: "why_r5_desc" },
  { titleKey: "why_r6_title", descKey: "why_r6_desc" },
]

export function WhyWanaf() {
  const { t } = useLanguage()
  return (
    <section className="bg-dhow-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
              {t("why_label")}
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-sandstone text-balance sm:text-4xl lg:text-5xl">
              {t("why_title")}
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid gap-px overflow-hidden rounded-xl border border-sandstone/8 bg-sandstone/8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, idx) => (
            <RevealOnScroll key={reason.titleKey} delay={idx * 70}>
              <div
                className="flex h-full flex-col gap-3 bg-dhow-ink p-8 transition-colors duration-300 hover:bg-sandstone/[0.03]"
              >
                <h3 className="text-lg font-semibold text-sandstone">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-sm text-sandstone/50">{t(reason.descKey)}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
