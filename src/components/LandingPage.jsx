import React from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Service from './Service.jsx'
import WhyUS from './WhyUs.jsx'
import HowItWorks from './HowItWorks.jsx'
import Testimonials from './Testmonail.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
const LandingPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Service />
      <WhyUS />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default LandingPage
