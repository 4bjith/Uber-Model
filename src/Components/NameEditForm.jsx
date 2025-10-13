import React, { useState } from "react";
import UserStore from "../Zustand/UserStore";
import { useEffect } from "react";
import api from "../api/axiosClient";

const NameEditForm = () => {
  const [firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const user = UserStore((state) => state.user);
  const token = UserStore((state) => state.token);
  const clearFirstName = () => setFirstName("");
  const clearLastName = () => setLastName("");

  useEffect(() => {
    console.log(user);
    if (user?.name) {
      const nameParts = user.name.split(" ");
      setFirstName(nameParts[0] || "");
      setLastName(nameParts.slice(1).join(" ") || "");
    }
  }, [user]);
  const handleUpdate = async () => {
    // Your update logic here (e.g., API call)
    try {
      const fullName = `${firstName} ${lastName}`.trim();
      const response = await api.put(
        `/userupdate/${user._id}`,
        {
          name: fullName,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert(`Update name to: ${response.data.user.name}`);
    } catch (err) {
      console.error("Error updating name:", err);
      alert("Failed to update name.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow font-sans">
      <h2 className="text-2xl font-bold mb-2">Name</h2>
      <p className="text-gray-600 mb-6">
        This is the name you would like other people to use when referring to
        you.
      </p>

      {/* First Name */}
      <div className="mb-4">
        <label className="block font-semibold mb-1"> Name</label>
        <div className="relative">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border border-black rounded-lg px-4 py-2 pr-10 focus:outline-none"
          />
          {firstName && (
            <button
              onClick={clearFirstName}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
            >
              &#x2715;
            </button>
          )}
        </div>
      </div>

      {/* Last Name */}
      <div className="mb-6">
        <label className="block font-semibold mb-1">Last name</label>
        <div className="relative">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full bg-gray-100 rounded-lg px-4 py-2 pr-10 focus:outline-none"
          />
          {lastName && (
            <button
              onClick={clearLastName}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
            >
              &#x2715;
            </button>
          )}
        </div>
      </div>

      {/* Update Button */}
      <button
        onClick={handleUpdate}
        className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
      >
        Update
      </button>
    </div>
  );
};

export default NameEditForm;
