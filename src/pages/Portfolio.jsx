import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, ChevronRight, Camera, Heart, Sparkles, Briefcase, Monitor, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const categoryData = {
  Wedding: {
    icon: Heart,
    coverImage: '/assets/images/wedding and lobola/DSC08268.jpg',
    images: [
      '/assets/images/wedding and lobola/DSC08268.jpg',
      '/assets/images/wedding and lobola/DSC08266.jpg',
      '/assets/images/wedding and lobola/DSC08258.jpg',
      '/assets/images/wedding and lobola/DSC08280.jpg',
      '/assets/images/wedding and lobola/DSC08281.jpg',
      '/assets/images/wedding and lobola/DSC08048.jpg',
      '/assets/images/wedding and lobola/DSC08229.jpg',
      '/assets/images/wedding and lobola/DSC08226.jpg',
      '/assets/images/wedding and lobola/DSC08223.jpg',
      '/assets/images/wedding and lobola/DSC08222.jpg',
      '/assets/images/wedding and lobola/DSC08195.jpg',
      '/assets/images/wedding and lobola/DSC08181.jpg',
      '/assets/images/wedding and lobola/DSC08161.jpg',
      '/assets/images/wedding and lobola/DSC08141.jpg',
      '/assets/images/wedding and lobola/DSC08133.jpg',
      '/assets/images/wedding and lobola/DSC08128.jpg',
      '/assets/images/wedding and lobola/DSC08061.jpg',
      '/assets/images/wedding and lobola/DSC08051.jpg',
      '/assets/images/wedding and lobola/DSC08049.jpg',
      '/assets/images/wedding and lobola/DSC07990.jpg',
      '/assets/images/wedding and lobola/DSC07988.jpg',
      '/assets/images/wedding and lobola/DSC07987.jpg',
      '/assets/images/wedding and lobola/DSC07980.jpg',
      '/assets/images/wedding and lobola/DSC08316.jpg',
      '/assets/images/wedding and lobola/DSC08427.jpg',
      '/assets/images/wedding and lobola/DSC08424.jpg',
      '/assets/images/wedding and lobola/DSC08309.jpg',
      '/assets/images/wedding and lobola/DSC08308.jpg',
      '/assets/images/wedding and lobola/DSC08301.jpg',
      '/assets/images/wedding and lobola/DSC08300.jpg',
      '/assets/images/wedding and lobola/DSC08323.jpg',
    ],
  },
  Engagement: {
    icon: Sparkles,
    coverImage: '/assets/images/Engagement/DSC06785.jpg',
    images: [
      '/assets/images/Engagement/DSC06785.jpg',
      '/assets/images/Engagement/DSC06735.jpg',
      '/assets/images/Engagement/DSC06733.jpg',
      '/assets/images/Engagement/DSC06731.jpg',
      '/assets/images/Engagement/DSC06732.jpg',
      '/assets/images/Engagement/DSC06730.jpg',
      '/assets/images/Engagement/DSC06728.jpg',
      '/assets/images/Engagement/DSC06672.jpg',
      '/assets/images/Engagement/DSC06669.jpg',
    ],
  },
  Studio: {
    icon: Camera,
    coverImage: '/assets/images/studio/DSC02501.jpg',
    images: [
      '/assets/images/studio/DSC02501.jpg',
      '/assets/images/studio/DSC02497.jpg',
      '/assets/images/studio/DSC02491.jpg',
      '/assets/images/studio/DSC02486.jpg',
      '/assets/images/studio/DSC02489.jpg',
      '/assets/images/studio/DSC02481.jpg',
      '/assets/images/studio/DSC02479.jpg',
      '/assets/images/studio/DSC02478.jpg',
      '/assets/images/studio/DSC02471.jpg',
      '/assets/images/studio/DSC02458.jpg',
      '/assets/images/studio/DSC02451.jpg',
      '/assets/images/studio/DSC02444.jpg',
      '/assets/images/studio/DSC02443.jpg',
    ],
  },
  Outdoor: {
    icon: Globe,
    coverImage: '/assets/images/outdoor/DSC03875.jpg',
    images: [
      '/assets/images/outdoor/DSC03875.jpg',
      '/assets/images/outdoor/DSC03866.jpg',
      '/assets/images/outdoor/DSC03858.jpg',
      '/assets/images/outdoor/DSC03855.jpg',
      '/assets/images/outdoor/DSC03852.jpg',
      '/assets/images/outdoor/DSC03847.jpg',
      '/assets/images/outdoor/DSC03846.jpg',
      '/assets/images/outdoor/DSC03839.jpg',
      '/assets/images/outdoor/DSC03837.jpg',
      '/assets/images/outdoor/DSC03833.jpg',
      '/assets/images/outdoor/DSC03830.jpg',
      '/assets/images/outdoor/DSC03819.jpg',
      '/assets/images/outdoor/DSC03813.jpg',
      '/assets/images/outdoor/DSC03805.jpg',
      '/assets/images/outdoor/DSC03803.jpg',
      '/assets/images/outdoor/DSC03802.jpg',
      '/assets/images/outdoor/DSC03801.jpg',
      '/assets/images/outdoor/DSC03800.jpg',
      '/assets/images/outdoor/DSC03733.jpg',
      '/assets/images/outdoor/DSC03717.jpg',
      '/assets/images/outdoor/DSC03715.jpg',
      '/assets/images/outdoor/DSC03670.jpg',
      '/assets/images/outdoor/DSC03668.jpg',
      '/assets/images/outdoor/DSC03667.jpg',
      '/assets/images/outdoor/DSC03661.jpg',
      '/assets/images/outdoor/DSC03660.jpg',
      '/assets/images/outdoor/DSC03643.jpg',
      '/assets/images/outdoor/DSC03637.jpg',
      '/assets/images/outdoor/DSC03683.jpg',
      '/assets/images/outdoor/DSC03678.jpg',
      '/assets/images/outdoor/DSC03674.jpg',
    ],
  },
  Party: {
    icon: Briefcase,
    coverImage: '/assets/images/party/DSC01304.jpg',
    images: [
      '/assets/images/party/DSC01304.jpg',
      '/assets/images/party/DSC01352.jpg',
      '/assets/images/party/DSC01350.jpg',
      '/assets/images/party/DSC01490.jpg',
      '/assets/images/party/DSC01353.jpg',
      '/assets/images/party/DSC01345.jpg',
      '/assets/images/party/DSC01303.jpg',
      '/assets/images/party/DSC01299.jpg',
      '/assets/images/party/DSC01287.jpg',
      '/assets/images/party/DSC01286.jpg',
      '/assets/images/party/DSC01260.jpg',
      '/assets/images/party/DSC01256.jpg',
      '/assets/images/party/DSC01254.jpg',
      '/assets/images/party/DSC01237.jpg',
      '/assets/images/party/DSC01235.jpg',
      '/assets/images/party/DSC01232.jpg',
      '/assets/images/party/DSC01227.jpg',
      '/assets/images/party/DSC01489.jpg',
      '/assets/images/party/DSC01480.jpg',
    ],
  },
}

function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-brand-dark/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10">
        <X className="w-6 h-6" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
        <ChevronRight className="w-6 h-6 rotate-180" />
      </button>
      <motion.img
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        src={images[currentIndex]}
        alt=""
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute bottom-4 text-white/60 text-sm">{currentIndex + 1} / {images.length}</div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentImages, setCurrentImages] = useState([])

  const openLightbox = (category, index) => {
    setCurrentImages(categoryData[category].images)
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % currentImages.length)
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase">Our Work</span>
            <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">FEATURED <span className="gradient-text">PORTFOLIO</span></h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">Click on a category to explore our work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categoryData).map(([category, data], index) => {
              const Icon = data.icon
              const isExpanded = expandedCategory === category
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  layout
                  className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                    isExpanded ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <motion.div
                    className="relative cursor-pointer group"
                    onClick={() => setExpandedCategory(isExpanded ? null : category)}
                    layout
                  >
                    <div className={`relative ${isExpanded ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                      <img 
                        src={isExpanded ? data.images[0] : data.coverImage}
                        alt={category}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />
                      <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform">
                          <Icon className="w-8 h-8 text-brand-dark" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-black">{category}</h3>
                          <p className="text-white/70 text-sm">{data.images.length} photos</p>
                        </div>
                        <ChevronRight className={`w-6 h-6 text-brand-gold transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                      </div>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-brand-dark"
                      >
                        <div className="p-6">
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {data.images.map((img, i) => (
                              <motion.div
                                key={img}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.02 }}
                                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                                onClick={() => openLightbox(category, i)}
                              >
                                <img 
                                  src={img} 
                                  alt=""
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                  
                                />
                                <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/30 transition-colors flex items-center justify-center">
                                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Camera className="w-5 h-5" />
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/60 mb-6">Interested in working with us?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/263773830904" target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" /><span>WhatsApp Us</span>
              </a>
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center space-x-2">
                <span>Get a Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox 
            images={currentImages} 
            currentIndex={currentIndex} 
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
