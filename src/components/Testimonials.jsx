import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'Food Critic',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    review: 'An extraordinary dining experience. Every dish tells a story of passion and craftsmanship. The truffle risotto alone is worth the visit.',
    rating: 5,
  },
  {
    name: 'Michael Torres',
    role: 'Regular Guest',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    review: 'I\'ve dined here for every anniversary for the past 6 years. The consistency in quality and the warmth of the staff never cease to amaze me.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Food Blogger',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    review: 'From the ambiance to the desserts — perfection in every detail. The chocolate lava cake is a religious experience.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Business Executive',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    review: 'Always my go-to for important client dinners. The team\'s attention to detail and flawless service make every occasion special.',
    rating: 4,
  },
  {
    name: 'Olivia Brown',
    role: 'Travel Writer',
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80',
    review: 'Visited from Paris and was not disappointed. The salmon is the finest I\'ve had outside of France — bold claim, fully warranted.',
    rating: 5,
  },
]

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(s => (
        <svg key={s} className={`w-4 h-4 ${s <= n ? 'text-gold-400' : 'text-gray-700'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const sectionRef = useReveal()

  const prev = () => setActive(a => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setActive(a => (a + 1) % TESTIMONIALS.length)

  const visible = [
    TESTIMONIALS[(active) % TESTIMONIALS.length],
    TESTIMONIALS[(active + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(active + 2) % TESTIMONIALS.length],
  ]

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-dark-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
          <div>
            <p className="section-tag">Testimonials</p>
            <h2 className="section-title">
              Our clients <span className="text-gold-400 italic">love</span> us
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-dark-500 text-gray-400 hover:border-gold-400 hover:text-gold-400 transition-all flex items-center justify-center text-lg"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-dark-500 text-gray-400 hover:border-gold-400 hover:text-gold-400 transition-all flex items-center justify-center text-lg"
            >
              ›
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div
              key={t.name + i}
              className={`bg-dark-700 rounded-2xl p-6 transition-all duration-300 reveal ${
                i === 1 ? 'border border-gold-400/30 shadow-lg shadow-gold-400/5' : ''
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Quote mark */}
              <div className="text-gold-400 font-display text-6xl leading-none mb-4 opacity-40">"</div>

              <p className="font-body text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{t.review}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-gold-400/30"
                />
                <div>
                  <div className="font-display font-semibold text-white text-sm">{t.name}</div>
                  <div className="font-body text-gray-500 text-xs">{t.role}</div>
                </div>
                <div className="ml-auto">
                  <Stars n={t.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
