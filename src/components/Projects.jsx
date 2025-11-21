import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
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
      name: "Pagination",
      desc: "pagination functionality practice for getting products in batches",
      demo: "https://pagination-nine-mu.vercel.app",
      code: "https://github.com/prashanththota98/pagination.git",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-16 bg-linear-to-l from-gray-900 via-gray-800 to-gray-700 text-white text-center"
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
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-b-blue-300"
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
