import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '' }) => (
  <section className={`w-full flex justify-center ${className}`}>
    <div className="w-full max-w-5xl px-2 sm:px-6 md:px-10 lg:px-0">{children}</div>
  </section>
);

export default SectionWrapper; 