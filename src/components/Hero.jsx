import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = ({
  title = "Krishna International School",
  subtitle = "Shaping Future Leaders Since 1998",
  ctaText = "Admission Enquiry",
  ctaLink = "/admissions"
}) => {
  return (
    <section className="relative overflow-hidden bg-primary text-white rounded-3xl p-8 md:p-16 lg:p-20 shadow-2xl border-b-4 border-accent my-4">
      {/* Subtle Background Glow & Pattern */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs sm:text-sm font-semibold tracking-wide uppercase"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Excellence in Education</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-accent/90 font-medium max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-4 flex justify-center"
        >
          <Link
            to={ctaLink}
            className="inline-flex items-center space-x-3 bg-accent text-primary hover:bg-accent/90 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-accent/20 transition-all transform hover:-translate-y-0.5"
          >
            <span className="text-base sm:text-lg">{ctaText}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
