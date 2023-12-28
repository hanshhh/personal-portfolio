import courses from "@/data/courses";
import Accordion from "@/components/Accordion";
import Link from "next/link";
export default function Education () {
    return (
        <div class="py-16 bg-white dark:bg-slate-800 mt-10"> 
        
      <div class="container m-auto px-6 text-gray-600 dark:text-white md:px-12 xl:px-6">
      <h1 className="text-2xl font-bold text-white mb-4">Courses</h1> 
      <p>For reference, you could visit my university's official website: 
        <a className="no-underline text-blue-400 hover:underline hover:text-blue-800" href="https://artsci.calendar.utoronto.ca/" target="_blank" rel="noopener noreferrer"> https://artsci.calendar.utoronto.ca/</a></p>
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
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
      </div>
    </div>
        
    )
}