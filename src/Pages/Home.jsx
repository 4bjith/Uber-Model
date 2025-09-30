import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import LocationPicker from "../Components/LocationPicker";
import Button1 from "../Components/Button1";
import Button3 from "../Components/Button3";
import Button4 from "../Components/Button4";
import UberReserveM from "../Components/UberReserveM";

function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="w-[100%] px-[20px] md:px-[10vw]">
        <div className="w-[full] h-auto mb-4 flex flex-col md:flex-row">
          <div className="w-[100%] h-auto md:w-[45%]">
            <LocationPicker />
          </div>

          <div className="w-[50%] p-[60px] hidden md:flex justify-center items-center">
            <img
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1344/height=896/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9hM2NmODU2NC1lMmE2LTQxOGMtYjliMC02NWRkMjg1YzEwMGIuanBn"
              alt=""
              className="w-[90%] h-fit "
            />
          </div>
        </div>
        {/* suggestion sectionn */}
        <div className="w-full p-[20px]">
          <h1 className="ml-[5px] text-3xl font-semibold mb-5">Suggestion</h1>
          <div className="flex flex-col gap-[1.7rem] md:flex-row flex-wrap  ">
            <div className="bg-gray-100 w-[100%] h-[20vh] flex items-center rounded-xl md:w-[30%]">
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
            <div className="bg-gray-100 w-[100%] h-[20vh] flex items-center rounded-xl md:w-[30%]">
              <div className="w-[65%] h-[90%] p-[20px] flex flex-col justify-center items-start gap-2.5">
                <h2 className="text-[1rem] font-semibold">Reserve</h2>
                <p className="text-[0.8rem] mb-1">
                  Reserve your ride in advance so you can relax on the day of
                  your trip.
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
            <div className="bg-gray-100 w-[100%] h-[20vh] flex items-center rounded-xl md:w-[30%]">
              <div className="w-[65%] h-[90%] p-[20px] flex flex-col justify-center items-start gap-2.5">
                <h2 className="text-[1rem] font-semibold">Intercity</h2>
                <p className="text-[0.8rem] mb-1">
                  Get convenient, affordable outstation cabs anytime at your
                  door.
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
        {/* Scope for making components */}
        {/* No.1 */}
        <div className="w-[100%] h-auto px-[20px] mt-[35px] md:flex items-center mb-[30px] ">
          <div className="w-[100%] md:w-[50%] ">
            <h1 className="ml-[5px] text-3xl font-semibold mb-5">
              Log in to see your account details
            </h1>
            <p className="ml-[5px] text-[1rem] ">
              View past trips, tailored suggestions, support resources, and
              more.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Button3>
                <h2 className="text-[1rem]">Log in to your account</h2>
              </Button3>
              <Button4>
                <h2 className="text-[1rem]">Create an account</h2>
              </Button4>
            </div>
          </div>
          <div className="w-[100%] h-auto  mt-[25px] flex justify-center md:w-[50%]">
            <img
              src="https://tb-static.uber.com/prod/udam-assets/850e6b6d-a29e-4960-bcab-46de99547d24.svg"
              alt=""
              className="w-[100%] md:w-[70%]"
            />
          </div>
        </div>
        <div className="w-[100%] h-auto px-[20px] ">
          <h1 className="ml-[5px] text-3xl font-semibold mb-5">
            Plan for Later
          </h1>
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="w-[100%] md:w-[60%]">
              <UberReserveM />
            </div>
            <div className="w-[80%] p-[20px] border-[1px] border-gray-100 rounded-xl md:w-[40%] ">
              <div className="">
                <h2 className="text-[1rem]">Benifits</h2>
                <div className="w-[100%]"></div>
              </div>
            </div>
          </div>
        </div>
        {/* No.2 */}
        <div className="w-[100%] h-auto px-[20px] mt-[35px] flex items-center flex-col md:flex-row-reverse gap-7 ">
          <div className="w-[100%] md:w-[50%] ">
            <h1 className="ml-[5px] text-3xl font-semibold mb-5">
              Drive when you want, make what you need
            </h1>
            <p className="ml-[5px] text-[1rem] ">
              Make money on your schedule with deliveries or rides—or both. You
              can use your own car or choose a rental through Uber.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Button3>
                <h2 className="text-[1rem]">Get started</h2>
              </Button3>
              <Button4>
                <h2 className="text-[1rem]">
                  Already have an account? Sign in
                </h2>
              </Button4>
            </div>
          </div>
          <div className="w-[100%] h-[100%] mt-[25px] p-[50px] flex justify-center md:w-[50%] ">
            <img
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1104/height=1104/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NjRkZDNkMS05NGU3LTQ4MWUtYjI4Yy0wOGQ1OTM1M2I5ZTAucG5n"
              alt=""
              className="w-[100%] "
            />
          </div>
        </div>
        {/* No.3 */}
        <div className="w-[100%] h-auto px-[20px] mt-[35px] flex items-center flex-col md:flex-row gap-7">
          <div className="w-[100%] md:w-[50%]">
            <h1 className="ml-[5px] text-3xl font-semibold mb-5">
              The Uber you know, reimagined for business
            </h1>
            <p className="ml-[5px] text-[1rem] ">
              Uber for Business is a platform for managing global rides and
              meals, and local deliveries, for companies of any size.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Button3>
                <h2 className="text-[1rem]">Get started</h2>
              </Button3>
              <Button4>
                <h2 className="text-[1rem]">Check out our solutions</h2>
              </Button4>
            </div>
          </div>
          <div className="w-[100%] h-auto bg-amber-50 mt-[25px] md:w-[50%]">
            <img
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1104/height=1104/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy83NmJhZjFlYS0zODVhLTQwOGMtODQ2Yi01OTIxMTA4NjE5NmMucG5n"
              alt=""
              className="w-[100%] "
            />
          </div>
          <div className="w-[100%] h-auto bg-amber-50 mt-[25px] md:hidden">
            <img
              src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=1104/height=1104/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xODM0ZTZmZC0zM2UzLTRjOTUtYWQ3YS1mNDg0YThjODEyZDcuanBn"
              alt=""
              className="w-[100%] "
            />
          </div>
        </div>
        {/* No.4 */}
        <div className="w-[100%] h-auto px-[20px] mt-[35px] mb-[40px] ">
          <h1 className="ml-[5px] text-3xl font-semibold mb-5">
            Make money by renting out your car
          </h1>
          <p className="ml-[5px] text-[1rem] ">
            Connect with thousands of drivers and earn more per week with Uber’s
            free fleet management tools.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <Button3>
              <h2 className="text-[1rem]">Get started</h2>
            </Button3>
          </div>
        </div>

        {/* Bottom */}
        <div className="w-[100%] h-[9vh] "></div>
        <div className="w-[100%] h-[9vh] px-[20px] py-[40px] fixed bottom-0 mt-4 bg-white flex  items-center md:px-[12vw]">
          <button className="bg-black text-white w-[100%] px-6 py-3 rounded-lg md:w-[80%]">
            See Prices
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
