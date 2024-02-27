import React from "react";
import abouteclipse from "../assets/images/abouteclipse.png";

export const About = () => {
  return (
    <div className="bg-secondarylight px-4 md:px-8 py-20 md:flex md:items-center">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={abouteclipse} alt="Shapes" className="w-72" />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h4 className="text-base font-semibold">About</h4>
        <h2 className="text-3xl font-bold my-3">About Me</h2>
        <p className="text-sm my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
          faucibus massa sollicitudin amet augue. Nibh metus a semper purus
          mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
          adipiscing velit non nulla in amet pellentesque.
        </p>
        <p className="text-sm my-4">
          Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
          eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod
          risus r.
        </p>
      </div>
    </div>
  );
};
