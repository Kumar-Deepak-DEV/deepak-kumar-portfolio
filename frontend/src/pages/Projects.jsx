/* eslint-disable no-unused-vars */
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ItemCard from '../components/ItemCard';

const projects = [
  {
    title: 'CodePrep',
    description: 'A collaborative task management tool with real-time updates, drag-and-drop interface, and team workspaces.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600',
    links: [
      { href: '#', icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' },
      { href: '#', icon: <FaGithub size={24} />, hoverColor: 'hover:bg-accent-secondary' }
    ]
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with secure payments, inventory management, and analytics dashboard.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600',
    links: [
      { href: '#', icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' },
      { href: '#', icon: <FaGithub size={24} />, hoverColor: 'hover:bg-accent-secondary' }
    ]
  },
  {
    title: 'SkillPath AI',
    description: "Web application that uses OpenAI's DALL-E API to generate unique images from text descriptions.",
    tags: ['React', 'OpenAI API', 'Express', 'AWS'],
    image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=600',
    links: [
      { href: '#', icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' },
      { href: '#', icon: <FaGithub size={24} />, hoverColor: 'hover:bg-accent-secondary' }
    ]
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio built with React and Vite, featuring glassmorphism and smooth animations.',
    tags: ['React', 'Vite', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
    links: [
      { href: '#', icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' },
      { href: '#', icon: <FaGithub size={24} />, hoverColor: 'hover:bg-accent-secondary' }
    ]
  },
  {
    title: 'LMS Clone',
    description: 'Accurate real-time weather forecasting application using OpenWeatherMap API and dynamic icons.',
    tags: ['JavaScript', 'API', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=600',
    links: [
      { href: '#', icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' },
      { href: '#', icon: <FaGithub size={24} />, hoverColor: 'hover:bg-accent-secondary' }
    ]
  },
  {
    title: 'Social Media App',
    description: 'A social networking platform with post creation, likes, comments, and real-time notifications.',
    tags: ['React', 'Firebase', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600',
    links: [
      { href: '#', icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' },
      { href: '#', icon: <FaGithub size={24} />, hoverColor: 'hover:bg-accent-secondary' }
    ]
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
  return (
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
          {projects.map((project, index) => (
            <ItemCard key={index} item={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
