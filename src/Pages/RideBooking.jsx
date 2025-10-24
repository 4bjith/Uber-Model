import React, { useState, useEffect } from "react";
import LocationPicker2 from "../Components/LocationPicker2";
import Navbar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar2";
import UserStore from "../Zustand/UserStore";
import CurrentLocationMap from "../Components/CurrentLocationMap";
import { useJsApiLoader } from "@react-google-maps/api";

function RideBooking() {
  const user = UserStore((state) => state.user);
  const [data, setData] = useState("");
  const [coordinates, setCoordinates] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  useEffect(() => {
    if (!data || !window.google) return;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: data }, (results, status) => {
      if (status === "OK" && results[0]) {
        const loc = results[0].geometry.location;
        setCoordinates({ lat: loc.lat(), lng: loc.lng() });
      } else {
        console.error("Geocode failed: " + status);
      }
    });
  }, [data]);

  if (loadError) return <p>Error loading Google Maps</p>;
  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <div className="w-full min-h-[100vh]">
      <div className="w-full h-auto">{!user ? <Navbar /> : <Navbar2 />}</div>

      <div className="w-full md:flex flex-row-reverse">
        <div className="w-full h-[70vh] md:h-[90vh] md:w-[65%] md:p-[25px]">
          <div className="w-full h-full bg-blue-500 rounded-xl overflow-hidden">
            <CurrentLocationMap start={coordinates} isLoaded={isLoaded} />
          </div>
        </div>

        <div className="fixed bottom-0 bg-white w-full rounded-2xl md:relative md:w-[35%] md:h-[90vh] p-[25px]">
          <LocationPicker2 setData={setData} isLoaded={isLoaded} />
        </div>
      </div>
    </div>
  );
}

export default RideBooking;
