import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "../api/axiosClient";
import UserStore from "../Zustand/UserStore";

function NumberUpdateForm() {
  const [mobileNumber, setMobileNumber] = useState("");
  const token = UserStore((state) => state.token);
  const user = UserStore((state) => state.user);
  const setUser = UserStore((state) => state.setUser);
  const clearNumber = () => setMobileNumber("");

  // ✅ Define the mutation for updating the mobile number
  const updateMobileMutation = useMutation({
    mutationFn: async (newMobile) => {
      if (!newMobile.trim()) throw new Error("Mobile number is required");

      const response = await api.put(
        "/userupdate",
        { mobile: newMobile },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data.user;
    },
    onSuccess: (updatedUser) => {
      setUser({ ...user, mobile: updatedUser.mobile });

      alert(`Mobile number updated successfully: ${updatedUser.mobile}`);
      clearNumber();
    },
    onError: (error) => {
      console.error("Update failed:", error);
      alert("Failed to update mobile number. Please try again.");
    },
  });
  const handleUpdate = () => {
    updateMobileMutation.mutate(mobileNumber);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow font-sans">
      <h2 className="text-2xl font-bold mb-2">Mobile Number</h2>
      <p className="text-gray-600 mb-6">
        Update your registered mobile number here.
      </p>

      {/* Mobile Number Input */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Enter Mobile No.</label>
        <div className="relative">
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="w-full border border-black rounded-lg px-4 py-2 pr-10 focus:outline-none"
          />
          {mobileNumber && (
            <button
              onClick={clearNumber}
              type="button"
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
        disabled={updateMobileMutation.isPending}
        className={`w-full py-3 rounded-lg font-semibold transition ${
          updateMobileMutation.isPending
            ? "bg-gray-500 text-white"
            : "bg-black text-white hover:bg-gray-900"
        }`}
      >
        {updateMobileMutation.isPending ? "Updating..." : "Update"}
      </button>
    </div>
  );
}

export default NumberUpdateForm;
