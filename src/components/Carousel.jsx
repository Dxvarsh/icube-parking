import arrow_c from "../assets/icons/right_arrow.png";

const Carousel = ({
  slides,
  nextSlide,
  prevSlide,
  currentSlide,
  setCurrentSlide,
}) => {
  return (
    <div className="relative w-full transition-all duration-500 h-[28rem]">
      <div className="bg-black/30 absolute right-0 left-0 top-0 bottom-0"></div>
      <div className="overflow-hidden rounded-lg">
        <img
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          className="w-full h-[28rem] object-center object-cover"
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full hover:bg-[#ED5E24] hover:text-white transition-all"
      >
        <img src={arrow_c} className="w-10 rotate-180" alt="" srcset="" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full hover:bg-[#ED5E24] hover:text-white transition-all"
      >
        <img src={arrow_c} className="w-10" alt="" srcset="" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-14 h-2 rounded-full bg-[#DCDCDCB0] ${
              currentSlide === index ? "bg-white" : ""
            } transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
