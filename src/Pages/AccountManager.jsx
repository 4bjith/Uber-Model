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
  const navigate = useNavigate();

  // React Query: Fetch user info
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await api.get("/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data; // ✅ Return only data part
    },
    retry: false, // avoid looping on 403
    enabled: !!token, // run only if token exists
  });

  // Logging for debugging
  console.log("Token:", token);
  console.log("Data:", data);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError)
    return (
      <div className="text-center mt-10 text-red-600">
        ❌ Error fetching user data: {error?.message || "Unauthorized"}
      </div>
    );

  return (
    <div className="w-full h-[100vh]">
      {/* Top Tabs */}
      <div className="w-full h-auto flex border-b-4 border-b-gray-200">
        {["home", "personalInfo", "security", "privacy"].map((tab) => (
          <button
            key={tab}
            onClick={() => setIsActive(tab)}
            className={`w-[25%] py-[20px] hover:border-b-4 ${
              isActive === tab ? "border-b-4 border-gray-400 font-semibold" : ""
            }`}
          >
            {tab === "home" && "Home"}
            {tab === "personalInfo" && "Personal Info"}
            {tab === "security" && "Security"}
            {tab === "privacy" && "Privacy & Data"}
          </button>
        ))}
      </div>

      {/* Page Content */}
      <div className="w-full">
        {isActive === "home" && (
          <AccountHome
            name={data?.name}
            email={data?.email}
            profile={data?.profileImg}
          />
        )}
        {isActive === "personalInfo" && (
          <PersonalInfoCard
            name={data?.name}
            email={data?.email}
            profile={data?.profileImg}
            mobile={data?.mobile}
          />
        )}
      </div>

      {/* Return Button */}
      <div className="w-[100vw] h-[10vh] flex justify-center items-center bg-gray-50 fixed bottom-0 z-10">
        <button
          onClick={() => navigate("/home")}
          className="w-[40%] h-[50px] rounded-lg bg-gray-300 font-semibold tracking-wider flex justify-center items-center"
        >
          <GiReturnArrow />
          <p className="px-3">Return</p>
        </button>
      </div>
    </div>
  );
}

export default AccountManager;
