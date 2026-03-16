import { useState, useEffect } from 'react'


const navLinks = ['Home', 'Menu', 'Blog', 'Reservation', 'About', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-gold-400 text-2xl">🍽</span>
            <span className="font-display text-xl font-bold text-white">
              Restau<span className="text-gold-400">rant</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`font-body text-sm font-medium transition-colors duration-200 hover:text-gold-400 ${
                    i === 0 ? 'text-gold-400 border-b border-gold-400 pb-0.5' : 'text-gray-300'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Search + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-300 hover:text-gold-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <a href="#reservation" className="btn-gold text-sm">Reserve Table</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-6 h-0.5 bg-current transition-all mb-1.5 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-current transition-all mb-1.5 ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 bg-dark-800/98 backdrop-blur-md overflow-hidden ${
          menuOpen ? 'max-h-96 border-t border-dark-600' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-body text-gray-300 hover:text-gold-400 transition-colors block py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a href="#reservation" className="btn-gold text-sm inline-block mt-2">Reserve Table</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
