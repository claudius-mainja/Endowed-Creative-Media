import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Video, Sparkles, Camera, Briefcase, Monitor, Check, MessageCircle, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Heart,
    title: 'Wedding Photography & Videography',
    description: 'Complete coverage for your special day, from preparations to the last dance. Cinematic videos and stunning photos that tell your unique love story.',
    packages: [
      {
        name: 'Essential',
        features: ['Full-day photography', 'Online gallery', '200+ edited photos', 'Photo slideshow'],
        recommended: false,
      },
      {
        name: 'Premium',
        features: ['Full-day photo & video', 'Cinematic highlight reel', '500+ edited photos', 'Online gallery', 'Parent albums', 'Engagement session'],
        recommended: true,
      },
      {
        name: 'Luxury',
        features: ['Complete coverage team', 'Multi-camera videography', 'Unlimited edited photos', 'Drone footage', 'Premium albums', 'Same-day highlights'],
        recommended: false,
      },
    ],
    img: '/src/assets/images/wedding and lobola/DSC08268.jpg',
  },
  {
    icon: Video,
    title: 'Lobola & Traditional Ceremonies',
    description: 'Respectful documentation of your cultural celebrations with attention to traditional details and meaningful moments.',
    packages: [
      {
        name: 'Documentary',
        features: ['Full ceremony coverage', 'Edited highlights', 'Online gallery', '50+ prints'],
        recommended: false,
      },
      {
        name: 'Cinematic',
        features: ['Full coverage', 'Cinematic video', '300+ photos', 'Family albums', 'Same-day teaser'],
        recommended: true,
      },
      {
        name: 'Complete',
        features: ['Multi-camera setup', 'Full video production', '500+ photos', 'Premium albums', 'Drone coverage'],
        recommended: false,
      },
    ],
    img: '/src/assets/images/wedding and lobola/DSC08048.jpg',
  },
  {
    icon: Sparkles,
    title: 'Engagement Shoots',
    description: 'Creative pre-wedding photography sessions to celebrate your engagement and build excitement for the big day.',
    packages: [
      {
        name: 'Classic',
        features: ['2-hour session', '1 location', '30 edited photos', 'Online gallery'],
        recommended: false,
      },
      {
        name: 'Premium',
        features: ['3-hour session', '2 locations', '60 edited photos', 'Print credits', 'Social media package'],
        recommended: true,
      },
      {
        name: 'Cinematic',
        features: ['Full day session', 'Multiple locations', '100+ photos', 'Video highlight', 'Premium album'],
        recommended: false,
      },
    ],
    img: '/src/assets/images/Engagement/DSC06785.jpg',
  },
  {
    icon: Camera,
    title: 'Portrait & Photo Shoots',
    description: 'Professional portrait sessions for individuals, families, and professional profiles.',
    packages: [
      {
        name: 'Basic',
        features: ['1-hour session', 'Studio or outdoor', '20 edited photos', 'Online gallery'],
        recommended: false,
      },
      {
        name: 'Professional',
        features: ['2-hour session', 'Multiple setups', '50 edited photos', 'Retouching', 'Print package'],
        recommended: true,
      },
      {
        name: 'Executive',
        features: ['Half-day session', 'Multiple locations', '100+ photos', 'Video profile', 'Premium album'],
        recommended: false,
      },
    ],
    img: '/src/assets/images/studio/DSC02501.jpg',
  },
  {
    icon: Video,
    title: 'Videography Production',
    description: 'Corporate videos, music videos, commercials, and documentary-style productions.',
    packages: [
      {
        name: 'Standard',
        features: ['HD quality', 'Basic editing', '2 revision rounds', 'Standard delivery'],
        recommended: false,
      },
      {
        name: 'Professional',
        features: ['4K quality', 'Advanced editing', 'Motion graphics', 'Unlimited revisions', 'Multiple formats'],
        recommended: true,
      },
      {
        name: 'Broadcast',
        features: ['4K+ quality', 'Full post-production', 'Color grading', 'Sound design', 'Broadcast delivery'],
        recommended: false,
      },
    ],
    img: '/src/assets/images/outdoor/DSC03875.jpg',
  },
  {
    icon: Briefcase,
    title: 'Corporate Media',
    description: 'Professional media services for businesses, conferences, product launches, and marketing campaigns.',
    packages: [
      {
        name: 'Event',
        features: ['Event coverage', 'Photo highlights', 'Social media package', 'Quick turnaround'],
        recommended: false,
      },
      {
        name: 'Professional',
        features: ['Full coverage', 'Video highlights', 'Corporate portraits', 'Brand materials', 'Drone footage'],
        recommended: true,
      },
      {
        name: 'Enterprise',
        features: ['Multi-day coverage', 'Full video production', 'Brand video', 'Training materials', 'Ongoing support'],
        recommended: false,
      },
    ],
    img: '/src/assets/images/party/DSC01304.jpg',
  },
  {
    icon: Monitor,
    title: 'Livestream Services',
    description: 'Live broadcast your events to reach audiences anywhere in the world with professional quality.',
    packages: [
      {
        name: 'Basic',
        features: ['Single platform', 'HD quality', '2-hour max', 'Basic graphics'],
        recommended: false,
      },
      {
        name: 'Professional',
        features: ['Multi-platform', '4K quality', 'Full event coverage', 'Custom graphics', 'Recorded archive'],
        recommended: true,
      },
      {
        name: 'Premium',
        features: ['Unlimited platforms', 'Multi-camera setup', 'Real-time editing', 'Interactive features', 'Full production team'],
        recommended: false,
      },
    ],
    img: '/src/assets/images/wedding and lobola/DSC08226.jpg',
  },
]

function RequestModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Hello! I'd like to request a quote for: ${formData.service}\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    window.open(`https://wa.me/263773830904?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
    onClose()
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-dark rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Request a Quote</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Your Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold transition-colors outline-none"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold transition-colors outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold transition-colors outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Service Type</label>
            <select
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold transition-colors outline-none"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="">Select a service</option>
              <option value="Wedding Photography & Videography">Wedding Photography & Videography</option>
              <option value="Lobola & Traditional Ceremonies">Lobola & Traditional Ceremonies</option>
              <option value="Engagement Shoots">Engagement Shoots</option>
              <option value="Portrait & Photo Shoots">Portrait & Photo Shoots</option>
              <option value="Videography Production">Videography Production</option>
              <option value="Corporate Media">Corporate Media</option>
              <option value="Livestream Services">Livestream Services</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold transition-colors outline-none resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your event..."
            />
          </div>
          <div className="flex flex-col gap-3 pt-4">
            <button type="submit" className="btn-primary w-full justify-center">
              Submit via WhatsApp
            </button>
            <a
              href="https://wa.me/263773830904"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat Directly on WhatsApp</span>
            </a>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase">What We Offer</span>
            <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">
              OUR <span className="gradient-text">SERVICES</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Comprehensive photography and videography solutions tailored to your needs
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={() => setShowModal(true)} className="btn-primary inline-flex items-center justify-center space-x-2">
              <span>Request a Quote</span>
            </button>
            <a
              href="https://wa.me/263773830904"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {services.map((service, serviceIndex) => (
            <motion.section
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="py-16 border-t border-white/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className={`${serviceIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold/20 rounded-2xl" />
                    <img 
                      src={service.img}
                      alt={service.title}
                      className="rounded-2xl w-full shadow-2xl card-3d"
                      onError={(e) => { 
                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect fill="%231B4D3E" width="600" height="400"/></svg>'; 
                      }}
                    />
                  </div>
                </div>

                <div className={`${serviceIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6 card-3d">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">{service.title}</h2>
                  <p className="text-white/70 text-lg mb-8 leading-relaxed">{service.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.packages.map((pkg) => (
                      <motion.div
                        key={pkg.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`relative rounded-2xl p-6 ${
                          pkg.recommended 
                            ? 'glass-dark border-2 border-brand-gold glow-effect' 
                            : 'glass-dark'
                        } card-3d`}
                      >
                        {pkg.recommended && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-gold rounded-full text-brand-dark text-xs font-bold uppercase tracking-wider">
                            Recommended
                          </div>
                        )}
                        <h3 className="text-xl font-bold mb-4">{pkg.name}</h3>
                        <ul className="space-y-3 mb-6">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
                              <Check className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button 
                          onClick={() => setShowModal(true)}
                          className={`w-full py-3 rounded-xl font-semibold transition-all ${
                            pkg.recommended
                              ? 'bg-brand-gold text-brand-dark hover:bg-brand-gold/90'
                              : 'bg-white/10 hover:bg-white/20'
                          }`}
                        >
                          Get Quote
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button onClick={() => setShowModal(true)} className="btn-primary inline-flex items-center space-x-2">
                      <span>Request This Service</span>
                    </button>
                    <a
                      href="https://wa.me/263773830904"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp inline-flex items-center space-x-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </section>

      <section className="py-20 glass-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Need a Custom Package?</h2>
          <p className="text-white/60 mb-10 text-lg max-w-2xl mx-auto">
            We offer customized packages tailored to your specific needs. Contact us to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setShowModal(true)} className="btn-primary inline-flex items-center justify-center space-x-2">
              <span>Request Custom Package</span>
            </button>
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
        </div>
      </section>

      <RequestModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}
