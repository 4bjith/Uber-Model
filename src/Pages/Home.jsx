import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import LocationPicker from "../Components/LocationPicker";
import Button1 from "../Components/Button1";

function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="w-full h-[39vh]">
        <LocationPicker />
      </div>
      {/* suggestion sectionn */}
      <div className="w-full h-auto p-[20px]">
        <h1 className="ml-[5px] text-3xl font-semibold mb-5">Suggestion</h1>
        <div className="flex flex-col gap-[1.7rem]">
          <div className="bg-gray-100 w-[100%] h-[20vh] flex items-center rounded-xl">
            <div className="w-[70%] h-[90%] p-[20px] flex flex-col justify-center items-start gap-2.5">
              <h2 className="text-xl font-semibold">Ride</h2>
              <p className="text-[0.9rem]">
                Go anywhere with Uber. Request a ride, hop in, and go.
              </p>
              <Button1>Details</Button1>
            </div>
            <div className="w-[30%] h-[100%] flex justify-center items-center">
              <div className="w-[90%] h-[90%] ">
                <img
                  src="https://mobile-content.uber.com/launch-experience/top_bar_rides_3d.png"
                  alt=""
                  className="w-[100%] h-[100%] overflow-hidden"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 w-[100%] h-[20vh] flex items-center rounded-xl">
            <div className="w-[70%] h-[90%] p-[20px] flex flex-col justify-center items-start gap-2.5">
              <h2 className="text-xl font-semibold">Reserve</h2>
              <p className="text-[0.9rem]">
                Reserve your ride in advance so you can relax on the day of your
                trip.
              </p>
              <Button1>Details</Button1>
            </div>
            <div className="w-[30%] h-[100%] flex justify-center items-center">
              <div className="w-[90%] h-[90%] ">
                <img
                  src="https://mobile-content.uber.com/launch-experience/top_bar_rides_3d.png"
                  alt=""
                  className="w-[100%] h-[100%] overflow-hidden"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 w-[100%] h-[20vh] flex items-center rounded-xl">
            <div className="w-[70%] h-[90%] p-[20px] flex flex-col justify-center items-start gap-2.5">
              <h2 className="text-xl font-semibold">Intercity</h2>
              <p className="text-[0.9rem]">
                Get convenient, affordable outstation cabs anytime at your door.
              </p>
              <Button1>Details</Button1>
            </div>
            <div className="w-[30%] h-[100%] flex justify-center items-center">
              <div className="w-[90%] h-[90%] ">
                <img
                  src="https://mobile-content.uber.com/launch-experience/top_bar_rides_3d.png"
                  alt=""
                  className="w-[100%] h-[100%] overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Home;
