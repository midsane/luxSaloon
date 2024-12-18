import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Sarah J. 👩‍💼', text: 'Absolutely love this salon! The staff is incredibly skilled and friendly.', rating: 5 },
  { name: 'Michael R. 👨‍💼', text: 'Best haircut I\'ve ever had. Will definitely be coming back!', rating: 5 },
  { name: 'Emily L. 👩‍🦰', text: 'The spa treatments here are heavenly. A true luxury experience.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/marble-background.jpg"
          alt="Marble Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Clients Say 💬</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name}
              className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="w-8 h-8 text-pink-300 mb-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">{testimonial.text}</p>
              <p className="font-semibold text-right">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
