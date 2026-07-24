import React from 'react';

const Hero = ({ title = "Hero Title", subtitle = "Hero Subtitle" }) => {
  return (
    <div className="bg-primary text-white py-16 px-6 rounded-xl text-center shadow-lg my-6 border-b-4 border-accent">
      <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
      <p className="text-lg text-accent max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default Hero;
