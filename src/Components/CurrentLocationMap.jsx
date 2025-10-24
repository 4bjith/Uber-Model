import React, { useState, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useQuery } from "@tanstack/react-query";
import api from "../api/axiosClient";
import UserStore from "../Zustand/UserStore";

const CurrentLocationMap = ({ start, isLoaded }) => {
  const [location, setLocation] = useState(null);
  const token = UserStore((state) => state.token);

  const { data } = useQuery({
    queryKey: ["usrLocation"],
    queryFn: async () => {
      const response = await api.get("/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
    retry: false,
    enabled: !!token,
  });

  useEffect(() => {
    if (start?.lat && start?.lng) {
      setLocation({ lat: start.lat, lng: start.lng });
    } else if (data?.location?.coordinates?.length === 2) {
      setLocation({
        lat: data.location.coordinates[1],
        lng: data.location.coordinates[0],
      });
    }
  }, [start, data]);

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="w-full h-full min-h-[300px] relative rounded-xl overflow-hidden">
      {location ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={location}
          zoom={15}
        >
          <Marker position={location} />
        </GoogleMap>
      ) : (
        <p className="text-center">Fetching current location...</p>
      )}
    </div>
  );
};

export default CurrentLocationMap;
