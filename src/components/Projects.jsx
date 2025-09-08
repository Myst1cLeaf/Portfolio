import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "PokeBinder",
      description: "A Pokemon Card Scanner using Swift.",
      image:"/PokeBinder.png",
      link: "https://github.com/Myst1cLeaf/CSC680-PokeBinder/tree/main",
    },
    {
      title: "COVID-19 in Lungs Detection",
      description: "Python scripts for finding suspicious areas in lungs. (Original Private Repo)",
      image:"/COVIDLungDetection.png",
      link: "https://github.com/Myst1cLeaf/CSC621-Team-Water.git",
    },
    {
      title: "ChillMate",
      description: "A web app made for SFSU students and their mental health.",
      image:"/ChillMate.png",
      link: "https://chillmate-react.vercel.app/",
    },
    {
      title: "AURA",
      description: "A ready-to-go gamified task list app design.",
      image: "/AURA.png",
      link: "https://sites.google.com/view/auraapp/home",
    },
    {
      title: "Movie/Show Service Data Base",
      description: "Created a database from ERD, python scripts for data read/entry, SQL lanugage, business requirements and testing. (Original Private Repo)",
      image:"/EERD.png",
      link: "https://github.com/Myst1cLeaf/Video-Content-Database.git",
    },
    {
      title: "Hearing Aid Computer Graphics",
      description: "Aims to help create a personalized mesh of a hearing aid based on clients ear mesh.",
      image:"/3DHearingAid.png",
      link: "https://github.com/Rafael-Leitao/CSC630-Socially-Responsible-Computing",
    },
    {
      title: "Ball Fall",
      description: "A JavaScript minigame. (Original Private Repo)",
      image:"/BallFallGame.png",
      link: "https://github.com/Myst1cLeaf/Ball-Fall-Game.git",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50 text-slate-900">
      {/* Section Title */}
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-mint"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-slate-900">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 flex-1">{project.description}</p>

            <div className="w-full h-60 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain h-full"
                />
              ) : (
                <span className="text-gray-400 text-sm">No Image</span>
              )}
            </div>

            {/* Links */}
            <a
              href={project.link}
              className="inline-block mt-auto text-mint font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


