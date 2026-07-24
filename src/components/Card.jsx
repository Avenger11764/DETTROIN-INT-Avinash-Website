import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-accent/40 transition-all duration-300 group flex flex-col justify-between"
    >
      <div>
        {Icon && (
          <div className="w-14 h-14 rounded-xl bg-primary text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
            <Icon className="w-7 h-7" />
          </div>
        )}
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
