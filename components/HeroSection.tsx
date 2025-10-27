import React from 'react';

interface HeroSectionProps {
    onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <div className="relative py-20 sm:py-32 lg:py-40 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/10 to-transparent blur-3xl"></div>
        
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-text-primary tracking-tight leading-tight">
          The Ultimate Hub for <br />
          <span className="text-primary">College Festivals</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-text-secondary">
          Festic connects universities, vendors, and students to create unforgettable event experiences. Discover, manage, and participate in the most vibrant fests on campus.
        </p>
        <div className="mt-10">
          <button
            onClick={onGetStarted}
            className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30"
          >
            Get Started
          </button>
        </div>
      </div>
       <style>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgba(160, 118, 249, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(160, 118, 249, 0.2) 1px, transparent 1px);
          background-size: 2rem 2rem;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;