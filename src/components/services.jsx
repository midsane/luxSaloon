import { motion } from 'framer-motion'
import { Scissors, Droplet, Spade as Spa } from 'lucide-react'

const services = [
    { name: 'Haircut & Styling ✂️', icon: Scissors, description: 'Expert cuts and styles for all hair types', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Color & Highlights 🎨', icon: Droplet, description: 'Vibrant colors and natural-looking highlights', image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Spa Treatments 💆‍♀️', icon: Spa, description: 'Relaxing facials and rejuvenating body treatments', image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

]

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <img
                    src="/images/luxury-pattern.jpg"
                    alt="Luxury Pattern"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Luxurious Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4 mx-auto">
                                <service.icon className="w-8 h-8 text-pink-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">{service.name}</h3>
                            <p className="text-gray-600 text-center">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
