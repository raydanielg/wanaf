"use client"

import { useEffect, useState } from "react"

export function PageSkeleton() {
  return (
    <div className="flex min-h-svh flex-col">
      {/* Header skeleton */}
      <div className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            <div className="size-7 animate-pulse rounded-md bg-muted/40" />
            <div className="h-4 w-20 animate-pulse rounded bg-muted/40" />
          </div>
          <div className="hidden items-center gap-7 lg:flex">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-3.5 w-16 animate-pulse rounded bg-muted/40" />
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <div className="h-3.5 w-20 animate-pulse rounded bg-muted/40" />
            <div className="h-8 w-40 animate-pulse rounded-md bg-muted/40" />
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero skeleton */}
        <div className="relative overflow-hidden bg-background">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
            <div className="flex flex-col items-center gap-6">
              <div className="h-3 w-32 animate-pulse rounded bg-muted/40" />
              <div className="h-12 w-[28rem] max-w-full animate-pulse rounded-lg bg-muted/30" />
              <div className="h-12 w-72 max-w-full animate-pulse rounded-lg bg-muted/30" />
              <div className="h-5 w-80 max-w-full animate-pulse rounded bg-muted/20" />
              <div className="h-5 w-72 max-w-full animate-pulse rounded bg-muted/20" />
              <div className="mt-4 h-11 w-44 animate-pulse rounded-md bg-muted/40" />
            </div>
          </div>
        </div>

        {/* Trust strip skeleton */}
        <div className="border-y border-border/40 bg-muted/10 py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 sm:px-6 lg:px-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 w-28 animate-pulse rounded bg-muted/30" />
            ))}
          </div>
        </div>

        {/* Who we are skeleton */}
        <div className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-5">
                <div className="h-3 w-24 animate-pulse rounded bg-muted/40" />
                <div className="h-8 w-full animate-pulse rounded-lg bg-muted/30" />
                <div className="h-8 w-3/4 animate-pulse rounded-lg bg-muted/30" />
                <div className="h-4 w-full animate-pulse rounded bg-muted/20" />
                <div className="h-4 w-full animate-pulse rounded bg-muted/20" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-muted/20" />
                <div className="mt-4 h-11 w-40 animate-pulse rounded-md bg-muted/40" />
              </div>
              <div className="flex flex-col gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl border border-border/60 p-6">
                    <div className="size-10 animate-pulse rounded-lg bg-muted/30" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-32 animate-pulse rounded bg-muted/30" />
                      <div className="h-3 w-full animate-pulse rounded bg-muted/20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gulf/Africa skeleton */}
        <div className="bg-dhow-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <div className="mx-auto h-3 w-24 animate-pulse rounded bg-sandstone/10" />
              <div className="mx-auto mt-6 h-9 w-80 animate-pulse rounded-lg bg-sandstone/10" />
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="rounded-xl border border-sandstone/8 p-8">
                  <div className="h-5 w-40 animate-pulse rounded bg-sandstone/10" />
                  <div className="mt-6 space-y-3">
                    {[...Array(6)].map((_, j) => (
                      <div key={j} className="h-4 w-full animate-pulse rounded bg-sandstone/8" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services skeleton */}
        <div className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <div className="h-3 w-24 animate-pulse rounded bg-muted/40" />
              <div className="mt-6 h-9 w-64 animate-pulse rounded-lg bg-muted/30" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="flex flex-col gap-3 rounded-xl border border-border/60 p-6">
                  <div className="size-10 animate-pulse rounded-lg bg-muted/30" />
                  <div className="h-4 w-32 animate-pulse rounded bg-muted/30" />
                  <div className="h-3 w-full animate-pulse rounded bg-muted/20" />
                  <div className="h-3 w-2/3 animate-pulse rounded bg-muted/20" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI section skeleton */}
        <div className="bg-dhow-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <div className="h-3 w-24 animate-pulse rounded bg-sandstone/10" />
              <div className="mt-6 h-9 w-80 animate-pulse rounded-lg bg-sandstone/10" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="flex flex-col gap-3 rounded-xl border border-sandstone/8 p-6">
                  <div className="size-6 animate-pulse rounded bg-sandstone/10" />
                  <div className="h-4 w-28 animate-pulse rounded bg-sandstone/10" />
                  <div className="h-3 w-full animate-pulse rounded bg-sandstone/8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer skeleton */}
      <div className="border-t border-sandstone/8 bg-dhow-ink">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_3fr]">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <div className="size-7 animate-pulse rounded-md bg-sandstone/10" />
                <div className="h-4 w-32 animate-pulse rounded bg-sandstone/10" />
              </div>
              <div className="h-3 w-48 animate-pulse rounded bg-sandstone/8" />
              <div className="space-y-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-3 w-40 animate-pulse rounded bg-sandstone/8" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-3">
                  <div className="h-4 w-20 animate-pulse rounded bg-sandstone/10" />
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="h-3 w-full animate-pulse rounded bg-sandstone/8" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function usePageLoading(minLoadTime = 600) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), minLoadTime)
    return () => clearTimeout(timer)
  }, [minLoadTime])

  return loading
}
