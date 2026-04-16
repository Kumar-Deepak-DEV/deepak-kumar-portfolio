import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import ItemCard from '../components/ItemCard';
// import photo1 from "../assets/quiz1.jpg"
// import photo2 from "../assets/c.jpg"
// import photo3 from "../assets/cpp.jpg"
// import photo4 from "../assets/web.jpg"
// import photo5 from "../assets/cpp-inter.jpg"
// import photo6 from "../assets/codeforge.jpg"
// import photo7 from "../assets/protodash.jpg"
import photo from "../assets/phots"

const certificates = [
  {
    title: 'National CodeFest Achievement',
    description: 'Awarded for outstanding performance in a nationwide competitive coding and mental mathematics challenge.',
    tags: ['Competitive Coding', 'Mental Maths', 'NIT Durgapur'],
    image: photo[2],
    links: [
      { href: '#', icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' }
    ]
  },
  {
    title: 'C Programming Certification',
    description: 'Comprehensive certification covering core C language syntax, memory management, and low-level programming.',
    tags: ['C Language', 'Sololearn'],
    image: photo[5],
    links: [
      { href: '#', icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' }
    ]
  },
  {
    title: 'C++ programming Development',
    description: '.',
    tags: ['C++', 'Sololearn'],
    image: photo[4],
    links: [
      { href: '#', icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' }
    ]
  },
  {
    title: 'Introductional Web Development',
    description: 'Mastery of modern web technologies, building responsive user interfaces with HTML, CSS, and interactive JavaScript.',
    tags: ['HTML5', 'CSS3', 'JavaScript',"Sololearn"],
    image: photo[6],
    links: [
      { href: '#', icon: <ExternalLink size={24} />, hoverColor: 'hover:bg-accent-primary' }
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
