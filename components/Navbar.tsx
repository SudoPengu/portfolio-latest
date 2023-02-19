import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { BsList, BsGithub, BsSun, BsMoonFill } from "react-icons/bs"

type Props = {}

const Header = (props: Props) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [isDark, setIsDark] = useState(true)
    const ref = useRef(null)


    const openMenu = () => {
        setIsOpen(!isOpen)
        setIsFocused(!isFocused)
    }

    // Check if Light or Dark
    useEffect(() => {
        const userTheme = localStorage.getItem('theme')
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

        if (userTheme === "dark" || (!userTheme && systemTheme)) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [])



    // Switch Light Mode or Dark
    const openLightMode = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDark(false)
            // console.log(isDark)
            // console.log(localStorage.theme)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsDark(true)
            // console.log(isDark)
            // console.log(localStorage.theme)
        }
    }


    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            // Function for click event
            function handleOutsideClick(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsFocused(isFocused)
                    setIsOpen(isOpen)
                }
            }

            function isClicked(event: any) {
                if (event.target.classList[1] == 'link') {
                    setIsFocused(isFocused)
                    setIsOpen(isOpen)
                }
            }

            document.addEventListener("click", isClicked)

            // Adding click event listener
            document.addEventListener("click", handleOutsideClick);
            return () => document.removeEventListener("click", handleOutsideClick);
        }, [ref]);
    }

    useOutsideAlerter(ref);

    return (
        <div className='sticky top-0 z-50 backdrop-blur-sm bg-[#F4EFE9]/30 dark:bg-[#212022]/30 dark:text-white text-black py-4 px-10 h-14 flex justify-between md:justify-center'>
            <div className='flex font-bold text-lg w-2/5'>
                <a href="/"><h1 className='text-black dark:text-white'>CJ<span className='text-lime-600'>G</span></h1></a>
            </div>
            <div className='hidden md:block space-x-7'>
                <Link className=" transition ease-in-out hover:text-lime-500 hover:underline" href={"/"}>About</Link>
                <Link className=" transition ease-in-out hover:text-lime-500 hover:underline" href={"/projects"}>Projects</Link>
                <Link className=" transition ease-in-out hover:text-lime-500 hover:underline" href={"https://drive.google.com/file/d/1oNWHQDalIMQGwZfqm_w15kNl0ts8PPJr/preview"} target="_blank" rel="noreferrer">CV</Link>
                <button className='transition ease-in-out hover:text-lime-500 hover:underline'><a href="https://github.com/cjgamos" target="_blank" rel="noreferrer"><BsGithub className='inline-block ' /> Github</a></button>
                <button onClick={() => openLightMode()} className={`dark:bg-[#FAD38D] dark:hover:bg-[#ecb44b]  dark:text-black text-white bg-[#805BD4] text-md transition ease-in-out rounded-md px-2 py-2`}>{isDark ? <BsSun /> : <BsMoonFill />}</button>
            </div>


            {/* Hamburger Menu */}
            <div className='md:hidden' ref={ref}>
                <button onClick={() => openLightMode()} className={`dark:bg-[#FAD38D] dark:hover:bg-[#ecb44b]  dark:text-black text-white bg-[#805BD4] text-md transition ease-in-out rounded-md m-2 px-2 py-2`}>{isDark ? <BsSun /> : <BsMoonFill />}</button>
                <button onClick={() => openMenu()} className={`${isFocused ? 'dark:focus:bg-lime-800 focus:bg-[#ECF2F6] focus:border focus:border-slate-800' : ''} text-black dark:text-white text-lg transition ease-in-out hover:bg-[#ECF2F6] dark:hover:bg-lime-800 border dark:border-slate-700 border-slate-500 rounded-md px-1 py-1`}><BsList /></button>


                <div id='menu' className={` ${isOpen ? 'block' : 'hidden'} absolute dark:text-white text-black list-none md:hidden dark:bg-[rgb(51,71,23)] bg-[#FFFEFE] flex-col inset-y-0 right-10 transition ease-in top-14 h-44 w-48 rounded-lg border border-lime-700 cursor-pointer`}>
                    <li className='px-5 py-2 transition ease-in hover:bg-[#ECF2F6] dark:hover:bg-lime-800 hover:underline rounded-lg'>
                        <Link href="/"><span className='block link' >About</span></Link>
                    </li>
                    <li className='px-5 py-2 transition ease-in hover:bg-[#ECF2F6] dark:hover:bg-lime-800 hover:underline w-full'>
                        <Link href="/projects"><span className='block link' >Projects</span></Link>
                    </li>
                    <li className='px-5 py-2 transition ease-in hover:bg-[#ECF2F6] dark:hover:bg-lime-800 hover:underline w-full'>
                        <Link href="https://drive.google.com/file/d/1oNWHQDalIMQGwZfqm_w15kNl0ts8PPJr/preview" target="_blank" rel="noreferrer"><span className='block link' >CV</span></Link>
                    </li>
                    <li className='px-5 py-2.5 transition ease-in hover:bg-[#ECF2F6] dark:hover:bg-lime-800 hover:underline w-full rounded-lg'>
                        <Link href="https://github.com/cjgamos" target="_blank" rel="noreferrer"><span className='block link' ><BsGithub className='inline-block' /> Github</span></Link>
                    </li>
                </div>
            </div>


        </div >
    )
}

export default Header