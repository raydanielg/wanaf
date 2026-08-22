import { cn } from "@workspace/ui/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-8", className)}
      aria-label="WANAF logo"
    >
      {/* Four chevron strokes forming W — two joined chevrons for two shores */}
      <path
        d="M6 14 L12 34 L18 14"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 14 L24 34 L30 14"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Final stroke breaks cap line and rises into a mast */}
      <path
        d="M30 14 L36 34 L42 14"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Rising mast with brass node */}
      <path
        d="M42 14 L42 6"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="42" cy="5" r="3" className="fill-[var(--brass)]" />
    </svg>
  )
}
