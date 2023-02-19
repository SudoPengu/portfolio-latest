import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Framer Motion
import { motion } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-[#F0E7DB] dark:bg-[#212022]'>
      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <Component {...pageProps} />

      {/* Footer */}
      <Footer />
    </div>
  )
}
