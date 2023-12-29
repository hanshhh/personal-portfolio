import Image from 'next/image'
import Accordion from '@/components/Accordion'
import courses from '@/data/courses'
import Modal from '@/components/Modal';
import SkillGroup from '@/components/SkillGroup';
import Link from 'next/link';
import ProjectSection from '@/components/Projects';
import ContactForm from '@/components/ContactForm';


export default function Home() {
  return (
    <>
    <div className="header_bg mt-8">

    </div>

    <div
      class="h-1/2 bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative mt-11 pt-8 pb-6 px-2 mx-auto"
    >
      <div class="container m-auto px-6 text-gray-600 dark:text-white md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">

            <div class="md:7/12 lg:w-7/12">
              <h2 class="text-2xl text-gray-900 dark:text-white font-bold md:text-4xl">About Me</h2>
              <p class="mt-6 text-gray-200 tracking-wider">😁Hello there! My name is Wenqi Zhan, and I'm currently pursuing a degree in Computer Science 💻 at the University of Toronto. 
          My academic journey and personal interests have led me to develop a keen passion for 🎆full-stack application development🎆. 
          I'm particularly fascinated by the intricate process of creating 💡innovative and 🔥interactive websites that captivate audiences.</p>
              <p class="mt-4 text-gray-200 tracking-wider">
              Aside from my technical pursuits, I have a diverse array of hobbies that keep me balanced and energized. I enjoy watching soccer and NBA, although 
          I'm not a very good player. 😭 I'm good at playing badminton🏸 though, so always ready for a friendly match or a competitive game. 
          Playing the guitar🎸 offers me a creative outlet and a way to unwind after a day of coding and problem-solving.
              </p>
              <p class="mt-4 text-gray-200 tracking-wider">
                I'm an international student from Shanghai, China. Absolutely Love this City. So far have visited CNTower, Toronto Island, and Niagara Falls 👉.
                 Have met wonderful people here since 2021: KD, KS... 🫶. 
               </p>
               <Link
          class="btn-grad btn-grad-sm w-[150px]"
          href="#contact"
          >Message</Link>
            </div>
            <div class=" md:5/12 lg:w-4/12">
              <img class="h-auto max-w-full rounded-lg" src="/profile.png" alt="image" loading="lazy" width="" height=""/>
            </div>
          </div>
      </div>




      {/* <div
        className="text-area pt-8 px-10"
      >
        <h1 class="text-4xl font-bold text-indigo-600">About Me</h1>
        <p class="text-gray-300  text-xl md:text-2xl tracking-wide mb-4">
          😁Hello there! My name is Wenqi Zhan, and I'm currently pursuing a degree in Computer Science 💻 at the University of Toronto. 
          My academic journey and personal interests have led me to develop a keen passion for 🎆full-stack application development🎆. 
          I'm particularly fascinated by the intricate process of creating 💡innovative and 🔥interactive websites that captivate audiences.
        </p> 
        <p className="text-gray-300  text-xl md:text-2xl tracking-wide mb-4">Aside from my technical pursuits, I have a diverse array of hobbies that keep me balanced and energized. I enjoy watching soccer and NBA, although 
          I'm not a very good player. 😭 I'm good at playing badminton🏸 though, so always ready for a friendly match or a competitive game. 
          Playing the guitar🎸 offers me a creative outlet and a way to unwind after a day of coding and problem-solving.</p>
        
      </div> */}
    </div>
    <div class="py-16 bg-white dark:bg-slate-900">  
      <div class="container m-auto px-6 text-gray-600 dark:text-white md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img class="h-auto max-w-full rounded-lg" src="education.png" alt="image" loading="lazy" width="" height=""/>
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 dark:text-white font-bold md:text-4xl">CS Specialist Program</h2>
              <p class="mt-6 text-gray-200">I am currently pursuing a Computer Science Specialist program as part of a Bachelor Of Science degree along with a minor in Mathematics & STATs in UofT, St. George Campus. Expected to graduate in summer 2025. My current GPA: 3.92/4.0.</p>
              <p class="mt-4 text-gray-200 pb-2">I actively participated in the Recognized Study Group Leadership Program, where I led a group of 4-8 CS/Math students to facilitate learning. </p>
              <Link href="/education" className='btn-grad w-[300px]'>Courses & Transcript</Link>
            </div>
          </div>
      </div>
    </div>
    <SkillGroup></SkillGroup>
    <ProjectSection></ProjectSection>
    <div
      class="h-1/2 bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative pt-3 pb-12 px-2 mx-auto "
    >
      <div class="container m-auto px-6 text-gray-600 dark:text-white md:px-12 xl:px-6 w-full md:w-9/12 ">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">

            <div class="md:7/12 lg:w-7/12">
              <h2 class="text-2xl text-gray-900 dark:text-indigo-600 font-bold md:text-4xl">Software Engineer Internship</h2>
              <p class="mt-6 text-gray-200 tracking-wider"> 
              SEEDA is an Alberta-based company whose goal is to help companies plan and execute capital projects. 
              They provide engineering and techanical services, and offer project planning, management, and support.
              </p>
              <p class="mt-4 text-gray-200 tracking-wider">
              During my four-month internship, I gained invaluable experience in full-stack development while working on a sophisticated Worksite Management System using the MERN stack,
               complemented by React Bootstrap for responsive design. I learned from my partners and colleagues how to integrate geolocation services, providing real-time location tracking for worksite management, which 
               enhanced my understanding of location-based technologies. Reading and understanding code of Google Authentication enhanced my skills in secure user authentication processes, 
               ensuring robust security within the app. The development of a real-time check-in and check-out system, along with the generation of QR codes for each worksite region, deepened 
               my understanding of dynamic data handling and user interface interaction. This internship was a comprehensive learning journey that significantly improved my technical skills and 
               provided practical insights into developing complex, feature-rich web applications.
              </p>
            

            </div>
            <div class=" md:5/12 lg:w-4/12">
              <img class="h-auto max-w-full rounded-full" src="/seeda.png" alt="image" width="300" height="300"/>
            </div>
          </div>
      </div>

    </div>
    <ContactForm/>
    
    


    {/*  */}







  
    

    
    </>

  )
}
