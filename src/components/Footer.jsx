import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Shield, Clock, Award, ChevronRight, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' }
  ]

  const services = [
    { name: 'Residential Cleaning', href: '/services/residential' },
    { name: 'Commercial Cleaning', href: '/services/commercial' },
    { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
    { name: 'Move-in/Move-out', href: '/services/moving' },
    { name: 'Carpet Cleaning', href: '/services/carpet' },
    { name: 'Window Cleaning', href: '/services/windows' }
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
    { name: 'FAQ', href: '/faq' }
  ]

  const features = [
    { icon: <Shield className="w-5 h-5" />, text: 'Insured & Bonded' },
    { icon: <Sparkles className="w-5 h-5" />, text: 'Eco-Friendly Products' },
    { icon: <Clock className="w-5 h-5" />, text: '24/7 Support' },
    { icon: <Award className="w-5 h-5" />, text: '5-Star Rated' }
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-bold truncate">Ready for a Spotless Home?</h3>
                <p className="text-white/90 text-sm md:text-base truncate">Book your cleaning today and get 20% off your first service!</p>
              </div>
            </div>
            <button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2.5 md:px-8 md:py-3 rounded-full font-semibold flex items-center transition-all hover:scale-105 whitespace-nowrap text-sm md:text-base flex-shrink-0">
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
              Call Now: (234) 705 926 2039
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12">
          {/* Brand Column */}
          <div className="w-full">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3 flex-shrink-0">
                <Sparkles className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl md:text-2xl font-bold truncate">Clean<span className="text-green-400">Pro</span></h2>
                <p className="text-gray-400 text-xs md:text-sm truncate">Professional Cleaning Services</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm md:text-base mb-6 wrap-break-words">
              Transforming spaces with professional cleaning services you can trust. 
              We're committed to delivering exceptional results every time.
            </p>
            
            <div className="space-y-3 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <div className="text-green-400 mr-3 shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-xs md:text-sm wrap-break-words">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-3 md:space-x-4">
              <Link to="" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors shrink-0">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors shrink-0">
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors shrink-0">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors shrink-0">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name} className="overflow-hidden">
                  <a 
                    href={link.href} 
                    className="flex items-center text-gray-400 hover:text-green-400 transition-colors group text-sm md:text-base"
                  >
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 mr-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="truncate">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="w-full">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Our Services</h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service.name} className="overflow-hidden">
                  <a 
                    href={service.href} 
                    className="flex items-center text-gray-400 hover:text-green-400 transition-colors group text-sm md:text-base"
                  >
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 mr-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="truncate">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-400 text-xs md:text-sm">Call us</p>
                  <p className="font-medium text-sm md:text-base truncate">(234) 705 926 2039</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 shrink-0">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-400 text-xs md:text-sm">Email us</p>
                  <p className="font-medium text-sm md:text-base truncate">chisomsimeomfavour@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 shrink-0">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-400 text-xs md:text-sm">Service Area</p>
                  <p className="font-medium text-sm md:text-base truncate">Metro Area & Surrounding</p>
                </div>
              </div>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800">
                <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Newsletter</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-l-lg sm:rounded-r-none px-4 py-2 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 text-sm md:text-base min-w-0"
                  />
                  <button className="bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-4 py-2 md:py-3 rounded-lg sm:rounded-r-lg sm:rounded-l-none font-medium transition-colors text-sm md:text-base whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6 md:my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-6">
          <div className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0">
            <p>© {currentYear} CleanPro. All rights reserved.</p>
            <div className="flex flex-wrap gap-2 md:gap-4 mt-1 md:mt-2">
              <a href="/privacy" className="hover:text-green-400 transition-colors text-xs md:text-sm">Privacy Policy</a>
              <a href="/terms" className="hover:text-green-400 transition-colors text-xs md:text-sm">Terms of Service</a>
              <a href="/cookies" className="hover:text-green-400 transition-colors text-xs md:text-sm">Cookie Policy</a>
              <a href="/sitemap" className="hover:text-green-400 transition-colors text-xs md:text-sm">Sitemap</a>
            </div>
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="flex items-center">
              <span className="text-gray-400 text-xs md:text-sm mr-2 hidden sm:inline">Certified:</span>
              <div className="flex space-x-1 md:space-x-2">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-800 rounded flex items-center justify-center">
                  <Award className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                </div>
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-800 rounded flex items-center justify-center">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <a 
                href="https://wa.me/2347059262039?text=Hi%20I%20want%20to%20book%20your%20service" 
                className="inline-flex items-center bg-green-600 hover:bg-green-700 px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl shadow-2xl p-3 max-w-full mx-auto">
          <div className="flex items-center justify-between">
            <div className="min-w-0 mr-3">
              <p className="font-semibold text-sm truncate">Need Help?</p>
              <p className="text-xs opacity-90 truncate">Tap to call or message</p>
            </div>
            <div className="flex space-x-2 flex-shrink-0">
              <a 
                href="tel:07059262039"
                className="bg-white text-green-600 hover:bg-gray-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a 
               href="https://wa.me/2347059262039?text=Hi%20I%20want%20to%20book%20your%20service" 
                className="bg-white text-green-600 hover:bg-gray-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add padding-bottom to main content to avoid overlap with fixed CTA */}
      <style jsx>{`
        @media (max-width: 768px) {
          body {
            padding-bottom: 80px;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer