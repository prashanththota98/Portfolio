import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-6 lg:px-16  text-white text-center md:text-left"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, staggerChildren: 0.3 }}
        className="w-full md:w-1/2 mt-8 md:mt-0 space-y-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Hi, I'm Prashanth Thota
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-light"
        >
          Front-End Developer | React & Next.js Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl md:max-w-2xl mx-auto md:mx-0"
        >
          I build modern, responsive web applications with beautiful UI and
          smooth animations.
        </motion.p>

        {/* Optional CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 flex flex-col sm:flex-row justify-center items-center md:justify-start gap-3 sm:gap-4"
        >
          <a
            href="https://github.com/prashanththota98"
            className="px-6 py-2 bg-cyan-400 text-gray-900 rounded-full hover:bg-cyan-500 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/prashanththota"
            className="px-6 py-2 bg-pink-500 text-gray-900 rounded-full hover:bg-pink-600 transition"
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* Profile Picture Section */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
      >
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl shadow-cyan-500/50">
          <img
            src="/pt-favicon.svg"
            alt="Prashanth Thota"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
