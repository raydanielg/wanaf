import Link from "next/link"
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react"
import { Logo } from "@/components/logo"

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
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-sandstone/8 bg-dhow-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_3fr]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5 text-monsoon-teal">
              <Logo className="size-7" />
              <span className="text-base font-semibold tracking-tight text-sandstone">
                WANAF Technologies
              </span>
            </Link>
            <p className="max-w-xs text-sm text-sandstone/50">
              Artificial intelligence and information technology solutions for
              the Gulf and Africa.
            </p>
            <div className="flex flex-col gap-2 text-sm text-sandstone/50">
              <span className="flex items-center gap-2">
                <IconMapPin className="size-4 text-monsoon-teal" />
                Dubai, United Arab Emirates
              </span>
              <span className="flex items-center gap-2">
                <IconMapPin className="size-4 text-brass" />
                Tanzania, East Africa
              </span>
              <span className="flex items-center gap-2">
                <IconMail className="size-4 text-monsoon-teal" />
                info@wanaf.tech
              </span>
              <span className="flex items-center gap-2">
                <IconPhone className="size-4 text-monsoon-teal" />
                +971 0 000 0000
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold text-sandstone">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-sandstone/50 transition-colors hover:text-sandstone"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-sandstone/8 pt-8 sm:flex-row">
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
