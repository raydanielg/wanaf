"use client"

import Link from "next/link"
import { IconArrowRight } from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { useLanguage } from "@/components/language-provider"

export function WhoWeAre() {
  const { t } = useLanguage()
  return (
    <section id="who-we-are" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal">
              {t("who_label")}
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {t("who_title_1")}{" "}
              <span className="text-monsoon-teal">{t("who_title_2")}</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {t("who_description")}
            </p>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="transition-all duration-300 hover:scale-[1.02]"
              render={<Link href="/about" />}
            >
              {t("who_cta")}
              <IconArrowRight data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
