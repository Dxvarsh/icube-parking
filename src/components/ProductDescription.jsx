import React from "react";

const ProductDescription = ({ data, row }) => {
  return (
    <div className={`container mx-auto px-6 py-12 mb-4 flex flex-col ${row} md:gap-10`}>
      {/* Left - Text Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#ED5E24] mb-4">
          {data.title}
        </h2>
        <p className="text-[#212121] mb-4 text-sm md:text-base lg:text-lg">
          {data.description_1}
        </p>
        <p className="text-[#212121] mb-4 text-sm md:text-base lg:text-lg">
          {data.description_2}
        </p>
      </div>

      {/* Right - Video/Thumbnail */}

      <div className="relative h-[50vh] border-2 border-transparent hover:border-[#ED5E24] duration-300 lg:w-1/2 w-full  bg-red-200 rounded-bl-4xl rounded-tr-4xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src={data.videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProductDescription;
