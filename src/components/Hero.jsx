import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-slate-50 text-slate-900 pt-20">
      <motion.h1
        className="text-5xl font-bold mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m Luis!
      </motion.h1>

      <div className="flex justify-center mb-6"> 
        <motion.img
          src = "/me.jpeg"
          alt = "Luis Carrillo"
          className="w-80 h-80 rounded-full shadow-lg border-4 border-mint object-cover"
          
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      <motion.p
        className="mt-4 text-lg text-slate-600 max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Welcome to my website! I’m an aspiring frontend developer, passionate about building clean & modern web apps.
      </motion.p>

      <motion.a
        href="#projects"
        className="mt-6 px-6 py-3 bg-mint text-slate-900 font-semibold rounded-lg shadow hover:bg-mint-dark transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        View My Work
      </motion.a>
    </section>
  )
}

