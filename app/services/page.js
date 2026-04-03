'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Users, Camera, Video, Broadcast, Printer, ArrowRight, Check, Sparkles, Clock, Star } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteModal from '@/components/QuoteModal'

const services = [
  {
    id: 'wedding',
    icon: Heart,
    title: 'Wedding Photography & Videography',
    description: 'Complete wedding day coverage with stunning visuals that capture every precious moment of your special day.',
    features: ['Full day coverage', '2 photographers', 'Cinematic video', 'Drone footage', 'Photo album included'],
    packages: [
      { name: 'Essential', price: 'From R15,000', items: ['6 hours coverage', '1 photographer', '200+ edited photos', 'Online gallery'] },
      { name: 'Premium', price: 'From R25,000', items: ['Full day coverage', '2 photographers', 'Cinematic video', 'Drone footage', 'Photo album'] },
      { name: 'Luxury', price: 'From R40,000', items: ['2 day coverage', 'Full team', 'Multiple videos', 'Same-day preview', 'Premium album'] },
    ],
  },
  {
    id: 'lobola',
    icon: Users,
    title: 'Lobola Ceremony',
    description: 'Professional documentation of traditional lobola ceremonies, preserving cultural moments with respect and excellence.',
    features: ['Cultural specialists', 'Traditional attire knowledge', 'Family group photos', 'Ceremony video', 'Fast turnaround'],
    packages: [
      { name: 'Standard', price: 'From R8,000', items: ['4 hours coverage', '1 photographer', '150+ photos', 'Online gallery'] },
      { name: 'Complete', price: 'From R12,000', items: ['Full ceremony', 'Photo + Video', 'Family portraits', 'Digital delivery'] },
    ],
  },
  {
    id: 'engagement',
    icon: Sparkles,
    title: 'Engagement Shoots',
    description: 'Beautiful engagement photo sessions to celebrate your journey together before the big day.',
    features: ['Location options', 'Multiple outfits', 'Online gallery', 'Print release', 'Social media edits'],
    packages: [
      { name: 'Solo', price: 'From R3,000', items: ['1 hour session', '1 location', '20 edited photos', 'Online gallery'] },
      { name: 'Couple', price: 'From R5,000', items: ['2 hour session', '2 locations', '40 edited photos', 'Print credits'] },
    ],
  },
  {
    id: 'photoshoot',
    icon: Camera,
    title: 'Professional Photo Shoots',
    description: 'Studio and outdoor photo sessions for individuals, families, and professionals.',
    features: ['Professional lighting', 'Multiple backdrops', 'Professional retouching', 'Quick delivery', 'Print options'],
    packages: [
      { name: 'Basic', price: 'From R1,500', items: ['1 hour session', '10 edited photos', 'Digital delivery'] },
      { name: 'Standard', price: 'From R3,000', items: ['2 hour session', '25 edited photos', 'Studio & outdoor'] },
      { name: 'Premium', price: 'From R5,000', items: ['Full day', '50+ edited photos', 'Multiple looks', 'Hair & makeup'] },
    ],
  },
  {
    id: 'videography',
    icon: Video,
    title: 'Videography Production',
    description: 'Cinematic video production for events, corporate content, and creative projects.',
    features: ['4K filming', 'Professional editing', 'Color grading', 'Sound design', 'Multiple formats'],
    packages: [
      { name: 'Short Form', price: 'From R5,000', items: ['3 minute highlight', '1 day shoot', 'Basic editing'] },
      { name: 'Standard', price: 'From R10,000', items: ['5-10 minute video', 'Professional editing', 'Music licensing'] },
      { name: 'Feature', price: 'From R20,000', items: ['Full length film', 'Multiple shoots', 'Advanced effects', 'Raw footage'] },
    ],
  },
  {
    id: 'funeral',
    icon: Clock,
    title: 'Funeral Media',
    description: 'Respectful and professional media coverage for funeral services and memorials.',
    features: ['Discreet coverage', 'Family coordination', 'Tribute video', 'Photo compilation', 'Quick delivery'],
    packages: [
      { name: 'Basic', price: 'From R3,000', items: ['Ceremony coverage', 'Photos only', 'Online gallery'] },
      { name: 'Tribute', price: 'From R6,000', items: ['Photo + Video', 'Tribute video', 'Family copies'] },
    ],
  },
  {
    id: 'corporate',
    icon: Star,
    title: 'Corporate Media',
    description: 'Professional photography and videography for businesses, events, and marketing.',
    features: ['Brand-focused', 'Commercial quality', 'Marketing ready', 'Fast turnaround', 'Usage rights'],
    packages: [
      { name: 'Event', price: 'From R5,000', items: ['Corporate event', 'Speaker photos', 'Social media edits'] },
      { name: 'Marketing', price: 'From R10,000', items: ['Product photography', 'Team headshots', 'Brand videos'] },
      { name: 'Brand', price: 'From R25,000', items: ['Full campaign', 'Multiple shoots', 'All formats', 'Usage rights'] },
    ],
  },
  {
    id: 'livestream',
    icon: Broadcast,
    title: 'Livestream Services',
    description: 'Live broadcast your events to family and friends anywhere in the world.',
    features: ['Multi-camera', 'Professional audio', 'Live mixing', 'Recording', 'Platform support'],
    packages: [
      { name: 'Basic Stream', price: 'From R3,000', items: ['Single camera', 'Audio support', 'Platform setup'] },
      { name: 'Multi-Cam', price: 'From R6,000', items: ['2 cameras', 'Live switching', 'Recording', 'Chat moderation'] },
      { name: 'Professional', price: 'From R12,000', items: ['Full production', 'Graphics', 'Multi-platform', 'Backup systems'] },
    ],
  },
  {
    id: 'printing',
    icon: Printer,
    title: 'Printing & Advertising',
    description: 'High-quality printing services and advertising materials for your business or event.',
    features: ['Large format', 'Quality materials', 'Design services', 'Bulk discounts', 'Delivery'],
    packages: [
      { name: 'Basic Print', price: 'From R500', items: ['Standard sizes', 'Quick turnaround', 'Pickup/Delivery'] },
      { name: 'Large Format', price: 'From R2,000', items: ['Banners & posters', 'Vinyl & canvas', 'Installation'] },
      { name: 'Full Campaign', price: 'From R5,000', items: ['Multiple materials', 'Design included', 'Full installation'] },
    ],
  },
]

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [activeService, setActiveService] = useState(services[0])

  const openQuoteModal = (service = '') => {
    setSelectedService(service)
    setIsModalOpen(true)
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
              Our Services
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Professional <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Comprehensive photography and videography solutions tailored to capture every special moment
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeService.id === service.id
                    ? 'gradient-bg text-white'
                    : 'glass text-white/70 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <service.icon className="w-5 h-5" />
                  {service.title.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass rounded-3xl p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                    <activeService.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    {activeService.title}
                  </h2>
                  <p className="text-white/70 mb-8">{activeService.description}</p>
                  
                  <h3 className="text-lg font-semibold mb-4">What&apos;s Included:</h3>
                  <ul className="space-y-3 mb-8">
                    {activeService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-brand-gold flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openQuoteModal(activeService.title)}
                    className="btn-primary"
                  >
                    Request Quote
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">Packages</h3>
                  <div className="space-y-4">
                    {activeService.packages.map((pkg, index) => (
                      <motion.div
                        key={pkg.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-semibold">{pkg.name}</h4>
                            <p className="text-brand-gold font-medium">{pkg.price}</p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {pkg.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                              <ArrowRight className="w-4 h-4 text-brand-gold" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => openQuoteModal(activeService.title)}
                          className="w-full mt-4 py-3 rounded-lg bg-white/10 hover:bg-brand-gold hover:text-brand-dark transition-colors"
                        >
                          Select Package
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Need Something Custom?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              We offer tailored packages to meet your specific needs. Contact us for a custom quote.
            </p>
            <button
              onClick={() => openQuoteModal()}
              className="btn-primary"
            >
              Get Custom Quote
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedService={selectedService} />
    </>
  )
}
