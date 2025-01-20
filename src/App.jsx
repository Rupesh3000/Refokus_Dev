import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Work from "./Components/Hero/Work";
import Stripes from "./Components/Stripes/Stripes";
import Products from "./Components/Products/Products";
import Marquees from "./Components/Marquees/Marquees";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="min-h-screen bg-zinc-900 overflow-hidden">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default App;
