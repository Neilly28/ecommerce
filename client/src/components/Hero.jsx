import React from "react";
import Iphone from "../img/iphone.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-black bg-no-repeat bg-cover bg-center py-24 pt-40">
      <div className="container mx-auto flex flex-col md:flex-row justify-around h-full">
        <div className="p-12 sm:p-0 flex flex-col justify-center text-white">
          <h1 className="text-[44px] lg:text-[70px] leading-[1.1] font-light mb-4 ">
            INTRODUCING <br />
            <span className="font-semibold">THE NEW IPHONE</span>
          </h1>
          <Link
            to="/product/643820f8cb2025b503203099"
            className="uppercase self-start font-semibold border-b-2 border-black"
          >
            Learn More
          </Link>
        </div>
        <div className="lg:block">
          <img className="max-w-sm" src={Iphone} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
