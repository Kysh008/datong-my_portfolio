import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUniversity, FaCalendarAlt, FaAward, FaSchool, FaChevronDown, FaChevronUp, FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const [expandedItems, setExpandedItems] = useState({});
  
  const educationList = [
    {
      id: 1,
      institution: "University of the Cordilleras",
      degree: "Bachelor of Science in Information Technology",
      major: "Network Security",
      year: "2nd Year College",
      period: "2023 - Present",
      status: "Returning Student",
      icon: <FaUniversity />
    },
    {
      id: 2,
      institution: "AMA Computer College",
      degree: "Bachelor of Science in Information Technology",
      major: "",
      year: "",
      period: "2019",
      status: "Undergraduate",
      icon: <FaGraduationCap />
    },
    {
      id: 3,
      institution: "Joaquin Smith National High School",
      degree: "Senior High School",
      major: "",
      year: "",
      period: "2015 - 2016",
      status: "Graduate",
      icon: <FaSchool />
    },
    {
      id: 4,
      institution: "Natonin National High School",
      degree: "High School",
      major: "",
      year: "",
      period: "2017 - 2018",
      status: "Graduate",
      icon: <FaSchool />
    }
  ];
  
  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="section-card"
    >
      <h2 className="section-title text-blue-700 dark:text-blue-300">Education</h2>
      <div className="space-y-4">
        {educationList.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-r from-amber-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-5 cursor-pointer transition-all duration-300 hover:shadow-md"
            onClick={() => toggleExpand(edu.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="text-amber-600 dark:text-amber-400 text-2xl">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.institution}</h3>
                  {edu.degree && <p className="text-blue-700 dark:text-blue-300 font-medium">{edu.degree}</p>}
                  {edu.major && <p className="text-sm text-blue-600 dark:text-blue-400">{edu.major}</p>}
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <FaCalendarAlt />
                    <span>{edu.period}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ml-2 ${
                      edu.status === 'Returning Student' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                      edu.status === 'Undergraduate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                      'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-amber-500 dark:text-amber-400">
                {expandedItems[edu.id] ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            <AnimatePresence>
              {expandedItems[edu.id] && edu.status && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-amber-200 dark:border-gray-600"
                >
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Status:</span> {edu.status}
                    {edu.status === 'Returning Student' && " - Currently pursuing degree in Network Security"}
                    {edu.status === 'Undergraduate' && " - Did not complete the program"}
                    {edu.status === 'Graduate' && " - Successfully completed secondary education"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;