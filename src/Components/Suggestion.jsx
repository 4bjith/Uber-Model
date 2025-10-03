import React from "react";
import Button1 from "./Button1";

export default function Suggestion() {
  return (
    <div className="w-full p-[20px]">
      <h1 className="ml-[5px] text-3xl font-semibold mb-5">Suggestion</h1>
      <div className="flex flex-col md:flex-row flex-wrap gap-[1rem] ">
        <div className="bg-gray-100 w-[100%] h-auto flex items-center rounded-xl md:w-[30%]">
          <div className="w-[65%] h-[90%] p-[20px] flex flex-col justify-center items-start gap-2.5">
            <h2 className="text-[1rem] font-semibold">Ride</h2>
            <p className="text-[0.8rem] mb-1">
              Go anywhere with Uber. Request a ride, hop in, and go.
            </p>
            <Button1>
              <h2 className="text-[0.8rem]">Details</h2>
            </Button1>
          </div>
          <div className="w-[35%] h-[100%] flex justify-center items-center">
            <div className="w-[90%] h-[90%] ">
              <img
                src="https://mobile-content.uber.com/launch-experience/top_bar_rides_3d.png"
                alt=""
                className="w-[100%] h-[100%] overflow-hidden"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 w-[100%] h-auto flex items-center rounded-xl md:w-[30%]">
          <div className="w-[65%] h-[90%] p-[20px] flex flex-col justify-center items-start gap-2.5">
            <h2 className="text-[1rem] font-semibold">Reserve</h2>
            <p className="text-[0.8rem] mb-1">
              Reserve your ride in advance so you can relax on the day of your
              trip.
            </p>
            <Button1>
              <h2 className="text-[0.8rem]">Details</h2>
            </Button1>
          </div>
          <div className="w-[35%] h-[100%] flex justify-center items-center">
            <div className="w-[90%] h-[90%] ">
              <img
                src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
                alt=""
                className="w-[100%] h-[100%] overflow-hidden"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 w-[100%] h-auto flex items-center rounded-xl md:w-[30%]">
          <div className="w-[65%] h-[90%] p-[20px] flex flex-col justify-center items-start gap-2.5">
            <h2 className="text-[1rem] font-semibold">Intercity</h2>
            <p className="text-[0.8rem] mb-1">
              Get convenient, affordable outstation cabs anytime at your door.
            </p>
            <Button1>
              <h2 className="text-[0.8rem]">Details</h2>
            </Button1>
          </div>
          <div className="w-[35%] h-[100%] flex justify-center items-center">
            <div className="w-[90%] h-[90%] ">
              <img
                src="https://mobile-content.uber.com/launch-experience/intercity.png"
                alt=""
                className="w-[100%] h-[100%] overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
