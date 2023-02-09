import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Framer Motion
import { motion } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <Component {...pageProps} />

      {/* Footer */}
      <Footer />
    </>
  )
}
