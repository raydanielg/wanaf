"use client"

import Link from "next/link"
import { IconArrowRight } from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import { TextRotator } from "@/components/text-rotator"
import { NetworkBackground } from "@/components/network-background"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-monsoon-teal/[0.03] via-transparent to-transparent" />
        <NetworkBackground />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-8 animate-[fade-in_0.8s_ease-out]">
          <div className="flex flex-col items-center gap-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-monsoon-teal animate-[fade-in_0.6s_ease-out]">
              {t("hero_location")}
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl animate-[fade-in_0.8s_ease-out_0.1s_both]">
              {t("hero_title")}{" "}
              <br className="hidden sm:block" />
              <TextRotator />.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground text-pretty animate-[fade-in_0.8s_ease-out_0.2s_both]">
              {t("hero_subtitle")}
            </p>
          </div>

          <div className="flex items-center justify-center animate-[fade-in_0.8s_ease-out_0.3s_both]">
            <Button
              size="lg"
              variant="default"
              nativeButton={false}
              className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              render={<Link href="/contact" />}
            >
              {t("hero_cta")}
              <IconArrowRight data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
