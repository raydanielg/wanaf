"use client"

import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { useLanguage } from "@/components/language-provider"
import type { TranslationKey } from "@/lib/translations"

const useCases: { categoryKey: TranslationKey; items: string[] }[] = [
  { categoryKey: "ai_uc_cat_1", items: ["Demand", "Revenue", "Inventory", "Maintenance"] },
  { categoryKey: "ai_uc_cat_2", items: ["Documents", "Claims", "Approvals", "Data capture"] },
  { categoryKey: "ai_uc_cat_3", items: ["Fraud", "Anomalies", "Defects", "Security risks"] },
  { categoryKey: "ai_uc_cat_4", items: ["Contracts", "Invoices", "Policies", "Customer conversations"] },
]

export function AIUseCases() {
  const { t } = useLanguage()
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
              {t("ai_uc_label")}
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {t("ai_uc_title")}
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((uc, idx) => (
            <RevealOnScroll key={uc.categoryKey} delay={idx * 80}>
              <div className="group flex h-full flex-col gap-4 bg-background p-8 transition-colors duration-300 hover:bg-muted/30">
                <h3 className="text-lg font-semibold text-monsoon-teal">
                  {t(uc.categoryKey)}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {uc.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="size-1 rounded-full bg-monsoon-teal/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
