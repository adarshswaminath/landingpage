import { useState } from "react";
import MainHero from "./MainHero";
import SecondHero from "./SecondHero";
import ThirdHero from "./ThirdHero";

const Hero = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const Increment = () => {
    console.log(currentValue);
    setCurrentValue(currentValue + 1)}
  const Decrement = () => setCurrentValue(currentValue - 1)
  console.log(currentValue);
  return (
    <div>
      {currentValue === 1 ? (
        <SecondHero Increment={Increment} Decrement={Decrement}/>
      ) : currentValue === 2 ? (
        <ThirdHero Decrement={Decrement}  />
      ) : (
        <MainHero Increment={Increment}/>
      )}
    </div>
  );
};

export default Hero;
