import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAccessibility } from '../context/AccessibilityContext'
import AccessibilityPanel from './AccessibilityPanel'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('/')
  const location = useLocation()
  const { darkMode } = useAccessibility()

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="relative group">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <span className="text-brand-dark font-black text-lg tracking-tighter">EC</span>
                </div>
                <div className="ml-3">
                  <span className="block text-white font-black text-lg tracking-tighter leading-none">ENDOWED</span>
                  <span className="block text-brand-gold font-black text-lg tracking-tighter leading-none">CREATIVE</span>
                  <span className="block text-white/60 font-semibold text-xs tracking-widest">MEDIA</span>
                </div>
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-500" />
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors overflow-hidden group ${
                    activeLink === link.path ? 'text-brand-gold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${
                    activeLink === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                  <div className="absolute inset-0 bg-brand-gold/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="https://wa.me/263773830904"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            <motion.button
              className="lg:hidden relative w-12 h-12 rounded-xl glass-dark flex items-center justify-center overflow-hidden"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass-dark mx-4 mt-2 rounded-2xl overflow-hidden"
            >
              <div className="px-6 py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center py-3 px-4 rounded-xl text-sm font-semibold transition-colors ${
                        activeLink === link.path 
                          ? 'bg-brand-gold/20 text-brand-gold' 
                          : 'text-white/80 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <a
                    href="https://wa.me/263773830904"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <AccessibilityPanel />
    </>
  )
}
