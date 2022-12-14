import React from "react";
import Login from "../components/MainLogin/Login";
import Signup from "../components/MainLogin/Signup";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
