import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-charcoal text-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-6 text-mint"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="mb-6 text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I’d love to connect! Feel free to reach out.
      </motion.p>

      <motion.a
        href="carrilloluis@gmail.com"
        className="px-6 py-3 bg-mint hover:bg-mint-dark rounded-lg shadow text-slate-900 font-semibold transition"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Say Hello
      </motion.a>
    </section>
  )
}

