import { useEffect, useRef } from "react"

type Options = {
  threshold?: number
  rootMargin?: string
}

export function useScrollReveal(options: Options = {}) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const items = Array.from(root.querySelectorAll<HTMLElement>(".fade-in-up"))
    if (items.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.classList.add("visible")
          io.unobserve(el)
        })
      },
      { threshold: options.threshold ?? 0.2, rootMargin: options.rootMargin },
    )

    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [options.rootMargin, options.threshold])

  return ref
}

