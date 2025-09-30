import React, { useState } from "react";
import { FaDotCircle } from 'react-icons/fa';
import { FiNavigation } from 'react-icons/fi';
import { TbSquareDotFilled } from "react-icons/tb";
import Button3 from "./Button3";
import Button4 from "./Button4";

function LocationPicker() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  return (
    <div className="w-full h-[39vh] px-6">
      <h1 className="text-[2.4rem] font-semibold pt-6 mb-6">
        Go anywhere with Uber
      </h1>

      {/* Pickup Input Box */}
      <div className="flex items-center justify-between bg-gray-100 rounded-xl p-4 w-full shadow-sm mb-6 relative">
        <div className="flex items-center space-x-3 w-full">
          {/* Pickup Icon and Vertical Line */}
          <div className="flex flex-col items-center relative">
            <FaDotCircle className="text-black text-xl" />
            <div className="w-[2px] h-[50px] bg-black absolute top-[22px]" />
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Pickup location"
            value={pickup}
            // onChange={(e) => setPickup(e.target.value)}
            className="bg-transparent outline-none text-gray-700 text-md w-full"
          />
        </div>

        {/* Navigation Icon */}
        <FiNavigation className="text-black text-xl rotate-45" />
      </div>

      {/* Dropoff Input Box */}
      <div className="flex items-center justify-between bg-gray-100 rounded-xl p-4 w-full shadow-sm">
        <div className="flex items-center space-x-3 w-full">
          {/* Dropoff Icon */}
          <div className="flex flex-col items-center">
            <TbSquareDotFilled className="text-black text-xl" />
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Dropoff location"
            value={dropoff}
            // onChange={(e) => setDropoff(e.target.value)}
            className="bg-transparent outline-none text-gray-700 text-md w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <Button3><h2 className="text-[1.1rem]">See prices</h2></Button3>
        <Button4><h2 className="text-[1.1rem]">Log in to see your recent activity</h2></Button4>
      </div>
    </div>
  );
}

export default LocationPicker;
