import { useNavigate } from "react-router-dom";
import React from "react";
import { LocationType } from "./types/location.ts";
import { UnitsType } from "./types/units.ts";
import { WeatherData } from "./types/weather.ts";
import { useFetchWeatherData } from "./hooks/useFetchWeatherData.tsx";

export const WeatherCard = ({
  location,
  units = "metric",
}: {
  location: LocationType;
  units?: UnitsType;
}) => {
  const { data, isError, isLoading } = useFetchWeatherData(location, units);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <li className={styles.loadingCard} aria-label="Loading weather data">
        <div className={styles.loader} role="status" aria-label="Loading" />
      </li>
    );
  }

  if (isError) {
    const isUsersCurrentLocation = location.name === "My Location";
    return (
      <li className={styles.errorCard} aria-label="Error loading weather data">
        Error fetching{" "}
        {isUsersCurrentLocation ? "current location" : "weather data"}
      </li>
    );
  }

  if (!data) {
    return null;
  }

  const handleCardClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    return navigate(`/${data.name}`, { state: data } as { state: WeatherData });
  };

  return (
    <li
      className={styles.weatherCard}
      aria-label={`Weather for ${location.name}`}
    >
      <h2 className={styles.title}>{location.name}</h2>
      <p className={styles.degrees}>
        {data.currentTemp} {data.units}
      </p>
      <a
        className={styles.clickableLink}
        onClick={handleCardClick}
        aria-label={`View details for ${location.name}`}
      />
    </li>
  );
};
