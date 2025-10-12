import React, { useState } from "react";
import AccountHome from "../Components/AccountHome";
import PersonalInfoCard from "../Components/PersonalInfoCard";
import api from "../api/axiosClient";
import { useEffect } from "react";
import UserStore from "../Zustand/UserStore";

function AccountManager() {
  const [isActive, setIsActive] = useState("home");
  const token = UserStore((state) => state.token);
  const user = UserStore((state) => state.user);
  const userData = UserStore((state) => state.user);
  const setUser = UserStore((state) => state.setUser);
  const getUser = async () => {
    try {
      const response = await api.get("/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
      console.log("user data is now in zustand :", response.data);
    } catch (error) {
      console.error("error while running getuser function", error);
    }
  };

  useEffect(() => {
    if (token && !userData) {
      getUser();
    }
  }, [token, userData]);
  if (!userData) {
    return <div className="p-8 text-center">Loading User Profile...</div>;
  }
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
            Home{
              user.profileImg
            }
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
              name={user.name}
              email={user.email}
              profile={user.profileImg}
            />
          ) : (
            <></>
          )}
          {isActive === "personalInfo" ? (
            <PersonalInfoCard
              name={user.name}
              email={user.email}
              profile={user.profileImg}
              mobile={user.mobile}
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
