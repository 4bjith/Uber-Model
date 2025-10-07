import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Button1 from "./Button1";
import Button2 from "./Button2";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-[9vh] min-h-[67px] bg-black text-white flex justify-between px-[10px]">
      <div className="w-[40%] flex items-center">
        <h1
          onClick={() => navigate("/home-user")}
          className="text-[1.4rem] font-semibold px-[20px] cursor-pointer"
        >
          Uber
        </h1>
        <div
          className={`fixed top-0 left-0 h-[100vh] w-[100%] bg-gray-50 flex flex-col items-center gap-6 p-6 z-20 transform transition-transform duration-300 md:relative md:h-auto md:w-auto  md:flex-row md:gap-8 md:transform-none ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0 md:bg-black"
          }`}
        >
          {/* Close button (only mobile) */}
          <div className="w-full flex justify-end text-3xl md:hidden">
            <IoClose
              onClick={() => setIsOpen(false)}
              className="cursor-pointe text-black"
            />
          </div>
          <Link to="/bookride">
            <h2 className="text-[1.3rem] font-semibold cursor-pointer text-gray-700 md:text-[1rem] md:text-gray-50">
              Ride
            </h2>
          </Link>
          <h2 className="text-[1.3rem] font-semibold cursor-pointer text-gray-600 md:text-[1rem] md:text-gray-100">
            Drive
          </h2>
          <h2 className="text-[1.3rem] font-semibold cursor-pointer text-gray-500 md:text-[1rem] md:text-gray-200">
            About
          </h2>
          <h2 className="text-[1.3rem] font-semibold cursor-pointer text-gray-400 md:text-[1rem] md:text-gray-300">
            Help
          </h2>
        </div>
      </div>
      <div className="w-[60%] flex justify-end items-center">
        <div className="flex items-center gap-[5px]">
          <Link to={"/login"}>
            <Button2 className="hover:border-gray-400">
              <h1 className="">Log in</h1>
            </Button2>
          </Link>
          <Link to={"/login"}>
            <Button1>
              <h1 className="">Sign up</h1>
            </Button1>
          </Link>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="flex flex-col justify-center items-center gap-[5px] pr-4 pl-3 cursor-pointer md:hidden"
        >
          <span className="w-[20px] h-[3px] bg-white"></span>
          <span className="w-[20px] h-[3px] bg-white"></span>
          <span className="w-[20px] h-[3px] bg-white"></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
