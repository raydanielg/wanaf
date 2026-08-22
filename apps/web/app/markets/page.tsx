import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/sections/page-hero"

export const metadata: Metadata = {
  title: "Markets — WANAF Technologies",
  description:
    "Technology across the Gulf and Africa. GCC: UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman. Africa: Tanzania, Kenya, Uganda, Rwanda, Zambia, Malawi, Mozambique, Nigeria, Ghana, Ethiopia, Egypt.",
}

const gulfCountries = [
  { name: "United Arab Emirates", note: "Head office and primary market" },
  { name: "Kingdom of Saudi Arabia", note: null },
  { name: "Qatar", note: null },
  { name: "Kuwait", note: null },
  { name: "Bahrain", note: null },
  { name: "Oman", note: null },
]

const africaCountries = [
  { name: "Tanzania", note: "East African delivery base" },
  { name: "Kenya", note: null },
  { name: "Uganda", note: null },
  { name: "Rwanda", note: null },
  { name: "Zambia", note: null },
  { name: "Malawi", note: null },
  { name: "Mozambique", note: null },
  { name: "Nigeria", note: null },
  { name: "Ghana", note: null },
  { name: "Ethiopia", note: null },
  { name: "Egypt", note: null },
]

export default function MarketsPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          label="Markets"
          title={
            <>
              Technology across the{" "}
              <span className="text-monsoon-teal">Gulf and Africa</span>
            </>
          }
          subtitle="Delivery is remote-first and supported by travel and local partners. Where a market requires a registered local presence for public-sector procurement, we work through established in-country partners."
        />

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Gulf */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-monsoon-teal" />
                  <h2 className="text-xl font-semibold">
                    Gulf Cooperation Council
                  </h2>
                </div>
                <div className="flex flex-col gap-px overflow-hidden rounded-xl border border-border">
                  {gulfCountries.map((country) => (
                    <div
                      key={country.name}
                      className="flex items-center justify-between bg-background px-6 py-4"
                    >
                      <span className="font-medium">{country.name}</span>
                      {country.note && (
                        <span className="text-xs text-monsoon-teal">
                          {country.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Africa */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-brass" />
                  <h2 className="text-xl font-semibold">Africa</h2>
                </div>
                <div className="flex flex-col gap-px overflow-hidden rounded-xl border border-border">
                  {africaCountries.map((country) => (
                    <div
                      key={country.name}
                      className="flex items-center justify-between bg-background px-6 py-4"
                    >
                      <span className="font-medium">{country.name}</span>
                      {country.note && (
                        <span className="text-xs text-brass">
                          {country.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 rounded-xl border border-border bg-muted/20 p-8 text-center">
              <p className="text-base text-muted-foreground text-pretty">
                Delivery is remote-first, supported by travel and local partners
                where required. Other markets on request.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
