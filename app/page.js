import Image from 'next/image'

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
  
    

    
    </>

  )
}
