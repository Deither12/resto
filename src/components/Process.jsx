import { useReveal } from '../hooks/useReveal'

const STEPS = [
  {
    num: '01',
    title: 'Fresh Ingredients',
    desc: 'We source the finest local and seasonal ingredients daily from trusted farms and suppliers.',
    icon: '🌿',
  },
  {
    num: '02',
    title: 'Expert Preparation',
    desc: 'Our chefs apply classical techniques refined over decades of culinary experience.',
    icon: '👨‍🍳',
  },
  {
    num: '03',
    title: 'Perfected Flavors',
    desc: 'Each dish is tasted and refined until every element is in perfect harmony.',
    icon: '✨',
  },
  {
    num: '04',
    title: 'Beautiful Plating',
    desc: 'We believe dining is an art. Every plate is a canvas crafted to delight your senses.',
    icon: '🍽',
  },
]

export default function Process() {
  const sectionRef = useReveal()

  return (
    <section id="about" className="py-20 lg:py-28 bg-dark-900 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images collage */}
          <div className="relative reveal-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-56">
                  <img
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                    alt="Chef cooking"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-36">
                  <img
                    src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80"
                    alt="Food plating"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-36">
                  <img
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80"
                    alt="Ingredients"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-56">
                  <img
                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80"
                    alt="Kitchen"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-gold-400 text-dark-900 rounded-2xl p-4 shadow-2xl">
              <div className="font-display text-3xl font-bold">12+</div>
              <div className="font-body text-xs font-semibold">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal-right">
            <p className="section-tag">Our Process</p>
            <h2 className="section-title mb-6">
              Food making <span className="text-gold-400 italic">process</span>
            </h2>
            <p className="font-body text-gray-400 leading-relaxed mb-10">
              Behind every great dish is a thoughtful process rooted in tradition, passion, and 
              relentless pursuit of perfection. We take pride in every step — from selecting the 
              finest seasonal produce to the final flourish on the plate.
            </p>

            <div className="space-y-6">
              {STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className="flex gap-5 group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Number */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-dark-700 border border-dark-500 group-hover:border-gold-400 group-hover:bg-gold-400/10 transition-all duration-300 flex items-center justify-center">
                    <span className="font-display text-gold-400 font-bold text-sm">{step.num}</span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white mb-1">{step.title}</h4>
                    <p className="font-body text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#menu" className="btn-gold">Discover Our Menu</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
