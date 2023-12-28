import Image from 'next/image'
import Accordion from '@/components/Accordion'
import courses from '@/data/courses'
import Modal from '@/components/Modal';


export default function Home() {
  return (
    <>
    <div className="header_bg mt-8">

    </div>

    <div
      class="h-1/2 bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative mt-11 pt-8 px-2 mx-auto"
    >




      <div
        className="text-area pt-8 px-10"
      >
        <h1 class="text-4xl font-bold text-indigo-600">About Me</h1>
        <p class="text-gray-300  text-xl md:text-2xl tracking-wide mb-4">
          Hello there! My name is Wenqi Zhan, and I'm currently pursuing a degree in Computer Science at the University of Toronto. 
          My academic journey and personal interests have led me to develop a keen passion for full-stack application development. 
          I'm particularly fascinated by the intricate process of creating innovative and interactive websites that captivate audiences.
        </p>
        <a
          class="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
          href="#contact"
          >Contact Me</a>
      </div>
    </div>
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
    <div class="py-16 bg-white dark:bg-slate-900">  
      <div class="container m-auto px-6 text-gray-600 dark:text-white md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img class="h-auto max-w-full rounded-lg" src="education.png" alt="image" loading="lazy" width="" height=""/>
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 dark:text-white font-bold md:text-4xl">Section Name</h2>
              <p class="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
              <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
            </div>
          </div>
      </div>
    </div>
    <div class="py-16 bg-white dark:bg-slate-800">  
      <div class="container m-auto px-6 text-gray-600 dark:text-white md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 dark:text-white font-bold md:text-4xl">Section Name</h2>
              <p class="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
              <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
            </div>
            <div class="md:5/12 lg:w-5/12">
              <img class="h-auto max-w-full rounded-lg" src="education.png" alt="image" loading="lazy" width="" height=""/>
            </div>
            
          </div>
      </div>
    </div>


    {/*  */}
    <Modal/>





  
    

    
    </>

  )
}
