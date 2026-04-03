'use client'

import Link from 'next/link'
import { Camera, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Wedding Photography', path: '/services' },
      { name: 'Videography', path: '/services' },
      { name: 'Engagements', path: '/services' },
      { name: 'Corporate Media', path: '/services' },
      { name: 'Livestream', path: '/services' },
      { name: 'Printing & Advertising', path: '/services' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact', path: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
    ],
  }

  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                <Camera className="w-7 h-7 text-white" />
              </div>
              <span className="font-display text-xl font-bold gradient-text">
                Endowed Creative
              </span>
            </Link>
            <p className="text-white/60 text-sm mb-6">
              Zimbabwe&apos;s premier photography and videography studio. Capturing your precious moments with creativity and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-white/60 text-sm hover:text-brand-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-white/60 text-sm hover:text-brand-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Endowed Creative Media<br />
                  Harare, Zimbabwe
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <a href="tel:+263773830904" className="text-white/60 text-sm hover:text-brand-gold transition-colors">
                  +263 77 3830 904
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <a href="mailto:info@endowedcreativemedia.com" className="text-white/60 text-sm hover:text-brand-gold transition-colors">
                  info@endowedcreativemedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/40 text-sm">
            © {currentYear} Endowed Creative Media. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.path} className="text-white/40 text-sm hover:text-white/60 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
