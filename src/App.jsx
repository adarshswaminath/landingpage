import {BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Service from "./Components/Service/Service"
import Resources from "./Components/Resources/Resources"
import Contact from "./Components/Contact/Contact"
import Career from "./Components/Career/Career"

function AboutSection(){
  return(
    <div className="sm:px-16 px-6 sm:py-12 py-4">
       <Hero/>
        <About/>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className='App'>
      <Navbar/>
      <div className='bg-gradient-to-r from-[#c5e1f6] to-[#eeb0bf] rounded-t-[25px]'>
        <Routes>
          <Route exact path="/" element={<AboutSection/>}></Route>
          <Route exact path="/service" element={<Service/>}></Route>
          <Route exact path="/resources" element={<Resources/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/career" element={<Career/>}></Route>
        </Routes>

      <Footer/>
      </div>
    </div>
    </Router>
  )
}

export default App