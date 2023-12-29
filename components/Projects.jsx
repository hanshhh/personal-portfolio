const projects = [
    {
      name: 'PetPal',
      description: 'A fullstack pet adoption website using React as Frontend and Djangorestframework+PostgreSQL as Backend.',
      imageSrc: '/petpal.png',
      imageAlt: 'petpal',
      href: 'https://csc309-petpal-client.vercel.app/',
    },
    {
      name: 'SeeRemote',
      description: 'Worksite Management System with geolocation, google Auth, Check-in Checkout RT update, and QRcode generation for each worksite region. (MERN Stack + ReactBootStrap).',
      imageSrc: '/seerem.png',
      imageAlt: 'seerem',
      href: 'https://app.seerem.com/',
    },
    {
      name: 'GPTForum',
      description: 'Next14 fullstack application styled with TailwindCSS that allows users to share useful update of AI industry, utilizing Openai API to summarize the posted content.(STILL IN PROGRESS).',
      imageSrc: '/GPTforum.png',
      imageAlt: 'GPTforum',
      href: '#',
    //   Todo: ASAP
    },
  ]
  
  export default function ProjectSection() {
    return (
      <div className="bg-gray-100 dark:bg-slate-900" id="experience">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-indigo-600 mb-10">Projects</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {projects.map((project) => (
                <div key={project.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500 dark:text-gray-400 underline">
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="text-base text-gray-900 dark:text-white">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  