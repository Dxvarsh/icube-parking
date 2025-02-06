import { useState } from "react";
import testi_arrow from "../assets/icons/testi_arrow.png";
import quote from "../assets/icons/quote.png";
import InfiniteScrollLogos from "./InfiniteScrollLogos";
import EnquiryForm from "./EnquiryForm";

// Dummy testimonials data
const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Clita Clita Tempor Justo Dolor Ipsum Amet Kasd Amet Duo Justo Duo Duo Labore Sed Sed.",
    name: "John Doe",
    profession: "Software Engineer",
  },
  {
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Magnuat Diam Sit Et Amet Stet Eos Sed Clita Erat Magna Elitr Erat Sit Sit Erat.",
    name: "Jane Smith",
    profession: "Product Manager",
  },
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Rebum Justo Sea Clita Sed Magna Erat.",
    name: "Michael Johnson",
    profession: "Business Analyst",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full py-14 bg-white text-center">
      <InfiniteScrollLogos />

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ED5E24] mb-8 underline">
        Testimonials
      </h2>

      {/* Testimonial Card */}
      <div className="relative flex flex-col items-center justify-center w-full px-4 sm:px-10 lg:px-16 min-h-[60vh]">

        <button
          className="absolute cursor-pointer left-4 md:left-20 lg:left-40 p-2 rounded-full"
          onClick={prevTestimonial}
        >
          <img src={testi_arrow} className="w-8 md:w-10 lg:w-12 rotate-180" alt="Previous" />
        </button>

        <div className="flex flex-col items-center gap-4">
          <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full mb-4">
            <img
              src={testimonials[currentIndex].image}
              alt="Client"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute right-2 md:right-3 lg:right-4 transform -translate-x-1/2 -bottom-6 py-2 px-1.5 bg-orange-500 text-3xl mb-2 rounded-full">
              <img src={quote} className="w-4 md:w-5 lg:w-6" alt="Quote" />
            </div>
          </div>

          <div className="shadow-lg w-72 md:w-[50vw] lg:w-[40vw] h-auto md:h-[30vh] rounded-lg p-6 bg-white">
            <p className="text-black text-sm md:text-lg lg:text-xl italic mb-4">
              "{testimonials[currentIndex].text}"
            </p>
            <h4 className="text-[#ED5E24] font-semibold text-lg md:text-xl lg:text-2xl">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-black text-sm md:text-lg lg:text-xl">
              {testimonials[currentIndex].profession}
            </p>
          </div>
        </div>

        <button
          className="absolute cursor-pointer right-4 md:right-20 lg:right-40"
          onClick={nextTestimonial}
        >
          <img src={testi_arrow} className="w-8 md:w-10 lg:w-12" alt="Next" />
        </button>
      </div>

      {/* Enquiry */}
      <EnquiryForm />
    </div>
  );
};

export default Testimonials;
