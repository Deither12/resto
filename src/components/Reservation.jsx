import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Reservation() {
  const sectionRef = useReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: '2', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const inputClass = "w-full bg-dark-700 border border-dark-500 text-white font-body text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-gold-400 placeholder-gray-600 transition-colors"

  return (
    <section id="reservation" className="py-20 lg:py-28 bg-dark-900 relative overflow-hidden" ref={sectionRef}>
      {/* BG accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="reveal-left">
            <p className="section-tag">Reservations</p>
            <h2 className="section-title mb-6">
              Reserve your <span className="text-gold-400 italic">table</span> today
            </h2>
            <p className="font-body text-gray-400 leading-relaxed mb-10">
              Join us for an unforgettable dining experience. Whether it's a romantic dinner for two 
              or a celebratory gathering, we're here to make your occasion truly special.
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              {[
                { icon: '🕐', title: 'Opening Hours', lines: ['Mon–Fri: 11:00 AM – 11:00 PM', 'Sat–Sun: 10:00 AM – 12:00 AM'] },
                { icon: '📍', title: 'Location', lines: ['123 Culinary Avenue', 'Downtown District, NY 10001'] },
                { icon: '📞', title: 'Contact', lines: ['+1 (555) 234-5678', 'hello@restaurant.com'] },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start p-4 bg-dark-700 rounded-xl border border-dark-600 hover:border-gold-400/30 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-display font-semibold text-white mb-1">{item.title}</div>
                    {item.lines.map(l => <div key={l} className="font-body text-gray-400 text-sm">{l}</div>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            <div className="bg-dark-700 rounded-2xl p-8 border border-dark-600">
              <h3 className="font-display text-2xl font-bold text-white mb-6">Make a Reservation</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="font-display text-xl text-gold-400 mb-2">Reservation Confirmed!</h4>
                  <p className="font-body text-gray-400 text-sm">We'll contact you shortly to confirm your booking.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs text-gray-500 mb-1.5 block">Full Name</label>
                      <input name="name" value={form.name} onChange={handle} required placeholder="John Doe" className={inputClass} />
                    </div>
                    <div>
                      <label className="font-body text-xs text-gray-500 mb-1.5 block">Email</label>
                      <input name="email" type="email" value={form.email} onChange={handle} required placeholder="john@email.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs text-gray-500 mb-1.5 block">Phone</label>
                      <input name="phone" value={form.phone} onChange={handle} placeholder="+1 555 0000" className={inputClass} />
                    </div>
                    <div>
                      <label className="font-body text-xs text-gray-500 mb-1.5 block">Guests</label>
                      <select name="guests" value={form.guests} onChange={handle} className={inputClass}>
                        {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                        <option value="9+">9+ Guests</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs text-gray-500 mb-1.5 block">Date</label>
                      <input name="date" type="date" value={form.date} onChange={handle} required className={inputClass} />
                    </div>
                    <div>
                      <label className="font-body text-xs text-gray-500 mb-1.5 block">Time</label>
                      <select name="time" value={form.time} onChange={handle} className={inputClass}>
                        <option value="">Select time</option>
                        {['11:00 AM','12:00 PM','1:00 PM','2:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM'].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs text-gray-500 mb-1.5 block">Special Requests</label>
                    <textarea name="message" value={form.message} onChange={handle} rows={3} placeholder="Allergies, celebrations, preferences..." className={inputClass + ' resize-none'} />
                  </div>
                  <button type="submit" className="btn-gold w-full py-3 mt-2">Reserve My Table</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
