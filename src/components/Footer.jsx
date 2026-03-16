export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gold-400 text-2xl">🍽</span>
              <span className="font-display text-xl font-bold text-white">
                Restau<span className="text-gold-400">rant</span>
              </span>
            </div>
            <p className="font-body text-gray-500 text-sm leading-relaxed mb-5">
              Crafting unforgettable dining experiences since 2012. Where every meal is a celebration.
            </p>
            <div className="flex gap-3">
              {['FB', 'IG', 'TW', 'YT'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-dark-500 flex items-center justify-center text-gray-500 hover:border-gold-400 hover:text-gold-400 transition-all text-xs font-semibold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Home', 'Menu', 'About Us', 'Gallery', 'Blog', 'Contact'].map(l => (
                <li key={l}>
                  <a href="#" className="font-body text-gray-500 text-sm hover:text-gold-400 transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['Fine Dining', 'Private Events', 'Catering', 'Wine Pairing', 'Chef\'s Table', 'Delivery'].map(s => (
                <li key={s}>
                  <a href="#" className="font-body text-gray-500 text-sm hover:text-gold-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Newsletter</h4>
            <p className="font-body text-gray-500 text-sm mb-4 leading-relaxed">
              Get exclusive offers, new menu updates and culinary stories in your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-dark-700 border border-dark-500 text-white font-body text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-gold-400 placeholder-gray-600 transition-colors w-full"
              />
              <button className="btn-gold text-sm w-full">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-gray-600 text-sm">© 2024 Restaurant. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a key={l} href="#" className="font-body text-gray-600 text-xs hover:text-gold-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
