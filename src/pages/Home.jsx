// src/pages/Home.jsx
import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedProducts from '../components/FeaturedProducts' // default export
import { ProductsShowcase } from '../components/ProductsShowcase' // named export

export default function Home() {
  return (
    <div>
      {/* Hero background image */}
      <HeroSection />

      {/* Featured Products section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <FeaturedProducts />
      </section>

      {/* Product cards grid */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <ProductsShowcase />
      </main>
    </div>
  )
}
// src/pages/Home.jsx