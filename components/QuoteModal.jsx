'use client'

import { useState, useEffect } from 'react'
import { X, Send, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function QuoteModal({ isOpen, onClose, selectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: ''
  })
  const [service, setService] = useState(selectedService)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setService(selectedService)
  }, [selectedService])

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
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    const message = `New Quote Request\nService: ${service || 'General'}\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEvent Date: ${formData.eventDate}\nMessage: ${formData.message}`
    
    const whatsappUrl = `https://wa.me/263773830904?text=${encodeURIComponent(message)}`
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  const handleClose = () => {
    onClose()
    setSubmitted(false)
    setFormData({ name: '', email: '', phone: '', eventDate: '', message: '' })
    setService('')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 p-4"
          >
            <div className="glass-dark rounded-2xl p-8 max-h-[90vh] overflow-y-auto">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              {submitted ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 rounded-full bg-brand-green/30 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-brand-green" />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold mb-2">Request Submitted!</h3>
                  <p className="text-white/60 mb-6">
                    Thank you for your request. We&apos;ll contact you shortly.
                  </p>
                  <a
                    href="https://wa.me/263773830904"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-display font-bold mb-2">Request a Quote</h3>
                  <p className="text-white/60 text-sm mb-6">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-white/80 mb-2 block">Service Type</label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-gold"
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <label className="text-sm font-medium text-white/80 mb-2 block">Event Date</label>
                        <input
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-gold"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-white/80 mb-2 block">Message</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-brand-gold h-32 resize-none"
                        placeholder="Tell us about your event..."
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
                          <span>Submit Request</span>
                        </>
                      )}
                    </button>

                    <a
                      href="https://wa.me/263773830904"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-secondary flex items-center justify-center space-x-2"
                    >
                      <span>Or WhatsApp Us Directly</span>
                    </a>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
