import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

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
    <footer className="bg-brand-dark border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-block mb-6 group">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-brand-gold rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-brand-dark font-black text-xl tracking-tighter">EC</span>
                </div>
                <div className="ml-3">
                  <span className="block text-white font-black text-xl tracking-tighter leading-none">ENDOWED</span>
                  <span className="block text-brand-gold font-black text-xl tracking-tighter leading-none">CREATIVE</span>
                  <span className="block text-white/60 font-semibold text-xs tracking-widest">MEDIA</span>
                </div>
              </div>
            </Link>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Zimbabwe's premier photography and videography studio. Transforming your precious moments into timeless visual masterpieces.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-white/70 group-hover:text-brand-dark" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-white/70 group-hover:text-brand-dark" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-all duration-300 group">
                <Youtube className="w-5 h-5 text-white/70 group-hover:text-brand-dark" />
              </a>
              <a href="https://wa.me/263773830904" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-green-500/20 flex items-center justify-center hover:bg-green-500 transition-all duration-300 group">
                <MessageCircle className="w-5 h-5 text-green-400 group-hover:text-white" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/60 text-sm hover:text-brand-gold transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-gold/50 rounded-full mr-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/60 text-sm hover:text-brand-gold transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-gold/50 rounded-full mr-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Contact</h4>
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
            <a
              href="https://wa.me/263773830904"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 w-full justify-center"
            >
              <MessageCircle className="w-4 h-4" />
              Chat With Us
            </a>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} Endowed Creative Media. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} to={link.path} className="text-white/40 text-sm hover:text-white/60 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-white/30 text-sm">
              Designed and developed by{' '}
              <a 
                href="https://www.blacklemur.co.zw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-brand-gold/80 transition-colors font-semibold"
              >
                Blacklemur Innovations
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
