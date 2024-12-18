import Booking from "./components/booking"
import Footer from "./components/footer"
import Gallery from "./components/gallery"
import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import Testimonials from "./components/testimonials"


function App() {


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Booking />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
