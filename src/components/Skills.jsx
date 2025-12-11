import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express js",
  "sql",
  "Python",
  "Git",
  "GitHub",
  "API Integration",
  "VS Code",
  "Figma",
];

const gradients = [
  "bg-gradient-to-r from-purple-500 to-pink-400/30",
  "bg-gradient-to-r from-green-400 to-blue-500/30",
  "bg-gradient-to-r from-yellow-400 to-orange-500/30",
  "bg-gradient-to-r from-teal-400 to-cyan-500/30",
  "bg-gradient-to-r from-indigo-500 to-purple-600/30",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-16  text-white text-center "
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, i) => {
          const gradient = gradients[i % gradients.length];
          return (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.1 }}
              className={`${gradient} text-white py-3 px-4 rounded-full shadow-lg text-sm sm:text-base md:text-lg lg:text-lg font-medium transition-transform`}
            >
              {skill}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
