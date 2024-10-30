import { describe, expect, it } from "vitest";
import { mapWeatherData } from "../hooks/useFetchWeatherData.tsx";

describe("Weather Card Fetching", () => {
  it("Should map the weather data correctly", () => {
    const mockData = {
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      main: {
        temp: 25.5,
        temp_min: 20.0,
        temp_max: 30.0,
        humidity: 40,
      },
      visibility: 10000,
      sys: {
        sunrise: 1627893600,
        sunset: 1627944000,
      },
      name: "Sample City",
    };
    const resultData = {
      currentTemp: 25.5,
      humidity: 40,
      visibility: 10000,
      sunset: 1627944000,
      sunrise: 1627893600,
      highestTemp: 30,
      lowestTemp: 20,
      name: "Sample City",
      units: "°C",
      description: "Clear",
    };

    const mapped = mapWeatherData(mockData, "metric");

    expect(mapped).toEqual(resultData);
  });
});
