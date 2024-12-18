import { useState } from 'react'
import { motion } from 'framer-motion'

import { Scissors, Star, Calendar, Image, Menu } from 'lucide-react'


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-gray-800 flex items-center">
                    <Scissors className="w-8 h-8 mr-2 text-pink-500" />
                    <span>LuxeSalon</span>
                </a>
                <nav className="hidden md:flex space-x-8">
                    <NavLink href="#services" icon={<Scissors className="w-4 h-4 mr-1" />}>Services</NavLink>
                    <NavLink href="#testimonials" icon={<Star className="w-4 h-4 mr-1" />}>Testimonials</NavLink>
                    <NavLink href="#booking" icon={<Calendar className="w-4 h-4 mr-1" />}>Book Now</NavLink>
                    <NavLink href="#gallery" icon={<Image className="w-4 h-4 mr-1" />}>Gallery</NavLink>
                </nav>
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>
            {isOpen && (
                <motion.nav
                    className="md:hidden bg-white shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        <NavLink href="#services" icon={<Scissors className="w-4 h-4 mr-1" />} onClick={() => setIsOpen(false)}>Services</NavLink>
                        <NavLink href="#testimonials" icon={<Star className="w-4 h-4 mr-1" />} onClick={() => setIsOpen(false)}>Testimonials</NavLink>
                        <NavLink href="#booking" icon={<Calendar className="w-4 h-4 mr-1" />} onClick={() => setIsOpen(false)}>Book Now</NavLink>
                        <NavLink href="#gallery" icon={<Image className="w-4 h-4 mr-1" />} onClick={() => setIsOpen(false)}>Gallery</NavLink>
                    </div>
                </motion.nav>
            )}
        </header>
    )
}

function NavLink({ href, children, icon, onClick }) {
    return (
        <a
            href={href}
            className="text-gray-600 hover:text-pink-500 transition-colors duration-300 flex items-center"
            onClick={onClick}
        >
            {icon}
            {children}
        </a>
    )
}

