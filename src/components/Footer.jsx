import React from 'react';
import { Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-bg-secondary/50 backdrop-blur-md pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-16">
        
        <div className="flex flex-col gap-6">
          <a href="#home" className="flex items-center gap-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-secondary to-accent-primary w-fit">
            <Code2 className="text-accent-secondary" size={32} />
            <span>Deepak.Dev</span>
          </a>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            Crafting elegant, functional, and user-centric digital experiences. Let's create something extraordinary together.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/Kumar-Deepak-DEV/" className="p-3 bg-white/5 rounded-full hover:bg-accent-primary hover:text-white text-gray-400 transition-all border border-white/10">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/kumar-deepak-cg/" className="p-3 bg-white/5 rounded-full hover:bg-[#0077b5] hover:text-white text-gray-400 transition-all border border-white/10">
              <FaLinkedin size={20} />
            </a>
            <a href="https://x.com/DeepakKumarCgS" className="p-3 bg-white/5 rounded-full hover:bg-[#1DA1F2] hover:text-white text-gray-400 transition-all border border-white/10">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.youtube.com/@qbitCoderz" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[#FF0000] hover:text-white text-gray-400 transition-all border border-white/10">
              <FaYoutube size={20} />
            </a>
            <a href="https://leetcode.com/u/Dk-Kumar/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[#FFA116] hover:text-white text-gray-400 transition-all border border-white/10">
              <SiLeetcode size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-6 tracking-wide">QUICK LINKS</h4>
          <ul className="flex flex-col gap-4">
            <li><a href="#home" className="text-gray-400 hover:text-accent-secondary transition-colors">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-accent-secondary transition-colors">About</a></li>
            <li><a href="#skills" className="text-gray-400 hover:text-accent-secondary transition-colors">Skills</a></li>
            <li><a href="#projects" className="text-gray-400 hover:text-accent-secondary transition-colors">Projects</a></li>
          </ul>
        </div>

        <div>
           <h4 className="text-white font-bold text-lg mb-6 tracking-wide">LEGAL</h4>
          <ul className="flex flex-col gap-4">
            <li><a href="#" className="text-gray-400 hover:text-accent-secondary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-accent-secondary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-gray-500 font-medium">
          &copy; {new Date().getFullYear()} Deepak Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;