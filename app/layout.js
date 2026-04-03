import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Endowed Creative Media | Photography & Videography Zimbabwe',
  description: 'Zimbabwe\'s premier photography and videography studio. Capturing your precious moments with creativity and excellence. Located in Harare.',
  keywords: 'photography, videography, wedding, Zimbabwe, Harare, corporate events, livestream',
  openGraph: {
    title: 'Endowed Creative Media',
    description: 'Photography & Videography Services in Zimbabwe',
    type: 'website',
    locale: 'en_ZW',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-brand-dark text-white antialiased">
        {children}
      </body>
    </html>
  )
}
