import logo from "../Images/logo.png";
const Navbar = () => {
  return (
    <div className="top-0 right-0 sticky p-3 flex items-center justify-between z-50 bg:blur backdrop-blur bg-white/10 bg-opacity-30">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-11 w-11" />
        <h2 className="text-3xl font-bold text-gray-500">IGORAZA</h2>
      </div>
      {/*  */}
      <div className="hidden lg:flex items-center gap-4">
        <span className="font-bold uppercase text-gray-500 hover:text-cyan-500">Home</span>
        <span className="font-bold uppercase text-gray-500 hover:text-cyan-500">Service</span>
        <span className="font-bold uppercase text-gray-500 hover:text-cyan-500">Resources</span>
        <span className="font-bold uppercase text-gray-500 hover:text-cyan-500">Contact</span>

      </div>
    </div>
  );
};

export default Navbar;
