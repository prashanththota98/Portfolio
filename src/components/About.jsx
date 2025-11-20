import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-16 bg-linear-to-l from-gray-900 via-gray-800 to-gray-700 text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed"
      >
        I'm Prashanth Thota, a Front-End Developer skilled in React.js, Tailwind
        CSS, Node.js, and API integrations. I'm currently learning Next.js,
        advanced Git workflows, and animation techniques with CSS keyframes and
        Framer Motion.
      </motion.p>
    </section>
  );
}
