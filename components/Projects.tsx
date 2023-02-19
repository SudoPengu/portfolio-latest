import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Cropture from "@/Images/projects-images/cropture/1.png"
import ServiceSystem from "@/Images/projects-images/dhvsu-system-service/1.png"
import AmanungSisuan from "@/Images/projects-images/amanung-sisuan/1.png"
import PortfolioOld from "@/Images/projects-images/portfolio-old/oldportfolio.png"

type Props = {}

function Projects({ }: Props) {
    return (
        <div className='text-black dark:text-white px-9'>
            <h1 className='text-black dark:text-white py-7 text-xl underline underline-offset-4 decoration-lime-600 decoration-2 font-bold'>Projects</h1>

            <div className='grid md:grid-cols-2'>
                <Link className='py-5 md:px-5' href={"/projects/cropture"}>
                    <div className='text-center'>
                        <Image className='rounded-lg w-full md:h-32' src={Cropture} alt={"Cropture Image"} />
                        <h1 className='text-xl'>Cropture</h1>
                        <span className='text-sm'>A Web-based application that classifies crop diseases</span>
                    </div>
                </Link>

                <Link className='py-5 md:px-5' href={"/projects/dhvsu-service-system"}>
                    <div className='text-center'>
                        <Image className='rounded-lg w-full md:h-32' src={ServiceSystem} alt={"Service System Image"} />
                        <h1 className='text-xl'>DHVSU Service System</h1>
                        <span className='text-sm'>A CRUD application for Don Honorio Venturia State University Project</span>
                    </div>
                </Link>
                <Link className='py-5 md:px-5' href={"/projects/portfolio-old"}>
                    <div className='text-center'>
                        <Image className='rounded-lg w-full md:h-32' src={PortfolioOld} alt={"Portfolio Image"} />
                        <h1 className='text-xl'>Portfolio Website</h1>
                        <span className='text-sm'>My Old Portfolio Website</span>
                    </div>
                </Link>
                <Link className='py-5 md:px-5' href={"/projects/amanung-sisuan"}>
                    <div className='text-center'>
                        <Image className='rounded-lg md:h-32 justify-center' src={AmanungSisuan} alt={"Amanung Sisuan Image"} />
                        <h1 className='text-xl'>Amanung Sisuan</h1>
                        <span className='text-sm'>A mobile pictionary application using React Native</span>
                    </div>
                </Link>
            </div>



        </div>
    )
}

export default Projects