import { useEffect, useRef, useState } from 'react'

const SLIDES = [
  {
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80',
    tag: 'Welcome to Our Restaurant',
    title: 'For the love of delicious food',
    sub: 'Experience the finest flavors crafted with passion and the freshest ingredients from local farms.',
  },
  {
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&q=80',
    tag: 'Chef\'s Special',
    title: 'Crafted with heart & soul',
    sub: 'Every dish tells a story. From farm to table, we bring you the most authentic culinary experience.',
  },
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80',
    tag: 'Fine Dining',
    title: 'Where memories are made',
    sub: 'Join us for an unforgettable dining experience in an atmosphere of warmth and elegance.',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const go = (idx) => setCurrent((idx + SLIDES.length) % SLIDES.length)

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 5500)
    return () => clearInterval(timerRef.current)
  }, [])

  const slide = SLIDES[current]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG images */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${s.img})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/70 to-dark-900/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-2xl">
          {/* Tag */}
          <div
            key={current + 'tag'}
            className="inline-flex items-center gap-2 mb-4 animate-fade-in"
          >
            <span className="w-8 h-px bg-gold-400" />
            <span className="section-tag">{slide.tag}</span>
          </div>

          {/* Title */}
          <h1
            key={current + 'title'}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-2 animate-fade-up"
          >
            {slide.title.split(' ').map((word, wi) => (
              <span
                key={wi}
                className={word === 'love' || word === 'delicious' || word === 'heart' || word === 'memories' ? 'text-gold-400 italic' : ''}
              >
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Discount badge */}
          <div className="inline-block bg-gold-400 text-dark-900 font-body font-bold text-sm px-4 py-1.5 rounded-full mb-5 animate-fade-in">
            🎉 Up to 15% discount this weekend!
          </div>

          {/* Sub */}
          <p
            key={current + 'sub'}
            className="font-body text-gray-300 text-lg leading-relaxed mb-8 max-w-lg animate-fade-up"
          >
            {slide.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#menu" className="btn-gold">Explore Menu</a>
            <a href="#reservation" className="btn-outline">Book a Table</a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { num: '250+', label: 'Menu Items' },
              { num: '15K+', label: 'Happy Clients' },
              { num: '12+', label: 'Years of Service' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-gold-400">{s.num}</div>
                <div className="font-body text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2 bg-gold-400' : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Arrow nav */}
      <button
        onClick={() => go(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 bg-dark-900/40 text-white hover:border-gold-400 hover:text-gold-400 transition-all hidden md:flex items-center justify-center"
      >
        ‹
      </button>
      <button
        onClick={() => go(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 bg-dark-900/40 text-white hover:border-gold-400 hover:text-gold-400 transition-all hidden md:flex items-center justify-center"
      >
        ›
      </button>

      {/* Social links */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
        {['twitter', 'instagram', 'facebook'].map((s) => (
          <a
            key={s}
            href="#"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-gold-400 hover:text-gold-400 transition-all text-xs"
          >
            {s === 'twitter' ? 'TW' : s === 'instagram' ? 'IG' : 'FB'}
          </a>
        ))}
      </div>
    </section>
  )
}
