"use client"

import Link from "next/link"
import {
  IconCompass,
  IconMessage2,
  IconChartLine,
  IconEye,
  IconDatabase,
  IconRobot,
  IconGavel,
  IconArrowRight,
} from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { useLanguage } from "@/components/language-provider"
import type { TranslationKey } from "@/lib/translations"

const aiCapabilities: { icon: typeof IconCompass; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: IconCompass, titleKey: "ai_cap_1_title", descKey: "ai_cap_1_desc" },
  { icon: IconMessage2, titleKey: "ai_cap_2_title", descKey: "ai_cap_2_desc" },
  { icon: IconChartLine, titleKey: "ai_cap_3_title", descKey: "ai_cap_3_desc" },
  { icon: IconEye, titleKey: "ai_cap_4_title", descKey: "ai_cap_4_desc" },
  { icon: IconDatabase, titleKey: "ai_cap_5_title", descKey: "ai_cap_5_desc" },
  { icon: IconRobot, titleKey: "ai_cap_6_title", descKey: "ai_cap_6_desc" },
  { icon: IconGavel, titleKey: "ai_cap_7_title", descKey: "ai_cap_7_desc" },
]

export function AISection() {
  const { t } = useLanguage()
  return (
    <section className="bg-dhow-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-16 max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
              {t("ai_label")}
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-sandstone text-balance sm:text-4xl lg:text-5xl">
              {t("ai_title")}
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiCapabilities.map((cap, idx) => (
            <RevealOnScroll key={cap.titleKey} delay={idx * 80}>
              <div className="group flex h-full flex-col gap-3 rounded-xl border border-sandstone/8 bg-sandstone/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-monsoon-teal/30 hover:bg-sandstone/[0.04] hover:shadow-lg hover:shadow-monsoon-teal/5">
                <cap.icon className="size-6 text-monsoon-teal transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-semibold text-sandstone">{t(cap.titleKey)}</h3>
                <p className="text-sm text-sandstone/50">{t(cap.descKey)}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={200}>
          <div className="mt-12 flex flex-col items-center gap-6 text-center">
            <p className="max-w-2xl text-base text-sandstone/50 text-pretty">
              {t("ai_subtitle")}
            </p>
            <Button size="lg" nativeButton={false} render={<Link href="/services/artificial-intelligence" />}>
              {t("ai_cta")}
              <IconArrowRight data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
