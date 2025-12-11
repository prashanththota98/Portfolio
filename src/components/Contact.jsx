export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-16 text-white text-center"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8">
        Contact Me
      </h2>

      <p className="mt-4 text-base sm:text-lg lg:text-xl mb-6">
        Feel free to reach out via email or connect with me on LinkedIn and
        GitHub
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
        <a
          href="mailto:prashanththota678@gmail.com"
          className="px-6 py-3 bg-cyan-400 text-white rounded-full hover:bg-cyan-500 transition"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/prashanththota"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/prashanththota98"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

// export default function Contact() {
//   return (
//     <section id="contact" className="py-20 text-center px-6">
//       <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600">
//         Contact
//       </h2>

//       <p className="mt-6 text-lg">Email: prashanththota678@gmail.com</p>
//       <p>LinkedIn: your-linkedin-link</p>
//       <p>GitHub: your-github-link</p>
//     </section>
//   );
// }
