import { useEffect, useRef, useState } from "react"

function isHoverTarget(el: Element | null) {
  if (!el) return false
  return Boolean(
    el.closest(
      "button, a, .btn-primary, .btn-outline, .btn-white, .btn-link, .nav-mobile-link, .lang-btn, .theme-btn",
    ),
  )
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovered, setHovered] = useState(false)
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)

  const target = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const fine = window.matchMedia?.("(pointer: fine)")?.matches ?? true
    setEnabled(fine)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }

    const onOver = (e: MouseEvent) => setHovered(isHoverTarget(e.target as Element | null))
    const onOut = (e: MouseEvent) => setHovered(isHoverTarget(e.relatedTarget as Element | null))

    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseover", onOver)
    document.addEventListener("mouseout", onOut)

    const tick = () => {
      const tx = target.current.x
      const ty = target.current.y
      ring.current.x += (tx - ring.current.x) * 0.18
      ring.current.y += (ty - ring.current.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`
      }
      rafId.current = requestAnimationFrame(tick)
    }

    rafId.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseout", onOut)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div className="custom-cursor-dot" ref={dotRef} />
      <div className={hovered ? "custom-cursor-ring hovered" : "custom-cursor-ring"} ref={ringRef} />
    </>
  )
}

