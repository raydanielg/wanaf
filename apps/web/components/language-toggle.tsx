"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { IconLanguage } from "@tabler/icons-react"

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex size-9 items-center justify-center rounded-lg border border-border" aria-hidden="true" />
    )
  }

  return (
    <button
      onClick={toggleLang}
      aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
      className="group flex size-9 items-center justify-center rounded-lg border border-border transition-all duration-300 hover:border-monsoon-teal/40 hover:bg-monsoon-teal/5"
    >
      <IconLanguage className="size-5 text-muted-foreground transition-colors duration-300 group-hover:text-monsoon-teal" />
    </button>
  )
}
