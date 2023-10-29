import {AiOutlineInstagram,AiOutlineFacebook} from "react-icons/ai"
import {PiTelegramLogoDuotone} from "react-icons/pi"
import RightSquareArrow from "./RightSquareArrow";
function MainHero() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#c5e1f6] to-[#eeb0bf] rounded-t-[25px]">
      <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="text-white font-bold uppercase tracking-[4px] mb-2">build anything</h2>
            <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl uppercase text-gray-600">
              innovation{" "}<br/>
              <span className="font-extrabold mt-4 max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl uppercase text-gray-600">Meets Reality</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
            We're excited to have you on our journey.Your presence makes this
              day even more specialx
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-2 mr-3 uppercase font-bold text-center text-blue-500 bg-white focus:ring-4 rounded-full "
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="flex gap-3 py-4 lg:py-12">
            <span className="text-white text-2xl">
              <AiOutlineInstagram/>
            </span>
            <span className="text-white text-2xl">
              <AiOutlineFacebook/>
            </span>
            <span className="text-white text-2xl">
              <PiTelegramLogoDuotone/>
            </span>
          </div>
          </div>
          <div className="mt-4 lg:mt-0 lg:col-span-5 lg:flex">
            <RightSquareArrow/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainHero;
