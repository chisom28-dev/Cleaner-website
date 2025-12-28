import React from 'react';

const HowItWorks = () => {
  const steps = [
    { number: 1, title: 'Book Online', desc: 'Schedule in 2 minutes', icon: '📅' },
    { number: 2, title: 'We Clean', desc: 'Professional service', icon: '🧹' },
    { number: 3, title: 'Relax', desc: 'Enjoy your clean space', icon: '✨' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It <span className="text-emerald-600">Works</span>
          </h2>
          <p className="text-gray-600">Simple process, professional results</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step number */}
              <div className="relative mb-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 
                              flex items-center justify-center text-emerald-600 
                              text-2xl font-bold mb-4">
                  {step.number}
                </div>
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-8 left-3/4 w-full h-0.5 bg-gray-200" />
                )}
              </div>
              
              {/* Icon */}
              <div className="text-4xl mb-4">{step.icon}</div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-full 
                           font-bold hover:bg-emerald-700 transition">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;