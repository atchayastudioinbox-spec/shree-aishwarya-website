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
  Facebook 
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const subServices = [
    { name: 'Modular Kitchen', icon: ChefHat, id: 'kitchen' },
    { name: 'Living Room', icon: Sofa, id: 'living' },
    { name: 'Bedroom & Wardrobes', icon: BedDouble, id: 'bedroom' },
    { name: 'False Ceiling & Lighting', icon: Lightbulb, id: 'ceiling' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0d1718] text-[#DFD6AE] font-sans">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#142325]/90 backdrop-blur-md border-b border-[#DFD6AE]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-xl font-bold tracking-wider text-[#DFD6AE] cursor-pointer" onClick={() => scrollToSection('hero')}>
            SHREE AISHWARYA <span className="text-xs block text-[#DFD6AE]/60 font-normal">INTERIOR & DESIGNERS</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase">
            <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors">
              Home
            </button>

            {/* SERVICES DROPDOWN */}
            <div 
              className="relative group py-6"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button 
                onClick={() => scrollToSection('services')}
                className="flex items-center space-x-1 hover:text-white transition-colors focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-[#142325] border border-[#DFD6AE]/20 rounded-xl shadow-2xl py-3 transition-all duration-200 origin-top ${
                  isServicesDropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                {subServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => scrollToSection(service.id)}
                      className="w-full text-left px-5 py-2.5 flex items-center space-x-3 text-xs tracking-wider text-[#DFD6AE]/80 hover:text-white hover:bg-[#1b2f31] transition-colors"
                    >
                      <Icon className="w-4 h-4 text-[#DFD6AE]" />
                      <span>{service.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button onClick={() => scrollToSection('real-sites')} className="hover:text-white transition-colors">
              Real Sites
            </button>

            <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-[#DFD6AE]">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#142325] border-b border-[#DFD6AE]/10 px-6 py-6 space-y-4 text-sm uppercase tracking-widest">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2">Home</button>
            
            <div>
              <div className="py-2 text-[#DFD6AE]/50 text-xs">Services</div>
              <div className="pl-4 space-y-2 mt-1">
                {subServices.map((service, index) => (
                  <button 
                    key={index} 
                    onClick={() => scrollToSection(service.id)}
                    className="block w-full text-left py-1 text-xs text-[#DFD6AE]/80"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => scrollToSection('real-sites')} className="block w-full text-left py-2">Real Sites</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2">Contact</button>
          </div>
        )}
      </nav>

      {/* --- MAIN CONTENT SECTIONS --- */}
      <div className="pt-20">
        
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[85vh] flex items-center justify-center text-center px-6 bg-gradient-to-b from-[#142325] to-[#0d1718]">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-6">
              Transforming Spaces Into Luxury
            </h1>
            <p className="text-sm md:text-base text-[#DFD6AE]/70 tracking-widest mb-8">
              PREMIUM INTERIOR & ARCHITECTURAL DESIGN SERVICES
            </p>
            <button onClick={() => scrollToSection('contact')} className="px-8 py-3 border border-[#DFD6AE] text-xs uppercase tracking-widest hover:bg-[#DFD6AE] hover:text-[#0d1718] transition-all">
              Get In Touch
            </button>
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
        <section id="services" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#DFD6AE]/10">
          <h2 className="text-2xl md:text-3xl font-light text-center tracking-widest mb-16 uppercase">Our Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  id={service.id}
                  className="bg-[#142325]/50 border border-[#DFD6AE]/10 p-8 rounded-xl hover:border-[#DFD6AE]/40 transition-all group cursor-pointer"
                  onClick={() => scrollToSection(service.id)}
                >
                  <Icon className="w-10 h-10 mb-6 text-[#DFD6AE] group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-medium mb-3">{service.name}</h3>
                  <p className="text-xs text-[#DFD6AE]/60 leading-relaxed">
                    Tailored interior solutions designed for elegance, durability, and seamless spatial utility.
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* REAL SITES / GALLERY */}
        <section id="real-sites" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#DFD6AE]/10">
          <h2 className="text-2xl md:text-3xl font-light text-center tracking-widest mb-16 uppercase">Real Project Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-64 bg-[#142325] border border-[#DFD6AE]/10 rounded-lg flex items-center justify-center text-xs text-[#DFD6AE]/40">Site Photo 1</div>
            <div className="h-64 bg-[#142325] border border-[#DFD6AE]/10 rounded-lg flex items-center justify-center text-xs text-[#DFD6AE]/40">Site Photo 2</div>
            <div className="h-64 bg-[#142325] border border-[#DFD6AE]/10 rounded-lg flex items-center justify-center text-xs text-[#DFD6AE]/40">Site Photo 3</div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 bg-[#142325] border-t border-[#DFD6AE]/10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-widest uppercase">Connect With Us</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-[#DFD6AE]/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}