import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#hero" className="navbar__logo">PM.DEV</a>
      <ul className="navbar__links">
        <li><a href="#about">Sobre</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <ThemeToggle />
    </nav>
  )
}