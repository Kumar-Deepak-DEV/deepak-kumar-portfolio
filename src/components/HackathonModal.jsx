/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const HackathonModal = ({ hackathon, onClose }) => {
  const [activePhoto, setActivePhoto] = useState(0);
  const photos = hackathon.photos || [];

  // Close modal on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const prevPhoto = () => setActivePhoto((p) => (p - 1 + photos.length) % photos.length);
  const nextPhoto = () => setActivePhoto((p) => (p + 1) % photos.length);

  const getEmbedUrl = (url) => {
    if (!url) return '';
    let embedUrl = url;
    // YouTube short link
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    // YouTube full link
    } else if (url.includes('youtube.com/watch')) {
      const urlParams = new URL(url).searchParams;
      const videoId = urlParams.get('v');
      if (videoId) {
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
    // Google Drive: /file/d/FILE_ID/view or /open?id=FILE_ID
    } else if (url.includes('drive.google.com')) {
      const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (fileIdMatch) {
        embedUrl = `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
      } else {
        const openIdMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
        if (openIdMatch) {
          embedUrl = `https://drive.google.com/file/d/${openIdMatch[1]}/preview`;
        }
      }
    }
    return embedUrl;
  };

  return (
    // Backdrop
    <motion.div
      key="hackathon-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(2, 6, 23, 0.85)', backdropFilter: 'blur(12px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Modal Card */}
      <motion.div
        key="hackathon-modal-card"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-6xl h-[90vh] md:h-[85vh] flex flex-col md:flex-row shadow-2xl rounded-3xl overflow-hidden border border-white/10"
        style={{
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {/* Close button - absolute to the modal */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-[110] p-2 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md transition-colors shadow-lg"
        >
          <X size={20} />
        </button>

        {/* Left column: Photo Gallery */}
        {photos.length > 0 && (
          <div className="relative w-full md:w-[50%] lg:w-[55%] h-64 md:h-full shrink-0 bg-black overflow-hidden flex flex-col">
            <div className="relative flex-1 w-full h-full">
              <motion.img
                key={activePhoto}
                src={photos[activePhoto]}
                alt={`Photo ${activePhoto + 1}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full object-contain md:object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Prev / Next */}
              {photos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}

              {/* Dots for mobile */}
              {photos.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex md:hidden gap-2">
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhoto(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === activePhoto ? 'bg-accent-secondary w-5' : 'bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail strip (Desktop only) */}
            {photos.length > 1 && (
              <div className="hidden md:flex gap-2 p-4 bg-black/50 backdrop-blur-md overflow-x-auto h-24 shrink-0 border-t border-white/5">
                {photos.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(i)}
                    className={`shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                      i === activePhoto ? 'border-accent-secondary scale-105' : 'border-white/10 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={photo} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Right column: Content (Scrollable) */}
        <div className="flex-1 w-full p-6 md:p-8 overflow-y-auto custom-scrollbar">
          {/* Header */}
          <div className="flex flex-col gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-heading leading-tight pr-8">
              {hackathon.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              {hackathon.date && (
                <span className="text-gray-400 text-sm font-medium">{hackathon.date}</span>
              )}
              {hackathon.result && (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-accent-secondary to-accent-primary text-white shadow">
                  {hackathon.result}
                </span>
              )}
            </div>
          </div>

          {/* Links Row */}
          {(hackathon.githubLink || hackathon.liveLink) && (
            <div className="flex flex-wrap gap-4 mb-8">
              {hackathon.githubLink && (
                <a
                  href={hackathon.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white font-medium transition-all"
                >
                  <FaGithub size={18} />
                  View Source
                </a>
              )}
              {hackathon.liveLink && (
                <a
                  href={hackathon.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-primary/20 hover:bg-accent-primary/40 border border-accent-primary/30 rounded-xl text-white font-medium transition-all shadow-[0_0_15px_rgba(123,66,246,0.3)]"
                >
                  <ExternalLink size={18} className="text-accent-primary" />
                  Live Demo
                </a>
              )}
            </div>
          )}

          {/* Description */}
          <div className="mb-8">
            <h4 className="text-white font-semibold text-lg mb-2">About the Project</h4>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {hackathon.description}
            </p>
          </div>

          {/* Tools Used */}
          {hackathon.tools && hackathon.tools.length > 0 && (
            <div className="mb-8">
              <h4 className="text-white font-semibold text-lg mb-3">🛠 Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {hackathon.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm font-semibold px-4 py-1.5 bg-accent-primary/10 text-accent-secondary rounded-full border border-accent-secondary/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Demo Video */}
          {hackathon.demoVideo && (
            <div className="mt-auto pt-4 border-t border-white/5">
              <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <Play size={18} className="text-accent-primary" /> Demo Video
              </h4>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video w-full shadow-lg">
                <iframe
                  src={getEmbedUrl(hackathon.demoVideo)}
                  title={`${hackathon.title} demo`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HackathonModal;
