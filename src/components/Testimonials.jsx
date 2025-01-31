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
      <h2 className="text-3xl font-bold text-orange-600 mb-6 underline">
        Testimonials
      </h2>

      {/* Testimonial Card */}
      <div className="relative h-96 flex items-center justify-center w-full px-16">

        <button
          className="absolute left-4 md:left-52 p-2 rounded-full"
          onClick={prevTestimonial}
        >
          <img src={testi_arrow} className="w-10 rotate-180" alt="Previous" />
        </button>

        <div className="mx-auto flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full mb-4">
            <img
              src={testimonials[currentIndex].image}
              alt="Client"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute right-4.5 transform -translate-x-1/2 -bottom-6 py-2 px-1.5 bg-orange-500 text-3xl mb-2 rounded-full">
              <img src={quote} className="w-3" alt="" srcset="" />
            </div>
          </div>

          <div className="shadow-lg md:w-96 w-72 rounded-lg p-6 bg-white">
            <p className="text-gray-700 italic mb-4">
              "{testimonials[currentIndex].text}"
            </p>
            <h4 className="text-orange-500 font-semibold">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-gray-500">
              {testimonials[currentIndex].profession}
            </p>
          </div>
        </div>

        <button
          className="absolute right-4 md:right-52"
          onClick={nextTestimonial}
        >
          <img src={testi_arrow} className="w-10" alt="Next" />
        </button>
      </div>

      {/* Enquiry */}
      <EnquiryForm />

    </div>
  );
};

export default Testimonials;
