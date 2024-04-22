import React from "react";
import UserSearch from "./UserSearch";

const Navbar = () => {
  return (
    <nav className="bg-base-200 text-white w-full h-20 fixed top-0 left-0 z-50">
      <div className="navbar bg-base-200 flex items-center justify-between h-full px-4">
        <a className="btn btn-ghost text-xl">Grov</a>
        <div className="flex items-center justify-center flex-grow">
          <UserSearch />
          <button className="btn btn-ghost">Search</button>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
