import React from "react";
import checkIcon from "../assets/icons/checkBox.png";

const FeaturesBenefits = ({ features, benefit, row }) => {
  const img = features ? features[0].img : benefit[0].img;
  const datas = features ? features : benefit;
  
  return (
    <div
      className={`container h-fit pb-5 px-6 mb-12 mx-auto flex flex-col gap-10 ${row} Manrope`}
    >
      {/* Left Side - Image */}
      <div className="w-full h-[95%] lg:w-1/2 rounded-br-4xl border-2 border-transparent hover:border-[#ED5E24] duration-300 ease rounded-tl-4xl shadow-lg overflow-hidden">
        <img
          src={img}
          alt="Key Features"
          className="scale-110 hover:scale-125 duration-200 ease-in w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Features List */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-[#ED5E24] text-2xl md:text-3xl font-bold mb-4">
          {features ? "Key Features" : "Benefits"}
        </h2>
        <ul className="space-y-3">
          {datas.map(
            (data, index) =>
              index > 0 && (
                <li key={index} className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-5 h-5 mt-1" />
                  <p className="text-gray-800 text-base">
                    <strong>{data?.title}:</strong> {data?.description}
                  </p>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default FeaturesBenefits;
