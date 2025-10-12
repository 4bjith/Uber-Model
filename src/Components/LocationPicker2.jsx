import React, { useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import { TbSquareDotFilled } from "react-icons/tb";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button3 from "./Button3";
import Button4 from "./Button4";


function LocationPicker2() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  

  const handleSubmit = () => {
    const formattedDate = date ? date.toDateString() : "No date selected";
    alert(`Reserved for ${date} at ${time}`);
    
  };
  return (
    <div className="w-full h-auto px-[20px] pb-2 md:px-[50px] md:border-2 md:border-gray-300 rounded-2xl md:pb-[25px]">
      <h1 className="text-[1.7rem] font-semibold pt-2 mb-4">
        Go anywhere with Uber
      </h1>

      {/* Pickup Input Box */}
      <div className="flex items-center justify-between bg-gray-100 rounded-xl p-2 w-full shadow-sm mb-4 relative">
        <div className="flex items-center space-x-3 w-full">
          {/* Pickup Icon and Vertical Line */}
          <div className="flex flex-col items-center relative">
            <FaDotCircle className="text-black text-lg" />
            <div className="w-[2px] h-[33px] bg-black absolute top-[22px]" />
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="bg-transparent outline-none text-gray-700 text-[0.9rem] w-full"
          />
        </div>

        {/* Navigation Icon */}
        <FiNavigation className="text-black text-lg rotate-45" />
      </div>

      {/* Dropoff Input Box */}
      <div className="flex items-center justify-between bg-gray-100 rounded-xl p-2 w-full shadow-sm mb-4">
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
            onChange={(e) => setDropoff(e.target.value)}
            className="bg-transparent outline-none text-gray-700 text-[0.9rem] w-full"
          />
        </div>
      </div>
      <div className="flex justify-between gap-3 mb-6 w-[100%]">
        {/* Date Select */}
        <div className="flex flex-col w-1/2">
          <label className="text-gray-700 text-[0.8rem] mb-1 px-[12px]">Date</label>
          <div className="relative">
            <FaCalendarAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 z-10" />
            <DatePicker
              selected={date}
              onChange={(d) => setDate(d)}
              placeholderText="Select"
              className="w-full bg-gray-100 text-black py-2 pl-10 pr-4 rounded-xl appearance-none focus:outline-none"
              dateFormat="MMM d, yyyy"
              minDate={new Date()}
              popperPlacement="bottom-start"
            />
          </div>
        </div>

        {/* Time Select */}
        <div className="flex flex-col w-1/2">
          <label className="text-gray-700 text-[0.8rem] mb-1 px-[12px]">Time</label>
          <div className="relative">
            <FaClock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 z-10" />
            <DatePicker
              selected={time}
              onChange={(t) => setTime(t)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              placeholderText="Select"
              className="w-full  bg-gray-100 text-black py-2 pl-10 pr-4 rounded-xl appearance-none focus:outline-none"
              popperPlacement="bottom-start"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-3 flex-wrap">
        <Button3 onClick={handleSubmit}>
          <h2 className="text-[0.9rem]">Pickup now</h2>
        </Button3>
        <Button3>
            <div className="flex items-center gap-2">
                <FaUser />
                <h2 className="text-[0.9rem]">For me</h2>
            </div>
        </Button3>
      </div>
    </div>
  );
}

export default LocationPicker2;
