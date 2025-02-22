import project_i1 from "../assets/images/project_i1.png";
import project_i2 from "../assets/images/project_i2.png";
import project_i3 from "../assets/images/project_i3.png";
import project_i4 from "../assets/images/project_i4.png";
import Breadcrumb from "../components/Breadcrumb";
const projects = [
  {
    title: "Atishay Shivalay 2",
    image: project_i1,
    text: "Atishay Shivalay 2- a blissful gated estate of 3 & 4 BHK apartments and shops in the tranguil environs of a sacred vicinity.",
  },
  {
    title: "HR Elanza",
    image: project_i2,
    text: "Elanza is a collection of full-time commercial spaces. It is providing a competitive edge to various businesses by giving the customer multiple demand-fulfilling enterprises at a single location.",
  },
  {
    title: "Skydeck Prive",
    image: project_i3,
    text: "The magnificent Skydeck Prive that is smartly located in Satellite, Ahmedabad is a well-planned project. The 8 in this project all come with smart interiors and well-utilised spaces.",
  },
  {
    title: "Aagam Avenue",
    image: project_i4,
    text: "A 7 storey architectural marvel, Aagam Avenue promises to redefine the commercial property standards of Ahmedabad.Located at Sabarmati, Aagam Avenue serves as the best location for health studios, salons. pharmacies, banquet halls, and more.",
  },
  {
    title: "Project 5",
    image: project_i2,
    text: "Atishay Shivalay 2- a blissful gated estate of 3 & 4 BHK apartments and shops in the tranguil environs of a sacred vicinity.",
  },
  {
    title: "Project 6",
    image: project_i4,
    text: "Elanza is a collection of full-time commercial spaces. It is providing a competitive edge to various businesses by giving the customer multiple demand-fulfilling enterprises at a single location.",
  },
];
const MoreProject = () => {
  return (
    <>
      <Breadcrumb title={"Our Projects"} />
      <section className="py-12 px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold underline text-[#ED5E24]">
            Our Projects
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            We have completed 150+ ICube parking elevator projects with leading
            organizations in Gujarat, India, and overseas in the last two years.
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
          {projects.map((project, index) => (
            <div className="h-full rounded-lg overflow-hidden md:h-80 lg:h-96 relative bg-white shadow-lg group w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover duration-500 ease-in-out group-hover:scale-110"
              />
              <h3
                className={`montserrat absolute bottom-0 left-0 right-0 text-lg md:text-xl lg:text-2xl
             ${
               index % 2 === 0
                 ? "bg-white group-hover:bg-[#ED5E24]"
                 : "bg-[#ED5E24] group-hover:bg-white"
             }
             p-4 font-semibold text-center project-clip z-30 duration-300 ease-in-out`}
              >
                {project.title}
              </h3>
              <div
                className={`absolute w-full h-[90%] top-0 right-0 left-0 bottom-0 
             ${
               index % 2 === 0
                 ? "group-hover:bg-white/70"
                 : "group-hover:bg-[#ED5E24]/70"
             }
             duration-300 ease-in-out z-10`}
              >
                <p
                  className={`opacity-0 h-full text-sm md:text-base lg:text-lg px-5 pointer-events-none group-hover:opacity-100 flex items-center justify-center text-center ${
                    index % 2 === 0 ? "text-black" : "text-white"
                  }`}
                >
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MoreProject;
