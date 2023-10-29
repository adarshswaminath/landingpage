import { AiOutlineDoubleLeft } from "react-icons/ai";
import design from "../../Images/design.png";
function LeftSquareArrow() {
  return (
    <div className="mt-0 lg:mt-10 flex items-center h-64 p-2 lg:h-80 w-94 lg:w-full -skew-x-3">
        <AiOutlineDoubleLeft className="text-8xl text-white"/>
      {/* <img src={design} className="object-contain h-64 w-64" alt="" /> */}
    </div>
  );
}

export default LeftSquareArrow;
