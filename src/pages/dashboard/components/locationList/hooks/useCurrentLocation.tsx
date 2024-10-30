import { useEffect, useState } from "react";
import { LocationType } from "../../../types/location.ts";

const initialUserLocation = {
  lon: null,
  lat: null,
  name: "My Location",
};
export const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState<LocationType | null>(
    initialUserLocation,
  );

  useEffect(() => {
    const fetchUserLocation = async () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lon: formatCoordinates(position.coords.longitude),
            lat: formatCoordinates(position.coords.latitude),
            name: "My Location",
          });
        },
        (error) => {
          console.error("Error getting geolocation: ", error);
        },
      );
    };

    fetchUserLocation();
  }, []);

  return { userLocation: currentLocation };
};

const formatCoordinates = (coords: number) => parseFloat(coords.toFixed(3));
