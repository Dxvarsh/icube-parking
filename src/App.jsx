import React from "react";
import Home from "./pages/Home";
import StackParking from "./pages/StackParking";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import TwoPostTwostackP from "./pages/TwoPostTwostackP";
import TwoPostThreeStackP from "./pages/TwoPostThreeStackP";
import FourPostThreeStackP from "./pages/FourPostThreeStackP";
import MoreProjects from "./pages/MoreProjects";
import Blogs from "./pages/Blogs";
import Testimonials from "./pages/Testimonials";

/* bg-[#ED5E24] */

const App = () => {
  return (
    <div className="poppins-regular h-screen w-screen overflow-y-auto overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/icube-parking/" element={<Home />} />
        <Route path="/icube-parking/products/" element={<StackParking />} />
        <Route
          path="/icube-parking/products/stack-parking"
          element={<StackParking />}
        />
        <Route
          path="/icube-parking/products/stack-parking/two-post-two-stack-parking"
          element={<TwoPostTwostackP />}
        />
        <Route
          path="/icube-parking/products/stack-parking/two-post-three-stack-parking"
          element={<TwoPostThreeStackP />}
        />
        <Route
          path="/icube-parking/products/stack-parking/four-post-three-stack-parking"
          element={<FourPostThreeStackP />}
        />
        <Route
          path="/icube-parking/blogs"
          element={<Blogs />}
        />
        <Route
          path="/icube-parking/client-insights/our-projects"
          element={<MoreProjects />}
        />
        <Route
          path="/icube-parking/client-insights/testimonials"
          element={<Testimonials />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
