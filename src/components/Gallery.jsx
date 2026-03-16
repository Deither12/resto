import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const GALLERY = [
  { id: 1, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', span: 'col-span-2 row-span-2' },
  { id: 2, img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80', span: '' },
  { id: 3, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', span: '' },
  { id: 4, img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80', span: '' },
  { id: 5, img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&q=80', span: '' },
  { id: 6, img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', span: 'col-span-2' },
  { id: 7, img: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80', span: '' },
  { id: 8, img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80', span: '' },
  { id: 9, img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80', span: '' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const sectionRef = useReveal()

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-dark-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="section-tag">Gallery</p>
          <h2 className="section-title mb-4">
            Our Photo <span className="text-gold-400 italic">Gallery</span>
          </h2>
          <p className="font-body text-gray-400 max-w-xl mx-auto">
            A visual feast — glimpses of our culinary creations, warm ambiance, and the joy we bring to every table.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] reveal">
          {GALLERY.map((item) => (
            <div
              key={item.id}
              className={`${item.span} rounded-2xl overflow-hidden cursor-pointer group relative`}
              onClick={() => setLightbox(item.img)}
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-dark-900/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-white text-4xl hover:text-gold-400 transition-colors">×</button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
