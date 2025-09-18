import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'

type UseScrollParallaxOptions = {
  /** Fator de velocidade. Ex: -0.2, -0.3, 0.1, -0.5 */
  speed?: number
  /** Usa translate3d para performance via GPU */
  use3d?: boolean
  /** Define uma posição base (offset) para o cálculo */
  base?: number
}

/**
 * Hook de parallax por scroll. Retorna um objeto `style` com transform aplicado.
 * - Mantém classes e eventos existentes; aplique em style={parallaxStyle}
 */
export function useScrollParallax(options: UseScrollParallaxOptions = {}) {
  const { speed = -0.2, use3d = true, base = 0 } = options
  const frame = useRef<number | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (frame.current != null) return
      frame.current = requestAnimationFrame(() => {
        frame.current = null
        setScrollY(window.scrollY || window.pageYOffset || 0)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // inicial
    setScrollY(window.scrollY || window.pageYOffset || 0)
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  const { style, transform, offsetY } = useMemo(() => {
    const delta = (scrollY - base) * speed
    const ty = Number.isFinite(delta) ? delta : 0
    const transform = use3d
      ? `translate3d(0, ${ty.toFixed(2)}px, 0)`
      : `translateY(${ty.toFixed(2)}px)`
    const style = { transform, willChange: 'transform' } as const
    return { style, transform, offsetY: ty }
  }, [scrollY, speed, use3d, base])

  // Provide a convenient alias `.tw` for compatibility with existing code
  const tw: CSSProperties = style

  return { style, transform, offsetY, tw }
}

export default useScrollParallax
