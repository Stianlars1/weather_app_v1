import { LocationType } from "../../types/location.ts";

export const getWeatherCardErrorMessage = (location: LocationType) => {
  const isUsersCurrentLocation = location.name === "My Location";
  const isErrorBecauseOfSecureContextFromGeoLocationAPI =
    isUsersCurrentLocation && location.lat === null && location.lon === null;

  if (isUsersCurrentLocation) {
    if (isErrorBecauseOfSecureContextFromGeoLocationAPI) {
      return "Couldn't load location. This feature is only available in secure contexts (HTTPS)";
    }
    return "Error fetching current location";
  }
  return "Error fetching weather data";
};
