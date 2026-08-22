import Link from "next/link"
import { IconMenu2, IconArrowRight } from "@tabler/icons-react"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Markets", href: "/markets" },
  { label: "Insights", href: "/insights" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-monsoon-teal transition-opacity hover:opacity-80">
          <Logo className="size-7" />
          <span className="text-base font-semibold tracking-tight text-foreground">
            WANAF
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-monsoon-teal transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Contact Us
          </Link>
          <Button size="sm" nativeButton={false} className="transition-transform duration-300 hover:scale-105" render={<Link href="/contact" />}>
            Request a Consultation
            <IconArrowRight data-icon="inline-end" className="size-3.5" />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="icon" />
              }
            >
              <IconMenu2 className="size-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {navLinks.map((link) => (
                <DropdownMenuItem
                  key={link.href}
                  render={<Link href={link.href} />}
                >
                  {link.label}
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem render={<Link href="/contact" />}>
                Contact Us
              </DropdownMenuItem>
              <DropdownMenuItem render={<Link href="/contact" />}>
                Request a Consultation
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
