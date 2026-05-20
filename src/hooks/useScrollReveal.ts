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

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.classList.add("visible")
          io.unobserve(el)
        })
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px 0px -50px 0px",
      },
    )

    const inViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      return rect.top < vh
    }

    const observeItems = () => {
      const items = Array.from(root.querySelectorAll<HTMLElement>(".fade-in-up"))
      if (items.length === 0) return

      items.forEach((el) => {
        if (el.dataset.revealObserved === "1") return
        el.dataset.revealObserved = "1"
        if (inViewport(el)) {
          el.classList.add("visible")
          return
        }
        io.observe(el)
      })
    }

    observeItems()
    requestAnimationFrame(() => observeItems())

    const mo = new MutationObserver(() => observeItems())
    mo.observe(root, { childList: true, subtree: true })

    return () => {
      mo.disconnect()
      io.disconnect()
    }
  }, [options.rootMargin, options.threshold])

  return ref
}
