import Link from "next/link"
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandInstagram,
  IconArrowUpRight,
  IconChevronRight,
} from "@tabler/icons-react"
import { Logo } from "@/components/logo"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "AI", href: "/services/artificial-intelligence" },
      { label: "Data", href: "/services/data-engineering" },
      { label: "Software", href: "/services/software-engineering" },
      { label: "Cloud", href: "/services/cloud-infrastructure" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
      { label: "Enterprise Systems", href: "/services/enterprise-systems" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Government", href: "/industries/government" },
      { label: "Banking", href: "/industries/banking" },
      { label: "Energy", href: "/industries/energy" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Telecom", href: "/industries/telecommunications" },
      { label: "Agriculture", href: "/industries/agriculture" },
      { label: "Healthcare", href: "/industries/healthcare" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Markets", href: "/markets" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
]

const socials = [
  { icon: IconBrandLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: IconBrandX, href: "https://x.com", label: "X" },
  { icon: IconBrandInstagram, href: "https://instagram.com", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-sandstone/8 bg-dhow-ink">
      {/* Giant watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden leading-none"
      >
        <span className="block translate-y-[18%] text-center text-[22vw] font-bold tracking-tighter text-sandstone/[0.03] sm:text-[18vw] lg:text-[16vw]">
          WANAF
        </span>
      </div>

      {/* CTA strip */}
      <RevealOnScroll>
        <div className="relative border-b border-sandstone/8">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold tracking-tight text-sandstone text-balance sm:text-3xl">
                Have a problem worth solving?
              </h3>
              <p className="text-sm text-sandstone/50">
                Tell us the challenge. We&apos;ll tell you what it takes.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-monsoon-teal/40 bg-monsoon-teal/10 px-6 py-3 text-sm font-medium text-sandstone transition-all duration-300 hover:bg-monsoon-teal/20 hover:border-monsoon-teal/60"
            >
              Request a Consultation
              <IconArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </RevealOnScroll>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_3fr]">
          {/* Brand */}
          <RevealOnScroll>
            <div className="flex flex-col gap-5">
              <Link href="/" className="flex items-center gap-2.5 text-monsoon-teal transition-opacity hover:opacity-80">
                <Logo className="size-8" />
                <span className="text-lg font-semibold tracking-tight text-sandstone">
                  WANAF Technologies
                </span>
              </Link>
              <p className="max-w-xs text-sm text-sandstone/50 text-pretty">
                Artificial intelligence and information technology solutions for
                the Gulf and Africa.
              </p>
              <div className="flex flex-col gap-2.5 text-sm text-sandstone/50">
                <span className="flex flex-col gap-0.5">
                  <span className="flex items-center gap-2">
                    <IconMapPin className="size-4 shrink-0 text-monsoon-teal" />
                    WANAF Technologies L.L.C
                  </span>
                  <span className="pl-6 text-xs text-sandstone/40">
                    RSP 2 – F01, Office F01-01A<br />Nad Al Hamar, Dubai, UAE
                  </span>
                </span>
                <span className="flex items-center gap-2">
                  <IconMapPin className="size-4 shrink-0 text-brass" />
                  Tanzania, East Africa
                </span>
                <a href="mailto:info@wanaf.tech" className="flex items-center gap-2 transition-colors hover:text-sandstone">
                  <IconMail className="size-4 shrink-0 text-monsoon-teal" />
                  info@wanaf.tech
                </a>
                <a href="tel:+971502169323" className="flex items-center gap-2 transition-colors hover:text-sandstone">
                  <IconPhone className="size-4 shrink-0 text-monsoon-teal" />
                  +971 50 216 9323
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-9 items-center justify-center rounded-full border border-sandstone/10 text-sandstone/60 transition-all duration-300 hover:border-monsoon-teal/40 hover:text-monsoon-teal hover:-translate-y-0.5"
                  >
                    <social.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerSections.map((section, idx) => (
              <RevealOnScroll key={section.title} delay={idx * 80}>
                <div className="flex flex-col gap-3">
                  <h4 className="group relative text-sm font-semibold text-sandstone">
                    {section.title}
                    <span className="absolute -bottom-1 left-0 h-px w-6 bg-monsoon-teal/60 transition-all duration-300 group-hover:w-full" />
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-0.5 text-sm text-sandstone/50 transition-colors duration-200 hover:text-sandstone"
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-monsoon-teal transition-all duration-300 group-hover:w-full" />
                          </span>
                          <IconChevronRight className="size-3.5 shrink-0 text-monsoon-teal opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <div className="relative mt-12 flex flex-col items-center justify-between gap-4 border-t border-sandstone/8 pt-8 sm:flex-row">
          <p className="text-sm text-sandstone/40">
            &copy; {new Date().getFullYear()} WANAF Technologies. All rights
            reserved.
          </p>
          <p className="text-sm text-sandstone/40">
            Dubai · Gulf &amp; Africa
          </p>
        </div>
      </div>
    </footer>
  )
}
