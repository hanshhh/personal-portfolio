import technologies from "@/data/technologies";
import Image from "next/image";

export default function SkillGroup() {
    return (
      <div className=" dark:bg-slate-800 py-24 sm:py-32" id="skill">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center leading-8 text-4xl font-bold text-indigo-600 pb-4">
            Tools & Technologies
          </h2>
          <p className="text-center leading-8 text-xl font-semibold text-indigo-200">Here are the most frequently used tools and programming languages in my projects:</p>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {technologies?.map((technology, index) => {
                return (
                    <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 scale-125"
                    key={index}
                    src={technology}
                    alt={technology}
                    width={180}
                    height={60}/>
                )
            })}
          </div>
        </div>
      </div>
    )
  }
  