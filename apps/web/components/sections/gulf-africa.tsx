"use client"

import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { useLanguage } from "@/components/language-provider"

const gulfCountries = [
  "UAE",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
]

const africaCountries = [
  "Tanzania",
  "Kenya",
  "Uganda",
  "Rwanda",
  "Zambia",
  "Malawi",
  "Mozambique",
  "Nigeria",
  "Ghana",
  "Ethiopia",
  "Egypt",
]

export function GulfAfrica() {
  const { t } = useLanguage()
  return (
    <section className="bg-dhow-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
              {t("gulf_label")}
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-sandstone text-balance sm:text-4xl lg:text-5xl">
              {t("gulf_title")}
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
          {/* Gulf */}
          <RevealOnScroll delay={0}>
            <div className="flex flex-col gap-4 rounded-xl border border-sandstone/8 bg-sandstone/[0.03] p-8 transition-all duration-300 hover:border-monsoon-teal/25 hover:bg-sandstone/[0.05]">
              <h3 className="text-lg font-semibold text-monsoon-teal">
                {t("gulf_title_h3")}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {gulfCountries.map((country) => (
                  <li
                    key={country}
                    className="flex items-center gap-2 text-sm text-sandstone/70"
                  >
                    <span className="size-1 rounded-full bg-monsoon-teal" />
                    {country}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* Center connector */}
          <RevealOnScroll delay={150}>
            <div className="flex flex-col items-center justify-center gap-3 py-4 lg:py-12">
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-sandstone/40">
                <span>{t("gulf_connector_gulf")}</span>
                <div className="flex items-center gap-1.5">
                  <span className="h-px w-6 bg-monsoon-teal/40" />
                  <span className="text-monsoon-teal">WANAF</span>
                  <span className="h-px w-6 bg-brass/40" />
                </div>
                <span>{t("gulf_connector_africa")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 animate-pulse rounded-full bg-monsoon-teal" />
                <span className="h-px w-12 bg-gradient-to-r from-monsoon-teal to-brass" />
                <span className="size-2 animate-pulse rounded-full bg-brass" style={{ animationDelay: "0.5s" }} />
              </div>
            </div>
          </RevealOnScroll>

          {/* Africa */}
          <RevealOnScroll delay={300}>
            <div className="flex flex-col gap-4 rounded-xl border border-sandstone/8 bg-sandstone/[0.03] p-8 transition-all duration-300 hover:border-brass/25 hover:bg-sandstone/[0.05]">
              <h3 className="text-lg font-semibold text-brass">{t("gulf_africa_h3")}</h3>
              <ul className="flex flex-col gap-2.5">
                {africaCountries.map((country) => (
                  <li
                    key={country}
                    className="flex items-center gap-2 text-sm text-sandstone/70"
                  >
                    <span className="size-1 rounded-full bg-brass" />
                    {country}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
