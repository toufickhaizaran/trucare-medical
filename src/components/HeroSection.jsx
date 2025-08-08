import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-[120vh] w-full z-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-medical.png"
          alt="Hero"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }} // Lowered the image to better reveal bottom content
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Empty space to preserve height */}
      <div className="relative z-10 h-full" />

      {/* Smaller Bottom Wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1200 50"
          preserveAspectRatio="none"
          className="w-full h-[25px]" // Smaller wave height
        >
          <path
            d="M0,0 C300,50 900,50 1200,0 L1200,50 L0,50 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
