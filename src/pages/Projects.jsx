/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { ExternalLink, Play, Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ItemCard from '../components/ItemCard';

const projectsData = [
  // {
  //   title: 'CodePrep',
  //   description: 'A collaborative task management tool with real-time updates, drag-and-drop interface, and team workspaces.',
  //   tags: ['React', 'Node.js','express','RESTful API','MongoDB'],
  //   image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600',
  //   demoVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // replace with actual
  //   photos: [
  //     'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
  //     'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  //   ],
  //   githubLink: 'https://github.com/Kumar-Deepak-DEV/codeprep',
  //   liveLink: '#'
  // },
  {
    title: 'Meal Explorer',
    description: 'Full-featured online page with lists of dishes along with their Ingredients and Procedure to prepare.',
    tags: ['React.js','Tailwind', 'RESTful API'],
    image: 'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443314/Screenshot_2026-04-17_215538_kjijbl.png',
    demoVideo: 'https://youtu.be/L_JS9L8pooQ?si=VWJeH8bvTPrj8Vt7',
    photos: [
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443314/Screenshot_2026-04-17_215538_kjijbl.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443314/Screenshot_2026-04-17_215546_rqgcon.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443318/Screenshot_2026-04-17_215549_yugdoy.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443315/Screenshot_2026-04-17_215601_hegant.png'
    ],
    githubLink: 'https://github.com/Kumar-Deepak-DEV/Meal_Explorer',
    liveLink: 'https://dk-meal-explorer.netlify.app/'
  },
  {
    title: 'SkillPath AI',
    description: "Web application that uses Gemini 2.5 pro to create a Road map for training a new hire.",
    tags: ['React', 'Google Gemini API', 'Express', 'MongoDB','Node.js', 'Tailwind'],
    image: 'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443309/Screenshot_2026-04-17_215221_f1yzp3.png',
    demoVideo: 'https://youtu.be/ehRkm4HP0QE?si=VNLJcTOMX05_X2X1',
    photos: [
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443309/Screenshot_2026-04-17_215221_f1yzp3.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443308/Screenshot_2026-04-17_215215_nwho8b.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443309/Screenshot_2026-04-17_215225_qqyid3.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443309/Screenshot_2026-04-17_215404_ywkiu6.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443313/Screenshot_2026-04-17_215501_d9r0xh.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443310/Screenshot_2026-04-17_215411_cdqlkf.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443312/Screenshot_2026-04-17_215434_mjzvab.png',

    ],
    githubLink: 'https://github.com/Kumar-Deepak-DEV/SkillMatrixAI',
    liveLink: 'https://skill-matrix-ai-iisc.vercel.app/'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio built with React and Vite, featuring glassmorphism and smooth animations.',
    tags: ['React', 'Vite', 'Tailwind', 'SEO'],
    image: 'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443520/Screenshot_2026-04-17_220146_fvccjv.png',
    demoVideo: '',
    photos: ['https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443520/Screenshot_2026-04-17_220146_fvccjv.png'],
    githubLink: 'https://github.com/Kumar-Deepak-DEV/deepak-kumar-portfolio',
    liveLink: 'https://deepak-kumar-cg.vercel.app/'
  },
  {
    title: 'LMS Clone',
    description: 'Modern Learning Management System clone featuring responsive UI, scalable component architecture, and seamless course-focused user experience built with React and Tailwind CSS.',
    tags: ['React', 'TailWind'],
    image: 'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776442899/Screenshot_2026-04-17_213302_vys1b0.png',
    demoVideo: '',
    photos: [
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776442899/Screenshot_2026-04-17_213302_vys1b0.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776442899/Screenshot_2026-04-17_214325_q5cjew.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776442899/Screenshot_2026-04-17_214328_oehalq.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776442899/Screenshot_2026-04-17_214332_w4s54i.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776442901/Screenshot_2026-04-17_214350_y5l6fy.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776442900/Screenshot_2026-04-17_214344_izwsyl.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776442900/Screenshot_2026-04-17_214339_zbnd4a.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776442901/Screenshot_2026-04-17_214355_flhpzc.png',
    ],
    githubLink: '#',
    liveLink: '#'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Projects = () => {
  const [videoOpen, setVideoOpen] = useState(null);
  const [activePhotos, setActivePhotos] = useState(null); // array of photos
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const getEmbedUrl = (url) => {
    if (!url) return '';
    let embedUrl = url;
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('youtube.com/watch')) {
      const urlParams = new URL(url).searchParams;
      const videoId = urlParams.get('v');
      if (videoId) {
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
    }
    return embedUrl;
  };

  // Close modals on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setVideoOpen(null);
        setActivePhotos(null);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const closeModals = () => {
    setVideoOpen(null);
    setActivePhotos(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    if (activePhotos) {
      setCurrentPhotoIndex((prev) => (prev + 1) % activePhotos.length);
    }
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    if (activePhotos) {
      setCurrentPhotoIndex((prev) => (prev - 1 + activePhotos.length) % activePhotos.length);
    }
  };

  return (
    <>
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 font-heading"
          >
            <span className="text-gradient">My Projects</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {projectsData.map((project, index) => {
              
              // Dynamically build the links array for each project
              const itemLinks = [];
              if (project.liveLink) {
                itemLinks.push({ href: project.liveLink, icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' });
              }
              if (project.githubLink) {
                itemLinks.push({ href: project.githubLink, icon: <FaGithub size={24} />, hoverColor: 'hover:bg-accent-secondary' });
              }
              if (project.demoVideo) {
                itemLinks.push({ 
                  onClick: () => setVideoOpen(project.demoVideo), 
                  icon: <Play size={24} />, 
                  hoverColor: 'hover:bg-green-500' // Distinct color for video
                });
              }
              if (project.photos && project.photos.length > 0) {
                itemLinks.push({ 
                  onClick: () => {
                    setActivePhotos(project.photos);
                    setCurrentPhotoIndex(0);
                  }, 
                  icon: <ImageIcon size={24} />, 
                  hoverColor: 'hover:bg-blue-500' // Distinct color for images
                });
              }

              // Clone project object and attach generated links
              const projectWithLinks = {
                ...project,
                links: itemLinks
              };

              return <ItemCard key={index} item={projectWithLinks} />;
            })}
          </motion.div>
        </div>
      </section>

      {/* Video Modal Open */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            key="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            style={{ background: 'rgba(2, 6, 23, 0.85)', backdropFilter: 'blur(12px)' }}
            onClick={closeModals}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden glass-card shadow-2xl bg-black aspect-video"
            >
              <button
                onClick={closeModals}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X size={24} />
              </button>
              <iframe
                src={getEmbedUrl(videoOpen)}
                title="Demo Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photo Gallery Modal */}
      <AnimatePresence>
        {activePhotos && activePhotos.length > 0 && (
          <motion.div
            key="photo-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            style={{ background: 'rgba(2, 6, 23, 0.9)', backdropFilter: 'blur(12px)' }}
            onClick={closeModals}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-black/50 border border-white/10"
            >
              <button
                onClick={closeModals}
                className="absolute top-4 right-4 z-[110] p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPhotoIndex}
                  src={activePhotos[currentPhotoIndex]}
                  alt="Project Screenshot"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>

              {/* Controls */}
              {activePhotos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}

              {/* Dots */}
              {activePhotos.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10 p-2 rounded-full bg-black/40 backdrop-blur-md">
                  {activePhotos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPhotoIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        i === currentPhotoIndex
                          ? 'bg-accent-primary w-6'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
