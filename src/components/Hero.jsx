import React from "react";
import HeroImage from "../assets/Hero.png"; // Placeholder for hero image
const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center bg-linear-to-br from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full max-lg:mt-12">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span>Trusted & Reliable</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="block text-gray-900">Sparkling Clean</span>
              <span className="block text-emerald-600">Spaces</span>
              <span className="block text-gray-900">Every Time</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg">
              Fast, affordable cleaning for busy homes & offices.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition">
                Book Now
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition">
                Call Now
              </button>
            </div>

            {/* Quick Features */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600">✓</span>
                <span>Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600">✓</span>
                <span>Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600">✓</span>
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-125 rounded-3xl overflow-hidden shadow-xl ">
              {/* Image placeholder */}
              <div className="absolute inset-0 bg-line-to-br from-emerald-400 to-green-500">
                <img className="h-full" src={HeroImage} alt="Hero" />
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden w-full h-64 rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
            <img src={HeroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
