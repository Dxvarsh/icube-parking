import testi_per1 from "../assets/images/testi_per1.png";
import testi_per2 from "../assets/images/testi_per2.png";
import testi_per3 from "../assets/images/testi_per3.png";
import testi_per4 from "../assets/images/testi_per4.png"
import Breadcrumb from "../components/Breadcrumb";
const testimonials = [
  {
    name: "James Robertson",
    text: "iCube Parking Elevators have revolutionized our parking system. The space-saving design and efficient operation have increased our parking capacity and streamlined daily operations. We've seen a noticeable improvement in customer satisfaction and space management.",
    image: testi_per1,
  },
  {
    name: "Sophia Harris",
    text: "Since installing iCube Parking Elevators, our parking facilities have become more reliable and easier to maintain. The seamless integration into our existing systems has made a world of difference, and the support from iCube has been exceptional.",
    image: testi_per2,
  },
  {
    name: "David Lee",
    text: "With iCube Parking Elevators, we've been able to create a more sustainable and efficient parking structure. The support team’s guidance throughout the process was invaluable, and the system has helped us significantly reduce our operational costs.",
    image: testi_per3,
  },
  {
    name: "Emily Chen",
    text: "We turned to iCube Parking Elevators to solve our space limitations, and it has exceeded our expectations. The system is efficient, and installation was quick and easy. Our clients love the smooth operation and extra space it provides.",
    image: testi_per4,
  },
];

const Testimonials = () => {
  return (
    <>
    <Breadcrumb title={"Testimonials"} />
      <section className="pt-12 bg-white text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold underline text-[#ED5E24]">
          "Success Stories from Our Customers"
        </h2>
        <p className="text-gray-600 mt-2 px-4 sm:px-8 max-w-2xl mx-auto text-sm sm:text-base">
          "Learn how industry pioneers have enhanced their operations and
          achieved success with the innovative solutions and support of iCube
          Parking Elevators."
        </p>

        {/* Testimonials Container */}
        <div className="mt-8 flex flex-col w-full mx-auto" id="project">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex bg-white/70 flex-col px-12 py-4 md:flex-row items-center justify-between gap-6 text-left ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Profile Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-40 h-40 rounded-full object-cover shadow-md"
              />

              {/* Text Content */}
              <div className="w-[80%]">
                <h3
                  className={`font-semibold text-lg sm:text-xl text-[#ED5E24]`}
                >
                  {testimonial.name}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base mt-2">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
