import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking as soon as possible, especially for wedding seasons (March-May and September-November). For weddings, we suggest booking 6-12 months in advance. For other events, 2-4 weeks advance booking is typically sufficient.'
  },
  {
    question: 'What is included in your wedding packages?',
    answer: 'Our wedding packages typically include full-day coverage by our professional photographers and videographers, edited digital images, highlight videos, online gallery access, and print packages. Custom packages are available based on your specific needs.'
  },
  {
    question: 'Do you travel outside of Harare?',
    answer: 'Yes! We travel throughout Zimbabwe and can also arrange travel for international destinations. Travel fees may apply depending on the location. Contact us to discuss your specific location.'
  },
  {
    question: 'How long does it take to receive the photos/videos?',
    answer: 'Turnaround times vary by service type. For weddings, photo delivery typically takes 4-6 weeks, while video highlight reels take 6-8 weeks. Rush orders may be available for an additional fee.'
  },
  {
    question: 'What is your payment structure?',
    answer: 'We require a 50% deposit to secure your booking, with the remaining 50% due before or on the day of your event. We accept bank transfers, EcoCash, and payment platforms.'
  },
  {
    question: 'Can we meet before the event?',
    answer: 'Absolutely! We offer a complimentary pre-wedding consultation to discuss your vision, timeline, and specific requirements. This helps us ensure we capture exactly what you\'re looking for.'
  },
  {
    question: 'What happens if you are unable to attend our event?',
    answer: 'In the rare case of emergency, we have a network of trusted backup photographers and videographers who can step in. We\'re committed to ensuring your event is always covered.'
  },
  {
    question: 'Do you offer livestream services?',
    answer: 'Yes, we offer professional livestream services for events. This includes multi-camera setup, professional audio, and streaming to platforms like Facebook, YouTube, or custom links.'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="pt-24 pb-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase">Support</span>
            <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">
              FREQUENTLY <span className="gradient-text">ASKED</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-dark rounded-2xl overflow-hidden card-3d"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-lg pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-brand-gold transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-brand-gold/20 mb-4" />
                        <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center glass-dark rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-white/60 mb-6">We're here to help. Reach out to us directly.</p>
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
                <span>Contact Form</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
