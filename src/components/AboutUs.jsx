import React from "react";
import About_img from "../assets/images/About_img.png";



const AboutUs = () => {
  return (
    <>
      <div className="container relative mx-auto px-4 py-12 flex-col-reverse flex lg:flex-row w-full">
        {/* Left side image and video */}
        <div className="w-full lg:w-[40%] relative mt-8 lg:mb-0 flex flex-col sm:flex-row">
            <img
                className="object-cover rounded-sm w-full sm:w-96 h-52 sm:h-64 md:h-80 lg:h-52 shadow-2xl"
                src={About_img}
                alt="About Us Hero Image"
            />
            
            <div className="mt-5 w-full h-64 md:h-80 lg:absolute lg:-bottom-2 lg:right-10 border border-[#ED5E24] rounded-br-4xl rounded-tl-4xl overflow-hidden lg:h-40 lg:w-60 shadow-2xl bg-[#000000]/50">
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
        <div className="w-full lg:w-[60%] pl-0 lg:pl-8">
          <div className="relative px-2">
            <div className="h-7 w-1 bg-[#ED5E24]/50 absolute left-0 "></div>
            <p className="text-xs">Welcome to i-Cube Parking Elevator</p>
            <h2 className="text-2xl font-bold text-[#ED5E24] montserrat">About Us</h2>
          </div>
          <p className="mt-2 mb-4 max-w-3xl mx-auto">
            <strong>i-Cube Parking Elevators</strong> is a leading manufacturer of various types of car parking elevators.
          </p>
          <p className="mb-4">
            The company specializes in providing customized parking solutions for commercial and residential spaces.
          </p>
          <p className="mb-4">
            We are the pioneers in providing space-saving, economic, user-friendly MADE IN INDIA. 2000+ parking solutions installable from the basement to the rooftop.
          </p>
          <div className="flex gap-4 mt-4 open-sans flex-col sm:flex-row">
            <button className="bg-[#ED5E24] rounded-sm text-white px-6 py-2 mb-2 sm:mb-0">Read More</button>
            <button className="bg-[#ED5E24] rounded-sm text-white px-6 py-2">Download Brochure</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
