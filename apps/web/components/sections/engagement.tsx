"use client"

import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { useLanguage } from "@/components/language-provider"
import type { TranslationKey } from "@/lib/translations"

const models: { titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { titleKey: "eng_m1_title", descKey: "eng_m1_desc" },
  { titleKey: "eng_m2_title", descKey: "eng_m2_desc" },
  { titleKey: "eng_m3_title", descKey: "eng_m3_desc" },
  { titleKey: "eng_m4_title", descKey: "eng_m4_desc" },
  { titleKey: "eng_m5_title", descKey: "eng_m5_desc" },
]

export function Engagement() {
  const { t } = useLanguage()
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
              {t("eng_label")}
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {t("eng_title")}
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model, idx) => (
            <RevealOnScroll key={model.titleKey} delay={idx * 80}>
              <div
                className="flex h-full flex-col gap-3 rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-monsoon-teal/30 hover:shadow-md"
              >
                <h3 className="font-semibold">{t(model.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(model.descKey)}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
