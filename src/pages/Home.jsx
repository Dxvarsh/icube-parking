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
  ];

  
  const projects = [
    {
      title: "Atishay Shivalay 2",
      image: project_i1, 
    },
    {
      title: "HR Elanza",
      image: project_i2,
    },
    {
      title: "Skydeck Prive",
      image: project_i3,
    },
    {
      title: "Aagam Avenue",
      image: project_i4,
    },
    {
      title: "Project 5",
      image: project_i2,
    },
    {
      title: "Project 6",
      image: project_i4,
    },
  ];

  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlideProduct, setCurrentSlideProduct] = useState(0);
  const [currentSlideProject, setCurrentSlideProject] = useState(0);

  const nextSlide = (setCurrentSlide, slidesLength) => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesLength);
  };

  const prevSlide = (setCurrentSlide, slidesLength) => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesLength) % slidesLength);
  };

  return (
    <div className="mt-36 w-full min-h-full">
      <Carousel
        slides={heroSlides}
        currentSlide={currentSlide1}
        setCurrentSlide={setCurrentSlide1}
        nextSlide={()=>nextSlide(setCurrentSlide1, heroSlides.length)}
        prevSlide={()=>prevSlide(setCurrentSlide1, heroSlides.length)}
      />
      <AboutUs />

      <ProductCarousel 
        slides={products}
        currentSlide={currentSlideProduct}
        nextSlide={()=>nextSlide(setCurrentSlideProduct, products.length)}
        prevSlide={()=>prevSlide(setCurrentSlideProduct, products.length)}
      />


      <Projects 
        projects={projects}
        currentSlide={currentSlideProject}
        setCurrentSlide={setCurrentSlideProject}
        slidesLength={projects.length}
      />
      
      <Testimonials />

    </div>
  );
};

export default Home;
