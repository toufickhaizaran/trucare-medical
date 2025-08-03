import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Electric Hospital Bed',
      description: '3-function automatic bed with remote adjustability.',
      image: '/images/bed-electric.png',
    },
    {
      id: 2,
      name: 'Surgical Operating Light',
      description: 'Ceiling-mounted LED light with shadowless clarity.',
      image: '/images/surgical-light.png',
    },
    {
      id: 3,
      name: 'ECG Machine – 3/6/12 Lead',
      description: 'Portable ECG with printer and digital screen.',
      image: '/images/ecg-machine.png',
    },
  ];

  return (
    <section className="bg-white py-14 px-4 text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-10">Featured Products</h2>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="max-w-xs">
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
