import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-slate-900 text-center">
      <motion.h2
        className="text-3xl font-bold mb-6 text-mint"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="flex justify-center mb-6"> 
        <motion.img
          src = "/grad.jpeg"
          alt = "Luis Carrillo"
          className="w-80 h-100  shadow-lg border-4 border-mint object-cover"
          
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      <motion.p
        className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        I recently graduated with a degree in Computer Science and I’m passionate about frontend development. 
        I enjoy creating responsive, accessible, and user-friendly applications with React, Tailwind, and modern web tools.
      </motion.p>
    </section>
  )
}

