import { useTheme } from '../context/ThemeContext'
import './ThemeToggle.css'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Alternar tema"
      title={theme === 'dark' ? 'Mudar para claro' : 'Mudar para escuro'}
    >
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  )
}