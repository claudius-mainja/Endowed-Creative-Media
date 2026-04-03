'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Camera, Video, Award, Heart, Users, Clock, Star, Play } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteModal from '@/components/QuoteModal'

const team = [
  { name: 'Creative Director', role: 'Lead Photographer', image: '/assets/images/wedding and lobola/DSC08268.jpg' },
  { name: 'Senior Videographer', role: 'Video Production', image: '/assets/images/wedding and lobola/DSC08280.jpg' },
  { name: 'Editor', role: 'Post Production', image: '/assets/images/Engagement/DSC06785.jpg' },
]

const values = [
  { icon: Heart, title: 'Passion', desc: 'We pour our heart into every shot' },
  { icon: Award, title: 'Excellence', desc: 'Quality is never compromised' },
  { icon: Users, title: 'Client Focus', desc: 'Your vision is our priority' },
  { icon: Clock, title: 'Timely Delivery', desc: 'We meet every deadline' },
]

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

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
              About Us
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Crafting Visual <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We are Zimbabwe&apos;s premier photography and videography studio, based in Harare. 
              With years of experience, we capture life&apos;s most precious moments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Our Story
              </h2>
              <p className="text-white/70 mb-6">
                Endowed Creative Media was founded with a simple mission: to capture life&apos;s most beautiful moments 
                with creativity, passion, and excellence. Based in Harare, Zimbabwe, we have grown to become one of 
                the most trusted names in photography and videography.
              </p>
              <p className="text-white/70 mb-8">
                Our team of skilled professionals specializes in weddings, engagements, corporate events, 
                livestreaming, and custom photo shoots. We believe every moment deserves to be preserved beautifully.
              </p>
              <div className="flex gap-4">
                <button onClick={() => openQuoteModal()} className="btn-primary">
                  Get Started
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass rounded-2xl p-6 text-center">
                <Camera className="w-10 h-10 text-brand-gold mx-auto mb-4" />
                <h3 className="text-3xl font-display font-bold gradient-text">500+</h3>
                <p className="text-white/60 text-sm">Events Photographed</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <Video className="w-10 h-10 text-brand-gold mx-auto mb-4" />
                <h3 className="text-3xl font-display font-bold gradient-text">300+</h3>
                <p className="text-white/60 text-sm">Videos Produced</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <Award className="w-10 h-10 text-brand-gold mx-auto mb-4" />
                <h3 className="text-3xl font-display font-bold gradient-text">15+</h3>
                <p className="text-white/60 text-sm">Awards Won</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <Star className="w-10 h-10 text-brand-gold mx-auto mb-4" />
                <h3 className="text-3xl font-display font-bold gradient-text">98%</h3>
                <p className="text-white/60 text-sm">Satisfaction Rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                <p className="text-white/60 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Meet Our Team</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl overflow-hidden"
              >
                <div className="aspect-[4/5]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-1">{member.name}</h3>
                  <p className="text-white/60 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedService={selectedService} />
    </>
  )
}
