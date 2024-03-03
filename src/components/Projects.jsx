import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import projecthoobank from "../assets/images/projecthoobank.png";
import projectgreenmind from "../assets/images/projectgreenmind.png";
import projectdysseycosmoc from "../assets/images/projectdysseycosmoc.png";
import projectloremipsum from "../assets/images/projectloremipsum.png";

export const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="px-4 md:px-8 py-20 flex justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div
          className="h-[320px] shadow-2xl rounded-lg overflow-hidden"
          data-aos="fade-right"
        >
          <img
            src={projecthoobank}
            alt="HooBank Project Picture"
            className="w-full h-48 object-cover object-top"
          />
          <h3 className="text-lg mt-2 ml-5 font-semibold hover:text-primaryblue transition-all duration-100">
            HooBank
          </h3>
          <p className="text-sm ml-5 mb-2 mr-2">
            UI clone using react vite js and tailwindcss
          </p>
          <div className="flex">
            <div>
              <a
                href="https://projecthoobank.web.app/"
                target="_blank"
                className="text-sm font-bold gap-2 flex items-center ml-5"
              >
                Live Demo
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnElEQVR4nO2UMQqDMBRA395rWPiD3qB4ogpupdKerJvH6OJY6NArWFIySDDRxp8h4INPyPJeCBrYyYEauKyYBjjEBD7AuHLamMAVeHjm6QTuKCLAK1WgBN5WatZBMyCTkxt5BfRaAZmRoxUQj1wlIAH55oAsyDcFSudrMXsCgVsKuaGzf/wJxWuJ5vjHyaNoUsqxT+4ZKH67nez5AkNBUdhQXn7fAAAAAElFTkSuQmCC" />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm font-bold gap-2 flex items-center ml-5"
              >
                Get Code
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="22"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="h-[320px] shadow-2xl rounded-lg overflow-hidden"
          data-aos="fade-up"
        >
          <img
            src={projectgreenmind}
            alt="HooBank Project Picture"
            className="w-full h-48 object-cover object-top"
          />
          <h3 className="text-lg mt-2 ml-5 font-semibold hover:text-primaryblue transition-all duration-100">
            Green Mind
          </h3>
          <p className="text-sm ml-5 mb-2 mr-2">
            UI clone using react vite js and tailwindcss
          </p>
          <div className="flex">
            <div>
              <a
                href="https://hsgreenmind.web.app/"
                target="_blank"
                className="text-sm font-bold gap-2 flex items-center ml-5"
              >
                Live Demo
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnElEQVR4nO2UMQqDMBRA395rWPiD3qB4ogpupdKerJvH6OJY6NArWFIySDDRxp8h4INPyPJeCBrYyYEauKyYBjjEBD7AuHLamMAVeHjm6QTuKCLAK1WgBN5WatZBMyCTkxt5BfRaAZmRoxUQj1wlIAH55oAsyDcFSudrMXsCgVsKuaGzf/wJxWuJ5vjHyaNoUsqxT+4ZKH67nez5AkNBUdhQXn7fAAAAAElFTkSuQmCC" />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm font-bold gap-2 flex items-center ml-5"
              >
                Get Code
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="22"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="h-[320px] shadow-2xl rounded-lg overflow-hidden"
          data-aos="fade-down"
        >
          <img
            src={projectdysseycosmoc}
            alt="HooBank Project Picture"
            className="w-full h-48 object-cover object-top"
          />
          <h3 className="text-lg mt-2 ml-5 font-semibold hover:text-primaryblue transition-all duration-100">
            Dyssey - Cosmoc
          </h3>
          <p className="text-sm ml-5 mb-2 mr-2">
            UI clone using react vite js and tailwindcss
          </p>
          <div className="flex">
            <div>
              <a
                href="https://dyssey-cosmoc.web.app/"
                target="_blank"
                className="text-sm font-bold gap-2 flex items-center ml-5"
              >
                Live Demo
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnElEQVR4nO2UMQqDMBRA395rWPiD3qB4ogpupdKerJvH6OJY6NArWFIySDDRxp8h4INPyPJeCBrYyYEauKyYBjjEBD7AuHLamMAVeHjm6QTuKCLAK1WgBN5WatZBMyCTkxt5BfRaAZmRoxUQj1wlIAH55oAsyDcFSudrMXsCgVsKuaGzf/wJxWuJ5vjHyaNoUsqxT+4ZKH67nez5AkNBUdhQXn7fAAAAAElFTkSuQmCC" />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm font-bold gap-2 flex items-center ml-5"
              >
                Get Code
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="22"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="h-[320px] shadow-2xl rounded-lg overflow-hidden"
          data-aos="fade-left"
        >
          <img
            src={projectloremipsum}
            alt="HooBank Project Picture"
            className="w-full h-48 object-cover object-top"
          />
          <h3 className="text-lg mt-2 ml-5 font-semibold hover:text-primaryblue transition-all duration-100">
            HooBank
          </h3>
          <p className="text-sm ml-5 mb-2 mr-2">
            UI clone using react vite js and tailwindcss
          </p>
          <div className="flex">
            <div>
              <a
                href="https://logoipsumweb.netlify.app/"
                target="_blank"
                className="text-sm font-bold gap-2 flex items-center ml-5"
              >
                Live Demo
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnElEQVR4nO2UMQqDMBRA395rWPiD3qB4ogpupdKerJvH6OJY6NArWFIySDDRxp8h4INPyPJeCBrYyYEauKyYBjjEBD7AuHLamMAVeHjm6QTuKCLAK1WgBN5WatZBMyCTkxt5BfRaAZmRoxUQj1wlIAH55oAsyDcFSudrMXsCgVsKuaGzf/wJxWuJ5vjHyaNoUsqxT+4ZKH67nez5AkNBUdhQXn7fAAAAAElFTkSuQmCC" />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="text-sm font-bold gap-2 flex items-center ml-5"
              >
                Get Code
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="22"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
