import React from 'react';

const services = [
  { title: 'Home Cleaning', icon: '🏠', desc: 'Regular and deep cleaning for homes.' },
  { title: 'Office Cleaning', icon: '🏢', desc: 'Professional workplace cleaning.' },
  { title: 'Deep Cleaning', icon: '✨', desc: 'Detailed cleaning for all areas.' },
  { title: 'Move Cleaning', icon: '🚚', desc: 'Pre/post-move cleaning services.' },
];

const Service = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-gray-600">Professional cleaning solutions for every need</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 
                                      hover:border-emerald-300 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
              <button className="text-emerald-600 font-semibold text-sm hover:text-emerald-700">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold 
                           hover:bg-emerald-700 transition">
            View All Services
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Service;