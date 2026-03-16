import { useReveal } from '../hooks/useReveal'

const TEAM = [
  {
    name: 'Marco Rossi',
    role: 'Head Chef',
    img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80',
    bio: '20+ years mastering Italian and French cuisine across Michelin-starred kitchens.',
    social: { ig: '#', tw: '#' },
  },
  {
    name: 'Sophie Chen',
    role: 'Pastry Chef',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Award-winning pastry artist known for transforming classics into modern masterpieces.',
    social: { ig: '#', tw: '#' },
  },
  {
    name: 'James Okafor',
    role: 'Sous Chef',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Fusion cuisine specialist with a passion for bold flavors and innovative techniques.',
    social: { ig: '#', tw: '#' },
  },
  {
    name: 'Elena Martins',
    role: 'Sommelier',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Certified Master Sommelier curating the perfect wine pairing for every dish.',
    social: { ig: '#', tw: '#' },
  },
]

export default function Team() {
  const sectionRef = useReveal()

  return (
    <section id="team" className="py-20 lg:py-28 bg-dark-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="section-tag">Our Team</p>
          <h2 className="section-title mb-4">
            Meet the <span className="text-gold-400 italic">artists</span> behind every dish
          </h2>
          <p className="font-body text-gray-400 max-w-xl mx-auto">
            Our talented culinary team brings passion, creativity, and decades of expertise to your plate.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className="group bg-dark-700 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Social overlay */}
                <div className="absolute inset-0 bg-gold-400/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={member.social.ig} className="w-10 h-10 bg-dark-900 rounded-full flex items-center justify-center text-gold-400 font-bold text-xs hover:bg-white transition-colors">IG</a>
                  <a href={member.social.tw} className="w-10 h-10 bg-dark-900 rounded-full flex items-center justify-center text-gold-400 font-bold text-xs hover:bg-white transition-colors">TW</a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="font-display font-semibold text-white text-lg mb-1">{member.name}</h3>
                <p className="text-gold-400 font-body text-sm font-medium mb-3">{member.role}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
