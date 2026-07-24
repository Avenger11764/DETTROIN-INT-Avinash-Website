import React from 'react';

const Card = ({ title = "Card Title", children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-neutral">
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <div>{children || <p className="text-gray-600">Card Component Placeholder</p>}</div>
    </div>
  );
};

export default Card;
