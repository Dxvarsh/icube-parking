import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductDescription from "../components/ProductDescription";
import FeaturesBenefits from "../components/FeaturesBenefits";
import OtherStackParkingProducts from "../components/OtherStackParkingProducts";
import InfiniteScrollLogos from "../components/InfiniteScrollLogos";
import featureImg from "../assets/images/ThreePostFeature.png";
import benefitImg from "../assets/images/ThreePostBenefit.png";
import product1 from "../assets/images/two_post_two_lvl_card.png";
import product2 from "../assets/images/two_post_3_lvl_card.png";

const TwoPostTwostackP = () => {
  const download1 = "../assets/images/two_post_3_lvl_card.png";
  const download2 = "../assets/images/two_post_3_lvl_card.png";
  const data = {
    title: "2 Post 3 Level Stack Parking System",
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
        "Stacks three vehicles in one spot, maximizing space.",
    },
    {
      title: "Sturdy Two-Post Design",
      description: "Sturdy design ensures long-term reliability.",
    },
    {
      title: "Hydraulic or Motorized Lifting",
      description:
        "Ensures smooth and efficient vehicle lifting and lowering.",
    },
    {
      title: "Safety Features",
      description:
        "Features locks, overload protection, and anti-fall systems for security.",
    },
    {
      title: "User-Friendly Operation",
      description: "Simple controls for easy vehicle access and operation.",
    },
    {
      title: "Wide Application",
      description: "Suitable for residential, commercial, and industrial environments.",
    },
    {
      title: "Low Maintenance",
      description: " Designed for minimal upkeep and extended performance.",
    },
    {
      title: "Compact Installation",
      description:
        "Perfect for tight spaces, with minimal structural modifications needed.",
    },
  ];

  const benefit = [
    {
      img: benefitImg,
    },
    {
      title: "Space Efficiency",
      description:
        "The system parks three cars in the footprint of one, maximizing space utilization.",
    },
    {
      title: "Cost-Effective",
      description:
        "Reduces the need for large parking areas or complex structures, cutting down construction and maintenance costs.",
    },
    {
      title: "Easy Installation",
      description:
        " Can be installed in various locations, suitable for both residential and commercial use.",
    },
    {
      title: "Safety and Durability",
      description:
        " Built with strong materials for long-lasting performance and enhanced safety.",
    },
    {
      title: "Flexibility",
      description:
        "Suitable for both indoor and outdoor installations, adaptable to user needs.",
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
