import React, { useState, useRef } from "react";
import { FaDotCircle, FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import { TbSquareDotFilled } from "react-icons/tb";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button3 from "./Button3";
import { Autocomplete } from "@react-google-maps/api";
import { toast } from "react-toastify";

function LocationPicker2({ onSelectLocations, isLoaded, setData }) {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const pickupRef = useRef(null);
  const dropoffRef = useRef(null);

  const handleSubmit = () => {
    if (onSelectLocations) {
      onSelectLocations({ pickup, dropoff, date, time });
    }

    const formattedDate = date ? date.toDateString() : "No date selected";
    const formattedTime = time
      ? time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : "No time selected";
    toast.info(`Trip from "${pickup}" to "${dropoff}" on ${formattedDate} at ${formattedTime}`);
  };

  const onPlaceChanged = (type) => {
    if (type === "pickup" && pickupRef.current) {
      const place = pickupRef.current.getPlace();
      if (place?.formatted_address) setPickup(place.formatted_address);
      else if (place?.name) setPickup(place.name);
    }
    if (type === "dropoff" && dropoffRef.current) {
      const place = dropoffRef.current.getPlace();
      if (place?.formatted_address) setDropoff(place.formatted_address);
      else if (place?.name) setDropoff(place.name);
    }
  };

  if (!isLoaded) return <p>Loading map features...</p>;

  return (
    <div className="w-full h-auto px-[20px] pb-2 md:px-[50px] md:border-2 md:border-gray-300 rounded-2xl md:pb-[25px]">
      <h1 className="text-[1.7rem] font-semibold pt-2 mb-4">Go anywhere with Uber</h1>

      {/* Pickup Input Box */}
      <div className="flex items-center justify-between bg-gray-100 rounded-xl p-2 w-full shadow-sm mb-4 relative">
        <div className="flex items-center space-x-3 w-full">
          <div className="flex flex-col items-center relative">
            <FaDotCircle className="text-black text-lg" />
            <div className="w-[2px] h-[33px] bg-black absolute top-[22px]" />
          </div>
          <Autocomplete
            onLoad={(ref) => (pickupRef.current = ref)}
            onPlaceChanged={() => onPlaceChanged("pickup")}
          >
            <input
              type="text"
              placeholder="Pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-transparent outline-none text-gray-700 text-[0.9rem] w-full"
            />
          </Autocomplete>
        </div>
        <FiNavigation
          onClick={() => setData(pickup)}
          className="text-black text-lg rotate-45"
        />
      </div>

      {/* Dropoff Input Box */}
      <div className="flex items-center justify-between bg-gray-100 rounded-xl p-2 w-full shadow-sm mb-4">
        <div className="flex items-center space-x-3 w-full">
          <TbSquareDotFilled className="text-black text-xl" />
          <Autocomplete
            onLoad={(ref) => (dropoffRef.current = ref)}
            onPlaceChanged={() => onPlaceChanged("dropoff")}
          >
            <input
              type="text"
              placeholder="Dropoff location"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              className="bg-transparent outline-none text-gray-700 text-[0.9rem] w-full"
            />
          </Autocomplete>
        </div>
      </div>

      {/* Date and Time */}
      <div className="flex justify-between gap-3 mb-6 w-[100%]">
        <div className="flex flex-col w-1/2">
          <label className="text-gray-700 text-[0.8rem] mb-1 px-[12px]">Date</label>
          <div className="relative">
            <FaCalendarAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 z-10" />
            <DatePicker
              selected={date}
              onChange={setDate}
              placeholderText="Select"
              className="w-full bg-gray-100 text-black py-2 pl-10 pr-4 rounded-xl focus:outline-none"
              dateFormat="MMM d, yyyy"
              minDate={new Date()}
              popperPlacement="bottom-start"
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-gray-700 text-[0.8rem] mb-1 px-[12px]">Time</label>
          <div className="relative">
            <FaClock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 z-10" />
            <DatePicker
              selected={time}
              onChange={setTime}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              placeholderText="Select"
              className="w-full bg-gray-100 text-black py-2 pl-10 pr-4 rounded-xl focus:outline-none"
              popperPlacement="bottom-start"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
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
