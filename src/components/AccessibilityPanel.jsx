import { useState } from 'react'
import { X, Sun, Moon, Eye, Monitor, ZoomIn, ZoomOut } from 'lucide-react'
import { useAccessibility } from '../context/AccessibilityContext'
import { motion, AnimatePresence } from 'framer-motion'

export default function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const {
    fontSize, setFontSize,
    contrast, setContrast,
    colorBlindMode, setColorBlindMode,
    darkMode, setDarkMode
  } = useAccessibility()

  const contrastOptions = [
    { value: 'normal', label: 'Normal' },
    { value: 'high', label: 'High Contrast' },
    { value: 'low', label: 'Lower Contrast' },
  ]

  const colorBlindOptions = [
    { value: 'none', label: 'None' },
    { value: 'protanopia', label: 'Protanopia (Red-Blind)' },
    { value: 'deuteranopia', label: 'Deuteranopia (Green-Blind)' },
    { value: 'tritanopia', label: 'Tritanopia (Blue-Blind)' },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-4 bottom-4 z-50 w-12 h-12 rounded-full gradient-bg flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Eye className="w-6 h-6 text-white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 bottom-0 w-80 glass-dark z-50 p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-display font-bold">Accessibility</h3>
                <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
                  <X />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-white/80 mb-3 block">Font Size</label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setFontSize(Math.max(0.8, fontSize - 0.1))}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                    >
                      <ZoomOut className="w-5 h-5" />
                    </button>
                    <div className="flex-1 h-2 bg-white/10 rounded-full">
                      <div
                        className="h-full bg-brand-gold rounded-full"
                        style={{ width: `${((fontSize - 0.8) / 0.6) * 100}%` }}
                      />
                    </div>
                    <button
                      onClick={() => setFontSize(Math.min(1.4, fontSize + 0.1))}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-white/80 mb-3 block">Display Mode</label>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setDarkMode(true)}
                      className={`flex-1 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all ${
                        darkMode ? 'bg-brand-green text-white' : 'bg-white/10 text-white/60'
                      }`}
                    >
                      <Moon className="w-5 h-5" />
                      <span className="text-sm">Dark</span>
                    </button>
                    <button
                      onClick={() => setDarkMode(false)}
                      className={`flex-1 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all ${
                        !darkMode ? 'bg-brand-blue text-white' : 'bg-white/10 text-white/60'
                      }`}
                    >
                      <Sun className="w-5 h-5" />
                      <span className="text-sm">Light</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-white/80 mb-3 block">Contrast</label>
                  <div className="space-y-2">
                    {contrastOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setContrast(option.value)}
                        className={`w-full py-2 px-4 rounded-lg text-left text-sm transition-all ${
                          contrast === option.value
                            ? 'bg-brand-gold text-brand-dark font-medium'
                            : 'bg-white/10 text-white/80 hover:bg-white/20'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-white/80 mb-3 block">Color Blindness</label>
                  <div className="space-y-2">
                    {colorBlindOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setColorBlindMode(option.value)}
                        className={`w-full py-2 px-4 rounded-lg text-left text-sm transition-all ${
                          colorBlindMode === option.value
                            ? 'bg-brand-gold text-brand-dark font-medium'
                            : 'bg-white/10 text-white/80 hover:bg-white/20'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
