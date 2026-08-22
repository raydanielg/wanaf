"use client"

import { useEffect, useState } from "react"

const phrases = [
  { text: "Gulf and Africa", color: "text-monsoon-teal" },
  { text: "Government", color: "text-brass" },
  { text: "Banking", color: "text-monsoon-teal" },
  { text: "Logistics", color: "text-brass" },
  { text: "Agriculture", color: "text-monsoon-teal" },
  { text: "Healthcare", color: "text-brass" },
  { text: "Energy", color: "text-monsoon-teal" },
]

export function TextRotator() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length)
        setVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const current = phrases[index] ?? phrases[0]!

  return (
    <span
      className={`inline-block transition-all duration-400 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      } ${current.color}`}
    >
      {current.text}
    </span>
  )
}
