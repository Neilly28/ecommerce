import React from "react";
import WomanImg from "../img/woman_hero.png";
import Woman from "../img/woman.jpg";
import Iphone from "../img/hd.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-black h-[800px] bg-her bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center text-white">
          <div className="font-semibold flex items-center uppercase"></div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4 ">
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
        <div className="hidden lg:block">
          <img className="max-w-sm" src={Iphone} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
