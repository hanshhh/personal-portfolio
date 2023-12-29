"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Modal from "./Modal";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [showSide, setShowSide] = useState(false);
    const openModal = () => {
        setOpen(true)
    }
    const router = useRouter();

    // https://www.linkedin.com/pulse/implement-dark-mode-tailwindcss-nextjs13-app-5-simple-lucas-los-arcos/
    // Todo: later add mode toggle based on the tut




    return (
        <nav class="w-full fixed top-0 bg-white z-10 dark:bg-slate-900 px-8">
            <div class="container mx-auto py-5 flex items-center justify-between">
            <div class="flex items-center gap-2">
                {/* <Image class="w-8" src="/logo.png" alt="" width={40} height={40}/> */}
                <span class="text-2xl font-bold text-indigo-900 dark:text-white cursor-pointer" onClick={()=> router.push('/')}
                >Wenqi Zhan</span>
            </div>
            <ul
                class="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase"
            >
                <li class="hover:text-gray-500">
                <Link href="/">About</Link>
                </li>
                <li class="hover:text-gray-500">
                <Link href="#education">Education</Link>
                </li>
                <li class="hover:text-gray-500">
                <Link href="#skill">Skills</Link>
                </li>
                <li class="hover:text-gray-500">
                <Link href="#experience">Experience</Link>
                </li>
                
                <li class="hover:text-gray-500 cursor-pointer">
                    <p onClick={openModal}>Contact</p>
                    
                </li>
            </ul>
            <div className="hidden md:flex justify-end gap-2 ">
            <Link href="https://github.com/hanshhh" class="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
                <Image src="/github.png" width={30} height={30}/>
            </Link>
            <Link href="https://www.linkedin.com/in/wenqi-zhan" class="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.png" width={38} height={39}/>
            </Link>

            </div>
            {/* <img
                id="moon"
                src="./img/moon.png"
                class="hidden md:block w-5 cursor-pointer"
                alt=""
            /> */}
            {/* <div id="hamburger" class="space-y-1 md:hidden cursor-pointer z-20">
                <div class="w-6 h-0.5 bg-black"></div>
                <div class="w-6 h-0.5 bg-black"></div>
                <div class="w-6 h-0.5 bg-black"></div>
            </div> */}
            <div className="space-y-1 md:hidden cursor-pointer z-20">
                <FaBars width={80} onClick={() => setShowSide((showSide) => {return !showSide})}/>

            </div>
            
            <ul
                id="menu"
                className= {`${!showSide && 'hidden'} bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center`}
            >
                <li>
                <a id="hLink" href="/">About me</a>
                </li>
                <li>
                <a id="hLink" href="#education">Education</a>
                </li>
                <li>
                <a id="hLink" href="#skill">Skills</a>
                </li>
                <li>
                <a id="hLink" href="#experience">Experience</a>
                </li>

                <li>
                <p onClick={openModal}>Contact</p>
                </li>
            </ul>
            </div>
            <Modal open={open} setOpen={setOpen}/>
        </nav>
    );
};

export default Navbar;