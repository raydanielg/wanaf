"use client"

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react"
import { translations, type Lang, type TranslationKey } from "@/lib/translations"

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: (key: TranslationKey) => string
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("wanaf-lang") : null
    if (saved === "ar" || saved === "en") {
      setLangState(saved)
    }
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    }
  }, [lang])

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    if (typeof window !== "undefined") {
      localStorage.setItem("wanaf-lang", newLang)
    }
  }, [])

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "ar" : "en")
  }, [lang, setLang])

  const t = useCallback(
    (key: TranslationKey) => {
      return translations[lang][key] ?? translations.en[key] ?? key
    },
    [lang]
  )

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, t, dir: lang === "ar" ? "rtl" : "ltr" }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return ctx
}
