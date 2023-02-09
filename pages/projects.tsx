import React from 'react'

import Projects from '@/components/Projects'

import { motion } from "framer-motion"

type Props = {}

function projects({ }: Props) {
    return (
        <main>
            {/* Body */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 30 }}
                className='sm:w-[35rem] md:w-[38rem] lg:w-[40rem] m-auto'>
                <Projects />
            </motion.div>

        </main>
    )
}

export default projects