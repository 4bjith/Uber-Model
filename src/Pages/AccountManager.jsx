import React, { useState } from "react";
import Navbar2 from "../Components/Navbar2";
import { FaUser } from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import AccountHome from "../Components/AccountHome";
import PersonalInfoCard from "../Components/PersonalInfoCard";

function AccountManager() {
  const [isActive, setIsAtive] = useState("home");
  return (
    <div className="w-full h-[100vh]">
      {/* Navbar */}
      {/* <div className="">
        <Navbar2 />
      </div> */}
      {/* Body */}
      <div className="w-full h-full">
        {/* (Deskto view left) account menu */}
        <div className="w-full h-auto  flex  border-b-4 border-b-gray-200 ">
          <button
            onClick={(e) => setIsAtive("home")}
            className="w-[25%] py-[20px] hover:border-b-4 "
          >
            Home
          </button>
          <button
            onClick={(e) => setIsAtive("personalInfo")}
            className="w-[25%] py-[20px] hover:border-b-4 "
          >
            Personal info
          </button>
          <button
            onClick={(e) => setIsAtive("security")}
            className="w-[25%] py-[20px] hover:border-b-4 "
          >
            Security
          </button>
          <button
            onClick={(e) => setIsAtive("privacy")}
            className="w-[25%] py-[20px] hover:border-b-4 "
          >
            Privacy&Data
          </button>
        </div>
        {/* (desktop view right) content srction */}
        <div className="w-full">
          {
          isActive === "home" ? <AccountHome /> : <></>
          }
          {
            isActive==="personalInfo"?<PersonalInfoCard/>:<></>
          }
        </div>
      </div>
    </div>
  );
}

export default AccountManager;
