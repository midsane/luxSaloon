import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Mail, Scissors } from 'lucide-react'

export default function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        date: '',
        time: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Booking submitted:', formData)
        alert('Booking submitted successfully! 🎉')
    }

    return (
        <section id="booking" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://plus.unsplash.com/premium_photo-1676677517012-f1a34d629de4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Luxury Salon Booking"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Book Your Appointment 📅</h2>
                <motion.form
                    className="max-w-lg mx-auto bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 flex items-center">
                            <User className="w-5 h-5 mr-2 text-pink-500" />
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 flex items-center">
                            <Mail className="w-5 h-5 mr-2 text-pink-500" />
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="service" className="block text-gray-700 font-semibold mb-2 flex items-center">
                            <Scissors className="w-5 h-5 mr-2 text-pink-500" />
                            Service
                        </label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        >
                            <option value="">Select a service</option>
                            <option value="haircut">Haircut & Styling ✂️</option>
                            <option value="color">Color & Highlights 🎨</option>
                            <option value="spa">Spa Treatment 💆‍♀️</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-gray-700 font-semibold mb-2 flex items-center">
                            <Calendar className="w-5 h-5 mr-2 text-pink-500" />
                            Preferred Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="time" className="block text-gray-700 font-semibold mb-2 flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-pink-500" />
                            Preferred Time
                        </label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
                    >
                        <Calendar className="w-5 h-5 mr-2" />
                        Book Now
                    </button>
                </motion.form>
            </div>
        </section>
    )
}
