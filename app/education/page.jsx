import courses from "@/data/courses";
import Accordion from "@/components/Accordion";
import Link from "next/link";
import { PaperClipIcon } from '@heroicons/react/20/solid';


export default function Education () {
    return (
        <div class="py-16 bg-slate-800 mt-10"> 
        
      <div class="container m-auto px-6 text-white md:px-12 xl:px-6">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Courses</h1> 
      <p className="text-xl font-semibold mb-3">For reference, you could visit my university's official website: 
        <a className="no-underline text-blue-400 hover:underline hover:text-blue-800" href="https://artsci.calendar.utoronto.ca/" target="_blank" rel="noopener noreferrer"> https://artsci.calendar.utoronto.ca/</a></p>
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 mb-10">
          <div class="md:7/12 lg:w-6/12">
          <div className="divide-y divide-slate-200">
          {courses.map((course, index) => (
            <Accordion key={index} title={course.title} id={`faqs-${index}`} active={false}>
              {course.text}
            </Accordion>
          ))}
        </div>
            </div>
            <div class="md:5/12 lg:w-5/12">
              <img class="h-auto max-w-full rounded-lg" src="education.png" alt="image" loading="lazy" width="" height=""/>
            </div>
            
          </div>


          <h1 className="text-3xl font-bold text-indigo-600 mb-6">Awards & Transcript</h1> 
          <div className="border-2 border-blue-100 p-2">
      <div className="px-4 sm:px-0 ">
      
        <p className="mt-1 max-w-2xl text-sm leading-6 text-white">Accurate as of December 28th, 2023</p>
      </div>
      <div className="mt-6 border-t border-gray-100 ">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">Dr. James A. & Connie P. Dickson Scholarship In Science & Mathematics</dt>
            <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">Issued by University of Toronto · Nov 2023</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">Dean's List Scholar</dt>
            <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">Issued by University of Toronto · July 2023</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">Supplementary J. S. Mclean Scholarship</dt>
            <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">Issued by University of Toronto · Oct 2021</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">University Of Toronto Scholarship Award</dt>
            <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">Issued by University of Toronto · Oct 2021</dd>
          </div>


          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">Transcript</dt>
            <dd className="mt-2 text-sm text-white sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">transcript.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">Upload Soon</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>

              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>







      </div>

    </div>
        
    )
}