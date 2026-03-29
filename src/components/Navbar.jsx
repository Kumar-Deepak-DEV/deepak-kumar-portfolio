/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Home, User, Cpu, GraduationCap, Briefcase, Award, Mail, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Hackathons', href: '#hackathons', icon: Trophy },
    { name: 'Certificates', href: '#certificates', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const navClass = scrolled
    ? 'py-3 glass-card shadow-lg'
    : 'py-5 bg-transparent border-b border-transparent';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-secondary to-accent-primary"
        >
          <Code2 className="text-accent-secondary" size={32} />
          <span>Deepak.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8">
          {navLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <a
                key={idx}
                href={link.href}
                className="relative group p-2 text-gray-300 hover:text-accent-primary transition-colors flex items-center justify-center cursor-pointer"
              >
                <motion.div
                  whileHover={{ y: -3, scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.div>
                
                {/* Tooltip */}
                <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 translate-y-2 group-hover:translate-y-0 px-3 py-1.5 bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-[0_0_15px_rgba(123,66,246,0.5)] z-50">
                  {link.name}
                  {/* Tooltip Arrow */}
                  <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/90 border-t border-l border-white/20 rotate-45"></span>
                </span>
              </a>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white hover:text-accent-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-6 w-48 mt-2 glass-card rounded-xl p-4 flex flex-col gap-4 shadow-xl md:hidden"
          >
            {navLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-white font-medium flex items-center gap-3 transition-colors"
                >
                  <Icon size={20} className="text-accent-primary" />
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
