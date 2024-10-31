import { LocationType } from "../../../types/location.ts";
import { UnitsType } from "../../../types/units.ts";
import { OPEN_WEATHER_URL } from "../../../../../utils/urls.ts";
import { API_KEY } from "../../../../../utils/constants.ts";

export const fetchWeatherData = async (
  location: LocationType,
  units: UnitsType,
) => {
  const { lon, lat } = location;
  if (lat === null || lon === null) {
    throw new Error("Invalid coordinates");
  }
  const cacheKey = `${lat},${lon}.${units}`;
  const cachedData = JSON.parse(localStorage.getItem(cacheKey) || "{}");
  const url = `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`;

  // Check if cached data exists and is still valid
  if (cachedData.expires && Date.now() < cachedData.expires) {
    return cachedData.data;
  }

  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json();
      const expires = Date.now() + 1000 * 60 * 10; // 10 minutes

      // Cache the data with a expiry time of 10 minutes
      localStorage.setItem(cacheKey, JSON.stringify({ data, expires }));

      return [data, units];
    } else if (response.status === 429) {
      throw new Error("Too many requests. Please wait before retrying.");
    } else {
      throw new Error("Error fetching weather data");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    if (cachedData.data) {
      console.log("Using stale cached data");
      return cachedData.data;
    }
    throw error;
  }
};
