import React from 'react'
import Profile from '../Images/profile.jpg'
import Image from 'next/image'

type Props = {}

function Body({ }: Props) {
    return (
        <div className='text-white'>

            {/* Header*/}
            <div className='lg:justify-center md:flex sm:flex px-5 pt-5'>

                {/* Name and Sub */}
                <div className='pt-7 lg:w-[31rem] md:w-[29rem] sm:w-[25rem]'>
                    <h1 className='text-3xl'>Carl Justin <span className='text-lime-600'>Gamos</span></h1>
                    <h4>Passionate Geek ( Developer / Programmer / Cyber Security ) </h4>
                </div>

                {/* Image */}
                <div className='flex py-5 text-center justify-center'>
                    <Image className='rounded-full border-2 border-lime-700' width={100} src={Profile} alt="C.J Gamos" />
                </div>
            </div>
        </div >
    )
}

export default Body