import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Navbar
import Navbar from '@/components/Navbar'

// Framer Motion
import { motion } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <Component {...pageProps} />
    </>
  )
}
