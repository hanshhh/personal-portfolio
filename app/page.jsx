import Image from 'next/image'
import Accordion from '@/components/Accordion'
import courses from '@/data/courses'
import Modal from '@/components/Modal';
import SkillGroup from '@/components/SkillGroup';
import Link from 'next/link';
import ProjectSection from '@/components/Projects';


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
                 Have met wonderful people here: KD, KS 🫶. 
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
    <section id="education" className="relative min-h-screen flex flex-col justify-center bg-gradient-to-t from-indigo-200 overflow-hidden dark:from-slate-800 dark:to-slate-900">
      <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">

        <h1 className="text-2xl font-bold text-white mb-4">Courses</h1>

        <div className="divide-y divide-slate-200">
          {courses.map((course, index) => (
            <Accordion key={index} title={course.title} id={`faqs-${index}`} active={false}>
              {course.text}
            </Accordion>
          ))}
        </div>

      </div>
    </section>
    
    


    {/*  */}






  
    

    
    </>

  )
}
