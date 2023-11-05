import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { PiTelegramLogoDuotone } from "react-icons/pi";
function FooterBottom() {
  return (
    <div className="grid lg:flex justify-between text-center items-center">
      <h4 className="text-xl max-w-md lg:w-full">
        ⒸCopyright & All Rights Reserved 2023 IGORAZA PVT LTD. Designed By
        <span className="text-[#e60b42]"> IGORAZA</span>
      </h4>
      <div className="flex space-x-5 text-center mx-auto lg:mx-2">
        <a href="#" className="text-3xl text-white">
          <AiOutlineInstagram />
        </a>
        <a href="#" className="text-3xl text-white">
          <AiOutlineFacebook />
        </a>
        <a href="#" className="text-3xl text-white">
          <PiTelegramLogoDuotone />
        </a>
      </div>
    </div>
  );
}

export default FooterBottom;
