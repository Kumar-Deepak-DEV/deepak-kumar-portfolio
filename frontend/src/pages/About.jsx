/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Sparkles, BookOpen, Quote, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Discover</span>
            <span className="text-gradient ml-3">Who I Am</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="glass-card h-full min-h-[400px] lg:min-h-full rounded-[2rem] p-3 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] border border-white/10 group-hover:border-accent-primary/30">
              {/* Overlay for Name Reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              
              </div>
              <video src="https://res.cloudinary.com/dzeyeqk8e/video/upload/v1775119143/video_ulz0kk.mp4" autoPlay loop muted playsInline></video>
              
              
              {/* Name Details appearing on hover */}
              <div className="absolute bottom-8 left-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-bold text-2xl flex items-center gap-2">
                  <Sparkles className="text-accent-secondary" /> Deepak Kumar
                </p>
                <p className="text-gray-300 font-medium text-sm mt-1 ml-8">B.Tech Student &amp; Web Developer</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column: Bento Information Grid */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Main Intro Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-colors"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Hello there! I'm a passionate builder.
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                I am a first-year B.Tech student with an obsession for building scalable, user-focused web applications. I thrive on diving deep into problems, architecting robust end-to-end projects, and writing code that is as clean as it is efficient.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm font-medium text-gray-300 flex items-center gap-2 transition-all hover:bg-white/10">
                  <CheckCircle2 size={16} className="text-accent-primary" /> Problem Solver
                </span>
                <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm font-medium text-gray-300 flex items-center gap-2 transition-all hover:bg-white/10">
                  <CheckCircle2 size={16} className="text-accent-primary" /> Clean Code Advocate
                </span>
                <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm font-medium text-gray-300 flex items-center gap-2 transition-all hover:bg-white/10">
                  <CheckCircle2 size={16} className="text-accent-primary" /> Fast Learner
                </span>
              </div>
            </motion.div>

            {/* Split Cards: Goals & Beyond */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Goal Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="glass-card p-8 rounded-3xl relative overflow-hidden group border border-white/5 hover:border-accent-primary/30 transition-colors"
              >
                <div className="absolute top-0 right-0 -m-6 w-24 h-24 bg-accent-primary/20 rounded-full blur-2xl group-hover:bg-accent-primary/40 transition-colors"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(123,66,246,0.5)] transform group-hover:-translate-y-1 transition-transform">
                  <Target size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 relative z-10">My Mission</h4>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  To master complex full-stack architectures, actively contribute to meaningful open-source projects, and build real-world applications that create a genuine impact.
                </p>
              </motion.div>

              {/* Beyond Coding Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="glass-card p-8 rounded-3xl relative overflow-hidden group border border-white/5 hover:border-accent-secondary/30 transition-colors"
              >
                <div className="absolute top-0 left-0 -m-6 w-24 h-24 bg-accent-secondary/20 rounded-full blur-2xl group-hover:bg-accent-secondary/40 transition-colors"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-accent-secondary to-accent-primary rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(236,72,153,0.5)] transform group-hover:-translate-y-1 transition-transform">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 relative z-10">Beyond The Screen</h4>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  When I am not debugging loops or centering divs, you can usually find me heavily engrossed in reading a good book or exploring new creative design trends.
                </p>
              </motion.div>

            </div>

            {/* Quote Spanning Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="glass-card p-8 rounded-3xl border-l-4 border-l-accent-primary flex gap-6 items-center relative overflow-hidden group hover:bg-white/5 transition-colors"
            >
              <Quote size={40} className="text-white/10 absolute -left-2 -top-2 transform -rotate-12 transition-transform group-hover:scale-110" />
              <div className="relative z-10 flex-1 pl-6">
                <p className="text-xl md:text-2xl font-medium text-gray-300 italic">
                  "Innovation isn’t just about coding; it’s about connecting people, ideas, and possibilities."
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
