import React, { useState } from "react";
import AccountHome from "../Components/AccountHome";
import PersonalInfoCard from "../Components/PersonalInfoCard";
import api from "../api/axiosClient";
import { useEffect } from "react";
import UserStore from "../Zustand/UserStore";
import { useQuery } from "@tanstack/react-query";

function AccountManager() {
  const [isActive, setIsActive] = useState("home");
  const token = UserStore((state) => state.token);

  // function to call get api function using react query;

    const {data,isLoading} = useQuery({ queryKey: ['user'], queryFn: async()=>{
      return await api.get("/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
    } })

  if(isLoading) return <h1>loadinggg...................</h1>
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
    </div>
  );
}

export default AccountManager;
