import { useState } from "react";
import email_org from "../assets/icons/email_org.png";
import call_org from "../assets/icons/call_org.png";
import maps from "../assets/icons/maps.png";
import user from "../assets/icons/user.png";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "India",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="container w-full min-h-[70vh] mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
      
      {/* Left: Form Section */}
      <div className="w-full lg:w-2/3 p-6 sm:p-8">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#ED5E24] mb-8 text-start open-sans underline">
          Quick Enquiry
        </h2>
        <form onSubmit={handleSubmit} className="text-[#aaaaaa] flex flex-col">
          <div className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border-b border-gray-300 px-4 py-2 focus:border-[#ED5E24] focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border-b border-gray-300 px-4 py-2 focus:border-[#ED5E24] focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border-b border-gray-300 px-4 py-2 focus:border-[#ED5E24] focus:outline-none"
              >
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
              </select>
              <div className="flex w-full">
                <span className="px-4 py-2 border-b border-gray-300 text-[#aaaaaa]">
                  +91
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone / Mobile"
                  className="w-full ml-1 px-4 py-2 focus:outline-none focus:border-[#ED5E24] border-b border-gray-300"
                  required
                />
              </div>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave a Message for us"
              className="border-b border-gray-300 w-full px-4 py-2 h-24 focus:outline-none focus:border-[#ED5E24]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-5 cursor-pointer bg-[#ED5E24] w-fit text-white px-8 py-3 md:px-10 md:py-4 hover:bg-[#ED5E24]/90 transition text-sm md:text-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right: Contact Info */}
      <div className="w-full lg:w-1/3 bg-[#ED5E24] space-y-4 text-white p-6 sm:p-8 flex flex-col items-start">
        <h2 className="text-xl md:text-3xl lg:text-3xl mb-8">
          <strong>Contact</strong> Information
        </h2>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 p-2 rounded-full bg-white flex items-center justify-center">
            <img className="w-6 h-6" src={user} alt="user" />
          </div>
          <p className="text-start text-sm md:text-lg">I-CUBE Industries Pvt. Ltd.</p>
        </div>

        <div className="flex items-start gap-4 mt-3">
          <div className="min-w-10 h-10 p-2 rounded-full bg-white flex items-center justify-center">
            <img className="w-6 h-6" src={maps} alt="maps" />
          </div>
          <p className="text-start text-sm md:text-lg">
            316 Akshar Complex, Near Shivranjani Cross Roads, Satellite, Ahmedabad - 380015
          </p>
        </div>

        <div className="flex items-center gap-4 mt-3">
          <div className="w-10 h-10 p-2 rounded-full bg-white flex items-center justify-center">
            <img className="w-6 h-6" src={call_org} alt="call" />
          </div>
          <a href="tel:+91-9558137093" className="text-start text-sm md:text-lg">+91-95581 37093</a>
        </div>

        <div className="flex items-center gap-4 mt-3">
          <div className="w-10 h-10 p-2 rounded-full bg-white flex items-center justify-center">
            <img className="w-6 h-6" src={email_org} alt="email" />
          </div>
          <a href="mailto:info@icubeelevators.com" className="text-start text-sm md:text-lg">info@icubeelevators.com</a>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
