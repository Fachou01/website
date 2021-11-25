import React from "react";
import Navbar from "../components/shared/Navbar";
import Login from "../components/login/Login";
import Footer from "../components/shared/Footer";
const login = () => {
  return (
    <div>
      <Navbar signout={false} />
      <Login />
      <Footer />
    </div>
  );
};

export default login;
