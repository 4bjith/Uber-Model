import React, { useState } from "react";
import AccountHome from "../Components/AccountHome";
import PersonalInfoCard from "../Components/PersonalInfoCard";
import api from "../api/axiosClient";
import { GiReturnArrow } from "react-icons/gi";
import UserStore from "../Zustand/UserStore";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
function AccountManager() {
  const [isActive, setIsActive] = useState("home");
  const token = UserStore((state) => state.token);
  const Navigate = useNavigate()
  // function to call get api function using react query;

  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return await api.get("/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
  });

  if (isLoading) return <h1>loadinggg...................</h1>;
  return (
    <div className="w-full h-[100vh]">
      {/* Navbar */}
      {/* Body */}
      <div className="w-full h-full">
        {/* (Deskto view left) account menu */}
        <div className="w-full h-auto  flex  border-b-4 border-b-gray-200 ">
          <button
            onClick={(e) => setIsActive("home")}
            className="w-[25%] py-[20px] hover:border-b-4 "
          >
            Home
          </button>
          <button
            onClick={(e) => setIsActive("personalInfo")}
            className="w-[25%] py-[20px] hover:border-b-4 "
          >
            Personal info
          </button>
          <button
            onClick={(e) => setIsActive("security")}
            className="w-[25%] py-[20px] hover:border-b-4 "
          >
            Security
          </button>
          <button
            onClick={(e) => setIsActive("privacy")}
            className="w-[25%] py-[20px] hover:border-b-4 "
          >
            Privacy&Data
          </button>
        </div>
        {/* (desktop view right) content srction */}
        <div className="w-full">
          {isActive === "home" ? (
            <AccountHome
              name={data.data.name}
              email={data.data.email}
              profile={data.data.profileImg}
            />
          ) : (
            <></>
          )}
          {isActive === "personalInfo" ? (
            <PersonalInfoCard
              name={data.data.name}
              email={data.data.email}
              profile={data.data.profileImg}
              mobile={data.data.mobile}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="w-[100vw] h-[10vh] flex justify-center items-center bg-gray-50 fixed bottom-0 z-10">
        <button 
        onClick={()=>{Navigate("/home")}}
        className="w-[40%] h-[50px] rounded-lg bg-gray-300 font-semibold tracking-wider flex justify-center items-center">
          <GiReturnArrow /><p className="px-3">return</p>
        </button>
      </div>
    </div>
  );
}

export default AccountManager;
