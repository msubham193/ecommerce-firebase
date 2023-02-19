import React from "react";
import Delivery from "../assets/img/delivery.png";
import HeroBg from "../assets/img/Hreo-img.png";
import { heroData } from "../utils/data.js";
import Typewriter from "typewriter-effect";
const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-green-100 px-4 py-1 rounded-full">
          <p className="text-base text-green-500 font-semibold">
            Fast Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          Groceyish : The Fastest Delivery in
          <span className="text-green-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>

        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: [
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore quia quae itaque aliquam ipsum placeat ex dolorum est rem.",
              "Developed & Designed by Subham Mishra 😎😎",
            ],
          }}
        ></Typewriter>

        <button
          type="button"
          className="bg-gradient-to-br from-green-400 to-green-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
