import React, { useState } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UberReserve = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");

  const times = [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:12 PM",
    "6:30 PM",
    "7:00 PM",
  ];

  const handleSubmit = () => {
    const formattedDate = date ? date.toDateString() : "No date selected";
    alert(`Reserved for ${date} at ${time}`);
  };

  return (
    <div className="bg-[#a3d5df] rounded-2xl p-8 w-full max-w-md font-sans shadow-md">
      <h2 className="text-2xl font-bold mb-4 leading-tight">
        Get your ride right with <br /> Uber Reserve
      </h2>
      <p className="text-base mb-4">Choose date and time</p>

      <div className="flex justify-between gap-4 mb-6">
        {/* Date Select */}
        <div className="flex flex-col w-1/2">
          <label className="text-gray-700 text-sm mb-1">Date</label>
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
          <label className="text-gray-700 text-sm mb-1">Time</label>
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
              className="w-full bg-gray-100 text-black py-2 pl-10 pr-4 rounded-xl appearance-none focus:outline-none"
              popperPlacement="bottom-start"
            />

            {/* <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-gray-100 text-black py-2 pl-10 pr-4 rounded-xl appearance-none focus:outline-none"
            >
              <option value="" disabled>
                Time
              </option>
              {times.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select> */}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white py-3 rounded-xl text-lg font-medium hover:opacity-90 transition"
      >
        Next
      </button>
    </div>
  );
};

export default UberReserve;
