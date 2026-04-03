'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Sphere, Float, Points, PointMaterial, Stars, Sparkles, Trail, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { ChevronDown, Play, Camera, Video, Sparkles as SparklesIcon, Users, Broadcast, Printer, Star, ArrowRight, Phone, Mail, MapPin, Clock, Heart, Award, Zap, Menu, X, Send, CheckCircle, MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteModal from '@/components/QuoteModal'

function ExplosionParticles() {
  const particlesRef = useRef()
  const count = 500
  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10
    }
    return pos
  })
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.08
      
      const posArray = particlesRef.current.geometry.attributes.position.array
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        posArray[i3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={particlesRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#C9A227"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function FloatingShapes() {
  const meshRef = useRef()
  const meshRef2 = useRef()
  const meshRef3 = useRef()
  
  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2
      meshRef.current.rotation.y = t * 0.3
      meshRef.current.position.x = Math.sin(t * 0.5) * 2
      meshRef.current.position.y = Math.cos(t * 0.3) * 1.5
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = t * 0.15
      meshRef2.current.rotation.z = t * 0.2
      meshRef2.current.position.x = Math.cos(t * 0.4) * 2.5
      meshRef2.current.position.y = Math.sin(t * 0.5) * 2
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.y = t * 0.25
      meshRef3.current.rotation.z = t * 0.1
      meshRef3.current.position.x = Math.sin(t * 0.3) * 3
      meshRef3.current.position.y = Math.cos(t * 0.4) * 1.5
    }
  })

  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef} position={[-3, 1, -2]}>
          <icosahedronGeometry args={[0.5, 0]} />
          <MeshDistortMaterial color="#1B4D3E" speed={2} distort={0.4} transparent opacity={0.8} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh ref={meshRef2} position={[3, -1, -3]}>
          <octahedronGeometry args={[0.4, 0]} />
          <MeshDistortMaterial color="#2E5A88" speed={3} distort={0.3} transparent opacity={0.8} />
        </mesh>
      </Float>
      <Float speed={1} rotationIntensity={0.6} floatIntensity={0.3}>
        <mesh ref={meshRef3} position={[2, 2, -4]}>
          <dodecahedronGeometry args={[0.3, 0]} />
          <MeshDistortMaterial color="#C9A227" speed={2.5} distort={0.5} transparent opacity={0.8} />
        </mesh>
      </Float>
    </>
  )
}

function Nebula() {
  const pointsRef = useRef()
  const count = 2000
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <Points ref={pointsRef} positions={new Float32Array(count * 3).map(() => (Math.random() - 0.5) * 15)} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#1B4D3E"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#C9A227" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2E5A88" />
      <fog attach="fog" args={['#0D1B0F', 5, 15]} />
      <FloatingShapes />
      <ExplosionParticles />
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={200} scale={10} size={2} speed={0.4} color="#C9A227" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  )
}

function ScrollExplosion() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 0.5], [0, -200])
  const y2 = useTransform(scrollYProgress, [0.2, 0.7], [100, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [1, 0.5, 0])

  return (
    <motion.div style={{ y: y1, scale, opacity }} className="fixed inset-0 pointer-events-none z-0">
      <Canvas>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#C9A227" />
        <ExplosionParticles />
        <Stars radius={50} depth={50} count={500} factor={2} saturation={0} fade />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </motion.div>
  )
}

const portfolioImages = [
  '/assets/images/wedding and lobola/DSC08268.jpg',
  '/assets/images/wedding and lobola/DSC08280.jpg',
  '/assets/images/Engagement/DSC06785.jpg',
  '/assets/images/studio/DSC02486.jpg',
  '/assets/images/outdoor/DSC03875.jpg',
  '/assets/images/party/DSC01490.jpg',
]

const services = [
  { icon: Heart, title: 'Wedding Photography', desc: 'Capture your special day with stunning visuals', path: '/services' },
  { icon: Users, title: 'Lobola & Engagement', desc: 'Traditional ceremonies professionally documented', path: '/services' },
  { icon: Camera, title: 'Photo Shoots', desc: 'Professional studio and outdoor sessions', path: '/services' },
  { icon: Video, title: 'Videography', desc: 'Cinematic videos that tell your story', path: '/services' },
  { icon: Broadcast, title: 'Livestream', desc: 'Live broadcast your events to the world', path: '/services' },
  { icon: Printer, title: 'Printing & Ads', desc: 'High-quality prints and advertising materials', path: '/services' },
]

const stats = [
  { number: '500+', label: 'Events Captured' },
  { number: '8+', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '24h', label: 'Response Time' },
]

const testimonials = [
  { name: 'Tariro M.', role: 'Bride', text: 'Absolutely amazing! They captured every moment perfectly. The attention to detail was incredible.', image: '/assets/images/studio/DSC02471.jpg' },
  { name: 'Chenai K.', role: 'Corporate Client', text: 'Professional, creative, and delivered beyond expectations. Highly recommended!', image: '/assets/images/outdoor/DSC03866.jpg' },
  { name: 'Kuda S.', role: 'Event Planner', text: 'The best media team in Zimbabwe. Their work speaks for itself.', image: '/assets/images/wedding and lobola/DSC08048.jpg' },
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const openQuoteModal = (service = '') => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  return (
    <>
      <ScrollExplosion />

      <Navbar />
      
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-brand-gold mb-4 animate-pulse-glow">
              Zimbabwe&apos;s Premier Photography Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
          >
            Capturing <span className="gradient-text">Moments</span><br />
            Creating <span className="gradient-text">Memories</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mb-10"
          >
            Professional photography and videography services in Harare, Zimbabwe. 
            From weddings to corporate events, we bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button onClick={() => openQuoteModal()} className="btn-primary text-lg px-8 py-4">
              Get a Quote
            </button>
            <Link href="/portfolio" className="btn-secondary text-lg px-8 py-4">
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
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
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-brand-gold mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Comprehensive photography and videography solutions for every occasion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-8 group cursor-pointer"
                onClick={() => openQuoteModal(service.title)}
              >
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">{service.desc}</p>
                <div className="flex items-center text-brand-gold text-sm font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
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
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-brand-gold mb-4">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our Portfolio
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A glimpse into our best work across weddings, events, and corporate projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative group overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <img
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium">View Project</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-primary">
              View Full Portfolio
            </Link>
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
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-brand-gold mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="text-white/80 mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-green overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
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
            className="glass rounded-3xl p-12 md:p-20 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Create Magic?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s capture your special moments together. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => openQuoteModal()} className="btn-primary text-lg px-8 py-4">
                Request a Quote
              </button>
              <a href="https://wa.me/263773830904" target="_blank" className="btn-secondary text-lg px-8 py-4">
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedService={selectedService} />
    </>
  )
}
