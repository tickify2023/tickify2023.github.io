import React from "react";
import Navbar from "./navbar/Navbar";
import { NavFn } from "./navbar/NavFn";
import WpBtn from "./footer/WpBtn";
import Cursor from "./cursor/Cursor";
import Footer from "./footer/Footer";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar></Navbar>
      <NavFn></NavFn>
      <Cursor></Cursor>
      {children}
      <WpBtn></WpBtn>
      <Footer></Footer>
    </>
  );
};
export default Layout;
