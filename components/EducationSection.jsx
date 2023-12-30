"use client";
import Link from "next/link";
import { MotionLeft, MotionRight, MotionTop} from "./MotionSection";
function EducationSection() {
    return (
        <div class="py-16 bg-slate-900" id="education">  
        <div class="container m-auto px-6 text-white md:px-12 xl:px-6">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div class="md:5/12 lg:w-5/12">
                <MotionLeft>
                <img class="h-auto max-w-full rounded-lg" src="education.png" alt="image" loading="lazy" width="" height=""/>
                </MotionLeft>
              </div>
              <div class="md:7/12 lg:w-6/12">
                <MotionTop>
                <h2 class="text-2xl text-white font-bold md:text-4xl">CS Specialist Program</h2>
                </MotionTop>
                <MotionRight>
                <p class="mt-6 text-gray-200">I am currently pursuing a Computer Science Specialist program as part of a Bachelor Of Science degree along with a minor in Mathematics & STATs in UofT, St. George Campus. Expected to graduate in summer 2025. My current GPA: 3.92/4.0.</p>
                <p class="mt-4 text-gray-200 pb-2">I actively participated in the Recognized Study Group Leadership Program, where I led a group of 4-8 CS/Math students to facilitate learning. </p>
                <Link href="/education" className='btn-grad w-[300px]'>Courses & Transcript</Link>

                </MotionRight>
                
              </div>
            </div>
        </div>
      </div>
    )
}

export default EducationSection;
