import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Content = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-blue-900">{children}</main>
    </div>
  );
};

export default Content;
