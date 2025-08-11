import React from 'react'

// Import images from src/assets
import bedImg from '../assets/bed-electric.png'
import lightImg from '../assets/surgical-light.png'

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Electric Hospital Bed',
      description: '3-function automatic bed with remote adjustability.',
      image: bedImg,
    },
    {
      id: 2,
      name: 'Surgical Operating Light',
      description: 'Ceiling-mounted LED light with shadowless clarity.',
      image: lightImg,
    },
  ]

  return (
    <section className="grid gap-6 sm:grid-cols-2">
      {products.map(({ id, name, description, image }) => (
        <article key={id} className="rounded-2xl shadow-sm overflow-hidden border bg-white">
          <img src={image} alt={name} className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default FeaturedProducts
