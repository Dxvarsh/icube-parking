import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import next from "../assets/icons/next.png";
import s_hero from "../assets/images/stack_parking_hero.png";
import { Link } from "react-router-dom";

const StackParking = () => {
  const items = [
    {
      name: "2 Post 2 Level Stack Parking System",
      link: "/icube-parking/products/stack-parking/two-post-two-stack-parking",
    },
    {
      name: "2 Post 3 Level Stack Parking System",
      link: "/icube-parking/products/stack-parking/two-post-three-stack-parking",
    },
    {
      name: "4 Post 2 Level Stack Parking System",
      link: "/icube-parking/products/stack-parking/four-post-two-stack-parking",
    },
    {
      name: "4 Post 3 Level Stack Parking System",
      link: "/icube-parking/products/stack-parking/four-post-three-stack-parking",
    },
  ];
  

  return (
    <div>
      <Breadcrumb title={"stack parking system"} download1={null} />

      {/* Mid Section */}
      <div className="min-h-[80vh] p-6 flex flex-col lg:flex-row mx-auto gap-12">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-lg">
          <img
            src={s_hero}
            alt="Stack Parking System"
            className="shadow-lg w-full object-cover hover:scale-105 duration-500"
          />
        </div>

        {/* Right Side - Accordion */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between border border-slate-300 p-4 sm:p-6 rounded-lg shadow-lg">
          {items.map((item, index) => (
            <div key={index} className="mb-2 h-1/5">
            <Link to={item.link}>
              <button className="w-full h-full text-left p-4 border-t border-l border-r border-[#ED5E24] rounded-lg flex justify-between items-center hover:text-white hover:bg-[#ED5E24] transition duration-300 text-xl group">
                {item.name}
                <img
                  src={next}
                  alt="next"
                  className={`w-6 h-6 group-hover:-rotate-90 duration-200`}
                />
              </button>
            </Link>
          </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container px-6 py-12 text-black max-w-full lg:w-1/2">
        
        <div className="mb-4">
          <h2 className="text-xl inline md:text-2xl font-bold text-[#ED5E24] border-b-2 pb-1">
            Stack Parking System
          </h2>
        </div>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4">
          <strong>iCube Parking Elevators</strong> offers advanced{" "}
          <strong>Stack Parking Systems</strong>, designed as a flagship product
          to address the growing parking demands in urban spaces. These systems
          are engineered to optimize vertical space, allowing for maximum
          parking capacity in compact areas while ensuring efficiency and
          convenience. Combining innovative automation with cutting-edge safety
          features, iCube’s Stack Parking Systems streamline the parking process
          with quick vehicle access and retrieval. Customizable to fit various
          site requirements, they cater to residential, commercial, and public
          applications. As a reliable and eco-friendly solution, this product
          highlights iCube Parking Elevators’ commitment to modern, sustainable,
          and user-friendly parking innovations.
        </p>

        <p className="text-[#ED5E24] font-semibold text-sm sm:text-base md:text-lg mb-4">
          Discover top car parking solutions in Ahmedabad with iCube Parking
          Elevators, featuring advanced automated systems for optimal space
          efficiency and seamless parking.
        </p>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg">
          Accurate Car Parking, a leader in Ahmedabad, specializes in advanced{" "}
          <strong>stack parking systems</strong> like{" "}
          <strong>iCube Parking Elevators</strong>. Serving offices, malls,
          hospitals, and residential spaces, we deliver secure, cost-effective,
          and space-efficient solutions. Our expert team ensures modern,
          convenient parking tailored to urban needs.
        </p>
      </div>
    </div>
  );
};

export default StackParking;
