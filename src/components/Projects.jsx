import { motion } from "framer-motion";
import "../index.css";

export default function Projects() {
  const projects = [
    {
      name: "GitHub Profile Visualizer",
      desc: "A mini GitHub profile visualizer with profile search, repository display, and basic GitHub activity analysis, securely using environment variables.",
      demo: "https://gpv-six.vercel.app",
      code: "https://github.com/prashanththota98/gpv.git",
    },
    {
      name: "NxtTrends",
      desc: "Full e-commerce frontend with product listing, filters, cart, and responsive UI built using React",
      demo: "https://nxttrendz304.ccbp.tech",
      code: "https://github.com/prashanththota98/Nxt-Trendz.git",
    },
    {
      name: "NxtWatch",
      desc: "OTT-style streaming interface with movie/series cards, categories, search functionality, and a clean responsive layout",
      demo: "https://nxtwatchpra.ccbp.tech",
      code: "https://github.com/prashanththota98/nxt_watch.git",
    },
    {
      name: "fresh fruits",
      desc: "A simple app that is build to practice animations like framer-motion",
      demo: "https://ffreshfruits.netlify.app/",
      code: "https://github.com/prashanththota98/fruits-app",
    },
    {
      name: "Taskify",
      desc: "A simple app like todo that is done using TypeScript",
      demo: "https://tspractice.netlify.app",
      code: "https://github.com/prashanththota98/Taskify",
    },
    {
      name: "Logo e-commerce",
      desc: "A single page application that has sidebar and products with pagination and customized dropdowns and resposnive design for mobiles, tabs and desktops",
      demo: "https://logo-e-com.netlify.app/",
      code: "https://github.com/prashanththota98/Appscrip-task",
    },
    {
      name: "Rock-Paper-Scissor",
      desc: "Interactive Rock–Paper–Scissors game built with React and state-based logic",
      demo: "https://rps123.ccbp.tech",
      code: "https://github.com/prashanththota98/rock-paper-scissor.git",
    },
    {
      name: "Todo List",
      desc: "Simple To-Do List app built with HTML, CSS, and JavaScript with add, edit, delete, and mark-as-complete functionality",
      demo: "https://todolist304.netlify.app/",
      code: "https://github.com/prashanththota98/Todo-list.git",
    },
    {
      name: "Mojito",
      desc: "currently working personal practice project focused on mastering GSAP animations. Implemented ScrollTrigger-based animations, text animations using SplitText, and smooth scroll interactions",
      demo: "https://mojito-kohl-five.vercel.app/",
      code: "https://github.com/prashanththota98/Mojito",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-16 text-white text-center "
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <motion.div
            key={p.name}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/30 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300  gradient-border"
          >
            <h3 className="text-xl sm:text-2xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-gray-300">{p.desc}</p>
            <div className="mt-4 flex justify-center sm:justify-between gap-4 text-cyan-400">
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Demo
              </a>
              <a
                href={p.code}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
