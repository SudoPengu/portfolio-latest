import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { BsList, BsGithub } from "react-icons/bs"

type Props = {}

const Header = (props: Props) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const ref = useRef(null)

    const openMenu = () => {
        setIsOpen(!isOpen)
        setIsFocused(!isFocused)
        console.log(isFocused)
    }

    const closeMenu = () => {
        setIsOpen(isOpen)
        setIsFocused(isFocused)
        console.log(isFocused)
    }


    // Still not Working
    useEffect(() => {

        document.addEventListener("mousedown", () => {
            if (isOpen && ref.current) {
                setIsOpen(false)
                setIsFocused(false)
            }
        })

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", () => {
                if (isOpen && !ref.current) {
                    setIsOpen(false)
                    setIsFocused(false)
                }
            })
        }

    }, [isOpen])


    return (
        <div className='sticky top-0 backdrop-blur-sm bg-[transparent] text-[#FFFF] py-4 px-10 h-14 flex justify-between sm:justify-center'>
            <div className='flex font-bold text-lg w-2/5'>
                <a href=""><h1>CJ<span className='text-lime-600'>G</span></h1></a>
            </div>
            <div className='hidden sm:block space-x-8'>
                <Link className=" transition ease-in-out hover:text-lime-500 hover:underline" href={"/about"}>About</Link>
                <Link className=" transition ease-in-out hover:text-lime-500 hover:underline" href={"/projects"}>Projects</Link>
                <Link className=" transition ease-in-out hover:text-lime-500 hover:underline" href={"https://drive.google.com/file/d/1oZbJY3RkmRL2TR0eT74f_tpDSyJgFIUz/preview"} target="_blank" rel="noreferrer">CV</Link>
                <button className='transition ease-in-out hover:text-lime-500 hover:underline'><a href="https://github.com/cjgamos" target="_blank" rel="noreferrer"><BsGithub className='inline-block ' /> Github</a></button>
                {/* <Link className=" transition ease-in-out hover:text-lime-500 hover:underline" href={"https://github.com/cjgamos"} target="_blank" rel="noreferrer">Github</Link> */}
            </div>


            {/* Hamburger Menu */}
            <div className='sm:hidden' ref={ref}>
                <button onClick={() => openMenu()} className={`${isFocused ? 'focus:bg-lime-800 focus:border focus:border-slate-800' : ''} text-white text-2xl transition ease-in-out hover:bg-lime-800 border border-slate-800 rounded-md px-1 py-1`}><BsList /></button>


                <div id='menu' className={` ${isOpen ? 'block' : 'hidden'} absolute list-none sm:hidden bg-[rgb(51,71,23)] flex-col inset-y-0 right-10 transition ease-in top-14 h-44 w-48 rounded-lg border border-lime-700 cursor-pointer`}>
                    <li className='px-5 py-2 transition ease-in hover:bg-lime-800 hover:underline rounded-lg'>
                        <a className='block' href="/about">About</a>
                    </li>
                    <li className='px-5 py-2 transition ease-in hover:bg-lime-800 hover:underline w-full'>
                        <a className='block' href="/projects">Projects</a>
                    </li>
                    <li className='px-5 py-2 transition ease-in hover:bg-lime-800 hover:underline w-full'>
                        <a className='block' href="https://drive.google.com/file/d/1oZbJY3RkmRL2TR0eT74f_tpDSyJgFIUz/preview">CV</a>
                    </li>
                    <li className='px-5 py-2.5 transition ease-in hover:bg-lime-800 hover:underline w-full rounded-lg'>
                        <a className='block' href="https://github.com/cjgamos" target="_blank" rel="noreferrer"><BsGithub className='inline-block' /> Github</a>
                    </li>
                </div>
            </div>

        </div >
    )
}

export default Header