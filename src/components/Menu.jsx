import { useState, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

const CATEGORIES = ['All', 'Starters', 'Main Course', 'Desserts', 'Drinks']

const MENU_ITEMS = [
  {
    id: 1, name: 'Grilled Salmon', category: 'Main Course', price: '$24.99',
    desc: 'Fresh Atlantic salmon with lemon herb butter and seasonal vegetables.',
    img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80',
    rating: 4.8, reviews: 128, badge: 'Chef\'s Pick',
  },
  {
    id: 2, name: 'Truffle Risotto', category: 'Main Course', price: '$22.50',
    desc: 'Creamy Arborio rice with black truffle shavings and parmesan.',
    img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80',
    rating: 4.9, reviews: 96, badge: 'Popular',
  },
  {
    id: 3, name: 'Beef Tenderloin', category: 'Main Course', price: '$36.00',
    desc: 'Prime cut beef with red wine reduction, served with truffle mash.',
    img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80',
    rating: 4.7, reviews: 212,
  },
  {
    id: 4, name: 'Burrata Salad', category: 'Starters', price: '$14.00',
    desc: 'Fresh burrata with heirloom tomatoes, basil oil and sea salt.',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
    rating: 4.6, reviews: 74,
  },
  {
    id: 5, name: 'Chocolate Lava', category: 'Desserts', price: '$11.50',
    desc: 'Warm dark chocolate fondant with vanilla bean ice cream.',
    img: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=400&q=80',
    rating: 5.0, reviews: 188, badge: 'Best Seller',
  },
  {
    id: 6, name: 'Lobster Bisque', category: 'Starters', price: '$18.00',
    desc: 'Velvety bisque with fresh lobster, cream and cognac.',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80',
    rating: 4.8, reviews: 63,
  },
  {
    id: 7, name: 'Tiramisu', category: 'Desserts', price: '$9.50',
    desc: 'Classic Italian dessert with espresso-soaked ladyfingers.',
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80',
    rating: 4.9, reviews: 154,
  },
  {
    id: 8, name: 'Signature Cocktail', category: 'Drinks', price: '$13.00',
    desc: 'House special blend with premium spirits and fresh fruit.',
    img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80',
    rating: 4.7, reviews: 89,
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(s => (
        <svg key={s} className={`w-3.5 h-3.5 ${s <= Math.round(rating) ? 'text-gold-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-gray-400 text-xs ml-1">{rating} ({reviews})</span>
    </div>
  )
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const sectionRef = useReveal()

  const filtered = activeCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(i => i.category === activeCategory)

  return (
    <section id="menu" className="py-20 lg:py-28 bg-dark-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="section-tag">Our Menu</p>
          <h2 className="section-title mb-4">
            Explore our <span className="text-gold-400 italic">delicious</span> dishes
          </h2>
          <p className="font-body text-gray-400 max-w-xl mx-auto">
            From starters to desserts, every dish is crafted with premium ingredients and culinary expertise.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-400 text-dark-900'
                  : 'border border-dark-500 text-gray-400 hover:border-gold-400 hover:text-gold-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="card-food group reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-gold-400 text-dark-900 text-xs font-bold px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 bg-dark-900/80 rounded-full flex items-center justify-center text-gray-300 hover:text-gold-400 transition-colors opacity-0 group-hover:opacity-100">
                  ♡
                </button>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-display font-semibold text-white text-base">{item.name}</h3>
                  <span className="text-gold-400 font-body font-bold text-sm">{item.price}</span>
                </div>
                <p className="font-body text-gray-500 text-xs mb-3 leading-relaxed">{item.desc}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className={`w-3 h-3 ${s <= Math.round(item.rating) ? 'text-gold-400' : 'text-gray-700'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-500 text-xs ml-1">{item.rating} ({item.reviews})</span>
                </div>

                <button className="w-full btn-gold text-xs py-2">Add to Order</button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a href="#" className="btn-outline">View Full Menu</a>
        </div>
      </div>
    </section>
  )
}
