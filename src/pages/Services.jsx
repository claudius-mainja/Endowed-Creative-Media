import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Video, Sparkles, Camera, Briefcase, Monitor, Check, MessageCircle, X, ChevronDown, Plus, Minus } from 'lucide-react'

const services = [
  {
    id: 'wedding',
    icon: Heart,
    title: 'Wedding Photography & Videography',
    tagline: 'Capturing your perfect day',
    description: 'Complete coverage for your special day, from preparations to the last dance. Cinematic videos and stunning photos that tell your unique love story.',
    images: ['/assets/images/wedding and lobola/DSC08268.jpg', '/assets/images/wedding and lobola/DSC08226.jpg', '/assets/images/wedding and lobola/DSC08048.jpg'],
    packages: [
      {
        name: 'Essential',
        price: 'Contact for pricing',
        features: ['Full-day photography', 'Online gallery', '200+ edited photos', 'Photo slideshow', '2 photographers'],
        recommended: false,
      },
      {
        name: 'Premium',
        price: 'Contact for pricing',
        features: ['Full-day photo & video', 'Cinematic highlight reel', '500+ edited photos', 'Online gallery', 'Parent albums', 'Engagement session', 'Drone footage'],
        recommended: true,
      },
      {
        name: 'Luxury',
        price: 'Contact for pricing',
        features: ['Complete coverage team', 'Multi-camera videography', 'Unlimited edited photos', 'Drone footage', 'Premium albums', 'Same-day highlights', 'Second shooter'],
        recommended: false,
      },
    ],
  },
  {
    id: 'lobola',
    icon: Video,
    title: 'Lobola & Traditional Ceremonies',
    tagline: 'Honoring your heritage',
    description: 'Respectful documentation of your cultural celebrations with attention to traditional details and meaningful moments.',
    images: ['/assets/images/wedding and lobola/DSC08048.jpg', '/assets/images/wedding and lobola/DSC08195.jpg', '/assets/images/wedding and lobola/DSC07990.jpg'],
    packages: [
      {
        name: 'Documentary',
        price: 'Contact for pricing',
        features: ['Full ceremony coverage', 'Edited highlights', 'Online gallery', '50+ prints'],
        recommended: false,
      },
      {
        name: 'Cinematic',
        price: 'Contact for pricing',
        features: ['Full coverage', 'Cinematic video', '300+ photos', 'Family albums', 'Same-day teaser'],
        recommended: true,
      },
      {
        name: 'Complete',
        price: 'Contact for pricing',
        features: ['Multi-camera setup', 'Full video production', '500+ photos', 'Premium albums', 'Drone coverage'],
        recommended: false,
      },
    ],
  },
  {
    id: 'engagement',
    icon: Sparkles,
    title: 'Engagement Shoots',
    tagline: 'Celebrating your love story',
    description: 'Creative pre-wedding photography sessions to celebrate your engagement and build excitement for the big day.',
    images: ['/assets/images/Engagement/DSC06785.jpg', '/assets/images/Engagement/DSC06735.jpg', '/assets/images/Engagement/DSC06733.jpg'],
    packages: [
      {
        name: 'Classic',
        price: 'Contact for pricing',
        features: ['2-hour session', '1 location', '30 edited photos', 'Online gallery'],
        recommended: false,
      },
      {
        name: 'Premium',
        price: 'Contact for pricing',
        features: ['3-hour session', '2 locations', '60 edited photos', 'Print credits', 'Social media package'],
        recommended: true,
      },
      {
        name: 'Cinematic',
        price: 'Contact for pricing',
        features: ['Full day session', 'Multiple locations', '100+ photos', 'Video highlight', 'Premium album'],
        recommended: false,
      },
    ],
  },
  {
    id: 'portrait',
    icon: Camera,
    title: 'Portrait & Photo Shoots',
    tagline: 'Your story in frames',
    description: 'Professional portrait sessions for individuals, families, and professional profiles.',
    images: ['/assets/images/studio/DSC02501.jpg', '/assets/images/studio/DSC02497.jpg', '/assets/images/studio/DSC02491.jpg'],
    packages: [
      {
        name: 'Basic',
        price: 'Contact for pricing',
        features: ['1-hour session', 'Studio or outdoor', '20 edited photos', 'Online gallery'],
        recommended: false,
      },
      {
        name: 'Professional',
        price: 'Contact for pricing',
        features: ['2-hour session', 'Multiple setups', '50 edited photos', 'Retouching', 'Print package'],
        recommended: true,
      },
      {
        name: 'Executive',
        price: 'Contact for pricing',
        features: ['Half-day session', 'Multiple locations', '100+ photos', 'Video profile', 'Premium album'],
        recommended: false,
      },
    ],
  },
  {
    id: 'corporate',
    icon: Briefcase,
    title: 'Corporate Media',
    tagline: 'Elevate your brand',
    description: 'Professional media services for businesses, conferences, product launches, and marketing campaigns.',
    images: ['/assets/images/party/DSC01304.jpg', '/assets/images/party/DSC01352.jpg', '/assets/images/party/DSC01350.jpg'],
    packages: [
      {
        name: 'Event',
        price: 'Contact for pricing',
        features: ['Event coverage', 'Photo highlights', 'Social media package', 'Quick turnaround'],
        recommended: false,
      },
      {
        name: 'Professional',
        price: 'Contact for pricing',
        features: ['Full coverage', 'Video highlights', 'Corporate portraits', 'Brand materials', 'Drone footage'],
        recommended: true,
      },
      {
        name: 'Enterprise',
        price: 'Contact for pricing',
        features: ['Multi-day coverage', 'Full video production', 'Brand video', 'Training materials', 'Ongoing support'],
        recommended: false,
      },
    ],
  },
  {
    id: 'livestream',
    icon: Monitor,
    title: 'Livestream Services',
    tagline: 'Connect globally',
    description: 'Live broadcast your events to reach audiences anywhere in the world with professional quality.',
    images: ['/assets/images/wedding and lobola/DSC08226.jpg', '/assets/images/wedding and lobola/DSC08229.jpg', '/assets/images/wedding and lobola/DSC08223.jpg'],
    packages: [
      {
        name: 'Basic',
        price: 'Contact for pricing',
        features: ['Single platform', 'HD quality', '2-hour max', 'Basic graphics'],
        recommended: false,
      },
      {
        name: 'Professional',
        price: 'Contact for pricing',
        features: ['Multi-platform', '4K quality', 'Full event coverage', 'Custom graphics', 'Recorded archive'],
        recommended: true,
      },
      {
        name: 'Premium',
        price: 'Contact for pricing',
        features: ['Unlimited platforms', 'Multi-camera setup', 'Real-time editing', 'Interactive features', 'Full production team'],
        recommended: false,
      },
    ],
  },
]

function RequestModal({ isOpen, onClose, serviceName }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceName || '',
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-sm"
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
            <input type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold transition-colors outline-none" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input type="email" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold transition-colors outline-none" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input type="tel" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold transition-colors outline-none" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Service Type</label>
            <select required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold transition-colors outline-none" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
              <option value="">Select a service</option>
              <option value="Wedding Photography & Videography">Wedding Photography & Videography</option>
              <option value="Lobola & Traditional Ceremonies">Lobola & Traditional Ceremonies</option>
              <option value="Engagement Shoots">Engagement Shoots</option>
              <option value="Portrait & Photo Shoots">Portrait & Photo Shoots</option>
              <option value="Corporate Media">Corporate Media</option>
              <option value="Livestream Services">Livestream Services</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold transition-colors outline-none resize-none" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your event..." />
          </div>
          <div className="flex flex-col gap-3 pt-4">
            <button type="submit" className="btn-primary w-full justify-center">Submit via WhatsApp</button>
            <a href="https://wa.me/263773830904" target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center">
              <MessageCircle className="w-5 h-5" /><span>Chat Directly on WhatsApp</span>
            </a>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const [activeService, setActiveService] = useState('wedding')
  const [expandedPackage, setExpandedPackage] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)

  const currentService = services.find(s => s.id === activeService)

  const handleGetQuote = (pkg) => {
    setSelectedPackage(pkg)
    setShowModal(true)
  }

  return (
    <div className="pt-24 pb-20">
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase">What We Offer</span>
            <h1 className="text-5xl md:text-6xl font-black mt-4 mb-4">OUR <span className="gradient-text">SERVICES</span></h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">Choose a service to explore our packages</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => { setActiveService(service.id); setExpandedPackage(null); }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeService === service.id 
                    ? 'bg-brand-gold text-brand-dark shadow-lg shadow-brand-gold/30' 
                    : 'glass-dark text-white/70 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <service.icon className="w-5 h-5" />
                {service.title.split(' ')[0]}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <img src={currentService.images[0]} alt={currentService.title} className="w-full h-full object-cover"  />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center">
                          <currentService.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-black">{currentService.title}</h2>
                          <p className="text-brand-gold text-sm">{currentService.tagline}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-2 bg-brand-dark/50">
                    {currentService.images.map((img, i) => (
                      <img key={i} src={img} alt="" className="w-full h-24 object-cover rounded-lg"  />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-white/70 text-lg mb-6 leading-relaxed">{currentService.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={() => setShowModal(true)} className="btn-primary inline-flex items-center justify-center space-x-2">
                      <span>Request Quote</span>
                    </button>
                    <a href="https://wa.me/263773830904" target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex items-center justify-center space-x-2">
                      <MessageCircle className="w-5 h-5" /><span>WhatsApp Us</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {currentService.packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-2xl overflow-hidden ${pkg.recommended ? 'border-2 border-brand-gold' : 'border border-white/10'}`}
                  >
                    <button
                      onClick={() => setExpandedPackage(expandedPackage === index ? null : index)}
                      className={`w-full p-6 flex items-center justify-between text-left transition-colors ${
                        pkg.recommended ? 'glass-dark' : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {pkg.recommended && (
                          <span className="px-3 py-1 bg-brand-gold rounded-full text-brand-dark text-xs font-bold uppercase">Recommended</span>
                        )}
                        <div>
                          <h3 className="text-xl font-bold">{pkg.name}</h3>
                          <p className="text-white/60 text-sm">{pkg.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-brand-gold text-sm font-semibold">{pkg.features.length} features</span>
                        {expandedPackage === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {expandedPackage === index && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 bg-brand-dark/50">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                              {pkg.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-2">
                                  <Check className="w-5 h-5 text-brand-gold flex-shrink-0" />
                                  <span className="text-white/80">{feature}</span>
                                </div>
                              ))}
                            </div>
                            <div className="flex gap-4">
                              <button onClick={() => handleGetQuote(pkg)} className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                                pkg.recommended ? 'bg-brand-gold text-brand-dark hover:bg-brand-gold/90' : 'bg-white/10 hover:bg-white/20'
                              }`}>
                                Get This Package
                              </button>
                              <a href="https://wa.me/263773830904" target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-6">
                                <MessageCircle className="w-5 h-5" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-20 glass-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Need a Custom Package?</h2>
          <p className="text-white/60 mb-10 text-lg max-w-2xl mx-auto">We offer customized packages tailored to your specific needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setShowModal(true)} className="btn-primary inline-flex items-center justify-center space-x-2">
              <span>Request Custom Package</span>
            </button>
            <a href="https://wa.me/263773830904" target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex items-center justify-center space-x-2">
              <MessageCircle className="w-5 h-5" /><span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <RequestModal isOpen={showModal} onClose={() => setShowModal(false)} serviceName={currentService?.title} />
    </div>
  )
}
