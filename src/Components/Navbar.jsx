import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import ResourceList from "./Resources/ResourceList";
import { useState } from "react";
const linkStyle =
  "font-bold uppercase text-gray-500 hover:text-cyan-500 cursor-pointer";


  const Navbar = () => {
    const [isView,setView] = useState(false)
  return (
    <div className="top-0 right-0 sticky p-3 flex items-center justify-between z-50 bg:blur backdrop-blur bg-white/10 bg-opacity-30">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-11 w-11" />
        <h2 className="text-3xl font-bold text-gray-500">IGORAZA</h2>
      </div>
      {/*  */}
      <div className="hidden md:flex lg:flex items-center gap-4">
        <Link to="/" className={`${linkStyle}`}>
          Home
        </Link>
        <Link to="/service" target="_blank" className={`${linkStyle}`}>
          Service
        </Link>
        <div 
          onMouseLeave={() => setView((prev) => !prev)}
          onMouseEnter={() => setView((prev) => !prev)}>
          <Link to="/resources" target="_blank" className={`${linkStyle}`}>
            Resources
          </Link>
          { isView ? <ResourceList/> : null}
        </div>
        <Link to="/contact" target="_blank" className={`${linkStyle}`}>
          Contact
        </Link>
        <Link to="/career" target="_blank" className={`${linkStyle}`}>
          Careers
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
