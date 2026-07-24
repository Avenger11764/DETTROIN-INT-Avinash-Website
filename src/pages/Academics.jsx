import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

const Academics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <Hero title="Academics" subtitle="Academic programs and curriculum overview" />
      <div className="bg-white p-8 rounded-lg shadow text-center">
        <p className="text-xl font-semibold text-primary">Route: /academics (Academics Page Working)</p>
      </div>
    </motion.div>
  );
};

export default Academics;
