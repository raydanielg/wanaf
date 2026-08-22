"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { IconSun, IconMoon } from "@tabler/icons-react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex size-9 items-center justify-center rounded-lg border border-border" aria-hidden="true" />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative flex size-9 items-center justify-center rounded-lg border border-border transition-all duration-300 hover:border-monsoon-teal/40 hover:bg-monsoon-teal/5"
    >
      <IconSun
        className={`absolute size-5 text-brass transition-all duration-300 ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <IconMoon
        className={`absolute size-5 text-monsoon-teal transition-all duration-300 ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  )
}
