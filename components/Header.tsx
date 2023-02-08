import React from 'react'
import Profile from '../images/profile.jpg'
import Image from 'next/image'

type Props = {}

function Body({ }: Props) {
    return (
        <div className='text-white px-0 py-0'>
            {/* Header*/}
            <div className='lg:flex px-5 sm:px-20 md:px-56 lg:justify-center'>

                {/* Name and Sub */}
                <div className='lg:py-10'>
                    <h1 className='text-3xl'>Carl Justin <span className='text-lime-600'>Gamos</span></h1>
                    <h4>Passionate Geek ( Developer / Programmer / Cyber Security ) </h4>
                </div>

                {/* Image */}
                <div className='flex py-5 text-center justify-center lg:px-5'>
                    <Image className='rounded-full border-2 border-lime-700' width={100} src={Profile} alt="C.J Gamos" />
                </div>
            </div>
        </div >
    )
}

export default Body