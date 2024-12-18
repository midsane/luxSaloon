import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4">LuxeSalon ✨</h3>
                        <p className="mb-4">Experience the pinnacle of beauty and relaxation</p>
                        <div className="flex items-center mb-2">
                            <MapPin className="w-5 h-5 mr-2 text-pink-400" />
                            <p>123 Luxury Lane, Cityville, ST 12345</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <Phone className="w-5 h-5 mr-2 text-pink-400" />
                            <p>(555) 123-4567</p>
                        </div>
                        <div className="flex items-center">
                            <Mail className="w-5 h-5 mr-2 text-pink-400" />
                            <p>info@luxesalon.com</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#services" className="hover:text-pink-400 transition-colors duration-300">Services</a></li>
                            <li><a href="#testimonials" className="hover:text-pink-400 transition-colors duration-300">Testimonials</a></li>
                            <li><a href="#booking" className="hover:text-pink-400 transition-colors duration-300">Book Now</a></li>
                            <li><a href="#gallery" className="hover:text-pink-400 transition-colors duration-300">Gallery</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-pink-400 transition-colors duration-300">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-white hover:text-pink-400 transition-colors duration-300">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-white hover:text-pink-400 transition-colors duration-300">
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p>&copy; 2023 LuxeSalon. All rights reserved. 💖</p>
                </div>
            </div>
        </footer>
    )
}

