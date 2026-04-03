/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0D1B0F',
        'brand-green': '#1B4D3E',
        'brand-blue': '#2E5A88',
        'brand-gold': '#C9A227',
      },
      fontFamily: {
        'display': ['Manrope', 'sans-serif'],
        'body': ['Manrope', 'sans-serif'],
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [],
}
