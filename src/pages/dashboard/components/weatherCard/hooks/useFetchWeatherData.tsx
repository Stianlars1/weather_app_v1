import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "../api/fetchWeatherData.tsx";
import { LocationType } from "../../../types/location.ts";
import { UnitsType } from "../../../types/units.ts";
import { WeatherData, WeatherDTO } from "../../../types/weather.ts";
import { TEN_MINUTES } from "../../../../../utils/constants.ts";

export const useFetchWeatherData = (
  location: LocationType,
  units: UnitsType,
) => {
  const query = useQuery({
    queryKey: ["weather", units, location.lat, location.lon],
    queryFn: () =>
      fetchWeatherData(location, units).then((res) => {
        return mapWeatherData(res, units);
      }),
    staleTime: TEN_MINUTES, // 10 minutes
    retry: 1,
  });
  return {
    data: query.data || null,
    isError: query.isError,
    isLoading: query.isLoading,
    isSuccess: query.isSuccess,
    error: query.error,
    refetch: async () => await query.refetch(),
  };
};

export const mapWeatherData = (
  data: WeatherDTO,
  units: UnitsType,
): WeatherData => {
  console.log("Weather data response data\n", data);
  return {
    currentTemp: formatTemp(data.main.temp),
    humidity: data.main.humidity,
    visibility: data.visibility,
    sunset: data.sys.sunset,
    sunrise: data.sys.sunrise,
    highestTemp: formatTemp(data.main.temp_max),
    lowestTemp: formatTemp(data.main.temp_min),
    name: data.name,
    units: getUnitsDisplayType(units),
    description: data.weather[0].main,
    icon: data.weather[0].icon,
  };
};

const formatTemp = (rawTemp: number) => parseFloat(rawTemp.toFixed(1));

const getUnitsDisplayType = (units: UnitsType) => {
  return units === "metric" ? "°C" : "F";
};
