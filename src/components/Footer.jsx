import down_arrow_org from "../assets/icons/down_arrow_org.png";
import email_org from "../assets/icons/email_org.png";
import call_org from "../assets/icons/call_org.png";
import maps from "../assets/icons/maps.png";
import facebook_org from "../assets/icons/facebook_org.png";
import twitter_org from "../assets/icons/twitter_org.png";
import instagram_org from "../assets/icons/instagram_org.png";
import linkedin_org from "../assets/icons/linkedin_org.png";

export default function Footer() {
  const usefulLinks = [
    "Home",
    "About Us",
    "Products",
    "Blogs",
    "Enquiry",
    "Career",
    "Contact",
    "Calculator",
    "Mobile App",
    "Client Insights",
    "Parking Consultancy",
  ];

  const products = [
    "Stack Parking System",
    "Suspended Parking System",
    "Pit Parking System",
    "Puzzle Parking System",
    "Rotary Parking System",
    "Two-Wheeler Parking System",
    "EV Charging Solution",
    "Customized Solution",
    "AMC",
    "Accessories",
  ];

  return (
    <footer className="bg-gray-100 pt-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold text-[#ED5E24] mb-3 underline">
            CONTACT US
          </h3>
          <div className="font-roboto">
            <p className="text-sm flex items-start gap-2">
              <img src={maps} className="w-5" alt="" />
              I-CUBE Industries Pvt. Ltd.
              <br />
              316 Akshar Complex, Near Shivranjani Cross Roads, Opposite Kalupur
              Bank, Satellite, Ahmedabad - 380015
            </p>
            <p className="mt-3 flex items-center gap-2">
              <img src={call_org} className="w-5" alt="" />
              <span className="text-sm">+91 95581 37093</span>
            </p>
            <p className="mt-3 flex items-center gap-2">
              <img src={email_org} className="w-5" alt="" />
              <span className="text-sm">info@icubeelevators.com</span>
            </p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold text-[#ED5E24] mb-3 underline">
            Useful Links
          </h3>
          <ul className="text-sm space-y-2 font-roboto">
            {usefulLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-[#ED5E24] cursor-pointer flex items-center"
              >
                <img src={down_arrow_org} alt="arow" className="h-3 mr-2" />{" "}
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xl font-bold text-[#ED5E24] mb-3 underline">
            Products
          </h3>
          <ul className="text-sm space-y-2 font-roboto">
            {products.map((product, index) => (
              <li
                key={index}
                className="hover:text-[#ED5E24] cursor-pointer flex items-center"
              >
                <img src={down_arrow_org} alt="arow" className="h-3 mr-2" />{" "}
                {product}
              </li>
            ))}
          </ul>
        </div>

        {/* Google Map */}
        <div>
          <h3 className="text-xl font-bold text-[#ED5E24] mb-3 underline">
            Get in Touch
          </h3>
          <iframe
            className="w-full h-40 border rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9853472469035!2d72.52615737430183!3d23.024310216265214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d0fd77be9d%3A0xbee12d34c22ed8e!2sI-Cube%20Parking%20Elevators!5e0!3m2!1sen!2sin!4v1738308298650!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#ED5E24] text-white flex justify-between items-center text-center px-10 py-4 mt-6">
        <p className="text-sm">
          Copyright © 2015-2024 By I-CUBE Parking Elevators
        </p>
        <div className="flex justify-between space-x-4 mb-2">
          <img
            className="hover:bg-white/80 bg-white p-1 rounded-lg w-8"
            src={facebook_org}
            alt=""
          />
          <img
            className="hover:bg-white/80 bg-white p-1 rounded-lg w-8"
            src={twitter_org}
            alt=""
          />
          <img
            className="hover:bg-white/80 bg-white p-1 rounded-lg w-8"
            src={instagram_org}
            alt=""
          />
          <img
            className="hover:bg-white/80 bg-white p-1 rounded-lg w-8"
            src={linkedin_org}
            alt=""
          />
        </div>
      </div>
    </footer>
  );
}
