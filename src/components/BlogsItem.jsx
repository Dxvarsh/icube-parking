import React from "react";
import { Link } from "react-router-dom";
import testi_arrow from "../assets/icons/testi_arrow.png";

const BlogsItem = ({ blog, row }) => {
  console.log(blog, row);

  return (
    <>
      <div
        className={`container mx-auto px-6 py-12 flex flex-col ${row} items-start gap-6`}
      >
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
          <img
            src={blog.img}
            alt="Architects rethinking parking"
            className="w-full object-cover hover:scale-110 duration-300"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-black">
          <h2 className="text-lg md:text-xl font-bold  mb-4">{blog.heading}</h2>
          <p className="mb-4">{blog.para}</p>
          <Link
            to="/icube-parking/rethinking-parking"
            className="flex items-center group font-semibold"
          >
            Read More{" "}
            <span className="ml-3 group-hover:ml-5 duration-200 ease-in-out">
              <img
                src={testi_arrow}
                alt=""
                className="w-6 grayscale"
                srcset=""
              />
            </span>
          </Link>
        </div>
      </div>
      <hr className="text-[#aaaaaa]" />
    </>
  );
};

export default BlogsItem;
