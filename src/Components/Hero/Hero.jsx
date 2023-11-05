import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import RightSquareArrow from "./RightSquareArrow";
function Hero() {
  return (
    <div className="min-h-screen">
      <section className="h-screen grid lg:flex items-center lg:justify-between py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
        <div>
          <h3 className="text-white font-extrabold tracking-[2px] ">
            BUILD ANYTHING
          </h3>
          <h1 className="mb-4 text-5xl lg:text-7xl tracking-tight leading-none text-gray-800">
            INNOVATION
            <br />
            <span className="font-extrabold">MEETS REALITY</span>
          </h1>
          <p className="max-w-md text-gray-600">
            We're excited to have you on our journey.Your presence makes this
            day even more specialx
          </p>
          {/* btn */}
          <div className="mt-5">
            <button className="flex items-center gap-2 bg-white rounded-full uppercase p-2 px-5 font-bold text-blue-500">
              get started
              <ArrowSvg />
            </button>
          </div>
          {/* social icons */}
          <div className="flex mt-5 gap-3 mx-2 text-2xl text-white">
            <a href="#"><AiOutlineInstagram/></a>
            <a href="#"><AiOutlineFacebook/></a>
            <a href="#"><PiTelegramLogoDuotone/></a>
          </div>
        </div>
        <div>
          <RightSquareArrow />
        </div>
      </section>
    </div>
  );
}

export default Hero;

const ArrowSvg = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </div>
  );
};
