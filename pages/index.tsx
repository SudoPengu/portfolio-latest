import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'

import { motion } from "framer-motion"


export default function Home() {
  return (
    <>
      <Head>
        <title>Carl Justin Gamos - Homepage</title>
        <meta name="description" content="A self-motivated student seeking an opportunity to improve and develop his critical, logical, and analytical skills. My name is Carl Justin Gamos, but you can call me C.J. Has a knack for tinkering stuff and solving real-life problems with code. Created a web-based application that uses Machine Learning and Deep learning for recognizing Plant Disease called Cropture. When i am not coding i play my instruments like Guitar or Piano." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>


        {/* Body */}
        <div className='sm:w-[35rem] md:w-[38rem] lg:w-[40rem] w-11/12 m-auto'>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // transition={{ type: "spring", stiffness: 30 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            {/* Header */}
            <Header />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // transition={{ delay: 0.3, type: "spring", stiffness: 30 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            {/* About */}
            <About />
          </motion.div>

        </div>

      </main>
    </>
  )
}
