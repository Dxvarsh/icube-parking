import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import arrow_c from "../assets/icons/right_arrow.png";
import { useRef, useEffect } from "react";

const ProductCarousel = ({ slides }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="msin-div mx-auto h-[80vh] w-full px-10 py-10 relative" id="our-products">
      <h2 className="open-sans text-center text-4xl underline font-bold text-[#ED5E24] mb-6">
        Our Products
      </h2>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[90%] max-w-[80%] mx-auto"
      >
        {slides.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-md overflow-auto z-auto h-full w-full bg-white shadow-lg md:w-full group">
              <div className="h-[70%]">
                <img src={product.image} alt={product.title} className="w-full object-cover h-full" />
              </div>
              <div className="h-[30%] py-2">
                <h3 className="text-lg font-semibold text-center">{product.title}</h3>
                <div className="flex justify-center my-4 absolute left-1/2 -translate-x-1/2 z-20 duration-300 ease-in-out group-hover:bottom-10">
                  <button className="bg-[#ED5E24] cursor-pointer hover:bg-[#ED5E24]/90 rounded-sm text-white px-6 py-2">
                    Read More
                  </button>
                </div>
              </div>
              <div className="absolute flex justify-start pt-15 items-center flex-col py-5 px-2 opacity-0 group-hover:opacity-100 duration-300 ease-in-out rounded-lg top-0 bottom-0 left-0 right-0 bg-[#f4895f]">
                <div className="h-[75%]">
                  <h3 className="text-lg font-semibold text-white mt-4 text-center">{product.title}</h3>
                  <p className="text-center mt-3 font-semibold">{product.text}</p>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-[#ED5E24] p-3 rounded-full shadow-md hover:bg-[#ED5E24]/90 transition-all"
      >
        <img src={arrow_c} className="w-6 rotate-180" alt="Previous Slide" />
      </button>
      <button
        ref={nextRef}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-[#ED5E24] p-3 rounded-full shadow-md hover:bg-[#ED5E24]/90 transition-all"
      >
        <img src={arrow_c} className="w-6" alt="Next Slide" />
      </button>
    </div>
  );
};

export default ProductCarousel;
