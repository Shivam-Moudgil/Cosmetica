import React from "react";
import Login from "../components/admin/MainLogin/Login";
import Signup from "../components/admin/MainLogin/Signup";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
  return (
    <div>

    
      {children}
    
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
