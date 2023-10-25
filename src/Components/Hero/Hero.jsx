import React, { useState, useRef } from "react";
import design from "../../Images/design.png";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Hero() {
  const images = [
    {
      url: design,
      caption: "Image 1",
    },
    {
      url: "https://igorazaa.vercel.app/assets/project3.c22f55d4.png",
      caption: "Image 2",
    },
    {
      url: "https://igorazaa.vercel.app/assets/project4.8121d93e.png",
      caption: "Image 3",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    if (carouselRef.current) {
      const nextIndex = (slideIndex + 1) % images.length;
      setSlideIndex(nextIndex);
      carouselRef.current.next();
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      const prevIndex = (slideIndex - 1 + images.length) % images.length;
      setSlideIndex(prevIndex);
      carouselRef.current.prev();
    }
  };

  return (
    <div className="min-h-screen mt-4 items-center justify-center bg-gradient-to-r from-[#c5e1f6] to-[#eeb0bf] rounded-t-[24px]">
      <div className="py-20 grid lg:flex justify-between p-3 items-center gap-20">
        <div>
          {/* ... Your existing content ... */}
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
          
        </div>
        <div className="shadow-xl p-3 flex items-center justify-center">
          <Carousel
            useKeyboardArrows={true}
            showArrows={false}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            selectedItem={slideIndex}
            ref={carouselRef}
            onMouseOver={() => carouselRef.current.pause()}
            onMouseOut={() => carouselRef.current.start()}
          >
            {images.map((image, index) => (
              <div className="slide" key={index}>
                <img src={image.url} alt={image.caption} className="p-2 rounded-lg lg:h-96 lg:w-96 mt-2" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Hero;
