import React, { useState } from "react";
import Carousel from "../components/Carousel";
import AboutUs from "../components/AboutUs";
import ProductCarousel from "../components/Products";
import Projects from "../components/Projects";
import hero_img1 from "../assets/images/hero_img1.png";
import our_products_i1 from "../assets/images/our_product_i1.png";
import our_products_i2 from "../assets/images/our_products_i2.png";
import our_products_i3 from "../assets/images/our_product_i3.png";
import project_i1 from "../assets/images/project_i1.png";
import project_i2 from "../assets/images/project_i2.png";
import project_i3 from "../assets/images/project_i3.png";
import project_i4 from "../assets/images/project_i4.png";
import Testimonials from "../components/Testimonials";
import Counter from "../components/Counter";

const Home = () => {
  const heroSlides = [
    { src: hero_img1, alt: "hero1" },
    { src: "https://via.placeholder.com/800x400/ff7b7b/333333", alt: "Slide 2" },
    { src: hero_img1, alt: "Slide 3" },
  ];

  const products = [
    {
      title: "Stack Parking System",
      image: our_products_i1,
      text: "A stack parking system is a multi-level car parking system that stacks vehicles on top of each other to maximize parking space. It's a simple and economical parking solution that can be used in new buildings or existing societies.",
    },
    {
      title: "Suspended Parking System",
      image: our_products_i2,
      text: "The suspended platform lifts venicles on suspended platforms supported by a building-integrated frame structure, providing a column-free area for better utilization of space below.",
    },
    {
      title: "Pit Parking System",
      image: our_products_i3,
      text: "The system operates by utilizing vertical space efficiently, with platforms designed to move vertically within a designated pit or shaft.",
    },
    {
      title: "Suspended Parking System",
      image: our_products_i2,
      text: "The suspended platform lifts venicles on suspended platforms supported by a building-integrated frame structure, providing a column-free area for better utilization of space below.",
    },
    {
      title: "Pit Parking System",
      image: our_products_i3,
      text: "The system operates by utilizing vertical space efficiently, with platforms designed to move vertically within a designated pit or shaft.",
    },
  ];

  
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

  const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "Clita Clita Tempor Justo Dolor Ipsum Amet Kasd Amet Duo Justo Duo Duo Labore Sed Sed.",
      name: "John Doe",
      profession: "Software Engineer",
    },
    {
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      text: "Magnuat Diam Sit Et Amet Stet Eos Sed Clita Erat Magna Elitr Erat Sit Sit Erat.",
      name: "Jane Smith",
      profession: "Product Manager",
    },
    {
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      text: "Rebum Justo Sea Clita Sed Magna Erat.",
      name: "Michael Johnson",
      profession: "Business Analyst",
    },
  ];

  const [currentSlide1, setCurrentSlide1] = useState(0);
  const nextSlide = (setCurrentSlide, slidesLength) => {
    setCurrentSlide((prevSlide) => slidesLength-1 === prevSlide ? 0 : (prevSlide + 1) );
  };

  const prevSlide = (setCurrentSlide, slidesLength) => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesLength) % slidesLength);
  };

  return (
    <div className="w-full min-h-screen">
      <Carousel
        slides={heroSlides}
        currentSlide={currentSlide1}
        setCurrentSlide={setCurrentSlide1}
        nextSlide={()=>nextSlide(setCurrentSlide1, heroSlides.length)}
        prevSlide={()=>prevSlide(setCurrentSlide1, heroSlides.length)}
      />
      <AboutUs />
      {/* Counter component */}
      <Counter />

      <ProductCarousel 
        slides={products}
      />


      <Projects 
        projects={projects}
      />
      
      <Testimonials testimonials={testimonials} />

    </div>
  );
};

export default Home;
