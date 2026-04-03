import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold/20 rounded-2xl transform rotate-3" />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-blue/20 rounded-2xl transform -rotate-2" />
                <img 
                  src="/src/assets/images/wedding and lobola/DSC08268.jpg"
                  alt="Endowed Creative Media"
                  className="relative rounded-2xl w-full shadow-2xl"
                  onError={(e) => { 
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect fill="%231B4D3E" width="600" height="400"/></svg>'; 
                  }}
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase">About Us</span>
              <h1 className="text-4xl md:text-5xl font-black mt-4 mb-6 leading-tight">
                ENDOWED
                <br />
                <span className="gradient-text">CREATIVE MEDIA</span>
              </h1>
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
                    animate={{ opacity: 1, x: 0 }}
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

      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4">Meet The Creatives</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Creative Director', role: 'Lead Photographer', img: '/src/assets/images/studio/DSC02501.jpg' },
              { name: 'Senior Videographer', role: 'Video Production Lead', img: '/src/assets/images/wedding and lobola/DSC08268.jpg' },
              { name: 'Photo Editor', role: 'Post-Production Specialist', img: '/src/assets/images/Engagement/DSC06785.jpg' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl card-3d"
              >
                <div className="aspect-[3/4] relative">
                  <img 
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { 
                      e.target.style.display = 'none'; 
                      e.target.parentElement.style.background = '#1B4D3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-brand-gold text-sm">{member.role}</p>
                </div>
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
