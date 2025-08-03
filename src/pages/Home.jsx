import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';

function Home() {
  return (
    <div className="relative z-10">
      <HeroSection />
      <FeaturedProducts />

      {/* Info and Button after Featured Products */}
      <div className="bg-white py-20 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          TruCare Medical Lebanon
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Premium Medical Equipment for Hospitals, Clinics & Professionals
        </p>
        <a
          href="/geotek"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl shadow transition duration-300"
        >
          Browse Products
        </a>
      </div>
    </div>
  );
}

export default Home;
