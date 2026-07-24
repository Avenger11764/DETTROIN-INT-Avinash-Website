import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, GraduationCap, Award } from 'lucide-react';

const statsData = [
  { icon: Calendar, value: '25+', label: 'Years Established' },
  { icon: Users, value: '2,500+', label: 'Students Enrolled' },
  { icon: GraduationCap, value: '150+', label: 'Expert Faculty' },
  { icon: Award, value: '10,000+', label: 'Global Alumni' },
];

const StatsCounter = () => {
  return (
    <section className="py-12 bg-white rounded-2xl shadow-sm border border-accent/20 px-6 sm:px-12 my-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {statsData.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-neutral transition-colors"
            >
              <div className="p-3 bg-primary/5 rounded-full mb-3 text-accent border border-accent/20">
                <Icon className="w-7 h-7" />
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-primary mb-1 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsCounter;
