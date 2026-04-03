import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Camera, Video, Heart, Briefcase, Sparkles, ArrowRight, MessageCircle } from 'lucide-react'
import { useRef } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
}

const localImages = [
  '/src/assets/images/wedding and lobola/DSC08268.jpg',
  '/src/assets/images/Engagement/DSC06785.jpg',
  '/src/assets/images/studio/DSC02501.jpg',
  '/src/assets/images/outdoor/DSC03875.jpg',
]

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="pt-20" ref={containerRef}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl floating" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-2 glass rounded-full text-brand-gold text-sm font-semibold tracking-wider uppercase mb-8">
              Premium Photography & Videography
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none"
          >
            <span className="text-white">CAPTURING</span>
            <br />
            <span className="gradient-text">MOMENTS</span>
            <br />
            <span className="text-white/80">CREATING MEMORIES</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-light"
          >
            Zimbabwe's premier photography and videography studio. We transform your precious moments into timeless visual masterpieces.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/263773830904"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
            <Link to="/portfolio" className="btn-secondary inline-flex items-center justify-center space-x-2">
              <span>View Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          style={{ y, opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-brand-gold rounded-full"
            />
          </div>
        </motion.div>
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
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">Our Services</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Comprehensive photography and videography solutions for every occasion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Wedding Photography', desc: 'Capture your special day with stunning, cinematic visuals that tell your unique love story', img: '/src/assets/images/wedding and lobola/DSC08268.jpg' },
              { icon: Video, title: 'Videography', desc: 'Professional video production for all events, from intimate gatherings to grand celebrations', img: '/src/assets/images/outdoor/DSC03875.jpg' },
              { icon: Camera, title: 'Engagement Shoots', desc: 'Creative pre-wedding photography sessions to celebrate your engagement in stunning locations', img: '/src/assets/images/Engagement/DSC06785.jpg' },
              { icon: Briefcase, title: 'Corporate Media', desc: 'Business events, conferences, product launches, and professional brand content', img: '/src/assets/images/studio/DSC02501.jpg' },
              { icon: Sparkles, title: 'Lobola & Traditional', desc: 'Respectful documentation of your cultural celebrations with attention to tradition', img: '/src/assets/images/wedding and lobola/DSC08048.jpg' },
              { icon: Video, title: 'Livestream Services', desc: 'Live broadcast your events to reach audiences anywhere in the world', img: '/src/assets/images/party/DSC01304.jpg' },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl card-3d glow-effect"
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('bg-brand-green/30'); }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/20 backdrop-blur flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-brand-gold group-hover:text-brand-dark" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 tracking-wide">{service.title}</h3>
                  <p className="text-white/60 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center text-brand-gold text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-gold/30 rounded-2xl" />
                <img 
                  src="/src/assets/images/wedding and lobola/DSC08268.jpg"
                  alt="Wedding photography"
                  className="rounded-2xl w-full shadow-2xl"
                  onError={(e) => { e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect fill="%231B4D3E" width="600" height="400"/></svg>'; }}
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 glass-dark rounded-2xl p-4 floating">
                <div className="text-center">
                  <div className="text-4xl font-black gradient-text">100%</div>
                  <div className="text-white/60 text-sm">Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
                CREATIVE EXCELLENCE
                <br />
                <span className="gradient-text">VISUAL PERFECTION</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                We bring a unique blend of artistic vision and technical expertise to every project. Our commitment to excellence ensures that your memories are captured in their most beautiful form.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Professional', desc: 'Expert team with years of experience' },
                  { title: 'Creative', desc: 'Unique and artistic approach to every project' },
                  { title: 'Reliable', desc: 'Consistent quality and timely delivery' },
                  { title: 'Passionate', desc: 'Genuine love for visual storytelling' },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-dark p-4 rounded-xl card-3d-reverse"
                  >
                    <h4 className="font-bold text-brand-gold mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 glass-dark" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Create Something Beautiful?</h2>
            <p className="text-white/60 mb-10 text-lg max-w-2xl mx-auto">
              Contact us today for a free consultation. Let's discuss your vision and bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/263773830904"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us Now</span>
              </a>
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center space-x-2">
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4">Featured Gallery</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/src/assets/images/wedding and lobola/DSC08268.jpg',
              '/src/assets/images/Engagement/DSC06785.jpg',
              '/src/assets/images/wedding and lobola/DSC08048.jpg',
              '/src/assets/images/studio/DSC02501.jpg',
              '/src/assets/images/wedding and lobola/DSC08226.jpg',
              '/src/assets/images/party/DSC01304.jpg',
              '/src/assets/images/outdoor/DSC03875.jpg',
              '/src/assets/images/wedding and lobola/DSC07980.jpg',
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-xl card-3d ${
                  index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img 
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => { 
                    e.target.style.display = 'none'; 
                    e.target.parentElement.style.background = '#1B4D3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-secondary inline-flex items-center space-x-2">
              <span>View Full Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
