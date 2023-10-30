import {AiOutlineInstagram,AiOutlineFacebook} from "react-icons/ai"
import {PiTelegramLogoDuotone} from "react-icons/pi"
import RightSquareArrow from "./RightSquareArrow";
import LeftSquareArrow from "./LeftSquareArrow";
function ThirdHero({Decrement}) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#c5e1f6] to-[#eeb0bf] rounded-t-[25px]">
      <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <button onClick={Decrement} className="mt-4 lg:mt-0 lg:col-span-5 lg:flex">
            <LeftSquareArrow/>
          </button>
          <h1 className="text-center text-4xl">Third Hero</h1>
        </div>
      </section>
    </div>
  );
}

export default ThirdHero;
