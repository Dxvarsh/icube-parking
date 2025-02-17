import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductDescription from "../components/ProductDescription";
import FeaturesBenefits from "../components/FeaturesBenefits";
import OtherStackParkingProducts from "../components/OtherStackParkingProducts";
import InfiniteScrollLogos from "../components/InfiniteScrollLogos";
import featureImg from "../assets/images/TwoPostFeature.png";
import benefitImg from "../assets/images/TwoPostBenefit.png";
import product1 from "../assets/images/two_post_two_lvl_card.png";
import product2 from "../assets/images/two_post_3_lvl_card.png";

const TwoPostTwostackP = () => {
  const download1 = "../assets/images/two_post_3_lvl_card.png";
  const download2 = "../assets/images/two_post_3_lvl_card.png";
  const data = {
    title: "2 Post 2 Level Stack Parking System",
    description_1:
      "A 2-Post 2-Level Stack Parking System is a space-saving solution that vertically stacks two vehicles using a hydraulic lift on a two-post structure.",
    description_2:
      "A 2-Post 2-Level Stack Parking System is an efficient and space-saving solution for parking multiple vehicles in limited areas. It features a sturdy two-post structure that allows one vehicle to be parked on the ground level while another is securely lifted and stored above it. Ideal for residential, commercial, and industrial applications, this system maximizes parking capacity without requiring additional floor space.",
    videoLink: "https://www.youtube.com/embed/video_id",
  };

  const features = [
    {
      img: featureImg,
    },
    {
      title: "Space Efficiency",
      description:
        "Allows vertical stacking of two vehicles in a single parking spot.",
    },
    {
      title: "Sturdy Two-Post Design",
      description: "Durable construction ensures stability and longevity.",
    },
    {
      title: "Hydraulic or Motorized Lifting",
      description:
        "Smooth and reliable vehicle lifting and lowering mechanisms.",
    },
    {
      title: "Safety Features",
      description:
        "Equipped with locks, overload protection, and anti-fall systems.",
    },
    {
      title: "User-Friendly Operation",
      description: "Easy controls for convenient vehicle access.",
    },
    {
      title: "Wide Application",
      description: "Ideal for residential, commercial, and industrial use.",
    },
    {
      title: "Low Maintenance",
      description: "Designed for easy upkeep and long-term performance.",
    },
    {
      title: "Compact Installation",
      description:
        "Ideal for areas with limited space, requiring minimal structural modifications.",
    },
  ];

  const benefit = [
    {
      img: benefitImg,
    },
    {
      title: "Space Efficiency",
      description:
        "The system allows parking of two cars in the footprint of one, maximizing the use of available space.",
    },
    {
      title: "Cost-Effective",
      description:
        "It reduces the need for large parking lots or multi-story structures, which can be expensive to construct and maintain.",
    },
    {
      title: "Easy Installation",
      description:
        "The system can be installed in a variety of locations, whether for residential or commercial use.",
    },
    {
      title: "Safety and Durability",
      description:
        "It is built with robust materials, ensuring long-lasting performance and safety.",
    },
    {
      title: "Flexibility",
      description:
        "It can be installed both indoors and outdoors, depending on the needs of the user.",
    },
  ];

  const products = [
    {
      name: "2 Post 2 Level Stack Parking System",
      description:
        "A 2 Post 2 Level Stack Parking System uses two posts to support two stacked platforms, optimizing parking space.",
      image: product1,
      link: "/icube-parking/products/stack-parking/two-post-two-level",
    },
    {
      name: "2 Post 3 Level Stack Parking System",
      description:
        "A 2 Post 3 Level Stack Parking System is an automated parking solution that features two vertical posts supporting three stacked parking platforms.",
      image: product2,
      link: "/icube-parking/products/stack-parking/two-post-three-level",
    },
  ];

  return (
    <>
      <Breadcrumb title={data.title} download1={download1} download2={download2} />
      <div className="bg-[#3C3C3C0D]">
        <ProductDescription data={data} row={'lg:flex-row'} />
        <FeaturesBenefits features={features} benefit={null} row={'lg:flex-row'} />
        <FeaturesBenefits benefit={benefit} features={null} row={'lg:flex-row-reverse'} />
      </div>
      <OtherStackParkingProducts products={products}/>
      <InfiniteScrollLogos />
    </>
  );
};

export default TwoPostTwostackP;
