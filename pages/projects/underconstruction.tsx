import React from 'react'

import { motion } from 'framer-motion'

type Props = {}

const underconstruction = ({ isVisible }: any) => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 30 }}
            className='text-white h-screen'>
            <h1 className='text-4xl text-center py-56'>Underconstruction!</h1>
        </motion.div>
    )
}

export default underconstruction