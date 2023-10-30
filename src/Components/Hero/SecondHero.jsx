import {AiOutlineInstagram,AiOutlineFacebook} from "react-icons/ai"
import {PiTelegramLogoDuotone} from "react-icons/pi"
import RightSquareArrow from "./RightSquareArrow";
import LeftSquareArrow from "./LeftSquareArrow";
function SecondHero({Increment,Decrement}) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#c5e1f6] to-[#eeb0bf] rounded-t-[25px]">
      <section>
        <div className="grid lg:flex lg:justify-between max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <button onClick={Decrement} className="mt-0 lg:col-span-5 lg:flex">
           <LeftSquareArrow/>
          </button>
          <h1 className="text-center text-4xl">Hello Second Hero</h1>
          <button onClick={Increment} className="mt-0 lg:col-span-5 lg:flex">
            <RightSquareArrow/>
          </button>
        </div>
      </section>
    </div>
  );
}

export default SecondHero;
