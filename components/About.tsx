import React from 'react'
import { AiOutlineRight } from "react-icons/ai"
import Image from 'next/image'

// Skills
import Html from '@/Images/skills/Html.webp'
import Css from '@/Images/skills/css.webp'
import Javascript from '@/Images/skills/javascript.webp'
import Nextjs from '@/Images/skills/nextjs.webp'
import Python from '@/Images/skills/python.webp'
import Tailwind from '@/Images/skills/tailwind.webp'
import Reactjs from '@/Images/skills/Reactjs.webp'
import Bootstrap from '@/Images/skills/bootstrap.webp'

import { BsTwitter, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

type Props = {}

function About({ }: Props) {
    return (
        <div className='px-5'>

            {/* About */}
            <div className='py-2'>
                <h1 className='text-white text-xl underline underline-offset-4 decoration-lime-600 decoration-2 font-bold'>About</h1>
                <h1 className='text-white py-2 text-justify indent-5'>A self-motivated student seeking an opportunity to improve and develop his critical, logical, and analytical skills. My name is <span className='text-lime-600'>Carl Justin Gamos</span>, but you can call me <span className='text-lime-600'>C.J</span>. Has a knack for tinkering stuff and solving real-life problems with code. Created a web-based application that uses Machine Learning and Deep learning for recognizing Plant Disease called <span className='text-lime-600'>Cropture</span>. When i am not coding i play my instruments like Guitar or Piano.</h1>
            </div>

            {/* CV */}
            <div className='text-center py-5'>
                <a className='transition ease-in bg-lime-700 hover:bg-lime-800 text-white py-2 px-5 rounded-lg' href="https://drive.google.com/file/d/1MILaBoLU_JT2vTF1xCYY1rY1DwzaSxV2/preview" target="_blank" rel="noreferrer">My CV <AiOutlineRight className='inline-block' /> </a>
            </div>

            {/* Bio */}
            <div className='pt-2'>
                <h1 className='text-white text-xl underline pb-5 underline-offset-4 decoration-lime-600 decoration-2 font-bold'>Bio</h1>
                <div className='text-white inline-flex'>
                    <span className='font-bold pr-3'>2000</span>Born in Pampanga, Philippines.
                </div>
                <div className='text-white inline-flex'>
                    <span className='font-bold pr-3'>2019</span> Taking Bachelor's of Science in Computer Science on Don Honorio Venturia State University, Bacolor Pampanga
                </div>
                <div className='text-white inline-flex'>
                    <span className='font-bold pr-3'>pre--</span> Searching for Internship / OJT
                </div>
            </div>

            {/* Skills */}
            <div className='py-10'>
                <h1 className='text-white text-xl underline pb-2 underline-offset-4 decoration-lime-600 decoration-2 font-bold'>Skills</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 justify-items-center'>
                    <Image src={Html} alt={"Htm.webpl"} width={50} />
                    <Image src={Css} alt={"CSS.webp"} width={60} />
                    <Image src={Javascript} alt={"Javascript.webp"} width={60} />
                    <Image src={Reactjs} alt={"Reactjs.webp"} width={60} />
                    <Image src={Nextjs} alt={"nextjs.webp"} width={80} />
                    <Image src={Bootstrap} alt={"bootstrap.webp"} width={60} />
                    <Image src={Tailwind} alt={"tailwind.webp"} width={60} />
                    <Image src={Python} alt={"python.webp"} width={60} />
                </div>
            </div>

            {/* Interest */}
            <div className='py-2'>
                <h1 className='text-white text-xl underline underline-offset-4 decoration-lime-600 decoration-2 font-bold'>Interest</h1>
                <h1 className='text-white py-2 text-justify indent-5'><span className='text-lime-600'>Pixel Arts</span>, Music, Playing Instruments(Drums, Piano, Guitar, Bass), <span className='text-lime-600'>Programming</span>, and <span className='text-lime-600'>Hacking</span></h1>
            </div>

            {/* Socials */}
            <div className='py-2'>
                <h1 className='text-white text-xl underline underline-offset-4 decoration-lime-600 decoration-2 font-bold'>Socials</h1>
                <div className='grid grid-cols-4 gap-4 justify-items-center py-9'>
                    <a className='text-white text-3xl hover:text-lime-600 transition ease-in' target="_blank" rel="noreferrer" href="https://twitter.com/home"><BsTwitter /></a>
                    <a className='text-white text-3xl hover:text-lime-600 transition ease-in' target="_blank" rel="noreferrer" href="https://github.com/cjgamos"><BsGithub /></a>
                    <a className='text-white text-3xl hover:text-lime-600 transition ease-in' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/carljustingamos/"><BsLinkedin /></a>
                    <a className='text-white text-3xl hover:text-lime-600 transition ease-in' target="_blank" rel="noreferrer" href="https://www.instagram.com/cjgamos_/"><BsInstagram /></a>
                </div>
            </div>

        </div>
    )
}

export default About