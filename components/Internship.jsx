import { MotionLeft, MotionRight, MotionTop} from "./MotionSection";
function Internship() {
    return (
        <div
      class="h-1/2 bg-gradient-to-t from-slate-800 to-slate-900 relative pt-3 pb-12 px-2 mx-auto "
    >
      <div class="container m-auto px-6 text-white md:px-12 xl:px-6 w-full md:w-9/12 ">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">

            <div class="md:7/12 lg:w-7/12">
            <MotionTop>
            <h2 class="text-2xl text-indigo-600 font-bold md:text-4xl">Software Engineer Internship</h2>

            </MotionTop>
            <MotionLeft>
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

            </MotionLeft>
            </div>
            <div class=" md:5/12 lg:w-4/12">
                <MotionRight>
                <img class="h-auto max-w-full rounded-full" src="/seeda.png" alt="image" width="300" height="300"/>

                </MotionRight>
              
            </div>
          </div>
      </div>

    </div>
    )
}

export default Internship;
