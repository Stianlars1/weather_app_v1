import { LocationType } from "../../types/location.ts";

export const getWeatherCardErrorMessage = (location: LocationType) => {
  const isUsersCurrentLocation = location.name === "My Location";
  const isErrorBecauseOfSecureContextFromGeoLocationAPI =
    isUsersCurrentLocation && location.lat === null && location.lon === null;

  if (isUsersCurrentLocation) {
    if (isErrorBecauseOfSecureContextFromGeoLocationAPI) {
      return {
        errorMessage: "My Location is unavailable",
        showRefreshButton: false,
      };
    }
    return {
      errorMessage: "Error fetching current location",
      showRefreshButton: true,
    };
  }
  return {
    errorMessage: "Error fetching weather data",
    showRefreshButton: true,
  };
};
