import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    // { name: 'Home', href: '#' },
    { name: 'Services', to: '/Service' },
    { name: 'How it works', to: '/HowItWorks' },
    { name: 'Contact', to: '/Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <Link to="/" className="text-2xl font-bold tracking-tight">
              <span className="text-gray-900">Spark</span>
              <span className="text-emerald-600">&Shine</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-200">
              <a  href="https://wa.me/2347059262039?text=Hi%20I%20want%20to%20book%20your%20service" 
              target="_blank" rel="noopener noreferrer">
              Book Now
              </a>
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-gray-700 hover:text-emerald-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-linear-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold mt-4">
                  <a  href="https://wa.me/2347059262039?text=Hi%20I%20want%20to%20book%20your%20service" 
              target="_blank" rel="noopener noreferrer">
              Book Now
              </a>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;