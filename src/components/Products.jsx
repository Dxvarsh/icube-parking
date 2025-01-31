import arrow_c from "../assets/icons/right_arrow.png";

const ProductCarousel = ({ slides, currentSlide, nextSlide, prevSlide }) => {
    const getCardWidth = () => {
        if (window.innerWidth >= 1024) {
          return 33.9; 
        } 
        return 100;
      };
    
      const cardWidth = getCardWidth();
  return (
    <div className="msin-div w-full px-10 py-10" id='our-products'>
      <h2 className="open-sans text-center text-2xl underline font-bold text-[#ED5E24] mb-6">
        Our Products
      </h2>
      <div className="relative w-full flex items-center justify-between">
        
        <button
          className="z-10 bg-[#ED5E24] p-2 rounded-full shadow-md"
          onClick={prevSlide}
        >
          <img src={arrow_c} className="w-5 rotate-180" alt="Previous Slide" />
        </button>

        <div className="overflow-hidden w-full max-w-[80%]">
          <div
            className="flex py-5 transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * cardWidth}%)` }}
          >
            {slides.map((product, index) => (
              <div
                key={index}
                className="relative w-full lg:mr-4 flex-shrink-0 bg-white shadow-lg 
                  md:w-full lg:w-[32.3%] group" 
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover"
                />
                <h3 className="text-lg font-semibold mt-4 text-center">
                  {product.title}
                </h3>
                <div className="flex justify-center my-4">
                  <button className="bg-[#ED5E24]  rounded-sm text-white px-6 py-2">Read More</button>
                </div>

                <div className='absolute flex justify-center items-center flex-col py-5 px-2 opacity-0 group-hover:opacity-100 duration-300 ease-in-out rounded-lg top-0 bottom-0 left-0 right-0 bg-[#f4895f]'>
                  <div>
                    <h3 className="text-lg font-semibold text-white mt-4 text-center">
                      {product.title}
                    </h3>
                    <p className='text-center mt-3 font-semibold'>{product.text}</p>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button className="bg-[#ED5E24]  rounded-sm text-white px-6 py-2">Read More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="z-10 bg-[#ED5E24] p-2 rounded-full shadow-md"
          onClick={nextSlide}
        >
          <img src={arrow_c} className="w-5" alt="Next Slide" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
