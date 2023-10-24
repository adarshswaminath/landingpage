import React from "react";
import design from "../Images/design.png"
import {BsInstagram,BsFacebook,BsTwitter} from "react-icons/bs"
function Hero() {
  return (
    <div className="min-h-screen mt-4 items-center justify-center bg-gradient-to-r from-[#c5e1f6] to-[#eeb0bf] rounded-t-[24px]">
      <div className="py-20 grid lg:flex justify-between p-3 items-center gap-20">
        <div>
          <h3 className="text-white font-bold tracking-[.25em] uppercase">
            build anything
          </h3>
          <h1 className="text-3xl uppercase tracking-tight text-gray-600 sm:text-6xl sm:tracking-tight lg:text-[2rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]">
            innovation{" "}
          </h1>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-gray-600 sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[4rem] xl:tracking-tight 2xl:text-[6.5rem]">
            meets reality
          </h1>
          <p className="mt-3 max-w-sm text-gray-500">
            We're excited to have you on our journey.Your presence makes this
            day even more specialx
          </p>
          <button className="px-6 py-2 font-bold uppercase text-cyan-500 mt-6 bg-white rounded-full">get started</button>
          <div className="mt-16 flex items-center space-x-5 justify-center lg:justify-start">
            <BsInstagram className="text-2xl text-white"/>
            <BsFacebook className="text-2xl text-white"/>
            <BsTwitter className="text-2xl text-white"/>

          </div>
        </div>
        <div className="shadow-xl  p-3 flex items-center justify-center">
            <img src={design} alt="Design image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
