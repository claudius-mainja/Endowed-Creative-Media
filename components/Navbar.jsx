'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Camera } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAccessibility } from '@/lib/AccessibilityContext'
import AccessibilityPanel from './AccessibilityPanel'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { darkMode } = useAccessibility()

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-dark py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-xl font-bold gradient-text">
                Endowed Creative
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-sm font-medium transition-colors hover:text-brand-gold text-white/80"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/contact"
                className="btn-primary text-sm"
              >
                Get a Quote
              </Link>
              <Link
                href="https://wa.me/263773830904"
                target="_blank"
                className="btn-secondary text-sm"
              >
                Book Demo
              </Link>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-dark mt-2"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-medium text-white/80"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-3 border-t border-white/10">
                  <Link href="/contact" className="btn-primary text-sm text-center">
                    Get a Quote
                  </Link>
                  <Link
                    href="https://wa.me/263773830904"
                    target="_blank"
                    className="btn-secondary text-sm text-center"
                  >
                    Book Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <AccessibilityPanel />
    </>
  )
}
