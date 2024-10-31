import { useNavigate } from "react-router-dom";
import React from "react";
import { LocationType } from "../../types/location.ts";
import { UnitsType } from "../../types/units.ts";
import { WeatherData } from "../../types/weather.ts";
import { useFetchWeatherData } from "./hooks/useFetchWeatherData.tsx";
import styles from "./weatherCard.module.css";
import { getWeatherCardErrorMessage } from "./helper.ts";
import { Spinner } from "../../../../components/ui/spinner/spinner.tsx";
import {
  OPEN_WEATHER_ICON_FORMAT,
  OPEN_WEATHER_ICON_URL,
} from "../../../../utils/urls.ts";

export const WeatherCard = ({
  location,
  units = "metric",
}: {
  location: LocationType;
  units?: UnitsType;
}) => {
  const { data, isError, isLoading, refetch } = useFetchWeatherData(
    location,
    units,
  );
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <li className={styles.loadingCard} aria-label="Loading weather data">
        <Spinner />
      </li>
    );
  }

  if (isError) {
    const { errorMessage, showRefreshButton } =
      getWeatherCardErrorMessage(location);
    return (
      <li className={styles.errorCard} aria-label="Error loading weather data">
        <p>{errorMessage}</p>
        {showRefreshButton && <button onClick={refetch}>Try again</button>}
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
      <div className={styles.degreeWrapper}>
        <p className={styles.degrees}>
          {data.currentTemp} {data.units}
        </p>

        <img
          alt="Weather preview icon"
          aria-hidden={true}
          src={`${OPEN_WEATHER_ICON_URL}/${data.icon}${OPEN_WEATHER_ICON_FORMAT}`}
          className={styles.weatherImage}
          width={25}
          height={25}
          fetchPriority={"high"}
        />
      </div>
      <a
        className={styles.clickableLink}
        onClick={handleCardClick}
        aria-label={`View details for ${location.name}`}
      />
    </li>
  );
};
