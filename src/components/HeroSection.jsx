import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full z-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-medical.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Empty placeholder (you can remove this entirely if not needed) */}
      <div className="relative z-10 h-full" />

      {/* Bottom Wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1200 50"
          preserveAspectRatio="none"
          className="w-full h-[50px]"
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
