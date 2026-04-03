import { createContext, useContext, useState, useEffect } from 'react'

const AccessibilityContext = createContext()

export function AccessibilityProvider({ children }) {
  const [fontSize, setFontSize] = useState(1)
  const [contrast, setContrast] = useState('normal')
  const [colorBlindMode, setColorBlindMode] = useState('none')
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.body.style.fontSize = `${fontSize}00%`
  }, [fontSize])

  useEffect(() => {
    document.body.classList.remove('contrast-high', 'contrast-low', 'colorblind-protanopia', 'colorblind-deuteranopia', 'colorblind-tritanopia')
    if (contrast === 'high') document.body.classList.add('contrast-high')
    if (contrast === 'low') document.body.classList.add('contrast-low')
    if (colorBlindMode === 'protanopia') document.body.classList.add('colorblind-protanopia')
    if (colorBlindMode === 'deuteranopia') document.body.classList.add('colorblind-deuteranopia')
    if (colorBlindMode === 'tritanopia') document.body.classList.add('colorblind-tritanopia')
  }, [contrast, colorBlindMode])

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light-mode')
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
      document.body.classList.add('light-mode')
    }
  }, [darkMode])

  return (
    <AccessibilityContext.Provider value={{
      fontSize, setFontSize,
      contrast, setContrast,
      colorBlindMode, setColorBlindMode,
      darkMode, setDarkMode
    }}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  return useContext(AccessibilityContext)
}
