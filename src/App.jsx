import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AccessibilityProvider } from './context/AccessibilityContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import QuoteModal from './components/QuoteModal'

function App() {
  return (
    <AccessibilityProvider>
      <Router>
        <div className="min-h-screen bg-brand-dark">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <QuoteModal />
        </div>
      </Router>
    </AccessibilityProvider>
  )
}

export default App
