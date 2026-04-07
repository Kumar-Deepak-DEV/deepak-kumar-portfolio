/* eslint-disable no-unused-vars */
import React from 'react';
import { GraduationCap, Code, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    title: 'Bachelor of Engineering in Computer Engineering',
    institution: 'Swaminarayan University',
    period: '2025 - 2029 | Currently in 2nd Semester',
    marks: '10 CGPA',
    icon: GraduationCap,
    gradient: 'from-accent-primary to-accent-secondary',
  },
  {
    title: 'Full Stack Web Development',
    institution: 'CodingGita',
    period: '2025 - Present',
    marks: '',
    icon: Code,
    gradient: 'from-accent-secondary to-accent-primary',
  },
  {
    title: 'Higher Secondary Education',
    institution: 'A. N. College',
    period: '2022 - 2024',
    marks: '83.2% Marks',
    icon: BookOpen,
    gradient: 'from-blue-500 to-accent-primary',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50, y: 30 },
  visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const Education = () => {
  return (
    <section id="education" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 font-heading"
        >
          <span className="text-gradient">Education &amp; Journey</span>
        </motion.h2>

        <div className="relative">
          {/* Animated Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-[17px] md:left-[25px] top-6 bottom-0 w-1 bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent rounded-full z-0"
          ></motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col gap-12"
          >
            {educationData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative pl-12 md:pl-20">
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.3), type: "spring" }}
                    className="absolute left-[11px] md:left-[17px] top-12 md:top-14 w-4 md:w-5 h-4 md:h-5 rounded-full bg-accent-secondary shadow-[0_0_15px_rgba(236,72,153,0.8)] z-10"
                  >
                    <div className="absolute inset-0 bg-accent-secondary rounded-full animate-ping opacity-60"></div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-8 md:p-10 rounded-3xl flex flex-col md:flex-row gap-6 md:gap-8 items-start relative overflow-hidden group border border-white/5 hover:border-accent-primary/30 transition-colors duration-300"
                  >
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className={`bg-gradient-to-br ${item.gradient} p-5 rounded-2xl text-white shadow-lg z-10 shrink-0 transform group-hover:-translate-y-2 transition-transform duration-300`}>
                      <Icon size={36} className="md:w-10 md:h-10" />
                    </div>
                    
                    <div className="z-10 flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xl text-accent-secondary font-medium mb-4">{item.institution}</p>
                      
                      <div className="flex flex-wrap gap-3">
                        <span className="text-sm font-semibold text-gray-300 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/5">
                          {item.period}
                        </span>
                        {item.marks && (
                          <span className="text-sm font-semibold text-white bg-gradient-to-r from-accent-primary to-accent-secondary px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(123,66,246,0.3)] border border-white/10">
                            {item.marks}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
