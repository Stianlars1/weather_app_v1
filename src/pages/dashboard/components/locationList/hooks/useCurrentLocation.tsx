import { LocationType } from "../../../types/location.ts";
import { useState } from "react";

const initialUserLocation: LocationType = {
  lon: null,
  lat: null,
  name: "My Location",
};

export const useCurrentLocation = () => {
  const muLocation = localStorage.getItem("myLocation")
    ? (JSON.parse(localStorage.getItem("myLocation")!) as LocationType)
    : null;
  const [currentLocation, setCurrentLocation] = useState<LocationType | null>(
    muLocation ? muLocation : null,
  );
  const [error, setError] = useState<string | null>(null);
  const [isLoadingGeo, setIsLoading] = useState<boolean>(false);

  const fetchUserLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setCurrentLocation(initialUserLocation);
      return;
    }
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          lon: formatCoordinates(position.coords.longitude),
          lat: formatCoordinates(position.coords.latitude),
          name: "My Location",
        });
        localStorage.setItem(
          "myLocation",
          JSON.stringify({
            lon: formatCoordinates(position.coords.longitude),
            lat: formatCoordinates(position.coords.latitude),
            name: "My Location",
          }),
        );
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setCurrentLocation(initialUserLocation);
        setIsLoading(false);
      },
      { timeout: 2500 },
    );
  };

  return {
    userLocation: currentLocation,
    fetchUserLocation,
    geoError: error,
    isLoadingGeo,
  };
};

const formatCoordinates = (coords: number) => parseFloat(coords.toFixed(3));
