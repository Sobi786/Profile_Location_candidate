import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Sidebar />
    </>
  );
};

export default Layout;
