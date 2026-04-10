import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHotel, FaBriefcase, FaCalendarAlt, FaChevronDown, FaChevronUp, FaTrophy, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [activeTimeline, setActiveTimeline] = useState(null);
  const [timelineProgress, setTimelineProgress] = useState(0);
  
  const experiences = [
    {
      id: 1,
      title: "OJT/Work Immersion",
      company: "Venus Parkview Hotel",
      date: "Nov 14 - 27, 2017",
      year: 2017,
      type: "Housekeeping",
      description: "Gained hands-on experience in housekeeping operations, maintaining cleanliness standards, and providing excellent service in a hotel environment.",
      icon: <FaHotel />,
      location: "Baguio City",
      duration: "2 weeks"
    },
    {
      id: 2,
      title: "NCII Certification",
      company: "Housekeeping",
      date: "2017",
      year: 2017,
      type: "Certification",
      description: "Obtained National Certificate II in Housekeeping, demonstrating proficiency in housekeeping procedures and standards.",
      icon: <FaBriefcase />,
      location: "TESDA",
      duration: "Certified"
    },
    {
      id: 3,
      title: "Star Speaker Award",
      company: "Award Recognition",
      date: "October 10, 2019",
      year: 2019,
      type: "Award",
      description: "Recognized for outstanding public speaking and communication skills. Demonstrated excellence in delivering engaging presentations and effective audience engagement.",
      icon: <FaTrophy />,
      location: "School Event",
      duration: "Achievement"
    },
    {
      id: 4,
      title: "Jobstart Philippines Program",
      company: "Jobstart Philippines",
      date: "August 2021",
      year: 2021,
      type: "Training",
      description: "Completed comprehensive job readiness training program focused on employability skills, career development, and workplace professionalism.",
      icon: <FaBriefcase />,
      location: "Online/Philippines",
      duration: "1 month"
    }
  ];
  
  // Sort experiences by year in ascending order (oldest to newest)
  const sortedExperiences = [...experiences].sort((a, b) => a.year - b.year);
  
  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    setActiveTimeline(id);
  };
  
  // Calculate timeline progress
  useEffect(() => {
    const interval = setInterval(() => {
      setTimelineProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="section-card"
    >
      <h2 className="section-title text-blue-700 dark:text-blue-300">Experience & Achievements Timeline</h2>
      
      {/* Timeline Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>Career Journey (Ascending Order)</span>
          <span className="flex items-center gap-1"><FaClock className="text-xs" /> Interactive Timeline</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div 
            className="bg-gradient-to-r from-blue-500 to-amber-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${timelineProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
      
      {/* Interactive Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-amber-400 to-blue-400 dark:from-blue-600 dark:via-amber-600 dark:to-blue-600 hidden md:block"></div>
        
        <div className="space-y-6">
          {sortedExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-0 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-5 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-amber-400 dark:from-blue-500 dark:to-amber-500 flex items-center justify-center text-white shadow-lg z-10 hidden md:flex">
                <span className="text-xs font-bold">{index + 1}</span>
              </div>
              
              {/* Year Badge */}
              <div className="absolute -left-2 top-5 -translate-x-full hidden md:block">
                <span className="text-xs font-bold bg-amber-500 text-white px-2 py-1 rounded-full">
                  {exp.year}
                </span>
              </div>
              
              {/* Card */}
              <div 
                className={`bg-gradient-to-r from-amber-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-5 cursor-pointer transition-all duration-300 hover:shadow-lg ml-0 md:ml-4 ${
                  activeTimeline === exp.id ? 'ring-2 ring-blue-400 dark:ring-blue-500' : ''
                }`}
                onClick={() => toggleExpand(exp.id)}
              >
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="text-amber-600 dark:text-amber-400 text-2xl flex-shrink-0">
                      {exp.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                        <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full">
                          {exp.year}
                        </span>
                      </div>
                      <p className="text-amber-700 dark:text-amber-300 font-medium">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-xs" />
                          <span>{exp.date}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-xs" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                        <span className="px-2 py-1 bg-blue-100 dark:bg-gray-600 rounded-full text-xs">
                          {exp.type}
                        </span>
                        {exp.duration && (
                          <span className="px-2 py-1 bg-amber-100 dark:bg-gray-600 rounded-full text-xs">
                            {exp.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-amber-500 dark:text-amber-400 flex-shrink-0">
                    {expandedItems[exp.id] ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedItems[exp.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-amber-200 dark:border-gray-600"
                    >
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="mt-3 pt-2 text-sm text-blue-600 dark:text-blue-400">
                        <span className="font-semibold">✨ Key Takeaway:</span> {exp.type === 'Award' ? 'Recognition for excellence' : exp.type === 'Certification' ? 'Professional certification achieved' : 'Hands-on practical experience gained'}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Interactive Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 p-4 bg-gradient-to-r from-blue-100 to-amber-100 dark:from-gray-800 dark:to-gray-700 rounded-xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{sortedExperiences.length}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Experiences</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">4</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Achievements</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">2017</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Start Year</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">2021</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Latest Year</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;