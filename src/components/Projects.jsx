import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProjectSlider({ projects }) {
    return (
        <div id="project" className="relative w-full px-4 sm:px-6 lg:px-10 py-10 overflow-hidden min-h-[70vh] md:min-h-[90vh] mx-auto">
            <h2 className="text-center open-sans text-2xl md:text-3xl lg:text-4xl font-bold text-[#ED5E24] mb-3">
                OUR PROJECTS
            </h2>
            <p className="text-[#333333] mb-6 text-center font-semibold text-lg md:text-xl lg:text-2xl">
                See What We Have Completed Recently
            </p>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                }}
                loop={true}
                className="max-w-[98%] mx-auto h-auto"
            >
                {projects.map((project, i) => (
                    <SwiperSlide key={i} className="w-96 my-2 shadow-md group overflow-hidden">
                        <div className="h-full md:h-80 lg:h-96 relative bg-white shadow-lg group w-full">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover duration-500 ease-in-out group-hover:scale-110"
                            />
                            <h3 className={`montserrat absolute bottom-0 left-0 right-0 text-lg md:text-xl lg:text-2xl
                                ${i % 2 === 0 ? "bg-white group-hover:bg-[#ED5E24]" : "bg-[#ED5E24] group-hover:bg-white"}
                                p-4 font-semibold text-center project-clip z-30 duration-300 ease-in-out`}
                            >
                                {project.title}
                            </h3>
                            <div className={`absolute w-full h-[90%] top-0 right-0 left-0 bottom-0 
                                ${i % 2 === 0 ? "group-hover:bg-white/70" : "group-hover:bg-[#ED5E24]/70"}
                                duration-300 ease-in-out z-10`}
                            >
                                <p className={`opacity-0 h-full text-sm md:text-base lg:text-lg px-5 pointer-events-none group-hover:opacity-100 flex items-center justify-center text-center ${i % 2 === 0 ? "text-black" : "text-white"}`}>{project.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
