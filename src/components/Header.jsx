import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full
              bg-transparent
              ${
                menuOpen
                  ? "border-none shadow-none"
                  : "border-b border-blue-100"
              }
              md:bg-white/70 md:backdrop-blur-md md:border-none
              shadow z-50`}
    >
      <nav className="flex justify-between items-center px-4 sm:px-10 py-4">
        {/* Logo / Name */}
        <h1 className="text-xl sm:text-2xl font-bold text-blue-600">
          Prashanth Thota
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-blue-600 transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="md:hidden bg-transparent px-6 py-4 rounded-b-md"
          >
            <ul className="space-y-4 bg-transparent text-white font-medium">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 rounded hover:bg-white/20 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
