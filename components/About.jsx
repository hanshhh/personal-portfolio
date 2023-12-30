import Link from "next/link";
import { MotionLeft, MotionRight, MotionTop} from "./MotionSection";
function About() {
    return (
        <div
        class="h-1/2 bg-gradient-to-t from-slate-800 to-slate-900 relative pt-8 pb-6 px-2 mx-auto"
      >
        <div class="container m-auto px-6 text-white md:px-12 xl:px-6">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
  
              <div class="md:7/12 lg:w-7/12">
                <MotionTop>
                <h2 class="text-2xl text-white font-bold md:text-4xl">About Me</h2>

                </MotionTop>
                <MotionLeft>
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

                </MotionLeft>
                

              </div>
              
              <div class=" md:5/12 lg:w-4/12">
              <MotionRight>
                <img class="h-auto max-w-full rounded-lg" src="/profile.png" alt="image" loading="lazy" width="" height=""/>
                </MotionRight>
              </div>

              

            </div>
        </div>
      </div>
    )
}

export default About;
