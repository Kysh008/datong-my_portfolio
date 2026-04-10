import React from 'react';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 font-sans min-h-screen transition-colors duration-300">
      <ThemeToggle />
      <header className="relative overflow-visible pb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-amber-200/20"></div>
        <div className="max-w-6xl mx-auto px-6 py-12 relative overflow-visible">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 overflow-visible">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left flex-1 overflow-visible"
            >
              <div className="name-wrapper overflow-visible">
                <h1 className="cursive-name text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-blue-700 to-amber-600 dark:from-blue-300 dark:to-amber-400 bg-clip-text text-transparent whitespace-nowrap md:whitespace-normal md:break-words overflow-visible" style={{ lineHeight: '1.3', paddingBottom: '0.2em' }}>
                  Krystal N. Datong
                </h1>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 italic font-cursive">My Portfolio</p>
              <p className="text-md text-gray-500 mt-4">Network Security Student</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl bg-gradient-to-br from-blue-200 to-amber-200">
                <img
                  src="/my-photo.png"
                  alt="Krystal N. Datong"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 pb-12">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-700 mt-8">
        <p className="text-gray-600 dark:text-gray-400">© 2024 Krystal N. Datong. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;