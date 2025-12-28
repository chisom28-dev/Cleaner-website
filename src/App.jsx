import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar.jsx'
// import Hero from './components/Hero.jsx'
import Service from './components/Service.jsx'
// import WhyUS from './components/WhyUs.jsx'
import HowItWorks from './components/HowItWorks.jsx'
// import Testimonials from './components/Testmonail.jsx'
import Contact from './components/Contact.jsx'
// import Footer from './components/Footer.jsx'
import LandingPage from './components/LandingPage.jsx'
import Navbar from './components/Navbar.jsx'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<LandingPage />} />
      {/*  */}
      <Route path='Service' element ={<Service />} />
      {/* <Route path='Hero' element ={<Hero />} /> */}
      {/* <Route path='Navbar' element={<Navbar />} /> */}
      {/* <Route path='WhyUS' element ={<WhyUS />} /> */}
      <Route path='HowItWorks' element ={<HowItWorks />} />
      {/* <Route path='Testimonials' element ={<Testimonials />} /> */}
      <Route path='Contact' element ={<Contact />} />
      {/* <Route path='Footer' element ={<Footer />} /> */}
    </Routes>
    </BrowserRouter>
      {/* <Navbar />
      <Hero />
      <Service />
      <WhyUS />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default App
