import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const heroImages = [
  '/assets/images/wedding and lobola/DSC08268.jpg',
  '/assets/images/Engagement/DSC06785.jpg',
  '/assets/images/studio/DSC02501.jpg',
  '/assets/images/outdoor/DSC03875.jpg',
]

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pt-24 pb-20">
      <section className="min-h-[60vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {heroImages.map((img, index) => (
            <motion.div
              key={img}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.3, rotate: index * 5 }}
              animate={{ 
                opacity: currentImageIndex === index ? 0.35 : 0,
                scale: currentImageIndex === index ? 1 : 1.3,
                rotate: currentImageIndex === index ? 0 : index * 5,
                x: currentImageIndex === index ? 0 : (index % 2 === 0 ? 100 : -100),
                y: currentImageIndex === index ? 0 : (index % 2 === 0 ? -50 : 50),
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <img 
                src={img} 
                alt=""
                className="w-full h-full object-cover"
                
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/50 to-brand-dark" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-2 glass rounded-full text-brand-gold text-sm font-semibold tracking-wider uppercase mb-6">
              About Us
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">
              <span className="text-white">ENDOWED</span>
              <br />
              <span className="gradient-text">CREATIVE MEDIA</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Zimbabwe's premier photography and videography studio
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold/20 rounded-2xl transform rotate-3" />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-blue/20 rounded-2xl transform -rotate-2" />
                <img 
                  src="/assets/images/wedding and lobola/DSC08268.jpg"
                  alt="Endowed Creative Media"
                  className="relative rounded-2xl w-full shadow-2xl"
                  
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-dark rounded-xl p-4 floating">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                    <span className="text-white font-black">EC</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">Premium Quality</div>
                    <div className="text-white/60 text-sm">Visual Storytelling</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Welcome to Endowed Creative Media, Zimbabwe's premier photography and videography studio. We specialize in capturing life's most precious moments with creativity, passion, and excellence.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Our team of skilled professionals is dedicated to transforming your special occasions into timeless treasures. From weddings to corporate events, we bring a unique blend of artistic vision and technical expertise to every project.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-8">
                {[
                  'Professional photography and videography services',
                  'Creative direction and artistic vision',
                  'State-of-the-art equipment and techniques',
                  'Personalized service and attention to detail',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-brand-gold" />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/263773830904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </a>
                <Link to="/services" className="btn-secondary inline-flex items-center justify-center space-x-2">
                  <span>Our Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 glass-dark" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">How We Work</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Consultation', desc: 'We start with understanding your vision, preferences, and expectations for your special day.' },
              { num: '02', title: 'Creative Direction', desc: 'Our team develops a unique approach tailored to capture the essence of your celebration.' },
              { num: '03', title: 'Delivery', desc: 'We deliver stunning, professionally edited visuals that you will treasure for a lifetime.' },
            ].map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative glass-dark p-8 rounded-2xl card-3d group"
              >
                <div className="absolute top-4 right-4 text-6xl font-black text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors">
                  {item.num}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-wide">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 glass-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/60 mb-10 text-lg max-w-2xl mx-auto">
            Get in touch with us today. Let's discuss how we can make your vision come to life.
          </p>
          <a
            href="https://wa.me/263773830904"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Us Now</span>
          </a>
        </div>
      </section>
    </div>
  )
}
