import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setSubmitted(true)
      } else {
        const message = `New Contact Form\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
        window.open(`https://wa.me/263773830904?text=${encodeURIComponent(message)}`, '_blank')
        setSubmitted(true)
      }
    } catch (error) {
      const message = `New Contact Form\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
      window.open(`https://wa.me/263773830904?text=${encodeURIComponent(message)}`, '_blank')
      setSubmitted(true)
    }
    
    setLoading(false)
  }

  const services = [
    'Wedding Photography & Videography',
    'Lobola Ceremony',
    'Engagement Shoot',
    'Photo Shoot',
    'Videography Production',
    'Corporate Media',
    'Livestream Services',
    'Printing & Advertising',
    'Other'
  ]

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">
              CONTACT <span className="gradient-text">US</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Get in touch with us for a free consultation and quote
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="glass-dark p-8 rounded-2xl card-3d">
                <h3 className="text-xl font-bold mb-6 tracking-wide">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-white/60 text-sm">Harare, Zimbabwe</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href="tel:+263773830904" className="text-white/60 text-sm hover:text-brand-gold transition-colors">
                        +263 77 3830 904
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:info@endowedcreativemedia.com" className="text-white/60 text-sm hover:text-brand-gold transition-colors">
                        info@endowedcreativemedia.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-dark p-8 rounded-2xl card-3d">
                <h3 className="text-xl font-bold mb-4 tracking-wide">Business Hours</h3>
                <div className="space-y-3 text-white/60 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-brand-gold">By Appointment</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/263773830904"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="glass-dark p-8 md:p-10 rounded-2xl card-3d">
                {submitted ? (
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-24 h-24 rounded-full bg-brand-green/30 flex items-center justify-center mx-auto mb-6 glow-effect"
                    >
                      <CheckCircle className="w-12 h-12 text-brand-gold" />
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
                    <p className="text-white/60 mb-8 max-w-md mx-auto">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <a
                      href="https://wa.me/263773830904"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp inline-flex items-center space-x-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold text-white/80 mb-2 block">Your Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-gold transition-colors"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-white/80 mb-2 block">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-gold transition-colors"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold text-white/80 mb-2 block">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-gold transition-colors"
                          placeholder="+263 xxx xxx xxx"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-white/80 mb-2 block">Service Interested In</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-gold transition-colors"
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-white/80 mb-2 block">Your Message</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-gold transition-colors h-32 resize-none"
                        placeholder="Tell us about your event or requirements..."
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 btn-primary flex items-center justify-center space-x-2"
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
                      <a
                        href="https://wa.me/263773830904"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-whatsapp justify-center"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>Quick Chat</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
