import React from 'react'
import Picture from "@/Images/carl-gamos.jpg"
import Image from 'next/image'

import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

function Body({ }: Props) {

    const [text, count] = useTypewriter({
        words: [
            "print('Hello World!, I am C.J')",
            "An_indie_Developer_Based_On_Philippines",
            "<I Love Coding />",
            "I-Like-Coffe-Too.tsx"
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='text-white'>

            {/* Typewrite */}
            <div className='dark:bg-[#313032] bg-[#F4EFE9] dark:text-white text-black w-11/12 md:w-[35rem] sm:w-[33rem] lg:w-[37rem] m-auto py-5 px-5 mt-5 text-center rounded-md'>
                <h1>
                    <span>{text}</span>
                    <Cursor cursorColor='#65A30D' />
                </h1>
            </div>

            {/* Header*/}
            <div className='lg:justify-center md:flex sm:flex px-5'>

                {/* Name and Sub */}
                <div className='pt-7 text-black dark:text-white lg:w-[30rem] md:w-[29rem] sm:w-[25rem]'>
                    <h1 className='text-3xl'>Carl Justin <span className='text-lime-600'>Gamos</span></h1>
                    <h4>Passionate Geek ( Developer / Programmer / Open Source Enthusiast ) </h4>
                </div>

                {/* Image */}
                <div className='flex py-5 text-center justify-center'>
                    <Image className='rounded-full border-2 border-lime-700' width={100} src={Picture} alt="C.J Gamos" />
                </div>
            </div>
        </div >
    )
}

export default Body