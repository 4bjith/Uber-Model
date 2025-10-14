import React from "react";
import { useNavigate } from "react-router-dom";

const PersonalInfoCard = ({ name, email, profile, mobile }) => {
  const Navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md font-sans">
      <h2 className="text-2xl font-bold mb-6">Personal info</h2>

      {/* Profile Picture */}
      <div className="relative w-20 h-20 mb-6">
        {!profile ? (
          <img
            src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
            alt="Profile"
            className="rounded-full w-20 h-20 object-cover"
          />
        ) : (
          <img
            src={
              profile?.startsWith("http")
                ? profile
                : `${
                    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
                  }${profile}`
            }
            alt="Profile"
            className="align-middle overflow-hidden rounded-full w-full h-full"
          />
        )}

        <button
          onClick={() => Navigate("/account/updateprofile")}
          className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536M9 13l6 6m2-2a9 9 0 11-4.243-7.757L17 15l-2 2z"
            />
          </svg>
        </button>
      </div>

      {/* Name */}
      <div className="mb-4">
        <p className="text-sm text-gray-500">Name</p>
        <div
          onClick={() => Navigate("/account/updatename")}
          className="flex items-center justify-between  cursor-pointer"
        >
          <p className="text-lg">{name}</p>
          <span className="text-gray-400">&gt;</span>
        </div>
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <p className="text-sm text-gray-500">Phone number</p>
        <div
          onClick={() => Navigate("/account/updatenumber")}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <p className="text-lg">+91 {mobile}</p>
          </div>
          <span className="text-gray-400">&gt;</span>
        </div>
      </div>

      {/* Email */}
      <div className="mb-4">
        <p className="text-sm text-gray-500">Email</p>
        <div
          onClick={() => alert("You Can't change email")}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <p className="text-lg">{email}</p>
            <span title="Verified">✅</span>
          </div>
          <span className="text-gray-400">&gt;</span>
        </div>
      </div>

      {/* Password */}
      {/* <div className="mb-4">
        <p className="text-sm text-gray-500">Password</p>
        <div 
        onClick={()=>alert("You Can't change email")}
        className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-lg">{password}</p>
            <span title="Verified">✅</span>
          </div>
          <span className="text-gray-400">&gt;</span>
        </div>
      </div> */}

      {/* Language */}
      <div className="mb-2">
        <p className="text-sm text-gray-500">Language</p>
        <div className="flex items-center justify-between">
          <p className="text-lg text-blue-600">Update device language</p>
          <svg
            className="h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M12.293 9.293a1 1 0 011.414 1.414L10.414 14l3.293 3.293a1 1 0 01-1.414 1.414L8.586 15.414a2 2 0 010-2.828l3.707-3.707z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
