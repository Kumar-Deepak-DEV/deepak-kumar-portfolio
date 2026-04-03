import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HackathonModal from '../components/HackathonModal';

const hackathons = [
  {
    id: 1,
    title: 'Odoo x GUJ-VID hackathon',
    coverImage: 'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443317/Screenshot_2026-04-17_215635_irbr65.png',
    photos: [
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443316/Screenshot_2026-04-17_215621_wmtptu.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443317/Screenshot_2026-04-17_215629_myjivx.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443318/Screenshot_2026-04-17_215704_vm2frb.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443319/Screenshot_2026-04-17_215724_kphoma.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443320/Screenshot_2026-04-17_215732_ca06im.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443321/Screenshot_2026-04-17_215758_y9nrvk.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443321/Screenshot_2026-04-17_215752_xya9do.png'
    ],
    description:
      'Developed a role-based transportation management platform during the Odoo x GUJ-VID Hackathon featuring a shared dashboard for Fleet Manager, Dispatcher, Safety Officer, and Financial Analyst roles to streamline fleet tracking, dispatch operations, compliance management, expense monitoring, and logistics optimization.',
    tools: ['React', 'Node.js', 'MYSQL','CSS3','express'],
    demoVideo: 'https://drive.google.com/file/d/1xhzgMTLWczzVwdj-kGe09JIeiJbPIJEe/view',
    githubLink: 'https://github.com/Kumar-Deepak-DEV/odoo-Guj-Vid',
    liveLink: 'https://odoo-guj-vid.vercel.app/',
    result: '',
    date: 'January 2026',
  },
  {
    id: 2,
    title: 'ArtPArk CodeForge Hackathon',
    coverImage: 'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443309/Screenshot_2026-04-17_215221_f1yzp3.png',
    photos: [
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443309/Screenshot_2026-04-17_215221_f1yzp3.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443308/Screenshot_2026-04-17_215215_nwho8b.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443309/Screenshot_2026-04-17_215225_qqyid3.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443309/Screenshot_2026-04-17_215404_ywkiu6.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443313/Screenshot_2026-04-17_215501_d9r0xh.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443310/Screenshot_2026-04-17_215411_cdqlkf.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443312/Screenshot_2026-04-17_215434_mjzvab.png',

    ],
    description:
      'Built a real-time collaborative coding platform with integrated AI code review, voice chat, and pair programming tools — all within a 24-hour sprint. The platform supports multiple languages and auto-saves sessions to the cloud.',
    tools: ['React', 'Google Gemini API', 'Express', 'MongoDB','Node.js', 'Tailwind'],
    demoVideo: 'https://youtu.be/ehRkm4HP0QE?si=7YsDSlIljTVCpSb_',
    githubLink: 'https://github.com/Kumar-Deepak-DEV/SkillMatrixAI',
    liveLink: 'https://skill-matrix-ai-iisc.vercel.app/',
    result: '',
    date: 'February 2026',
  },
  {
    id: 3,
    title: 'Frontend Odyssey Hackathon',
    coverImage: 'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443477/Screenshot_2026-04-17_215950_gzvbod.png',
    photos: [
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443477/Screenshot_2026-04-17_215950_gzvbod.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443478/Screenshot_2026-04-17_220002_ggofaj.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443480/Screenshot_2026-04-17_220025_mt42dv.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443479/Screenshot_2026-04-17_220015_rdkd5x.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443480/Screenshot_2026-04-17_220041_cenenf.png',
      'https://res.cloudinary.com/dbzg0wt5y/image/upload/v1776443481/Screenshot_2026-04-17_220100_uhozhz.png',
    ],
    description:
      'Developed an IoT-powered smart campus solution that monitors energy usage, optimizes classroom allocation in real-time, and sends automated alerts for maintenance. The dashboard provides actionable insights for college administrators.',
    tools: ['React', 'Tailwind', 'framer motion'],
    demoVideo: 'https://youtu.be/YLq38QRnJfo?si=C17pAjNAqFcNRQhW',
    githubLink: 'https://github.com/Kumar-Deepak-DEV/odyssey',
    liveLink: 'https://aether-narrative.vercel.app/',
    result: '',
    date: 'February 2024',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const resultColors = {
  'Winner 🏆': 'from-yellow-400 to-orange-400',
  '2nd Place': 'from-slate-300 to-slate-400',
  'Finalist': 'from-accent-secondary to-accent-primary',
};

const Hackathons = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="hackathons" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              <span className="text-gradient">Hackathons</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              48-hour sprints, big ideas, and real solutions — here are the hackathons I've competed in.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {hackathons.map((hack) => (
              <motion.div
                key={hack.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelected(hack)}
                className="glass-card rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-accent-primary/50 transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={hack.coverImage}
                    alt={hack.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${resultColors[hack.result] || 'from-accent-secondary to-accent-primary'} text-white shadow-lg`}>
                    {hack.result}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg">
                      View Details →
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white leading-snug">{hack.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{hack.date}</p>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{hack.description}</p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {hack.tools.slice(0, 4).map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-semibold px-3 py-1 bg-accent-primary/10 text-accent-secondary rounded-full border border-accent-secondary/20"
                      >
                        {tool}
                      </span>
                    ))}
                    {hack.tools.length > 4 && (
                      <span className="text-xs font-semibold px-3 py-1 bg-white/5 text-gray-400 rounded-full border border-white/10">
                        +{hack.tools.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <HackathonModal hackathon={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Hackathons;
