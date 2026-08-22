import type { Metadata } from "next"
import { Geist, Geist_Mono, Roboto } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { cn } from "@workspace/ui/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "WANAF Technologies — AI & IT solutions for the Gulf and Africa",
    template: "%s — WANAF Technologies",
  },
  description:
    "Dubai-based artificial intelligence and information technology company. We build and run AI and data platforms, enterprise software, cloud infrastructure and security for clients across the GCC and Africa.",
}

const roboto = Roboto({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", roboto.variable)}
    >
      <body>
        <ThemeProvider><LanguageProvider>{children}</LanguageProvider></ThemeProvider>
      </body>
    </html>
  )
}
