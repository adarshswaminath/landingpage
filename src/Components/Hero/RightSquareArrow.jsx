import { AiOutlineDoubleRight } from "react-icons/ai";
import design from "../../Images/design.png";
function RightSquareArrow() {
  return (
    <div className="mt-0 lg:mt-10 flex items-center h-64 p-2 lg:h-80 w-94 lg:w-full bg-[#eeafbc] -skew-x-3">
      <img src={design} className="object-contain h-64 w-64" alt="" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="text-6xl text-gray-100"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}

export default RightSquareArrow;
