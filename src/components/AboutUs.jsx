import React from "react";
import About_img from "../assets/images/About_img.png";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col-reverse lg:flex-row w-full min-h-[90vh] max-w-7xl">
      {/* Left side image and video */}
      <div className="w-full md:w-[60%] relative flex flex-col sm:flex-row min-h-[70vh] max-h-[80vh]">
        <img
          className="object-cover rounded-sm md:w-[80%] sm:w-96 h-52 sm:h-64 md:h-80 lg:min-h-[70%] lg:max-h-[80%] shadow-2xl"
          src={About_img}
          alt="About Us Hero Image"
        />
        
        <div className="mt-5 w-full h-64 md:h-80 lg:h-52 lg:w-72 lg:max-w-72 lg:absolute lg:bottom-12 lg:right-10 border border-[#ED5E24] rounded-br-4xl rounded-tl-4xl overflow-hidden shadow-2xl bg-[#000000]/50">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/abiYRttaxpo?si=uPqvKbupU0QKppE9"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Right side text content */}
      <div className="w-full lg:w-[60%] pl-0 lg:pl-8 flex flex-col justify-start min-h-[70vh] max-h-[80vh]">
        <div className="relative px-2">
          <div className="h-7 w-1 bg-[#ED5E24]/50 absolute left-0"></div>
          <p className="text-xs md:text-sm lg:text-base xl:text-lg">Welcome to i-Cube Parking Elevator</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#ED5E24] montserrat">About Us</h2>
        </div>
        <p className="mt-2 mb-4 max-w-3xl mx-auto text-sm md:text-base lg:text-lg xl:text-xl">
          <strong>i-Cube Parking Elevators</strong> is a leading manufacturer of various types of car parking elevators.
        </p>
        <p className="mb-4 text-sm md:text-base lg:text-lg xl:text-xl">
          The company specializes in providing customized parking solutions for commercial and residential spaces.
        </p>
        <p className="mb-4 text-sm md:text-base lg:text-lg xl:text-xl">
          We are the pioneers in providing space-saving, economic, user-friendly MADE IN INDIA. 2000+ parking solutions installable from the basement to the rooftop.
        </p>
        <div className="flex gap-4 mt-4 open-sans flex-col sm:flex-row">
          <button className="bg-[#ED5E24] rounded-md text-white px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 xl:px-12 xl:py-5 mb-2 sm:mb-0 hover:bg-[#ED5E24]/90 cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl">
            Read More
          </button>
          <button className="bg-[#ED5E24] rounded-md text-white px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 xl:px-12 xl:py-5 hover:bg-[#ED5E24]/90 cursor-pointer text-sm md:text-base lg:text-lg xl:text-xl">
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
