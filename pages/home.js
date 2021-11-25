import React from "react";
import Navbar from "../components/shared/Navbar";
import Home from "../components/home/Home";
import Footer from "../components/shared/Footer";
const home = () => {
  return (
    <div>
      <Navbar signout={true} />
      <Home />
      <Footer />
    </div>
  );
};

export default home;
