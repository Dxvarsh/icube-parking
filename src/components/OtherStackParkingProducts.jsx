import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const OtherStackParkingProducts = ({ products }) => {
  console.log(products);
  
  return (
    <div className="container mx-auto p-6 mb-10">
      {/* Section Title */}
      <h2 className="text-[#ED5E24] text-2xl md:text-3xl font-bold text-center mb-4">
        Other Stack Parking System Products
      </h2>
      <div className="w-24 mx-auto border-b-4 border-[#ED5E24] mb-6"></div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        pagination={{ clickable: true }}
        className="container w-[90%] mx-48"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-white h-full shadow-lg rounded-lg p-6 border border-gray-200">
              <h3 className="text-[#ED5E24] text-xl font-bold mb-2">
                {product.name}
              </h3>
              <div className="flex gap-4">
                <div>
                  <p className="text-gray-700 text-sm my-4 mb-4">
                    {product.description}
                  </p>

                  <Link
                    to={product.link}
                    className="bg-[#ED5E24] absolute text-white bottom-6 py-2 px-8 rounded flex items-center justify-center hover:bg-[#d44c1b] transition"
                  >
                    Read More →
                  </Link>
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-48 h-48 object-contain mb-4"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OtherStackParkingProducts;
