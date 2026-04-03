'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Play, X, ChevronLeft, ChevronRight, Instagram, Facebook } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteModal from '@/components/QuoteModal'

const portfolioItems = [
  { id: 1, category: 'wedding', image: '/assets/images/wedding and lobola/DSC08268.jpg', title: 'Traditional Wedding', description: 'Full day wedding coverage' },
  { id: 2, category: 'wedding', image: '/assets/images/wedding and lobola/DSC08280.jpg', title: 'Garden Wedding', description: 'Outdoor ceremony' },
  { id: 3, category: 'wedding', image: '/assets/images/wedding and lobola/DSC08281.jpg', title: 'Reception Moments', description: 'Evening celebration' },
  { id: 4, category: 'engagement', image: '/assets/images/Engagement/DSC06785.jpg', title: 'Engagement Shoot', description: 'Couple photoshoot' },
  { id: 5, category: 'engagement', image: '/assets/images/Engagement/DSC06735.jpg', title: 'Romantic Session', description: 'Outdoor engagement' },
  { id: 6, category: 'engagement', image: '/assets/images/Engagement/DSC06733.jpg', title: 'Couple Portraits', description: 'Studio session' },
  { id: 7, category: 'portrait', image: '/assets/images/studio/DSC02486.jpg', title: 'Studio Portraits', description: 'Professional headshots' },
  { id: 8, category: 'portrait', image: '/assets/images/studio/DSC02471.jpg', title: 'Fashion Shoot', description: 'Creative portraits' },
  { id: 9, category: 'portrait', image: '/assets/images/studio/DSC02451.jpg', title: 'Individual Session', description: 'Personal portraits' },
  { id: 10, category: 'outdoor', image: '/assets/images/outdoor/DSC03875.jpg', title: 'Outdoor Adventure', description: 'Nature backdrop' },
  { id: 11, category: 'outdoor', image: '/assets/images/outdoor/DSC03866.jpg', title: 'Sunset Session', description: 'Golden hour shoot' },
  { id: 12, category: 'outdoor', image: '/assets/images/outdoor/DSC03858.jpg', title: 'Urban Shoot', description: 'City location' },
  { id: 13, category: 'party', image: '/assets/images/party/DSC01490.jpg', title: 'Birthday Celebration', description: 'Event coverage' },
  { id: 14, category: 'party', image: '/assets/images/party/DSC01352.jpg', title: 'Party Moments', description: 'Night event' },
  { id: 15, category: 'party', image: '/assets/images/party/DSC01304.jpg', title: 'Celebration', description: 'Special occasions' },
]

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'wedding', label: 'Weddings' },
  { id: 'engagement', label: 'Engagements' },
  { id: 'portrait', label: 'Portraits' },
  { id: 'outdoor', label: 'Outdoor' },
  { id: 'party', label: 'Events' },
]

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

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
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Featured <span className="gradient-text">Work</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Explore our collection of stunning photography and videography projects
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'gradient-bg text-white'
                    : 'glass text-white/70 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-display font-bold mb-1">{item.title}</h3>
                      <p className="text-white/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
              Like What You See?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let&apos;s create something beautiful together. Contact us to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => openQuoteModal()} className="btn-primary">
                Get a Quote
              </button>
              <a href="https://wa.me/263773830904" target="_blank" className="btn-secondary">
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-5xl w-full p-4" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-display font-bold">{selectedImage.title}</h3>
                <p className="text-white/60">{selectedImage.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedService={selectedService} />
    </>
  )
}
