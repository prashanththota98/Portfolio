import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-16  text-white text-center"
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
        Frontend Developer with a strong foundation in building responsive,
        user-friendly web applications using React.js, JavaScript, and Tailwind
        CSS. Skilled in component-based architecture and creating clean,
        intuitive UIs. Currently expanding knowledge of Next.js and deepening
        skills in unit/component testing with Jest and React Testing Library.
      </motion.p>
    </section>
  );
}
