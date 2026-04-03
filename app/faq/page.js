'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, QuestionMarkCircle, Mail, Phone, Clock, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteModal from '@/components/QuoteModal'

const faqs = [
  {
    question: 'How far in advance should I book my wedding photography?',
    answer: 'We recommend booking 3-6 months in advance for wedding photography to ensure availability. For peak wedding seasons, booking 6+ months ahead is advisable. However, we sometimes have last-minute availability, so it\'s always worth checking with us.'
  },
  {
    question: 'What is included in your wedding packages?',
    answer: 'Our wedding packages vary but typically include: a dedicated photographer (or team for larger packages), full day or specified hour coverage, digital edited photos with online gallery, and optionally videography, drone footage, and photo albums. Each package is customizable to your needs.'
  },
  {
    question: 'How long does it take to receive my photos and videos?',
    answer: 'For weddings and major events, we deliver a highlight preview within 1-2 weeks. The full edited gallery is typically ready within 4-6 weeks. Videos take 6-8 weeks for full production. Rush delivery options are available for an additional fee.'
  },
  {
    question: 'Do you offer engagement shoots before the wedding?',
    answer: 'Yes! We highly recommend engagement shoots as they help you feel comfortable in front of the camera before your big day. They also provide beautiful images for save-the-dates and wedding websites. Ask about our combined packages.'
  },
  {
    question: 'What is your payment structure?',
    answer: 'We require a 30% deposit to secure your booking, with the remaining balance due 2 weeks before your event. We accept bank transfers, mobile money (Ecocash), and payment links. All prices are in South African Rands (ZAR).'
  },
  {
    question: 'Can we meet before the wedding day?',
    answer: 'Absolutely! We offer a complimentary pre-wedding consultation (in-person or virtual) to discuss your vision, timeline, and any special requests. This helps us understand your preferences and ensures everything runs smoothly on the day.'
  },
  {
    question: 'What happens if it rains on our wedding day?',
    answer: 'We\'re prepared for all weather conditions! We have backup indoor locations and creative rain-day solutions. We\'ll work with you to create beautiful indoor shots or wait for breaks in the weather. Your comfort and safety are always our priority.'
  },
  {
    question: 'Do you travel outside of Harare for events?',
    answer: 'Yes, we travel throughout Zimbabwe and can arrange destination shoots. Travel fees may apply for locations outside Harare, which we\'ll discuss during the booking process. We\'ve covered events in Victoria Falls, Bulawayo, and many other locations.'
  },
  {
    question: 'How many photos will we receive?',
    answer: 'The number varies based on package and event duration. For a full wedding day, you can expect 300-600+ edited photos. We focus on quality over quantity, ensuring each photo is meaningful and beautifully edited.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'If cancelled 60+ days before the event, the deposit is refundable (minus a small admin fee). Within 60 days, the deposit is non-refundable but can be transferred to a future date within 12 months. We understand life happens and will work with you when possible.'
  },
]

export default function FAQ() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [openFaq, setOpenFaq] = useState(null)

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
              FAQ
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Find answers to common questions about our services and booking process
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass rounded-2xl mb-4 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-gold flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-white/70">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href="mailto:info@endowedcreativemedia.com" className="text-white/60 hover:text-brand-gold">
                  info@endowedcreativemedia.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href="tel:+263773830904" className="text-white/60 hover:text-brand-gold">
                  +263 77 3830 904
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
                <p className="text-white/60">Mon - Sat: 8am - 6pm</p>
              </div>
            </div>
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
              Still Have Questions?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help!
            </p>
            <button
              onClick={() => openQuoteModal()}
              className="btn-primary"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedService={selectedService} />
    </>
  )
}
