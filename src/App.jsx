import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Process from './components/Process'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <Hero />
      <Menu />
      <Process />
      <Gallery />
      <Team />
      <Testimonials />
      <Reservation />
      <Footer />
    </div>
  )
}
