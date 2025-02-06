import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* bg-[#ED5E24] */


const App = () => {
  return (
    <div className="pt-3 lg:pt-7 poppins-regular h-screen w-screen overflow-y-auto overflow-x-hidden">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
