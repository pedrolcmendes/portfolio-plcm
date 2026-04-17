import { createContext, useContext, useState, useEffect } from 'react'

// Cria o "canal" pelo qual o tema vai ser compartilhado
const ThemeContext = createContext()

// Provider: envolve a app e fornece o tema pra todos os filhos
export function ThemeProvider({ children }) {
  // Lê do localStorage pra persistir a preferência do usuário
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  )

  useEffect(() => {
    // Aplica o tema no HTML e salva no localStorage
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme]) // Roda toda vez que o tema muda

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Hook customizado — facilita usar o contexto em qualquer componente
export function useTheme() {
  return useContext(ThemeContext)
}