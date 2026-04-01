import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import ItemCard from '../components/ItemCard';
import photo from "../assets/phots"

const certificates = [
  {
    title: 'National CodeFest Achievement',
    description: 'Awarded for outstanding performance in a nationwide competitive coding and mental mathematics challenge.',
    tags: ['Competitive Coding', 'Mental Maths', 'NIT Durgapur'],
    image: photo[2],
    links: [
      { href: photo[2], icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' }
    ]
  },
  {
    title: 'ArtPark CodeForge Hackathon',
    description: 'Certified in full-stack web development with demonstrated proficiency in building modern, scalable applications using industry-standard technologies and best practices.',
    tags: ['Competitive Coding', 'Full Stack', 'AI Integration', 'IISc Bengaluru'],
    image: photo[1],
    links: [
      { href: photo[1], icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' }
    ]
  },
  {
    title: 'JavaScript Intermediate',
    description: 'Certified in JavaScript DOM manipulation with hands-on experience building interactive, dynamic web interfaces through event handling, element control, and real-time UI updates.',
    tags: ['JavaScript', 'Sololearn'],
    image: photo[7],
    links: [
      { href: photo[7], icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' }
    ]
  },
  {
    title: 'C ++ Intermediate ',
    description: 'Certified in Intermediate C++ programming with strong understanding of object-oriented concepts, STL, memory management, and efficient problem-solving techniques.',
    tags: ['C++', 'Sololearn',],
    image: photo[2],
    links: [
      { href: photo[2], icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' }
    ]
  },
  {
    title: 'C Programming Certification',
    description: 'Comprehensive certification covering core C language syntax, memory management, and low-level programming.',
    tags: ['C Language', 'Sololearn'],
    image: photo[5],
    links: [
      { href: photo[5], icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' }
    ]
  },
  {
    title: 'C++ Introduction',
    description: 'Certified in C++ programming fundamentals with strong command of syntax, problem-solving logic, object-oriented concepts, and core programming principles.',
    tags: ['C++', 'Sololearn'],
    image: photo[4],
    links: [
      { href: photo[4], icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' }
    ]
  },
  {
    title: 'Introductional Web Development',
    description: 'Mastery of modern web technologies, building responsive user interfaces with HTML, CSS, and interactive JavaScript.',
    tags: ['HTML5', 'CSS3', 'JavaScript',"Sololearn"],
    image: photo[6],
    links: [
      { href: photo[6], icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' }
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

const Certificates = () => {
  return (
    <section id="certificates" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 font-heading"
        >
          <span className="text-gradient">My Certificates</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {certificates.map((cert, index) => (
            <ItemCard key={index} item={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
