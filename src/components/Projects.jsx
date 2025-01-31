import { useEffect, useState } from "react";

export default function ProjectSlider({ projects, currentSlide, setCurrentSlide, slidesLength }) {
    const [cardWidth, setCardWidth] = useState(100);

    const updateCardWidth = () => {
        if (window.innerWidth >= 1024) {
            setCardWidth(25);
        } else if (window.innerWidth >= 768) {
            setCardWidth(50);
        } else {
            setCardWidth(100);
        }
    };

    useEffect(() => {
        updateCardWidth();
        window.addEventListener("resize", updateCardWidth);
        return () => window.removeEventListener("resize", updateCardWidth);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesLength);
        }, 5000);
        return () => clearInterval(interval);
    }, [setCurrentSlide, slidesLength]);

    return (
        <div id="project" className="relative w-full px-4 sm:px-6 lg:px-10 py-10 overflow-hidden">
            <h2 className="text-center open-sans text-2xl font-bold text-[#ED5E24] mb-3">
                OUR PROJECTS
            </h2>
            <p className="text-[#333333] mb-6 text-center font-semibold text-xl">
                See What We Have Completed Recently
            </p>

            <div className="overflow-hidden w-full max-w-[80%] mx-auto">
                <div
                    className="flex py-5 transition-transform duration-500"
                    style={{ transform: `translateX(-${currentSlide * cardWidth}%)` }}
                >
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="h-72 relative flex-shrink-0 bg-white shadow-lg group"
                            style={{ width: `${cardWidth - 1}%`, marginRight: "1%" }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <h3 className={`montserrat absolute bottom-0 left-0 right-0 text-lg 
                                ${i % 2 === 0 ? "bg-white group-hover:bg-[#ED5E24]" : "bg-[#ED5E24] group-hover:bg-white"}
                                p-4 font-semibold mt-4 text-center project-clip z-30 duration-300 ease-in-out`}
                            >
                                {project.title}
                            </h3>
                            <div className={`absolute top-0 right-0 left-0 bottom-0 
                                ${i % 2 === 0 ? "group-hover:bg-white/70" : "group-hover:bg-[#ED5E24]/70"}
                                duration-300 ease-in-out z-10`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center space-x-2 mt-4">
                {projects.map((_, i) => (
                    <span
                        key={i}
                        className={`h-4 w-4 rounded-full cursor-pointer ${
                            i === currentSlide ? "bg-[#ED5E24]" : "bg-gray-300"
                        }`}
                        onClick={() => setCurrentSlide(i)}
                    />
                ))}
            </div>
        </div>
    );
}
