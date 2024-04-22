import React from "react";
import { Link } from "react-router-dom";
import UserSearch from "./UserSearch";
import Mapcomp from "./Mapcomp";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="top-20 left-20 text-4xl">Welcome back Admin</h1>
      </div>

      <Link to="/form">
        <button className="fixed bottom-20 right-20 bg-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          ADD USER
        </button>
      </Link>
    </>
  );
};

export default Dashboard;
