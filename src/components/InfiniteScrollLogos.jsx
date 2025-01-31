import adani from "../assets/images/adani.png";
import sintex from "../assets/images/sintex.png";
import tata from "../assets/images/tata.png";
import lt from "../assets/images/lt.png";
import reliance from "../assets/images/reliance.png";
import arvind from "../assets/images/arvind.png";
import real_estate from "../assets/images/real_estate.png";

const logos = [adani, sintex, tata, lt, reliance, arvind, real_estate];

// Duplicate the logos for infinite effect
const infiniteLogos = [...logos, ...logos, ...logos];

const InfiniteScrollLogos = () => {
  return (
    <div className="overflow-hidden w-[90%] mb-8 mx-auto py-6 bg-white">
      <div className="whitespace-nowrap gap-10 flex animate-scroll">
        {infiniteLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="w-20 mx-6"
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollLogos;
