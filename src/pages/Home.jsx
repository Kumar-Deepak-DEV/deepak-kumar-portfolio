/* eslint-disable no-unused-vars */
import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight font-heading">
            Hello there! <br />
            I&apos;m <span className="text-gradient">Deepak</span>
          </h1>
          
          <div className="text-accent-secondary text-xl md:text-3xl font-semibold mb-6 h-10 flex items-center justify-center md:justify-start">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'React Specialist',
                2000,
                'UI/UX Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg mx-auto md:mx-0">
            Crafting exceptional digital experiences with modern technologies.
            Specialized in React, Node.js, and creating scalable web applications that users love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold hover:-translate-y-1 transition-transform shadow-[0_0_20px_rgba(123,66,246,0.4)]"
            >
              View Work <ChevronRight size={20} />
            </a>
            <a
              href="https://drive.google.com/file/d/1EnJcjGKEK0swmRLuR2s2IKsMkPrfn9QN/view?usp=drive_link"
              download="Deepak_Resume.pdf"
              target='_blank'
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-accent-secondary text-white font-semibold hover:bg-accent-secondary/10 hover:-translate-y-1 transition-transform"
            >
              Download CV <Download size={20} />
            </a>
          </div>
        </motion.div>

        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] mx-auto z-10"
        >
          <div className="absolute inset-0 bg-accent-primary/30 blur-[60px] rounded-full animate-pulse"></div>
          <motion.img
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            src="https://avatars.githubusercontent.com/u/225372697?v=4"
            alt="Deepak Kumar"
            className="w-full h-full object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-2 border-accent-secondary relative z-20 shadow-2xl bg-bg-secondary"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
