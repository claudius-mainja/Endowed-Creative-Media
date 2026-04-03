'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Facebook, Instagram, Youtube, Twitter, MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteModal from '@/components/QuoteModal'

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const services = [
    { value: 'wedding', label: 'Wedding Photography & Videography' },
    { value: 'lobola', label: 'Lobola Ceremony' },
    { value: 'engagement', label: 'Engagement Shoot' },
    { value: 'photoshoot', label: 'Photo Shoot' },
    { value: 'videography', label: 'Videography Production' },
    { value: 'funeral', label: 'Funeral Media' },
    { value: 'corporate', label: 'Corporate Media' },
    { value: 'livestream', label: 'Livestream Services' },
    { value: 'printing', label: 'Printing & Advertising' },
    { value: 'other', label: 'Other' },
  ]

  const openQuoteModal = (service = '') => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    const message = `Contact Form\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
    
    const whatsappUrl = `https://wa.me/263773830904?text=${encodeURIComponent(message)}`
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <>
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-4 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-green/20 to-brand-dark" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-brand-gold mb-4">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Have a question or want to book our services? We&apos;d love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">Send Us a Message</h2>
              <p className="text-white/70 mb-8">
                Fill out the form and we&apos;ll get back to you within 24 hours. Or reach out directly through any of our contact channels.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-brand-green mx-auto mb-4" />
                  <h3 className="text-xl font-display font-bold mb-2">Message Sent!</h3>
                  <p className="text-white/70 mb-6">Thank you for reaching out. We&apos;ll be in touch soon.</p>
                  <a
                    href="https://wa.me/263773830904"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-white/80 mb-2 block">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-gold"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white/80 mb-2 block">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-gold"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-white/80 mb-2 block">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-gold"
                        placeholder="+263 xxx xxx xxx"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white/80 mb-2 block">Service Interested In</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-gold"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white/80 mb-2 block">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-gold h-32 resize-none"
                      placeholder="Tell us about your event or project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-display font-bold mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Office Location</h4>
                      <p className="text-white/60 text-sm">
                        Endowed Creative Media<br />
                        Harare, Zimbabwe
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <a href="tel:+263773830904" className="text-white/60 text-sm hover:text-brand-gold">
                        +263 77 3830 904
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a href="mailto:info@endowedcreativemedia.com" className="text-white/60 text-sm hover:text-brand-gold">
                        info@endowedcreativemedia.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Working Hours</h4>
                      <p className="text-white/60 text-sm">
                        Monday - Saturday: 8:00 AM - 6:00 PM<br />
                        Sunday: By appointment
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-display font-bold mb-6">Quick Contact</h3>
                <p className="text-white/60 text-sm mb-6">
                  Prefer to chat? Reach out directly on WhatsApp for quick responses.
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/263773830904"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Us</span>
                  </a>
                  <a
                    href="mailto:info@endowedcreativemedia.com"
                    className="btn-secondary flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-display font-bold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedService={selectedService} />
    </>
  )
}
