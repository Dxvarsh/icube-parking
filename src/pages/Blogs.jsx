import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import blog_img1 from "../assets/images/blog_img1.png";
import blog_img2 from "../assets/images/blog_img2.png";
import blog_img3 from "../assets/images/blog_img3.png";
import blog_img4 from "../assets/images/blog_img4.png";

import BlogsItem from "../components/BlogsItem";

const Blogs = () => {
  const download1 = "../assets/images/two_post_3_lvl_card.png";
  const download2 = "../assets/images/two_post_3_lvl_card.png";
  const blogData = [
    {
      heading:
        "Why are architects rethinking parking with systems like the iCube elevator?",
      para: "Architects are rethinking parking with systems like the iCube elevator because these advanced solutions offer a more efficient and sustainable approach to urban design. Traditional parking lots consume large amounts of space and resources, contributing to urban sprawl and environmental issues. However, systems like the iCube elevator enable vertical parking, maximizing land use by stacking cars in a smaller footprint.",
      img : blog_img1,
      link : "",
    },
    {
      heading:
        "When are automated parking solutions, like the iCube Elevator, more cost-effective than conventional garages?",
      para: "Automated parking solutions, like the iCube Elevator, can be more cost-effective than conventional garages in several scenarios. Firstly, in areas where land is scarce and expensive,automated systems make better use of vertical space, allowing for more cars to be parked in a smaller footprint. This can significantly reduce construction costs, especially in densely populated urbanareas where land acquisition costs are high.",
      img : blog_img2,
      link : "",
    },
    {
      heading:
        "iCube provides automated parking solutions with car lifts and stackers for improved efficiency.",
      para: "iCube offers cutting-edge automated parking solutions that integrate car lifts and stackers to significantly improve parking efficiency. These systems utilize advanced technology to automatically park and retrieve vehicles, eliminating the need for human intervention and reducing the time spent searching for parking spots. Car lifts allow vehicles to be moved vertically,while stackers maximize space utilization by enabling cars to be stacked in multiple levels.",
      img : blog_img3,
      link : "",
    },
    {
      heading:
        "Exploring the Benefits of a Semi-Automated Puzzle Parking System",
      para: "A semi-automated puzzle parking system offers several key benefits, making it an appealing option for both urban developers and vehicle owners. One of the primary advantages is its ability to maximize the use of available space. By allowing cars to be stacked and moved horizontally or vertically, the system optimizes parking capacity, enabling more vehicles to be accommodated in a smaller area compared to traditional parking garages.",
      img : blog_img4,
      link : "",
    },
  ];

  return (
    <>
      <Breadcrumb title={"blogs"} download1={download1} download2={download2} />
      {blogData.map((blog, index) => (
        <BlogsItem
          blog={blog}
          row={index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
        />
      ))}
    </>
  );
};

export default Blogs;
