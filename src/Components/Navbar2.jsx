import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import ProfileDropdown from "./ProfileDropdown";
import { useNavigate } from "react-router-dom";
import UserStore from "../Zustand/UserStore";

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = UserStore((state) => state.token);

  return (
    <div className="w-full h-[9vh] min-h-[67px] bg-white text-black flex justify-between px-4 shadow">
      {/* Left Section - Logo + Nav Links */}
      <div className="w-[70%] flex items-center">
        <h1 className="text-[1.4rem] font-semibold px-2 cursor-pointer tracking-wide">
          Uber
        </h1>

        {/* Menu (responsive) */}
        <div
          className={`fixed top-0 left-0 h-[100vh] w-[100%] bg-gray-50 flex flex-col items-center gap-6 p-6 z-20 transform transition-transform duration-300 md:relative md:h-auto md:w-auto md:bg-white md:flex-row md:gap-8 md:transform-none ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          {/* Close button (only mobile) */}
          <div className="w-full flex justify-end text-3xl md:hidden">
            <IoClose
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>

          <h2
            onClick={() => navigate("/bookride")}
            className="text-[1.3rem] font-semibold cursor-pointer text-gray-700 md:text-[1rem]"
          >
            Ride
          </h2>
          <h2 className="text-[1.3rem] font-semibold cursor-pointer text-gray-600 md:text-[1rem]">
            Drive
          </h2>
          <h2 className="text-[1.3rem] font-semibold cursor-pointer text-gray-500 md:text-[1rem]">
            About
          </h2>
          <h2 className="text-[1.3rem] font-semibold cursor-pointer text-gray-400 md:text-[1rem]">
            Help
          </h2>
        </div>
      </div>

      {/* Right Section - Profile + Hamburger */}
      <div className="w-[30%] flex justify-end items-center">
        {/* Profile Dropdown */}
        <div className="flex items-center gap-3">
          {token ? <ProfileDropdown /> : <></>}
        </div>

        {/* Hamburger button (only mobile) */}
        <div
          onClick={() => setIsOpen(true)}
          className="flex flex-col justify-center items-center gap-[5px] pr-4 pl-3 cursor-pointer md:hidden"
        >
          <span className="w-[20px] h-[2px] bg-black"></span>
          <span className="w-[16px] h-[2px] bg-black"></span>
          <span className="w-[20px] h-[2px] bg-black"></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
