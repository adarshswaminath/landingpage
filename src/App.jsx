import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'



function App() {
  return (
    <div>
      <Navbar/>
      <div className='bg-gradient-to-r from-[#c5e1f6] to-[#eeb0bf] rounded-t-[25px]'>
      <Hero/>
      <div className="sm:px-16 px-6 sm:py-12 py-4">
        <About/>
      </div>
      </div>
    </div>
  )
}

export default App