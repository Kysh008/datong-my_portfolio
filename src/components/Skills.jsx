import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaNetworkWired, FaLock, FaChartLine, FaComments, FaSpinner } from 'react-icons/fa';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]);
  
  // Dynamically load skills data
  useEffect(() => {
    // Simulate loading skills from an API
    const loadSkills = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
      setSkills([
        { name: "Teamwork", icon: <FaUsers />, level: 90, color: "bg-blue-500", description: "Effective collaboration and initiative in team settings", category: "Soft Skills" },
        { name: "Communication", icon: <FaComments />, level: 85, color: "bg-amber-500", description: "Clear verbal and written communication skills", category: "Soft Skills" },
        { name: "Network Security", icon: <FaLock />, level: 75, color: "bg-blue-500", description: "Understanding of security protocols and best practices", category: "Technical" },
        { name: "Networking", icon: <FaNetworkWired />, level: 75, color: "bg-amber-500", description: "Network configuration and troubleshooting", category: "Technical" },
        { name: "Critical Thinking", icon: <FaChartLine />, level: 85, color: "bg-blue-500", description: "Analytical thinking and solution development", category: "Soft Skills" }
      ]);
      setLoading(false);
    };
    
    loadSkills();
  }, []);
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
      className="section-card"
    >
      <h2 className="section-title text-blue-700 dark:text-blue-300">Skills</h2>
      
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <FaSpinner className="animate-spin text-4xl text-blue-500" />
          <span className="ml-3 text-gray-600 dark:text-gray-400">Loading skills...</span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-600 dark:text-blue-400 text-xl">
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-xs text-gray-400 ml-2">{skill.category}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-auto">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`${skill.color} h-3 rounded-full relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30 animate-pulse"></div>
                  </motion.div>
                </div>
                {activeSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute z-10 mt-2 p-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg"
                    style={{ top: '100%', left: 0 }}
                  >
                    {skill.description}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Dynamic stats */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
              <FaUsers className="text-blue-500" />
              Additional Strengths
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Adaptability", "Quick Learner", "Attention to Detail", "Time Management"].map((strength, idx) => (
                <motion.span
                  key={strength}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="skill-tag"
                  whileHover={{ scale: 1.05 }}
                >
                  {strength}
                </motion.span>
              ))}
            </div>
          </div>
        </>
      )}
    </motion.section>
  );
};

export default Skills;