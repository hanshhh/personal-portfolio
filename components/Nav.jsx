"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
    const [showSide, setShowSide] = useState(false);



    return (
        <nav class="w-full fixed top-0 bg-white z-10 dark:bg-slate-900 px-8">
            <div class="container mx-auto py-5 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <Image class="w-8" src="/logo.png" alt="" width={40} height={40}/>
                <span class="text-2xl font-bold text-indigo-900 dark:text-white"
                >Wenqi</span>
            </div>
            <ul
                class="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase"
            >
                <li class="hover:text-gray-500">
                <Link href="/">About me</Link>
                </li>
                <li class="hover:text-gray-500">
                <Link href="#">Skills</Link>
                </li>
                <li class="hover:text-gray-500">
                <Link href="/dj">Experience</Link>
                </li>
                <li class="hover:text-gray-500">
                <a href="#">Education</a>
                </li>
                <li class="hover:text-gray-500">
                <a href="#">Contact</a>
                </li>
            </ul>
            <img
                id="moon"
                src="./img/moon.png"
                class="hidden md:block w-5 cursor-pointer"
                alt=""
            />
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
                <a id="hLink" href="#">About me</a>
                </li>
                {/* <li> */}
                {/* <a id="hLink" href="#about">Skills</a>
                </li>
                <li>
                <a id="hLink" href="#services">Experience</a>
                </li>
                <li>
                <a id="hLink" href="#works">Education</a>
                </li>
                <li>
                <a id="hLink" href="#contact">Contact</a>
                </li> */}
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;