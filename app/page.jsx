"use client";
import Image from 'next/image'
import Accordion from '@/components/Accordion'
import courses from '@/data/courses'
import Modal from '@/components/Modal';
import SkillGroup from '@/components/SkillGroup';
import Link from 'next/link';
import ProjectSection from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
import Internship from '@/components/Internship';
import EducationSection from '@/components/EducationSection';
import About from '@/components/About';

import GraphemeSplitter from 'grapheme-splitter'; // npm i grapheme-splitter
import { TypeAnimation } from 'react-type-animation';
const splitter = new GraphemeSplitter();


export default function Home() {
  return (
    <>
    <div className="header_bg mt-8 flex flex-center flex-col justify-center items-center ">
    <TypeAnimation
              splitter={(str) => splitter.splitGraphemes(str)}
              sequence={[
                'Hello 🇨🇦',
                2000,
                '你好 🇨🇳',
                2000,
              ]}
              style={{ fontSize: '3em' , text: "center" }}
              repeat={Infinity}
            />
    </div>
    <About/>
    <EducationSection/>
    <SkillGroup/>
    <ProjectSection/>
    <Internship/>
    <ContactForm/>
    </>

  )
}
