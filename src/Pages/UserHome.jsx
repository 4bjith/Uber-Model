import React from "react";
import Navbar2 from "../Components/Navbar2";
import Button3 from "../Components/Button3";
import { FaDotCircle } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import { TbSquareDotFilled } from "react-icons/tb";
import BookingSteps from "../Components/BookingSteps";
import Suggestion from "../Components/Suggestion";

export default function UserHome() {
  return (
    <div className="w-full h-full">
      <Navbar2 />
      <div className="w-full h-auto p-[20px]">
        {/* Hero section */}
        <div className="w-full md:flex">
          <div className="w-full h-auto px-6 md:px-[50px] md:w-[40%] ">
            <h1 className="text-[2rem] font-semibold pt-6 mb-6">
              Get ready for your first trip
            </h1>
            <p className="text-[0.9rem] tracking-wider mb-6">Discover the convenience of Uber. Request a ride now, or schedule one for later directly from your browser.</p>

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
                  // onChange={(e) => setPickup(e.target.value)}
                  className="bg-transparent outline-none text-gray-700 text-md w-full"
                />
              </div>

              {/* Navigation Icon */}
              <FiNavigation className="text-black text-xl rotate-45" />
            </div>

            {/* Dropoff Input Box */}
            <div className="flex items-center justify-between bg-gray-100 rounded-xl p-4 w-full shadow-sm mb-4">
              <div className="flex items-center space-x-3 w-full">
                {/* Dropoff Icon */}
                <div className="flex flex-col items-center">
                  <TbSquareDotFilled className="text-black text-xl" />
                </div>

                {/* Input Field */}
                <input
                  type="text"
                  placeholder="Dropoff location"
                  // onChange={(e) => setDropoff(e.target.value)}
                  className="bg-transparent outline-none text-gray-700 text-md w-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6 flex-wrap">
              <Button3>
                <h2 className="text-[1.1rem]">See prices</h2>
              </Button3>
            </div>
          </div>
          <div className="w-full h-[60vh] p-[20px] flex justify-center md:w-[60%] md:h-[60vh] ">
            <div className="bg-blue-100 w-full h-full md:w-[80%]"></div>
          </div>
        </div>
        {/* Booking steps */}
        <div className="w-full ">
            <BookingSteps/>
        </div>
        {/* Suggestion */}
        <div className="w-full">
            <Suggestion/>
        </div>
      </div>
    </div>
  );
}
