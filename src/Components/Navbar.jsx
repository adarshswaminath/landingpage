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
        <a className="font-bold uppercase text-gray-500 hover:text-cyan-500 cursor-pointer">Home</a>
        <a className="font-bold uppercase text-gray-500 hover:text-cyan-500 cursor-pointer">Service</a>
        <a className="font-bold uppercase text-gray-500 hover:text-cyan-500 cursor-pointer">Resources</a>
        <a className="font-bold uppercase text-gray-500 hover:text-cyan-500 cursor-pointer">Contact</a>

      </div>
    </div>
  );
};

export default Navbar;
