"use client"
import React from "react";
import Lottie from "lottie-react";
import animation from "@/assets/animation.json";

function Home() {
  return (
    <div className="bg-[#494955] min-h-screen text-white flex flex-col items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="grid lg:grid-cols-2 lg:items-center gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-l from-pink-600 to-sky-700">IGORAZA</span>
            </h1>
            <button className="mt-2 px-5 py-2 bg-black text-white rounded-full font-bold hover:-translate-y-1 transform transition duration-200 hover:scale-105">
              Get Started
            </button>
          </div>
          <div className="text-center mt-4 lg:mt-0">
            <Lottie animationData={animation} loop={true} width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
