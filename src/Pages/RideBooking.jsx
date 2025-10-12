import React from "react";
import LocationPicker2 from "../Components/LocationPicker2";
import Navbar from "../Components/Navbar";
import UserStore from "../Zustand/UserStore";
import Navbar2 from "../Components/Navbar2";

function RideBooking() {
  const user = UserStore((state)=> state.user)
  return (
    // main body
    <div className="w-full min-h-[100vh]">
      {/* Navbar */}
      <div className="w-full h-auto">
        {
          !user?<Navbar/>:<Navbar2/>
        }
        
      </div>
      <div className="w-full  md:flex flex-row-reverse ">
        {/* map section */}
        <div className="w-full h-[70vh] md:h-[90vh] md:w-[65%] md:p-[25px]">
            <div className="w-full h-full bg-blue-500"></div>
        </div>
        {/* location picker */}
        <div className="fixed bottom-0 bg-white w-full rounded-2xl md:relative md:w-[35%] md:h-[90vh] p-[25px]">
          <LocationPicker2 />
        </div>
      </div>
    </div>
  );
}

export default RideBooking;
