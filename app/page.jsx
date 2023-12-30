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


export default function Home() {
  return (
    <>
    <div className="header_bg mt-8">
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
