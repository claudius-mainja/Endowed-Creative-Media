import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = ['All', 'Wedding', 'Lobola', 'Engagement', 'Studio', 'Outdoor', 'Party']

const localImages = {
  Wedding: [
    { id: 1, title: 'Wedding Celebration', img: '/src/assets/images/wedding and lobola/DSC08268.jpg' },
    { id: 2, title: 'Traditional Ceremony', img: '/src/assets/images/wedding and lobola/DSC08048.jpg' },
    { id: 3, title: 'Reception Highlights', img: '/src/assets/images/wedding and lobola/DSC08226.jpg' },
    { id: 4, title: 'Couple Portrait', img: '/src/assets/images/wedding and lobola/DSC07980.jpg' },
    { id: 5, title: 'First Dance', img: '/src/assets/images/wedding and lobola/DSC08229.jpg' },
    { id: 6, title: 'Wedding Details', img: '/src/assets/images/wedding and lobola/DSC08223.jpg' },
    { id: 7, title: 'Celebration', img: '/src/assets/images/wedding and lobola/DSC08427.jpg' },
    { id: 8, title: 'Couple Moments', img: '/src/assets/images/wedding and lobola/DSC08300.jpg' },
  ],
  Lobola: [
    { id: 9, title: 'Lobola Ceremony', img: '/src/assets/images/wedding and lobola/DSC08195.jpg' },
    { id: 10, title: 'Family Gathering', img: '/src/assets/images/wedding and lobola/DSC08161.jpg' },
    { id: 11, title: 'Traditional Vows', img: '/src/assets/images/wedding and lobola/DSC08049.jpg' },
    { id: 12, title: 'Celebration', img: '/src/assets/images/wedding and lobola/DSC07990.jpg' },
  ],
  Engagement: [
    { id: 13, title: 'Engagement Session', img: '/src/assets/images/Engagement/DSC06785.jpg' },
    { id: 14, title: 'Outdoor Shoot', img: '/src/assets/images/Engagement/DSC06735.jpg' },
    { id: 15, title: 'Romantic Moments', img: '/src/assets/images/Engagement/DSC06733.jpg' },
    { id: 16, title: 'Creative Portraits', img: '/src/assets/images/Engagement/DSC06731.jpg' },
  ],
  Studio: [
    { id: 17, title: 'Studio Portrait', img: '/src/assets/images/studio/DSC02501.jpg' },
    { id: 18, title: 'Professional Headshot', img: '/src/assets/images/studio/DSC02497.jpg' },
    { id: 19, title: 'Creative Session', img: '/src/assets/images/studio/DSC02491.jpg' },
    { id: 20, title: 'Portfolio Work', img: '/src/assets/images/studio/DSC02486.jpg' },
  ],
  Outdoor: [
    { id: 21, title: 'Outdoor Adventure', img: '/src/assets/images/outdoor/DSC03875.jpg' },
    { id: 22, title: 'Natural Beauty', img: '/src/assets/images/outdoor/DSC03866.jpg' },
    { id: 23, title: 'Golden Hour', img: '/src/assets/images/outdoor/DSC03858.jpg' },
    { id: 24, title: 'Landscape Portraits', img: '/src/assets/images/outdoor/DSC03855.jpg' },
  ],
  Party: [
    { id: 25, title: 'Party Vibes', img: '/src/assets/images/party/DSC01304.jpg' },
    { id: 26, title: 'Celebration Moments', img: '/src/assets/images/party/DSC01352.jpg' },
    { id: 27, title: 'Event Highlights', img: '/src/assets/images/party/DSC01350.jpg' },
    { id: 28, title: 'Party Fun', img: '/src/assets/images/party/DSC01490.jpg' },
  ],
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const getFilteredItems = () => {
    if (activeFilter === 'All') {
      return Object.values(localImages).flat()
    }
    return localImages[activeFilter] || []
  }

  const filteredItems = getFilteredItems()

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
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase">Our Work</span>
            <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">
              FEATURED <span className="gradient-text">PORTFOLIO</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Explore our recent work and see why we're Zimbabwe's trusted choice for photography and videography
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-brand-gold text-brand-dark shadow-lg shadow-brand-gold/30' 
                    : 'glass-dark text-white/70 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.03 }}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] card-3d"
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { 
                    e.target.style.display = 'none'; 
                    e.target.parentElement.style.background = '#1B4D3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <p className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-1">{activeFilter}</p>
                    <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-gold/50 rounded-2xl transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <p className="text-white/60 mb-6">Interested in working with us?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/263773830904"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center space-x-2">
                <span>Get a Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
