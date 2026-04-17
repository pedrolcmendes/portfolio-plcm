import { useEffect, useRef } from 'react'
import './CustomCursor.css'

// useRef: guarda um valor que persiste entre renders
// MAS não causa re-render quando muda — perfeito pra animações

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)

  // Posição do mouse (atualiza direto no ref, sem useState — mais performático)
  const mouse = useRef({ x: 0, y: 0 })
  const ring  = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    window.addEventListener('mousemove', onMouseMove)

    // Loop de animação — cursor segue o mouse imediatamente,
    // o anel segue com um pequeno delay (interpolação)
    let rafId
    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = mouse.current.x + 'px'
        cursorRef.current.style.top  = mouse.current.y + 'px'
      }
      if (ringRef.current) {
        ring.current.x += (mouse.current.x - ring.current.x) * 0.12
        ring.current.y += (mouse.current.y - ring.current.y) * 0.12
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef}   className="cursor-ring" />
    </>
  )
}