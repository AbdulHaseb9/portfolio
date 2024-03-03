import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export const SocialLinks = () => {
  return (
    <div className="px-4 md:px-8 pt-9 pb-4 md:flex md:items-center">
      <div className="w-full flex justify-center items-center gap-3">
        <a
          href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100086119372055"
          target="_blank"
          className="hover:bg-blue-600 hover:text-white px-2 py-2 rounded-full"
        >
          <FaFacebookF className="cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/haseebsheikhofficial7/"
          target="_blank"
          className="hover:bg-red-600 hover:text-white px-2 py-2 rounded-full"
        >
          <FaInstagram className="cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/haseebsheikh14/"
          target="_blank"
          className="hover:bg-sky-600 hover:text-white px-2 py-2 rounded-full"
        >
          <FaLinkedinIn className="cursor-pointer" />
        </a>
        <a
          href="https://github.com/AbdulHaseb9"
          target="_blank"
          className="hover:bg-black hover:text-white px-2 py-2 rounded-full"
        >
          <BsGithub className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
};
