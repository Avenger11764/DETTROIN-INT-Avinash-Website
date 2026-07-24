import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

const SchoolLife = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <Hero title="School Life" subtitle="Explore student activities, sports, and campus culture" />
      <div className="bg-white p-8 rounded-lg shadow text-center">
        <p className="text-xl font-semibold text-primary">Route: /school-life (School Life Page Working)</p>
      </div>
    </motion.div>
  );
};

export default SchoolLife;
