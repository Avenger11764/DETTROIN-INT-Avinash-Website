import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

const Admissions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <Hero title="Admissions" subtitle="Information on application procedure and enrolment" />
      <div className="bg-white p-8 rounded-lg shadow text-center">
        <p className="text-xl font-semibold text-primary">Route: /admissions (Admissions Page Working)</p>
      </div>
    </motion.div>
  );
};

export default Admissions;
