import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury Salon Interior"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <motion.div
                className="relative z-10 text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 mr-4 text-yellow-400" />
                    Welcome to LuxeSalon
                    <Sparkles className="w-12 h-12 ml-4 text-yellow-400" />
                </h1>
                <p className="text-xl md:text-2xl mb-8">Experience the pinnacle of beauty and relaxation ✨</p>
                <a
                    href="#booking"
                    className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 "
                >
                    Book Your Appointment 📅
                </a>
            </motion.div>
        </section>
    )
}
