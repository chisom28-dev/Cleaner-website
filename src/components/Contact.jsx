import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    date: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    'Residential Cleaning',
    'Office Cleaning',
    'Deep Cleaning',
    'Move-in/Move-out',
    'Carpet Cleaning',
    'Other'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      alert('Thank you! We will contact you shortly.')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        date: ''
      })
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="relative bg-linear-to-br from-white to-green-50 py-20 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%2390d5b4%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready for a <span className="text-green-600">Spotless</span> Space?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book a cleaning service or get a free quote in minutes. Our team is ready to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Call Us</h4>
                    <p className="text-lg text-gray-700 mt-1">(234)91 3269 2042</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Sun, 8am-8pm</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-lg text-gray-700 mt-1">chisomsimeom <br className="hidden lg:block" />favour@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">Typically replies within 1 hour</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Service Area</h4>
                    <p className="text-lg text-gray-700 mt-1">Metro Area & Surrounding</p>
                    <p className="text-sm text-gray-500 mt-1">Free travel up to 20 miles</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Working Hours</h4>
                    <p className="text-lg text-gray-700 mt-1">24/7 Booking Available</p>
                    <p className="text-sm text-gray-500 mt-1">Emergency service available</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-12 p-6 bg-linear-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                  <h4 className="ml-3 font-bold text-gray-900">Prefer WhatsApp?</h4>
                </div>
                <p className="text-gray-600 mb-4">Get instant replies and quick quotes via WhatsApp.</p>
                <a
                  href="https://wa.me/"
                  className="inline-flex items-center justify-center w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Book Your Cleaning</h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 30 minutes.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <label
                        key={service}
                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                          formData.service === service
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service}
                          checked={formData.service === service}
                          onChange={handleChange}
                          required
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                          formData.service === service
                            ? 'border-green-500 bg-green-500'
                            : 'border-gray-300'
                        }`}>
                          {formData.service === service && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                        <span className="text-sm font-medium">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none resize-none"
                    placeholder="Tell us about your cleaning needs, special requests, or any concerns..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                  />
                  <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                    I agree to the terms and conditions and privacy policy
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Get Free Quote Now'
                  )}
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  We respond to all inquiries within 30 minutes during business hours
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Service Area</h3>
            <p className="text-gray-600">We proudly serve homes and businesses across the metro area</p>
          </div>
          <div className="relative h-96">
            <iframe
              title="Service Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1644257151998!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale(1) brightness(1.1)"
            />
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Service Area</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact