import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaShieldAlt } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="section-card"
    >
      <h2 className="section-title text-center text-blue-700 dark:text-blue-300">About Me</h2>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex-1 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            An ambitious second-year Information Technology student majoring in Network Security. 
            Eager to continuously learn, grow, and achieve not only for personal development 
            but also to contribute to the technology industry. Seeking an opportunity to apply 
            my knowledge and skills toward technical innovation in a professional environment.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <FaUserGraduate />
              <span>2nd Year IT Student</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <FaShieldAlt />
              <span>Network Security Major</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;