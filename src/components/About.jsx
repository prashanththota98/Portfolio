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
        I’m a Frontend Developer who enjoys building responsive, user-friendly
        web applications with React.js, JavaScript, and Tailwind CSS, with a
        strong focus on component-based architecture and clean, intuitive UI
        design. I also have hands-on experience with basic backend development
        using Express.js, including building RESTful CRUD APIs, working with
        SQLite databases, implementing secure password hashing, and token-based
        authentication. Currently, I’m expanding my skill set by learning
        Next.js and strengthening unit and component testing practices with Jest
        and React Testing Library.
      </motion.p>
    </section>
  );
}
