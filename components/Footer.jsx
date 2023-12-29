import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
    return (
        <section class="bg-slate-900">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
                <Link href="/" class="text-base leading-6 hover:text-white text-gray-300">
                    About
                </Link>
            </div>
            <div class="px-5 py-2">
                <Link href="#" class="text-base leading-6 hover:text-white text-gray-300">
                    Skills
                </Link>
            </div>
            <div class="px-5 py-2">
                <Link href="#" class="text-base leading-6 text-gray-300 hover:text-white">
                    Experience
                </Link>
            </div>
            <div class="px-5 py-2">
                <Link href="#" class="text-base leading-6 text-gray-300 hover:text-white">
                    Education
                </Link>
            </div>
            <div class="px-5 py-2">
                <Link href="#" class="text-base leading-6 text-gray-300 hover:text-white">
                    Contact
                </Link>
            </div>
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
            <a href="https://www.linkedin.com/in/wenqi-zhan" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white">
                <FaInstagram size={24}/>
            </a>
            <a href="https://www.linkedin.com/in/wenqi-zhan" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white">      
                <FaDiscord size={24}/>
            </a>
            <a href="https://github.com/hanshhh" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white">
                <FaGithub size={24}/>
            </a>
            <a href="https://www.linkedin.com/in/wenqi-zhan" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white">
                <FaLinkedin size={24}/>
            </a>
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 Wenqi Zhan, All rights reserved.
        </p>
    </div>
</section>
    )
}

export default Footer;
