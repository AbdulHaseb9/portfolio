import React, { useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { ImCross } from "react-icons/im";

export const Navbar = () => {
  const [respnav, setrespnav] = useState(false);

  return (
    <>
      <nav className="px-4 md:px-8 py-4 flex justify-between items-center shadow-[0px_0px_14px_8px_#00000024]">
        <div className="flex items-center gap-4">
          <div
            className="sm:hidden text-xl cursor-pointer"
            onClick={() => setrespnav(!respnav)}
          >
            <HiMiniBars3CenterLeft />
          </div>
          <div>
            <h3 className="font-bold text-xl">Portfolio</h3>
          </div>
        </div>
        <div className="hidden md:block">
          <a
            href="#"
            className="text-sm px-2 font-semibold hover:text-primaryblue transition-all duration-100"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm px-2 font-semibold hover:text-primaryblue transition-all duration-100"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="text-sm px-2 font-semibold hover:text-primaryblue transition-all duration-100"
          >
            About me
          </a>
          {/* <a
          href="#"
          className="text-sm px-2 font-semibold hover:text-primaryblue transition-all duration-100"
        >
          Testimonials
        </a> */}
        </div>
        <div>
          <button className="px-2 py-1 text-primaryblue font-semibold border border-primaryblue rounded-sm hover:text-white hover:bg-primaryblue transition-all duration-200">
            Contact Me
          </button>
        </div>
      </nav>
      <div
        className={`bg-white h-screen w-56 flex items-center flex-col transition-all duration-300 fixed top-0 ${
          respnav ? `-left-0` : `-left-full`
        }`}
      >
        <div className="flex justify-end w-full py-6 mr-8">
          <ImCross
            className="cursor-pointer"
            onClick={() => setrespnav(false)}
          />
        </div>
        <div className="text-center">
          <ul>
            <li className="my-3">
              <a
                href="#"
                className="text-sm font-semibold hover:text-primaryblue transition-all duration-100"
              >
                Home
              </a>
            </li>
            <li className=" my-3">
              <a
                href="#"
                className="text-sm font-semibold hover:text-primaryblue transition-all duration-100"
              >
                Portfolio
              </a>
            </li>
            <li className="my-3">
              <a
                href="#"
                className="text-sm font-semibold hover:text-primaryblue transition-all duration-100"
              >
                About me
              </a>
            </li>
          </ul>
          <button className="px-2 py-1 text-primaryblue font-semibold border border-primaryblue rounded-sm hover:text-white hover:bg-primaryblue transition-all duration-200">
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};
