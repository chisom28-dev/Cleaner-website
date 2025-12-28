import React from 'react'
import { Star } from 'lucide-react' // Using Lucide React icons

const testimonials = [
  {
    name: 'Sarah M.',
    message: 'Very professional and reliable. My house has never been this clean. The team was punctual and thorough - definitely booking again!',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d5?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    role: 'Homeowner',
    date: '2 weeks ago'
  },
  {
    name: 'James K.',
    message: 'Fast response and great service. They went above and beyond with our office cleaning. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    role: 'Business Owner',
    date: '1 month ago'
  },
  {
    name: 'Maria L.',
    message: 'Excellent deep cleaning service. They paid attention to every detail and used eco-friendly products.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    rating: 4,
    role: 'Apartment Resident',
    date: '3 days ago'
  }
]

const Testimonials = () => {
  return (
    <section className="bg-linear-to-b from-white to-green-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Customer Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-green-600">Happy Customers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about our cleaning services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200"
            >
              {/* Decorative element */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-green-500 rounded-xl rotate-45 opacity-10 group-hover:opacity-20 transition-opacity" />
              
              {/* Rating Stars */}
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating 
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-700">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Quote */}
              <div className="relative mb-8">
                <div className="text-6xl text-green-100 font-serif absolute -top-4 -left-2">"</div>
                <p className="text-lg text-gray-700 relative z-10 italic">
                  {testimonial.message}
                </p>
              </div>

              {/* Divider */}
              <div className="w-20 h-0.5 bg-linear-to-r from-green-400 to-emerald-400 mb-6" />

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="relative">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '500+', label: 'Happy Clients' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>Read More Reviews</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials