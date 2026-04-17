import { useEffect, useRef } from 'react'

// Hook customizado — encapsula lógica que qualquer seção pode reutilizar
// Retorna uma ref pra você colocar no elemento que quer animar
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal--visible')
          observer.unobserve(el) // Para de observar depois de animar
        }
      },
      { threshold: 0.12, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}