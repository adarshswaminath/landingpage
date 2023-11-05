import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'



function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='bg-gradient-to-r from-[#c5e1f6] to-[#eeb0bf] rounded-t-[25px]'>
      <Hero/>
      <div className="sm:px-16 px-6 sm:py-12 py-4">
        <About/>
        <Footer/>
      </div>
      </div>
    </div>
  )
}

export default App