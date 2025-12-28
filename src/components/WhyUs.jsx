import React from 'react';

const WhyUS = () => {
  const features = [
    {
      title: 'Trained Professionals',
      description: 'Background-checked, experienced cleaners you can trust.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stat: '100+'
    },
    {
      title: 'Eco-Friendly',
      description: 'We use safe, non-toxic cleaning products.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      stat: 'Eco-Safe'
    },
    {
      title: 'Flexible Scheduling',
      description: 'Book at your convenience with same-day options.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: '24/7'
    },
    {
      title: 'Satisfaction Guarantee',
      description: 'Not happy? We\'ll make it right, guaranteed.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: '100%'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-100 mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-emerald-700">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We Make <span className="text-emerald-600">Cleaning</span> Easy
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the difference with our professional cleaning services designed for your convenience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 
                       hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-50 
                       transition-all duration-300 hover:-translate-y-2"
            >
              {/* Top-left accent */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-green-500/5 rounded-br-2xl rounded-tl-2xl" />
              
              {/* Icon container */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl 
                              bg-gradient-to-br from-emerald-500 to-green-600 text-white 
                              group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Feature title and description */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base mb-6">
                {feature.description}
              </p>

              {/* Stat badge */}
              <div className="inline-flex items-center justify-center px-4 py-2 bg-emerald-50 
                            text-emerald-700 rounded-full text-sm font-semibold">
                {feature.stat}
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                            w-12 h-1 bg-gradient-to-r from-emerald-500 to-green-600 
                            rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">4.9</div>
              <div className="text-emerald-100">Star Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-emerald-100">Happy Clients</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24h</div>
              <div className="text-emerald-100">Service Response</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-emerald-100">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <button className="group relative bg-gradient-to-r from-emerald-500 to-green-600 
                           text-white px-8 py-4 rounded-full font-bold text-lg 
                           hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300">
            <span className="relative z-10">Book Your Cleaning Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 
                          rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <p className="mt-6 text-gray-600">
            No hidden fees • Free quotes • 24/7 customer support
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUS;