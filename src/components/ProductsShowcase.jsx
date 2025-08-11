import React from 'react'
import { getAssetUrl } from '../utils/images' // ensure this exists

export function ProductsShowcase() { // named export
  // Use the EXACT filenames in src/assets (case + extension)
  const items = [
    { file: 'bed-electric.png',   title: 'Electric Hospital Bed', desc: 'Adjustable sections, side rails, and casters for ICU and wards.' },
    { file: 'surgical-light.png', title: 'Surgical Light',        desc: 'Shadow-free illumination with adjustable intensity for the OR.' },
    { file: 'ecg-machine.png',    title: 'ECG Machine',           desc: '12-lead diagnostic ECG with thermal printer and data storage.' },
  ]

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ file, title, desc }) => {
        const src = getAssetUrl(file)
        return (
          <article key={title} className="rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden border bg-white">
            {src ? (
              <img src={src} alt={title} className="w-full h-56 object-cover object-center" loading="lazy" />
            ) : (
              <div className="w-full h-56 flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
                Missing image: {file}
              </div>
            )}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{desc}</p>
            </div>
          </article>
        )
      })}
    </section>
  )
}
