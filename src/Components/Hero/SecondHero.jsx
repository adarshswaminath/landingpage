import React from "react";
import { motion } from "framer-motion";
import LeftSquareArrow from "./LeftSquareArrow";
import RightSquareArrow from "./RightSquareArrow";

function SecondHero({ Increment, Decrement }) {
  return (
    <motion.div
    initial={{ x: 1000 }}  // Initial position (off-screen to the left)
    animate={{ x: 0 }}       // Animate to the original position
      className="min-h-screen bg-gradient-to-r from-[#c5e1f6] to-[#eeb0bf] rounded-t-[25px]"
    >
      <section>
        <div className="grid lg:flex lg:justify-between max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <motion.button
            onClick={Decrement}
            className="mt-0 lg:col-span-5 lg:flex"
            whileHover={{ scale: 1.1 }}
          >
            <LeftSquareArrow />
          </motion.button>
          <h1 className="text-center text-4xl">Hello Second Hero</h1>
          <motion.button
            onClick={Increment}
            className="mt-0 lg:col-span-5 lg:flex"
            whileHover={{ scale: 1.1 }}
          >
            <RightSquareArrow />
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
}

export default SecondHero;
