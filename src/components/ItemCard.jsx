/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const ItemCard = ({ item }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="glass-card rounded-3xl overflow-hidden flex flex-col group cursor-pointer border border-white/10 hover:border-accent-primary/50 transition-colors duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {item.links && item.links.length > 0 && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
            {item.links.map((link, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -5 }}
                href={link.href || '#'}
                target="_blank"
                rel="noreferrer"
                className={`p-4 bg-white/10 rounded-full text-white transition-colors ${link.hoverColor || 'hover:bg-accent-primary'}`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
        <p className="text-gray-400 text-base leading-relaxed mb-6 flex-1">{item.description}</p>
        
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-semibold px-3 py-1.5 bg-accent-primary/10 text-accent-secondary rounded-full border border-accent-secondary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ItemCard;
