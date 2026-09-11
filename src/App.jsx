import React, { useState } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  ChefHat,
  Sofa,
  BedDouble,
  Lightbulb,
  Phone,
  MapPin,
  Instagram,
  Share2
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <span className="font-bold text-xl sm:text-2xl tracking-wide text-amber-700">
                Shree Aishwarya
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-500 block border-l pl-3 border-slate-300">
                Interior & Designers
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 font-medium text-slate-600">
              <a href="#home" className="hover:text-amber-700 transition">Home</a>
              <a href="#services" className="hover:text-amber-700 transition">Services</a>
              <a href="#projects" className="hover:text-amber-700 transition">Projects</a>
              <a href="#contact" className="hover:text-amber-700 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-amber-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-4 space-y-3 font-medium">
            <a 
              href="#home" 
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-amber-700"
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-amber-700"
            >
              Services
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-amber-700"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-amber-700"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-amber-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Transforming Spaces into <br className="hidden sm:inline" />
            <span className="text-amber-700">Timeless Masterpieces</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Crafting elegant, modern, and personalized interior designs for homes and commercial spaces.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#contact"
              className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition"
            >
              Get Consultation
            </a>
            <a
              href="#projects"
              className="bg-white hover:bg-slate-100 text-slate-700 px-6 py-3 rounded-lg border border-slate-300 font-semibold transition"
            >
              Explore Works
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
            <p className="mt-2 text-slate-600">Tailored interior design solutions tailored to your unique lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition border border-slate-100">
              <ChefHat className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Modular Kitchens</h3>
              <p className="text-slate-600 text-sm">Ergonomic designs maximizing storage, beauty, and functional cooking experiences.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition border border-slate-100">
              <Sofa className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Living Space</h3>
              <p className="text-slate-600 text-sm">Sophisticated TV units, wall paneling, and seating tailored for comfort and luxury.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition border border-slate-100">
              <BedDouble className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Bedrooms & Wardrobes</h3>
              <p className="text-slate-600 text-sm">Custom floor-to-ceiling wardrobes, bed heads, and cozy aesthetic concepts.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition border border-slate-100">
              <Lightbulb className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">False Ceilings</h3>
              <p className="text-slate-600 text-sm">Ambient lighting integration and modern ceiling architecture to accentuate spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Projects Gallery */}
      <section id="projects" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
            <p className="mt-2 text-slate-600">A glimpse into our recent interior transformations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-xl bg-white shadow-sm border border-slate-200">
              <img src="/real-projects/kitchen-1.jpg" alt="Modular Kitchen" className="w-full h-60 object-cover hover:scale-105 transition duration-300" />
              <div className="p-4">
                <h3 className="font-bold text-slate-900">Modern Kitchen Concept</h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-white shadow-sm border border-slate-200">
              <img src="/real-projects/tv-unit-1.jpg" alt="Living Room TV Unit" className="w-full h-60 object-cover hover:scale-105 transition duration-300" />
              <div className="p-4">
                <h3 className="font-bold text-slate-900">Contemporary TV Unit</h3>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-white shadow-sm border border-slate-200">
              <img src="/real-projects/wardrobe-1.jpg" alt="Custom Wardrobe" className="w-full h-60 object-cover hover:scale-105 transition duration-300" />
              <div className="p-4">
                <h3 className="font-bold text-slate-900">Custom Storage Wardrobe</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Get In Touch</h2>
              <p className="mt-2 text-slate-600">Let’s discuss your upcoming project and turn your vision into reality.</p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-4 text-slate-700">
                  <Phone className="text-amber-700" size={24} />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-700">
                  <MapPin className="text-amber-700" size={24} />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <form className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" className="mt-1 w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-700 focus:outline-none" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone Number</label>
                <input type="tel" className="mt-1 w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-700 focus:outline-none" placeholder="Your Mobile Number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows="4" className="mt-1 w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-700 focus:outline-none" placeholder="Tell us about your project requirements..."></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-lg font-semibold transition">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">© {new Date().getFullYear()} Shree Aishwarya Interior & Designers. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-amber-500 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-amber-500 transition"><Share2 size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}