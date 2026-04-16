/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Tools",
    skills: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', shadow: 'rgba(247,223,30,0.5)' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', shadow: 'rgba(97,218,251,0.5)' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', shadow: 'rgba(255,255,255,0.4)' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', shadow: 'rgba(227,79,38,0.5)' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', shadow: 'rgba(21,114,182,0.5)' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', shadow: 'rgba(56,189,248,0.5)' },
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', shadow: 'rgba(104,160,99,0.5)' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', shadow: 'rgba(255,255,255,0.4)' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', shadow: 'rgba(71,162,72,0.5)' },
    ]
  },
  {
    title: "Tools & Version Control",
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', shadow: 'rgba(240,80,50,0.5)' },
      // { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', shadow: 'rgba(0,122,204,0.5)' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', shadow: 'rgba(255,108,55,0.5)' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', shadow: 'rgba(242,78,30,0.5)' },
      { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg', shadow: 'rgba(0,199,183,0.5)' },
      { name: 'Vercel', icon: 'https://skillicons.dev/icons?i=vercel', shadow: 'rgba(255,255,255,0.4)' },
      { name: 'Render', icon: 'https://avatars.githubusercontent.com/u/36423973?s=200&v=4', shadow: 'rgba(45,212,191,0.5)' },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: 'spring', 
      damping: 15, 
      stiffness: 100 
    } 
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Technical
            </span>
            <span className="text-gradient ml-3">Arsenal</span>
          </motion.h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A comprehensive toolkit I use to build robust, scalable, and visually stunning digital experiences.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="flex flex-col items-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 relative flex justify-center"
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white relative z-10 py-2 px-6">
                  {category.title}
                </h3>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent blur-md"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative group cursor-pointer"
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.15,
                      }}
                      className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-3xl glass-card flex flex-col items-center justify-center gap-3 border border-white/5 group-hover:border-white/20 transition-all duration-500 overflow-hidden relative z-10"
                    >
                      {/* Dynamic Shadow on Hover based on Icon Color */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl z-0 pointer-events-none"
                        style={{ background: `radial-gradient(circle at center, ${skill.shadow} 0%, transparent 60%)` }}
                      ></div>
      
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 relative z-10 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain filter drop-shadow-lg"
                        />
                      </div>
                      
                      <p className="font-semibold text-xs md:text-sm text-gray-400 group-hover:text-white transition-colors duration-300 z-10 text-center px-2">
                        {skill.name}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
