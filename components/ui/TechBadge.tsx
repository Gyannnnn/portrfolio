import React from 'react';

interface TechBadgeProps {
  icon: React.ReactNode;
  name: string;
  className?: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ icon, name, className = '' }) => (
  <span
    className={`flex items-center gap-1 bg-[#1e1e1e] text-white px-3 py-1 rounded-md cursor-pointer shadow-md transition-transform hover:bg-gray-700 active:scale-95 text-xs font-medium ${className}`}
    title={name}
  >
    {icon}
    {name}
  </span>
);

export default TechBadge; 