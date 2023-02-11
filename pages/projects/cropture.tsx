import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import { motion } from 'framer-motion'
import { AiOutlineRight } from "react-icons/ai"

import Image1 from "@/Images/projects-images/cropture/1.png"
import Image2 from "@/Images/projects-images/cropture/2.png"
import Image3 from "@/Images/projects-images/cropture/3.png"



type Props = {}

const underconstruction = ({ isVisible }: any) => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // transition={{ type: "spring", stiffness: 30 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className='sm:w-[20rem] md:w-[25rem] w-10/12 m-auto'>

            {/* Content */}
            <div className='text-white py-16'>
                <Head>
                    <title>Cropture - Carl Justin Gamos</title>
                </Head>

                {/* Top Text */}
                <div className='flex space-x-2'>
                    <Link className='text-sm align-baseline pt-1 text-lime-600 hover:underline' href={"/projects"}>Projects</Link>
                    <div className='pt-2'>
                        <AiOutlineRight size={12} />
                    </div>
                    <span className='text-lg font-bold'>Cropture</span>
                    <div className='pt-1.5'>
                        <div className='text-[0.7rem] disabled:opacity-75 bg-[#3F4142] font-bold w-16 text-center'>2022-2023</div>
                    </div>
                </div>

                {/* About Project */}
                <div className='py-2'>
                    <h1 className='text-white text-sm py-2 text-justify indent-5'>An application that classifies crop diseases and give details about the disease and solutions on how to prevent and cure them.</h1>

                    <div>
                        <div className='py-1 inline-flex'>
                            <div className='text-[0.7rem] disabled:opacity-75 text-[#98E4B3] bg-[#323E39] font-bold w-16 h-5 text-center'>PLATFROM</div>
                            <span className='text-sm pl-2'>Windows/macOS/Linux/iOS/Android</span>
                        </div>
                        <div className='py-1 inline-flex'>
                            <div className='text-[0.7rem] disabled:opacity-75 text-[#98E4B3] bg-[#323E39] font-bold w-10 h-5 text-center'>STACK</div>
                            <span className='text-sm pl-2'>Nodejs, Reactjs, Python, Tensorflow</span>
                        </div>
                        <div className='py-1 inline-flex'>
                            <div className='text-[0.7rem] disabled:opacity-75 text-[#98E4B3] bg-[#323E39] font-bold w-12 h-5 text-center'>GITHUB</div>
                            <a className='text-sm pl-2 text-jus text-lime-600 hover:underline' href='https://github.com/cjgamos/CropTure' target="_blank" rel="noreferrer">Link</a>
                        </div>
                    </div>
                </div>

                {/* Project Images */}
                <div className='py-2 space-y-4'>
                    <Image className='rounded-lg w-full' src={Image1} alt={"Cropture Image"} />
                    <Image className='rounded-lg w-full' src={Image2} alt={"Cropture Image"} />
                    <Image className='rounded-lg w-full' src={Image3} alt={"Cropture Image"} />
                </div>
            </div>

        </motion.div>
    )
}

export default underconstruction