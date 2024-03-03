import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="bg-secondarylight px-4 md:px-8 py-20 md:flex md:items-center">
      <div
        className="w-full md:w-1/2 ml-0 lg:ml-20 text-center md:text-left"
        data-aos="fade-right"
      >
        <h3 className="text-sm font-semibold">Hey, I am Haseeb Sheikh</h3>
        <h1 className="text-3xl font-semibold my-3">
          I am <span className="text-primaryblue"> Full Stack Developer </span>
        </h1>
        <p className="mb-3 font-semibold">
          I am Passionate mern stack developer open to collaborate
        </p>
        <button className="bg-primaryblue text-white hover:text-primaryblue hover:border hover:border-primaryblue hover:bg-transparent px-2 py-2 rounded-sm transition-all duration-100 font-semibold">
          Download Resume
        </button>
      </div>
      <div
        className="w-full md:w-1/2 flex justify-center mt-20"
        data-aos="fade-left"
      >
        <div className="w-72 lg:w-96 h-60 bg-[#cae0eb] rounded-3xl"></div>
      </div>
    </div>
  );
};
