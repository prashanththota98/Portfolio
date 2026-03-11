import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
import GalaxyBackground from "./components/Galaxybackground";
import "./index.css";
import { form } from "framer-motion/client";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <GalaxyBackground />
      <Header />
      <main className="relative z-10">
        <Suspense>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}
